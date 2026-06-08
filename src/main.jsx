import React, { useState, useMemo, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight, Boxes, BrainCircuit, CheckCircle2, Compass,
  Database, ExternalLink, Factory, Layers3, ShieldCheck,
  Sparkles, Wrench, Zap, AlertTriangle, FileText, Globe,
  ChevronDown, ChevronUp, Play, Server, Monitor, Cpu,
  TrendingUp, Users, Building2, Award, Code2, GitBranch
} from 'lucide-react';
import { bases } from './data/bases.js';
import TwentyBaseCreationStructures from './components/TwentyBaseCreationStructures.jsx';
import { agents } from './agents/agentRegistry.js';
import './styles.css';

/* ── Utility components ─────────────────────────────────────── */
function Pill({ children, color }) {
  return <span className={`pill ${color || ''}`}>{children}</span>;
}

function SectionHead({ pill, h2, lead, pillColor }) {
  return (
    <div className="sectionHead">
      {pill && <Pill color={pillColor}>{pill}</Pill>}
      <h2>{h2}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}

/* ── Nav ────────────────────────────────────────────────────── */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: '#what', label: 'What is V4.0' },
    { href: '#evolution', label: 'Evolution' },
    { href: '#bases', label: '20 Bases' },
    { href: '#creation-bases', label: 'Creation Structures' },
    { href: '#refactor', label: 'Refactor Logic' },
    { href: '#demolive', label: 'Demo / Live' },
    { href: '#agents', label: 'AI Agents' },
    { href: '#investor', label: 'Investor' },
    { href: '#products', label: 'Live Products' },
  ];
  return (
    <nav className="topNav">
      <div className="navInner">
        <strong className="navBrand">4P3X Verse™ V4.0</strong>
        <div className="navLinks">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navLink">{l.label}</a>
          ))}
        </div>
        <button className="navBurger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="navMobile">
          {links.map(l => (
            <a key={l.href} href={l.href} className="navLink" onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
function Hero() {
  return (
    <header className="hero" id="top">
      <div className="orb orbA" />
      <div className="orb orbB" />
      <div className="orb orbC" />
      <div className="heroInner">
        <Pill color="gold">Version 4.0 Roadmap Pack</Pill>
        <h1 className="heroTitle">
          4P3X Verse™<br />
          <span className="heroAccent">Version 4.0</span>
        </h1>
        <p className="heroSub">
          20 Refactorable Base Architectures for AI-Powered Product Creation
        </p>
        <p className="heroLead">
          A modular infrastructure layer showing how one reusable engineering approach can expand into
          20 specialist product bases — each capable of becoming many sector-ready software products.
        </p>
        <div className="heroPowered">
          Powered by <strong>4P3X Intelligent AI™</strong> Created by <strong>Kyzel Kreates™</strong>
        </div>
        <div className="ctaRow">
          <a href="#bases" className="button primary">
            <Boxes size={18} /> Explore the 20 Bases
          </a>
          <a href="#refactor" className="button">
            <GitBranch size={18} /> View Refactor Strategy
          </a>
          <a href="#investor" className="button">
            <TrendingUp size={18} /> Investor &amp; Partner Summary
          </a>
          <a href="#agents" className="button">
            <BrainCircuit size={18} /> View AI Agent Layer
          </a>
        </div>
        <div className="heroStats">
          {[
            { val: '20', label: 'Specialist Bases' },
            { val: '100+', label: 'Possible Variants' },
            { val: '10', label: 'Live Deployed Products' },
            { val: 'Demo ⇄ Live', label: 'Switchable Mode' },
          ].map(s => (
            <div className="heroStat glass" key={s.label}>
              <strong>{s.val}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

/* ── What Is V4.0 ───────────────────────────────────────────── */
function WhatIsV4() {
  return (
    <section className="section" id="what">
      <SectionHead
        pill="What is 4P3X Verse™ Version 4.0?"
        h2="Infrastructure thinking, not just app demos."
        pillColor="gold"
      />
      <div className="grid2">
        <div className="card large">
          <Factory className="icon gold" size={36} />
          <h3>The Planned Next Evolution</h3>
          <p>
            Version 4.0 shows the future direction of the 4P3X Verse™: a structured library of reusable product bases
            that can be adapted, customised, connected to real data, and deployed into different sectors.
          </p>
          <p>
            This is not a collection of random apps. It is a modular AI-powered software ecosystem built around
            reusable architecture, controlled refactoring, demo/live switching, and sector-specific product generation.
          </p>
        </div>
        <div className="card large">
          <Layers3 className="icon purple" size={36} />
          <h3>Why 20 Bases Matter</h3>
          <p>
            Each base is a specialist engine for a specific type of software product. Instead of starting from scratch,
            future products can be generated, refactored, customised, validated, and deployed from the most suitable base.
          </p>
          <p>
            The power is the reusable structure: controlled refactoring, configurable content, safe AI agents,
            reusable UI patterns, and fast idea-to-working-product movement.
          </p>
        </div>
        <div className="card large">
          <Code2 className="icon green" size={36} />
          <h3>One Architecture, Many Products</h3>
          <p>
            Content, sector wording, dashboards, PWAs, data models, and AI agents can all be swapped through a
            config-driven layer. The same architecture generates multiple products without starting from scratch.
          </p>
        </div>
        <div className="card large">
          <ShieldCheck className="icon silver" size={36} />
          <h3>Accurate Positioning</h3>
          <p>
            Version 4.0 is a starter/spec/buildable infrastructure pack. The 20 bases are architecture-ready
            blueprints. Each can be expanded into a full product engine through controlled build runs —
            not a single rewrite.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Evolution ──────────────────────────────────────────────── */
function Evolution() {
  const versions = [
    {
      ver: 'V1.0',
      title: 'Original Base Concept',
      desc: 'The original 4P3X Intelligent AI™ base concept — the foundation idea that one modular structure could power many different products.',
      status: 'Origin',
      color: 'silver'
    },
    {
      ver: 'V2.0',
      title: 'Working Deployed Products',
      desc: 'Live deployed product and demo ecosystem. Real products built and deployed, proving the concept works across multiple sectors.',
      status: 'Deployed',
      color: 'green'
    },
    {
      ver: 'V3.0',
      title: '5 Refactorable Base Structures',
      desc: 'First structured refactor layer. Five specialist base architectures identified, tested, and validated across live products.',
      status: 'Validated',
      color: 'gold'
    },
    {
      ver: 'V4.0',
      title: '20 Specialist Base Architectures',
      desc: 'The full 20-base specialist library. 20 fully defined refactorable base architectures — each a specialist product engine ready for sector-specific deployment.',
      status: '▶ Current',
      color: 'purple'
    },

  ];
  return (
    <section className="section dark" id="evolution">
      <SectionHead
        pill="Ecosystem Evolution"
        h2="From idea to modular infrastructure."
        lead="The 4P3X Verse™ has been built in deliberate, validated stages — not as a single big bang."
        pillColor="purple"
      />
      <div className="evolutionGrid">
        {versions.map((v, i) => (
          <div className={`evolutionCard glass ${v.ver === 'V4.0' ? 'active' : ''}`} key={v.ver}>
            <div className="evolutionTop">
              <span className={`verBadge ${v.color}`}>{v.ver}</span>
              <span className={`statusTag ${v.color}`}>{v.status}</span>
            </div>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
            {i < versions.length - 1 && <div className="evolutionArrow">↓</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── 20 Bases ───────────────────────────────────────────────── */
function BaseCard({ base, onSelect, isSelected }) {
  return (
    <article
      className={`baseCard glass ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(base)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(base)}
    >
      <div className="baseTop">
        <span className="baseNo">Base {base.id}</span>
        <span className="badge">{base.category}</span>
      </div>
      <h3>{base.name}</h3>
      <p className="baseSum">{base.summary}</p>
      <div className="miniList">
        {base.canBecome.slice(0, 3).map(item => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="baseStatus">
        <CheckCircle2 size={13} /> {base.status}
      </div>
    </article>
  );
}

function BaseDetail({ base }) {
  return (
    <aside className="detailPanel glass">
      <div className="detailHeader">
        <span className="baseNo big">Base {base.id}</span>
        <span className="badge">{base.category}</span>
      </div>
      <h2 className="detailTitle">{base.name}</h2>
      <p>{base.summary}</p>

      <div className="detailSection">
        <h4>Core Modules</h4>
        <ul>{base.modules.map(x => <li key={x}>{x}</li>)}</ul>
      </div>

      <div className="detailSection">
        <h4>Can Be Refactored Into</h4>
        <div className="tagList">
          {base.canBecome.map(x => <span key={x} className="tag green">{x}</span>)}
        </div>
      </div>

      <div className="detailSection">
        <h4>Suggested Sectors</h4>
        <div className="tagList">
          {base.sectors.map(x => <span key={x} className="tag silver">{x}</span>)}
        </div>
      </div>

      <div className="detailSection">
        <h4>AI Agent Role</h4>
        <p className="aiNote"><BrainCircuit size={14} /> {base.aiAgent}</p>
      </div>

      <div className="detailSection">
        <h4>Backend / Live Mode Path</h4>
        <p className="backendNote"><Server size={14} /> {base.backendPath}</p>
      </div>

      <div className="statusChip">
        <CheckCircle2 size={14} /> {base.status}
      </div>
    </aside>
  );
}

function Bases() {
  const [selected, setSelected] = useState(bases[0]);
  const [filter, setFilter] = useState('All');
  const categories = useMemo(() => ['All', ...new Set(bases.map(b => b.category))], []);
  const filtered = useMemo(
    () => filter === 'All' ? bases : bases.filter(b => b.category === filter),
    [filter]
  );

  return (
    <section className="section" id="bases">
      <SectionHead
        pill="20 Base Architecture Library"
        h2="Each base is a specialist product engine."
        lead="Click any base to explore its modules, refactor targets, AI agent role, and backend path."
        pillColor="green"
      />
      <div className="categoryRow">
        {categories.map(c => (
          <button
            key={c}
            className={`catBtn ${filter === c ? 'active' : ''}`}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="basesLayout">
        <div className="baseGrid">
          {filtered.map(base => (
            <BaseCard
              key={base.id}
              base={base}
              onSelect={setSelected}
              isSelected={selected?.id === base.id}
            />
          ))}
        </div>
        <BaseDetail base={selected} />
      </div>
    </section>
  );
}

/* ── Refactor Logic ─────────────────────────────────────────── */
function RefactorLogic() {
  const steps = [
    { icon: <Layers3 size={22} />, label: 'Base Architecture', desc: 'Select the closest matching base from the library.' },
    { icon: <Code2 size={22} />, label: 'Config Layer', desc: 'Replace terminology, labels, and structure through config — not code rewrites.' },
    { icon: <Sparkles size={22} />, label: 'Branding Layer', desc: 'Update product name, colour scheme, and identity without touching core logic.' },
    { icon: <Database size={22} />, label: 'Data Model', desc: 'Swap the data entities, field names, and relationships for the new sector.' },
    { icon: <BrainCircuit size={22} />, label: 'AI Agent Layer', desc: 'Bind the AI agent to the product purpose with clear allowed/forbidden rules.' },
    { icon: <Monitor size={22} />, label: 'Demo Mode', desc: 'Validate the product with safe, labelled sample data before going live.' },
    { icon: <Server size={22} />, label: 'Live Backend Mode', desc: 'Connect Supabase, Firebase, or custom API. Switch off demo data globally.' },
    { icon: <Globe size={22} />, label: 'Deployed Product', desc: 'A sector-ready, working product — built from a base, not from scratch.' },
  ];
  return (
    <section className="section dark" id="refactor">
      <SectionHead
        pill="Refactor Logic"
        h2="How one base becomes many products."
        lead="Every product in the 4P3X Verse™ follows the same controlled refactor pathway. No random rebuilds. No feature drift."
        pillColor="gold"
      />
      <div className="refactorFlow">
        {steps.map((s, i) => (
          <React.Fragment key={s.label}>
            <div className="refactorStep glass">
              <div className="refactorIcon">{s.icon}</div>
              <strong>{s.label}</strong>
              <p>{s.desc}</p>
            </div>
            {i < steps.length - 1 && <div className="flowArrow">→</div>}
          </React.Fragment>
        ))}
      </div>
      <div className="refactorPrinciples">
        {[
          'Content can be swapped through config — no code rewrites',
          'Sector wording changed at the data/config layer',
          'Dashboards adapted without touching base logic',
          'PWAs repurposed from the same installable shell',
          'Demo data globally disabled when going live',
          'Live data connected without touching demo logic',
          'AI agents bounded per product purpose',
          'Same structure generates multiple products',
        ].map(p => (
          <div key={p} className="principleTag">
            <CheckCircle2 size={14} /> {p}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Demo / Live Mode ───────────────────────────────────────── */
function DemoLive() {
  return (
    <section className="section" id="demolive">
      <SectionHead
        pill="Demo Mode / Live Mode"
        h2='"Demo Mode shows the product. Live Mode runs the product."'
        lead="Every 4P3X Verse™ base is designed with a clean, hard separation between presentation and production."
        pillColor="green"
      />
      <div className="demoLiveGrid">
        <div className="card large demoCard">
          <Monitor className="icon gold" size={40} />
          <h3>Demo Mode</h3>
          <ul className="modeList">
            <li><CheckCircle2 size={14} /> Uses clearly labelled sample data</li>
            <li><CheckCircle2 size={14} /> Safe for investor / client / employer demos</li>
            <li><CheckCircle2 size={14} /> Allows testing without real users</li>
            <li><CheckCircle2 size={14} /> Demo data is globally disableable via config</li>
            <li><CheckCircle2 size={14} /> Demo data never hardcoded into business logic</li>
            <li><CheckCircle2 size={14} /> No real authentication required</li>
            <li><CheckCircle2 size={14} /> Safe screenshots and portfolio presentation</li>
          </ul>
          <p className="modeNote">Demo data does not pretend to be live operational data.</p>
        </div>
        <div className="modeArrow">⇄</div>
        <div className="card large liveCard">
          <Server className="icon green" size={40} />
          <h3>Live Mode</h3>
          <ul className="modeList">
            <li><CheckCircle2 size={14} /> Demo data switched off globally</li>
            <li><CheckCircle2 size={14} /> Real backend connected (Supabase / Firebase / API)</li>
            <li><CheckCircle2 size={14} /> Real users and authentication added</li>
            <li><CheckCircle2 size={14} /> Persistent records and real-time dashboards</li>
            <li><CheckCircle2 size={14} /> PWA sync where relevant</li>
            <li><CheckCircle2 size={14} /> No backend secrets in frontend / public code</li>
            <li><CheckCircle2 size={14} /> Config-guarded API keys only</li>
          </ul>
          <p className="modeNote">Live mode only described as active when actually connected and tested.</p>
        </div>
      </div>
      <div className="apiGuard glass">
        <ShieldCheck className="icon gold" size={28} />
        <div>
          <strong>4P3X API Config Guard™</strong>
          <p>The following are permanently blocked from frontend / public code: <code>SUPABASE_SERVICE_ROLE_KEY</code> · <code>OPENAI_API_KEY</code> · <code>GROQ_API_KEY</code> · <code>STRIPE_SECRET_KEY</code> · <code>DATABASE_URL</code> · <code>JWT_SECRET</code> · <code>PRIVATE_KEY</code> · <code>WEBHOOK_SECRET</code> · <code>ADMIN_TOKEN</code></p>
        </div>
      </div>
    </section>
  );
}

/* ── AI Agent Layer ─────────────────────────────────────────── */
function AgentSection() {
  const iconMap = {
    Wrench: <Wrench size={26} />,
    ShieldCheck: <ShieldCheck size={26} />,
    FileText: <FileText size={26} />,
    AlertTriangle: <AlertTriangle size={26} />,
    Sparkles: <Sparkles size={26} />,
    Zap: <Zap size={26} />,
  };
  return (
    <section className="section dark" id="agents">
      <SectionHead
        pill="4P3X Intelligent AI™ Agent Layer"
        h2="Bounded advisory AI agents across every base."
        lead="AI agents in the 4P3X Verse™ are advisory, explainable, and bounded. They do not make unsafe legal, medical, safeguarding, or emergency decisions."
        pillColor="purple"
      />
      <div className="agentGrid">
        {agents.map(agent => (
          <article className="card agentCard" key={agent.name}>
            <div className="agentIcon">{iconMap[agent.icon] || <BrainCircuit size={26} />}</div>
            <h3>{agent.name}</h3>
            <p>{agent.purpose}</p>
            <div className="agentRule allowed">
              <strong>✓ Allowed</strong>
              <p>{agent.allowed}</p>
            </div>
            <div className="agentRule forbidden">
              <strong>✗ Forbidden</strong>
              <p>{agent.forbidden}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="safetyNotice glass">
        <AlertTriangle className="icon gold" size={22} />
        <p>
          <strong>Safety rule:</strong> AI agents must be advisory, bounded, explainable, and must not make unsafe legal, medical,
          safeguarding, or emergency decisions unless a human-approved system explicitly allows it with full disclaimer and audit trail.
        </p>
      </div>
    </section>
  );
}

/* ── Investor Section ───────────────────────────────────────── */
function Investor() {
  const points = [
    { icon: <TrendingUp size={22} />, title: 'Fast Learning Speed', desc: 'Multiple sector-ready products built during a focused self-directed development period using AI-assisted tooling.' },
    { icon: <Boxes size={22} />, title: 'Systems Thinking', desc: 'Not random apps. One modular architecture direction expanded into 20 specialist bases across many industries.' },
    { icon: <GitBranch size={22} />, title: 'Product Architecture Ability', desc: 'Demonstrable skill in building reusable, configurable, and refactorable product infrastructure — not just prototypes.' },
    { icon: <Cpu size={22} />, title: 'AI-Assisted Development', desc: 'Proven ability to use AI tools, LLM integrations, and config-driven architecture to build faster and smarter.' },
    { icon: <Globe size={22} />, title: 'Deployable Thinking', desc: 'Products are deployed, live, and accessible. Not just ideas or wireframes — real working demos with live URLs.' },
    { icon: <Users size={22} />, title: 'Multi-Sector Reach', desc: 'Bases cover logistics, care, compliance, education, health, enterprise, marketplace, CRM, and more.' },
    { icon: <Building2 size={22} />, title: 'Commercial Potential', desc: 'Architecture supports SaaS, pilot programmes, grant applications, council contracts, and digital transformation briefs.' },
    { icon: <Award size={22} />, title: 'Credible Investor Story', desc: 'Clear roadmap, honest positioning, and a structured build plan from 20 defined base architectures to unlimited sector-specific product variants.' },
  ];
  return (
    <section className="section" id="investor">
      <SectionHead
        pill="Investor · Partner · Employer"
        h2="Why this architecture matters."
        lead='"This is not a collection of random apps. It is a modular AI-powered software ecosystem built around reusable architecture, controlled refactoring, demo/live switching, and sector-specific product generation."'
        pillColor="gold"
      />
      <div className="investorGrid">
        {points.map(p => (
          <div className="card investorCard" key={p.title}>
            <div className="investorIcon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="creatorStatement glass">
        <Sparkles className="icon gold" size={28} />
        <blockquote>
          "I have used AI-assisted development to build a first-of-its-kind modular product architecture: one base system
          capable of becoming many different sector-ready software products through controlled refactoring, configurable data,
          AI guidance layers, and demo-to-live deployment pathways. This has been developed during a rapid self-directed
          learning period. The achievement is not only the number of products produced — the important part is the reusable
          architecture behind them."
          <cite>— Kyzel Kreates™, Creator of 4P3X Verse™</cite>
        </blockquote>
      </div>
      <div className="sectorTags">
        {[
          'Investors', 'Employers', 'Councils', 'Charities', 'SMEs',
          'Training Providers', 'Logistics', 'Compliance Bodies', 'Care Organisations',
          'Education', 'Digital Transformation', 'Grant Bodies'
        ].map(s => <span key={s} className="sectorTag">{s}</span>)}
      </div>
    </section>
  );
}

/* ── Live Products ──────────────────────────────────────────── */
const PRODUCTS = [
  {
    name: '4P3X Intelligent AI™ Base Core',
    sub: 'Created by Kyzel Kreates™',
    desc: 'The foundational refactorable base project — the core architecture layer.',
    url: 'https://basev0.vercel.app/',
    base: 'Base Architecture Core',
    color: 'gold'
  },
  {
    name: 'TherapyLink™',
    sub: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    desc: 'A therapy and care coordination operating system with demo/live mode.',
    url: 'https://therapylinkos.vercel.app/4p3x_carelink/ap3x/demo/index.html',
    base: 'Welfare / Care Base',
    color: 'purple'
  },
  {
    name: 'AutoSkill OS™',
    sub: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    desc: 'Skills training and assessment platform for the automotive and technical sector.',
    url: 'https://autoskillos.vercel.app/ap3x/demo/index.html',
    base: 'LMS / Training Base',
    color: 'green'
  },
  {
    name: 'Big Vs Best Routes Fleet OS™',
    sub: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    desc: 'Fleet operations, route management, and field operations dashboard.',
    url: 'https://bigvsfleetos.vercel.app/',
    base: 'Fleet / Route / Field Ops Base',
    color: 'gold'
  },
  {
    name: 'ResponseLink OS™',
    sub: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    desc: 'Community welfare response and mission coordination operating system.',
    url: 'https://responselinkosv1.vercel.app/',
    base: 'Welfare / Response Base',
    color: 'green'
  },
  {
    name: 'Careerlink OS™',
    sub: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    desc: 'Career development, skills tracking, and employment pathway platform.',
    url: 'https://4p3xaiclos.vercel.app/',
    base: 'LMS / CRM Base',
    color: 'purple'
  },
  {
    name: 'Recharge — Burnout Recovery',
    sub: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    desc: 'Mental health and burnout recovery companion with daily check-ins and goal tracking.',
    url: 'https://burnout-mh.vercel.app/ap3x/companion/index.html',
    base: 'Health / Recovery / Coaching Base',
    color: 'gold'
  },
  {
    name: 'Four Paws Training & Enrichment Academy™',
    sub: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    desc: 'Dog training academy with course catalogue, quiz gating, and progress tracking.',
    url: 'https://fourpawsdemo.vercel.app/ap3x/demo/index.html#deploy',
    base: 'LMS / Training Base',
    color: 'green'
  },
  {
    name: 'Quantum Compliance OS™',
    sub: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    desc: 'Compliance, audit, evidence collection, and risk management platform.',
    url: 'https://4p3xaiqc.netlify.app/',
    base: 'Compliance / Audit / Evidence Base',
    color: 'purple'
  },
  {
    name: 'TrustSheild OS™',
    sub: 'Powered by 4P3X Intelligent AI™ Created by Kyzel Kreates™',
    desc: 'Reputation monitoring, crisis response, and brand safety management platform.',
    url: 'https://4p3xaitsos.netlify.app/#/welcome',
    base: 'Crisis / Reputation Monitoring Base',
    color: 'gold'
  },
];

function Products() {
  return (
    <section className="section dark" id="products">
      <SectionHead
        pill="Current Live Product Ecosystem"
        h2="10 deployed products. One architecture."
        lead="Every product below was built from a 4P3X Verse™ base architecture — proving the refactor model works at scale."
        pillColor="green"
      />
      <div className="productsGrid">
        {PRODUCTS.map(p => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`productCard glass ${p.color}`}
          >
            <div className="productTop">
              <span className={`productBase ${p.color}`}>{p.base}</span>
              <ExternalLink size={14} />
            </div>
            <h3>{p.name}</h3>
            <p className="productSub">{p.sub}</p>
            <p className="productDesc">{p.desc}</p>
            <span className="productLink">Visit Live Product →</span>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ── Technical Architecture ─────────────────────────────────── */
function TechArch() {
  const stack = [
    { label: 'React + Vite', desc: 'Component-based UI with fast build and HMR. Module-type ES imports throughout.' },
    { label: 'Config-Driven Data', desc: 'bases.js and agentRegistry.js are SSOT. No logic hardcoded into components.' },
    { label: 'PWA-Ready Pattern', desc: 'Manifest included. Service worker layer ready. Installable on mobile and desktop.' },
    { label: 'Demo / Live Separation', desc: 'Demo data globally disableable. Live mode described only when backend is connected.' },
    { label: 'AI Agent Architecture', desc: 'Agent registry pattern. Each agent has bounded allowed/forbidden rules in config.' },
    { label: 'Supabase / Firebase Ready', desc: 'Backend path documented per base. No secrets in frontend/public code.' },
    { label: 'Responsive Layout', desc: 'Mobile-first CSS. Tested at 320px, 375px, 768px, 1024px, 1366px, and wide desktop.' },
    { label: 'Static Frontend Deploy', desc: 'Builds to /dist. Deploy to Vercel, Netlify, or any static host. Zero backend required for demo mode.' },
  ];
  return (
    <section className="section" id="tech">
      <SectionHead
        pill="Technical Architecture"
        h2="Config-driven. Component-based. Backend-ready."
        pillColor="silver"
      />
      <div className="techGrid">
        {stack.map(s => (
          <div className="card techCard" key={s.label}>
            <Code2 className="icon silver" size={20} />
            <strong>{s.label}</strong>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Future ─────────────────────────────────────────────────── */
function Future() {
  return (
    <section className="section dark" id="future">
      <SectionHead
        pill="Future Roadmap"
        h2="Version 4.0 — The Complete 20-Base Infrastructure"
        lead="Version 4.0 is the full realisation of the 4P3X Verse™ architecture: 20 specialist base engines, each capable of generating many sector-ready products through controlled refactoring."
        pillColor="purple"
      />
      <div className="futureGrid">
        <div className="card large">
          <TrendingUp className="icon purple" size={32} />
          <h3>20 Bases. One Architecture.</h3>
          <p>The 20-base library is the complete vision. Quality and depth over quantity. Each base is fully specified, testable, and refactor-proven — ready to generate sector-specific products without starting from scratch.</p>
        </div>
        <div className="card large">
          <Boxes className="icon gold" size={32} />
          <h3>Unlimited Product Variants</h3>
          <p>20 specialist bases covering logistics, care, compliance, education, health, enterprise, marketplace, CRM, and more — one architecture approach generating unlimited sector-ready product variants.</p>
        </div>
        <div className="card large">
          <Server className="icon green" size={32} />
          <h3>Full Backend Integration</h3>
          <p>Next phase targets full Supabase, Firebase, and custom API integration across all 20 bases — moving each from demo-ready to live-operational for real-world deployment.</p>
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ──────────────────────────────────────────────── */
function CTA() {
  return (
    <section className="section ctaSection" id="cta">
      <div className="ctaBlock glass">
        <Sparkles className="icon gold" size={40} />
        <h2>4P3X Verse™ Version 4.0</h2>
        <p className="ctaLead">
          The next step toward a reusable AI-powered product infrastructure system — one modular architecture,
          many specialist bases, and a pathway from demo to live deployed products.
        </p>
        <p className="ctaPowered">Powered by <strong>4P3X Intelligent AI™</strong> Created by <strong>Kyzel Kreates™</strong></p>
        <div className="ctaRow">
          <a href="#bases" className="button primary"><Boxes size={18} /> Explore Bases</a>
          <a href="#products" className="button"><Globe size={18} /> View Live Products</a>
          <a href="#investor" className="button"><TrendingUp size={18} /> Investor Summary</a>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="footerBrand">
          <ShieldCheck className="icon green" size={22} />
          <strong>4P3X Verse™ Version 4.0</strong>
        </div>
        <p>20 Refactorable Base Architecture System</p>
        <p>Powered by <strong>4P3X Intelligent AI™</strong> Created by <strong>Kyzel Kreates™</strong></p>
        <p className="footerSmall">
          Demo Mode shows the product. Live Mode runs the product. All AI agents are advisory
          unless explicitly and safely wired to bounded automation with human oversight.
        </p>
        <p className="footerSmall">
          No backend secrets are exposed in this frontend. All live products link to externally deployed systems.
        </p>
      </div>
    </footer>
  );
}

/* ── App Root ───────────────────────────────────────────────── */
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <WhatIsV4 />
      <Evolution />
      <Bases />
      <TwentyBaseCreationStructures />
      <RefactorLogic />
      <DemoLive />
      <AgentSection />
      <Investor />
      <Products />
      <TechArch />
      <Future />
      <CTA />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
