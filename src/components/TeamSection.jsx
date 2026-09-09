import React from 'react'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Harshit Mahtoliya',
      role: 'Mobile App Lead & Systems Architect',
      image: '/assets/harshit.jpg',
      bio: 'Specializes in high-performance Android/iOS UI architectures, hardware-level SOS triggers, and real-time state synchronization.'
    },
    {
      name: 'Chandra Shekhar Joshi',
      role: 'Full Stack & Cloud Infrastructure',
      image: '/assets/chandra.jpg',
      bio: 'Architects low-latency microservices, WebSockets alert gateways, and cloud failovers for continuous emergency availability.'
    },
    {
      name: 'Pooja Bisht',
      role: 'Lead UI/UX & Product Designer',
      image: '/assets/pooja.jpg',
      bio: 'Crafts high-stress accessible mobile UI interfaces, intuitive emergency workflows, and human-centric safety design systems.'
    },
    {
      name: 'Mohd Shafiq Ur Rahman',
      role: 'Geospatial Algorithms & Core Backend',
      image: '/assets/shafiq.jpg',
      bio: 'Engineers DIGIPIN spatial grid indexing, MQTT mesh routing algorithms, and location telemetry encryption services.'
    }
  ]

  return (
    <section className="team-section" id="team">
      <div className="container">
        <div className="team-header animate-element animate-fade-up">
          <span className="section-tag"><span className="dot"></span> The Visionaries</span>
          <h2 className="section-title">Engineered by Safety & Tech Pioneers</h2>
          <p className="section-desc">Meet the team behind UAV Safety & Emergency, dedicated to bringing spatial safety innovation and crisis response systems to every citizen.</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => {
            const animClass = index % 2 === 0 ? 'animate-from-left' : 'animate-from-right'
            return (
              <div className={`team-card animate-element ${animClass}`} key={index}>
                <div className="team-avatar-wrapper">
                  <img src={member.image} alt={member.name} />
                </div>
                <h3 className="team-name">{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
