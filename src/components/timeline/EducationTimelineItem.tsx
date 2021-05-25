import * as React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdSchool } from 'react-icons/io';
import TimelineItemBody from './TimelineItemBody';

type Props = {
  date: string;
  name: string;
  title: string;
  description: string;
  link?: string;
};

const ExucationTimelineItem: React.FC<Props> = ({ date, ...props }: Props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      contentStyle={{ background: 'rgb(233, 30, 99)' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
      date={date}
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<IoMdSchool />}
    >
      <TimelineItemBody {...props} />
    </VerticalTimelineElement>
  );
};

export default ExucationTimelineItem;
