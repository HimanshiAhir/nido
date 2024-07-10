// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProcessSection from './components/ProcessSection';
import WhoWeAreSection from './components/WhoWeAre';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <ProcessSection />
      <WhoWeAreSection />
      <ContactSection />
      <Footer />
    </React.Fragment>
  );
}

export default App;
