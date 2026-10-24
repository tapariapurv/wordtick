# Wordtick
Words → time calculator. `web/` = website (+ `web/word/` Word add-in, replace `SITE` in manifest.xml with the deployed domain). `gdocs/` = Google Docs add-on (Apps Script). The Docs sidebar loads `core.js`/`style.css` from wordtick.vercel.app, so a Vercel deploy updates all three. `node web/core.test.js` to test.
