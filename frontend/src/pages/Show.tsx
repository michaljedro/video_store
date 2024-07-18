import React from 'react';

interface ShowProps {
  navigateTo: (page: 'create' | 'delete' | 'edit' | 'home' | 'show') => void;
}

export const Show: React.FC<ShowProps> = ({ navigateTo }) => {
  return (
    <div>
      <h1>Show Page</h1>
      <button onClick={() => navigateTo('home')}>Back to Home</button>
    </div>
  );
};
