import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className="max-w-7xl m-auto pt-20">
    <main className="flex flex-col lg:flex-row flex-1 gap-8 items-center pt-10 px-10">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-4xl font-semibold leading-[3rem]">Hi, I'm Láďa, I'm software developer from Czech Republic.</h2>
        <p className="text-4xl font-semibold leading-[3rem] text-gray-500 dark:text-gray-400">
          I’m a 24 years old developer mostly interested in web and cloud development. You can see
          some of my project on Github.
        </p>
      </div>
      <div className="w-full">
        <img src="/assets/profile.jpg" alt="profile pricture" className="rounded-full object-cover scale-90" />
      </div>
    </main>
  </div>
);

export default Home;
