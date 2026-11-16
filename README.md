# Steven Solarz

A one-page landing site built with React and Vite: a big animated name and a "Get Tickets" button.

## Change the ticket link

Open `src/config.js` and set `TICKETS_URL` to your ticketing page:

```js
export const TICKETS_URL = "https://your-ticket-page.com";
```

The same file also holds the button label, the name, the scrolling tape text and the sticker text.

## Run it

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build into dist/
npm run preview  # serve the built site locally
```

## Host it

Run `npm run build` and upload the `dist/` folder to any static host. On Netlify or Vercel, use the build command `npm run build` and the output folder `dist`.

## Where things live

- `src/config.js`: the link and all the text
- `src/components/`: Name (animated letters), TicketButton, Sticker, Tapes, Background
- `src/styles.css`: all styling and animation
