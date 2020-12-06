/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
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

    this.platform = this.physics.add.image(500, 550, 'platform').setImmovable();
    this.platform.body.allowGravity = false;
    this.platform.setScale(0.2, 0.1);
    this.platform.setSize(900, 80);

    this.ball = this.physics.add.image(500, 80, 'ball');
    this.ball.setScale(0.1, 0.1);

    let velocity = 100 * Phaser.Math.Between(1, 2);
    if (Phaser.Math.Between(0, 10) > 5) {
      velocity = 0 - velocity;
    }

    this.ball.setVelocity(velocity, 10);

    this.physics.add.collider(this.ball, this.platform);

    this.ball.setBounce(0.4);

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
