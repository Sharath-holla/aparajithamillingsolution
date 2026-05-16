"use client";

import React, { useState, useEffect } from "react";
import { SignInButton, Show, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Factory,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const HeroSlider = ({ images }: { images: string[] }) => {
  const [cur, setCur] = useState(0);
  const curRef = React.useRef(0);

  const goTo = (i: number) => { curRef.current = i; setCur(i); };
  const next = () => goTo((curRef.current + 1) % images.length);
  const prev = () => goTo((curRef.current - 1 + images.length) % images.length);

  useEffect(() => {
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="hs-wrap">
      {images.map((img, i) => (
        <div key={i} className={`hs-slide ${i === cur ? 'active' : ''}`}>
          <img src={img} alt={`slide-${i}`} className="hs-img" />
        </div>
      ))}
      <div className="hs-overlay" />
      <button className="hs-btn prev" onClick={prev}>&#10094;</button>
      <button className="hs-btn next" onClick={next}>&#10095;</button>
      <div className="hs-dots">
        {images.map((_, i) => (
          <button key={i} className={`hs-dot ${i === cur ? 'active' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>
      <div className="hs-progress" />
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", fn);

    return () => window.removeEventListener("scroll", fn);
  }, []);

  const heroImages = [
    "/back2.jpeg",
    "/back1.jpeg",
    "/back3.jpeg",
    "/back4.jpeg",
    "/back5.jpeg",
  ];

  const services = [
    {
      title: "Precision Laser Cutting",
      desc: "With state-of-the-art laser cutting technology, we deliver the intricate detailing and absolute precision that modern clients demand. Our experienced team leverages years of technical expertise to ensure every cut meets exacting specifications.",
      img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Metal Bending",
      desc: "Bending metal is an industrial art, and our machinery excels in this craft. Capable of processing both single prototype pieces and large-scale batch runs, our equipment offers exceptional flexibility without sacrificing accuracy.",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Industrial Welding",
      desc: "We understand how crucial structural integrity is to your operations. Our dedicated, certified staff invests the necessary time and energy to prepare for unique welding challenges. We deliver exceptional, worry-free fabrication.",
      img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Shearing & Rolling",
      desc: "Revolutionizing the cutting process, our shearing operations significantly reduce production time. Utilizing heavy-duty rotating cylinders, we exert high pressure on metals to create uniform shapes and bend plates into precise forms.",
      img: "/Picture2.png",
    }
  ];

  const css = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

  *{
    box-sizing:border-box;
    margin:0;
    padding:0;
  }

  html{
    scroll-behavior:smooth;
  }

  body{
    font-family:'Inter',sans-serif;
    overflow-x:hidden;
    background:#fff;
  }

  .pw{
    width:100%;
    overflow-x:hidden;
  }

  /* NAVBAR */

  .navbar{
    position:fixed;
    top:0;
    left:0;
    right:0;
    z-index:100;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .navbar.scrolled{
    background: rgba(255,255,255,0.88);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid rgba(0,137,123,0.12);
    box-shadow: 0 4px 24px rgba(0,77,64,0.1);
  }

  .navbar.top{
    background: linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 100%);
  }

  .nav-con{
    max-width:1300px;
    margin:auto;
    padding:0 28px;
    height:75px;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  .logo-grp{
    display:flex;
    align-items:center;
    gap:10px;
    text-decoration:none;
    transition: transform 0.2s ease;
  }

  .logo-grp:hover { transform: scale(1.03); }

  .logo-img{
    width:46px;
    height:46px;
    object-fit:contain;
  }

  .logo-txt{
    font-size:1.2rem;
    font-weight:800;
    color:#fff;
    letter-spacing:-0.02em;
    transition: all 0.3s ease;
  }

  .navbar.scrolled .logo-txt{
    background: linear-gradient(135deg, #004d40, #00897b);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Right side group */
  .nav-right{
    display:flex;
    align-items:center;
    gap:12px;
  }

  .nav-links{
    display:flex;
    align-items:center;
    gap:4px;
  }

  @media(max-width:767px){
    .nav-links{ display:none; }
  }

  .nav-lk{
    position: relative;
    color: rgba(255,255,255,0.92);
    text-decoration:none;
    font-weight:500;
    font-size:0.9rem;
    padding:8px 14px;
    border-radius:8px;
    letter-spacing:0.01em;
    transition: color 0.25s ease, background 0.25s ease;
    animation: navSlideDown 0.45s ease both;
  }

  .nav-lk:nth-child(1){ animation-delay:0.05s; }
  .nav-lk:nth-child(2){ animation-delay:0.1s; }
  .nav-lk:nth-child(3){ animation-delay:0.15s; }
  .nav-lk:nth-child(4){ animation-delay:0.2s; }

  @keyframes navSlideDown{
    from{ opacity:0; transform:translateY(-10px); }
    to  { opacity:1; transform:translateY(0); }
  }

  .nav-lk::after{
    content:'';
    position:absolute;
    bottom:4px; left:14px; right:14px;
    height:2px;
    background: linear-gradient(90deg,#4db6ac,#80cbc4);
    border-radius:999px;
    transform:scaleX(0);
    transform-origin:left;
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
  }

  .nav-lk:hover{
    color:#fff;
    background: rgba(255,255,255,0.1);
  }

  .nav-lk:hover::after{ transform:scaleX(1); }

  .navbar.scrolled .nav-lk{
    color:#374151;
  }

  .navbar.scrolled .nav-lk:hover{
    color:#00897b;
    background: rgba(0,137,123,0.07);
  }

  .navbar.scrolled .nav-lk::after{
    background: linear-gradient(90deg,#00897b,#004d40);
  }

  .btn-p{
    background: linear-gradient(135deg,#00897b,#004d40);
    color:white;
    border:none;
    padding:9px 20px;
    border-radius:999px;
    cursor:pointer;
    font-weight:600;
    font-size:0.85rem;
    text-decoration:none;
    display:flex;
    align-items:center;
    gap:8px;
    letter-spacing:0.02em;
    box-shadow: 0 2px 14px rgba(0,137,123,0.35);
    transition: all 0.25s ease;
  }

  .btn-p:hover{
    transform:translateY(-2px);
    box-shadow: 0 6px 22px rgba(0,137,123,0.45);
  }

  .btn-p.lg{
    padding:15px 34px;
    font-size:1rem;
  }

  /* HERO */
  .hero{
    position:relative;
    height:100vh;
    height:100svh;
    min-height:500px;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    overflow:hidden;
  }

  .hs-wrap{
    position:absolute;
    top:0; left:0; right:0; bottom:0;
    width:100%;
    height:100%;
    overflow:hidden;
  }

  /* fade+zoom slide */
  .hs-slide{
    position:absolute;
    top:0; left:0;
    width:100%;
    height:100%;
    opacity:0;
    transform:scale(1.06);
    transition:opacity 0.9s cubic-bezier(0.4,0,0.2,1),transform 0.9s cubic-bezier(0.4,0,0.2,1);
    pointer-events:none;
  }
  .hs-slide.active{opacity:1;transform:scale(1);pointer-events:auto;z-index:1;}
  .hs-img{
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center center;
    display:block;
    min-width:100%;
    min-height:100%;
  }

  .hs-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0.25) 0%,rgba(0,20,15,0.65) 100%);z-index:2;}

  .hs-btn{position:absolute;top:50%;transform:translateY(-50%);width:52px;height:52px;border-radius:50%;border:none;background:rgba(255,255,255,0.18);backdrop-filter:blur(10px);color:white;cursor:pointer;z-index:10;font-size:1.2rem;transition:all 0.3s;box-shadow:0 4px 16px rgba(0,0,0,0.2);}
  .hs-btn:hover{background:#00897b;transform:translateY(-50%) scale(1.12);box-shadow:0 8px 24px rgba(0,137,123,0.5);}
  .hs-btn.prev{left:25px;}
  .hs-btn.next{right:25px;}

  .hs-dots{position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;gap:8px;z-index:10;background:rgba(0,0,0,0.2);backdrop-filter:blur(6px);padding:6px 14px;border-radius:999px;}
  .hs-dot{width:8px;height:8px;border-radius:50%;border:none;background:rgba(255,255,255,0.4);cursor:pointer;transition:all 0.35s;}
  .hs-dot.active{width:24px;border-radius:4px;background:#00e5cc;box-shadow:0 0 10px rgba(0,229,204,0.7);}

  .hs-progress{position:absolute;bottom:0;left:0;right:0;height:3px;z-index:10;background:linear-gradient(90deg,#00897b,#26a69a);transform-origin:left;animation:hprog 4.5s linear infinite;}
  @keyframes hprog{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}

  .hero-inner{position:relative;z-index:5;max-width:950px;padding:24px;}

  .hero-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 20px;border-radius:999px;background:rgba(255,255,255,0.12);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.2);color:white;margin-bottom:28px;font-size:0.85rem;font-weight:600;letter-spacing:0.04em;}

  .hero-title{font-size:clamp(2.8rem,7vw,5.5rem);line-height:1.08;font-weight:900;color:white;margin-bottom:22px;letter-spacing:-0.04em;text-shadow:0 2px 30px rgba(0,0,0,0.3);}
  .hero-title span{background:linear-gradient(135deg,#80cbc4,#00e5cc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}

  .hero-sub{color:rgba(255,255,255,0.88);line-height:1.85;font-size:1.1rem;margin-bottom:44px;max-width:680px;margin-left:auto;margin-right:auto;}

  .hero-ctas{display:flex;justify-content:center;gap:16px;flex-wrap:wrap;}
  .btn-outline{border:2px solid rgba(255,255,255,0.45);color:white;text-decoration:none;padding:15px 34px;border-radius:999px;backdrop-filter:blur(8px);font-weight:600;font-size:1rem;transition:all 0.25s;}
  .btn-outline:hover{background:rgba(255,255,255,0.15);border-color:rgba(255,255,255,0.7);}

  /* SERVICES */
  .sec-services{padding:110px 24px;background:linear-gradient(160deg,#f0fdf8 0%,#e8f5f2 40%,#ffffff 100%);position:relative;overflow:hidden;}
  .sec-services::before{content:'';position:absolute;top:-300px;right:-200px;width:700px;height:700px;border-radius:50%;background:radial-gradient(ellipse,rgba(0,137,123,0.08) 0%,transparent 70%);pointer-events:none;}
  .sec-inner{max-width:1300px;margin:auto;position:relative;}

  .sec-badge{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(135deg,rgba(0,137,123,0.12),rgba(0,77,64,0.08));border:1px solid rgba(0,137,123,0.25);color:#00897b;font-size:0.72rem;font-weight:700;padding:6px 16px;border-radius:999px;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:20px;}
  .sec-badge-dot{width:6px;height:6px;border-radius:50%;background:#00897b;animation:pdot2 2s ease-in-out infinite;}
  @keyframes pdot2{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.4;transform:scale(0.6)}}

  .sec-title{font-size:clamp(2rem,5vw,3.2rem);font-weight:900;letter-spacing:-0.04em;line-height:1.1;margin-bottom:18px;background:linear-gradient(135deg,#004d40 0%,#00897b 60%,#26a69a 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
  .sec-sub{max-width:640px;color:#555;line-height:1.85;margin-bottom:56px;font-size:1.05rem;}

  .cards-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:28px;}

  .svc-card{background:white;border-radius:24px;overflow:hidden;box-shadow:0 6px 28px rgba(0,77,64,0.07);transition:all 0.35s cubic-bezier(0.4,0,0.2,1);border:1px solid rgba(0,137,123,0.1);position:relative;}
  .svc-card::before{content:'';position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#00897b,#004d40,#26a69a,#00897b);background-size:200%;animation:sbar2 3s linear infinite;z-index:1;}
  @keyframes sbar2{0%{background-position:0%}100%{background-position:200%}}
  .svc-card:hover{transform:translateY(-10px);box-shadow:0 20px 50px rgba(0,77,64,0.14);}

  .svc-img-wrap{height:230px;overflow:hidden;}
  .svc-img{width:100%;height:100%;object-fit:cover;transition:transform 0.5s cubic-bezier(0.4,0,0.2,1);}
  .svc-card:hover .svc-img{transform:scale(1.1);}

  .svc-body{padding:26px;}
  .svc-title{font-size:1.15rem;font-weight:800;margin-bottom:10px;color:#004d40;letter-spacing:-0.01em;}
  .svc-desc{color:#555;line-height:1.75;font-size:0.92rem;}

  /* CONTACT */
  .sec-contact{background:linear-gradient(135deg,#002b24 0%,#004d40 60%,#00695c 100%);padding:110px 24px;color:white;position:relative;overflow:hidden;}
  .sec-contact::before{content:'';position:absolute;top:-200px;left:-200px;width:600px;height:600px;border-radius:50%;background:radial-gradient(ellipse,rgba(0,229,204,0.06) 0%,transparent 70%);pointer-events:none;}
  .contact-inner{max-width:1200px;margin:auto;position:relative;}
  .contact-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:48px;}
  .contact-title{font-size:clamp(2rem,5vw,3rem);font-weight:900;margin-bottom:36px;letter-spacing:-0.04em;line-height:1.1;}

  .contact-row{display:flex;gap:18px;margin-bottom:26px;align-items:flex-start;}
  .contact-ic-wrap{width:52px;height:52px;border-radius:14px;background:rgba(255,255,255,0.08);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,0.1);display:flex;justify-content:center;align-items:center;flex-shrink:0;transition:all 0.25s;}
  .contact-ic-wrap:hover{background:rgba(0,229,204,0.15);border-color:rgba(0,229,204,0.3);}
  .contact-ic{color:#80cbc4;}
  .contact-label{font-size:0.75rem;font-weight:700;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;}
  .contact-val{color:rgba(255,255,255,0.9);font-size:0.97rem;line-height:1.6;}

  .cert-card{background:rgba(255,255,255,0.05);backdrop-filter:blur(12px);padding:44px;border-radius:28px;border:1px solid rgba(255,255,255,0.1);position:relative;overflow:hidden;}
  .cert-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#00897b,#00e5cc,#004d40);}
  .cert-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(0,229,204,0.12);border:1px solid rgba(0,229,204,0.25);color:#80cbc4;font-size:0.72rem;font-weight:700;padding:6px 14px;border-radius:999px;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:18px;}

  .footer{background:#001f1a;color:rgba(255,255,255,0.5);text-align:center;padding:36px;position:relative;}
  .footer::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(0,229,204,0.35),transparent);}
  .footer a{color:#80cbc4;text-decoration:none;transition:color 0.2s;}
  .footer a:hover{color:#fff;}

  /* ===== RESPONSIVE ===== */
  @media(max-width:1024px){
    .cards-grid{grid-template-columns:repeat(2,1fr);}
    .contact-grid{grid-template-columns:1fr;}
    .cert-card{margin-top:0;}
  }
  @media(max-width:767px){
    .nav-links{display:none;}
    .nav-con{padding:0 16px;height:64px;}
    /* Hero responsive */
    .hero{min-height:100svh;min-height:100vh;}
    .hs-wrap{position:absolute;top:0;left:0;width:100%;height:100%;}
    .hs-slide{width:100%;height:100%;}
    .hs-img{width:100%;height:100%;object-fit:cover;object-position:center;}
    .hs-btn{width:38px;height:38px;font-size:0.95rem;}
    .hs-btn.prev{left:10px;}
    .hs-btn.next{right:10px;}
    .hs-dots{bottom:24px;padding:5px 10px;gap:6px;}
    .hero-inner{padding:16px 12px;}
    .hero-sub{font-size:0.95rem;margin-bottom:28px;}
    .hero-ctas{gap:10px;flex-direction:column;align-items:center;}
    .btn-p.lg,.btn-outline{padding:12px 28px;font-size:0.92rem;width:auto;}
    .sec-services{padding:72px 16px;}
    .sec-contact{padding:72px 16px;}
    .cards-grid{grid-template-columns:1fr;}
    .contact-grid{grid-template-columns:1fr;}
    .cert-card{padding:28px 20px;}
    .sec-title{margin-bottom:14px;}
    .sec-sub{margin-bottom:36px;font-size:0.97rem;}
  }
  @media(max-width:480px){
    .hero{min-height:100svh;}
    .hs-img{object-position:center center;}
    .hero-badge{font-size:0.75rem;padding:6px 12px;margin-bottom:20px;}
    .hs-dots{bottom:18px;}
    .svc-img-wrap{height:190px;}
    .contact-title{margin-bottom:24px;}
    .contact-row{gap:12px;}
    .contact-ic-wrap{width:44px;height:44px;border-radius:10px;}
  }

  /* ===== EXTRA ANIMATIONS ===== */
  @keyframes float-badge{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
  .hero-badge{animation:float-badge 4s ease-in-out infinite;}

  @keyframes fade-in-up{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
  .svc-card{animation:fade-in-up 0.6s ease both;}
  .svc-card:nth-child(1){animation-delay:0.1s;}
  .svc-card:nth-child(2){animation-delay:0.2s;}
  .svc-card:nth-child(3){animation-delay:0.3s;}
  .svc-card:nth-child(4){animation-delay:0.4s;}

  /* STATS STRIP */
  .stats-strip{background:#fff;padding:48px 24px;border-bottom:1px solid rgba(0,137,123,0.1);}
  .stats-inner{max-width:1000px;margin:auto;display:grid;grid-template-columns:repeat(4,1fr);gap:24px;}
  @media(max-width:767px){.stats-inner{grid-template-columns:repeat(2,1fr);gap:16px;}.stats-strip{padding:36px 16px;}}
  @media(max-width:400px){.stats-inner{grid-template-columns:1fr 1fr;gap:12px;}}
  .stat-item{text-align:center;padding:20px 12px;border-radius:16px;border:1px solid rgba(0,137,123,0.1);background:linear-gradient(135deg,rgba(0,137,123,0.03),rgba(0,77,64,0.02));transition:all 0.3s;}
  .stat-item:hover{transform:translateY(-4px);box-shadow:0 8px 24px rgba(0,137,123,0.1);background:linear-gradient(135deg,rgba(0,137,123,0.07),rgba(0,77,64,0.04));}
  .stat-num{display:block;font-size:2.2rem;font-weight:900;letter-spacing:-0.04em;background:linear-gradient(135deg,#004d40,#00897b);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:6px;}
  .stat-lbl{font-size:0.75rem;font-weight:700;color:#737373;text-transform:uppercase;letter-spacing:0.06em;}
  `;

  const stats = [
    { num: "500+", lbl: "Projects Delivered" },
    { num: "15+", lbl: "Years of Legacy" },
    { num: "80 TPH", lbl: "Max Capacity" },
    { num: "100%", lbl: "Quality Assured" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <main className="pw">
        {/* NAVBAR */}

        <nav className={`navbar ${scrolled ? "scrolled" : "top"}`}>
          <div className="nav-con">
            <Link href="/" className="logo-grp">
              <img
                src="/logoPNG.PNG"
                alt="logo"
                className="logo-img"
              />
              <span className="logo-txt">APARAJITHA</span>
            </Link>

            <div className="nav-right">
              <div className="nav-links">
                <Link href="/about" className="nav-lk">About</Link>
                <Link href="/products" className="nav-lk">Products</Link>
                <Link href="/#services" className="nav-lk">Services</Link>
                <Link href="/#contact" className="nav-lk">Contact</Link>
              </div>

              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="btn-p">Login</button>
                </SignInButton>
              </Show>

              <Show when="signed-in">
                <UserButton />
              </Show>
            </div>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <HeroSlider images={heroImages} />
          <motion.div className="hero-inner" initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="hero-badge">
              🏭 Est. 2026 · Bangalore, India
            </motion.div>

            <motion.h1 variants={fadeUp} className="hero-title">
              Next Generation <br />
              <span>Milling Solutions</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="hero-sub">
              Manufacturing high-quality rice mill, dal mill, and
              agro-processing machinery with advanced engineering,
              precision fabrication, and next-generation industrial
              technology.
            </motion.p>

            <motion.div variants={fadeUp} className="hero-ctas">
              <Link href="/products" className="btn-p lg">
                Explore Products
                <ChevronRight size={20} />
              </Link>

              <Link href="/#contact" className="btn-outline">
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* STATS STRIP */}
        <section className="stats-strip">
          <div className="stats-inner">
            {stats.map((st, i) => (
              <div key={i} className="stat-item">
                <span className="stat-num">{st.num}</span>
                <span className="stat-lbl">{st.lbl}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}

        <section id="services" className="sec-services">
          <div className="sec-inner">
            <motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
              <div className="sec-badge"><span className="sec-badge-dot" /> What We Do</div>
              <h2 className="sec-title">Built For Performance.<br />Engineered To Last.</h2>
              <p className="sec-sub">Our advanced manufacturing infrastructure delivers innovative engineering solutions for modern agro-processing industries.</p>
            </motion.div>

            <div className="cards-grid">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  className="svc-card"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="svc-img-wrap">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="svc-img"
                    />
                  </div>

                  <div className="svc-body">
                    <div className="svc-title">
                      {s.title}
                    </div>

                    <div className="svc-desc">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}

        <section id="contact" className="sec-contact">
          <div className="contact-inner">
            <div className="contact-grid">
              <div>
                <h2 className="contact-title">
                  Let's Work Together
                </h2>

                <div className="contact-row">
                  <div className="contact-ic-wrap"><MapPin className="contact-ic" /></div>
                  <div><div className="contact-label">Address</div><div className="contact-val">#127/2, Machahalli Industrial Area<br />Bangalore – 560091</div></div>
                </div>
                <div className="contact-row">
                  <div className="contact-ic-wrap"><Phone className="contact-ic" /></div>
                  <div><div className="contact-label">Phone</div><div className="contact-val">8494909387 / 9553673333</div></div>
                </div>
                <div className="contact-row">
                  <div className="contact-ic-wrap"><Mail className="contact-ic" /></div>
                  <div><div className="contact-label">Email</div><div className="contact-val">aparajithamillingsolution@gmail.com</div></div>
                </div>
              </div>

              <div className="cert-card">
                <div className="cert-badge">✓ ISO 9001:2015 Certified</div>
                <h2 style={{fontSize:'1.6rem',fontWeight:900,marginBottom:'16px',letterSpacing:'-0.02em'}}>Engineering Excellence</h2>
                <p style={{color:'rgba(255,255,255,0.75)',lineHeight:1.8,marginBottom:'28px'}}>Delivering precision, durability, reliability, and superior customer satisfaction across every project we undertake.</p>
                <div style={{display:'flex',alignItems:'center',gap:'14px'}}>
                  <Factory color="#80cbc4" size={34} />
                  <div><h3 style={{fontWeight:800,letterSpacing:'-0.01em'}}>APARAJITHA</h3><p style={{color:'rgba(255,255,255,0.6)',fontSize:'0.85rem'}}>Milling Solutions</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="footer">
          <p>
            Developed by{" "}
            <a
              href="https://sharath-holla.github.io/my_portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sharath NS
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}