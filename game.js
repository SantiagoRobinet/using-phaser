/* eslint-disable max-len */
import { Scoreboard } from './components/Scoreboard.js';
import { Platform } from './components/Platform.js';
import { Ball } from './components/Ball.js';

export class Game extends Phaser.Scene {
  constructor() {
    super({ key: 'game' });
  }

  init() {
    this.scoreboard = new Scoreboard(this);
    this.platform = new Platform(this);
    this.ball = new Ball(this);
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
    this.platform.createPlatform();
    this.ball.createBall();
    this.ball.setBallVelocity();

    this.physics.add.collider(this.ball.ball, this.platform.platform, this.platformImpact.bind(this), null);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.platform.platformMovement();

    if (this.ball.ball.y > 600) {
      this.gameOverImage.visible = true;
      this.scene.pause();
    }
  }

  platformImpact() {
    this.scoreboard.incrementPoints(1);
  }
}
