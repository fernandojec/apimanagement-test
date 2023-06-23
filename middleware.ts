// export { default } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // console.log("token: ", req.nextauth.token);
    // console.log(req.nextUrl.pathname)
    // if (req.nextUrl.pathname.startsWith("/dashboard") == false && req.nextauth.token == null)
    //   return NextResponse.rewrite(
    //     new URL("/signin?message=You Are Not Authorized!", req.url)
    //   );
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/clients/:path*",
    "/users/:path*",
],
};