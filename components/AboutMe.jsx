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
						En tant que développeur, j&apos;ai toujours été passionné par
						l&apos;application efficace de solutions logiques à un problème. Je
						suis particulièrement intéressé par le back-end avec
						l&apos;utilisation de PHP et C#. Néanmoins, je me forme volontiers
						au front-end avec un focus sur le HTML, CSS et Javascript.
						J&apos;apprécie travailler avec les deux pour réaliser mes projets
						web. Par ailleurs, je suis en constante recherche
						d&apos;amélioration et d&apos;optimisation lorsqu&apos;il
						s&apos;agit de performer, dans l&apos;intérêt des utilisateurs et
						d&apos;améliorer la qualité de mon codage.
					</p>
					<p>
						Au travers de ma carrière, j&apos;ai pu me rendre compte du réel
						intérêt que je détiens, aujourd&apos;hui, pour le développement web.
						D&apos;autant plus, ayant l&apos;habitude de travailler en conduite
						de projets avec les méthodes Agile et Scrum, j&apos;ai
						l&apos;expérience nécessaire pour gérer la réalisation d&apos;un
						projet. J&apos;ai notamment de l&apos;expérience dans
						l&apos;utilisation de frameworks comme React et Symfony. Par
						ailleurs, j&apos;ai soif de nouvelles connaissances, ce qui
						m&apos;amène à toujours chercher à m&apos;ameliorer et faire évoluer
						mes compétences.
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
