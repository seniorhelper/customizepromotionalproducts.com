/* Gnomad Promotions site guide "Gus the Gnome" v1 (Sept 2026). One file: injects markup + CSS, matches logo colors, remembers closed state. */
(function(){
var CFG={name:'Gus',brand:'Gnomad Promotions',phone:'972-476-0353',tel:'+19724760353',quote:'/contact.html',email:'sales@gnomadpromotions.com'};
var d=document;if(d.getElementById('gnm'))return;
var RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
/* ---------- brand color from the logo ---------- */
function pickColors(cb){var im=[].slice.call(d.querySelectorAll('header img,.logo img,img')).filter(function(i){return /gnom|logo/i.test((i.src||'')+(i.alt||''))})[0];if(!im)return cb();function run(){try{var c=d.createElement('canvas'),w=64,h=Math.max(1,Math.round(64*im.naturalHeight/im.naturalWidth));c.width=w;c.height=h;var x=c.getContext('2d');x.drawImage(im,0,0,w,h);var p=x.getImageData(0,0,w,h).data,b={};for(var i=0;i<p.length;i+=4){if(p[i+3]<200)continue;var r=p[i],g=p[i+1],bl=p[i+2],mx=Math.max(r,g,bl),mn=Math.min(r,g,bl);if(mx-mn<60||mx<60||mn>225)continue;var k=(r>>5)+','+(g>>5)+','+(bl>>5);b[k]=(b[k]||0)+1}var ks=Object.keys(b).sort(function(a,z){return b[z]-b[a]});if(ks.length){var f=function(k){return k.split(',').map(function(v){return v*32+16})};var a=f(ks[0]),s=ks[1]?f(ks[1]):a;var R=d.documentElement.style;R.setProperty('--gnm-a','rgb('+a+')');R.setProperty('--gnm-b','rgb('+s+')')}}catch(e){}cb()}if(im.complete&&im.naturalWidth)run();else{im.addEventListener('load',run);setTimeout(cb,1500)}}
/* ---------- gnome art ---------- */
var HAT='<path class="hat" d="M30 58 Q60 -8 92 20 Q70 18 84 58 Z" fill="var(--gnm-a)"/><path d="M84 58 Q70 18 92 20 Q96 24 98 30 Q80 30 90 58Z" fill="rgba(0,0,0,.18)"/><ellipse cx="57" cy="58" rx="31" ry="7" fill="var(--gnm-a)"/><ellipse cx="57" cy="57" rx="31" ry="4" fill="rgba(255,255,255,.18)"/><circle cx="95" cy="24" r="6" fill="#fff"/>';
var FACE='<ellipse cx="57" cy="74" rx="22" ry="18" fill="#f2c6a0"/><circle class="eye" cx="49" cy="70" r="2.6" fill="#1f2937"/><circle class="eye" cx="65" cy="70" r="2.6" fill="#1f2937"/><path d="M47 64 q3-3 6 0 M61 64 q3-3 6 0" stroke="#e8e8e8" stroke-width="2.4" fill="none" stroke-linecap="round"/><ellipse cx="57" cy="80" rx="8" ry="7" fill="#e79c87"/><path d="M33 80 Q34 118 57 124 Q80 118 81 80 Q72 92 57 90 Q42 92 33 80Z" fill="#f4f4f2"/><path d="M40 86 q8 22 17 30 M74 86 q-8 22 -17 30 M57 92 v28" stroke="#dcdcd6" stroke-width="1.6" fill="none"/>';
var BODY='<path d="M28 118 Q30 100 40 96 L74 96 Q84 100 86 118 L90 150 L24 150Z" fill="var(--gnm-b)"/><rect x="24" y="126" width="66" height="7" fill="#3b2a1a"/><rect x="52" y="125" width="10" height="9" rx="2" fill="#e8b84a"/><path class="arm" d="M84 104 q18 6 18 22" stroke="var(--gnm-b)" stroke-width="10" fill="none" stroke-linecap="round"/><circle class="arm" cx="102" cy="128" r="6" fill="#f2c6a0"/><path d="M30 104 q-14 10 -12 26" stroke="var(--gnm-b)" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="18" cy="132" r="6" fill="#f2c6a0"/><ellipse cx="42" cy="154" rx="14" ry="6" fill="#3b2a1a"/><ellipse cx="72" cy="154" rx="14" ry="6" fill="#3b2a1a"/>';
var FULL='<svg viewBox="0 0 120 162" aria-hidden="true">'+BODY+FACE+HAT+'</svg>';
var HEAD='<svg viewBox="22 -4 80 100" aria-hidden="true">'+FACE+HAT+'</svg>';
/* ---------- css ---------- */
var css=':root{--gnm-a:#c8372d;--gnm-b:#1f5f3a;--gnm-ink:#1c2430}#gnm{position:fixed;right:14px;bottom:0;z-index:99990;font:16px/1.45 system-ui,-apple-system,Segoe UI,sans-serif;color:var(--gnm-ink)}'+
'#gnm .stage{position:relative;width:150px;height:200px}#gnm .hole{position:absolute;left:10px;right:10px;bottom:8px;height:26px;border-radius:50%;background:radial-gradient(ellipse at 50% 40%,#2b1d12,#5a3d24 60%,rgba(90,61,36,0) 72%);transform:scaleX(0);animation:gnmHole .5s .3s ease-out forwards}'+
'#gnm .guy{position:absolute;left:15px;bottom:14px;width:120px;height:162px;cursor:pointer;transform:translateY(170px);clip-path:inset(-60px -40px 0 -40px);animation:gnmPop 1.1s 1s cubic-bezier(.2,1.6,.4,1) forwards;filter:drop-shadow(0 10px 14px rgba(0,0,0,.25))}#gnm .guy svg{width:100%;height:100%;overflow:visible}'+
'#gnm .dirt i{position:absolute;bottom:18px;left:70px;width:8px;height:8px;border-radius:50%;background:#6b4a2b;opacity:0;animation:gnmDirt .9s 1.05s ease-out forwards}'+
'#gnm .hat{transform-origin:57px 58px}#gnm .guy.tip .hat{animation:gnmTip 1.2s ease-in-out}#gnm .guy.blink .eye{transform:scaleY(.1);transform-origin:center;transform-box:fill-box}#gnm .guy.wave .arm{animation:gnmWave 1.4s ease-in-out;transform-origin:84px 104px;transform-box:view-box}'+
'#gnm .bub{position:absolute;right:140px;bottom:120px;width:220px;background:#fff;border-radius:16px 16px 4px 16px;padding:12px 14px;box-shadow:0 14px 34px rgba(0,0,0,.18);border:2px solid var(--gnm-a);font-size:14.5px;opacity:0;transform:translateY(10px) scale(.95);animation:gnmIn .4s 2.3s ease-out forwards;cursor:pointer}#gnm .bub b{color:var(--gnm-a)}#gnm .bub .x{position:absolute;top:-10px;right:-10px;width:26px;height:26px;border-radius:50%;border:0;background:var(--gnm-ink);color:#fff;cursor:pointer;font-size:15px;line-height:26px;padding:0}'+
'#gnm .tag{display:none;flex-direction:column;align-items:center;gap:2px;background:none;border:0;cursor:pointer;margin:0 0 16px}#gnm .tag .av{width:66px;height:66px;border-radius:50%;background:#fff;border:3px solid var(--gnm-a);box-shadow:0 10px 24px rgba(0,0,0,.28);overflow:hidden}#gnm .tag .av svg{width:100%;height:100%}#gnm .tag b{font-weight:900;color:var(--gnm-ink);text-shadow:0 0 6px #fff,0 0 10px #fff;font-size:14px}'+
'#gnm.mini .stage{display:none}#gnm.mini .tag{display:flex}'+
'#gnm .panel{display:none;position:fixed;right:14px;bottom:14px;width:min(380px,calc(100vw - 28px));height:min(560px,calc(100vh - 28px));background:#fff;border-radius:18px;box-shadow:0 24px 70px rgba(0,0,0,.3);flex-direction:column;overflow:hidden;border:2px solid var(--gnm-a)}#gnm.open .panel{display:flex}#gnm.open .stage,#gnm.open .tag{display:none!important}'+
'#gnm .hd{display:flex;gap:10px;align-items:center;padding:12px 14px;background:var(--gnm-a);color:#fff}#gnm .hd .av{width:44px;height:44px;border-radius:50%;background:#fff;overflow:hidden;flex:none}#gnm .hd .av svg{width:100%;height:100%}#gnm .hd small{display:block;opacity:.9}#gnm .hd button{margin-left:auto;background:rgba(255,255,255,.2);border:0;color:#fff;width:36px;height:36px;border-radius:10px;font-size:20px;cursor:pointer}'+
'#gnm .log{flex:1;overflow:auto;padding:14px;background:#f6f7f5;display:flex;flex-direction:column;gap:10px}#gnm .m{max-width:86%;padding:10px 13px;border-radius:14px;white-space:pre-line}#gnm .m.a{background:#fff;border:1px solid #e3e6e1;align-self:flex-start;border-bottom-left-radius:4px}#gnm .m.u{background:var(--gnm-b);color:#fff;align-self:flex-end;border-bottom-right-radius:4px}#gnm .m a{color:var(--gnm-a);font-weight:800}'+
'#gnm .chips{display:flex;flex-wrap:wrap;gap:6px;padding:8px 14px;background:#f6f7f5}#gnm .chips button{border:1.5px solid var(--gnm-b);color:var(--gnm-b);background:#fff;border-radius:999px;padding:6px 12px;font-weight:700;font-size:13.5px;cursor:pointer}#gnm .chips button:hover{background:var(--gnm-b);color:#fff}'+
'#gnm form{display:flex;gap:8px;padding:10px;border-top:1px solid #e3e6e1}#gnm input{flex:1;padding:11px 12px;border:1.5px solid #cfd5cc;border-radius:10px;font:inherit;font-size:16px}#gnm form button{background:var(--gnm-a);color:#fff;border:0;border-radius:10px;padding:0 16px;font-weight:800;cursor:pointer}'+
'@keyframes gnmHole{to{transform:scaleX(1)}}@keyframes gnmPop{0%{transform:translateY(170px)}70%{transform:translateY(-10px)}100%{transform:translateY(0)}}@keyframes gnmIn{to{opacity:1;transform:none}}@keyframes gnmDirt{0%{opacity:1;transform:translate(0,0)}100%{opacity:0;transform:translate(var(--dx),-60px)}}@keyframes gnmTip{0%,100%{transform:rotate(0)}40%{transform:rotate(-14deg) translateY(-6px)}}@keyframes gnmWave{0%,100%{transform:rotate(0)}30%{transform:rotate(-40deg)}60%{transform:rotate(-20deg)}80%{transform:rotate(-40deg)}}'+
'@media(max-width:600px){#gnm .stage{width:110px;height:150px}#gnm .guy{width:88px;height:119px;left:11px}#gnm .bub{right:100px;bottom:80px;width:calc(100vw - 130px);max-width:220px;font-size:13.5px}}'+
'@media(prefers-reduced-motion:reduce){#gnm *{animation:none!important}#gnm .guy{transform:none}#gnm .bub{opacity:1;transform:none}#gnm .hole{transform:none}}'+
'@media print{#gnm{display:none}}';
var st=d.createElement('style');st.textContent=css;d.head.appendChild(st);
/* ---------- markup ---------- */
var W=d.createElement('div');W.id='gnm';
W.innerHTML='<div class="stage"><div class="hole"></div><div class="dirt">'+[-40,-18,10,30,48].map(function(x,i){return '<i style="--dx:'+x+'px;animation-delay:'+(1.05+i*.04)+'s"></i>'}).join('')+'</div><div class="guy" role="button" tabindex="0" aria-label="Chat with '+CFG.name+' the gnome">'+FULL+'</div><div class="bub" role="button" tabindex="0"><button class="x" type="button" aria-label="Hide">&times;</button><b>Howdy, I\'m '+CFG.name+'!</b> Need logo pens, tumblers, tees or trade show swag? I\'ll dig it up fast.</div></div>'+
'<button type="button" class="tag" aria-label="Chat with '+CFG.name+'"><span class="av">'+HEAD+'</span><b>Ask '+CFG.name+'</b></button>'+
'<div class="panel" role="dialog" aria-label="Chat with '+CFG.name+'"><div class="hd"><span class="av">'+HEAD+'</span><div><b>'+CFG.name+' the Gnome</b><small>'+CFG.brand+' guide</small></div><button type="button" class="cl" aria-label="Close">&times;</button></div><div class="log"></div><div class="chips"></div><form><input placeholder="Ask about products, pricing, rush orders" aria-label="Your question" autocomplete="off"><button type="submit">Send</button></form></div>';
function mount(){d.body.appendChild(W);wire()}
/* ---------- knowledge ---------- */
function linkFor(words){var as=[].slice.call(d.querySelectorAll('a[href]'));for(var i=0;i<as.length;i++){var t=(as[i].textContent||'').toLowerCase();for(var j=0;j<words.length;j++)if(t.indexOf(words[j])>-1&&as[i].href.indexOf('#')<0)return as[i].getAttribute('href')}return null}
function L(words,label){var h=linkFor(words);return h?'<a href="'+h+'">'+label+' &rarr;</a>':''}
var PH='<a href="tel:'+CFG.tel+'">'+CFG.phone+'</a>',Q='<a href="'+(linkFor(['quote','contact'])||CFG.quote)+'">Request a quote &rarr;</a>';
var CAT=[
 [/pen|pencil|writing|stylus|highlighter/,'Pens are the #1 promo item for a reason: cheap per piece, used daily, seen by everyone. Plastic click pens for handouts, metal or soft-touch for clients, stylus pens for tech crowds.',['pen'],'Custom pens'],
 [/mug|tumbler|drinkware|bottle|cup|yeti|koozie|thermos|glass/,'Drinkware sticks around for years: tumblers, insulated bottles, mugs and koozies, laser-engraved or full-color printed.',['drink'],'Custom drinkware'],
 [/bag|tote|backpack|duffel|cooler/,'Bags are walking billboards. Totes for events, backpacks and duffels for staff, coolers for summer promos.',['bag','tote'],'Bags & totes'],
 [/tent|canopy|banner|table ?cover|event|flag|booth display/,'Event gear that makes your booth pop: canopy tents, table covers, feather flags and banners, all in your brand colors.',['tent','event'],'Tents & event gear'],
 [/shirt|tee|apparel|hoodie|hat|cap|polo|jacket|embroid|screen ?print|uniform/,'Apparel from tees and hoodies to polos and caps, screen printed or embroidered. Great for staff uniforms, teams and giveaways.',['apparel'],'Custom apparel'],
 [/gift|executive|client|holiday|corporate|thank you|award|recognition/,'Corporate gifts that feel personal: engraved tech, premium drinkware, gift sets and recognition awards for clients and employees.',['gift','corporate'],'Corporate gifts'],
 [/trade ?show|expo|conference|giveaway|swag|handout|booth/,'Trade show giveaways people actually keep: lip balm, chargers, stress balls, lanyards, pens and totes. Tell me your show date and headcount and we\'ll build a kit.',['trade'],'Trade show giveaways']];
var A={
 hi:'<b>Howdy!</b> I\'m '+CFG.name+', the '+CFG.brand+' gnome. I dig up the right promo products for your brand. What are you shopping for?',
 price:'Pricing depends on the item, quantity, imprint colors and method. The more you order, the lower the per-piece price. Send the item, quantity and in-hands date and we\'ll quote it fast. '+Q,
 min:'Minimums vary by product, from a handful on some apparel and awards to a few hundred on pens and giveaways. Tell me what you have in mind and I\'ll find low-minimum options.',
 rush:'In a hurry? Many items have rush production. Tell us your in-hands date first and we\'ll only show products that can make it. Call '+PH+' for the fastest answer.',
 time:'Typical production is about 5 to 10 business days after proof approval, plus shipping. Rush options exist on many items.',
 art:'Send your logo in any format. Vector (AI, EPS, PDF, SVG) is ideal, but our team can clean up a JPG or PNG. You approve a free digital proof before anything prints.',
 estore:'We build branded company e-stores: your team or members order their own gear, you control the catalog and budget, and we handle fulfillment.',
 ship:'We ship nationwide and can split shipments to multiple locations or events.',
 contact:'Easiest way: call '+PH+' or '+Q,
 who:CFG.brand+' is a creative promotional products agency: promo products, branded apparel, e-stores and recognition awards for businesses, schools, nonprofits and events.',
 joke:'Why did the gnome start a promo company? He wanted his logo on everything... and he\'s short on patience for plain mugs.',
 thanks:'Anytime! Holler if you need anything else. I\'ll be in the garden.',
 fallback:'Good question! A real person can answer that one fast: '+PH+'. Or pick a category below and I\'ll point the way.'};
function route(t){t=t.toLowerCase();
 if(/^(hi|hello|hey|howdy|yo|sup)\b/.test(t))return A.hi;
 for(var i=0;i<CAT.length;i++)if(CAT[i][0].test(t))return CAT[i][1]+'\n'+(L(CAT[i][2],CAT[i][3])||'')+' '+Q;
 if(/price|cost|how much|cheap|budget|quote|estimate/.test(t))return A.price;
 if(/minimum|min |moq|how many|small order|low quantity/.test(t))return A.min;
 if(/rush|asap|urgent|tomorrow|this week|fast|hurry/.test(t))return A.rush;
 if(/how long|turnaround|production time|lead time|when/.test(t))return A.time;
 if(/logo|art|design|proof|vector|file/.test(t))return A.art;
 if(/e-?store|company store|online store|webstore/.test(t))return A.estore;
 if(/ship|deliver|freight/.test(t))return A.ship;
 if(/call|phone|contact|talk|human|person|email/.test(t))return A.contact;
 if(/who are you|about|what do you do|company/.test(t))return A.who;
 if(/joke|funny|laugh/.test(t))return A.joke;
 if(/thank/.test(t))return A.thanks;
 var ph=t.replace(/\D/g,'');if(ph.length>=10&&ph.length<=11)return 'Got it! A real person will call you at '+t+' soon. (If it\'s urgent, call '+PH+'.)';
 return A.fallback}
var CHIPS=['Pens','Drinkware','Apparel','Trade show','Corporate gifts','Pricing','Rush order'];
/* ---------- wiring ---------- */
function store(v){try{v?localStorage.setItem('gnmMini','1'):localStorage.removeItem('gnmMini')}catch(e){}}
function wire(){var guy=W.querySelector('.guy'),bub=W.querySelector('.bub'),log=W.querySelector('.log'),chips=W.querySelector('.chips'),form=W.querySelector('form'),inp=form.querySelector('input');
 function add(h,w){var m=d.createElement('div');m.className='m '+w;m.innerHTML=h;log.appendChild(m);log.scrollTop=log.scrollHeight}
 function send(t){add(t.replace(/</g,'&lt;'),'u');var r=route(t);setTimeout(function(){add(r,'a')},350)}
 function open(){W.classList.add('open');W.classList.remove('mini');store(false);if(!log.children.length){add(A.hi,'a');CHIPS.forEach(function(c){var b=d.createElement('button');b.type='button';b.textContent=c;b.onclick=function(){send(c)};chips.appendChild(b)})}setTimeout(function(){inp.focus()},60)}
 function mini(){W.classList.remove('open');W.classList.add('mini');store(true)}
 guy.onclick=open;bub.onclick=function(e){if(!e.target.classList.contains('x'))open()};guy.onkeydown=function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}};
 bub.querySelector('.x').onclick=function(e){e.stopPropagation();mini()};W.querySelector('.cl').onclick=mini;W.querySelector('.tag').onclick=open;
 form.onsubmit=function(e){e.preventDefault();var t=inp.value.trim();if(t){inp.value='';send(t)}};
 d.addEventListener('keydown',function(e){if(e.key==='Escape'&&W.classList.contains('open'))mini()});
 try{if(localStorage.getItem('gnmMini'))W.classList.add('mini')}catch(e){}
 if(!RM){setTimeout(function(){guy.classList.add('tip');setTimeout(function(){guy.classList.remove('tip')},1300)},2200);
  (function blink(){if(!d.hidden){guy.classList.add('blink');setTimeout(function(){guy.classList.remove('blink')},160)}setTimeout(blink,3500+Math.random()*3500)})();
  setInterval(function(){if(!W.classList.contains('open')&&!W.classList.contains('mini')){guy.classList.add('wave');setTimeout(function(){guy.classList.remove('wave')},1500)}},24000)}
}
function go(){pickColors(mount)}
if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',go);else go();
})();
