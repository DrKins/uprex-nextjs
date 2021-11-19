import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import TimerImage from "../public/timer.png";
import CardUpImage from "../public/CardUp.png";
import CardDownImage from "../public/CardDown.png";
import { useRouter } from "next/dist/client/router";
import styles from "../styles/Selection.module.css";
import { gameContext } from "../context/index";

const Selection: NextPage = () => {
  //declaration of router const, using useRouter function.
  const router = useRouter();

  const {
    userBall,
    setUserBall,
    setUserCard,
    setOpponentBall,
    setOpponentCard,
  } = useContext(gameContext);

  //one-way data binding with useState. timer variable.
  let [time, setTime] = useState(0);
  let [selectedCard, setselectedCard] = useState(0);

  function generator() {
    setUserBall(Math.floor(Math.random() * 50 + 1));
    setOpponentBall(Math.floor(Math.random() * 50 + 1));
    setOpponentCard(Math.random() >= 0.5 ? 1 : 0);
    setUserCard(Math.random() >= 0.5 ? 1 : 0);
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
    generator();
    Timer(6);
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
            priority={true}
          />
        </div>
      </div>
      <p className={styles.InfoMess}>Select your card before time runs out.</p>
      <div className={styles.CardContainer}>
        <div
          onClick={() => {
            setUserCard(0);
          }}
        >
          <Image
            src={CardDownImage}
            alt="Card down"
            height={221}
            width={150}
            layout="fixed"
            priority={true}
          />
        </div>
        <div
          onClick={() => {
            setUserCard(1);
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
