import type { NextPage } from 'next'
import styles from '../styles/Game.module.css'
const Game: NextPage = () => {
    return (
        <div>
            <div className={styles.playerUI}>
                <div className={styles.PlayerCard}>
                    <svg width="150" height="221" viewBox="0 0 150 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_34:14)">
                            <rect x="146" y="213" width="142" height="213" rx="16" transform="rotate(-180 146 213)" fill="#FBEBF2" />
                        </g>
                        <path fillRule="evenodd" clipRule="evenodd" d="M52.2496 100.698C49.1294 103.818 49.1294 108.877 52.2496 111.997C55.3697 115.118 60.4285 115.118 63.5487 111.997L74.8478 100.698L86.1469 111.997C89.267 115.118 94.3258 115.118 97.446 111.997C100.566 108.877 100.566 103.818 97.446 100.698L80.511 83.7632C80.5064 83.7587 80.5019 83.7541 80.4974 83.7496C79.1582 82.4104 77.4619 81.646 75.715 81.4564C73.3918 81.2042 70.9792 81.9686 69.1982 83.7496C69.1937 83.7541 69.1892 83.7586 69.1848 83.7631L52.2496 100.698Z" fill="#480CA8" />
                        <defs>
                            <filter id="filter0_d_34:14" x="0" y="3.8147e-05" width="150" height="221" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34:14" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34:14" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    <p>Your card</p>
                </div>
                <div className={styles.spacer}></div>
                <div className={styles.PlayerNumber}>
                    <div className={styles.Ball}>22</div>
                    <p>Your number</p>
                </div>
            </div>
            <div className="OpponentsUI">
                <p>Opponents Number</p>
                <div className='Opponent Number'>
                    <div>Number</div>
                </div>
                <p>Opponents Play</p>
                <div className="OpponentsPlay">
                    <div>Card</div>
                </div>
            </div>
        </div>
    )
}

export default Game