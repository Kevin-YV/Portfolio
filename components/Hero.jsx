import React from 'react';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

const Hero = () => {
	return (
		<div
			id='accueil'
			className={styles.heroContainer}>
			<Image
				src='image/Pp.png'
				className={styles.profileImg}
				width={300}
				height={300}
				alt='Photo de profil'
			/>
			<div className={styles.heroText}>
				<h1>Bonjour, je m&apos;appelle Kevin 👋</h1>
				<p>
					Je suis développeur fullstack junior, situé en Ile-De-France. Je suis
					formé à différents langages de programmation pour la création de sites
					web et d&apos;applications mobiles. Je suis actuellement à la
					recherche d&apos;une alternance pour février 2024.
				</p>
				<div className={styles.socialIcons}>
					<a
						href='https://github.com/Kevin-YV'
						aria-label='GitHub'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fa-brands fa-github'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/kevin-yong-vang/'
						aria-label='LinkedIn'
						target='_blank'
						rel='noopener noreferrer'>
						<i className='fa-brands fa-linkedin'></i>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
