import { Route } from '../constants';

export const isExternalRoute = (route: Route) =>
  route.path.startsWith('http://') || route.path.startsWith('https://');

export const toggleTheme = (theme: string | undefined) => (theme === 'dark' ? 'light' : 'dark');
ddasdasdasdasd
export const isActivePath = (path: string, currentPath: string) => {
  if (path === '/' || path === '') {
    return currentPath === '/' || currentPath === '';
  }

  return currentPath.includes(path);
};
