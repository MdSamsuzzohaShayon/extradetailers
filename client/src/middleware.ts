import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { EUserRole } from './types';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('Middleware:', request.nextUrl.pathname);
  

   // Define an array of protected pages
   const protectedPages = ["/dashboard", "/admin"]; 

  // Check to access protected pages
  const {pathname} = request.nextUrl;
  // Instead of checking one protedtected page /dashboard, check list/array of pages
  if (protectedPages.some((page) => pathname.startsWith(page))) {
    // It is not working with secure true
    // Get cookies in here 
    const cookies = request.cookies;
    // Get access_token from cookies
    const access_token = cookies.get('access_token')?.value;
    const user_role = cookies.get('user_role')?.value;

    if (!access_token || !user_role) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }




    // Check admin user
    if (user_role === EUserRole.ADMIN) {
      if(pathname.startsWith('/admin')) { 
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/admin', request.url));
      // Check customer and detailer user
    } else if (user_role === EUserRole.CUSTOMER || user_role === EUserRole.DETAILER) {
      if(pathname.startsWith('/dashboard')) { 
        return NextResponse.next();
      }
      return NextResponse.redirect(new URL('/dashboard', request.url));
    } 
  }


  return NextResponse.next();
  //   return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}