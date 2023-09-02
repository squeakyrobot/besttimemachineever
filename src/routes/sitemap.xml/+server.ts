
import type { RequestHandler } from './$types';

export const prerender = true;

export const GET: RequestHandler = async () => {
    // TODO: make this dynamic
    const lastMod = '2023-09-02';

    return new Response(
        `
      <?xml version="1.0" encoding="UTF-8" ?>
      <urlset
        xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="https://www.w3.org/1999/xhtml"
        xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
      >
        <url>
            <loc>https://besttimemachineever.com</loc>
            <lastmod>${lastMod}</lastmod>
        </url>
        <url>
            <loc>https://besttimemachineever.com/about</loc>
            <lastmod>${lastMod}</lastmod>
        </url>
        <url>
        <loc>https://besttimemachineever.com/classic/TimeMachine.html</loc>
            <lastmod>${lastMod}</lastmod>
        </url>
        <url>
            <loc>https://besttimemachineever.com/white-paper.pdf</loc>
            <lastmod>${lastMod}</lastmod>
        </url>
        <url>
            <loc>https://besttimemachineever.com/contact</loc>
            <lastmod>${lastMod}</lastmod>
        </url>
        <url>
            <loc>https://besttimemachineever.com/privacy-policy</loc>
            <lastmod>${lastMod}</lastmod>
        </url>
        <url>
            <loc>https://besttimemachineever.com/terms-of-service</loc>
            <lastmod>${lastMod}</lastmod>
        </url>
      </urlset>`.trim(),
        {
            headers: {
                'Content-Type': 'application/xml'
            }
        }
    );
}