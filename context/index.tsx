import { createContext, FC, useContext, useState } from "react";

type gameContextType = {
  userBall: Number;
  userCard: Number;
  opponentBall: Number;
  opponentCard: Number;
  rounds: Number[];
  setUserBall: (newUserBall: number) => void;
  setUserCard: (newUserCard: number) => void;
  setOpponentBall: (newOpponentBall: number) => void;
  setOpponentCard: (newOpponentCard: number) => void;
  updateRounds: (addRound: number) => void;
};

const gameContextDefaultValues: gameContextType = {
  userBall: 0,
  userCard: 0,
  opponentBall: 0,
  opponentCard: 0,
  rounds: [],
  setUserBall: (newUserBall: number) => {},
  setOpponentBall: (newOpponentBall: number) => {},
  setUserCard: (newUserCard: number) => {},
  setOpponentCard: (newOpponentCard: number) => {},
  updateRounds: (addRound: number) => {},
};

export const gameContext = createContext<gameContextType>(
  gameContextDefaultValues
);

export function useGame() {
  return useContext(gameContext);
}

const GameProvider: FC = ({ children }) => {
  const [userBall, setuserBall] = useState(gameContextDefaultValues.userBall);
  const [userCard, setuserCard] = useState(gameContextDefaultValues.userCard);
  const [opponentBall, setopponentBall] = useState(
    gameContextDefaultValues.opponentBall
  );
  const [opponentCard, setopponentCard] = useState(
    gameContextDefaultValues.opponentCard
  );
  const [rounds, setRounds] = useState(gameContextDefaultValues.rounds);

  const setUserBall = (newUserBall: number) => setuserBall(newUserBall);
  const setUserCard = (newUserCard: number) => setuserCard(newUserCard);
  const setOpponentBall = (newOpponentBall: number) =>
    setopponentBall(newOpponentBall);
  const setOpponentCard = (newOpponentCard: number) =>
    setopponentCard(newOpponentCard);

  const updateRounds = (addRound: number) => setRounds([...rounds, addRound]);
  return (
    <gameContext.Provider
      value={{
        userBall,
        userCard,
        rounds,
        opponentBall,
        opponentCard,
        updateRounds,
        setOpponentBall,
        setOpponentCard,
        setUserBall,
        setUserCard,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameProvider;
