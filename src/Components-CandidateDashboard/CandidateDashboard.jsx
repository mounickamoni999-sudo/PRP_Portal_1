import React from 'react'
import './CandidateDashboard.css'
import CandidateHeader from '../Components-CandidateHeader/CandidateHeader'
import CandidateSidebar from '../Components-CandidateSidebar/CandidateSidebar'
import GoodMorningCard from '../Components-GoodMorningCard/GoodMorningCard'

const CandidateDashboard = () => {
  return (
    <div className="Prp-Candidate-Dashboard-container">
      <CandidateHeader />

      <div className="Prp-Candidate-Dashboard-body">
        <CandidateSidebar />

        <main className="Prp-Candidate-Dashboard-main">
          <GoodMorningCard />
        </main>
      </div>
    </div>
  )
}

export default CandidateDashboard