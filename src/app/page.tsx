"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Activity, Calendar, MapPin, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Highlights",
          id: "#highlights",
        },
        {
          name: "Stats",
          id: "#stats",
        },
        {
          name: "Kit",
          id: "#kit",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Register",
          id: "#registration",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-vector/20-gym-line-icon-pack-like-love-mobil-gym-phone-board_1142-24679.jpg"
      logoAlt="Bikeathon 2025 Logo"
      brandName="Bikeathon 2025"
      button={{
        text: "Register Now",
        href: "#registration",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroCarouselLogo
      logoText="Dainik Jagran inext Bikeathon 2025"
      description="Join thousands across 12 cities in India's premier bikeathon celebrating fitness, fun, and community. Register now for Rs 250 and receive official kit, t-shirt, cap, and mask."
      buttons={[
        {
          text: "Register Now",
          href: "#registration",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-male-cyclist-riding-bicycle-pavement_23-2147892622.jpg",
          imageAlt: "Group of cyclists racing through a city",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/retro-summer-activities-with-80-s-inspired-aesthetic_23-2151425758.jpg",
          imageAlt: "Single cyclist on a scenic urban road",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-smiley-women-with-bicycles_23-2149041621.jpg",
          imageAlt: "Close-up of event bikes and gear",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-repairing-bicycle_1170-2551.jpg",
          imageAlt: "Cyclists crossing the finish line with cheering crowds",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-women-nature_23-2149193328.jpg",
          imageAlt: "Family enjoying a bike ride in a park",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-adult-using-bike-travel-city_23-2149258644.jpg",
          imageAlt: "Aerial view of a large bikeathon procession",
        },
      ]}
      autoplayDelay={4000}
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="About the Bikeathon"
      description="Dainik Jagran inext Bikeathon, now in its 17th season, is more than just a rally; it's a celebration of health, happiness, and community. Spanning 12 major Indian cities, this mega event brings together cyclists of all ages and backgrounds to pedal for a fitter, greener future. Experience the joy of collective riding, discover new routes, and be part of India's largest cycling movement."
      imageSrc="http://img.b2bpic.net/free-photo/side-view-fit-friends-outdoors_23-2150828917.jpg"
      imageAlt="Cyclists celebrating at the Bikeathon event"
    />
  </div>

  <div id="highlights" data-section="highlights">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Official Kit & Merchandise",
          description: "Register for just Rs 250 and receive an exclusive official kit including a t-shirt, cap, and mask, making you part of the Bikeathon family.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-brown-bow-with-black-bow-dark-surface-darkness-pin-measure-photo-color_179666-24409.jpg",
          imageAlt: "Bikeathon official kit components",
        },
        {
          title: "Community & Camaraderie",
          description: "Connect with thousands of fellow cycling enthusiasts from 12 cities. Forge new friendships and share the passion for a healthy lifestyle.",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-enjoying-bike-ride-together_23-2152024627.jpg",
          imageAlt: "Cyclists high-fiving and smiling",
        },
        {
          title: "Promote Health & Fitness",
          description: "Embrace a healthier lifestyle by participating in a mega cycling rally. Inspire others and contribute to a fitter India.",
          imageSrc: "http://img.b2bpic.net/free-photo/finally-i-ve-reached-my-destination-female-cyclist-with-good-body-shape-standing-with-her-bike-beach-daytime_146671-16751.jpg",
          imageAlt: "Person cycling with fitness tracker",
        },
      ]}
      title="Why Join Bikeathon 2025?"
      description="Participate in India's premier cycling event and experience a unique blend of fitness, fun, and community engagement. Here's what awaits you:"
    />
  </div>

  <div id="stats" data-section="stats">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "cities",
          icon: MapPin,
          title: "Cities",
          value: "12+",
        },
        {
          id: "participants",
          icon: Users,
          title: "Participants",
          value: "100K+",
        },
        {
          id: "seasons",
          icon: Calendar,
          title: "Seasons",
          value: "17",
        },
        {
          id: "distance",
          icon: Activity,
          title: "Kilometers Cycled",
          value: "500K+",
        },
      ]}
      title="Bikeathon By The Numbers"
      description="Witness the immense scale and impact of Dainik Jagran inext Bikeathon across the nation."
    />
  </div>

  <div id="kit" data-section="kit">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "kit-tshirt",
          name: "Official T-Shirt",
          price: "Included",
          variant: "Premium Cotton",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-boy-holding-basketball-ball_23-2148478803.jpg",
          imageAlt: "Bikeathon official t-shirt",
        },
        {
          id: "kit-cap",
          name: "Branded Cap",
          price: "Included",
          variant: "Adjustable Fit",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-cyclist-woman_23-2149703278.jpg",
          imageAlt: "Bikeathon branded cap",
        },
        {
          id: "kit-mask",
          name: "Safety Mask",
          price: "Included",
          variant: "Breathable Fabric",
          imageSrc: "http://img.b2bpic.net/free-photo/smiley-woman-putting-her-medical-mask-gym_23-2148769884.jpg",
          imageAlt: "Bikeathon safety mask",
        },
        {
          id: "kit-waterbottle",
          name: "Hydration Bottle",
          price: "Optional Add-on",
          variant: "Eco-friendly",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-with-bootle_1157-8786.jpg",
          imageAlt: "Bikeathon hydration bottle",
        },
        {
          id: "kit-medal",
          name: "Finisher Medal",
          price: "Awarded",
          variant: "Commemorative",
          imageSrc: "http://img.b2bpic.net/free-vector/medals-with-reflections-set_1284-36066.jpg",
          imageAlt: "Bikeathon finisher medal",
        },
        {
          id: "kit-jersey",
          name: "Cycling Jersey",
          price: "Optional Add-on",
          variant: "Pro-grade",
          imageSrc: "http://img.b2bpic.net/free-photo/caucasian-cyclist-full-gear-posing-with-bike-studio-portrait-smiling-darkhaired-athlete_7502-10500.jpg",
          imageAlt: "Bikeathon cycling jersey",
        },
      ]}
      title="Your Official Bikeathon Kit"
      description="Every registered participant receives an exclusive kit designed for comfort and style, enhancing your Bikeathon experience."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      carouselMode="auto"
      testimonials={[
        {
          id: "test-1",
          name: "Priya Sharma",
          role: "Marketing Professional",
          testimonial: "Bikeathon is an incredible event that combines fitness with community spirit. It's the highlight of my year!",
          imageSrc: "http://img.b2bpic.net/free-photo/sexy-curvy-woman-is-posing-her-black-bike-street-wearing-styilish-clothing_613910-13898.jpg",
          imageAlt: "Priya Sharma",
        },
        {
          id: "test-2",
          name: "Amit Kumar",
          role: "Software Engineer",
          testimonial: "The energy is infectious! Riding with thousands of people for a cause is an unmatched experience. Highly recommended!",
          imageSrc: "http://img.b2bpic.net/free-photo/people-riding-their-bikes-group-nature_23-2150816061.jpg",
          imageAlt: "Amit Kumar",
        },
        {
          id: "test-3",
          name: "Anjali Singh",
          role: "Entrepreneur",
          testimonial: "My family and I participated for the first time, and we loved every moment. It's a fantastic way to promote health and bond.",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-having-fun-by-sea-side_23-2149347049.jpg",
          imageAlt: "Anjali Singh",
        },
        {
          id: "test-4",
          name: "Rajesh Gupta",
          role: "Retired Educator",
          testimonial: "At 60, I thought my cycling days were over, but Bikeathon proved me wrong! It's inclusive, well-organized, and truly inspiring.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-senior-man-with-bike-mountain_23-2148929661.jpg",
          imageAlt: "Rajesh Gupta",
        },
        {
          id: "test-5",
          name: "Neha Patel",
          role: "Student",
          testimonial: "The event kit was great, and the routes were fun. Met so many amazing people. Can't wait for Season 18!",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-sporty-fit-athlete-with-earphones-getting-concentrated-training_342744-307.jpg",
          imageAlt: "Neha Patel",
        },
      ]}
      title="Hear From Our Riders"
      description="Read inspiring stories and experiences from past Dainik Jagran inext Bikeathon participants."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "What is the registration fee?",
          content: "The registration fee for Bikeathon 2025 is Rs 250. This includes your official event kit (t-shirt, cap, mask).",
        },
        {
          id: "faq-2",
          title: "What does the official kit include?",
          content: "Your official kit includes a high-quality event t-shirt, a branded cap, and a protective face mask. These will be provided at the kit distribution centers in each city.",
        },
        {
          id: "faq-3",
          title: "Can I participate without a personal bicycle?",
          content: "Yes, bicycles will be available for rent at the venue, subject to availability. We recommend booking in advance or bringing your own.",
        },
        {
          id: "faq-4",
          title: "What are the age criteria for participation?",
          content: "The Bikeathon is open to participants aged 18-55. Minors may participate with parental consent and supervision in designated family-friendly categories.",
        },
        {
          id: "faq-5",
          title: "How can I check the schedule for my city?",
          content: "All city-specific dates, venues, and timings will be displayed on this website and communicated via email to registered participants. Check the 'Schedule' section above for details.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about the Bikeathon event, registration, and participation."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="registration" data-section="registration">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Register for Bikeathon 2025!"
      description="Secure your spot in India's biggest bicycle rally. Fill out the form below to register and get ready to pedal towards health and happiness!"
      inputs={[
        {
          name: "fullName",
          type: "text",
          placeholder: "Your Full Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email Address",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Mobile Number",
          required: true,
        },
      ]}
      multiSelect={{
        name: "city",
        label: "Select Your City",
        options: [
          "Kanpur",
          "Lucknow",
          "Prayagraj",
          "Varanasi",
          "Gorakhpur",
          "Bareilly",
          "Agra",
          "Meerut",
          "Patna",
          "Ranchi",
          "Jamshedpur",
          "Dehradun",
        ],
      }}
      imageSrc="http://img.b2bpic.net/free-photo/high-angle-designer-working-floor_23-2149930985.jpg"
      imageAlt="Cyclist with city map overlay"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Complete Registration"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      logoSrc="http://img.b2bpic.net/free-vector/20-gym-line-icon-pack-like-love-mobil-gym-phone-board_1142-24679.jpg"
      logoAlt="Bikeathon 2025 Logo"
      columns={[
        {
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Event Highlights",
              href: "#highlights",
            },
            {
              label: "Schedule & Cities",
              href: "#stats",
            },
            {
              label: "Our Kit",
              href: "#kit",
            },
          ],
        },
        {
          items: [
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Register Now",
              href: "#registration",
            },
            {
              label: "Contact Us",
              href: "#registration",
            },
          ],
        },
        {
          items: [
            {
              label: "Facebook",
              href: "https://facebook.com/dainikjagran",
            },
            {
              label: "Instagram",
              href: "https://instagram.com/dainikjagran",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/dainikjagran",
            },
            {
              label: "YouTube",
              href: "https://youtube.com/dainikjagran",
            },
          ],
        },
      ]}
      logoText="Dainik Jagran inext Bikeathon 2025"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
