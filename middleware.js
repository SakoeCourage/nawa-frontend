// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req) {
  const url = req.nextUrl.pathname;

  // Apply NextAuth middleware only on `/profile` routes
  //if (url.startsWith("/profile")) {
    //return withAuth()(req);
  //}

  return NextResponse.next();
}
