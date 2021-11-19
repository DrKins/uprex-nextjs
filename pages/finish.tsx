import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

const Finish: NextPage = () => {
  const router = useRouter();
  let [time, setTime] = useState(10);
  function Timer() {
    let TIMER_1 = setInterval(() => {
      setTime(time--);
      if (time === -1) {
        clearInterval(TIMER_1);
        router.push("/selection");
      }
    }, 1000);
  }
  useEffect(() => {
    Timer();
  }, []);
  return (
    <>
      <div>Round finished.</div>
      <div>Next round starts in {time}</div>
    </>
  );
};

export default Finish;
