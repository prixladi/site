import type { NextPage } from 'next';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const Timeline: NextPage = () => (
  <>
    <h2>My experience timeline.</h2>
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          dasdsa
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  </>
);

export default Timeline;
