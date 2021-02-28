import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
  const { activeChallenge } = useContext(ChallengesContext);

  return (
    <div className={styles.ChallengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.ChallengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              type="button"
              className={styles.ChallengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.ChallengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
          <div className={styles.ChallengeBoxNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios.
            </p>
          </div>
        )
      }
    </div >
  );
}