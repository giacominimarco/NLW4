import { createContext, useState, ReactNode } from 'react';
import challanges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
}

interface ChallengesProvidesProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProvidesProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null)
  function levelUp() {
    setLevel(level = 1);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challanges.length);
    const challenge = challanges[randomChallengeIndex];

    setActiveChallenge(challenge);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
