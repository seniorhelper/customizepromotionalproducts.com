GNOMAD PROMOTIONS - Gus the Gnome chatbot + hero animation (drop-in, Sept 2026)

INSTALL (2 minutes)
1. Upload the /assets/ folder to the site root (next to index.html).
2. Paste these two lines right before </body> on every page (or once in the shared footer/template):

   <script src="/assets/gnome-hero.js?v=1" defer></script>
   <script src="/assets/gnome.js?v=1" defer></script>

   Want the chatbot but not the hero animation on a page? Leave out the first line on that page.

WHAT IT DOES
- Gus pops out of a hole in the bottom-right corner, tips his hat, blinks, waves every ~25s.
- His hat and coat automatically use the two main colors from the gnome logo in the header (reads any <img> with "gnom" or "logo" in its src/alt).
- Tap him for chat: pens, drinkware, apparel, bags, tents/event gear, corporate gifts, trade show, pricing, minimums, rush, turnaround, artwork/proofs, e-stores, shipping, callback by phone number.
- Category answers link to whatever matching page is in the site nav (finds links by their text), plus the quote/contact link.
- Close it and he shrinks to a floating head with "Ask Gus" that stays that way page to page.
- Hero: animated brand-color gradient, floating white promo-item icons, headline rises in. Attaches to the first .hero section (or first <section>). Respects reduced-motion.

EDIT IN ONE PLACE (top of assets/gnome.js, the CFG line)
- name, brand, phone (currently 214-733-3873 from their public listing - CONFIRM), quote page path (/contact/).
