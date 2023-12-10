import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
	return (
		<>
			<hr />
			<div className={styles.footerContainer}>
				<p>© {new Date().getFullYear()} Kevin Portfolio</p>
				<div className={styles.socialIcons}>
					<a
						href='https://github.com/Kevin-YV'
						aria-label='GitHub'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fa-brands fa-github'></i>
					</a>
					<a
						href='https://www.linkedin.com/in/kevin-yong-vang'
						aria-label='LinkedIn'
						target='_blank'
						rel='noopener noreferrer'
					>
						<i className='fa-brands fa-linkedin'></i>
					</a>
				</div>
			</div>
		</>
	);
};

export default Footer;
