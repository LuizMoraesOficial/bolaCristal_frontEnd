import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import BtnWhatsapp from "../../components/btnwhatsapp/btnwhatsapp";
import HeroSection from "../../components/home/hero-section";
import FeaturesSection from "../../components/home/features-section";
import ServicesSection from "../../components/home/services-section";
import CoursesSection from "../../components/home/courses-section";
import TestimonialsSection from "../../components/home/testimonials-section";
import ShopSection from "../../components/home/shop-section";
import BlogSection from "../../components/home/blog-section";
import ClubSection from "../../components/home/club-section";
import NewsletterSection from "../../components/home/newsletter-section";
import ContactSection from "../../components/home/contact-section";
import "./home.css";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <CoursesSection />
        <TestimonialsSection />
        <ShopSection />
        <BlogSection />
        <ClubSection />
        <NewsletterSection />
        <ContactSection />
      </main>
    </>
  );
}

