type Route = {
  path: string;
  name: string;
  isExternal: boolean;
};

type Routes = { [key: string]: Route };

export type { Route, Routes };
export const routes: Routes = {
  root: { path: '/', name: 'Home', isExternal: false },
  projects: { path: '/projects', name: 'Projects', isExternal: false },
  timeline: { path: '/timeline', name: 'Timeline', isExternal: false },
  technologies: { path: '/technologies', name: 'Technologies', isExternal: false },
  blog: { path: 'https://blog.ladislavprix.cz', name: 'Blog', isExternal: true },
};
