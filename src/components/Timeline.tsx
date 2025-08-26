import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons'; // Added graduation icon
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience & Education</h1> {/* Updated Title */}
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2025 - Present"
            iconStyle={{ background: '#ff8fab', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cybersecurity Associate</h3>
            <h4 className="vertical-timeline-element-subtitle">AlphaCloud Pty Ltd | Melbourne, Australia</h4>
            <ul>
                <li>Gained foundational knowledge in core cybersecurity principles, threat intelligence, and incident response frameworks.</li>
        
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Nov 2023 - Feb 2024"
            iconStyle={{ background: '#ff8fab', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">TK Elevator | Sydney, Australia</h4>
            <ul>
                <li>Shadowed Business Analysts, gaining insights into IT project management and infrastructure.</li>
                <li>Renovated the team's project management tracker, streamlining operations and improving oversight.</li>
                <li>Gained hands-on experience with <strong>ITSM principles</strong> and contributed to a data migration project from SharePoint to Expedo.</li>
                <li>Enhanced soft skills in communication, time management, and adaptability.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Add Education Section */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2023 - 2025"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }} // Different color for education
            icon={<FontAwesomeIcon icon={faUserGraduate} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Monash University | Clayton, VIC</h4>
            <p>
              Relevant Coursework: Algorithms & Data Structures, Software Engineering, Databases, Parallel Computing, Computer Vision, Project Management.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan - Mar 2022"
            iconStyle={{ background: '#ff8fab', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cashier Supervisor/Runner</h3>
            <h4 className="vertical-timeline-element-subtitle">Chartwells | Salt Lake City, UT, USA</h4>
            <p>
            Developed strong customer service, teamwork, and time-management skills in a fast-paced environment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;