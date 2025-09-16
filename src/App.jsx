import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import {
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from './components';
import { Navbar, Hero, About, Works, Experience, Contact } from './components';
import { SectionWrapper } from './hoc';

const App = () => {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
