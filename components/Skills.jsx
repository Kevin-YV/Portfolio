import React from 'react';
import Image from 'next/image';
import styles from '../styles/Skills.module.css';

const Skills = () => {
	return (
		<div
			id='skills'
			className={styles.skillscontainer}>
			<h2>Compétences</h2>
			<div className={styles.grid}>
				<div className={`${styles.card} ${styles.html}`}>
					<i className='fa-brands fa-html5 html-icon'></i>
					<p>HTML</p>
				</div>
				<div className={`${styles.card} ${styles.css}`}>
					<i className='fa-brands fa-css3-alt css-icon'></i>
					<p>CSS</p>
				</div>
				<div className={`${styles.card} ${styles.js}`}>
					<i className='fa-brands fa-js-square js-icon'></i>
					<p>JavaScript</p>
				</div>
				<div className={`${styles.card} ${styles.ts}`}>
					<Image
						src='/icons/Ts.png'
						width={25}
						height={25}
						alt='iconTs'
					/>
					<p>Typescript</p>
				</div>
				<div className={`${styles.card} ${styles.react}`}>
					<i className='fa-brands fa-react react-icon'></i>
					<p>React</p>
				</div>
				<div className={`${styles.card} ${styles.node}`}>
					<i className='fa-brands fa-node-js node-icon'></i>
					<p>Node</p>
				</div>
				<div className={`${styles.card} ${styles.php}`}>
					<i className='fa-brands fa-php'></i>
					<p>PHP</p>
				</div>
				<div className={`${styles.card} ${styles.symphony}`}>
					<i class='fa-brands fa-symfony'></i>
					<p>Symfony</p>
				</div>
				<div className={`${styles.card} ${styles.csharp}`}>
					<Image
						src='/icons/Csharp.png'
						width={25}
						height={25}
						alt='iconC#'
					/>
					<p>C#</p>
				</div>
				<div className={`${styles.card} ${styles.unity}`}>
					<Image
						src='/icons/Unity.png'
						width={25}
						height={25}
						alt='iconUnity'
					/>
					<p>Unity</p>
				</div>
				<div className={`${styles.card} ${styles.mysql}`}>
					<Image
						src='/icons/mysql.png'
						width={25}
						height={25}
						alt='iconMysql'
					/>
					<p>MySQL</p>
				</div>
				<div className={`${styles.card} ${styles.nosql}`}>
					<Image
						src='/icons/nosql.png'
						width={25}
						height={25}
						alt='iconNosql'
					/>
					<p>NoSQL</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
