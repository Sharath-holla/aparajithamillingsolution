"use client";

import React, { useState, useEffect } from "react";
import { SignInButton, Show, UserButton } from "@clerk/nextjs";
import { motion, type Variants } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function About() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const fadeUp: Variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeInOut" as const } } };
  const d = (delay: number): Variants => ({ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: "easeInOut" as const } } });

  const values = [
    { icon: "⚡", title: "Innovation", text: "Harnessing cutting-edge 3D design technology to deliver smarter, more efficient milling systems." },
    { icon: "🛡️", title: "Quality", text: "Every component is precision-engineered with stringent quality checks for durability and reliability." },
    { icon: "🤝", title: "Partnership", text: "We build long-term relationships, working closely with clients from concept to commissioning." },
    { icon: "🌱", title: "Sustainability", text: "Energy-efficient designs that reduce operational costs and environmental footprint." },
    { icon: "🎯", title: "Precision", text: "Advanced manufacturing infrastructure ensuring exact tolerances on every project we deliver." },
    { icon: "🚀", title: "Growth", text: "Committed to continuous improvement, we evolve our solutions as industries and technologies advance." },
  ];

  const milestones = [
    { year: "2008", label: "Legacy Begins", desc: "Late Mr. B. Somashekar starts his distinguished 15+ year engineering career." },
    { year: "2020", label: "500+ Projects", desc: "Over 500 Greenfield projects successfully delivered across diverse industrial sectors." },
    { year: "2026", label: "Aparajitha Founded", desc: "Established with a vision to modernise rice and dal milling with next-gen machinery." },
    { year: "Now", label: "Growing Fast", desc: "Expanding our product range and customer base across India and beyond." },
  ];

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    html,body{overflow-x:hidden;width:100%;}
    html{scroll-behavior:smooth;font-family:'Inter',system-ui,sans-serif;}
    .pw{min-height:100vh;background:linear-gradient(160deg,#f0fdf8 0%,#e8f5f2 25%,#fff 55%);color:#171717;overflow-x:hidden;}

    /* NAVBAR */
    .nb{position:fixed;top:0;left:0;right:0;z-index:50;transition:all 0.4s cubic-bezier(0.4,0,0.2,1);}
    .nb.sc{background:rgba(255,255,255,0.88);backdrop-filter:blur(20px) saturate(180%);border-bottom:1px solid rgba(0,137,123,0.12);box-shadow:0 4px 24px rgba(0,77,64,0.08);}
    .nb.tp{background:rgba(255,255,255,0.6);backdrop-filter:blur(8px);border-bottom:1px solid rgba(229,229,229,0.4);}
    .nc{max-width:1280px;margin:0 auto;padding:0 24px;height:72px;display:flex;align-items:center;justify-content:space-between;}
    .lg{display:flex;align-items:center;gap:10px;text-decoration:none;transition:transform 0.2s;}
    .lg:hover{transform:scale(1.02);}
    .li{height:44px;width:auto;object-fit:contain;}
    .lt{font-weight:800;font-size:1.15rem;letter-spacing:-0.03em;background:linear-gradient(135deg,#004d40,#00897b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
    .nr{display:flex;align-items:center;gap:12px;}
    .nl{display:none;align-items:center;gap:4px;}
    .hmb{display:block;background:none;border:none;color:#333;cursor:pointer;padding:4px;margin-left:8px;}
    @media(min-width:768px){.nl{display:flex;} .hmb{display:none;}}

    .mbo{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:1000;opacity:0;pointer-events:none;transition:opacity 0.3s ease;}
    .mbo.open{opacity:1;pointer-events:all;}
    .mbc{position:fixed;top:0;right:-280px;width:280px;height:100%;background:#fff;z-index:1001;padding:24px;display:flex;flex-direction:column;gap:16px;transition:transform 0.3s cubic-bezier(0.4,0,0.2,1);box-shadow:-4px 0 24px rgba(0,0,0,0.1);}
    .mbc.open{transform:translateX(-280px);}
    .mbh{display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;}
    .mbcb{background:none;border:none;cursor:pointer;color:#333;padding:4px;}
    .mbnk{color:#333;text-decoration:none;font-size:1.1rem;font-weight:500;padding:12px 0;border-bottom:1px solid #f0f0f0;}
    .nk{position:relative;text-decoration:none;color:#404040;font-size:0.875rem;font-weight:500;padding:8px 14px;border-radius:8px;transition:color 0.25s,background 0.25s;}
    .nk::after{content:'';position:absolute;bottom:4px;left:14px;right:14px;height:2px;background:linear-gradient(90deg,#00897b,#004d40);border-radius:999px;transform:scaleX(0);transform-origin:left;transition:transform 0.3s cubic-bezier(0.4,0,0.2,1);}
    .nk:hover{color:#00897b;background:rgba(0,137,123,0.06);}
    .nk:hover::after{transform:scaleX(1);}
    .bp{background:linear-gradient(135deg,#00897b,#004d40);color:#fff;padding:8px 20px;border-radius:9999px;font-size:0.8rem;font-weight:600;border:none;cursor:pointer;transition:all 0.25s;box-shadow:0 2px 12px rgba(0,137,123,0.3);}
    .bp:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(0,137,123,0.4);}

    /* PAGE */
    .sm{padding:110px 0 100px;position:relative;overflow:hidden;}
    .sm::before{content:'';position:absolute;top:-200px;left:50%;transform:translateX(-50%);width:900px;height:900px;border-radius:50%;background:radial-gradient(ellipse,rgba(0,137,123,0.1) 0%,transparent 70%);pointer-events:none;}
    .si{max-width:1100px;margin:0 auto;padding:0 24px;}
    @media(max-width:600px){.si{padding:0 16px;}}

    /* HERO */
    .hbadge{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,rgba(0,137,123,0.12),rgba(0,77,64,0.08));border:1px solid rgba(0,137,123,0.25);color:#00897b;font-size:0.72rem;font-weight:700;padding:6px 16px;border-radius:999px;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:22px;}
    .hbdot{width:6px;height:6px;border-radius:50%;background:#00897b;animation:pdot 2s ease-in-out infinite;}
    @keyframes pdot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.6)}}
    .htitle{font-size:clamp(2rem,8vw,4rem);font-weight:900;letter-spacing:-0.04em;line-height:1.08;background:linear-gradient(135deg,#004d40 0%,#00897b 50%,#26a69a 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:22px;}
    .hsub{font-size:1.1rem;line-height:1.85;color:#525252;max-width:700px;margin:0 auto 60px;}
    @media(max-width:600px){.hsub{font-size:0.95rem;line-height:1.6;margin-bottom:40px;}}

    /* STATS */
    .sg{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:72px;}
    @media(max-width:600px){.sg{grid-template-columns:1fr;margin-bottom:48px;}}
    .sc2{background:#fff;border-radius:20px;padding:28px 20px;text-align:center;border:1px solid rgba(0,137,123,0.13);box-shadow:0 6px 24px rgba(0,77,64,0.06);transition:transform 0.3s,box-shadow 0.3s;position:relative;overflow:hidden;}
    .sc2::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#00897b,#004d40,#26a69a);background-size:200%;animation:sbar 3s linear infinite;}
    @keyframes sbar{0%{background-position:0%}100%{background-position:200%}}
    .sc2:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(0,77,64,0.12);}
    .sv{font-size:2rem;font-weight:900;letter-spacing:-0.04em;background:linear-gradient(135deg,#004d40,#00897b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;display:block;margin-bottom:6px;}
    .sl{font-size:0.72rem;font-weight:700;color:#737373;text-transform:uppercase;letter-spacing:0.06em;}

    /* CARDS */
    .ic{background:#fff;border-radius:24px;padding:40px 36px;margin-bottom:28px;border:1px solid rgba(0,137,123,0.1);box-shadow:0 6px 32px rgba(0,77,64,0.06);transition:transform 0.3s,box-shadow 0.3s;position:relative;overflow:hidden;}
    .ic::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#00897b,#004d40,#26a69a,#00897b);background-size:200%;animation:sbar 3s linear infinite;}
    .ic:hover{transform:translateY(-4px);box-shadow:0 20px 56px rgba(0,77,64,0.11);}
    @media(max-width:600px){.ic{padding:28px 20px;border-radius:20px;}}
    .ich{display:flex;align-items:center;gap:14px;margin-bottom:22px;}
    .ici{width:48px;height:48px;border-radius:14px;background:linear-gradient(135deg,#00897b,#004d40);display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0;box-shadow:0 4px 14px rgba(0,137,123,0.35);}
    .ict{font-size:1.5rem;font-weight:800;color:#004d40;letter-spacing:-0.025em;}
    .icp{color:#525252;font-size:0.97rem;line-height:1.85;}
    @media(max-width:600px){.ict{font-size:1.3rem;} .ici{width:40px;height:40px;font-size:1.2rem;} .icp{font-size:0.9rem;line-height:1.6;}}

    /* VALUES GRID */
    .vg{display:grid;grid-template-columns:1fr;gap:16px;margin-top:4px;}
    @media(min-width:600px){.vg{grid-template-columns:repeat(2,1fr);}}
    @media(min-width:900px){.vg{grid-template-columns:repeat(3,1fr);}}
    .vc{background:linear-gradient(135deg,rgba(0,137,123,0.05),rgba(0,77,64,0.03));border:1px solid rgba(0,137,123,0.14);border-radius:18px;padding:24px 20px;transition:all 0.3s;}
    .vc:hover{background:linear-gradient(135deg,rgba(0,137,123,0.1),rgba(0,77,64,0.06));transform:translateY(-3px);box-shadow:0 10px 28px rgba(0,137,123,0.12);}
    .vci{font-size:1.8rem;margin-bottom:10px;display:block;}
    .vct{font-weight:800;font-size:0.95rem;color:#004d40;margin-bottom:6px;letter-spacing:-0.01em;}
    .vcx{font-size:0.85rem;color:#737373;line-height:1.65;}

    /* FOUNDER */
    .fc{background:#fff;border-radius:28px;padding:44px 36px;margin-bottom:28px;border:1px solid rgba(0,137,123,0.12);box-shadow:0 8px 36px rgba(0,77,64,0.07);display:flex;flex-direction:column;align-items:center;text-align:center;gap:24px;position:relative;overflow:hidden;}
    @media(max-width:600px){.fc{padding:32px 20px;border-radius:20px;gap:18px;}}
    .fc::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#00897b,#004d40,#26a69a,#00897b);background-size:200%;animation:sbar 3s linear infinite;}
    .fiw{position:relative;display:inline-block;}
    .fiw::before{content:'';position:absolute;inset:-5px;border-radius:50%;background:conic-gradient(#00897b,#004d40,#26a69a,#80cbc4,#00897b);z-index:0;animation:spin 6s linear infinite;}
    @keyframes spin{to{transform:rotate(360deg)}}
    .fiw::after{content:'';position:absolute;inset:-2px;border-radius:50%;background:#fff;z-index:1;}
    .fi{position:relative;z-index:2;width:170px;height:170px;border-radius:50%;object-fit:cover;border:4px solid #fff;display:block;}
    @media(max-width:600px){.fi{width:130px;height:130px;}}
    .ftag{display:inline-block;background:linear-gradient(135deg,rgba(0,137,123,0.1),rgba(0,77,64,0.06));border:1px solid rgba(0,137,123,0.22);color:#00897b;font-size:0.72rem;font-weight:700;padding:5px 16px;border-radius:999px;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:8px;}
    .fn{font-size:1.5rem;font-weight:800;color:#004d40;letter-spacing:-0.025em;margin-bottom:14px;}
    @media(max-width:600px){.fn{font-size:1.3rem;margin-bottom:10px;}}
    .ft{color:#525252;font-size:0.97rem;line-height:1.85;font-style:italic;max-width:660px;}
    @media(max-width:600px){.ft{font-size:0.9rem;line-height:1.6;}}

    /* TIMELINE */
    .tl{position:relative;padding-left:32px;margin-top:8px;}
    @media(max-width:600px){.tl{padding-left:24px;}}
    .tl::before{content:'';position:absolute;left:10px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#00897b,#004d40,rgba(0,77,64,0));}
    @media(max-width:600px){.tl::before{left:6px;}}
    .ti{position:relative;margin-bottom:36px;}
    .ti:last-child{margin-bottom:0;}
    .tidot{position:absolute;left:-26px;top:4px;width:14px;height:14px;border-radius:50%;background:linear-gradient(135deg,#00897b,#004d40);border:3px solid #fff;box-shadow:0 0 10px rgba(0,137,123,0.5);}
    @media(max-width:600px){.tidot{left:-21px;width:12px;height:12px;top:5px;}}
    .tiyr{font-size:0.72rem;font-weight:800;color:#00897b;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:4px;}
    .tilb{font-size:1.05rem;font-weight:800;color:#004d40;margin-bottom:4px;letter-spacing:-0.01em;}
    .tidx{font-size:0.9rem;color:#737373;line-height:1.65;}
    @media(max-width:600px){.tilb{font-size:1rem;} .tidx{font-size:0.85rem;line-height:1.5;}}

    /* VM */
    .vml{list-style:none;display:flex;flex-direction:column;gap:20px;}
    .vmi{display:flex;gap:14px;align-items:flex-start;padding:18px;border-radius:14px;background:rgba(0,137,123,0.03);border:1px solid rgba(0,137,123,0.1);transition:all 0.25s;}
    @media(max-width:600px){.vmi{padding:16px 14px;gap:12px;}}
    .vmi:hover{background:rgba(0,137,123,0.07);transform:translateX(4px);}
    .vmd{width:10px;height:10px;border-radius:50%;background:linear-gradient(135deg,#00897b,#004d40);flex-shrink:0;margin-top:6px;box-shadow:0 0 8px rgba(0,137,123,0.5);}
    .vmlb{font-weight:800;color:#004d40;display:block;margin-bottom:5px;font-size:1rem;}
    .vmtx{color:#525252;font-size:0.93rem;line-height:1.75;}
    @media(max-width:600px){.vmtx{font-size:0.9rem;line-height:1.6;}}

    /* FOOTER */
    .ft2{background:linear-gradient(135deg,#002b24,#004d40);color:rgba(255,255,255,0.65);text-align:center;padding:36px 16px;font-size:0.875rem;position:relative;}
    .ft2::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(0,229,204,0.4),transparent);}
    .ft2 a{color:#80cbc4;text-decoration:none;font-weight:500;transition:color 0.2s;}
    .ft2 a:hover{color:#fff;}
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <main className="pw">
        <nav className={`nb ${scrolled ? "sc" : "tp"}`}>
          <div className="nc">
            <Link href="/" className="lg">
              <img src="/logoPNG.PNG" alt="Aparajitha Milling Logo" className="li" />
              <span className="lt">APARAJITHA</span>
            </Link>
            <div className="nr">
              <div className="nl">
                <Link href="/#services" className="nk">What We Do</Link>
                <Link href="/products" className="nk">Products</Link>
                <Link href="/#contact" className="nk">Contact</Link>
              </div>
              <Show when="signed-out">
                <SignInButton mode="modal"><button className="bp">Login</button></SignInButton>
              </Show>
              <Show when="signed-in"><UserButton /></Show>
              <button className="hmb" onClick={() => setMobileMenuOpen(true)}>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`mbo ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)} />
        <div className={`mbc ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mbh">
            <span className="lt" style={{ color: '#004d40' }}>APARAJITHA</span>
            <button className="mbcb" onClick={() => setMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <Link href="/#services" className="mbnk" onClick={() => setMobileMenuOpen(false)}>What We Do</Link>
          <Link href="/products" className="mbnk" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link href="/#contact" className="mbnk" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>

        <section className="sm">
          <div className="si">

            {/* HERO */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ textAlign: "center", marginBottom: "64px" }}>
              <div className="hbadge"><span className="hbdot" /> Who We Are</div>
              <h1 className="htitle">About Aparajitha<br />Milling Solutions</h1>
              <p className="hsub">
                Established in 2026, we are dedicated to transforming the rice and dal milling industry with innovative, reliable, and high-performance machinery solutions. We believe in delivering more than just machines — we deliver efficiency, durability, and long-term value.
              </p>
            </motion.div>

            {/* STATS */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={d(0.1)} className="sg">
              {[["2026","Established"],["500+","Projects Delivered"],["15+","Years of Legacy"],].map(([v,l])=>(
                <div key={l} className="sc2"><span className="sv">{v}</span><span className="sl">{l}</span></div>
              ))}
            </motion.div>

            {/* ABOUT US */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={d(0)} className="ic">
              <div className="ich"><div className="ici">🏢</div><h2 className="ict">About Us</h2></div>
              <p className="icp" style={{ marginBottom: "16px" }}>
                Established in 2026, we are dedicated to transforming the rice and dal milling industry with innovative, reliable, and high-performance machinery solutions. As one of the trusted manufacturers of rice mill and dal mill accessories and equipment, we believe in delivering more than just machines — we deliver efficiency, durability, and long-term value.
              </p>
              <p className="icp">
                Our vision is driven by next-generation technology, precision engineering, and a passion for helping businesses grow with smarter milling solutions. With a strong commitment to quality, customer satisfaction, and continuous innovation, we aim to build lasting partnerships and become a symbol of trust, excellence, and progress in the global milling industry.
              </p>
            </motion.div>

            {/* OUR VALUES */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={d(0.1)} className="ic">
              <div className="ich"><div className="ici">💎</div><h2 className="ict">Our Core Values</h2></div>
              <div className="vg">
                {values.map((v) => (
                  <div key={v.title} className="vc">
                    <span className="vci">{v.icon}</span>
                    <div className="vct">{v.title}</div>
                    <div className="vcx">{v.text}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* FOUNDER */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={d(0.1)} className="fc">
              <div className="fiw">
                <img src="/first.jpeg" alt="Late Mr. B. Somashekar" className="fi" />
              </div>
              <div>
                <span className="ftag">Our Guiding Light</span>
                <div className="fn">Late Mr. B. Somashekar</div>
                <p className="ft">
                  Our company's ethos is firmly rooted in the vision and values of the late Mr. B. Somashekar, a distinguished Mechanical Engineer whose career spanned more than 15 years of exemplary industry experience. His unwavering commitment to engineering excellence, innovation, and integrity continues to inspire our organisation. Guided by his enduring legacy, we have successfully delivered over 500 Greenfield projects, consistently meeting the highest standards of quality, precision, and customer satisfaction across diverse industrial sectors.
                </p>
              </div>
            </motion.div>

            {/* TIMELINE */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={d(0.1)} className="ic">
              <div className="ich"><div className="ici">📅</div><h2 className="ict">Our Journey</h2></div>
              <div className="tl">
                {milestones.map((m) => (
                  <div key={m.year} className="ti">
                    <div className="tidot" />
                    <div className="tiyr">{m.year}</div>
                    <div className="tilb">{m.label}</div>
                    <div className="tidx">{m.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* VISION & MISSION */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={d(0.1)} className="ic">
              <div className="ich"><div className="ici">🎯</div><h2 className="ict">Vision &amp; Mission</h2></div>
              <ul className="vml">
                <li className="vmi">
                  <div className="vmd" />
                  <div><span className="vmlb">Vision</span><span className="vmtx">To be a leading engineering company driven by next-generation technology and innovative design, delivering advanced, efficient, and sustainable solutions that consistently exceed customer expectations and address their evolving needs.</span></div>
                </li>
                <li className="vmi">
                  <div className="vmd" />
                  <div><span className="vmlb">Mission</span><span className="vmtx">To provide the highest standard of service by understanding each customer's unique requirements and delivering reliable, cost-effective, and innovative engineering solutions. We are committed to quality, timely execution, and continuous improvement to ensure complete customer satisfaction and long-term partnerships.</span></div>
                </li>
              </ul>
            </motion.div>

            {/* WHAT WE DO */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={d(0.1)} className="ic">
              <div className="ich"><div className="ici">⚙️</div><h2 className="ict">What We Do</h2></div>
              <p className="icp" style={{ marginBottom: "16px" }}>
                Our facility is equipped with state-of-the-art technology and advanced manufacturing infrastructure to handle complex fabrication and precision engineering requirements across a wide range of industries. We specialise in delivering high-quality, customised solutions through modern design practices, skilled workmanship, and stringent quality standards.
              </p>
              <p className="icp">
                We provide innovative 3D design and engineering solutions tailored to each customer's specific needs, enabling accurate visualisation, optimised functionality, and efficient project execution. From concept and detailed design to fabrication and final delivery, we ensure precision, reliability, and superior quality at every stage.
              </p>
            </motion.div>

          </div>
        </section>

        <footer className="ft2">
          <p>Developed by <a href="https://sharath-holla.github.io/my_portfolio/" target="_blank" rel="noopener noreferrer">Sharath NS</a></p>
        </footer>
      </main>
    </>
  );
}