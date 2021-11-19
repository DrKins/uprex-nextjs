import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { gameContext } from "../context";

const Finish: NextPage = () => {
  const [winner, setWinner] = useState("It's draw game.");
  const [last, setLast] = useState(false);
  const { rounds, updateRounds } = useContext(gameContext);
  const router = useRouter();
  let [time, setTime] = useState(5);

  function Timer() {
    let TIMER_1 = setInterval(() => {
      setTime(time--);
      if (time === -1) {
        //three rounds per game, game over
        if (rounds.length === 3) {
          //sum of array to see winner function
          let x = rounds.reduce((a, b) => a + b, 0);
          if (x < 0) setWinner("You lost game.");
          else if (x > 0) setWinner("You win game.");
          updateRounds(0, true);
          clearInterval(TIMER_1);
          router.push("/");
        } else {
          clearInterval(TIMER_1);
          router.push("/selection");
        }
      }
    }, 1000);
  }
  useEffect(() => {
    if (rounds.length === 3) setLast(true);
    console.log(rounds);
    Timer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>Round finished.</div>
      <h2>
        {last
          ? winner
          : rounds[rounds.length - 1] > 0
          ? "You win this round"
          : rounds[rounds.length - 1] < 0
          ? "You lost this round"
          : "It's draw round"}
      </h2>
      <div>Next round starts in {time}</div>
    </>
  );
};

export default Finish;
