import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const privatePath = ["/me"];
const authPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken")?.value;
  if (privatePath.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //Đã đăng nhập k cho vào login register
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL("/me", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [...privatePath, ...authPaths],
};
