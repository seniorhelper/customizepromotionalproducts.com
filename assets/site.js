(function(){var d=document,H=d.querySelector('.hdr'),B=d.querySelector('.burger');
if(B)B.addEventListener('click',function(){var o=H.classList.toggle('open');B.setAttribute('aria-expanded',o)});
[].forEach.call(d.querySelectorAll('.nx'),function(x){x.addEventListener('click',function(){var li=x.parentNode,o=li.classList.toggle('open');x.textContent=o?'–':'+';x.setAttribute('aria-expanded',o)})});
var S=d.querySelectorAll('.slide'),D=d.querySelectorAll('.dots button'),i=0,t;
function go(n){if(!S.length)return;S[i].classList.remove('on');D[i]&&D[i].classList.remove('on');i=(n+S.length)%S.length;S[i].classList.add('on');D[i]&&D[i].classList.add('on')}
[].forEach.call(D,function(b,n){b.addEventListener('click',function(){go(n);clearInterval(t)})});
if(S.length>1&&!matchMedia('(prefers-reduced-motion: reduce)').matches)t=setInterval(function(){go(i+1)},7000);
[].forEach.call(d.querySelectorAll('.pa'),function(b){b.addEventListener('click',function(){var r=d.querySelector('.prow.scroll');r&&r.scrollBy({left:(+b.dataset.dir)*r.clientWidth*.8,behavior:'smooth'})})});
})();
