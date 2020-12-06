/* eslint-disable import/prefer-default-export */
import Phaser from 'phaser';

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('background', 'images/background.png');
  }

  create() {

  }
}
