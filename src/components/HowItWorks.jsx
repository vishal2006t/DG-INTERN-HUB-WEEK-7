import React from 'react';
import { howItWorksSteps } from '../data/jobs';
import { Search, CheckSquare, Rocket } from 'lucide-react';

const stepIcons = [Search, CheckSquare, Rocket];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Seamless Process</span>
          <h2 className="section-title">How DG Interns Hub Works</h2>
          <p className="section-subtitle">
            From discovering roles that fit your passion to completing high-impact projects, your path to a tech career starts here.
          </p>
        </div>

        <div className="steps-grid">
          {howItWorksSteps.map((stepItem, index) => {
            const StepIcon = stepIcons[index] || Search;
            return (
              <div className="step-card" key={stepItem.step}>
                <div className="step-card-top">
                  <span className="step-number">{stepItem.step}</span>
                  <div className="step-icon-bubble">
                    <StepIcon size={20} className="step-icon" />
                  </div>
                </div>
                <h3 className="step-title">{stepItem.title}</h3>
                <p className="step-description">{stepItem.description}</p>
                <div className="step-connector-dot" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
