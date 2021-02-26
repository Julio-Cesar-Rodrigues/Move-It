import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar(){
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext);

    const percenetToNextLevel = Math.round((currentExperience*100)) / experienceToNextLevel;

    return(
        <header className={styles.experienceBar} >
        <span>0 exp</span>
        <div>
            <div style={{width: `${percenetToNextLevel}%`}} />

        <span className= {styles.currentExperience} style={{left: `${percenetToNextLevel}%`}}>
            {currentExperience} exp
        </span>
        </div>
        <span> {experienceToNextLevel} exp</span>


        </header>
    );
}