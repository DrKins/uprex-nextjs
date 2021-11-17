import { createContext, FC, useContext, useState } from "react";

type gameContextType = {
  userBall: Number;
  userCard: Number;
  //   opponentBall: Number;
  //   opponentCard: Number;
  setUserBall: (newUserBall: number) => void;
  setUserCard: (newUserCard: number) => void;
  //   setOpponentBall: () => void;
  //   setOpponentCard: () => void;
};

const gameContextDefaultValues: gameContextType = {
  userBall: 0,
  userCard: 0,
  //   opponentBall: 0,
  //   opponentCard: 0,
  setUserBall: (newUserBall: number) => {},
  //   setOpponentBall: () => {},
  setUserCard: (newUserCard: number) => {},
  //   setOpponentCard: () => {},
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

  const setUserBall = (newUserBall: number) => setuserBall(newUserBall);
  const setUserCard = (newUserCard: number) => setuserCard(newUserCard);

  return (
    <gameContext.Provider
      value={{
        userBall,
        userCard,
        setUserBall,
        setUserCard,
      }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameProvider;
