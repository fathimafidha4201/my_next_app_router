import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  if (pathname === "/products") {
    const filter = searchParams.get("filter");
    if (filter && filter !== "cheap" && filter !== "expensive") {
      return NextResponse.redirect(new URL("/products", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/products"],
};