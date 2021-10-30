import type { NextPage } from 'next'
import Image from 'next/image'
import Landingstyles from '../styles/Landing.module.css'
import logo from '../Card.svg'
const Landing: NextPage = () => {
  return (
    <div>
      <svg width="109" height="162" viewBox="0 0 109 162" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_75:74)">
        <rect x="4" y="4" width="100" height="150" rx="16" fill="#FBEBF2"/>
        </g>
        <path fillRule="evenodd" clipRule="evenodd" d="M48.4394 84.6047C46.2421 82.4074 42.6795 82.4074 40.4822 84.6047C38.2849 86.802 38.2849 90.3645 40.4822 92.5618L52.4179 104.497C54.6152 106.695 58.1777 106.695 60.375 104.497C60.3778 104.495 60.3806 104.492 60.3834 104.489L72.3107 92.5618C74.508 90.3645 74.508 86.802 72.3107 84.6047C70.1134 82.4074 66.5509 82.4074 64.3536 84.6047L56.3965 92.5618L48.4394 84.6047Z" fill="#480CA8"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M50.8499 81.8714C53.0472 84.0687 56.6098 84.0687 58.8071 81.8714C61.0044 79.6741 61.0044 76.1115 58.8071 73.9142L46.8714 61.9786C46.8714 61.9786 46.8714 61.9786 46.8714 61.9786C46.4235 61.5307 45.9189 61.1741 45.3807 60.9088C43.2785 59.8726 40.6637 60.2291 38.9143 61.9786C38.9124 61.9804 38.9105 61.9823 38.9086 61.9842L26.9786 73.9143C24.7813 76.1116 24.7813 79.6741 26.9786 81.8714C29.1759 84.0687 32.7384 84.0687 34.9357 81.8714L42.8928 73.9143L50.8499 81.8714Z" fill="#F72585"/>
        <defs>
          <filter id="filter0_d_75:74" x="0" y="4" width="108" height="158" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_75:74"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_75:74" result="shape"/>
          </filter>
        </defs>
      </svg>
      <h1>Uprex</h1>
      <p>Enjoy best multiplayer expirience.</p>
      <button className={Landingstyles.btnStart}>START</button>
    </div>
  )
}

export default Landing
