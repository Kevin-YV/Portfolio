import React from 'react';
import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
	return (
		<div
			id='contact'
			className={styles.container}>
			<h2 className={styles.heading}>Contact</h2>
			<div className={styles.contactInfo}>
				<p>
					<FontAwesomeIcon
						icon={faEnvelope}
						className={styles.icon}
					/>
					kev.yv91@gmail.com
				</p>
				<p>
					<FontAwesomeIcon
						icon={faPhone}
						className={styles.icon}
					/>
					06.17.50.68.20
				</p>
				<p>
					<FontAwesomeIcon
						icon={faLinkedin}
						className={styles.icon}
					/>
					linkedin.com/in/kevin-yong-vang
				</p>
			</div>
		</div>
	);
};

export default Contact;
