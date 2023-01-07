import React from 'react';

import { Header } from './sections/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { Team } from './sections/Team/Team';

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Team />
    </main>
  );
};

export default App;
