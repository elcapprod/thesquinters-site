import { episodes } from '../data/episodes';
import { site } from '../data/site';

export const prerender = true;

function url(path: string, lastmod?: string) {
  return `<url><loc>${new URL(path, site.url).toString()}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`;
}

export function GET() {
  const staticPages = ['/', '/episodes/', '/about/', '/contact/'].map(path => url(path));
  const episodePages = episodes.map(episode => url(`/episodes/${episode.slug}/`, episode.published?.slice(0, 10)));
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...staticPages, ...episodePages].join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
