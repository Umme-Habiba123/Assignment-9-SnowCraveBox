import { useEffect } from 'react';
import { useLocation } from 'react-router';

const FromTop = ({children}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return children;
};

export default FromTop;