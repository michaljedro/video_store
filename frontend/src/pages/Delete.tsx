import React from 'react';

interface DeleteProps {
  navigateTo: (page: 'create' | 'delete' | 'edit' | 'home' | 'show') => void;
}

export const Delete: React.FC<DeleteProps> = ({ navigateTo }) => {
  return (
    <div>
      <h1>Delete Page</h1>
      <button onClick={() => navigateTo('home')}>Back to Home</button>
    </div>
  );
};
