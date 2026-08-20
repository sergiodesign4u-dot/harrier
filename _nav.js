// _nav.js : ЄДИНИЙ реєстр навігації всього проєкту.
// Одне джерело правди для бокової панелі КОЖНОЇ сторінки.
// ДВА ПРАПОРЦІ, ДВА РІЗНІ ПИТАННЯ. done:true = сторінка ІСНУЄ і на неї можна клікнути
// (ставиться тим кроком, що її збудував, навіть якщо етап ще в роботі). wip:true = етап
// ЩЕ НЕ ЗАКРИТИЙ (знімається на закритті, разом зі статусом Done у README). Поки стоїть wip,
// етап показується ЛІНКОМ із бейджем WIP, а Next лишається на ньому і не тікає вперед.
// active / Next / SOON, гармошка й лінки рахуються самі при рендері.
//
// Кожна html-сторінка підключає файл так:
//   <aside id="sidebar"></aside>
//   <script>
//     window.NAV_BASE = '../';                 // префікс до кореня (глибина сторінки; '' у корені, '../' на 1 рівень)
//     window.NAV_SECTIONS = [                   // секції САМЕ цієї сторінки для під-лінків активного етапу; можна []
//       { id:'intro', label:'Introduction' },
//     ];
//     window.NAV_ACTIVE = 'ia/structure.html';  // ОПЦІЙНО: якщо сторінки НЕМА в NAV (вузол детальної IA,
//                                               // засівна кольорова копія в design/). Вказуй НАЙБЛИЖЧУ сторінку реєстру: сторінка покажеться
//                                               // окремим під-пунктом одразу під нею, тож хінт задає і етап, і місце
//     window.NAV_ACTIVE_LABEL = 'Home (0.0)';   // ОПЦІЙНО, у парі з NAV_ACTIVE: як назвати цей під-пункт.
//   </script>                                  // Не задано - береться document.title
//   <script src="../_nav.js"></script>
//
// ГЛОБАЛИ НАЛЕЖАТЬ ЦЬОМУ ФАЙЛУ. Поетапні реєстри (ia/_nav.js, wireframes/_nav.js,
// design/_nav.js, design/kit/_nav.js) тримають свої дані у ВЛАСНОМУ неймспейсі
// (IA_NAV, WF_NAV, DESIGN_NAV, KIT_NAV) і не чіпають NAV, NAV_BASE, NAV_SECTIONS,
// NAV_ACTIVE, NAV_ACTIVE_LABEL та класи nav-*. Хаб-сторінки (ia/structure.html, wireframes/overview.html,
// design/overview.html, design/kit/overview.html) підключають два реєстри одночасно:
// якщо локальний оголосить window.NAV, роадмеп мовчки відмалює чужий масив.

// Групи (children) власного page НЕ мають: топ-лінк рахується з дітей — веде на
// першу ГОТОВУ сторінку групи, тому він ніколи не вказує на ще неіснуючий файл.
window.NAV = [
  { label:'Foundation Research', page:'research/research.html', done:true },
  { label:'User Research', wip:true, children:[
      { label:'Personas',  page:'research/personas.html',  done:true },
      { label:'JTBD',      page:'research/jtbd.html',      done:true },
      { label:'CJM As-Is', page:'research/cjm-as-is.html', done:false },
      { label:'CJM To-Be', page:'research/cjm-to-be.html', done:false },
  ]},
  { label:'Information Architecture (IA)', children:[
      { subhead:'Base layer' },
      { label:'Flows',        page:'ia/flows.html',       done:false },
      { label:'Concept map',  page:'ia/concept-map.html', done:false },
      { subhead:'Detail layer' },
      { label:'Sitemap',      page:'ia/sitemap.html',     done:false },
      { label:'Structure',    page:'ia/structure.html',   done:false },
  ]},
  { label:'Wireframes',  page:'wireframes/overview.html', done:false },
  { label:'Voice',       page:'voice/voice.html',      done:false },
  { label:'Concept', children:[
      { label:'Directions', page:'design/concept/directions.html', done:false },
      { label:'Concept',    page:'design/concept/concept.html',    done:false },
  ]},
  { label:'UI + Visual',         page:'design/overview.html', done:false },
  { label:'Tokens + Components', page:'design/kit/overview.html',    done:false },
  { label:'Design System',       page:'design/kit/why.html',    done:false },
  { label:'Responsive',          page:null, done:false },
  { label:'Animation',           page:null, done:false },
  { label:'Rollout',             page:null, done:false },
  { label:'Handoff',             page:null, done:false },
];

(function () {
  var BASE = window.NAV_BASE || '';
  var here = location.pathname;
  var SECTIONS = window.NAV_SECTIONS || [];

  function pagesOf(item){ return (item.children || [item]).filter(function(c){ return c.page; }); }
  var flat = [];
  NAV.forEach(function(it){ pagesOf(it).forEach(function(p){ flat.push(p); }); });

  function isHere(p){ return p.page && here.slice(-p.page.length) === p.page; }
  var current = flat.filter(isHere)[0] || null;

  // сторінка поза реєстром (вузол детальної IA, кольорова копія) називає свій етап через NAV_ACTIVE
  var hinted = (!current && window.NAV_ACTIVE)
    ? (flat.filter(function(p){ return p.page === window.NAV_ACTIVE; })[0] || null) : null;
  var activePage = current || hinted;
  function contains(item, p){ return p && pagesOf(item).indexOf(p) !== -1; }

  // НАСТУПНИЙ рахуємо по ЕТАПАХ, не по сторінках: етап без сторінки (Responsive,
  // Animation, Rollout, Handoff) теж має отримувати Next, інакше після останньої готової
  // сторінки бейдж зникає з роадмепу назавжди.
  // wip тримає Next на місці: етап, у якого сторінка вже готова, але робота триває,
  // не має віддавати бейдж наступному.
  var nextItem = NAV.filter(function(it){
    var ps = pagesOf(it);
    return it.wip || ps.length === 0 || ps.some(function(p){ return !p.done; });
  })[0] || null;
  var nextPage = nextItem ? (pagesOf(nextItem).filter(function(p){ return !p.done; })[0] || null) : null;

  function badge(text){ var b = document.createElement('span'); b.className = 'nav-badge nav-badge-' + text.toLowerCase(); b.textContent = text; return b; }
  function sectionList(){
    var s = document.createElement('ul'); s.className = 'nav-sections';
    SECTIONS.forEach(function(sec){
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + sec.id; a.className = 'nav-section'; a.setAttribute('data-section', sec.id); a.textContent = sec.label;
      li.appendChild(a); s.appendChild(li);
    });
    return s;
  }
  function subItem(label, page, isCur, tag){
    var s = document.createElement('li'); s.className = 'nav-subitem';
    var a = document.createElement(page ? 'a' : 'span');
    if (page) a.href = BASE + page;
    a.className = 'nav-link' + (isCur ? ' is-current' : '');
    a.textContent = label;
    if (tag) a.appendChild(badge(tag));
    s.appendChild(a);
    if (isCur && SECTIONS.length) s.appendChild(sectionList());
    return s;
  }

  var el = document.getElementById('sidebar');
  if (!el) return;
  var ul = document.createElement('ul'); ul.className = 'nav-roadmap';

  NAV.forEach(function(item){
    var pages = pagesOf(item);
    var doneCount = pages.filter(function(p){ return p.done; }).length;
    var fullyDone = pages.length > 0 && doneCount === pages.length;
    var isActive  = contains(item, activePage);
    // топ-лінк веде на першу ГОТОВУ сторінку етапу, тому ніколи не вказує на ще неіснуючий файл;
    // якщо готових нема, лінк дає лише сторінка, на якій ми СТОЇМО (current), а не підказана
    // через NAV_ACTIVE (hinted): підказка називає етап, але сама та сторінка може ще не існувати.
    var target = pages.filter(function(p){ return p.done; })[0] || (contains(item, current) ? current : null);

    var li = document.createElement('li');
    li.className = 'nav-item ' + (isActive ? 'is-active' : item.wip ? 'is-wip' : fullyDone ? 'is-done' : doneCount ? 'is-partial' : 'is-soon');

    var top;
    if (target) { top = document.createElement('a'); top.href = BASE + target.page; }
    else { top = document.createElement('span'); }               // ще не роблений етап: не лінк
    top.className = 'nav-top'; top.textContent = item.label;
    if (!isActive) {                                             // на власній сторінці бейджа не буває
      if (item.wip) top.appendChild(badge('WIP'));               // у роботі: сторінка вже існує, тож це ЛІНК, а не сірий напис
      else if (item === nextItem) top.appendChild(badge('Next'));
      else if (!doneCount) top.appendChild(badge('SOON'));        // Next уже позначає наступний; SOON лише на решті
    }
    li.appendChild(top);

    if (isActive && item.children) {                             // гармошка: під-лінки лише під активним етапом
      var sub = document.createElement('ul'); sub.className = 'nav-sub';
      item.children.forEach(function(c){
        if (c.subhead) { var h = document.createElement('li'); h.className = 'nav-subhead'; h.textContent = c.subhead; sub.appendChild(h); return; }
        var isCur = (c === current);
        var tag = (c === nextPage && !isCur) ? 'Next' : ((!c.done && !isCur) ? 'SOON' : null);
        sub.appendChild(subItem(c.label, (c.done || isCur) ? c.page : null, isCur, tag));
        // сторінка поза реєстром стає власним під-пунктом і несе СВОЇ NAV_SECTIONS
        if (c === hinted) sub.appendChild(subItem(window.NAV_ACTIVE_LABEL || document.title, null, true, null));
      });
      li.appendChild(sub);
    }
    // етап БЕЗ дітей (Wireframes, Voice, UI + Visual, Tokens + Components, ...). Гілка вище сюди не
    // дістає, бо там item.children, тож сторінку поза реєстром треба показати саме тут — інакше
    // NAV_ACTIVE працював би лише під групами, і design/kit/kit.html не зʼявився б у панелі ніколи
    if (isActive && !item.children) {
      if (item === hinted) {                                     // ми на сторінці ПОЗА реєстром
        var sub2 = document.createElement('ul'); sub2.className = 'nav-sub';
        sub2.appendChild(subItem(window.NAV_ACTIVE_LABEL || document.title, null, true, null));
        li.appendChild(sub2);                                    // subItem сам підчепить NAV_SECTIONS цієї сторінки
      } else if (SECTIONS.length) li.appendChild(sectionList()); // ми на самій сторінці реєстру
    }

    ul.appendChild(li);
  });

  el.innerHTML = ''; el.appendChild(ul);

  if (SECTIONS.length && 'IntersectionObserver' in window) {
    var links = {};
    Array.prototype.forEach.call(document.querySelectorAll('.nav-section'), function(a){ links[a.getAttribute('data-section')] = a; });
    var obs = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (!e.isIntersecting) return;
        Object.keys(links).forEach(function(k){ links[k].classList.remove('is-current'); });
        if (links[e.target.id]) links[e.target.id].classList.add('is-current');
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    SECTIONS.forEach(function(sec){ var t = document.getElementById(sec.id); if (t) obs.observe(t); });
  }
})();
