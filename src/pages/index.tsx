import type { NextPage } from 'next';
import { motion } from 'framer-motion';
import { scaleUpHover, scaleUpInit, mergeMotions } from '../utils/motions';
import { defaultScaleUpHoverOptions } from '../utils/motions/scaleUpHover';
import InlineLink from '../components/inlineLink';
import Content from '../components/content';
import ArticleHeader from '../components/articleHeader';

const Home: NextPage = () => (
  <Content title="Ladislav Prix" className="max-w-7xl">
    <article className="flex flex-col lg:flex-row flex-1 gap-8 items-center">
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

      <main className="article-main flex justify-center">
        <motion.img
          src="/assets/profile.jpg"
          alt="profile pricture"
          className="rounded-full object-cover scale-95"
          {...mergeMotions(
            scaleUpInit(),
            scaleUpHover({ ...defaultScaleUpHoverOptions, scale: 0.95 }),
          )}
        />
      </main>
    </article>
  </Content>
);

export default Home;
