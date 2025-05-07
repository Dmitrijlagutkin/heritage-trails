export async function GET() {
  const locales = ['en', 'ua', 'es'];
  const baseUrl = 'https://heritage-trails.com';

  const sitemapUrls = locales.map(locale => ({
    loc: `${baseUrl}/sitemap-${locale}.xml`,
    lastmod: new Date().toISOString(),
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapUrls.map(url => `
        <sitemap>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
        </sitemap>
      `).join('')}
    </sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 