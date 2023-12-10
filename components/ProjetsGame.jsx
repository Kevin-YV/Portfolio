import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/ProjetsGame.module.css';
import Image from 'next/image';

const ProjetsGame = ({ projects }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 3,
	};

	return (
		<div className={styles.container}>
			{projects.map((project, index) => (
				<div
					key={index}
					className={styles.project}>
					<div>
						<Image
							src='/img/Pp.png'
							className={styles.img}
							width={400}
							height={200}
							quality={100}
							alt='Image projet'
						/>
					</div>
					<h3>{project.name}</h3>
					<p>{project.description}</p>
				</div>
			))}
		</div>
	);
};

export default ProjetsGame;
