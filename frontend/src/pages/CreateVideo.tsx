import React from 'react';

interface CreateProps {
  navigateTo: (page: 'create' | 'delete' | 'edit' | 'home' | 'show') => void;
}

export const Create: React.FC<CreateProps> = ({ navigateTo }) => {
  return (
    <div>
      <h1>Create Page</h1>
      <button onClick={() => navigateTo('home')}>Back to Home</button>
    </div>
  );
};
