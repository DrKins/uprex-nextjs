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
    userCard,
    updateController,
    setUserBall,
    setUserCard,
    setOpponentBall,
    setOpponentCard,
  } = useContext(gameContext);

  //one-way data binding with useState. timer variable.
  let [time, setTime] = useState(0);
  let [selectedCard, setselectedCard] = useState(false);

  //generating values for game
  function generator() {
    setUserBall(Math.floor(Math.random() * 50 + 1));
    setOpponentBall(Math.floor(Math.random() * 50 + 1));
    setOpponentCard(Math.floor(Math.random() * (2 - 1 + 1)) + 1);
  }

  //Function timer, passing one param - number of seconds timer will run.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function Timer(lock: number) {
    let TIMER_1 = setInterval(() => {
      setTime(time++);
      if (time === lock) {
        if (userCard === 0) {
          setUserCard(Math.floor(Math.random() * (2 - 1 + 1)) + 1);
        }
        clearInterval(TIMER_1);
        updateController(2);
      }
    }, 1000);
  }

  //Calling timer after component is rendered.
  useEffect(() => {
    generator();
    Timer(6);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function cards() {
    if (selectedCard || !selectedCard) {
      switch (userCard) {
        case 1:
          return (
            <div className={styles.CardContainer}>
              <div
                onClick={() => {
                  setUserCard(1);
                  setselectedCard(true);
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
            </div>
          );
          break;
        case 2:
          return (
            <div className={styles.CardContainer}>
              <div
                onClick={() => {
                  setUserCard(2);
                  setselectedCard(true);
                }}
              >
                <Image
                  src={CardUpImage}
                  alt="Card up"
                  height={221}
                  width={150}
                  layout="fixed"
                  priority={true}
                />
              </div>
            </div>
          );
          break;

        default:
          return (
            <div className={styles.CardContainer}>
              <div
                onClick={() => {
                  setUserCard(1);
                  setselectedCard(true);
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
                  setUserCard(2);
                  setselectedCard(true);
                }}
              >
                <Image
                  src={CardUpImage}
                  alt="Card up"
                  height={221}
                  width={150}
                  layout="fixed"
                  priority={true}
                />
              </div>
            </div>
          );
          break;
      }
    }
  }
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
      {cards()}
    </div>
  );
};

export default Selection;
