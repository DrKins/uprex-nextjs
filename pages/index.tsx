import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Landingstyles from '../styles/Landing.module.css'
import Image from "next/image";
import LogoImage from "../public/Card.png";
const Landing: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        src={LogoImage}
        alt="image"
        width={186}
        height={158}
        layout="fixed"
        loading="eager"
      />
      <h1>Uprex</h1>
      <p>Enjoy neat web gaming expirience.</p>
      <button
        className={Landingstyles.btnStart}
        onClick={() => router.push("/selection")}
      >
        START
      </button>
    </div>
  );
};

export default Landing
