import React from 'react'
import './GoodMorningCard.css'
import profilePic from '../assets/Candidate dashboard/ProfilePic.png'
import handWaveIcon from '../assets/Candidate dashboard/HandWave Icon.png'
import rightArrowIcon from '../assets/Candidate dashboard/right arrow icon.png'
import ideasIcon from '../assets/Candidate dashboard/IdeasIcon.png'

const GoodMorningCard = () => {
  const profileCompleteness = 78

  return (
    <div className="Prp-Good-Morning-Card-wrapper">
      <div className="Prp-Good-Morning-Card-container">
        <div className="Prp-Good-Morning-Card-left">
          <img
            className="Prp-Good-Morning-Card-profilePic"
            src={profilePic}
            alt="profilePic"
          />
          <div className="Prp-Good-Morning-Card-textBlock">
            <div className="Prp-Good-Morning-Card-titleRow">
              <h2 className="Prp-Good-Morning-Card-title">
                Good Morning, Subalakshmi!
              </h2>
              <img
                className="Prp-Good-Morning-Card-handWaveIcon"
                src={handWaveIcon}
                alt="handWaveIcon"
              />
            </div>
            <p className="Prp-Good-Morning-Card-subtitle">
              Your journey to a better future is in progress!
            </p>
          </div>
        </div>

        <div className="Prp-Good-Morning-Card-divider"></div>

        <div className="Prp-Good-Morning-Card-right">
          <p className="Prp-Good-Morning-Card-heading">Profile Completeness</p>

          <div className="Prp-Good-Morning-Card-progressRow">
            <span className="Prp-Good-Morning-Card-percentage">
              {profileCompleteness}%
            </span>
            <div className="Prp-Good-Morning-Card-progressTrack">
              <div
                className="Prp-Good-Morning-Card-progressFill"
                style={{ width: `${profileCompleteness}%` }}
              ></div>
            </div>
            <img
              className="Prp-Good-Morning-Card-rightArrowIcon"
              src={rightArrowIcon}
              alt="rightArrowIcon"
            />
          </div>

          <div className="Prp-Good-Morning-Card-tipRow">
            <img
              className="Prp-Good-Morning-Card-ideasIcon"
              src={ideasIcon}
              alt="ideasIcon"
            />
            <p className="Prp-Good-Morning-Card-tipText">
              Complete your profile to improve your job matches.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoodMorningCard