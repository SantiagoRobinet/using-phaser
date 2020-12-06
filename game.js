/* eslint-disable import/prefer-default-export */

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('background', 'images/background.png');
  }

  create() {
    this.add.image(500, 250, 'background');
  }
}
