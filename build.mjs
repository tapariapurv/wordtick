// Builds gdocs/Sidebar.html (Apps Script can't load local files) from web/style.css + web/core.js.
import {readFileSync as r,writeFileSync as w} from 'fs';
w('gdocs/Sidebar.html',`<!doctype html><html><head><base target="_top"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${r('web/style.css','utf8')}</style></head><body><div id="app"></div>
<script>${r('web/core.js','utf8').replace(/if\(typeof module[^\n]*/,'')}
WP.mount(document.getElementById('app'),{mini:true,source:function(w,set){google.script.run.withSuccessHandler(set).getText(w)}});</script></body></html>`);
