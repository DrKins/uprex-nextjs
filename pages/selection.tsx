import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import TimerImage from "../public/timer.png";
import CardUpImage from "../public/CardUp.png";
import CardDownImage from "../public/CardDown.png";
import { useRouter } from "next/dist/client/router";
import styles from "../styles/Selection.module.css";
import GameProvider, { gameContext } from "../context/index";

const Selection: NextPage = () => {
  //declaration of router const, using useRouter function.
  const router = useRouter();

  const { userBall, setUserBall } = useContext(gameContext);

  //one-way data binding with useState. timer variable.
  let [time, setTime] = useState(0);
  let [selectedCard, setselectedCard] = useState(0);

  function generateNumber() {
    setUserBall(Math.floor(Math.random() * 50 + 1));
  }

  function setCard(card: number) {
    setselectedCard(card);
  }

  //Function timer, passing one param - number of seconds timer will run.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function Timer(lock: number) {
    let TIMER_1 = setInterval(() => {
      setTime(time++);
      if (time === lock) {
        clearInterval(TIMER_1);
        router.push("/game");
      }
    }, 1000);
  }

  //Calling timer after component is rendered.
  useEffect(() => {
    generateNumber();
    Timer(11);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className={styles.InfoContainer}>
        <div className={styles.Ball}>{userBall}</div>
        <div className={styles.Timer}>
          <p className={styles.unpop}>00:{time < 10 ? "0" + time : time}</p>
          <Image
            src={TimerImage}
            alt="timer"
            height={25}
            width={25}
            layout="fixed"
            priority
          />
        </div>
      </div>
      <p className={styles.InfoMess}>Select your card before time runs out.</p>
      <div className={styles.CardContainer}>
        <div
          onClick={() => {
            setCard(0);
          }}
        >
          <Image
            src={CardDownImage}
            alt="Card down"
            height={221}
            width={150}
            layout="fixed"
            priority
          />
        </div>
        <div
          onClick={() => {
            setCard(1);
          }}
        >
          <Image
            src={CardUpImage}
            alt="Card up"
            height={221}
            width={150}
            layout="fixed"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Selection;
