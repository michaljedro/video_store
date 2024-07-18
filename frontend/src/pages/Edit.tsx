import React from 'react';

interface EditProps {
  navigateTo: (page: 'create' | 'delete' | 'edit' | 'home' | 'show') => void;
}

export const Edit: React.FC<EditProps> = ({ navigateTo }) => {
  return (
    <div>
      <h1>Edit Page</h1>
      <button onClick={() => navigateTo('home')}>Back to Home</button>
    </div>
  );
};
