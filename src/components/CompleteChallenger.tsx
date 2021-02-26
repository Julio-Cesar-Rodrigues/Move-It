import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompleteChallengers.module.css';

export function CompleteChallengers(){
    const {challengesCompleted} = useContext(ChallengesContext);

    return(
    <div className={styles.completedChallengersContainer}>
        <span>Desafios Completos</span>
        <span>{challengesCompleted} </span>
    </div>
    );
}