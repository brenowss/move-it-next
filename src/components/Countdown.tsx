import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.scss";

const Countdown = () => {

	const {minutes, seconds, hasFinished, active, resetCountdown, startCountdown} = useContext(CountdownContext)

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
	const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

	return (
		<>
			<div className={styles.container}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>
			{hasFinished ? (
				<button disabled className={styles.countdownButton}>
					Ciclo finalizado
				</button>
			) : active ? (
				<button
					onClick={resetCountdown}
					className={`${styles.countdownButton} ${styles.active}`}
				>
					Abandonar ciclo
				</button>
			) : (
				<button onClick={startCountdown} className={styles.countdownButton}>
					Iniciar ciclo
				</button>
			)}
		</>
	);
};

export default Countdown;
