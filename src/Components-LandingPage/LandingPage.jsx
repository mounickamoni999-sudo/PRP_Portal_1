import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import Logo from "../assets/LandingPageAssets/PlacementIcon.png";
import bannerIllustration from "../assets/LandingPageAssets/Illustration Image.png";
import JobIcon from "../assets/LandingPageAssets/JobIcon.png";
import AIResumeIcon from "../assets/LandingPageAssets/AIResumeIcon.png";
import TrainingIcon from "../assets/LandingPageAssets/TrainingIcon.png";
import AnalyticsIcon from "../assets/LandingPageAssets/Analytics.png";
import UsersIcon from "../assets/LandingPageAssets/UsersIcon.png";
import ProfileIcon from "../assets/LandingPageAssets/ProfileIcon.png";
import StarIcon from "../assets/LandingPageAssets/StarIcon.png";
import QuoteIcon from "../assets/LandingPageAssets/QuoteIcon.png";
import GrokLogo from "../assets/LandingPageAssets/GrokLogo.png";
import WiproLogo from "../assets/LandingPageAssets/WiproLogo.png";
import QwenLogo from "../assets/LandingPageAssets/QwenLogo.png";
import DeepSeekLogo from "../assets/LandingPageAssets/DeepSeekLogo.png";
import InfosysLogo from "../assets/LandingPageAssets/InfosysLogo.png";
import ClaudeLogo from "../assets/LandingPageAssets/ClaudeLogo.png";
import OpenAILogo from "../assets/LandingPageAssets/OpenAILogo.png";
import FacebookIcon from "../assets/LandingPageAssets/FacebookIcon.png";
import XIcon from "../assets/LandingPageAssets/XIcon.png";
import InstagramIcon from "../assets/LandingPageAssets/InstagramIcon.png";

const whyItems = [
  { icon: JobIcon, title: "Wide Job Opportunities", description: "Access to thousands of job openings from top companies" },
  { icon: AIResumeIcon, title: "AI Resume Matching", description: "Get matched with the right jobs using AI technology" },
  { icon: TrainingIcon, title: "Training & Skill Readiness", description: "Build in-demand skills with industry-relevant training programs" },
  { icon: AnalyticsIcon, title: "Placement Analytics", description: "Track performance and make data-driven decisions" },
  { icon: UsersIcon, title: "For Every User", description: "Tailored benefits for job seekers, recruiters and training institutions" }
];

const storyList = [
  { name: "Sarah Chen", role: "Product Designer @ Aura Systems", message: "\"ConnectHire transformed my job search. The AI matching felt intuitive, and within two weeks, I was interviewed and hired by my dream company in fintech. The process was seamless.\"" },
  { name: "Jhon Francis", role: "Recruitment Manager @ Vertex Solutions", message: "\"The community gave me the confidence to showcase my work and connect with amazing people. I got my first full-time offer within 6 months. The support and guidance here are unmatched.\"" },
  { name: "David Miller", role: "Talent Director @ Zenith Capital", message: "\"The quality of candidates on ConnectHire is unmatched. We reduced our time-to-hire by 40% and have found some of our most productive team members through their automated screening.\"" }
];

const partnerList = [
  { logo: GrokLogo, name: "Grok" },
  { logo: WiproLogo, name: "Wipro" },
  { logo: QwenLogo, name: "Qwen" },
  { logo: DeepSeekLogo, name: "DeepSeek" },
  { logo: InfosysLogo, name: "Infosys" },
  { logo: ClaudeLogo, name: "Claude" },
  { logo: OpenAILogo, name: "OpenAI" }
];

const footerGroups = [
  { title: "COMPANY", links: [{ label: "About Us", href: "#about" }, { label: "Careers", href: "#careers" }, { label: "Contact", href: "#contact" }] },
  { title: "PLATFORM", links: [{ label: "Job Postings", href: "#features" }, { label: "AI Resume Matching", href: "#features" }, { label: "Training & Skill Readiness", href: "#training" }, { label: "Placement Analytics", href: "#features" }] },
  { title: "SUPPORT", links: [{ label: "Help Center", href: "#help" }, { label: "FAQ", href: "#faq" }, { label: "Raise Issue", href: "#support" }, { label: "Contact Support", href: "#contact" }] },
  { title: "LEGAL", links: [{ label: "Privacy Policy", href: "#privacy" }, { label: "Terms & Conditions", href: "#terms" }, { label: "Cookie Policy", href: "#cookies" }] }
];

const LandingPage = () => {
  const handleSectionScroll = (event, sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="Prp-Landing-Page-headerBar">
        <Link to="#home" onClick={(event) => handleSectionScroll(event, "home")} className="Prp-Landing-Page-headerLogoLink">
          <img src={Logo} alt="Placement and Recruitment Platform logo" />
          <span>Placement &; <br />Recruitment Platform</span>
        </Link>
        <nav className="Prp-Landing-Page-headerMenu">
          <Link to="#home" onClick={(event) => handleSectionScroll(event, "home")} className="Prp-Landing-Page-headerMenuItem Prp-Landing-Page-active">Home</Link>
          <Link to="#features" onClick={(event) => handleSectionScroll(event, "features")} className="Prp-Landing-Page-headerMenuItem">Features</Link>
          <Link to="#recruiters" onClick={(event) => handleSectionScroll(event, "recruiters")} className="Prp-Landing-Page-headerMenuItem">For Recruiters/Employers</Link>
          <Link to="#training" onClick={(event) => handleSectionScroll(event, "training")} className="Prp-Landing-Page-headerMenuItem">For Training Institutions</Link>
          <Link to="#success-stories" onClick={(event) => handleSectionScroll(event, "success-stories")} className="Prp-Landing-Page-headerMenuItem">Success Stories</Link>
        </nav>
        <div className="Prp-Landing-Page-headerAuthButtons">
          <Link to="/login" className="Prp-Landing-Page-headerBtnLogin">Login</Link>
          <Link to="/po-registration" className="Prp-Landing-Page-headerBtnRegister">Register</Link>
        </div>
      </header>
      <main className="Prp-Landing-Page-wrapper">
        <section className="Prp-Landing-Page-banner" id="home">
          <div className="Prp-Landing-Page-bannerText">
            <p className="Prp-Landing-Page-smallTitle">BUILD YOUR FUTURE</p>
            <h1>Connect. Learn.<br />Get Placed.</h1>
            <p className="Prp-Landing-Page-bannerPara">The all-in-one platform that bridges the gap between talented individuals, top employers and training institutions.</p>
            <div className="Prp-Landing-Page-bannerButtons">
              <Link to="/po-registration" className="Prp-Landing-Page-btnDark">Get Started</Link>
              <Link to="#features" onClick={(event) => handleSectionScroll(event, "features")} className="Prp-Landing-Page-btnLight">Explore Jobs</Link>
            </div>
          </div>
          <div className="Prp-Landing-Page-bannerPicture">
            <img src={bannerIllustration} alt="People collaborating on recruitment and career planning" />
          </div>
        </section>
        <section className="Prp-Landing-Page-whySection" id="features">
          <div className="Prp-Landing-Page-titleBox">
            <p className="Prp-Landing-Page-smallTitle">WHY CHOOSE US</p>
            <h2>Everything You Need for a Successful Career</h2>
          </div>
          <div className="Prp-Landing-Page-whyCards">
            {whyItems.map((item) => (
              <div className="Prp-Landing-Page-whyCard" key={item.title}>
                <div className="Prp-Landing-Page-whyIconCircle">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="Prp-Landing-Page-storiesSection" id="success-stories">
          <div className="Prp-Landing-Page-titleBox">
            <p className="Prp-Landing-Page-smallTitle">SUCCESS STORIES</p>
            <h2>WHAT OUR USERS SAY</h2>
          </div>
          <div className="Prp-Landing-Page-storyCards">
            {storyList.map((story) => (
              <div className="Prp-Landing-Page-storyCard" key={story.name}>
                <img className="Prp-Landing-Page-quoteMark" src={QuoteIcon} alt="" />
                <div className="Prp-Landing-Page-storyTop">
                  <div className="Prp-Landing-Page-avatarBox">
                    <img src={ProfileIcon} alt="User profile" />
                  </div>
                  <div className="Prp-Landing-Page-storyPerson">
                    <div className="Prp-Landing-Page-ratingStars" aria-label="5 out of 5 stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <img src={StarIcon} alt="" key={star} />
                      ))}
                    </div>
                    <h3>{story.name}</h3>
                    <p>{story.role}</p>
                  </div>
                </div>
                <p className="Prp-Landing-Page-storyText">{story.message}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="Prp-Landing-Page-partnersSection" id="recruiters">
          <div className="Prp-Landing-Page-titleBox">
            <p className="Prp-Landing-Page-smallTitle">TRUSTED BY LEADING COMPANIES</p>
            <h2>TOP COMPANIES HIRE HERE</h2>
          </div>
          <div className="Prp-Landing-Page-partnerRow">
            {partnerList.map((partner) => (
              <div className="Prp-Landing-Page-partnerLogo" key={partner.name}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="Prp-Landing-Page-footerWrapper">
        <div className="Prp-Landing-Page-footerLinkGroups">
          {footerGroups.map((group) => (
            <div className="Prp-Landing-Page-footerLinkGroup" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <Link to={link.href} onClick={(event) => handleSectionScroll(event, link.href.slice(1))} key={link.label}>{link.label}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="Prp-Landing-Page-footerCopyRow">
          <p>© 2026 Placement and Recruitment Platform.</p>
          <div className="Prp-Landing-Page-footerSocialRow">
            <Link to="https://www.facebook.com/" aria-label="Facebook"><img src={FacebookIcon} alt="Facebook" /></Link>
            <Link to="https://x.com/" aria-label="X"><img src={XIcon} alt="X" /></Link>
            <Link to="https://www.instagram.com/" aria-label="Instagram"><img src={InstagramIcon} alt="Instagram" /></Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
