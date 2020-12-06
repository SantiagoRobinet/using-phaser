/* eslint-disable import/prefer-default-export */

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('background', 'images/background.png');
    this.load.image('gameover', 'images/gameover.png');
  }

  create() {
    this.add.image(500, 300, 'background');
    this.gameOverImage = this.add.image(500, 180, 'gameover');
  }
}
