import { Game } from 'game.js';
import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  heigth: 600,
  scene: [Game],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
};

const game = new Phaser.Game(config);
