import type { NextPage } from 'next'
import styles from '../styles/Game.module.css'
const Game: NextPage = () => {
    return (
        <div className={styles.gameContainer}>
            <div className={styles.PlayerUI}>
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
                </div>
                <div className={styles.PlayerLine}>Your hand</div>
                <div className={styles.PlayerNumber}>
                    <div className={styles.Ball}>22</div>
                </div>
            </div>
            <div className={styles.OpponentsUI}>
                <p>Opponents Number</p>
                <div className={styles.OpponentsNumber}>
                 <div className={styles.OpponentsBall}>22</div>
                </div>
            </div>
            <div className={styles.OpponentsUI}>
            <p>Opponents Play</p>
                <div className={styles.OpponentsCard}>
                <svg width="150" height="221" viewBox="0 0 150 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_34:36)">
                            <rect x="146" y="213" width="142" height="213" rx="16" transform="rotate(-180 146 213)" fill="#FBEBF2" />
                        </g>
                        <path fillRule="evenodd" clipRule="evenodd" d="M97.446 111.997C100.566 108.877 100.566 103.818 97.446 100.698C94.3258 97.5781 89.267 97.5781 86.1469 100.698L74.8478 111.997L63.5487 100.698C60.4285 97.5781 55.3697 97.5781 52.2496 100.698C49.1294 103.818 49.1294 108.877 52.2496 111.997L69.1846 128.932C69.1891 128.937 69.1937 128.942 69.1982 128.946C70.5374 130.285 72.2337 131.05 73.9805 131.239C76.3037 131.491 78.7164 130.727 80.4974 128.946C80.5018 128.942 80.5063 128.937 80.5108 128.933L97.446 111.997Z" fill="#F72585" />
                        <defs>
                            <filter id="filter0_d_34:36" x="0" y="3.8147e-05" width="150" height="221" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34:36" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34:36" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Game