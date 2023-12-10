import React from 'react';
import Image from 'next/image';
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
	const handleDownloadCV = () => {
		window.open('/img/CV.pdf', '_blank');
	};

	return (
		<div
			id='about me'
			className={styles.aboutContainer}>
			<h2>A Propos de moi</h2>
			<div className={styles.flexAbout}>
				<div className={styles.text}>
					<p>
						En tant que développeur, j&aposai toujours été passionné par
						l&aposapplication efficace de solutions logiques à un problème. Je
						suis particulièrement intéressé par le back-end avec
						l&aposutilisation de PHP et C#. Néanmoins, je me forme volontiers au
						front-end avec un focus sur le HTML, CSS et Javascript.
						J&aposapprécie travailler avec les deux pour réaliser mes projets
						web. Par ailleurs, je suis en constante recherche d&aposamélioration
						et d&aposoptimisation lorsqu&aposil s&aposagit de performer, dans
						l&aposintérêt des utilisateurs et d&aposaméliorer la qualité de mon
						codage.
					</p>
					<p>
						Au travers de ma carrière, j&aposai pu me rendre compte du réel
						intérêt que je détiens, aujourd&aposhui, pour le développement web.
						D&aposautant plus, ayant l&aposhabitude de travailler en conduite de
						projets avec les méthodes Agile et Scrum, j&aposai l&aposexpérience
						nécessaire pour gérer la réalisation d&aposun projet. J&aposai
						notamment de l&aposexpérience dans l&aposutilisation de frameworks
						comme React et Symfony. Par ailleurs, j&aposai soif de nouvelles
						connaissances, ce qui m&aposamène à toujours chercher à
						m&aposameliorer et faire évoluer mes compétences.
					</p>
				</div>
				<div className={styles.image}>
					<Image
						src='/img/CV.png'
						className={styles.picture}
						width={300}
						height={400}
						quality={100}
						onClick={handleDownloadCV}
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
