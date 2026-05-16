"use client";

import React, { useState, useEffect } from "react";
import { SignInButton, Show, UserButton } from "@clerk/nextjs";
import { motion, type Variants } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// --- PREMIUM IMAGE SLIDER COMPONENT ---
const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const indexRef = React.useRef(0);

  const goTo = (index: number) => {
    indexRef.current = index;
    setCurrentIndex(index);
  };
  const nextSlide = () => goTo((indexRef.current + 1) % images.length);
  const prevSlide = () => goTo((indexRef.current - 1 + images.length) % images.length);

  // Auto-slide: uses ref so interval never needs recreating
  useEffect(() => {
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slider-container">
      {/* Slide images — fade + subtle zoom */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide-wrapper ${index === currentIndex ? "active" : ""}`}
        >
          <img src={img} alt={`Product view ${index + 1}`} className="slider-img" />
        </div>
      ))}

      {/* Gradient overlays for depth */}
      <div className="slide-overlay-left" />
      <div className="slide-overlay-right" />

      {/* Navigation buttons */}
      <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <button className="slider-btn next" onClick={nextSlide} aria-label="Next">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>

      {/* Thumbnail dots */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="slide-progress-bar" />
    </div>
  );
};

export default function Products() {
  const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut" as const,
    },
  },
};

  // --- PRODUCT DATA ---
  const productsData = [
    {
      title: "Bucket Elevators for Rice & Dal Mills",
      images: [
        "/e.jpeg",
        "/e1.jpeg"  
      ],
      details: {
        "Application": "Designed for efficient vertical conveying of rice, dal, paddy, pulses, and other granular materials in rice mills, dal mills, and agro-processing plants.",
        "Capacity Range": "Available in capacities from 2 TPH to 80 TPH (Tons Per Hour).",
        "Design Features": "Engineered using advanced 3D design technology for precise customization, optimized performance, and seamless integration with existing plant systems.",
        "Construction": "Manufactured with robust steel construction, precision-fabricated components, and durable buckets for long service life.",
        "Control & Safety Features": "Equipped with belt alignment sensors, belt speed monitoring sensors, and zero-speed switches to ensure safe operation, detect slippage or misalignment, and minimize downtime.",
        "Performance": "Ensures gentle material handling with minimal grain breakage, reduced spillage, and high conveying efficiency.",
        "Customization": "Tailor-made to suit specific plant layouts, material characteristics, and customer requirements.",
        "Industries Served": "Rice Mills, Dal Mills, Pulse Processing Units, Grain Handling Systems, and Agro-Processing Industries.",
        "Key Benefits": "Reliable operation, low maintenance, energy-efficient performance, enhanced safety, and consistent throughput."
      }
    },
    {
      title: "Belt Conveyors for Rice & Dal Mills",
      images: [
        "/belt2.JPG",
        "/belt3.JPG",
        "/belt4.JPG",
      ],
      details: {
        "Application": "Designed for efficient horizontal and inclined conveying of rice, dal, paddy, pulses, and other bulk materials in rice mills, dal mills, and agro-processing plants.",
        "Capacity Range": "Available in capacities from 4 TPH to 80 TPH (Tons Per Hour).",
        "Design Features": "Engineered using advanced 3D design technology for precise customization, optimized material flow, and seamless integration with existing plant layouts.",
        "Construction": "Manufactured with heavy-duty steel construction, high-quality conveyor belts, precision pulleys, and durable idlers for long-lasting performance.",
        "Control & Safety Features": "Equipped with belt alignment sensors, belt speed monitoring sensors, pull-cord switches, and emergency stop systems for safe and reliable operation.",
        "Performance": "Provides smooth and gentle material handling with minimal grain breakage, reduced spillage, and high conveying efficiency.",
        "Customization": "Tailor-made to suit plant layout, material characteristics, inclination requirements, and customer-specific needs.",
        "Industries Served": "Rice Mills, Dal Mills, Pulse Processing Units, Grain Handling Systems, and Agro-Processing Industries.",
        "Key Benefits": "Reliable performance, low maintenance, energy efficiency, enhanced safety, and consistent material throughput."
      }
    },
    {
      title: "Chain Conveyors for Rice & Dal Mills",
      images: [
        "/chain2.JPG",
        "/chain3.JPG",
        "/chain4.JPG",
        "/chain5.JPG",
        "/chain6.JPG",
      ],
      details: {
        "Application": "Designed for efficient horizontal and inclined conveying of rice, dal, paddy, pulses, and other bulk materials in rice mills, dal mills, and agro-processing plants.",
        "Capacity Range": "Available in capacities from 4 TPH to 80 TPH (Tons Per Hour).",
        "Design Features": "Engineered using advanced 3D design technology for precise customization, optimized material flow, and seamless integration with existing plant layouts.",
        "Construction": "Manufactured with heavy-duty steel construction, wear-resistant chains, hardened sprockets, and durable flights for long service life under continuous operation.",
        "Control & Safety Features": "Equipped with chain speed monitoring sensors, overload protection, zero-speed switches, and emergency stop systems to ensure safe and reliable operation.",
        "Performance": "Provides smooth and controlled material handling with minimal grain damage, reduced spillage, and consistent conveying efficiency.",
        "Customization": "Tailor-made to suit plant layout, material characteristics, conveying length, and customer-specific requirements.",
        "Industries Served": "Rice Mills, Dal Mills, Pulse Processing Units, Grain Handling Systems, and Agro-Processing Industries.",
        "Key Benefits": "Robust construction, reliable performance, low maintenance, energy efficiency, enhanced safety, and consistent throughput."
      }
    },
    {
      title: "Screw Conveyors for Rice & Dal Mills",
      images: [
        "/chain2.JPG",
        "/chain3.JPG",
        "/chain4.JPG",
        "/chain5.JPG",
        "/chain6.JPG",
        "/chain7.JPG"
      ],
      details: {
        "Application": "Designed for efficient conveying of rice, dal, paddy, bran, husk, powder, and other bulk materials in rice mills, dal mills, and agro-processing plants.",
        "Capacity Range": "Available in capacities from 4 TPH to 80 TPH (Tons Per Hour).",
        "Design Features": "Engineered using advanced 3D design technology for precise customization, optimized material flow, and seamless integration with existing plant layouts.",
        "Construction": "Manufactured with heavy-duty steel construction, precision-formed screw flights, wear-resistant liners, and robust drive assemblies for long-lasting performance.",
        "Control & Safety Features": "Equipped with speed monitoring sensors, overload protection, and emergency stop systems to ensure safe and reliable operation.",
        "Performance": "Provides smooth and controlled conveying with reduced spillage, uniform material flow, and high operational efficiency.",
        "Customization": "Tailor-made to suit material characteristics, conveying length, inclination, and specific customer requirements.",
        "Industries Served": "Rice Mills, Dal Mills, Pulse Processing Units, Grain Handling Systems, and Agro-Processing Industries.",
        "Key Benefits": "Compact design, reliable performance, low maintenance, energy efficiency, and consistent throughput."
      }
    },
    {
      title: "Storage Bins for Rice & Dal Mills",
      images: [
        "/storage1.jpeg",
        "/storage2.jpeg",
        "/storage3.jpeg",
        "/storage4.jpeg",
      ],
      details: {
        "Application": "Designed for safe and efficient storage of rice, dal, paddy, pulses, bran, and other bulk materials in rice mills, dal mills, and agro-processing plants.",
        "Capacity Range": "Manufactured in customized capacities and dimensions as per customer requirements and plant layout.",
        "Design Features": "Engineered using advanced 3D design technology for accurate sizing, optimized material flow, and seamless integration with existing systems.",
        "Construction": "Fabricated with heavy-duty steel construction, reinforced supports, and durable components to ensure structural strength and long service life.",
        "Optional Features": "Can be equipped with level sensors, inspection doors, discharge gates, aeration systems, and load cells for enhanced monitoring and control.",
        "Performance": "Provides secure storage, controlled discharge, and efficient inventory management while minimizing material loss and contamination.",
        "Customization": "Fully customized to suit material characteristics, storage capacity, space availability, and customer-specific operational needs.",
        "Industries Served": "Rice Mills, Dal Mills, Pulse Processing Units, Grain Handling Systems, and Agro-Processing Industries.",
        "Key Benefits": "Robust construction, reliable storage, easy maintenance, and optimized material handling performance."
      }
    },
{
  title: "Spouting & Ducting Systems",
  images: [
    "/spout1.jpeg",
    "/spout2.jpeg",
    "/spout3.jpeg",
    "/spout4.jpg",
    "/spout5.jpg",
    "/spout6.jpg"
  ],
  details: {
    "Application": "Designed for efficient transfer of rice, paddy, dal, husk, bran, and other materials between processing machines in rice mills, dal mills, and agro-processing plants.",
    "Capacity Range": "Custom-designed to handle varying plant capacities from small-scale units to large industrial processing systems.",
    "Design Features": "Engineered using advanced 3D drafting technology for accurate routing, smooth material flow, reduced pressure loss, and optimized plant layout integration.",
    "Construction": "Manufactured using premium-quality galvanized steel, mild steel, or stainless steel sheets with precision bends and leak-proof joints.",
    "Performance": "Ensures smooth and dust-free material movement with minimal blockage, low maintenance, and high operational efficiency.",
    "Optional Features": "Can be equipped with inspection doors, transparent viewing sections, quick-access cleaning ports, and anti-static coating systems.",
    "Customization": "Fully customized according to plant structure, conveying distance, machine arrangement, and customer requirements.",
    "Industries Served": "Rice Mills, Dal Mills, Flour Mills, Grain Handling Units, Feed Plants, and Agro-Processing Industries.",
    "Key Benefits": "Efficient material flow, reduced material loss, compact installation, long service life, and improved plant hygiene."
  }
},
{
  title: "Centrifugal Fans",
  images: [
    "/fans1.jpeg",
    "/fans2.jpeg",
    "/fans3.jpeg",
  ],
  details: {
    "Application": "Designed for air handling, dust collection, ventilation, pneumatic conveying, and aspiration systems in rice mills, dal mills, and industrial processing plants.",
    "Capacity Range": "Available in multiple airflow capacities and pressure ranges to suit different industrial applications.",
    "Design Features": "Aerodynamically designed impellers ensure high airflow efficiency, low vibration, reduced noise levels, and stable operation.",
    "Construction": "Fabricated using heavy-duty steel construction with dynamically balanced impellers, robust housings, and high-quality bearings.",
    "Performance": "Provides powerful and consistent airflow with energy-efficient operation and reliable long-term performance.",
    "Control & Safety Features": "Equipped with vibration-resistant mounting systems, overload protection compatibility, and precision-balanced rotating components.",
    "Customization": "Available in direct-drive and belt-drive configurations with customized motor capacities and airflow specifications.",
    "Industries Served": "Rice Mills, Dal Mills, Flour Mills, Dust Collection Systems, Food Processing Units, and General Industrial Plants.",
    "Key Benefits": "High efficiency, low maintenance, reduced energy consumption, smooth airflow, and durable industrial-grade performance."
  }
},
{
  title: "Cyclone Magnets",
  images: [
    "/mag1.jpeg",
    "/mag2.jpeg",
    "/mag3.jpeg",
    "/mag5.jpg"
  ],
  details: {
    "Application": "Designed for removing ferrous impurities, dust particles, and unwanted contaminants from grains, rice, dal, and other bulk materials during processing.",
    "Capacity Range": "Available in multiple sizes and magnetic strengths suitable for different plant capacities and material flow rates.",
    "Design Features": "Incorporates high-intensity magnetic separation technology combined with cyclone-based dust separation for enhanced purification efficiency.",
    "Construction": "Manufactured using durable steel structures with powerful permanent magnets and precision-engineered cyclone chambers.",
    "Performance": "Effectively separates iron particles, metallic contaminants, and airborne dust while maintaining smooth material flow.",
    "Optional Features": "Can be integrated with dust collection systems, inspection chambers, and easy-clean magnetic access mechanisms.",
    "Customization": "Tailor-made according to processing capacity, material type, and specific customer operational requirements.",
    "Industries Served": "Rice Mills, Dal Mills, Flour Mills, Food Processing Units, Grain Cleaning Plants, and Agro Industries.",
    "Key Benefits": "Improved product purity, enhanced machinery protection, reduced contamination risk, low maintenance, and reliable operation."
  }
},
  ];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const customCSS = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { overflow-x: hidden; width: 100%; }
    html { scroll-behavior: smooth; font-family: 'Inter', system-ui, -apple-system, sans-serif; }
    .page-wrapper { min-height: 100vh; background: linear-gradient(160deg, #f0fdf8 0%, #e8f5f2 30%, #ffffff 60%); color: #171717; overflow-x: hidden; }

    /* ===== PREMIUM NAVBAR ===== */
    .navbar {
      position: fixed; top: 0; left: 0; right: 0;
      z-index: 50;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .navbar.scrolled {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(20px) saturate(180%);
      -webkit-backdrop-filter: blur(20px) saturate(180%);
      border-bottom: 1px solid rgba(0, 137, 123, 0.12);
      box-shadow: 0 4px 24px rgba(0, 77, 64, 0.08);
    }
    .navbar.top {
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(229, 229, 229, 0.4);
    }
    .nav-container {
      max-width: 1280px; margin: 0 auto;
      padding: 0 24px; height: 72px;
      display: flex; align-items: center; justify-content: space-between;
    }

    /* Logo */
    .logo-group {
      display: flex; align-items: center; gap: 10px;
      text-decoration: none;
      transition: transform 0.2s ease;
    }
    .logo-group:hover { transform: scale(1.02); }
    .logo-img { height: 44px; width: auto; object-fit: contain; display: block; }
    .logo-text {
      font-weight: 800; font-size: 1.1rem;
      color: #004d40; letter-spacing: -0.03em;
      background: linear-gradient(135deg, #004d40, #00897b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Nav Right Group */
    .nav-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    /* Nav Links */
    .nav-links {
      display: none;
      align-items: center;
      gap: 4px;
    }
    @media (min-width: 768px) {
      .nav-links { display: flex; }
      .logo-text { font-size: 1.2rem; }
    }
    .nav-link {
      position: relative;
      text-decoration: none;
      color: #404040;
      font-size: 0.875rem;
      font-weight: 500;
      padding: 8px 14px;
      border-radius: 8px;
      transition: color 0.25s ease, background 0.25s ease;
      letter-spacing: 0.01em;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 4px; left: 14px; right: 14px;
      height: 2px;
      background: linear-gradient(90deg, #00897b, #004d40);
      border-radius: 999px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .nav-link:hover { color: #00897b; background: rgba(0, 137, 123, 0.06); }
    .nav-link:hover::after { transform: scaleX(1); }

    /* Nav right actions */
    .nav-actions {
      display: flex; align-items: center; gap: 10px;
    }
    .btn-primary {
      background: linear-gradient(135deg, #00897b, #004d40);
      color: #ffffff;
      padding: 8px 20px;
      border-radius: 9999px;
      font-size: 0.8rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      letter-spacing: 0.02em;
      transition: all 0.25s ease;
      box-shadow: 0 2px 12px rgba(0, 137, 123, 0.3);
    }
    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(0, 137, 123, 0.4);
    }
    .btn-primary:active { transform: translateY(0); }

    /* Page breadcrumb pill */
    .page-pill {
      display: inline-flex; align-items: center; gap: 6px;
      background: linear-gradient(135deg, rgba(0,137,123,0.1), rgba(0,77,64,0.08));
      border: 1px solid rgba(0,137,123,0.2);
      color: #00897b;
      font-size: 0.72rem; font-weight: 600;
      padding: 4px 12px;
      border-radius: 999px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    /* ===== PAGE HERO HEADER ===== */
    .section-light { padding: 100px 0 80px 0; min-height: 100vh; position: relative; }
    .section-light::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,137,123,0.14) 0%, transparent 70%);
      pointer-events: none;
    }
    .section-inner { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
    .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg,rgba(0,137,123,0.12),rgba(0,77,64,0.08)); border: 1px solid rgba(0,137,123,0.25); color: #00897b; font-size: 0.72rem; font-weight: 700; padding: 6px 16px; border-radius: 999px; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 20px; }
    .hero-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #00897b; animation: pulse-dot 2s ease-in-out infinite; }
    @keyframes pulse-dot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.7)} }
    .page-title { font-size: clamp(2rem, 5vw, 3.5rem); font-weight: 900; color: #004d40; text-align: center; margin-bottom: 20px; letter-spacing: -0.04em; line-height: 1.1; background: linear-gradient(135deg, #004d40 0%, #00897b 50%, #26a69a 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .page-subtitle { text-align: center; color: #525252; max-width: 52rem; margin: 0 auto 72px; font-size: 1.1rem; line-height: 1.8; }

    /* ===== PRODUCT CARDS ===== */
    .product-section {
      background: #ffffff;
      padding: 32px 24px;
      border-radius: 28px;
      box-shadow: 0 8px 40px rgba(0,77,64,0.08), 0 1px 4px rgba(0,0,0,0.03);
      margin-bottom: 72px;
      border: 1px solid rgba(0,137,123,0.12);
      position: relative;
      overflow: hidden;
      transition: box-shadow 0.35s ease, transform 0.35s ease;
    }
    .product-section::before {
      content: '';
      position: absolute; top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, #00897b, #004d40, #26a69a, #00897b);
      background-size: 200% 100%;
      animation: shimmer-bar 3s linear infinite;
    }
    @keyframes shimmer-bar { 0%{background-position:0% 0%} 100%{background-position:200% 0%} }
    .product-section:hover { box-shadow: 0 20px 60px rgba(0,77,64,0.14), 0 4px 12px rgba(0,0,0,0.05); transform: translateY(-4px); }
    .product-title {
      font-size: 1.75rem; color: #004d40; margin-bottom: 32px;
      text-align: center; font-weight: 800;
      padding-bottom: 20px; letter-spacing: -0.02em; position: relative;
    }
    .product-title::after {
      content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
      width: 60px; height: 3px; border-radius: 999px;
      background: linear-gradient(90deg, #00897b, #004d40);
    }
    .details-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
    .detail-item {
      background: rgba(0,137,123,0.03); padding: 16px 18px;
      border-radius: 12px; border-left: 4px solid #00897b;
      transition: all 0.25s ease; cursor: default;
    }
    .detail-item:hover {
      background: rgba(0,137,123,0.08);
      border-left-color: #004d40;
      transform: translateX(4px);
      box-shadow: 4px 0 16px rgba(0,137,123,0.1);
    }
    .detail-label { font-weight: 700; color: #171717; display: block; margin-bottom: 5px; font-size: 0.95rem; letter-spacing: 0.01em; }
    .detail-value { color: #525252; font-size: 0.9rem; line-height: 1.65; }
    @media (min-width: 768px) {
      .product-section { padding: 52px; }
      .product-title { font-size: 2.1rem; }
      .details-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
    }

    /* ===== PREMIUM SLIDER ===== */
    .slider-container {
      position: relative; width: 100%; height: 300px;
      border-radius: 20px; margin-bottom: 40px;
      overflow: hidden;
      border: 2px solid rgba(0,137,123,0.2);
      box-shadow: 0 8px 32px rgba(0,77,64,0.15), inset 0 1px 0 rgba(255,255,255,0.6);
      background: linear-gradient(135deg, #e8f5f2, #f0fdf8);
    }

    /* Individual slide wrappers — fade + scale */
    .slide-wrapper {
      position: absolute; inset: 0;
      opacity: 0;
      transform: scale(1.04);
      transition: opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1);
      pointer-events: none;
    }
    .slide-wrapper.active {
      opacity: 1;
      transform: scale(1);
      pointer-events: auto;
      z-index: 2;
    }
    .slider-img {
      width: 100%; height: 100%;
      object-fit: contain; object-position: center;
      display: block;
    }

    /* Edge gradient overlays */
    .slide-overlay-left, .slide-overlay-right {
      position: absolute; top: 0; bottom: 0; width: 60px; z-index: 3; pointer-events: none;
    }
    .slide-overlay-left { left: 0; background: linear-gradient(to right, rgba(232,245,242,0.5), transparent); }
    .slide-overlay-right { right: 0; background: linear-gradient(to left, rgba(232,245,242,0.5), transparent); }

    /* Slide counter */
    .slide-counter {
      position: absolute; top: 14px; right: 16px; z-index: 10;
      background: rgba(0,77,64,0.75); backdrop-filter: blur(8px);
      border-radius: 999px; padding: 4px 12px;
      display: flex; align-items: center; gap: 4px;
      font-size: 0.75rem; font-weight: 600; color: #fff; letter-spacing: 0.05em;
    }
    .slide-num { color: #80cbc4; }
    .slide-sep { opacity: 0.5; }
    .slide-total { opacity: 0.7; }

    /* Nav buttons — glassmorphism */
    .slider-btn {
      position: absolute; top: 50%; transform: translateY(-50%);
      z-index: 10; cursor: pointer; border: none;
      width: 44px; height: 44px; border-radius: 50%;
      background: rgba(255,255,255,0.85); backdrop-filter: blur(10px);
      color: #004d40;
      display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 16px rgba(0,77,64,0.18), inset 0 1px 0 rgba(255,255,255,0.9);
      transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
    }
    .slider-btn:hover {
      background: #00897b; color: #fff;
      transform: translateY(-50%) scale(1.12);
      box-shadow: 0 8px 24px rgba(0,137,123,0.4);
    }
    .slider-btn.prev { left: 16px; }
    .slider-btn.next { right: 16px; }

    /* Dots */
    .slider-dots {
      position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%);
      display: flex; gap: 7px; z-index: 10;
      background: rgba(0,0,0,0.18); backdrop-filter: blur(6px);
      padding: 6px 12px; border-radius: 999px;
    }
    .slider-dot {
      width: 7px; height: 7px; border-radius: 50%;
      background: rgba(255,255,255,0.45); border: none; cursor: pointer;
      transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
    }
    .slider-dot.active {
      background: #00e5cc; width: 22px; border-radius: 4px;
      box-shadow: 0 0 10px rgba(0,229,204,0.7);
    }

    /* Progress bar */
    .slide-progress-bar {
      position: absolute; bottom: 0; left: 0; right: 0; height: 3px; z-index: 10;
      background: linear-gradient(90deg, #00897b, #26a69a);
      transform-origin: left;
      animation: progress-fill 4.5s linear infinite;
    }
    @keyframes progress-fill { 0%{transform:scaleX(0)} 100%{transform:scaleX(1)} }

    @media (min-width: 768px) { .slider-container { height: 480px; margin-bottom: 48px; } }
    @media (min-width: 1024px) { .slider-container { height: 560px; } }

    /* ===== FOOTER ===== */
    .footer {
      background: linear-gradient(135deg, #002b24, #004d40);
      color: rgba(255,255,255,0.65); text-align: center;
      padding: 36px 16px; font-size: 0.875rem; position: relative; overflow: hidden;
    }
    .footer::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(0,229,204,0.4), transparent);
    }
    .footer a { color: #80cbc4; text-decoration: none; font-weight: 500; transition: color 0.2s; }
    .footer a:hover { color: #ffffff; }

    /* ===== NAV ANIMATION ===== */
    @keyframes navSlideIn {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .nav-link { animation: navSlideIn 0.4s ease both; }
    .nav-link:nth-child(1) { animation-delay: 0.05s; }
    .nav-link:nth-child(2) { animation-delay: 0.1s; }
    .nav-link:nth-child(3) { animation-delay: 0.15s; }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customCSS }} />
      <main className="page-wrapper">
        <nav className={`navbar ${scrolled ? "scrolled" : "top"}`}>
          <div className="nav-container">
            <Link href="/" className="logo-group">
              <img src="/logoPNG.png" alt="Aparajitha Milling Logo" className="logo-img" />
              <span className="logo-text">APARAJITHA</span>
            </Link>
            <div className="nav-right">
              <div className="nav-links">
                <Link href="/about" className="nav-link">About Us</Link>
                <Link href="/#services" className="nav-link">What We Do</Link>
                <Link href="/#contact" className="nav-link">Contact</Link>
              </div>
              <div className="nav-actions">
                <Show when="signed-out">
                  <SignInButton mode="modal">
                    <button className="btn-primary">Login</button>
                  </SignInButton>
                </Show>
                <Show when="signed-in">
                  <UserButton></UserButton>
                </Show>
              </div>
            </div>
          </div>
        </nav>

        <section className="section-light">
          <div className="section-inner">
            <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{textAlign:"center"}}>
              <div className="hero-badge"><span className="hero-badge-dot" /> Our Product Range</div>
              <h1 className="page-title">Premium Industrial Solutions</h1>
              <p className="page-subtitle">
                Explore our comprehensive range of high-performance milling solutions and industrial equipment, engineered for maximum efficiency and durability.
              </p>
            </motion.div>

            {/* MAP OVER ALL PRODUCTS */}
            {productsData.map((product, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-50px" }} 
                variants={fadeUp} 
                className="product-section"
              >
                <h2 className="product-title">{product.title}</h2>
                
                {/* 4-Image Slider */}
                <ImageSlider images={product.images} />

                {/* Product Details Grid */}
                <div className="details-grid">
                  {Object.entries(product.details).map(([key, value], i) => (
                    <div key={i} className="detail-item">
                      <span className="detail-label">{key}</span>
                      <span className="detail-value">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        <footer className="footer">
          <p>Developed by <a href="https://sharath-holla.github.io/my_portfolio/" target="_blank" rel="noopener noreferrer">Sharath NS</a></p>
        </footer>
      </main>
    </>
  );
}