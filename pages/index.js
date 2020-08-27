import Head from "next/head";
import { useRouter } from "next/router";
import { Paper, Typography, Button, Grid } from "@material-ui/core";

import styles from "../styles/Home.module.css";

export default function Home() {
	const router = useRouter();

	return (
		<div className={styles.container}>
			<Head>
				<title>Estudo de NextJS</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<header className={styles.header}>
				<Typography
					component="h1"
					variant="h3"
					className={styles.title}
				>
					NextJS
				</Typography>
			</header>

			<main className={styles.content}>
				<Paper className={styles.paper}>
					<Typography
						className={styles.subtitle}
						align="center"
						variant="h5"
						component="h1"
					>
						Página inicial
					</Typography>

					<Grid
						container
						align="center"
						direction="column"
						alignItems="center"
					>
						<Typography variant="caption" align="center">
							Utilizando Material design e NextJS para aprender os
							conceitos básicos do framework
						</Typography>

						<Button onClick={() => router.push("/hello")}>
							Navegação
						</Button>
					</Grid>
				</Paper>
			</main>

			<footer className={styles.footer}>
				<Typography align="center">Matheus Gouveia - 2020</Typography>
			</footer>
		</div>
	);
}
