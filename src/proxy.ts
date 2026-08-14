import { NextRequest, NextResponse, userAgent } from "next/server";

const COOKIE_NAME = "sa_variant";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30;
const VARIANTS = ["scale-advogados", "scale-advogados-3"];

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/scale-advogados") {
    return NextResponse.next();
  }

  if (userAgent(request).isBot) {
    return NextResponse.next();
  }

  const cookieVariant = request.cookies.get(COOKIE_NAME)?.value;
  const variant =
    cookieVariant && VARIANTS.includes(cookieVariant)
      ? cookieVariant
      : VARIANTS[Math.floor(Math.random() * VARIANTS.length)];

  let response: NextResponse;
  if (variant === "scale-advogados-3") {
    const rewriteUrl = new URL("/scale-advogados-3", request.url);
    rewriteUrl.search = request.nextUrl.search;
    response = NextResponse.rewrite(rewriteUrl);
  } else {
    response = NextResponse.next();
  }

  response.cookies.set(COOKIE_NAME, variant, {
    maxAge: COOKIE_MAX_AGE,
    path: "/",
  });

  return response;
}

export const config = {
  matcher: "/scale-advogados",
};
