import { createContext, FC, useContext, useState } from "react";

type gameContextType = {
  userBall: Number;
  userCard: Number;
  opponentBall: Number;
  opponentCard: Number;
  rounds: number[];
  controller: number;
  updateController: (newState: number) => void;
  setUserBall: (newUserBall: number) => void;
  setUserCard: (newUserCard: number) => void;
  setOpponentBall: (newOpponentBall: number) => void;
  setOpponentCard: (newOpponentCard: number) => void;
  updateRounds: (addRound: number, deletion: Boolean) => void;
};

const gameContextDefaultValues: gameContextType = {
  userBall: 0,
  userCard: 0,
  opponentBall: 32,
  opponentCard: 1,
  rounds: [],
  controller: 0,
  updateController: (newState: number) => {},
  setUserBall: (newUserBall: number) => {},
  setOpponentBall: (newOpponentBall: number) => {},
  setUserCard: (newUserCard: number) => {},
  setOpponentCard: (newOpponentCard: number) => {},
  updateRounds: (addRound: number, deletion: Boolean) => {},
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
  const [controller, setController] = useState(
    gameContextDefaultValues.controller
  );

  const setUserBall = (newUserBall: number) => setuserBall(newUserBall);
  const setUserCard = (newUserCard: number) => setuserCard(newUserCard);
  const setOpponentBall = (newOpponentBall: number) =>
    setopponentBall(newOpponentBall);
  const setOpponentCard = (newOpponentCard: number) =>
    setopponentCard(newOpponentCard);

  const updateRounds = (addRound: number, deletion: Boolean) => {
    if (!deletion) setRounds([...rounds, addRound]);
    else setRounds([]);
  };
  const updateController = (newState: number) => setController(newState);
  return (
    <gameContext.Provider
      value={{
        userBall,
        userCard,
        rounds,
        controller,
        opponentBall,
        opponentCard,
        updateController,
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
