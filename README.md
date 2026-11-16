# Steven Solarz

A one-page landing site: a big animated name and a "Get Tickets" button.

## Change the ticket link

Open `index.html`, find the line marked `🎟️ CHANGE YOUR TICKET LINK HERE`, and replace `href="#"` with your ticketing URL:

```html
<a class="cta" id="tickets" href="https://your-ticket-page.com" target="_blank" rel="noopener">
```

The button text ("Get Tickets") is on the lines just below it. The scrolling tape text is near the bottom of the file, in the `fill(...)` calls.

## Preview / host

Open `index.html` in a browser. It's a single static file with no build step, so it works on GitHub Pages, Netlify or Vercel as is.
