// components/Home.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Projets from './Projets';
import Contact from './Contact';
import Certification from './Certification';
import ProjetsGame from './ProjetsGame';
import ScrollToTop from './ScrollToTop';

const Home = () => {
	return (
		<>
			<Navbar />

			<main>
				<Hero />
				<AboutMe />
				<Skills />
				<Projets />
				<Certification />
				<Contact />
			</main>

			<ScrollToTop />

			<Footer />
		</>
	);
};

export default Home;
