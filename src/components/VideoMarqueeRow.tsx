import Image from "next/image";

type VideoMarqueeRowProps = {
  items: { src: string; alt: string }[];
  reverse?: boolean;
  durationSeconds?: number;
  offset?: number;
};

export default function VideoMarqueeRow({
  items,
  reverse = false,
  durationSeconds = 34,
  offset = 0,
}: VideoMarqueeRowProps) {
  // Quatro cards por faixa mantém o movimento leve; os offsets das três
  // faixas garantem que todas as imagens apareçam no conjunto.
  const rotatedItems = [...items.slice(offset), ...items.slice(0, offset)].slice(0, 4);
  const doubled = [...rotatedItems, ...rotatedItems];

  return (
    <div className="overflow-hidden [contain:paint]">
      <div
        className={`flex w-max transform-gpu gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${durationSeconds}s`, willChange: "transform" }}
      >
        {doubled.map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            className="relative aspect-[16/9] h-44 shrink-0 overflow-hidden bg-neutral-900 sm:h-56 lg:h-72"
          >
            <Image
              src={item.src.replace("/videos-lps/", "/video-thumbnails/").replace(".mp4", ".webp")}
              alt={index < rotatedItems.length ? item.alt : ""}
              fill
              quality={72}
              sizes="(min-width: 1024px) 512px, (min-width: 640px) 398px, 313px"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
