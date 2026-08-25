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

// Групи (children) власного page НЕ мають: топ-лінк рахується з дітей , веде на
// першу ГОТОВУ сторінку групи, тому він ніколи не вказує на ще неіснуючий файл.
window.NAV = [
  { label:'Foundation Research', page:'research/research.html', done:true },
  { label:'User Research', children:[
      { label:'Personas',  page:'research/personas.html',  done:true },
      { label:'JTBD',      page:'research/jtbd.html',      done:true },
      { label:'CJM As-Is', page:'research/cjm-as-is.html', done:false, skip:true },
      { label:'CJM To-Be', page:'research/cjm-to-be.html', done:false, skip:true },
  ]},
  { label:'Information Architecture (IA)', children:[
      { subhead:'Base layer' },
      { label:'Flows',        page:'ia/flows.html',       done:true },
      { label:'Concept map',  page:'ia/concept-map.html', done:true },
      { subhead:'Detail layer' },
      { label:'Sitemap',      page:'ia/sitemap.html',     done:true },
      { label:'Structure',    page:'ia/structure.html',   done:true },
  ]},
  { label:'Wireframes',  page:'wireframes/overview.html', done:true },
  { label:'Voice',       page:'voice/voice.html',      done:true },
  { label:'Concept', children:[
      { label:'Directions', page:'design/concept/directions.html', done:true  },
      { label:'Concept',    page:'design/concept/concept.html',    done:true  },
  ]},
  { label:'UI + Visual',  page:'design/overview.html', done:true },
  /* ОДИН етап у роадмепі, ДВА проходи. Токени з компонентами і патерни з гідом це одна
     система: вони живуть в одній папці design/kit/, на одному стенді, і читач, що бачив
     два пункти, справедливо питав, чому дизайн-систем дві. Той самий жест, яким уже
     згруповані обидва шари IA і обидві частини User Research. Верхніх пунктів через це
     12, а не 13: рішення і його ціна записані в docs/decisions.md.
     README тримає СВІЙ рядок статусу на кожен етап, як і для CJM: сайдбар відстежує
     існування сторінки, README завершеність етапу. */
  { label:'Design System', children:[
      /* ДВІ ПЕРШІ ІСНУЮТЬ УЖЕ, і саме тому вони тут: топ-лінк групи веде на першу ГОТОВУ
         сторінку, тож без них пункт два кроки поспіль було б нікуди відкрити. Кіт це
         насіння системи, а не екран продукту, тому в роадмепі він стоїть під нею.
         НА КРОЦІ 4, коли зʼявиться overview.html і власна панель стенда, ці два рядки
         звіряються заново: сторінки стенда веде design/kit/_nav.js, і дублювати їх у
         кореневому реєстрі тоді вже нема потреби. */
      { label:'Tokens + Components', page:'design/kit/overview.html', done:true  },
      { label:'Patterns + Guide',    page:'design/kit/why.html',      done:true  },
  ]},
  { label:'Responsive',          page:'design/kit/responsive.html', done:true },
  { label:'Animation',           page:'design/kit/motion.html', done:true },
  /* THE PRODUCT'S OWN FRONT DOOR, and it has to be set by hand: the stage 01 registry
     wrote Rollout with page:null because no page existed then, and a finished stage
     with a null page stays a grey word instead of a link. It points at design/index.html
     rather than at the hub, because the hub is the UI + Visual item and two roadmap
     items on one page break the active highlight. */
  { label:'Rollout',             page:'design/index.html', done:true },
  { label:'Handoff',             page:'handoff/handoff.html', done:true, wip:true },
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
    return it.wip || ps.length === 0 || ps.some(function(p){ return !p.done && !p.skip; });
  })[0] || null;
  var nextPage = nextItem ? (pagesOf(nextItem).filter(function(p){ return !p.done && !p.skip; })[0] || null) : null;

  /* A LABEL IS DATA, AND PEOPLE WRITE MARKUP INTO IT ANYWAY. Read back from the DOM at
     1440 and at 360, the three section links of design/concept/directions.html rendered
     the seventeen characters `A &middot; Ledger` instead of `A · Ledger`. Nothing here
     was wrong: a label is a JavaScript string, every one of them is written with
     textContent, and textContent does not decode a character reference. Correcting the
     three strings cures that page; decoding here cures the CLASS, and the class is what
     recurs, because this file is one registry and 133 pages declare labels against it.
     IT CANNOT INTRODUCE MARKUP. The only string ever handed to innerHTML is a match of
     the pattern below, which admits nothing but `&`, `#`, letters, digits and `;`, so no
     tag, no attribute and no url can be built out of it; the decoded result then goes to
     textContent like every label before it. A label carrying a real `<` is left byte for
     byte alone and prints as itself, because it is data and not markup. */
  var decoder = document.createElement('textarea');
  function asText(s){
    return String(s == null ? '' : s).replace(/&(#\d+|#x[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]{1,31});/g,
      function(ref){ decoder.innerHTML = ref; return decoder.value; });
  }

  function badge(text){ var b = document.createElement('span'); b.className = 'nav-badge nav-badge-' + text.toLowerCase(); b.textContent = text; return b; }
  function sectionList(){
    var s = document.createElement('ul'); s.className = 'nav-sections';
    SECTIONS.forEach(function(sec){
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = '#' + sec.id; a.className = 'nav-section'; a.setAttribute('data-section', sec.id); a.textContent = asText(sec.label);
      li.appendChild(a); s.appendChild(li);
    });
    return s;
  }
  function subItem(label, page, isCur, tag){
    var s = document.createElement('li'); s.className = 'nav-subitem';
    var a = document.createElement(page ? 'a' : 'span');
    if (page) a.href = BASE + page;
    a.className = 'nav-link' + (isCur ? ' is-current' : '');
    a.textContent = asText(label);
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
    top.className = 'nav-top'; top.textContent = asText(item.label);
    if (!isActive) {                                             // на власній сторінці бейджа не буває
      if (item.wip) top.appendChild(badge('WIP'));               // у роботі: сторінка вже існує, тож це ЛІНК, а не сірий напис
      else if (item === nextItem) top.appendChild(badge('Next'));
      else if (!doneCount) top.appendChild(badge('SOON'));        // Next уже позначає наступний; SOON лише на решті
    }
    li.appendChild(top);

    if (isActive && item.children) {                             // гармошка: під-лінки лише під активним етапом
      var sub = document.createElement('ul'); sub.className = 'nav-sub';
      item.children.forEach(function(c){
        if (c.subhead) { var h = document.createElement('li'); h.className = 'nav-subhead'; h.textContent = asText(c.subhead); sub.appendChild(h); return; }
        var isCur = (c === current);
        var tag = (c === nextPage && !isCur) ? 'Next' : (c.skip ? 'OFF' : ((!c.done && !isCur) ? 'SOON' : null));
        sub.appendChild(subItem(c.label, (c.done || isCur) ? c.page : null, isCur, tag));
        // сторінка поза реєстром стає власним під-пунктом і несе СВОЇ NAV_SECTIONS
        if (c === hinted) sub.appendChild(subItem(window.NAV_ACTIVE_LABEL || document.title, null, true, null));
      });
      li.appendChild(sub);
    }
    // етап БЕЗ дітей (Wireframes, Voice, UI + Visual, Tokens + Components, ...). Гілка вище сюди не
    // дістає, бо там item.children, тож сторінку поза реєстром треба показати саме тут , інакше
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

  /* THE BAR, AND IT EXISTS FOR THE WIDTHS WHERE THE PANEL CANNOT BE A COLUMN.
     Below 900 the roadmap stacked a full page of navigation above the document, and
     hiding it outright left the reader with no way to reach any other stage, which is
     a different failure from the one that cured. The bar carries the name of what is
     open and a control that opens the rest; above 900 it is not rendered, because
     there the panel IS the column and has nothing to open. */
  var bar = document.createElement('div'); bar.className = 'nav-bar';
  var barName = document.createElement('span'); barName.className = 'nav-bar-name';
  var openStage = NAV.filter(function(it){ return it.page && here.indexOf(it.page) === 0; })[0];
  barName.textContent = asText(openStage ? openStage.label : 'Design process');
  var burger = document.createElement('button');
  burger.type = 'button'; burger.className = 'nav-burger'; burger.textContent = 'Stages';
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-controls', 'sidebar');
  burger.addEventListener('click', function () {
    var open = el.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  bar.appendChild(barName); bar.appendChild(burger);

  el.innerHTML = ''; el.appendChild(bar); el.appendChild(ul);

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
