// components/Projets.jsx
import React from 'react';
import { projectData } from '../pages/api/dataWeb';
import styles from '../styles/Projets.module.css';
import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Projets = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3, // Nombre de projets affichés à la fois
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2, // Ajustez le nombre de projets à afficher pour les écrans de 1024px et moins
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1, // Ajustez le nombre de projets à afficher pour les écrans de 600px et moins
					slidesToScroll: 1,
				},
			},
		],
	};


	return (
		<div
			id='projets'
			className={styles.projetsContainer}>
			<h2>Projets Web & Mobile</h2>
			<Slider {...settings}>
				{projectData &&
					projectData.map((project) => (
						<div
							className={styles.cards}
							key={project.id}>
							<Image
								src={project.image}
								className={styles.img}
								width={445}
								height={200}
								quality={100}
								alt='Image projet'
							/>
							<div className={styles.textContainer}>
								<h3>{project.title}</h3>
								<p>{project.description}</p>
							</div>

							<div className={styles.projetHeader}>
								<div className={styles.icons}>
									<a
										href={project.gitHubLink}
										target='_blank'>
										<i className='fa-brands fa-github'></i>
									</a>
									<a
										href={project.lien}
										target='_blank'
										>
										<i class='fa-solid fa-arrow-up-right-from-square'></i>
									</a>
								</div>
							</div>
						</div>
					))}
			</Slider>
		</div>
	);
};

export default Projets;
