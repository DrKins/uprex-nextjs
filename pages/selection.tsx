import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
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
            src="/timer.png"
            alt="timer"
            height={25}
            width={25}
            layout="fixed"
          />
        </div>
      </div>
      <p className={styles.InfoMess}>Select your card before time runs out.</p>
      <div className={styles.CardContainer}>
        <div
          onClick={() => {
            //testing context api
            setUserBall(Math.floor(Math.random() * 100));
            setCard(0);
          }}
        >
          <Image
            src="/CardDown.png"
            alt="Card down"
            height={221}
            width={150}
            layout="fixed"
          />
        </div>
        <div
          onClick={() => {
            setCard(1);
          }}
        >
          <Image
            src="/CardUp.png"
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

export default Selection;
