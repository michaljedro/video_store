import React, { useEffect } from 'react';
import { PersistenceKey, usePersistedState } from './hooks/usePersistedState';

import { Home } from './pages/Home';
import { Edit } from './pages/Edit';
import { Create } from './pages/CreateVideo';
import { Delete } from './pages/Delete';
import { Show } from './pages/Show';

type Page = 'create' | 'delete' | 'edit' | 'home' | 'show';

function App() {
  const [page, setPage] = usePersistedState<Page>(
    PersistenceKey.MainPagerPage, 'home'
  );

  // Synchronizacja stanu z URL
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1);
      if (path === '') setPage('home');
      else if (['create', 'delete', 'edit', 'show'].includes(path)) setPage(path as Page);
      else setPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    handlePopState();

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [setPage]);

  useEffect(() => {
    window.history.pushState({}, '', `/${page}`);
  }, [page]);

  const navigateTo = (page: Page) => {
    setPage(page);
  };

  switch (page) {
    case 'home':
      return <Home navigateTo={navigateTo} />;
    case 'create':
      return <Create navigateTo={navigateTo} />;
    case 'delete':
      return <Delete navigateTo={navigateTo} />;
    case 'edit':
      return <Edit navigateTo={navigateTo} />;
    case 'show':
      return <Show navigateTo={navigateTo} />;
    default:
      return <Home navigateTo={navigateTo} />;
  }
}

export default App;
