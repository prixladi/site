import * as React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { GiPieChart } from 'react-icons/gi';
import TimelineItemBody from './TimelineItemBody';

type Props = {
  date: string;
  name: string;
  title: string;
  description: string;
  link?: string;
};

const JobTimelineItem: React.FC<Props> = ({ date, ...props }: Props) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={date}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<GiPieChart />}
    >
      <TimelineItemBody {...props} />
    </VerticalTimelineElement>
  );
};

export default JobTimelineItem;
