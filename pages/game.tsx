import type { NextPage } from 'next'
import Image from "next/image";
import styles from "../styles/Game.module.css";
const Game: NextPage = () => {
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
          />
        </div>
        <div className={styles.PlayerLine}>Your hand</div>
        <div className={styles.PlayerNumber}>
          <div className={styles.Ball}>22</div>
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
          />
        </div>
      </div>
    </div>
  );
};

export default Game