import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import Landingstyles from '../styles/Landing.module.css'
import Image from "next/image";
const Landing: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        src="/Card.png"
        alt="image"
        width={186}
        height={158}
        layout="fixed"
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
