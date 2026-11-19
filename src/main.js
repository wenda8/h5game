import Phaser from 'phaser';
import { GAME_CONFIG } from './config.js';
import BootScene from './scenes/BootScene.js';
import WalkScene from './scenes/WalkScene.js';
import IntroScene from './scenes/IntroScene.js';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: GAME_CONFIG.width,
  height: GAME_CONFIG.height,
  backgroundColor: '#000000',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: GAME_CONFIG.width,
    height: GAME_CONFIG.height,
  },
  scene: [BootScene, IntroScene, WalkScene],
};

new Phaser.Game(config);