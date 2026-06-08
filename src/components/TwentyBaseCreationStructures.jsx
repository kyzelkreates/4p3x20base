/* ─────────────────────────────────────────────────────────────
   TwentyBaseCreationStructures.jsx
   4P3X Verse™ V4.0 — 20 Base Creation Structures Section
   Integrated into existing single-page layout.
   Uses existing CSS vars from styles.css + own .tbs-* namespace.
   Powered by 4P3X Intelligent AI™  Created by Kyzel Kreates™
───────────────────────────────────────────────────────────── */
import React, { useState } from 'react';
import {
  BrainCircuit, Boxes, CheckCircle2, Layers3,
  Network, ShieldCheck, Sparkles, Zap, TrendingUp,
  Users, ChevronDown, ChevronUp, Globe, Cpu,
} from 'lucide-react';
import { baseSystems, versionLadder, publicBenefitPillars } from '../data/baseSystems.js';

/* ── Category icon map ────────────────────────────────────── */
const CAT_ICONS = {
  'Business / Operations / Project Systems': <Boxes size={22} />,
  'Fleet / Transport / Route Systems': <Globe size={22} />,
  'Coaching & Support': <Users size={22} />,
  'Learning & Training': <Layers3 size={22} />,
  'Compliance / Audit / Evidence': <ShieldCheck size={22} />,
  'Health / Wellbeing / Recovery': <Sparkles size={22} />,
  'Education / Care / Community Support': <TrendingUp size={22} />,
  'AI Agent / Portfolio / Documentation Systems': <BrainCircuit size={22} />,
};

const CAT_COLORS = {
  'Business / Operations / Project Systems': 'gold',
  'Fleet / Transport / Route Systems': 'purple',
  'Coaching & Support': 'green',
  'Learning & Training': 'green',
  'Compliance / Audit / Evidence': 'gold',
  'Health / Wellbeing / Recovery': 'purple',
  'Education / Care / Community Support': 'green',
  'AI Agent / Portfolio / Documentation Systems': 'purple',
};

/* ── Maturity badge colour ────────────────────────────────── */
const maturityColor = (m) => {
  if (m === 'Core reusable base') return 'tbs-badge--green';
  if (m === 'Specialised reusable base') return 'tbs-badge--gold';
  if (m === 'Meta infrastructure base') return 'tbs-badge--purple';
  return 'tbs-badge--muted';
};

/* ── Single expandable base card ─────────────────────────── */
function BaseCard({ base }) {
  const [open, setOpen] = useState(false);
  const catColor = CAT_COLORS[base.category] || 'gold';

  return (
    <article className={`tbs-base-card tbs-base-card--${catColor}`}>
      <div className="tbs-base-card__header" onClick={() => setOpen(o => !o)} role="button" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
        aria-expanded={open}>
        <div className="tbs-base-card__meta">
          <span className="tbs-base-card__ver">{base.version}</span>
          <span className={`tbs-badge ${maturityColor(base.maturity)}`}>{base.maturity}</span>
        </div>
        <h3 className="tbs-base-card__name">{base.name}</h3>
        <p className="tbs-base-card__category">{base.category}</p>
        <p className="tbs-base-card__short">{base.short}</p>
        <button className="tbs-base-card__toggle" aria-label={open ? 'Collapse' : 'Expand'}>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      {open && (
        <div className="tbs-base-card__body">
          <div className="tbs-base-card__modules">
            <strong>Core modules</strong>
            <ul>
              {base.modules.map(m => (
                <li key={m}><CheckCircle2 size={13} className="tbs-icon-green" />{m}</li>
              ))}
            </ul>
          </div>

          <div className="tbs-ai-box">
            <Sparkles size={15} className="tbs-icon-green" />
            <p><strong>4P3X Intelligent AI™ layer:</strong> {base.aiLayer}</p>
          </div>

          <div className="tbs-base-card__directions">
            <strong>Can generate</strong>
            <div className="tbs-tag-row">
              {base.refactorDirections.map(d => (
                <span key={d} className="tbs-tag">{d}</span>
              ))}
            </div>
          </div>

          <div className="tbs-base-card__best">
            <strong>Best for</strong>
            <div className="tbs-tag-row">
              {base.bestFor.map(b => (
                <span key={b} className="tbs-tag tbs-tag--alt">{b}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

/* ── Main section component ───────────────────────────────── */
export default function TwentyBaseCreationStructures() {
  const categories = [...new Set(baseSystems.map(b => b.category))];
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All'
    ? baseSystems
    : baseSystems.filter(b => b.category === activeCategory);

  return (
    <section className="section dark tbs-section" id="creation-bases">

      {/* ── Section header ─────────────────────────────────── */}
      <div className="sectionHead">
        <span className="pill purple">V4.0 Infrastructure Layer</span>
        <h2>V4.0 — 20 Base Creation Structures</h2>
        <p className="lead">
          The 4P3X Verse™ expands from one proven reusable base into twenty specialist creation bases.
          These are not random app ideas — they are structured foundations designed to create many different
          product types across training, care, logistics, compliance, business operations, AI agents,
          public benefit systems, and sector-specific dashboards.
        </p>
      </div>

      {/* ── Clarification block ────────────────────────────── */}
      <div className="tbs-clarify-block">
        <div className="tbs-clarify-inner">
          <Network size={32} className="tbs-icon-gold" />
          <div>
            <strong>What a base actually is</strong>
            <p>
              The 20 bases are not 20 separate apps. They are 20 reusable creation structures —
              specialist foundations that future products can be created from. Each base can generate
              multiple sector-ready products by changing the data model, workflows, dashboards, PWA
              experience, AI guidance layer, and backend connection.
            </p>
          </div>
        </div>
        <div className="tbs-clarify-formula">
          <span className="tbs-formula-pill">Base</span>
          <span className="tbs-formula-op">+</span>
          <span className="tbs-formula-pill">Sector config</span>
          <span className="tbs-formula-op">+</span>
          <span className="tbs-formula-pill">Backend</span>
          <span className="tbs-formula-op">=</span>
          <span className="tbs-formula-pill tbs-formula-pill--gold">Live product</span>
        </div>
      </div>

      {/* ── Architecture block ─────────────────────────────── */}
      <div className="tbs-arch-grid">
        <div className="tbs-arch-card">
          <Layers3 size={26} className="tbs-icon-green" />
          <strong>Reusable modular architecture</strong>
          <p>Dashboard + PWA + AI guidance + demo/live patterns built once, refactored across sectors.</p>
        </div>
        <div className="tbs-arch-card">
          <ShieldCheck size={26} className="tbs-icon-gold" />
          <strong>SSOT discipline</strong>
          <p>Single source of truth across the base structure — config-driven changes, no repeated rewrites.</p>
        </div>
        <div className="tbs-arch-card">
          <BrainCircuit size={26} className="tbs-icon-purple" />
          <strong>Bounded AI guidance layer</strong>
          <p>Each base has a named 4P3X Intelligent AI™ role with clear allowed actions and forbidden actions.</p>
        </div>
        <div className="tbs-arch-card">
          <Cpu size={26} className="tbs-icon-green" />
          <strong>Demo / Live mode switching</strong>
          <p>Demo Mode shows the product. Live Mode runs the product. Backend connects when the product is ready.</p>
        </div>
      </div>

      {/* ── Version ladder ─────────────────────────────────── */}
      <div className="tbs-ladder-wrap" id="version-ladder">
        <div className="tbs-ladder-head">
          <span className="pill">Base Infrastructure Growth Model</span>
          <h3>From one proven base to a full 20-base creation system</h3>
        </div>
        <div className="tbs-ladder-grid">
          {versionLadder.map(step => (
            <div
              key={step.version}
              className={`tbs-ladder-card ${step.version === 'V4.0' ? 'tbs-ladder-card--active' : ''}`}
            >
              <span className="tbs-ladder-ver">{step.version}</span>
              <strong className="tbs-ladder-label">{step.label}</strong>
              <p>{step.meaning}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Category overview ──────────────────────────────── */}
      <div className="tbs-cats-wrap">
        <div className="tbs-ladder-head">
          <span className="pill green">Organised by use case</span>
          <h3>20 bases across 8 specialist product categories</h3>
        </div>
        <div className="tbs-cat-grid">
          {categories.map(cat => {
            const count = baseSystems.filter(b => b.category === cat).length;
            return (
              <button
                key={cat}
                className={`tbs-cat-card ${activeCategory === cat ? 'tbs-cat-card--active' : ''}`}
                onClick={() => setActiveCategory(activeCategory === cat ? 'All' : cat)}
              >
                <span className="tbs-cat-icon">{CAT_ICONS[cat] || <Boxes size={22} />}</span>
                <strong>{cat}</strong>
                <span className="tbs-cat-count">{count} {count === 1 ? 'base' : 'bases'}</span>
              </button>
            );
          })}
        </div>
        {activeCategory !== 'All' && (
          <button className="tbs-clear-filter" onClick={() => setActiveCategory('All')}>
            ✕ Clear filter — show all 20 bases
          </button>
        )}
      </div>

      {/* ── 20 Base cards ──────────────────────────────────── */}
      <div className="tbs-base-grid" id="tbs-base-grid">
        <div className="tbs-base-grid__head">
          <span className="pill">
            {activeCategory === 'All' ? 'All 20 Creation Bases' : activeCategory}
            {' '}— {filtered.length} {filtered.length === 1 ? 'base' : 'bases'}
          </span>
          <p>
            Each base is a reusable creation structure, not a standalone app.
            Click any card to expand modules, AI layer, and product directions.
          </p>
        </div>
        <div className="tbs-cards-layout">
          {filtered.map(base => (
            <BaseCard key={base.id} base={base} />
          ))}
        </div>
      </div>

      {/* ── Combination block ──────────────────────────────── */}
      <div className="tbs-combo-block">
        <Zap size={36} className="tbs-icon-gold" />
        <div className="tbs-combo-text">
          <span className="pill gold">Why 20 bases creates far more than 20 products</span>
          <h3>One base. Multiple refactor directions. Many product combinations.</h3>
          <p>
            A single base can become multiple product directions. When 20 bases are available, the
            strongest features from each can be combined into client-specific systems — for example,
            a route safety base combined with a field worker PWA, evidence base, BI base and
            communication portal can become a full transport safety platform.
          </p>
          <p className="tbs-combo-formula">
            20 bases × multiple refactor directions × cross-base combinations =
            hundreds of direct product routes and thousands of possible product configurations.
          </p>
        </div>
      </div>

      {/* ── Demo/Live block ────────────────────────────────── */}
      <div className="tbs-demolive-block">
        <div className="tbs-demolive-inner">
          <div className="tbs-demolive-card tbs-demolive-card--demo">
            <strong>Demo Mode</strong>
            <p>Shows the product. Safe labelled data. No backend required. Test and present the full product experience.</p>
          </div>
          <div className="tbs-demolive-divider">→</div>
          <div className="tbs-demolive-card tbs-demolive-card--live">
            <strong>Live Mode</strong>
            <p>
              Runs the product. With demo mode switched off and a backend such as Supabase, Firebase, or another
              suitable system connected, each sector variant moves from presentation demo to fully functional
              live product with real users, authentication, persistent records and real-time updates.
            </p>
          </div>
        </div>
      </div>

      {/* ── Public benefit block ───────────────────────────── */}
      <div className="tbs-benefit-wrap">
        <div className="tbs-ladder-head">
          <span className="pill green">Public Benefit Positioning</span>
          <h3>Useful software built faster through reusable infrastructure</h3>
          <p className="tbs-benefit-intro">
            The public benefit of the 4P3X Verse™ comes from reusable infrastructure. Instead of
            building every support tool from scratch, one controlled base structure can be adapted
            into mental health support PWAs, recovery companions, training platforms, safer route-planning
            systems, welfare coordination tools, compliance dashboards, and evidence-capture products.
            This means useful software can be designed faster, tested safely in demo mode, and later
            moved into live operation with a backend when appropriate.
          </p>
        </div>
        <div className="tbs-benefit-grid">
          {publicBenefitPillars.map(p => (
            <div key={p.num} className="tbs-benefit-card">
              <span className="tbs-benefit-num">{p.num}</span>
              <strong>{p.title}</strong>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Closing statement ──────────────────────────────── */}
      <div className="tbs-closing">
        <span className="pill purple">4P3X Verse™ V4.0</span>
        <h3>One Base Architecture. Many AI-Powered Products.</h3>
        <p>
          The 4P3X Verse™ V4.0 20-base structure shows how a single modular engineering approach can
          expand into a serious product ecosystem: dashboards, PWAs, AI agents, demo/live mode switching,
          evidence capture, reports, backend-ready workflows and sector-specific refactoring.
        </p>
        <p className="tbs-closing-brand">
          Powered by <strong>4P3X Intelligent AI™</strong> — Created by <strong>Kyzel Kreates™</strong>
        </p>
      </div>

    </section>
  );
}
