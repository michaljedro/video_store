import React, {useEffect, useState} from 'react';

interface HomeProps {
  navigateTo: (page: 'create' | 'delete' | 'edit' | 'home' | 'show') => void;
}

export const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const [movie,setMovies] = useState<string[]>([])
  const [loading,setLoading] = useState(false)
  useEffect(()=> {
    setLoading(true)
  })
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigateTo('create')}>Create</button>
      <button onClick={() => navigateTo('delete')}>Delete</button>
      <button onClick={() => navigateTo('edit')}>Edit</button>
      <button onClick={() => navigateTo('show')}>Show</button>
    </div>
  );
};
