import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { gameContext } from "../context";
import styles from "../styles/Finish.module.css";

const Finish: NextPage = () => {
  const [winner, setWinner] = useState("trolo");
  const [last, setLast] = useState(false);
  const { rounds, updateRounds, updateController } = useContext(gameContext);
  const router = useRouter();
  let [time, setTime] = useState(5);

  function Timer() {
    let TIMER_1 = setInterval(() => {
      setTime(time--);
      if (time === -1) {
        //three rounds per game, game over
        if (rounds.length === 3) {
          clearInterval(TIMER_1);
          updateController(0);
          updateRounds(0, true);
        } else {
          clearInterval(TIMER_1);
          updateController(1);
        }
      }
    }, 1000);
  }
  useEffect(() => {
    if (rounds.length === 3) {
      setLast(true);
      //sum of array to see winner function
      let x = rounds.reduce((a, b) => a + b, 0);
      if (x < 0) setWinner("GAME LOST");
      else if (x > 0) setWinner("GAME WON");
      else setWinner("GAME DRAW");
    }
    Timer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className={styles.rounds}>
        <div
          className={
            rounds[0] > 0
              ? styles.won
              : rounds[0] < 0
              ? styles.lost
              : rounds[0] === 0
              ? styles.draw
              : styles.default
          }
        ></div>
        <div
          className={
            rounds[1] > 0
              ? styles.won
              : rounds[1] < 0
              ? styles.lost
              : rounds[1] === 0
              ? styles.draw
              : styles.default
          }
        ></div>
        <div
          className={
            rounds[2] > 0
              ? styles.won
              : rounds[2] < 0
              ? styles.lost
              : rounds[2] === 0
              ? styles.draw
              : styles.default
          }
        ></div>
      </div>
      <div>Round has finished.</div>
      <p className={styles.mainText}>
        {last
          ? winner
          : rounds[rounds.length - 1] > 0
          ? "ROUND WON"
          : rounds[rounds.length - 1] < 0
          ? "ROUND LOST"
          : "ROUND DRAW"}
      </p>
      <div>
        {last ? "Redirecting to start in" : "Next round starts in"} {time}
      </div>
    </>
  );
};

export default Finish;
