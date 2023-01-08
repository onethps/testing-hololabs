import React from 'react';

import { ContactUs } from './sections/ContactUs/ContactUs';
import { Header } from './sections/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { LogIn } from './sections/LogIn/LogIn';
import { Team } from './sections/Team/Team';

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Team />
      <LogIn />
      <ContactUs />
    </main>
  );
};

export default App;
