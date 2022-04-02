import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import * as R from 'ramda';

import InlineLink from '~/components/inlineLink';
import Content from '~/components/content';
import Article, { ArticleHeader, ArticleMain } from '~components/article';

import { appearingTextInit } from '~/lib/utils/motions';
import timelineItems from '~/lib/data/timelineItems';

const Timeline: NextPage = () => (
  <Content title="Timeline | Ladislav Prix" className="max-w-4xl">
    <Article>
      <ArticleHeader
        title={<>This is a timeline of my education and career.</>}
        subTitle={
          <>
            Items here are major time points in my career. You can also check out my{' '}
            <InlineLink href="https://www.linkedin.com/in/ladislav-prix/" text="Linkedin" /> or
            download my{' '}
            <InlineLink href="/data/resume.pdf" text="PDF resume" download="resume.pdf" />.
          </>
        }
      />

      <ArticleMain m={appearingTextInit({ delayChildren: 1 }).parent}>
        <motion.div {...appearingTextInit().children}>
          <VerticalTimeline className="timeline">
            {R.map(
              ({ date, title, icon, position, body }) => (
                <VerticalTimelineElement
                  key={title}
                  date={date}
                  dateClassName="timeline-date"
                  iconClassName="timeline-icon"
                  textClassName="timeline-text"
                  icon={icon}
                >
                  <>
                    <h3 className="timeline-body-title">{title}</h3>
                    <span className="timeline-body-position">{position}</span>
                    <p className="timeline-body-text">{body}</p>
                  </>
                </VerticalTimelineElement>
              ),
              timelineItems,
            )}
          </VerticalTimeline>
        </motion.div>
      </ArticleMain>
    </Article>
  </Content>
);

export default Timeline;
