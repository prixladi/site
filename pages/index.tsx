import type { NextPage } from 'next';
import { motion } from 'framer-motion';

import InlineLink from '~/components/inlineLink';
import Content from '~/components/content';
import Article from '~components/article';
import ArticleHeader from '~/components/articleHeader';

import { scaleUpInit } from '~/lib/utils/motions';

const Home: NextPage = () => (
  <Content title="Ladislav Prix" className="max-w-7xl">
    <Article className="lg:flex-row flex-1">
      <ArticleHeader
        title={<> Hi, I&apos;m Láďa, a software developer from the Czech Republic.</>}
        subTitle={
          <>
            I&apos;m a {new Date().getFullYear() - 1997} years old developer mostly interested in
            web and cloud development. You can see some of my projects on my{' '}
            <InlineLink href="https://github.com/prixladi" text="Github" />.
          </>
        }
      />

      <div className="w-full flex justify-center">
        <motion.img
          src="/assets/profile.jpg"
          alt="profile pricture"
          className="rounded-full object-cover scale-95"
          {...scaleUpInit()}
        />
      </div>
    </Article>
  </Content>
);

export default Home;
