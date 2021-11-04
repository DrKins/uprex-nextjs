import type { NextPage } from 'next'
import styles from '../styles/Game.module.css'
const Game: NextPage = () => {
    return (
        <div>
            <div className={styles.playerUI}>
                <div className="CardSelected">radnomcard</div>
                <div className="NumberSelected">radnomnumber</div>
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