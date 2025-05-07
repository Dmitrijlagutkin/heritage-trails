import { getRelativeLocaleUrl } from 'astro:i18n';

interface Params {
  locale: string;
}

export function getStaticPaths() {
  return [
    { params: { locale: 'en' } },
    { params: { locale: 'ua' } },
    { params: { locale: 'es' } }
  ];
}

export async function GET({ params }: { params: Params }) {
  const { locale } = params;
  const baseUrl = 'https://heritage-trails.com';
  
  // Define your site's pages
  const pages = [
    '', // Home page
  ];

  const urls = pages.map(page => ({
    loc: `${baseUrl}${getRelativeLocaleUrl(locale, page)}`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: page === '' ? '1.0' : '0.8',
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.map(url => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <changefreq>${url.changefreq}</changefreq>
          <priority>${url.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 