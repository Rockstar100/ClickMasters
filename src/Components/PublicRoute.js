import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function PublicRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('token')) {
      router.push('/');
    }
  }, []);

  return <>{children}</>;
}

export default PublicRoute;