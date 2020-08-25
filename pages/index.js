import Head from "next/head";
import Link from "next/link";
import { Paper, Typography, Button } from "@material-ui/core";

import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Estudo de NextJS</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<Typography align="center" component="h1" variant="h3">
					NextJS
				</Typography>
			</header>

			<main className={styles.content}>
				<Paper className={styles.paper}>
					<Typography variant="caption">
						Utilizando Material design e NextJS para aprender os
						conceitos básicos
					</Typography>

					<Link href="/hello">
						<Button>Navegação</Button>
					</Link>
				</Paper>
			</main>

			<footer className={styles.footer}>
				<Typography align="center">NextJS</Typography>
			</footer>
		</div>
	);
}
