import { createContext, FC, useContext, useState } from "react";

type gameContextType = {
  userBall: Number;
  userCard: Number;
  opponentBall: Number;
  opponentCard: Number;
  setUserBall: (newUserBall: number) => void;
  setUserCard: (newUserCard: number) => void;
  setOpponentBall: (newOpponentBall: number) => void;
  setOpponentCard: (newOpponentCard: number) => void;
};

const gameContextDefaultValues: gameContextType = {
  userBall: 0,
  userCard: 0,
  opponentBall: 0,
  opponentCard: 0,
  setUserBall: (newUserBall: number) => {},
  setOpponentBall: (newOpponentBall: number) => {},
  setUserCard: (newUserCard: number) => {},
  setOpponentCard: (newOpponentCard: number) => {},
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

  const setUserBall = (newUserBall: number) => setuserBall(newUserBall);
  const setUserCard = (newUserCard: number) => setuserCard(newUserCard);
  const setOpponentBall = (newOpponentBall: number) =>
    setopponentBall(newOpponentBall);
  const setOpponentCard = (newOpponentCard: number) =>
    setopponentCard(newOpponentCard);

  return (
    <gameContext.Provider
      value={{
        userBall,
        userCard,
        opponentBall,
        opponentCard,
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
