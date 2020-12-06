/* eslint-disable import/prefer-default-export */

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('background', 'images/background.png');
    this.load.image('gameover', 'images/gameover.png');
    this.load.image('platform', 'images/platform.png');
  }

  create() {
    this.add.image(500, 300, 'background');
    this.gameOverImage = this.add.image(500, 180, 'gameover');
    this.gameOverImage.visible = false;

    this.platform = this.physics.add.image(500, 450, 'platform');
    this.platform.body.allowGravity = false;
    this.platform.setScale(0.2, 0.1);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.platform.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
      this.platform.setVelocityX(300);
    } else {
      this.platform.setVelocityX(0);
    }
  }
}
