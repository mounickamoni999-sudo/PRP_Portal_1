import React from "react";
import "./MainSection.css";
import Header from "./Header";
import Footer from "./Footer";
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

const MainSection = () => {
  return (
    <>
      <Header />
      <main className="Main-Section-wrapper">
        <section className="Main-Section-banner" id="home">
          <div className="Main-Section-bannerText">
            <p className="Main-Section-smallTitle">BUILD YOUR FUTURE</p>
            <h1>Connect. Learn.<br />Get Placed.</h1>
            <p className="Main-Section-bannerPara">The all-in-one platform that bridges the gap between talented individuals, top employers and training institutions.</p>
            <div className="Main-Section-bannerButtons">
              <a href="/PRP_Portal/WelcomeRegistration" className="Main-Section-btnDark">Get Started</a>
              <a href="#features" className="Main-Section-btnLight">Explore Jobs</a>
            </div>
          </div>
          <div className="Main-Section-bannerPicture">
            <img src={bannerIllustration} alt="People collaborating on recruitment and career planning" />
          </div>
        </section>
        <section className="Main-Section-whySection" id="features">
          <div className="Main-Section-titleBox">
            <p className="Main-Section-smallTitle">WHY CHOOSE US</p>
            <h2>Everything You Need for a Successful Career</h2>
          </div>
          <div className="Main-Section-whyCards">
            {whyItems.map((item) => (
              <article className="Main-Section-whyCard" key={item.title}>
                <div className="Main-Section-whyIconCircle">
                  <img src={item.icon} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="Main-Section-storiesSection" id="success-stories">
          <div className="Main-Section-titleBox">
            <p className="Main-Section-smallTitle">SUCCESS STORIES</p>
            <h2>WHAT OUR USERS SAY</h2>
          </div>
          <div className="Main-Section-storyCards">
            {storyList.map((story) => (
              <article className="Main-Section-storyCard" key={story.name}>
                <img className="Main-Section-quoteMark" src={QuoteIcon} alt="" />
                <div className="Main-Section-storyTop">
                  <div className="Main-Section-avatarBox">
                    <img src={ProfileIcon} alt="User profile" />
                  </div>
                  <div className="Main-Section-storyPerson">
                    <div className="Main-Section-ratingStars" aria-label="5 out of 5 stars">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <img src={StarIcon} alt="" key={star} />
                      ))}
                    </div>
                    <h3>{story.name}</h3>
                    <p>{story.role}</p>
                  </div>
                </div>
                <p className="Main-Section-storyText">{story.message}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="Main-Section-partnersSection" id="recruiters">
          <div className="Main-Section-titleBox">
            <p className="Main-Section-smallTitle">TRUSTED BY LEADING COMPANIES</p>
            <h2>TOP COMPANIES HIRE HERE</h2>
          </div>
          <div className="Main-Section-partnerRow">
            {partnerList.map((partner) => (
              <div className="Main-Section-partnerLogo" key={partner.name}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MainSection;