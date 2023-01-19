import * as Phaser from 'phaser';
import { AppMainScene } from './scenes/Main.scene';

export const DEFAULT_WIDTH = 1280
export const DEFAULT_HEIGHT = 720

export const AppGameConfig: Phaser.Types.Core.GameConfig = {
  backgroundColor: '#ffffff',
  scale: {
    parent: 'AppGame',
    fullscreenTarget: 'body',
    width: 1280,
    height: 720,
  },
  dom: {
    createContainer: false
  },
  scene: [ AppMainScene ],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  }
}
