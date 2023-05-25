import type { NextPage } from 'next';

import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import InlineLink from '~/components/inlineLink';
import Content from '~/components/content';
import Article, { ArticleHeader, ArticleMain } from '~/components/article';
import { appearingTextInit } from '~/lib/utils/motions';
import timelineItems from '~/lib/data/timelineItems';

const Timeline: NextPage = () => (
  <Content title="Timeline | Láďa Prix" type="medium">
    <Article>
      <ArticleHeader
        title={<>This is a timeline of my education and career.</>}
        subTitle={
          <>
            Items here are major time points in my career. You can also check out my{' '}
            <InlineLink href="https://www.linkedin.com/in/láďa-prix/" text="Linkedin" /> or download
            my <InlineLink href="/data/resume.pdf" text="PDF resume" download="resume.pdf" />.
          </>
        }
      />

      <ArticleMain motion={appearingTextInit({ delayChildren: 0.5 }).parent}>
        <motion.div {...appearingTextInit().children}>
          <VerticalTimeline>
            {timelineItems.map(({ date, title, icon, position, body }) => (
              <VerticalTimelineElement
                key={title}
                date={date}
                dateClassName="timeline-date"
                iconClassName="timeline-icon"
                textClassName="timeline-text"
                icon={icon}
              >
                <div className="text-white dark:text-black">
                  <h3 className="text-lg font-bold text-white dark:text-black">{title}</h3>
                  <span className="italic text-white dark:text-black">{position}</span>
                  <p>{body}</p>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </motion.div>
      </ArticleMain>
    </Article>
  </Content>
);

export default Timeline;
