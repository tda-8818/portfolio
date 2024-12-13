import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="June 2024 - present"
            iconStyle={{ background: '#79ada2', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Private Tutor</h3>
            <h4 className="vertical-timeline-element-subtitle">Vancouver, Canada</h4>
            <p>
              Tutoring a high school student in maths, sciences, social studies, French
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Nov 2023 - Feb 2024"
            iconStyle={{ background: '#79ada2', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">IT Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Sydney, Australia</h4>
            <p>
              ITSM, Data Migration, Project Management
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan - Mar 2022"
            iconStyle={{ background: '#79ada2', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Cashier Supervisor/Runner</h3>
            <h4 className="vertical-timeline-element-subtitle">Salt Lake City, UT, USA</h4>
            <p>
            Gained invaluable experience in the food industry and customer service
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;