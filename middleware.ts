import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware({ nextUrl: url }: NextRequest) {
  const country = 'US'

  url.searchParams.set('country', country)
  console.log('Country: ', country)

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    '/', // Required when i18n is enabled, otherwise middleware won't be executed on index route
    '/((?!api|_next/static|_next/image|favicon.png).*)'
  ]
}
