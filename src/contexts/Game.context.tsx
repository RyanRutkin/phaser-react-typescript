import React, { createContext, FC, PropsWithChildren, useState } from 'react';
import { AppGameConfig } from '../game-config';
import { Game } from 'phaser';

export const GameContext = createContext<{
    game: Game | null;
}>({
    game: null
});

export const GameContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [ game ] = useState<Game | null>(new Game(AppGameConfig));

    return <GameContext.Provider value={{ game }} >
        { children }
    </GameContext.Provider>
}
