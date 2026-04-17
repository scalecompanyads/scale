import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';

const blogRoot = path.resolve('src/content/blog');
const coverNames = ['cover.webp', 'cover.png', 'cover.jpg', 'cover.jpeg', 'cover.avif'];

function toAltFromSlug(slug) {
  return `Capa do artigo ${slug.replaceAll('-', ' ')}`;
}

async function isDirectory(targetPath) {
  const info = await stat(targetPath);
  return info.isDirectory();
}

function upsertFrontmatter(mdContent, slug, coverName) {
  const match = mdContent.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return { changed: false, content: mdContent };

  const frontmatterBody = match[1];
  const original = frontmatterBody;
  let updated = frontmatterBody;

  const coverImageLine = `coverImage: ./${coverName}`;
  if (/^coverImage:/m.test(updated)) {
    updated = updated.replace(/^coverImage:.*$/m, coverImageLine);
  } else {
    updated += `\n${coverImageLine}`;
  }

  if (!/^coverImageAlt:/m.test(updated)) {
    updated += `\ncoverImageAlt: "${toAltFromSlug(slug)}"`;
  }

  if (updated === original) return { changed: false, content: mdContent };

  const newContent = mdContent.replace(
    /^---\n[\s\S]*?\n---\n/,
    `---\n${updated}\n---\n`
  );
  return { changed: true, content: newContent };
}

async function main() {
  const entries = await readdir(blogRoot, { withFileTypes: true });
  let changedCount = 0;

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name.startsWith('_')) continue;

    const articleDir = path.join(blogRoot, entry.name);
    if (!(await isDirectory(articleDir))) continue;

    const files = await readdir(articleDir);
    const coverName = coverNames.find((name) => files.includes(name));
    if (!coverName || !files.includes('index.md')) continue;

    const indexPath = path.join(articleDir, 'index.md');
    const raw = await readFile(indexPath, 'utf8');
    const { changed, content } = upsertFrontmatter(raw, entry.name, coverName);

    if (changed) {
      await writeFile(indexPath, content, 'utf8');
      changedCount += 1;
      console.log(`updated: ${path.relative(process.cwd(), indexPath)}`);
    }
  }

  console.log(`done: ${changedCount} article(s) updated`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
