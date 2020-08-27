import Head from "next/head";
import { useRouter } from "next/router";
import { Typography, Paper, Grid, Button } from "@material-ui/core";

import styles from "../../styles/Home.module.css";

function Hello() {
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
						Outra página
					</Typography>

					<Grid
						container
						alignItems="center"
						justify="center"
						direction="column"
					>
						<Typography variant="caption" align="center">
							Utilizando Material design e NextJS para aprender os
							conceitos básicos do framework
						</Typography>

						<Button onClick={() => router.push("/")}>Voltar</Button>
					</Grid>
				</Paper>
			</main>

			<footer className={styles.footer}>
				<Typography align="center">Matheus Gouveia - 2020</Typography>
			</footer>
		</div>
	);
}

export default Hello;
