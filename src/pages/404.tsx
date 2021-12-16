import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { routes } from '../constants';

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(routes.root.path);
  }, [router]);

  return null;
};

export default NotFound;
