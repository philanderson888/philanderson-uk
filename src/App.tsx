import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Archive } from './pages/Archive.tsx';
import { Contact } from './pages/Contact';
import { CharityWork } from './pages/CharityWork';
import { PersecutedChristians } from './pages/PersecutedChristians';
import { Wiki } from './pages/Wiki';
import { History } from './pages/History';
import { FamilyHistory } from './pages/FamilyHistory';
import { Space } from './pages/Space';
import { Links } from './pages/Links';
import { MoreLinks } from './pages/MoreLinks';
import { PersonalPlanning } from './pages/PersonalPlanning';
import { Personal } from './pages/Personal';
import { Heroes } from './pages/Heroes';
import { Prayers } from './pages/Prayers';
import { Scriptures } from './pages/Scriptures';
import { Vision } from './pages/Vision';
import { Routines } from './pages/Routines';
import { Money } from './pages/Money';
import { Jokes } from './pages/Jokes';
import { FactualLearning } from './pages/FactualLearning';
import { WhereAmIPrivacyPolicy } from './pages/WhereAmIPrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-warm-50">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<Portfolio />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/archive/:id" element={<Archive />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/charity-work" element={<CharityWork />} />
            <Route path="/persecuted-christians" element={<PersecutedChristians />} />
            <Route path="/wiki" element={<Wiki />} />
            <Route path="/history" element={<History />} />
            <Route path="/family-history" element={<FamilyHistory />} />
            <Route path="/factual-learning" element={<FactualLearning />} />
            <Route path="/space" element={<Space />} />
            <Route path="/links" element={<Links />} />
            <Route path="/more-links" element={<MoreLinks />} />
            <Route path="/personal-planning" element={<PersonalPlanning />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/heroes" element={<Heroes />} />
            <Route path="/prayers" element={<Prayers />} />
            <Route path="/scriptures" element={<Scriptures />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/routines" element={<Routines />} />
            <Route path="/money" element={<Money />} />
            <Route path="/jokes" element={<Jokes />} />
            <Route path="/where-am-i/privacy-policy" element={<WhereAmIPrivacyPolicy />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;