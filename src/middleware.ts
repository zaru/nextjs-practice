import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const HOST = "example.com:3000";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");
  const { pathname } = new URL(request.url);
  if (host?.endsWith(`.${HOST}`) && !pathname.startsWith("/_next")) {
    const subdomain = host.replace(`.${HOST}`, "");
    return NextResponse.rewrite(
      new URL(`/subdomain/${subdomain}${pathname}`, request.url),
    );
  }
  return NextResponse.next();
}

export const config = { matcher: "/((?!.*\\.).*)" };
