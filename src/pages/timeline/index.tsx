import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import { FaReact, FaDatabase } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { SiNextdotjs, SiDotnet } from 'react-icons/si';
import { IoMdSchool } from 'react-icons/io';
import InlineLink from '../../components/inlineLink';
import { apearingTextInit, scaleUpHover } from '../../utils/motions';
import Content from '../../components/content';

type ItemProps = {
  date: string;
  icon: React.ReactNode;
  title: string;
  position: string;
  children: string | React.ReactNode;
};

const Item = ({ date, icon, title, position, children }: ItemProps) => (
  <VerticalTimelineElement
    date={date}
    dateClassName="timeline-date"
    iconClassName="timeline-icon"
    textClassName="timeline-text"
    icon={icon}
  >
    <>
      <h3 className="timeline-body-title">{title}</h3>
      <span className="timeline-body-position">{position}</span>
      <p className="timeline-body-text">{children}</p>
    </>
  </VerticalTimelineElement>
);

const Timeline: NextPage = () => (
  <Content title="Timeline | Ladislav Prix" className="max-w-4xl">
    <main className="flex flex-col gap-8 items-center">
      <motion.div {...apearingTextInit().parent} className="w-full flex flex-col gap-4">
        <motion.div {...apearingTextInit().children}>
          <motion.h2
            {...scaleUpHover()}
            className="text-3xl md:text-4xl font-semibold duration-700 leading-tight md:leading-[3rem]"
          >
            This is timeline of my education and career.
          </motion.h2>
        </motion.div>
        <motion.div {...apearingTextInit().children}>
          <motion.p
            {...scaleUpHover()}
            className="text-xl lg:pl-2 md:text-4xl font-semibold leading-tight md:leading-[3rem] text-gray-500 dark:text-gray-400 duration-700"
          >
            Items here are major time points in my career. You can also check out my{' '}
            <InlineLink href="https://www.linkedin.com/in/ladislav-prix/" text="Linkedin" /> or in
            my <InlineLink href="/data/resume.pdf" text="PDF resume" download="resume.pdf" /> you
            can download.
          </motion.p>
        </motion.div>

        <motion.div {...apearingTextInit().children} className="mt-8">
          <VerticalTimeline className="timeline">
            <Item
              title="Designeo Creative s.r.o."
              position="Software developer"
              date="February 2021 - present"
              icon={<SiDotnet />}
            >
              In Designeo, I work as a developer mostly focused on .NET backend.
            </Item>

            <Item
              title="Qest automation"
              position="Software developer, DevOps"
              date="May 2017 - December 2020"
              icon={<FaDatabase />}
            >
              In Qest, I worked as a developer mostly focused on .NET backend. I worked on many
              projects including logistic platform Shipvio and home automation system Qest Home.
            </Item>

            <Item
              title="FIT CTU"
              position="Bachelor's degree"
              date="September 2016 - May 2020"
              icon={<IoMdSchool />}
            >
              Faculty of Information Technology, Czech Technical University in Prague.
            </Item>

            <Item
              title="Shamyr"
              position="Software developer, Designer and DevOps"
              date="Janury 2016 - present"
              icon={<SiNextdotjs />}
            >
              Shamyr is the brand that I use for freelancing and my independent projects.
            </Item>

            <Item
              title="Secondary grammar school"
              position="Basic education"
              date="September 2008 - June 2016"
              icon={<FaReact />}
            >
              Secondary Grammar School Prachatice, Zlatá Stezka 137. Basic education.
            </Item>
          </VerticalTimeline>
        </motion.div>
      </motion.div>
    </main>
  </Content>
);

export default Timeline;
