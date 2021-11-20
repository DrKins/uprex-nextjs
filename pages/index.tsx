import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Landingstyles from '../styles/Landing.module.css'
import Image from "next/image";
import LogoImage from "../public/Card.png";
import Selection from "../components/selection";
import Game from "../components/game";
import Finish from "../components/finish";
import { gameContext } from "../context";
import { useContext } from "react";
const Landing: NextPage = () => {
  const { controller, updateController } = useContext(gameContext);
  function main() {
    switch (controller) {
      case 0:
        return (
          <div>
            <Image
              src={LogoImage}
              alt="image"
              width={186}
              height={158}
              layout="fixed"
              priority={true}
            />
            <h1>Uprex</h1>
            <p>Enjoy neat web gaming expirience.</p>
            <button
              className={Landingstyles.btnStart}
              onClick={() => updateController(1)}
            >
              START
            </button>
          </div>
        );
        break;
      case 1:
        return <Selection />;
        break;
      case 2:
        return <Game />;
        break;
      case 3:
        return <Finish />;
        break;
      default:
        return null;
        break;
    }
  }
  return <>{main()}</>;
};

export default Landing
