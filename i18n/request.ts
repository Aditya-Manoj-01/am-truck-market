import { getRequestConfig } from 'next-intl/server';

async function getMessages(locale: string) {
  switch (locale) {
    case 'en': return (await import('../messages/en.json')).default;
    case 'mr': return (await import('../messages/mr.json')).default;
    case 'te': return (await import('../messages/te.json')).default;
    case 'kn': return (await import('../messages/kn.json')).default;
    case 'gu': return (await import('../messages/gu.json')).default;
    case 'ur': return (await import('../messages/ur.json')).default;
    default: return (await import('../messages/hi.json')).default;
  }
}

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale || 'hi';
  return {
    locale,
    messages: await getMessages(locale)
  };
});