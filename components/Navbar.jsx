import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navList}>
				<li className={styles.navItem}>
					<Link href='#accueil'>Accueil</Link>
				</li>
				<li className={styles.navItem}>
					<Link href='#about me'>A Propos</Link>
				</li>
				<li className={styles.navItem}>
					<Link href='#skills'>Compétences</Link>
				</li>
				<li className={styles.navItem}>
					<Link href='#projets'>Projets</Link>
				</li>
				<li className={styles.navItem}>
					<Link href='#certification'>Certification</Link>
				</li>
				<li className={styles.navItem}>
					<Link href='#contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
