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
						En tant que développeur, j'ai toujours été passionné par
						l'application efficace de solutions logiques à un problème. Je suis
						particulièrement intéressé par le back-end avec l'utilisation de PHP
						et C#. Néanmoins, je me forme volontiers au front-end avec un focus
						sur le HTML, CSS et Javascript. J'apprécie travailler avec les deux
						pour réaliser mes projets web. Par ailleurs, je suis en constante
						recherche d'amélioration et d'optimisation lorsqu'il s'agit de
						performer, dans l'intérêt des utilisateurs et d'améliorer la qualité
						de mon codage.
					</p>
					<p>
						Au travers de ma carrière, j'ai pu me rendre compte du réel intérêt
						que je détiens, aujourd'hui, pour le développement web. D'autant
						plus, ayant l'habitude de travailler en conduite de projets avec les
						méthodes Agile et Scrum, j'ai l'expérience nécessaire pour gérer la
						réalisation d'un projet. J'ai notamment de l'expérience dans
						l'utilisation de frameworks comme React et Symfony. Par ailleurs,
						j'ai soif de nouvelles connaissances, ce qui m'amène à toujours
						chercher à m'ameliorer et faire évoluer mes compétences.
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
