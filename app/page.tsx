"use client";

import { SignInButton, Show, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Settings,
  Factory,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const customCSS = `
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    html, body {
      overflow-x: hidden;
      width: 100%;
    }
    html {
      scroll-behavior: smooth;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    .page-wrapper {
      min-height: 100vh;
      background-color: #fafafa;
      color: #171717;
      overflow-x: hidden;
    }
    .navbar {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      z-index: 50;
      border-bottom: 1px solid #e5e5e5;
    }
    .nav-container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 16px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .logo-group {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .logo-icon {
      color: #00897b;
      width: 24px;
      height: 24px;
    }
    .logo-text {
      font-weight: 700;
      font-size: 1rem;
      color: #004d40;
      letter-spacing: -0.025em;
    }
    .nav-links {
      display: none;
    }
    @media (min-width: 768px) {
      .logo-icon {
        width: 32px;
        height: 32px;
      }
      .logo-text {
        font-size: 1.25rem;
      }
      .nav-links {
        display: flex;
        gap: 32px;
        font-size: 0.875rem;
        font-weight: 500;
        color: #525252;
      }
    }
    .nav-link {
      text-decoration: none;
      color: inherit;
      transition: color 0.2s;
    }
    .nav-link:hover {
      color: #00897b;
    }
    .btn-primary {
      background-color: #00897b;
      color: #ffffff;
      padding: 8px 16px;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: background-color 0.2s;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      white-space: nowrap;
    }
    @media (min-width: 768px) {
      .btn-primary {
        padding: 10px 20px;
        font-size: 0.875rem;
      }
    }
    .btn-primary:hover {
      background-color: #004d40;
    }
    .btn-large {
      padding: 14px 28px;
      font-size: 0.875rem;
    }
    @media (min-width: 768px) {
      .btn-large {
        padding: 16px 32px;
        font-size: 1rem;
      }
    }
    .hero-section {
      padding: 110px 16px 64px;
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    @media (min-width: 768px) {
      .hero-section {
        padding: 128px 16px 80px;
      }
    }
    .hero-title {
      font-size: 2.25rem;
      font-weight: 800;
      color: #171717;
      line-height: 1.1;
      max-width: 56rem;
      margin-bottom: 16px;
      letter-spacing: -0.025em;
    }
    @media (min-width: 768px) {
      .hero-title {
        font-size: 4.5rem;
        margin-bottom: 24px;
      }
    }
    .text-brand {
      color: #00897b;
    }
    .hero-subtitle {
      font-size: 1rem;
      color: #525252;
      max-width: 42rem;
      margin: 0 auto 32px;
      line-height: 1.5;
    }
    @media (min-width: 768px) {
      .hero-subtitle {
        font-size: 1.25rem;
        margin: 0 auto 40px;
      }
    }
    .section-light {
      background-color: #ffffff;
      padding: 64px 0;
    }
    .section-brand-light {
      background-color: rgba(224, 242, 241, 0.3);
      padding: 64px 0;
    }
    .section-dark {
      background-color: #004d40;
      color: #ffffff;
      padding: 64px 0;
    }
    @media (min-width: 768px) {
      .section-light, .section-brand-light, .section-dark {
        padding: 96px 0;
      }
    }
    .section-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 16px;
    }
    .max-w-3xl {
      max-width: 48rem;
      margin: 0 auto;
    }
    .section-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #004d40;
      margin-bottom: 16px;
    }
    @media (min-width: 768px) {
      .section-title {
        font-size: 1.875rem;
        margin-bottom: 24px;
      }
    }
    .section-title-white {
      color: #ffffff;
    }
    .section-title-center {
      text-align: center;
      margin-bottom: 16px;
    }
    .section-text {
      font-size: 1rem;
      color: #525252;
      line-height: 1.6;
      margin-bottom: 16px;
    }
    @media (min-width: 768px) {
      .section-text {
        font-size: 1.125rem;
        line-height: 1.75;
        margin-bottom: 24px;
      }
    }
    .section-subtitle-center {
      text-align: center;
      color: #525252;
      max-width: 42rem;
      margin: 0 auto 48px;
      font-size: 1rem;
    }
    @media (min-width: 768px) {
      .section-subtitle-center {
        margin: 0 auto 64px;
        font-size: 1.125rem;
      }
    }
    .grid-cards {
      display: grid;
      gap: 24px;
      grid-template-columns: 1fr;
    }
    @media (min-width: 768px) {
      .grid-cards {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
      }
    }
    @media (min-width: 1024px) {
      .grid-cards {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .card {
      background-color: #ffffff;
      padding: 24px;
      border-radius: 16px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      border: 1px solid #f5f5f5;
    }
    @media (min-width: 768px) {
      .card {
        padding: 32px;
      }
    }
    .service-img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    @media (min-width: 768px) {
      .service-img {
        height: 240px;
        margin-bottom: 24px;
      }
    }
    .card-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: #171717;
      margin-bottom: 8px;
    }
    @media (min-width: 768px) {
      .card-title {
        font-size: 1.25rem;
      }
    }
    .card-desc {
      color: #525252;
      line-height: 1.5;
      font-size: 0.95rem;
    }
    @media (min-width: 768px) {
      .card-desc {
        font-size: 1rem;
      }
    }
    .grid-2 {
      display: grid;
      gap: 32px;
      grid-template-columns: 1fr;
    }
    @media (min-width: 768px) {
      .grid-2 {
        grid-template-columns: repeat(2, 1fr);
        gap: 48px;
      }
      .nav-container, .section-inner {
        padding: 0 24px;
      }
    }
    @media (min-width: 1024px) {
      .nav-container, .section-inner {
        padding: 0 32px;
      }
    }
    .product-category {
      font-size: 1.25rem;
      font-weight: 700;
      color: #171717;
      margin-bottom: 16px;
      padding-bottom: 8px;
      border-bottom: 1px solid #e5e5e5;
    }
    @media (min-width: 768px) {
      .product-category {
        font-size: 1.5rem;
      }
    }
    .product-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .product-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }
    .product-icon-wrap {
      background-color: rgba(0, 137, 123, 0.1);
      padding: 8px;
      border-radius: 8px;
      margin-top: 4px;
      flex-shrink: 0;
    }
    .product-icon {
      width: 16px;
      height: 16px;
      color: #00897b;
    }
    .product-name {
      display: block;
      font-size: 1rem;
      font-weight: 700;
      color: #171717;
    }
    @media (min-width: 768px) {
      .product-name {
        font-size: 1.125rem;
      }
    }
    .product-detail {
      color: #525252;
      font-size: 0.95rem;
    }
    @media (min-width: 768px) {
      .product-detail {
        font-size: 1rem;
      }
    }
    .contact-grid {
      display: grid;
      gap: 32px;
      grid-template-columns: 1fr;
    }
    @media (min-width: 768px) {
      .contact-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 64px;
      }
    }
    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }-
    @media (min-width: 768px) {
      .contact-info {
        gap: 24px;
      }
    }
    .contact-row {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }
    @media (min-width: 768px) {
      .contact-row {
        align-items: center;
      }
    }
    .contact-icon {
      color: #e0f2f1;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      margin-top: 2px;
    }
    @media (min-width: 768px) {
      .contact-icon {
        margin-top: 0;
      }
    }
    .contact-text {
      font-size: 1rem;
      line-height: 1.5;
      word-break: break-word;
    }
    @media (min-width: 768px) {
      .contact-text {
        font-size: 1.125rem;
      }
    }
    .iso-card {
      background-color: rgba(255, 255, 255, 0.1);
      padding: 24px;
      border-radius: 16px;
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      display: flex;
      flex-direction: column;
    }
    @media (min-width: 768px) {
      .iso-card {
        padding: 32px;
      }
    }
    .iso-title {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    @media (min-width: 768px) {
      .iso-title {
        font-size: 1.5rem;
      }
    }
    .iso-desc {
      color: rgba(224, 242, 241, 0.8);
      margin-bottom: 24px;
      font-size: 0.95rem;
    }
    @media (min-width: 768px) {
      .iso-desc {
        font-size: 1rem;
      }
    }
    .iso-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: auto;
      opacity: 0.5;
    }
    .iso-logo-icon {
      width: 40px;
      height: 40px;
    }
    @media (min-width: 768px) {
      .iso-logo-icon {
        width: 48px;
        height: 48px;
      }
    }
    .iso-logo-text {
      font-weight: 700;
      font-size: 1.25rem;
      letter-spacing: -0.025em;
    }
    @media (min-width: 768px) {
      .iso-logo-text {
        font-size: 1.5rem;
      }
    }
    .founder-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 32px 0;
      text-align: center;
    }
    @media (min-width: 768px) {
      .founder-wrapper {
        margin: 48px 0;
      }
    }
    .founder-img {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid #00897b;
      margin-bottom: 16px;
    }
    @media (min-width: 768px) {
      .founder-img {
        width: 200px;
        height: 200px;
        margin-bottom: 24px;
      }
    }
    .vision-mission-box {
      background-color: rgba(0, 137, 123, 0.05);
      padding: 24px;
      border-radius: 16px;
      margin-top: 32px;
      border: 1px solid rgba(0, 137, 123, 0.1);
    }
    @media (min-width: 768px) {
      .vision-mission-box {
        padding: 32px;
        margin-top: 48px;
      }
    }
    .vision-mission-title {
      color: #004d40;
      font-size: 1.25rem;
      font-weight: 700;
      margin-bottom: 16px;
    }
    @media (min-width: 768px) {
      .vision-mission-title {
        font-size: 1.5rem;
      }
    }
    .vision-mission-list {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 16px;
      text-align: left;
    }
    .content-image {
      width: 100%;
      max-height: 250px;
      object-fit: cover;
      border-radius: 12px;
      margin: 24px 0;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    @media (min-width: 768px) {
      .content-image {
        max-height: 400px;
        border-radius: 16px;
        margin: 32px 0;
      }
    }
    .featured-product {
      background-color: #004d40;
      color: #ffffff;
      padding: 24px 16px;
      border-radius: 16px;
      margin-top: 48px;
    }
    @media (min-width: 768px) {
      .featured-product {
        padding: 48px;
        margin-top: 64px;
      }
    }
    .footer {
      background-color: #002b24;
      color: rgba(255,255,255,0.7);
      text-align: center;
      padding: 24px 16px;
      font-size: 0.875rem;
    }
    .footer a {
      color: #e0f2f1;
      text-decoration: underline;
      transition: color 0.2s;
    }
    .footer a:hover {
      color: #ffffff;
    }
    .next-image-container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 24px;
    }
    @media (min-width: 768px) {
      .next-image-container {
        margin-top: 0;
      }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: customCSS }} />
      <main className="page-wrapper">
        <nav className="navbar">
          <div className="nav-container">
            <div className="logo-group">
              <Factory className="logo-icon" />
              <span className="logo-text">APARAJITHA</span>
            </div>
            <div className="nav-links">
              <a href="#about" className="nav-link">
                About Us
              </a>
              <a href="#services" className="nav-link">
                What We Do
              </a>
              <a href="#products" className="nav-link">
                Products
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="btn-primary">Login</button>
                </SignInButton>
              </Show>
              <Show when="signed-in">
                <UserButton/>
              </Show>
            </div>
          </div>
        </nav>

        <section className="hero-section">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="hero-title">
              Next-Generation{" "}
              <span className="text-brand">Milling Solutions</span>
            </h1>
            <p className="hero-subtitle">
              Manufacturing, supplying, and exporting high-quality industrial
              equipment since 2026. Built for durability, performance, and
              corrosion resistance.
            </p>
            <a href="#products" className="btn-primary btn-large">
              Explore Products <ChevronRight size={20} />
            </a>
          </motion.div>
        </section>

        <section id="about" className="section-light">
          <div className="section-inner">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-3xl"
            >
              <h2 className="section-title section-title-center">About Us</h2>
              <p className="section-text text-center">
                Aparajitha Milling Solution Pvt. Ltd., founded in 2026,
                represents a new generation of milling infrastructure driven by
                the industry's brightest minds. We specialize in the
                manufacturing, supplying, and exporting of a comprehensive range
                of industrial equipment.
              </p>
              <p className="section-text text-center">
                Our offerings include complete turnkey solutions for Rice Mills,
                Flour Mills, and Dal Mills, alongside individual Food Processing
                Machines, Industrial Gates, Dust Collecting Equipment, Spouting
                Materials, and Aspiration Materials. We are widely recognized
                for delivering high-quality products that set the standard for
                durability, seamless performance, and advanced corrosion
                resistance.
              </p>

              <div className="founder-wrapper">
                <img
                  src="/first.jpeg"
                  alt="Late Mr. B. Somashekar Placeholder"
                  className="founder-img"
                />
                <h3 className="section-title" style={{ marginBottom: "8px" }}>
                  Our Guiding Light
                </h3>
                <p
                  className="section-text"
                  style={{ fontStyle: "italic", maxWidth: "36rem" }}
                >
                  Our company's ethos is deeply guided by the principles of the
                  late Mr. B. Somashekar, a distinguished Mechanical Engineer
                  with over 15 years of industry experience. Under his ongoing
                  legacy, we have successfully executed over 500 Greenfield
                  projects.
                </p>
              </div>

              <div className="vision-mission-box">
                <h3 className="vision-mission-title text-center">
                  Vision & Mission
                </h3>
                <ul className="vision-mission-list">
                  <li>
                    <strong>Our Vision:</strong> To be the global benchmark in
                    hygienic, energy-efficient food processing and milling
                    infrastructure.
                  </li>
                  <li>
                    <strong>Our Mission:</strong> To empower the agricultural
                    and food processing sectors with precision-engineered
                    machinery that maximizes yield, minimizes downtime, and
                    withstands the test of time.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="section-brand-light">
          <div className="section-inner">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="section-title section-title-center">What We Do</h2>
              <p className="section-subtitle-center">
                Our facility is equipped to handle complex fabrication and
                precision engineering requirements for diverse industrial needs.
              </p>

              {/* <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                alt="Factory Floor Placeholder" 
                className="content-image"
              /> */}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid-cards"
            >
              {[
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
                  img: "/picture2.png",
                }
              ].map((service, i) => (
                <motion.div key={i} variants={fadeUp} className="card">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="service-img"
                  />
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-desc">{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="products" className="section-light">
          <div className="section-inner">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="section-title section-title-center">
                Our Products
              </h2>
              <p className="section-subtitle-center">
                Comprehensive solutions for Food Processing Equipment, including
                Plant Machinery and Accessories.
              </p>
            </motion.div>

            <div className="grid-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3
                  className="product-category"
                  style={{ textAlign: "center" }}
                >
                  Conveyors & Elevators
                </h3>
                <img
                  src="/sixth.png"
                  alt="Description of image"
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    height: "auto",
                    display: "block",
                    margin: "0 auto 32px auto",
                    border: "4px solid #00897b",
                    borderRadius: "12px",
                  }}
                />
                <ul className="product-list">
                  <li className="product-item">
                    <div className="product-icon-wrap">
                      <ChevronRight className="product-icon" />
                    </div>
                    <div>
                      <strong className="product-name">Bucket Elevators</strong>
                      <span className="product-detail">
                        Engineered with a highly rigid structural frame, our
                        bucket elevators guarantee absolute alignment even under
                        continuous heavy loads. They feature a strategically
                        placed inspection cover for rapid maintenance and are
                        designed to efficiently handle a wide spectrum of
                        free-flowing materials—including rice, wheat, corn,
                        malt, and sawdust—delivering energy-efficient and robust
                        performance.
                      </span>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="product-icon-wrap">
                      <ChevronRight className="product-icon" />
                    </div>
                    <div>
                      <strong className="product-name">Belt Conveyors</strong>
                      <span className="product-detail">
                        Available in both Through-Type and Flat-Belt
                        configurations, our conveyors are built to adapt to your
                        specific operational needs. With customizable widths
                        ranging from 400mm to 1500mm and massive capacities from
                        2 TPH to 250 TPH, they are the ideal solution for
                        complex handling, sorting, inspection, and packaging
                        processes.
                      </span>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="product-icon-wrap">
                      <ChevronRight className="product-icon" />
                    </div>
                    <div>
                      <strong className="product-name">
                        Chain & Screw Conveyors
                      </strong>
                      <span className="product-detail">
                        Our Chain Conveyors ensure the rapid, damage-free
                        movement of delicate materials for high throughput.
                        Complementing this, our Screw Conveyors offer complete
                        turnkey feeding solutions for flour, rice, and dhal
                        mills, featuring highly customizable screw diameters
                        from 100mm to 800mm for reliable, high-quality
                        operation.
                      </span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h3
                  className="product-category"
                  style={{ textAlign: "center" }}
                >
                  Storage Solutions & Spare Parts
                </h3>
                <img
                  src="/fourth.png"
                  alt="Description of image"
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    height: "auto",
                    display: "block",
                    margin: "0 auto 32px auto",
                    border: "4px solid #00897b",
                    borderRadius: "12px",
                  }}
                />
                <ul className="product-list">
                  <li className="product-item">
                    <div className="product-icon-wrap">
                      <ChevronRight className="product-icon" />
                    </div>
                    <div>
                      <strong className="product-name">
                        High-Capacity Storage Bunkers
                      </strong>
                      <span className="product-detail">
                        Specifically engineered for the demanding requirements
                        of the milling industry, our heavy-duty storage bunkers
                        range from 5 tons to 1,000 tons in capacity. They
                        feature an innovative, user-friendly bolt-nut assembly
                        system that simplifies maintenance, while integrated
                        advanced weighing sensors provide highly accurate weight
                        detection for precise, real-time inventory management.
                      </span>
                    </div>
                  </li>
                  <li className="product-item">
                    <div className="product-icon-wrap">
                      <ChevronRight className="product-icon" />
                    </div>
                    <div>
                      <strong className="product-name">
                        Premium Spare Parts & Accessories
                      </strong>
                      <span className="product-detail">
                        To ensure your facility runs continuously at peak
                        performance, we manufacture and supply a comprehensive
                        range of premium replacements. Our inventory includes
                        highly efficient Cyclones, precision-engineered
                        Pneumatic and Manual Gates, heavy-duty Bran Dischargers,
                        customized Spouting and Ducting materials, and powerful
                        Industrial Magnets to safeguard your machinery from
                        impurities.
                      </span>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="featured-product"
            >
              <h3 className="section-title section-title-white text-center md:text-left">
                Featured New Product: Centrifugal Fans
              </h3>
              <div className="grid-2">
                <div>
                  <p
                    className="section-text"
                    style={{ color: "rgba(255,255,255,0.9)" }}
                  >
                    Often referred to as blowers, our new line of Centrifugal
                    Fans pulls air into an inlet and utilizes a high-speed
                    rotating impeller to accelerate it outward at a 90-degree
                    angle.
                  </p>
                  <ul
                    className="vision-mission-list"
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      marginTop: "16px",
                    }}
                  >
                    <li>
                      <strong>Forward-Curved:</strong> Optimized for
                      low-pressure environments.
                    </li>
                    <li>
                      <strong>Backward-Inclined:</strong> Engineered for peak
                      energy efficiency.
                    </li>
                    <li>
                      <strong>Radial:</strong> Built exceptionally rugged for
                      moving dust-laden air.
                    </li>
                  </ul>
                </div>
                <div className="next-image-container">
                  <Image
                    src="/five.png"
                    alt="Centrifugal Fan"
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "300px",
                      objectFit: "contain",
                      backgroundColor: "#ffffff",
                      padding: "16px",
                      borderRadius: "12px",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section-dark">
          <div className="section-inner">
            <div className="contact-grid">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <h2 className="section-title section-title-white">
                  Contact Us
                </h2>
                <div className="contact-info">
                  <div className="contact-row">
                    <MapPin className="contact-icon" />
                    <p className="contact-text">
                      #127/2, Machahalli Industrial Area
                      <br />
                      Machohalli, Magadi Main Road
                      <br />
                      Bangalore - 560091
                    </p>
                  </div>
                  <div className="contact-row">
                    <Phone className="contact-icon" />
                    <p className="contact-text">8494909387 / 955367333</p>
                  </div>
                  <div className="contact-row">
                    <Mail className="contact-icon" />
                    <p className="contact-text">
                      aparajithamillingsolution@gmail.com
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="iso-card"
              >
                <h3 className="iso-title">ISO 9001:2015 Certified</h3>
                <p className="iso-desc">
                  Dedicated to energy efficiency and hygienic food processing
                  standards globally.
                </p>
                <div className="iso-logo">
                  <Factory className="iso-logo-icon" />
                  <span className="iso-logo-text">APARAJITHA</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
