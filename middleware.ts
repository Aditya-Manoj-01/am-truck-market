import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['hi', 'en', 'mr', 'te', 'kn', 'gu', 'ur'],
  defaultLocale: 'hi'
});

export const config = {
  matcher: ['/', '/(hi|en|mr|te|kn|gu|ur)/:path*']
};