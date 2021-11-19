import type { NextPage } from 'next'
import Image from "next/image";
import styles from "../styles/Game.module.css";
import { gameContext } from "../context/index";
import { useContext } from "react";

const Game: NextPage = () => {
  const { userBall } = useContext(gameContext);
  return (
    <div className={styles.gameContainer}>
      <div className={styles.PlayerUI}>
        <div className={styles.PlayerCard}>
          <Image
            src="/CardUp.png"
            alt="Card up"
            height={75}
            width={50}
            layout="fixed"
            priority={true}
          />
        </div>
        <div className={styles.PlayerLine}>Your hand</div>
        <div className={styles.PlayerNumber}>
          <div className={styles.Ball}>{userBall}</div>
        </div>
      </div>
      <div className={styles.OpponentsUI}>
        <p>Opponents Number</p>
        <div className={styles.OpponentsNumber}>
          <div className={styles.OpponentsBall}>22</div>
        </div>
      </div>
      <div className={styles.OpponentsUI}>
        <p>Opponents Play</p>
        <div className={styles.OpponentsCard}>
          <Image
            src="/CardDown.png"
            alt="Card up"
            height={221}
            width={150}
            layout="fixed"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Game