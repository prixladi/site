import type { NextPage } from 'next';

import { motion } from 'framer-motion';

import InlineLink from '~/components/inline-link';
import PageContent from '~/components/page-content';
import Article, { ArticleHeader } from '~/components/article';
import { scaleDownInit } from '~/lib/utils/motions';

const Home: NextPage = () => (
  <PageContent title="Láďa Prix" type="wide">
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
          src="/assets/profile.webp"
          alt="profile picture"
          className="rounded-full object-cover scale-95"
          {...scaleDownInit()}
        />
      </div>
    </Article>
  </PageContent>
);

export default Home;
