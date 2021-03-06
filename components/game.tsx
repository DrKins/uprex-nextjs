import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Game.module.css";
import { gameContext } from "../context/index";
import { useContext, useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const Game: NextPage = () => {
  const {
    userBall,
    userCard,
    opponentBall,
    opponentCard,
    updateRounds,
    updateController,
    setUserCard,
    rounds,
  } = useContext(gameContext);

  function gameWinner() {
    if (userBall === opponentBall) updateRounds(0, false);
    else if (userBall > opponentBall) {
      if (opponentCard === 2 && userCard === 2) updateRounds(-1, false);
      else if (opponentCard === 1 && userCard === 1) updateRounds(1, false);
      else updateRounds(0, false);
    } else {
      if (opponentCard === 1 && userCard === 1) updateRounds(-1, false);
      else if (opponentCard === 2 && userCard === 2) updateRounds(1, false);
      else updateRounds(0, false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      gameWinner();
      updateController(3);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.gameContainer}>
      <div className={styles.PlayerUI}>
        <div className={styles.PlayerCard}>
          {userCard === 2 ? (
            <Image
              src="/CardUp.png"
              alt="Card up"
              height={75}
              width={50}
              layout="fixed"
              priority={true}
            />
          ) : userCard === 1 ? (
            <Image
              src="/CardDown.png"
              alt="Card down"
              height={75}
              width={50}
              layout="fixed"
              priority={true}
            />
          ) : null}
        </div>
        <div className={styles.PlayerLine}>Your hand</div>
        <div className={styles.PlayerNumber}>
          <div className={styles.Ball}>{userBall}</div>
        </div>
      </div>
      <div className={styles.OpponentsUI}>
        <p>Opponents Number</p>
        <div className={styles.OpponentsNumber}>
          <div className={styles.OpponentsBall}>{opponentBall}</div>
        </div>
      </div>
      <div className={styles.OpponentsUI}>
        <p>Opponents Play</p>
        <div className={styles.OpponentsCard}>
          {opponentCard === 2 ? (
            <Image
              src="/CardUp.png"
              alt="Card up"
              height={221}
              width={150}
              layout="fixed"
              priority={true}
            />
          ) : opponentCard === 1 ? (
            <Image
              src="/CardDown.png"
              alt="Card down"
              height={221}
              width={150}
              layout="fixed"
              priority={true}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Game;
