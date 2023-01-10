import React from 'react';

import { ContactUs } from './sections/ContactUs/ContactUs';
import { Footer } from './sections/Footer/Footer';
import { Header } from './sections/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { LogIn } from './sections/LogIn/LogIn';
import { Recommendations } from './sections/Recommendations/Recommendations';
import { Team } from './sections/Team/Team';

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Team />
      <LogIn />
      <ContactUs />
      <Recommendations />
      <Footer />
    </main>
  );
};

export default App;
