import React from 'react';
import styles from '../styles/Certification.module.css';
import Image from 'next/image';

const Certification = () => {
	return (
		<div
			id='certification'
			className={styles.container}>
			<h2>Certification</h2>
			<div className={styles.imageContainer}>
				<Image
					src='/img/certificate.png'
					className={styles.img}
					width={800}
					height={550}
					quality={100}
					alt='unity certif'
				/>
			</div>
		</div>
	);
};

export default Certification;
