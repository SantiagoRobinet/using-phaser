/* eslint-disable import/prefer-default-export */

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('background', 'images/background.png');
    this.load.image('gameover', 'images/gameover.png');
    this.load.image('platform', 'images/platform.png');
    this.load.image('ball', 'images/ball.png');
  }

  create() {
    this.add.image(500, 300, 'background');
    this.gameOverImage = this.add.image(500, 180, 'gameover');
    this.gameOverImage.visible = false;

    this.platform = this.physics.add.image(500, 450, 'platform');
    this.platform.body.allowGravity = false;
    this.platform.setScale(0.2, 0.1);

    this.ball = this.physics.add.image(500, 80, 'ball');
    this.ball.setScale(0.1, 0.1);

    this.physics.add.collider(this.ball, this.platform);

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
