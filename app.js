window.IMG={"pasto":"img/pasto.jpg","gado":"img/gado.jpg","bezerro":"img/bezerro.jpg","cerca":"img/cerca.jpg","bebedouro":"img/bebedouro.jpg","curral":"img/curral.jpg","chuva":"img/chuva.jpg"};

(function(){
var $=function(s){return document.querySelector(s)};
var IC={home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
wrench:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>',
chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z"/>',
camera:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
cow:'<path d="M5 5c0 2 1 3 3 3M19 5c0 2-1 3-3 3"/><path d="M7 8h10v9a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3z"/><circle cx="10" cy="15" r=".6"/><circle cx="14" cy="15" r=".6"/>',
scale:'<path d="M12 3v18M5 21h14M5 7h14"/><path d="M5 7l-3 7a3.5 3.5 0 0 0 6 0z"/><path d="M19 7l-3 7a3.5 3.5 0 0 0 6 0z"/>',
book:'<path d="M5 4h12a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2z"/><path d="M5 18a2 2 0 0 1 2-2h12M9 8h6"/>',
coin:'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M15 9.5c-.5-1-1.7-1.5-3-1.5s-3 .6-3 2 1.3 1.8 3 2 3 .6 3 2-1.4 2-3 2-2.6-.5-3-1.5"/>',
check:'<circle cx="12" cy="12" r="9"/><path d="M8 12.5l3 3 5-6"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
left:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
doc:'<path d="M7 3h8l4 4v14H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
send:'<path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/>',
user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
sprout:'<path d="M12 21v-8"/><path d="M12 13c0-4 3-6 7-6 0 4-3 6-7 6z"/><path d="M12 16c0-3-2-5-6-5 0 3 2 5 6 5z"/>',
bag:'<path d="M6 7h12l1 13H5z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
swap:'<path d="M4 8h15l-4-4M20 16H5l4 4"/>',
xcircle:'<circle cx="12" cy="12" r="9"/><path d="M9 9l6 6M15 9l-6 6"/>',
link:'<path d="M10 14a4 4 0 0 0 6 0l3-3a4 4 0 0 0-6-6l-1 1"/><path d="M14 10a4 4 0 0 0-6 0l-3 3a4 4 0 0 0 6 6l1-1"/>',
hammer:'<path d="M14 6l4 4M12 8l-8 8 4 4 8-8M15 3l6 6-3 3-6-6z"/>'};
function ic(n,s){s=s||22;return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+IC[n]+'</svg>'}
function nav(items,cur){return '<nav class="nav" aria-label="Menu principal">'+items.map(function(t){return '<button type="button" data-act="tab" data-v="'+t[0]+'"'+(cur===t[0]?' aria-current="page"':'')+'>'+ic(t[2],24)+'<span>'+t[1]+'</span></button>'}).join("")+'</nav>'}

function esc(t){return String(t==null?"":t).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function money(v){return "R$ "+Number(v).toLocaleString("pt-BR",{maximumFractionDigits:2})}
function num(s){var t=String(s||"").trim();if(t.indexOf(",")>-1||/^\d{1,3}(\.\d{3})+$/.test(t))t=t.replace(/\./g,"").replace(",",".");var n=parseFloat(t);return isNaN(n)?0:n}
function toast(t){var el=$("#toast");el.textContent=t;el.hidden=false;clearTimeout(toast.t);toast.t=setTimeout(function(){el.hidden=true},2800)}
var KEY="campocerto-proto-v2",REF="2026-11-18",MES="2026-11";
function fd(d){var p=d.split("-");return p[2]+"/"+p[1]+"/"+p[0]}
function dias(a,b){return Math.round((Date.parse(a)-Date.parse(b))/864e5)}
function seed(){return {
pastos:[{id:1,nome:"Pasto 1 · Mombaça",ha:42,foto:"pasto"},{id:2,nome:"Pasto 2 · Tifton",ha:35,foto:"cerca"},{id:3,nome:"Pasto 3 · Brizantha",ha:60,foto:"gado"},{id:4,nome:"Pasto 4 · Braquiária",ha:55,foto:"bezerro"},{id:5,nome:"Pasto 5 · Marandu",ha:28,foto:"pasto"},{id:6,nome:"Curral e embarque",ha:0,foto:"curral"}],
lotes:[{id:1,nome:"Nelore recria",pasto:1,qtd:85,cur:{p:342,d:"2026-10-18"},prev:{p:315,d:"2026-09-18"},hist:[{d:"2026-06-18",p:268},{d:"2026-07-18",p:281},{d:"2026-08-18",p:296},{d:"2026-09-18",p:315},{d:"2026-10-18",p:342}]},{id:2,nome:"Matrizes",pasto:3,qtd:120,cur:{p:462,d:"2026-10-18"},prev:{p:447,d:"2026-09-18"},hist:[{d:"2026-06-18",p:440},{d:"2026-07-18",p:444},{d:"2026-08-18",p:445},{d:"2026-09-18",p:447},{d:"2026-10-18",p:462}]},{id:3,nome:"Bezerros",pasto:4,qtd:169,cur:{p:168,d:"2026-10-18"},prev:{p:140,d:"2026-09-18"},hist:[{d:"2026-06-18",p:112},{d:"2026-07-18",p:120},{d:"2026-08-18",p:128},{d:"2026-09-18",p:140},{d:"2026-10-18",p:168}]},{id:4,nome:"Lote de venda",pasto:6,qtd:38,cur:{p:498,d:"2026-10-18"},prev:{p:480,d:"2026-09-18"},hist:[{d:"2026-06-18",p:440},{d:"2026-07-18",p:455},{d:"2026-08-18",p:468},{d:"2026-09-18",p:480},{d:"2026-10-18",p:498}]}],
fin:[{id:1,t:"d",d:"2026-11-01",cat:"Mão de obra",v:8500,txt:"Salário do vaqueiro e do ajudante"},{id:2,t:"d",d:"2026-11-05",cat:"Ração e sal",v:6200,txt:"Sal mineral, 40 sacos"},{id:3,t:"d",d:"2026-11-10",cat:"Sanidade",v:3400,txt:"Vermífugo e vacinas"},{id:4,t:"d",d:"2026-11-12",cat:"Ração e sal",v:8500,txt:"Proteinado"},{id:5,t:"d",d:"2026-11-14",cat:"Combustível",v:1700,txt:"Diesel do trator e da caminhonete"},{id:6,t:"r",d:"2026-11-08",cat:"Venda de animais",v:63000,txt:"Venda de 15 bois gordos"},{id:20,t:"r",d:"2026-06-10",cat:"Venda de animais",v:41000,txt:"Venda de 10 bois"},{id:21,t:"d",d:"2026-06-10",cat:"Mão de obra",v:8500,txt:"Salários"},{id:22,t:"d",d:"2026-06-10",cat:"Ração e sal",v:7400,txt:"Sal e proteinado"},{id:23,t:"d",d:"2026-06-10",cat:"Sanidade",v:2100,txt:"Vacinas"},{id:24,t:"d",d:"2026-07-10",cat:"Mão de obra",v:8500,txt:"Salários"},{id:25,t:"d",d:"2026-07-10",cat:"Ração e sal",v:9100,txt:"Sal e proteinado"},{id:26,t:"d",d:"2026-07-10",cat:"Sanidade",v:1500,txt:"Vermífugo"},{id:27,t:"d",d:"2026-07-10",cat:"Combustível",v:1800,txt:"Diesel"},{id:28,t:"r",d:"2026-08-10",cat:"Venda de animais",v:52500,txt:"Venda de 12 bois"},{id:29,t:"d",d:"2026-08-10",cat:"Mão de obra",v:8500,txt:"Salários"},{id:30,t:"d",d:"2026-08-10",cat:"Ração e sal",v:6800,txt:"Sal e proteinado"},{id:31,t:"d",d:"2026-08-10",cat:"Sanidade",v:2200,txt:"Vacinas"},{id:32,t:"d",d:"2026-08-10",cat:"Combustível",v:1600,txt:"Diesel"},{id:33,t:"r",d:"2026-09-10",cat:"Venda de animais",v:12000,txt:"Venda de 3 vacas descartadas"},{id:34,t:"d",d:"2026-09-10",cat:"Mão de obra",v:8500,txt:"Salários"},{id:35,t:"d",d:"2026-09-10",cat:"Ração e sal",v:7200,txt:"Sal e proteinado"},{id:36,t:"d",d:"2026-09-10",cat:"Sanidade",v:3100,txt:"Vermífugo"},{id:37,t:"d",d:"2026-09-10",cat:"Combustível",v:1500,txt:"Diesel"},{id:38,t:"r",d:"2026-10-10",cat:"Venda de animais",v:47000,txt:"Venda de 11 bois"},{id:39,t:"d",d:"2026-10-10",cat:"Mão de obra",v:8500,txt:"Salários"},{id:40,t:"d",d:"2026-10-10",cat:"Ração e sal",v:6900,txt:"Sal e proteinado"},{id:41,t:"d",d:"2026-10-10",cat:"Sanidade",v:2800,txt:"Vacinas"},{id:42,t:"d",d:"2026-10-10",cat:"Combustível",v:1650,txt:"Diesel"}],
san:[{id:1,txt:"Vermifugar as matrizes",d:"2026-11-24",lote:2,done:false},{id:2,txt:"Vacina de aftosa",d:"2026-12-06",lote:0,done:false},{id:3,txt:"Pesar o lote de venda",d:"2026-11-20",lote:4,done:false}],
log:[{d:"2026-11-08",txt:"Venda de 15 animais do Lote de venda"},{d:"2026-11-09",txt:"Nascimento de 4 bezerros no lote Bezerros"}],
diario:[
{id:1,d:"2026-11-16",tipo:"Ocorrência",txt:"Bebedouro do Pasto 3 vazando. O vaqueiro trocou a boia e o vazamento parou.",f:["scene:bebedouro"]},
{id:2,d:"2026-11-15",tipo:"Chuva",mm:26,txt:"Chuva forte à tarde, sem estrago.",f:["scene:chuva"]},
{id:3,d:"2026-11-14",tipo:"Manutenção",txt:"Cerca do Pasto 2 caída em uns 12 metros depois da chuva. Material já pedido.",f:["scene:cerca"]},
{id:4,d:"2026-11-11",tipo:"Chuva",mm:38,txt:"",f:[]},
{id:5,d:"2026-11-09",tipo:"Ocorrência",txt:"Nasceram 4 bezerros, todos bem e mamando.",f:["scene:bezerro"]},
{id:6,d:"2026-11-08",tipo:"Ocorrência",txt:"Embarque de 15 bois gordos para o frigorífico, peso médio de 498 kg.",f:["scene:curral","scene:gado"]},
{id:7,d:"2026-11-03",tipo:"Chuva",mm:22,txt:"",f:[]}],
nid:100}}
var S;try{S=JSON.parse(localStorage.getItem(KEY))}catch(e){S=null}
if(!S||!S.lotes||!S.diario)S=seed();
function save(){try{localStorage.setItem(KEY,JSON.stringify(S))}catch(e){}}
var DCAT=["Ração e sal","Mão de obra","Sanidade","Combustível","Compra de animais","Outros"],RCAT=["Venda de animais","Outras receitas"];
var QC=[
{k:"how",t:"Hoje, como você controla a fazenda?",o:["Caderno","Planilha","Programa ou aplicativo","Não controlo"]},
{k:"util",t:"O que mais ajudaria?",m:1,o:["Saber quantos animais há em cada pasto","Pesagem e ganho de peso","Despesas e receitas","Vacinas e tarefas","Relatório para o contador"]},
{k:"off",t:"Funcionar sem internet importa?",o:["Muito, o sinal é ruim","Um pouco","Não"]},
{k:"int",t:"Você usaria um sistema assim?",o:["Sim","Talvez","Não"]},
{k:"pr",t:"Quanto pagaria por mês?",o:["Até R$ 50","R$ 50 a 100","R$ 100 a 200","Mais de R$ 200","Não pagaria"]},
{k:"txt",t:"O que faltou ou ficou confuso?",txt:1}];
var UI={dr:{tipo:"Ocorrência",txt:"",mm:"",f:[]},pick:null,tab:"painel",lote:S.lotes.length?S.lotes[0].id:0,w:[],date:REF,focus:false,op:{},opOut:"",tarefa:{txt:"",d:REF,lote:"0"}};

var SC={};
function scene(k){if(window.IMG&&IMG[k])return IMG[k];if(SC[k])return SC[k];var s='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset="1" stop-color="#000" stop-opacity=".25"/></linearGradient><linearGradient id="c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc4ef"/><stop offset="1" stop-color="#d9f0fb"/></linearGradient></defs>',i;
function cow(x,y,z,c){return '<g transform="translate('+x+' '+y+') scale('+z+')"><rect x="-26" y="10" width="7" height="22" fill="#78716c"/><rect x="-6" y="10" width="7" height="22" fill="#78716c"/><rect x="14" y="10" width="7" height="22" fill="#78716c"/><rect x="26" y="10" width="7" height="22" fill="#78716c"/><ellipse cx="0" cy="0" rx="42" ry="22" fill="'+c+'"/><circle cx="26" cy="-18" r="11" fill="'+c+'"/><ellipse cx="50" cy="-10" rx="15" ry="10" fill="'+c+'"/><rect x="62" y="-4" width="3" height="3" fill="#44403c"/><rect x="-46" y="-12" width="6" height="24" rx="3" fill="#57534e"/></g>'}
function field(){return '<rect width="600" height="400" fill="url(#c)"/><circle cx="500" cy="70" r="30" fill="#fde68a"/><path d="M0 220 Q150 160 300 210 T600 190 V400 H0Z" fill="#5a9a3a"/><path d="M0 280 Q200 235 600 285 V400 H0Z" fill="#4a8a2e"/>'}
if(k==="pasto")s+=field()+'<rect x="40" y="250" width="5" height="40" fill="#78350f"/><rect x="200" y="258" width="5" height="40" fill="#78350f"/><rect x="40" y="258" width="165" height="2" fill="#d6d3d1"/><rect x="40" y="272" width="165" height="2" fill="#d6d3d1"/>';
else if(k==="gado"){s+=field();[[120,300,1,"#e7e5e4"],[260,325,1.1,"#d6d3d1"],[400,305,.95,"#e7e5e4"],[500,340,1.15,"#d6d3d1"],[190,355,1.2,"#e7e5e4"]].forEach(function(c){s+=cow(c[0],c[1],c[2],c[3])})}
else if(k==="bezerro")s+=field()+cow(240,320,2.1,"#a8754a")+cow(470,300,.9,"#e7e5e4");
else if(k==="cerca"){s+=field();for(i=0;i<7;i++)s+='<rect x="'+(30+i*90)+'" y="230" width="9" height="110" fill="#78350f"/>';for(i=0;i<3;i++){s+='<rect x="30" y="'+(250+i*28)+'" width="190" height="2" fill="#d6d3d1"/><rect x="390" y="'+(250+i*28)+'" width="190" height="2" fill="#d6d3d1"/>'}s+='<path d="M220 250 Q250 300 260 345" stroke="#d6d3d1" stroke-width="2" fill="none"/><path d="M390 278 Q360 320 350 345" stroke="#d6d3d1" stroke-width="2" fill="none"/>'}
else if(k==="bebedouro")s+='<rect width="600" height="400" fill="#bfe3f5"/><rect y="250" width="600" height="150" fill="#a16207" fill-opacity=".75"/><rect x="120" y="180" width="360" height="110" rx="10" fill="#a8a29e"/><rect x="136" y="196" width="328" height="42" rx="6" fill="#3b9ed8"/><rect x="420" y="90" width="10" height="100" fill="#57534e"/><rect x="400" y="86" width="50" height="10" fill="#57534e"/><ellipse cx="300" cy="320" rx="130" ry="20" fill="#7c4a12" fill-opacity=".6"/>';
else if(k==="chuva"){s+='<rect width="600" height="400" fill="#64748b"/><rect y="260" width="600" height="140" fill="#4a8a2e"/>';for(i=0;i<40;i++)s+='<path d="M'+(i*15+(i%3)*5)+' '+((i*53)%230)+' l-8 28" stroke="#e2e8f0" stroke-opacity=".7" stroke-width="2"/>'}
else{s+='<rect width="600" height="400" fill="#bfe3f5"/><rect y="170" width="600" height="230" fill="#a16f3a"/>';for(i=0;i<4;i++)s+='<rect x="20" y="'+(150+i*52)+'" width="560" height="14" fill="#78350f"/>';for(i=0;i<7;i++)s+='<rect x="'+(24+i*90)+'" y="120" width="14" height="250" fill="#57300b"/>'}
s+='<rect width="600" height="400" fill="url(#g)"/><text x="590" y="388" text-anchor="end" font-family="sans-serif" font-size="14" fill="#fff" fill-opacity=".85">foto ilustrativa</text></svg>';
return SC[k]="data:image/svg+xml,"+encodeURIComponent(s)}
function src(x){return x.indexOf("scene:")===0?scene(x.slice(6)):x}
function gal(a){return a&&a.length?'<div class="gal">'+a.map(function(x){return '<button type="button" class="gb" data-act="zoom" aria-label="Ampliar foto"><img src="'+src(x)+'" alt="Foto da fazenda"></button>'}).join("")+'</div>':""}
function thumbs(a){return a.length?'<div class="gal">'+a.map(function(x,i){return '<div class="gb" style="cursor:default"><img src="'+src(x)+'" alt="Foto anexada"><button type="button" class="rm" data-act="rmFoto" data-i="'+i+'" aria-label="Remover foto">×</button></div>'}).join("")+'</div>':""}
function shrink(file,cb){var r=new FileReader();r.onload=function(){var im=new Image();im.onload=function(){var k=Math.min(1,700/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext("2d").drawImage(im,0,0,c.width,c.height);cb(c.toDataURL("image/jpeg",.7))};im.onerror=function(){cb(null)};im.src=r.result};r.onerror=function(){cb(null)};r.readAsDataURL(file)}
var MESES=["2026-06","2026-07","2026-08","2026-09","2026-10","2026-11"],MN={"06":"Jun","07":"Jul","08":"Ago","09":"Set","10":"Out","11":"Nov"};
function saldoMes(m){var r=0,d=0;S.fin.forEach(function(x){if(x.d.slice(0,7)===m){if(x.t==="r")r+=x.v;else d+=x.v}});return r-d}
function chuva(){var mm=0,n=0;(S.diario||[]).forEach(function(x){if(x.tipo==="Chuva"&&x.d.slice(0,7)===MES){mm+=x.mm||0;n++}});return{mm:mm,n:n}}
function chart(l){var h=l.hist||[];if(h.length<2)return "";var W=340,H=140,pl=34,pr=24,pt=10,pb=24,lo=Infinity,hi=0;h.forEach(function(x){lo=Math.min(lo,x.p);hi=Math.max(hi,x.p)});lo=Math.floor(lo/20)*20;hi=Math.ceil(hi/20)*20;if(hi===lo)hi=lo+20;
function X(i){return pl+i*(W-pl-pr)/(h.length-1)}function Y(v){return pt+(hi-v)*(H-pt-pb)/(hi-lo)}
var o='<svg viewBox="0 0 '+W+' '+H+'" width="100%" role="img" aria-label="Evolução do peso médio" style="display:block">';
[lo,(lo+hi)/2,hi].forEach(function(v){o+='<line x1="'+pl+'" x2="'+(W-pr)+'" y1="'+Y(v)+'" y2="'+Y(v)+'" style="stroke:var(--line)"/><text x="'+(pl-4)+'" y="'+(Y(v)+4)+'" text-anchor="end" font-size="10" style="fill:var(--muted)">'+v+'</text>'});
o+='<polyline fill="none" stroke-width="2.5" stroke-linejoin="round" style="stroke:var(--accent)" points="'+h.map(function(x,i){return X(i)+','+Y(x.p)}).join(" ")+'"/>';
h.forEach(function(x,i){o+='<circle cx="'+X(i)+'" cy="'+Y(x.p)+'" r="'+(i===h.length-1?4.5:3)+'" style="fill:var(--accent)"/><text x="'+X(i)+'" y="'+(H-6)+'" text-anchor="middle" font-size="10" style="fill:var(--muted)">'+x.d.slice(8)+"/"+x.d.slice(5,7)+'</text>'});
return o+'</svg>'}
function lote(id){return S.lotes.filter(function(l){return l.id===+id})[0]}
function pasto(id){return S.pastos.filter(function(p){return p.id===+id})[0]}
function gmd(l){var n=dias(l.cur.d,l.prev.d);return n>0?(l.cur.p-l.prev.p)/n:0}
function total(){return S.lotes.reduce(function(a,l){return a+l.qtd},0)}
function gmdMedio(){var q=total();return q?S.lotes.reduce(function(a,l){return a+gmd(l)*l.qtd},0)/q:0}
function fmt1(n){return n.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2})}
function mes(){var r=0,d=0;S.fin.forEach(function(x){if(x.d.slice(0,7)===MES){if(x.t==="r")r+=x.v;else d+=x.v}});return{r:r,d:d}}
function ua(p){if(!p.ha)return null;return S.lotes.filter(function(l){return l.pasto===p.id}).reduce(function(a,l){return a+l.qtd*l.cur.p/450},0)/p.ha}
function lotChip(p){var u=ua(p);if(u===null)return '<span class="chip">Curral</span>';if(u===0)return '<span class="chip">Vazio</span>';if(u>2)return '<span class="chip warn">Muito gado para a área</span>';if(u<1)return '<span class="chip">Folga</span>';return '<span class="chip ok">Lotação boa</span>'}
function chips(k,opts,cur,act){return '<div class="choices">'+opts.map(function(o){return '<button type="button" class="ch" data-act="'+act+'" data-k="'+k+'" data-v="'+esc(o)+'" aria-pressed="'+(cur===o)+'">'+esc(o)+'</button>'}).join("")+'</div>'}
function opts(arr,sel,val,lab){return arr.map(function(x){return '<option value="'+val(x)+'"'+(String(val(x))===String(sel)?' selected':'')+'>'+esc(lab(x))+'</option>'}).join("")}

var USERS={dono:{role:"dono",nome:"Dono"},capataz:{role:"cap",nome:"Tonho"}};
function isCap(){return !!(UI.user&&UI.user.role==="cap")}
function lk(id){return location.origin+location.pathname+"?lote="+id}
function getSess(){try{return JSON.parse(localStorage.getItem(KEY+"-sessao")||"null")}catch(e){return null}}
function arroba(p){return fmt1(p*.5/15)}
function vLogin(){return Shell.bar({title:"Campo Certo",sub:"Fazenda Santa Rita · demonstração",right:Shell.hub()})+
'<h1 class="h2">Entrar</h1><p class="sub">Para o dono da fazenda e para quem cuida do gado no dia a dia.</p>'+
'<div class="fld"><label for="lu">Usuário</label><input type="text" id="lu" autocomplete="username" autocapitalize="none" value="'+esc(UI.lu||"")+'"></div>'+
'<div class="fld"><label for="lp">Senha</label><input type="password" id="lp" autocomplete="current-password" value="'+esc(UI.lp||"")+'"></div>'+
'<button type="button" class="btn lg block" data-act="login">'+ic("check")+'Entrar</button>'+
'<div class="card" style="margin-top:16px"><div class="t">Acessos de demonstração</div><div class="m" style="margin-bottom:10px">Toque para preencher. A senha dos dois é <b>demo</b>. O capataz não vê o dinheiro da fazenda.</div><div class="choices">'+[["dono","Dono da fazenda"],["capataz","Tonho · capataz"]].map(function(x){return '<button type="button" class="ch" data-act="fillLogin" data-v="'+x[0]+'">'+x[1]+'</button>'}).join("")+'</div></div>'+
'<div class="sec">Vai vender gado?</div><p class="m" style="margin:0 0 10px">Na hora de vender, o dono manda pelo WhatsApp a <b>ficha de um lote</b>: peso médio, engorda por dia e todas as pesagens. O comprador abre sem criar conta. O Campo Certo não vende gado: a negociação continua direto entre vocês.</p><a class="bigact" href="?lote=4"><span class="ico">'+ic("cow",24)+'</span><span>Ver a ficha que o comprador recebe<small>Exemplo com o lote de venda da fazenda</small></span></a>'+Shell.installHint()}
function vLoteCli(){var l=lote(UI.qlote),h=Shell.bar({title:"Campo Certo",sub:"Ficha do lote"});
if(!l)return h+'<h1 class="h2">Lote não encontrado</h1><p class="sub">Confira o link. Nesta demonstração, cada aparelho guarda os próprios dados. Teste com o lote de exemplo.</p><a class="btn lg block" href="?lote=4">Ver a ficha de exemplo</a>';
var p=pasto(l.pasto),g=gmd(l),pr=Math.round(l.cur.p+g*30);
return h+'<div class="banner">A Fazenda Santa Rita mandou esta ficha para você avaliar o lote antes de negociar.</div>'+(p&&p.foto?'<img src="'+scene(p.foto)+'" alt="" style="width:100%;aspect-ratio:3/2;object-fit:cover;border-radius:14px;display:block;margin-bottom:12px">':'')+
'<h1 class="h2">'+esc(l.nome)+'</h1><p class="sub">'+(p?esc(p.nome)+' · ':'')+'última pesagem em '+fd(l.cur.d)+'</p>'+
'<div class="grid3" style="margin-bottom:12px"><div class="kpi"><span class="m">Cabeças</span><b>'+l.qtd+'</b></div><div class="kpi"><span class="m">Peso médio</span><b>'+l.cur.p+' kg</b></div><div class="kpi"><span class="m">Engorda</span><b>'+fmt1(g)+' kg/dia</b></div></div>'+
'<div class="card" style="margin-bottom:12px"><div class="row"><div class="grow">Arrobas por cabeça</div><b>cerca de '+arroba(l.cur.p)+' @</b></div><div class="row"><div class="grow">Peso médio previsto em 30 dias</div><b>'+pr+' kg</b></div><div class="row" style="border:0"><div class="grow">Peso do lote todo</div><b>'+Math.round(l.qtd*l.cur.p).toLocaleString("pt-BR")+' kg</b></div><div class="m" style="margin-top:6px">Arroba calculada com rendimento de carcaça de 50%. Confirme na balança na hora do embarque.</div></div>'+
'<div class="sec">Evolução do peso médio</div>'+chart(l)+
'<div class="sec">Pesagens</div>'+(l.hist||[]).slice().reverse().map(function(x){return '<div class="row"><div class="grow">'+fd(x.d)+'</div><b>'+x.p+' kg</b></div>'}).join("")+
'<button type="button" class="btn lg block" style="margin-top:16px" data-act="falarDono">'+ic("chat")+'Falar com a fazenda</button>'}
function dCompr(id){var l=id?lote(id):null;if(!l)return '<h2 class="h2" style="font-size:21px">Mandar a ficha de um lote</h2><p class="sub">Escolha o lote. O comprador vê o peso, a engorda e as pesagens antes de negociar, sem precisar de conta.</p><div class="stack" style="gap:8px">'+S.lotes.map(function(x){return '<button type="button" class="opt2" data-act="comprLote" data-v="'+x.id+'">'+esc(x.nome)+'<span>'+x.qtd+' cab. · '+x.cur.p+' kg</span></button>'}).join("")+'</div><button type="button" class="btn ghost lg block" style="margin-top:10px" data-act="close">Fechar</button>';
var t="Olá! Segue a ficha do lote "+l.nome+": "+l.qtd+" cabeças, peso médio de "+l.cur.p+" kg (pesado em "+fd(l.cur.d)+"). Veja a engorda e todas as pesagens aqui: "+lk(l.id);
return '<h2 class="h2" style="font-size:21px">Ficha do lote '+esc(l.nome)+'</h2><textarea class="out" id="cmsg" readonly>'+esc(t)+'</textarea><a class="btn lg block" href="https://wa.me/?text='+encodeURIComponent(t)+'" target="_blank" rel="noopener">'+ic("send")+'Abrir no WhatsApp</a><a class="btn ghost lg block" href="?lote='+l.id+'">'+ic("cow")+'Ver como o comprador vê</a><button type="button" class="btn ghost lg block" data-act="close">Fechar</button>'}
function head(){var c=isCap();return Shell.bar({title:"Campo Certo",sub:"Fazenda Santa Rita",user:{name:c?"Tonho":"Dono",role:c?"Capataz · não vê o dinheiro":"Dono da fazenda"},items:[]})}
function foot(){return nav(isCap()?[["painel","Início","home"],["pastos","Gado","cow"],["pesagem","Pesar","scale"],["diario","Diário","book"],["opiniao","Opinião","chat"]]:[["painel","Início","home"],["pastos","Gado","cow"],["pesagem","Pesar","scale"],["diario","Diário","book"],["dinheiro","Dinheiro","coin"],["opiniao","Opinião","chat"]],UI.tab)}

function vPainel(){
var m=mes(),cab=total(),al=[];
S.pastos.forEach(function(p){var u=ua(p);if(u>2)al.push('<div class="row"><div class="grow"><div class="t">'+esc(p.nome)+'</div><div class="m">'+fmt1(u)+' UA por ha. Considere mover um lote.</div></div><span class="chip warn">Muito gado para a área</span></div>')});
var tar=S.san.filter(function(t){return !t.done}).sort(function(a,b){return a.d<b.d?-1:1}).slice(0,3).map(function(t){var n=dias(t.d,REF);return '<div class="row"><div class="grow"><div class="t">'+esc(t.txt)+'</div><div class="m">'+(t.lote?esc(lote(t.lote).nome):"Rebanho todo")+' · '+fd(t.d)+'</div></div><span class="chip '+(n<=7?'warn':'')+'">em '+n+' dias</span></div>'}).join("");
var lg=S.log.slice().sort(function(a,b){return a.d<b.d?1:-1}).slice(0,4).map(function(l){return '<div class="row"><div class="grow">'+esc(l.txt)+'</div><div class="m">'+fd(l.d)+'</div></div>'}).join("");
return '<div class="grid3" style="margin-bottom:14px"><div class="kpi"><span class="m">Cabeças</span><b>'+cab+'</b></div><div class="kpi"><span class="m">Ganho médio</span><b>'+fmt1(gmdMedio())+' kg/dia</b></div>'+(isCap()?'<div class="kpi"><span class="m">Tarefas abertas</span><b>'+S.san.filter(function(t){return !t.done}).length+'</b></div>':'<div class="kpi"><span class="m">Saldo do mês</span><b style="color:'+(m.r-m.d>=0?'var(--ok)':'var(--bad)')+'">'+money(m.r-m.d)+'</b></div>')+'</div>'+
'<div class="card" style="margin-bottom:14px;display:flex;justify-content:space-between;gap:8px"><span class="t">Chuva em novembro</span><span class="m">'+chuva().mm+' mm em '+chuva().n+' dias</span></div>'+
'<button type="button" class="bigact" data-act="irpesar"><span class="ico">'+ic("scale",26)+'</span><span>Pesar um lote<small>A média e a engorda saem sozinhas</small></span></button>'+
'<button type="button" class="bigact" data-act="dlg" data-v="mov"><span class="ico">'+ic("plus",26)+'</span><span>Movimentação do gado<small>Nasceu, comprei, vendi, perdi ou mudou de pasto</small></span></button>'+
(isCap()?'':'<button type="button" class="bigact" data-act="dlg" data-v="d"><span class="ico">'+ic("coin",26)+'</span><span>Lançar uma despesa<small>Sal, ração, diesel, salário</small></span></button><button type="button" class="bigact" data-act="compr"><span class="ico">'+ic("send",26)+'</span><span>Mandar a ficha de um lote<small>Para o comprador ver peso e engorda antes de negociar</small></span></button>')+
(al.length?'<div class="sec">Atenção</div>'+al.join(""):'')+
'<div class="sec" style="display:flex;justify-content:space-between;align-items:center">Próximas tarefas<button type="button" class="back" style="margin:0" data-act="tab" data-v="sanidade">Ver todas</button></div>'+(tar||'<p class="m">Nenhuma tarefa pendente.</p>')+
'<div class="sec">Últimas movimentações</div>'+(lg||'<p class="m">Nada lançado ainda.</p>')}

function vPastos(){
return '<div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px;margin-bottom:12px"><div><h1 class="h2">Pastos e lotes</h1><div class="m">'+total()+' cabeças em '+S.pastos.length+' áreas</div></div><button type="button" class="btn" data-act="dlg" data-v="mov">'+ic("plus")+'Movimentação</button></div>'+
S.pastos.map(function(p){var ls=S.lotes.filter(function(l){return l.pasto===p.id}),u=ua(p);
return '<div class="card" style="margin-bottom:10px"><img src="'+scene(p.foto||"pasto")+'" alt="" style="width:100%;height:110px;object-fit:cover;object-position:center 78%;border-radius:10px;margin-bottom:10px;display:block"><div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start"><div><div class="t" style="font-size:16px">'+esc(p.nome)+'</div><div class="m">'+(p.ha?p.ha+' ha'+(u?' · '+fmt1(u)+' UA por ha':''):'Sem área de pasto')+'</div></div>'+lotChip(p)+'</div>'+
ls.map(function(l){var g=gmd(l);return '<div class="row"><div class="grow"><div class="t">'+esc(l.nome)+'</div><div class="m">'+l.qtd+' cabeças · peso médio '+l.cur.p+' kg</div></div><span class="chip '+(g>=.7?'ok':'warn')+'">'+fmt1(g)+' kg/dia</span></div>'}).join("")+(ls.length?'':'<div class="m" style="margin-top:8px">Nenhum lote neste pasto.</div>')+'</div>'}).join("")}

function vPesagem(){var l=lote(UI.lote),n=UI.w.length,med=n?UI.w.reduce(function(a,b){return a+b},0)/n:0,dd=l?dias(UI.date,l.cur.d):0,g=n&&dd>0?(med-l.cur.p)/dd:0;
if(!l)return '<p class="m">Cadastre um lote para pesar.</p>';
return '<h1 class="h2">Pesagem do lote</h1><p class="sub">Digite o peso de cada animal. A média e o ganho por dia saem sozinhos.</p>'+
'<div class="fld"><span class="lab">Qual lote?</span><div class="stack" style="gap:8px">'+S.lotes.map(function(x){return '<button type="button" class="opt2" data-act="pickLote" data-v="'+x.id+'" aria-pressed="'+(x.id===UI.lote)+'"><b>'+esc(x.nome)+'</b><span>'+x.qtd+' cabeças</span></button>'}).join("")+'</div><span class="hint">Última pesagem: '+fd(l.cur.d)+' · média '+l.cur.p+' kg</span></div>'+
'<div class="card" style="margin-bottom:14px"><div style="display:flex;justify-content:space-between"><span class="t">'+n+' de '+l.qtd+' pesados</span><span class="m">'+Math.round(Math.min(100,n/l.qtd*100))+'%</span></div><div class="bar" style="margin-top:8px"><i style="width:'+Math.min(100,n/l.qtd*100)+'%"></i></div></div>'+
'<div class="card" style="margin-bottom:14px"><div class="t" style="margin-bottom:4px">Peso médio ao longo do tempo</div><div class="m" style="margin-bottom:6px">'+esc(l.nome)+', em kg</div>'+chart(l)+'</div>'+
'<div class="fld"><label for="peso">Peso do animal '+(n+1)+' (kg)</label><div style="display:flex;gap:8px"><input type="text" id="peso" inputmode="decimal" placeholder="Ex.: 338"><button type="button" class="btn lg" data-act="addPeso">Adicionar</button></div></div>'+
(n?'<div class="choices" style="margin-bottom:14px">'+UI.w.slice(-8).map(function(x){return '<span class="chip">'+x+' kg</span>'}).join("")+'<button type="button" class="ch" data-act="undoPeso">Desfazer o último</button></div>':'')+
'<div class="grid2" style="margin-bottom:14px"><div class="kpi"><span class="m">Peso médio</span><b>'+(n?Math.round(med)+' kg':'—')+'</b></div><div class="kpi"><span class="m">Ganho por dia</span><b>'+(g?fmt1(g)+' kg':'—')+'</b></div></div>'+
'<div class="fld"><label for="pdata">Data da pesagem</label><input type="date" id="pdata" data-chg="date" value="'+UI.date+'"></div>'+
'<button type="button" class="btn lg block" data-act="salvarPeso"'+(n?'':' disabled')+'>Salvar pesagem</button>'}

function vDinheiro(){var m=mes(),cats={};
S.fin.forEach(function(x){if(x.t==="d"&&x.d.slice(0,7)===MES)cats[x.cat]=(cats[x.cat]||0)+x.v});
var keys=Object.keys(cats).sort(function(a,b){return cats[b]-cats[a]});
var list=S.fin.filter(function(x){return x.d.slice(0,7)===MES}).sort(function(a,b){return a.d<b.d?1:-1}).map(function(x){return '<div class="row"><div class="grow"><div class="t">'+esc(x.txt||x.cat)+'</div><div class="m">'+esc(x.cat)+' · '+fd(x.d)+'</div></div><div class="t" style="color:'+(x.t==="r"?'var(--ok)':'var(--fg)')+'">'+(x.t==="r"?'+ ':'− ')+money(x.v)+'</div><button type="button" class="back" style="margin:0;color:var(--muted)" data-act="delFin" data-v="'+x.id+'" aria-label="Apagar lançamento">Apagar</button></div>'}).join("");
return '<h1 class="h2">Dinheiro de novembro</h1><div class="grid3" style="margin:12px 0"><div class="kpi"><span class="m">Receitas</span><b style="color:var(--ok)">'+money(m.r)+'</b></div><div class="kpi"><span class="m">Despesas</span><b>'+money(m.d)+'</b></div><div class="kpi"><span class="m">Saldo</span><b style="color:'+(m.r-m.d>=0?'var(--ok)':'var(--bad)')+'">'+money(m.r-m.d)+'</b></div></div>'+
'<div class="grid2"><button type="button" class="btn lg" data-act="dlg" data-v="d">Nova despesa</button><button type="button" class="btn ghost lg" data-act="dlg" data-v="r">Nova receita</button></div>'+
'<div class="sec">Despesas por categoria</div>'+(keys.map(function(k){return '<div style="margin-bottom:10px"><div style="display:flex;justify-content:space-between"><span class="m">'+esc(k)+'</span><span class="m">'+money(cats[k])+'</span></div><div class="bar"><i style="width:'+Math.round(cats[k]/m.d*100)+'%"></i></div></div>'}).join("")||'<p class="m">Sem despesas no mês.</p>')+
'<div class="sec">Saldo dos últimos 6 meses</div>'+MESES.map(function(k){var v=saldoMes(k),w=Math.min(100,Math.abs(v)/350);return '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px"><span class="m" style="width:30px">'+MN[k.slice(5)]+'</span><div class="bar" style="flex:1"><i style="width:'+w+'%;background:'+(v<0?'var(--bad)':'var(--ok)')+'"></i></div><span class="m" style="width:92px;text-align:right;color:'+(v<0?'var(--bad)':'var(--fg)')+'">'+(v<0?'− ':'')+money(Math.abs(v))+'</span></div>'}).join("")+
'<div class="sec">Lançamentos de novembro</div>'+list}

function vSan(){var t=UI.tarefa,l=S.san.slice().sort(function(a,b){return a.done-b.done||(a.d<b.d?-1:1)}).map(function(x){var n=dias(x.d,REF);return '<div class="row"><button type="button" class="star" style="width:36px;height:36px;font-size:16px" data-act="done" data-v="'+x.id+'" aria-pressed="'+x.done+'" aria-label="Marcar como feita">✓</button><div class="grow"><div class="t" style="'+(x.done?'text-decoration:line-through;color:var(--muted)':'')+'">'+esc(x.txt)+'</div><div class="m">'+(x.lote?esc(lote(x.lote)?lote(x.lote).nome:"Lote"):"Rebanho todo")+' · '+fd(x.d)+'</div></div>'+(x.done?'<span class="chip ok">Feita</span>':'<span class="chip '+(n<=7?'warn':'')+'">em '+n+' dias</span>')+'</div>'}).join("");
return '<button type="button" class="back" data-act="tab" data-v="painel">'+ic("left",20)+'Início</button><h1 class="h2">Vacinas e tarefas</h1><p class="sub">Vacinas, vermífugo, pesagens e o que mais não pode esquecer.</p>'+l+
'<div class="sec">Nova tarefa</div><div class="fld"><label for="ttxt">O que fazer</label><input type="text" id="ttxt" data-bind="ttxt" value="'+esc(t.txt)+'" placeholder="Ex.: Vacina contra brucelose"></div>'+
'<div class="grid2"><div class="fld"><label for="tdata">Data</label><input type="date" id="tdata" data-bind="tdata" value="'+t.d+'"></div><div class="fld"><label for="tlote">Lote</label><select id="tlote" data-bind="tlote"><option value="0">Rebanho todo</option>'+opts(S.lotes,t.lote,function(x){return x.id},function(x){return x.nome})+'</select></div></div>'+
'<button type="button" class="btn lg block" data-act="addTask">Adicionar tarefa</button>'}

function vDiario(){var d=UI.dr,tp=["Ocorrência","Chuva","Manutenção","Sanidade"];
var l=S.diario.slice().sort(function(a,b){return a.d<b.d?1:a.d>b.d?-1:b.id-a.id}).map(function(x){return '<div class="card" style="margin-bottom:10px"><div style="display:flex;justify-content:space-between;gap:8px;align-items:center"><span class="chip '+(x.tipo==="Chuva"?'acc':x.tipo==="Manutenção"?'warn':'')+'">'+esc(x.tipo)+(x.mm?' · '+x.mm+' mm':'')+'</span><span class="m">'+fd(x.d)+'</span></div>'+(x.txt?'<div style="margin-top:8px">'+esc(x.txt)+'</div>':'')+gal(x.f)+'</div>'}).join("");
return '<h1 class="h2">Diário da fazenda</h1><p class="sub">Chuva, cerca quebrada, bezerro nascido, o que o vaqueiro viu. Com foto, fica registrado.</p>'+
'<div class="card" style="margin-bottom:14px"><div class="fld"><span class="lab">O que registrar</span>'+chips("tipo",tp,d.tipo,"drTipo")+'</div>'+(d.tipo==="Chuva"?'<div class="fld"><label for="drmm">Chuva em milímetros</label><input type="text" id="drmm" inputmode="decimal" data-bind="drmm" value="'+esc(d.mm)+'" placeholder="Ex.: 25"></div>':'')+
'<div class="fld"><label for="drtxt">Anotação <span class="hint">(opcional)</span></label><textarea id="drtxt" data-bind="drtxt" style="min-height:70px" placeholder="Ex.: Cerca do Pasto 2 caída, uns 12 metros.">'+esc(d.txt)+'</textarea></div>'+thumbs(d.f)+
'<div class="dbtns"><button type="button" class="btn ghost" data-act="pick">'+ic("camera")+'Foto</button><button type="button" class="btn" data-act="addDiario">'+ic("check")+'Registrar</button></div></div>'+l}
function vOp(){var h='<h1 class="h2">Sua opinião</h1><p class="sub">Leva dois minutos. Sua resposta ajuda a decidir se vale a pena construir isso de verdade.</p>';
QC.forEach(function(q){h+='<div class="fld"><span class="lab">'+q.t+'</span>'+(q.txt?'<textarea id="'+q.k+'" data-bind="op_'+q.k+'" placeholder="Escreva aqui.">'+esc(UI.op[q.k]||"")+'</textarea>':'<div class="choices">'+q.o.map(function(o){var on=q.m?(UI.op[q.k]||[]).indexOf(o)>-1:UI.op[q.k]===o;return '<button type="button" class="ch" data-act="op" data-k="'+q.k+'" data-m="'+(q.m?1:0)+'" data-v="'+esc(o)+'" aria-pressed="'+on+'">'+esc(o)+'</button>'}).join("")+'</div>')+'</div>'});
h+='<button type="button" class="btn lg block" data-act="gerar">Gerar minhas respostas</button>';
if(UI.opOut)h+='<div class="fld" style="margin-top:16px"><label for="out">Copie e mande para quem te enviou este protótipo</label><textarea class="out" id="out" readonly>'+esc(UI.opOut)+'</textarea><button type="button" class="btn ghost lg" data-act="copiar">Copiar respostas</button></div>';
return h}

function render(){render0();Shell.after()}
function render0(){if(UI.page==="login"){$("#app").innerHTML=vLogin();return}if(UI.page==="lote"){$("#app").innerHTML=vLoteCli();return}if(isCap()&&UI.tab==="dinheiro")UI.tab="painel";var v={painel:vPainel,pastos:vPastos,pesagem:vPesagem,dinheiro:vDinheiro,sanidade:vSan,opiniao:vOp,diario:vDiario}[UI.tab]();$("#app").innerHTML=head()+v+foot();if(UI.focus){var p=$("#peso");if(p)p.focus();UI.focus=false}}
function top(){window.scrollTo(0,0)}

var MV={nasc:["sprout","Nasceu bezerro","Entra no lote"],compra:["bag","Comprei gado","Entra no lote"],venda:["coin","Vendi gado","Sai do lote"],morte:["xcircle","Perdi um animal","Sai do lote"],mudar:["swap","Mudei de pasto","O lote vai para outro pasto"]};
function mvNew(){return {tipo:"",lote:UI.lote,q:1,v:"",pasto:0}}
function mvPrev(){var m=UI.mv,l=lote(m.lote);if(!l||m.tipo==="mudar")return "";var n=l.qtd+((m.tipo==="nasc"||m.tipo==="compra")?1:-1)*m.q;return n<0?"O lote só tem "+l.qtd+" animais.":"O lote vai ficar com "+n+" cabeças."}
function dMov(){var m=UI.mv;
if(!m.tipo)return '<h2 class="h2" style="margin-bottom:12px">O que aconteceu com o gado?</h2>'+Object.keys(MV).map(function(k){return '<button type="button" class="bigact" data-act="mvTipo" data-v="'+k+'"><span class="ico">'+ic(MV[k][0],26)+'</span><span>'+MV[k][1]+'<small>'+MV[k][2]+'</small></span></button>'}).join("")+'<button type="button" class="btn ghost lg block" data-act="close">Cancelar</button>';
var t=MV[m.tipo],L=lote(m.lote);
var h='<form data-form="mov"><button type="button" class="back" data-act="mvVoltar">'+ic("left",20)+'Voltar</button><h2 class="h2" style="margin-bottom:12px">'+t[1]+'</h2><div class="fld"><span class="lab">Qual lote?</span><div class="stack" style="gap:8px">'+S.lotes.map(function(x){return '<button type="button" class="opt2" data-act="mvLote" data-v="'+x.id+'" aria-pressed="'+(x.id===m.lote)+'"><b>'+esc(x.nome)+'</b><span>'+x.qtd+' cabeças</span></button>'}).join("")+'</div></div>';
if(m.tipo==="mudar")h+='<div class="fld"><span class="lab">Para qual pasto?</span><div class="stack" style="gap:8px">'+S.pastos.map(function(x){return '<button type="button" class="opt2" data-act="mvPasto" data-v="'+x.id+'" aria-pressed="'+(x.id===m.pasto)+'"><b>'+esc(x.nome)+'</b><span>'+(x.id===L.pasto?"onde está agora":"")+'</span></button>'}).join("")+'</div></div>';
else{h+='<div class="fld"><span class="lab">Quantos animais?</span><div class="stepper"><button type="button" class="btn ghost" data-act="mvQ" data-v="-1" aria-label="Menos um">−</button><input type="text" id="mq" inputmode="numeric" value="'+m.q+'" aria-label="Quantidade"><button type="button" class="btn ghost" data-act="mvQ" data-v="1" aria-label="Mais um">+</button></div><span class="hint" id="mvprev">'+esc(mvPrev())+'</span></div>';
if(m.tipo==="compra"||m.tipo==="venda")h+='<div class="fld"><label for="mv">Valor total em R$ <span class="hint">(opcional, vai para o Dinheiro)</span></label><input type="text" id="mv" inputmode="decimal" value="'+esc(m.v)+'" placeholder="Ex.: 42.000"></div>'}
return h+'<button type="submit" class="btn lg block">Salvar</button><button type="button" class="btn ghost lg block" data-act="close">Cancelar</button></form>'}
function dFin(t){var C=t==="r"?RCAT:DCAT;UI.fcat=C[0];
return '<form id="ffin" data-form="fin" data-t="'+t+'"><h2 class="h2" style="margin-bottom:12px">'+(t==="r"?'Nova receita':'Nova despesa')+'</h2>'+
'<div class="fld"><label for="fv">Valor em R$</label><input type="text" id="fv" inputmode="decimal" placeholder="Ex.: 1.250"></div>'+
'<div class="fld"><span class="lab">Tipo</span><div class="choices">'+C.map(function(c,i){return '<button type="button" class="ch" data-act="finCat" data-v="'+c+'" aria-pressed="'+(i===0)+'">'+c+'</button>'}).join("")+'</div></div>'+
'<div class="fld"><label for="ft">Descrição <span class="hint">(opcional)</span></label><input type="text" id="ft" placeholder="Ex.: 20 sacos de sal"></div>'+
'<div class="fld"><label for="fdt">Data</label><input type="date" id="fdt" value="'+REF+'"></div>'+
'<div class="dbtns"><button type="button" class="btn ghost lg" data-act="close">Cancelar</button><button type="submit" class="btn lg">Salvar</button></div></form>'}
function logAdd(txt){S.log.push({d:REF,txt:txt})}

var A={
tab:function(d){UI.tab=d.v;try{history.replaceState(history.state,"","#"+d.v)}catch(e){}render();top()},
fillLogin:function(d){UI.lu=d.v;UI.lp="demo";render()},
login:function(){var a=$("#lu"),b=$("#lp");UI.lu=a?a.value:UI.lu;UI.lp=b?b.value:UI.lp;var u=USERS[String(UI.lu||"").trim().toLowerCase()];if(!u||String(UI.lp||"").trim()!=="demo"){toast("Usuário ou senha não conferem. Use um dos acessos de demonstração.");return}
UI.user=u;try{localStorage.setItem(KEY+"-sessao",JSON.stringify(u))}catch(e){}UI.page="app";UI.tab="painel";render();top()},
compr:function(){var el=$("#dlg");el.innerHTML=dCompr(0);if(!el.open)el.showModal()},
comprLote:function(d){$("#dlg").innerHTML=dCompr(+d.v)},
falarDono:function(){toast("Na versão real, abre o WhatsApp da fazenda.")},
irpesar:function(){UI.tab="pesagem";render();top()},
dlg:function(d){var el=$("#dlg");if(d.v==="mov")UI.mv=mvNew();el.innerHTML=d.v==="mov"?dMov():dFin(d.v);if(!el.open)el.showModal()},
mvTipo:function(d){UI.mv.tipo=d.v;UI.mv.q=1;UI.mv.pasto=lote(UI.mv.lote).pasto;$("#dlg").innerHTML=dMov()},
mvVoltar:function(){UI.mv.tipo="";$("#dlg").innerHTML=dMov()},
mvLote:function(d){UI.mv.lote=+d.v;UI.mv.pasto=lote(UI.mv.lote).pasto;$("#dlg").innerHTML=dMov()},
mvPasto:function(d){UI.mv.pasto=+d.v;$("#dlg").innerHTML=dMov()},
mvQ:function(d){var m=UI.mv;m.q=Math.max(1,m.q+ +d.v);$("#mq").value=m.q;$("#mvprev").textContent=mvPrev()},
finCat:function(d,el){UI.fcat=d.v;[].forEach.call(el.parentNode.children,function(b){b.setAttribute("aria-pressed",b===el)})},
pickLote:function(d){UI.lote=+d.v;UI.w=[];render()},
close:function(){$("#dlg").close()},
addPeso:function(){var el=$("#peso"),v=num(el.value);if(v<=0||v>1500){toast("Digite um peso válido em kg.");return}UI.w.push(v);UI.focus=true;render()},
undoPeso:function(){UI.w.pop();render()},
salvarPeso:function(){var l=lote(UI.lote),n=UI.w.length;if(!n)return;if(dias(UI.date,l.cur.d)<=0){toast("A data precisa ser depois da última pesagem.");return}
var med=Math.round(UI.w.reduce(function(a,b){return a+b},0)/n);l.prev=l.cur;l.cur={p:med,d:UI.date};(l.hist=l.hist||[]).push({d:UI.date,p:med});logAdd("Pesagem do lote "+l.nome+": média de "+med+" kg ("+n+" animais)");UI.w=[];save();UI.tab="pastos";render();top();toast("Pesagem salva. Média de "+med+" kg.")},
delFin:function(d){S.fin=S.fin.filter(function(x){return x.id!==+d.v});save();render()},
done:function(d){S.san.forEach(function(x){if(x.id===+d.v)x.done=!x.done});save();render()},
addTask:function(){var t=UI.tarefa;if(!t.txt.trim()){toast("Escreva o que precisa ser feito.");return}S.san.push({id:S.nid++,txt:t.txt.trim(),d:t.d,lote:+t.lote,done:false});UI.tarefa={txt:"",d:REF,lote:"0"};save();render();toast("Tarefa adicionada.")},
op:function(d){var k=d.k;if(d.m==="1"){var a=UI.op[k]||[],i=a.indexOf(d.v);if(i>-1)a.splice(i,1);else a.push(d.v);UI.op[k]=a}else UI.op[k]=d.v;render()},
gerar:function(){var t="Campo Certo, minhas respostas:\n";QC.forEach(function(q){var v=UI.op[q.k];if(v&&v.length)t+="\n"+q.t+"\n"+(Array.isArray(v)?v.join("; "):v)+"\n"});if(t.length<40){toast("Responda pelo menos uma pergunta.");return}UI.opOut=t;render();var o=$("#out");if(o)o.scrollIntoView({block:"center"})},
copiar:function(){var o=$("#out");function sel(){o.focus();o.select();toast("Selecione e copie o texto.")}
if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(UI.opOut).then(function(){toast("Respostas copiadas.")},sel);else sel()},
drTipo:function(d){UI.dr.tipo=d.v;render()},
zoom:function(d,el){$("#dzimg").src=el.querySelector("img").src;$("#dz").showModal()},
fechar:function(){$("#dz").close()},
pick:function(){$("#file").click()},
rmFoto:function(d){UI.dr.f.splice(+d.i,1);render()},
addDiario:function(){var d=UI.dr,mm=num(d.mm);if(d.tipo==="Chuva"&&mm<=0){toast("Informe a chuva em milímetros.");return}if(d.tipo!=="Chuva"&&!d.txt.trim()&&!d.f.length){toast("Escreva algo ou anexe uma foto.");return}
S.diario.push({id:S.nid++,d:REF,tipo:d.tipo,mm:d.tipo==="Chuva"?mm:0,txt:d.txt.trim(),f:d.f});UI.dr={tipo:d.tipo,txt:"",mm:"",f:[]};save();render();toast("Registrado no diário.")},
reset:function(){S=seed();UI.lote=S.lotes[0].id;UI.w=[];save();render();top();toast("Dados de exemplo restaurados.")}
};
document.addEventListener("click",function(e){var a=e.target.closest("[data-act]");if(!a)return;var f=A[a.dataset.act];if(f)f(a.dataset,a)});
document.addEventListener("input",function(e){if(e.target.id==="mq"){UI.mv.q=Math.max(1,Math.floor(num(e.target.value))||1);$("#mvprev").textContent=mvPrev();return}if(e.target.id==="mv"){UI.mv.v=e.target.value;return}
var k=e.target.dataset&&e.target.dataset.bind;if(!k)return;var v=e.target.value;
if(k==="ttxt")UI.tarefa.txt=v;else if(k==="tdata")UI.tarefa.d=v;else if(k==="tlote")UI.tarefa.lote=v;else if(k==="drtxt")UI.dr.txt=v;else if(k==="drmm")UI.dr.mm=v;else if(k.indexOf("op_")===0)UI.op[k.slice(3)]=v});
document.addEventListener("change",function(e){var c=e.target.dataset&&e.target.dataset.chg;if(!c)return;
if(c==="lote"){UI.lote=+e.target.value;UI.w=[];render()}else if(c==="date"){UI.date=e.target.value;render()}});
$("#file").addEventListener("change",function(){var fl=this,fs=Array.prototype.slice.call(fl.files,0,4),out=[],n=fs.length;fl.value="";if(!n)return;
fs.forEach(function(f){shrink(f,function(u){if(u)out.push(u);if(--n)return;if(!out.length){toast("Não consegui abrir a imagem.");return}UI.dr.f=UI.dr.f.concat(out).slice(0,4);render()})})});
document.addEventListener("keydown",function(e){if(e.key==="Enter"&&e.target.id==="peso"){e.preventDefault();A.addPeso()}});
document.addEventListener("submit",function(e){e.preventDefault();var f=e.target;
if(f.dataset.form==="mov"){var m=UI.mv,t=m.tipo,l=lote(m.lote),q=m.q,v=num(m.v);
if(t==="mudar"){if(m.pasto===l.pasto){toast("O lote já está nesse pasto.");return}l.pasto=m.pasto;logAdd("Lote "+l.nome+" foi para "+pasto(l.pasto).nome)}
else{if((t==="venda"||t==="morte")&&q>l.qtd){toast("O lote só tem "+l.qtd+" animais.");return}
if(t==="nasc"){l.qtd+=q;logAdd("Nasceram "+q+" bezerros no lote "+l.nome)}
if(t==="compra"){l.qtd+=q;logAdd("Compra de "+q+" animais para o lote "+l.nome);if(v>0)S.fin.push({id:S.nid++,t:"d",d:REF,cat:"Compra de animais",v:v,txt:"Compra de "+q+" animais"})}
if(t==="venda"){l.qtd-=q;logAdd("Venda de "+q+" animais do lote "+l.nome);if(v>0)S.fin.push({id:S.nid++,t:"r",d:REF,cat:"Venda de animais",v:v,txt:"Venda de "+q+" animais"})}
if(t==="morte"){l.qtd-=q;logAdd("Perda de "+q+" animais no lote "+l.nome)}}
save();$("#dlg").close();render();toast("Registrado.")}
if(f.dataset.form==="fin"){var val=num($("#fv").value);if(val<=0){toast("Informe o valor.");return}
S.fin.push({id:S.nid++,t:f.dataset.t,d:$("#fdt").value||REF,cat:UI.fcat,v:val,txt:$("#ft").value.trim()});save();$("#dlg").close();render();toast("Lançamento salvo.")}});
var qs=new URLSearchParams(location.search),sess=getSess();UI.user=sess;
if(qs.get("lote")){UI.page="lote";UI.qlote=parseInt(qs.get("lote"),10)}
else if(sess){UI.page="app";var h0=location.hash.slice(1);if(["painel","pastos","pesagem","diario","dinheiro","opiniao","sanidade"].indexOf(h0)>-1)UI.tab=h0}
else UI.page="login";
Shell.init({render:render,onReset:function(){A.reset()},onLogout:function(){try{localStorage.removeItem(KEY+"-sessao")}catch(e){}location.href=location.pathname}});
render();
document.addEventListener("keydown",function(e){if(e.key==="Enter"&&(e.target.id==="lp"||e.target.id==="lu"))A.login()});
if("serviceWorker" in navigator&&location.protocol==="https:")navigator.serviceWorker.register("sw.js").catch(function(){});
})();
