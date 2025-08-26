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
              <li>Applied foundational knowledge of security principles, including <strong>risk management, access control, and cryptography</strong>, aligned with (ISC)² CBK domains.</li>
              <li>Gained practical insight into <strong>security operations</strong>, including incident response frameworks and threat intelligence analysis.</li>
              <li>Developed a strong understanding of <strong>network security architecture</strong>, including TCP/IP suite protocols, VLAN segmentation, routing/switching concepts, and Wi-Fi security considerations.</li>
              <li>Exposed to industry-standard <strong>security frameworks</strong> and tools relevant for protecting infrastructure and ensuring compliance in regulated environments.</li>
              <li>Assisted in evaluating security controls and understanding methodologies for <strong>penetration testing</strong> and vulnerability assessment.</li>

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

              <li>Gained comprehensive insight into corporate IT infrastructure and project management by shadowing Business Analysts and collaborating with teams across the organization.</li>
              <li>
                <strong>Collaborated across all IT support tiers</strong>, developing a clear understanding of their distinct functions:
                <ul>
                  <li>Assisted <strong>L1 Help Desk</strong> with initial user triage and ticket logging.</li>
                  <li>Supported <strong>L2 Technical Support</strong> with hands-on troubleshooting and software/hardware configuration.</li>
                </ul>
                This experience developed my ability to communicate technical concepts effectively to audiences with varying levels of expertise.
              </li>
              <li>Renovated the team's project management tracker, streamlining operations and improving project oversight for the entire IT department.</li>
              <li>Gained practical experience with <strong>ITSM principles</strong> and contributed to a critical data migration project from SharePoint to Expedo.</li>
              <li>Enhanced essential soft skills in <strong>communication, time management, and adaptability</strong> within a professional corporate environment.</li>
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