"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Flower2,
  Heart,
  Leaf,
  Quote,
  Sparkles,
} from "lucide-react";

const petalCoordinates = [
  { left: "4%", delay: 0, duration: 17, scale: 0.8, rotate: 16 },
  { left: "12%", delay: 4, duration: 21, scale: 0.58, rotate: -28 },
  { left: "23%", delay: 8, duration: 19, scale: 0.7, rotate: 42 },
  { left: "39%", delay: 2, duration: 23, scale: 0.52, rotate: 12 },
  { left: "55%", delay: 10, duration: 20, scale: 0.76, rotate: -38 },
  { left: "69%", delay: 6, duration: 18, scale: 0.62, rotate: 33 },
  { left: "82%", delay: 12, duration: 22, scale: 0.86, rotate: -14 },
  { left: "94%", delay: 3, duration: 19, scale: 0.56, rotate: 20 },
  { left: "8%", delay: 14, duration: 24, scale: 0.72, rotate: -12 },
  { left: "18%", delay: 18, duration: 20, scale: 0.92, rotate: 35 },
  { left: "31%", delay: 15, duration: 26, scale: 0.64, rotate: -42 },
  { left: "47%", delay: 21, duration: 22, scale: 0.82, rotate: 28 },
  { left: "61%", delay: 17, duration: 25, scale: 0.68, rotate: -25 },
  { left: "74%", delay: 20, duration: 21, scale: 0.9, rotate: 15 },
  { left: "87%", delay: 16, duration: 27, scale: 0.74, rotate: -34 },
  { left: "98%", delay: 23, duration: 23, scale: 0.62, rotate: 46 },
];

function AnimatedBouquet() {
  return (
    <div className="animated-bouquet" role="img" aria-label="A hand gathered bouquet of pink and white lilies">
      <svg viewBox="0 0 500 640" aria-hidden="true">
        <defs>
          <linearGradient id="wrap" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#f4ddd1" />
            <stop offset=".52" stopColor="#d9a9a4" />
            <stop offset="1" stopColor="#b87b82" />
          </linearGradient>
          <linearGradient id="stem" x1="0" x2="1">
            <stop stopColor="#4d7152" />
            <stop offset="1" stopColor="#9aa879" />
          </linearGradient>
          <radialGradient id="whitePetal">
            <stop stopColor="#fffaf0" />
            <stop offset=".72" stopColor="#f4e7d9" />
            <stop offset="1" stopColor="#d9b7b5" />
          </radialGradient>
          <radialGradient id="pinkPetal">
            <stop stopColor="#f8ddd7" />
            <stop offset=".7" stopColor="#d9959e" />
            <stop offset="1" stopColor="#a95869" />
          </radialGradient>
          <radialGradient id="goldCenter">
            <stop stopColor="#f5d98c" />
            <stop offset="1" stopColor="#b4774d" />
          </radialGradient>
          <filter id="bouquetShadow"><feGaussianBlur stdDeviation="9" /></filter>
        </defs>

        <ellipse cx="250" cy="601" rx="135" ry="22" fill="#6c4d4b" opacity=".14" filter="url(#bouquetShadow)" />
        <g className="bouquet-stems" fill="none" stroke="url(#stem)" strokeLinecap="round">
          <path d="M250 568 Q238 390 102 116" strokeWidth="8" />
          <path d="M250 570 Q252 356 190 78" strokeWidth="7" />
          <path d="M250 570 Q273 358 281 61" strokeWidth="8" />
          <path d="M250 570 Q304 377 387 120" strokeWidth="7" />
          <path d="M250 570 Q337 420 437 231" strokeWidth="6" />
          <path d="M250 570 Q208 398 58 268" strokeWidth="6" />
          <path d="M250 570 Q226 380 350 190" strokeWidth="5" />
        </g>

        <g className="bouquet-leaves" fill="#6f8c68" opacity=".88">
          <path d="M157 326 Q88 282 65 212 Q145 226 178 293Z" />
          <path d="M178 398 Q87 378 48 321 Q133 318 198 367Z" />
          <path d="M329 331 Q400 268 439 188 Q350 222 312 295Z" />
          <path d="M304 423 Q404 403 462 348 Q367 340 295 385Z" />
          <path d="M245 285 Q181 224 183 152 Q244 183 264 248Z" />
          <path d="M277 265 Q333 195 390 176 Q357 250 294 303Z" />
        </g>

        <g className="bouquet-buds">
          <path d="M99 140 Q77 108 100 84 Q124 103 113 139Z" fill="#d18d96" />
          <path d="M420 179 Q410 144 440 130 Q456 158 435 184Z" fill="#e0a1a5" />
          <path d="M60 276 Q39 246 62 226 Q85 243 76 275Z" fill="#d28c95" />
        </g>

        <g className="bouquet-flower flower-one" transform="translate(103 111)">
          <ellipse rx="25" ry="70" fill="url(#whitePetal)" transform="rotate(-42)" />
          <ellipse rx="25" ry="70" fill="url(#whitePetal)" transform="rotate(42)" />
          <ellipse rx="25" ry="70" fill="url(#whitePetal)" transform="rotate(90)" />
          <ellipse rx="25" ry="70" fill="url(#whitePetal)" transform="rotate(138)" />
          <circle r="18" fill="url(#goldCenter)" />
          <circle r="5" fill="#8e5d48" />
        </g>
        <g className="bouquet-flower flower-two" transform="translate(190 73) scale(.9)">
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(-42)" />
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(42)" />
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(90)" />
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(138)" />
          <circle r="18" fill="url(#goldCenter)" />
          <circle r="5" fill="#8e5d48" />
        </g>
        <g className="bouquet-flower flower-three" transform="translate(282 58) scale(.94)">
          <ellipse rx="25" ry="72" fill="url(#whitePetal)" transform="rotate(-42)" />
          <ellipse rx="25" ry="72" fill="url(#whitePetal)" transform="rotate(42)" />
          <ellipse rx="25" ry="72" fill="url(#whitePetal)" transform="rotate(90)" />
          <ellipse rx="25" ry="72" fill="url(#whitePetal)" transform="rotate(138)" />
          <circle r="18" fill="url(#goldCenter)" />
          <circle r="5" fill="#8e5d48" />
        </g>
        <g className="bouquet-flower flower-four" transform="translate(386 117) scale(.83)">
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(-42)" />
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(42)" />
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(90)" />
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(138)" />
          <circle r="18" fill="url(#goldCenter)" />
          <circle r="5" fill="#8e5d48" />
        </g>
        <g className="bouquet-flower flower-five" transform="translate(57 264) scale(.72)">
          <ellipse rx="25" ry="70" fill="url(#whitePetal)" transform="rotate(-42)" />
          <ellipse rx="25" ry="70" fill="url(#whitePetal)" transform="rotate(42)" />
          <ellipse rx="25" ry="70" fill="url(#whitePetal)" transform="rotate(90)" />
          <ellipse rx="25" ry="70" fill="url(#whitePetal)" transform="rotate(138)" />
          <circle r="18" fill="url(#goldCenter)" />
          <circle r="5" fill="#8e5d48" />
        </g>
        <g className="bouquet-flower flower-six" transform="translate(437 225) scale(.72)">
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(-42)" />
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(42)" />
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(90)" />
          <ellipse rx="25" ry="70" fill="url(#pinkPetal)" transform="rotate(138)" />
          <circle r="18" fill="url(#goldCenter)" />
          <circle r="5" fill="#8e5d48" />
        </g>

        <path className="bouquet-wrap" d="M142 426 Q250 468 358 426 L316 604 Q250 627 184 604Z" fill="url(#wrap)" opacity=".96" />
        <path d="M171 464 Q250 491 329 464" fill="none" stroke="#f8e9df" strokeWidth="4" opacity=".7" />
        <path d="M201 475 L219 601 M250 484 L250 612 M299 475 L281 601" fill="none" stroke="#9d646c" strokeWidth="2" opacity=".35" />
        <path className="bouquet-ribbon" d="M250 498 Q226 466 199 485 Q221 515 250 508 Q279 515 301 485 Q274 466 250 498Z" fill="#b86f79" />
        <path d="M246 507 Q219 552 202 573" fill="none" stroke="#b86f79" strokeWidth="10" strokeLinecap="round" />
        <path d="M254 507 Q281 552 298 573" fill="none" stroke="#b86f79" strokeWidth="10" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function PetalField() {
  const reduceMotion = useReducedMotion();
  return (
    <div className="petal-field" aria-hidden="true">
      {petalCoordinates.map((petal, index) => (
        <motion.span
          className={`floating-petal petal-${index % 4}`}
          key={petal.left}
          style={{ left: petal.left, scale: petal.scale, rotate: petal.rotate }}
          initial={{ y: "-12vh", opacity: 0 }}
          animate={
            reduceMotion
              ? { opacity: 0.24 }
              : {
                  y: ["-12vh", "112vh"],
                  x: [0, index % 2 === 0 ? 55 : -45, 12, index % 2 === 0 ? -35 : 45],
                  rotate: [petal.rotate, petal.rotate + 80, petal.rotate - 30],
                  opacity: [0, 0.65, 0.48, 0],
                }
          }
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const reduceMotion = useReducedMotion();
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const bouquetStems = useMemo(() => Array.from({ length: 7 }, (_, i) => i), []);

  return (
    <main>
      <PetalField />

      <header className="site-header">
        <a href="#home" className="brand" aria-label="A bouquet with my apologies, home">
          <span className="brand-mark"><Flower2 size={17} strokeWidth={1.35} /></span>
          <span>petals &amp; meaning</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#bouquet">The bouquet</a>
          <a href="#note">The note</a>
        </nav>
        <a className="header-note" href="#note">A quiet note <ArrowUpRight size={14} /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <span className="eyebrow-line" />
            A NOTE, GATHERED WITH CARE
          </motion.div>
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            I’m <em>sorry Lilu.</em>
            <span>And I mean it.</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.65 }}
          >
            Some apologies deserve a little more room. This is a quiet gesture,
            gathered with care, offered without expectation, and meant sincerely.
          </motion.p>
          <motion.a
            className="scroll-link"
            href="#bouquet"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <span className="scroll-icon"><ArrowDown size={16} strokeWidth={1.5} /></span>
            <span>Read what each bloom means</span>
          </motion.a>
          <div className="hero-index" aria-hidden="true"><span>01</span> / 03</div>
        </div>

        <motion.div
          className="hero-art"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.94, rotate: 2.5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-image-wrap">
            <AnimatedBouquet />
          </div>
          <motion.div
            className="round-stamp"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 120 120">
              <defs><path id="stampCircle" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" /></defs>
              <text><textPath href="#stampCircle">A LITTLE BEAUTY · A SINCERE APOLOGY · </textPath></text>
            </svg>
            <span><Flower2 size={27} strokeWidth={1.1} /></span>
          </motion.div>
          <div className="photo-caption"><span>FLOWERS, WITH MEANING</span><span>EST. WITH CARE</span></div>
          <div className="hero-vertical-label">A SOFTER WAY TO SAY IT</div>
        </motion.div>
        <div className="hero-bottom-mark" aria-hidden="true"><span>❋</span> NO EXCUSES, JUST CARE</div>
      </section>

      <section className="bouquet-section section-shell" id="bouquet">
        <div className="section-topline"><span>02 — THE OFFERING</span><span>A QUIETER KIND OF SORRY</span></div>
        <div className="bouquet-grid">
          <Reveal className="bouquet-photo-column">
            <div className="bouquet-photo-frame">
              <div className="bouquet-photo"><AnimatedBouquet /></div>
              <span className="frame-corner frame-corner-tl" />
              <span className="frame-corner frame-corner-br" />
            </div>
            <div className="image-footnote"><span>FIG. 01</span><span>A BOUQUET OF LILIES</span></div>
          </Reveal>
          <Reveal className="bouquet-copy" delay={0.12}>
            <span className="small-kicker"><Sparkles size={14} strokeWidth={1.4} /> FOR WHAT I COULD NOT SAY WELL</span>
            <h2>Not a grand gesture.<br /><em>A true one.</em></h2>
            <p className="bouquet-lead">
              These lilies are not here to make the moment disappear. They are
              here to acknowledge it: I am wrong, I understand why it hurt,
              and I am sorry for putting that hurt in your hands. SORRY!!
            </p>
            <div className="meaning-list">
              <div><span className="meaning-number">01</span><div><strong>I see it now</strong><p>What I did, and how it landed with you.</p></div></div>
              <div><span className="meaning-number">02</span><div><strong>I own my part</strong><p>No explanations dressed up as excuses.</p></div></div>
              <div><span className="meaning-number">03</span><div><strong>I will do better</strong><p>With patience and changed actions.</p></div></div>
            </div>
            <a className="text-link" href="#note">Read the note <ArrowUpRight size={15} /></a>
          </Reveal>
        </div>
      </section>

      <section className="letter-section section-shell" id="note">
        <Reveal className="letter-card">
          <div className="letter-decoration" aria-hidden="true"><Quote size={25} strokeWidth={1.1} /></div>
          <div className="letter-meta"><span>04 — A SMALL NOTE</span><span>NO RESPONSE NEEDED</span></div>
          <div className="letter-layout">
            <div>
              <h2>The part I want<br /><em>you to know.</em></h2>
              <p className="letter-intro">
                An apology is not a request for you to feel better quickly.
                It is a promise to be honest about the impact of my choices.
              </p>
              <button className="note-toggle" type="button" onClick={() => setIsNoteOpen((open) => !open)} aria-expanded={isNoteOpen}>
                {isNoteOpen ? "Close the note" : "Open the note"} <ArrowUpRight size={15} />
              </button>
            </div>
            <div className={`letter-body${isNoteOpen ? " is-open" : ""}`}>
              <p>“I am sorry. Not just for the moment itself, but for the way I made you carry the weight of it.”</p>
              {isNoteOpen && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <p>I care about you more than I showed. You do not owe me an immediate answer, reassurance, or forgiveness. Sorry I couldn&apos;t give a real boqueut but I am able tu give you this. Sorry Cutie</p>
                  <span className="letter-signoff">With care, always My Cute Lilu.</span>
                </motion.div>
              )}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="promise-strip section-shell" aria-label="A promise for moving forward">
        <div className="promise-heading"><Leaf size={20} strokeWidth={1.2} /><span>A GENTLE PROMISE TO MY CUTIE</span></div>
        <div className="promise-grid">
          <div><Check size={17} /><p>Listen before I answer.</p></div>
          <div><Check size={17} /><p>Always care about you</p></div>
          <div><Check size={17} /><p>Give you all the time you need.</p></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-flower" aria-hidden="true"><Flower2 size={27} strokeWidth={1.05} /></div>
        <p><Heart size={17} fill="currentColor" strokeWidth={1} /> A bouquet, gathered with care.</p>
        <span>AND AN APOLOGY TO MY PRECIOUS LILU</span>
      </footer>
    </main>
  );
}
