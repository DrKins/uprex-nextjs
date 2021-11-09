import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import styles from "../styles/Selection.module.css";

const Selection: NextPage = () => {
  //declaration of router const, using useRouter function.
  const router = useRouter();

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
  }, []);
  return (
    <div>
      <div className={styles.InfoContainer}>
        <div className={styles.Ball}>22</div>
        <div className={styles.Timer}>
          <p className={styles.unpop}>00:{time < 10 ? "0" + time : time}</p>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.7988 5.41992 24.2188 12.1094 24.2188C18.7988 24.2188 24.2188 18.7988 24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0ZM14.8975 17.0947L10.5908 13.9648C10.4395 13.8525 10.3516 13.6768 10.3516 13.4912V5.27344C10.3516 4.95117 10.6152 4.6875 10.9375 4.6875H13.2812C13.6035 4.6875 13.8672 4.95117 13.8672 5.27344V11.9971L16.9678 14.2529C17.2314 14.4434 17.2852 14.8096 17.0947 15.0732L15.7178 16.9678C15.5273 17.2266 15.1611 17.2852 14.8975 17.0947Z"
              fill="#FBEBF2"
            />
          </svg>
        </div>
      </div>
      <p className={styles.InfoMess}>Select your card before time runs out.</p>
      <div className={styles.CardContainer}>
        <div
          onClick={() => {
            setCard(0);
          }}
        >
          <svg
            width="150"
            height="221"
            viewBox="0 0 150 221"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_34:36)">
              <rect
                x="146"
                y="213"
                width="142"
                height="213"
                rx="16"
                transform="rotate(-180 146 213)"
                fill="#FBEBF2"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M97.446 111.997C100.566 108.877 100.566 103.818 97.446 100.698C94.3258 97.5781 89.267 97.5781 86.1469 100.698L74.8478 111.997L63.5487 100.698C60.4285 97.5781 55.3697 97.5781 52.2496 100.698C49.1294 103.818 49.1294 108.877 52.2496 111.997L69.1846 128.932C69.1891 128.937 69.1937 128.942 69.1982 128.946C70.5374 130.285 72.2337 131.05 73.9805 131.239C76.3037 131.491 78.7164 130.727 80.4974 128.946C80.5018 128.942 80.5063 128.937 80.5108 128.933L97.446 111.997Z"
              fill="#F72585"
            />
            <defs>
              <filter
                id="filter0_d_34:36"
                x="0"
                y="3.8147e-05"
                width="150"
                height="221"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_34:36"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_34:36"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div
          onClick={() => {
            setCard(1);
          }}
        >
          <svg
            width="150"
            height="221"
            viewBox="0 0 150 221"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_34:14)">
              <rect
                x="146"
                y="213"
                width="142"
                height="213"
                rx="16"
                transform="rotate(-180 146 213)"
                fill="#FBEBF2"
              />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52.2496 100.698C49.1294 103.818 49.1294 108.877 52.2496 111.997C55.3697 115.118 60.4285 115.118 63.5487 111.997L74.8478 100.698L86.1469 111.997C89.267 115.118 94.3258 115.118 97.446 111.997C100.566 108.877 100.566 103.818 97.446 100.698L80.511 83.7632C80.5064 83.7587 80.5019 83.7541 80.4974 83.7496C79.1582 82.4104 77.4619 81.646 75.715 81.4564C73.3918 81.2042 70.9792 81.9686 69.1982 83.7496C69.1937 83.7541 69.1892 83.7586 69.1848 83.7631L52.2496 100.698Z"
              fill="#480CA8"
            />
            <defs>
              <filter
                id="filter0_d_34:14"
                x="0"
                y="3.8147e-05"
                width="150"
                height="221"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_34:14"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_34:14"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Selection;
