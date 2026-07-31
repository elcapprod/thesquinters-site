# Never Surrender by The Squinters

Astro-powered static website for **Never Surrender by The Squinters**, hosted on Cloudflare Pages at `https://thesquinters.com/`.

## What is included

- Live homepage with latest episode, host cards, ratings and social links
- Episodes archive and individual pages for episodes 126–135
- About and Contact pages
- Spotify episode embeds
- Podcast and episode structured data
- Sitemap, robots.txt, social metadata and a custom 404 page
- Static output suitable for Cloudflare Pages

## Add the project to the empty GitHub repository

The easiest ongoing workflow is GitHub Desktop:

1. Install GitHub Desktop and sign in.
2. Clone the empty `thesquinters-site` repository to your computer.
3. Copy **the contents of this folder** into the cloned repository folder.
4. In GitHub Desktop, enter a commit summary such as `Initial Astro website`.
5. Select **Commit to main**, then **Push origin**.

You can also upload through the GitHub website using **Add file → Upload files**, but GitHub Desktop will be easier for future updates.

## Connect the repository to Cloudflare Pages

Create a new Pages project and choose **Import an existing Git repository**.

Use these settings:

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: leave blank
- Production branch: `main`

The project contains `.node-version` set to Node `22.16.0`.

Keep the existing Direct Upload site live until the new `pages.dev` preview has been checked. Then add `thesquinters.com` under **Custom domains** on the new project.

## Local preview

From the project folder:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

To create the production build:

```bash
npm run build
npm run preview
```

## Replace the host placeholders

Replace these files directly—no code changes are required:

```text
public/assets/hosts/needles.jpg
public/assets/hosts/sparrow.jpg
public/assets/hosts/ragnar-lothbrok.jpg
public/assets/hosts/orca.jpg
```

Recommended: 1200 × 1200 pixels, square JPG, sRGB, ideally under 1.5 MB.

## Update ratings

Edit one location only:

```text
src/data/site.ts
```

Look for:

```ts
ratings: {
  apple: '4.6',
  spotify: '5'
}
```

The ratings are not fetched automatically because Apple Podcasts and Spotify do not provide dependable public rating fields for this use.

## Add or edit episodes

All episode data is stored in:

```text
src/data/episodes.ts
```

The archive, homepage feature and individual episode pages are generated automatically from that array. Keep the newest episode at the top.

Required fields:

- `episodeNumber`
- `year`
- `round`
- `title`
- `slug`
- `summary`
- `body`
- `spotifyUrl`
- `appleUrl`

The newest episode can also include `published` and `publishedLabel`.

## Main site settings

Edit contact details, ratings, social links and support URL in:

```text
src/data/site.ts
```

Edit current and former hosts in:

```text
src/data/hosts.ts
```

## Important

Do not upload `node_modules` or `dist` to GitHub. They are intentionally excluded by `.gitignore` and Cloudflare creates the production `dist` folder during deployment.
