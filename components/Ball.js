export class Ball {
  constructor(scene) {
    this.ralatedScene = scene;
  }

  createBall() {
    this.ball = this.ralatedScene.physics.add.image(500, 80, 'ball');
    this.ball.setScale(0.1, 0.1);
    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1);
  }

  setBallVelocity() {
    let velocity = 100 * Phaser.Math.Between(1, 2);
    if (Phaser.Math.Between(0, 10) > 5) {
      velocity = 0 - velocity;
    }
    this.ball.setVelocity(velocity, 10);
  }
}
