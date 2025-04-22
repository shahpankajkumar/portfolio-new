export default function sitemap() {
  const baseUrl = 'https://pankaj.dev';
  
  const routes = [
    '',
    '/projects',
    '/blog',
    '/contact',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  }));

  return routes;
}