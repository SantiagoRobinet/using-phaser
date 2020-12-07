/* eslint-disable max-len */
import { Scoreboard } from './components/Scoreboard.js';
import { Platform } from './components/Platform.js';

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }

  init() {
    this.scoreboard = new Scoreboard(this);
    this.platform = new Platform(this);
  }

  preload() {
    this.load.image('background', 'images/background.png');
    this.load.image('gameover', 'images/gameover.png');
    this.load.image('platform', 'images/platform.png');
    this.load.image('ball', 'images/ball.png');
  }

  create() {
    this.physics.world.setBoundsCollision(true, true, true, false);

    this.add.image(500, 300, 'background');
    this.gameOverImage = this.add.image(500, 180, 'gameover');
    this.gameOverImage.visible = false;

    this.scoreboard.createScoreBoard();
    this.platform.declarePlatform();

    this.ball = this.physics.add.image(500, 80, 'ball');
    this.ball.setScale(0.1, 0.1);
    this.ball.setCollideWorldBounds(true);

    let velocity = 100 * Phaser.Math.Between(1, 2);
    if (Phaser.Math.Between(0, 10) > 5) {
      velocity = 0 - velocity;
    }
    debugger;
    this.ball.setVelocity(velocity, 10);

    this.physics.add.collider(this.ball, this.platform.platform, this.platformImpact.bind(this), null);

    this.ball.setBounce(1);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.platform.platformMovement();

    if (this.ball.y > 600) {
      this.gameOverImage.visible = true;
      this.scene.pause();
    }
  }

  platformImpact() {
    this.scoreboard.incrementPoints(1);
  }
}
