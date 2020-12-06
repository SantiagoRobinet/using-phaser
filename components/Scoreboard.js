export class Scoreboard {
  constructor(scene) {
    this.relatedScene = scene;
    this.score = 0;
    this.fontStyle = {
      fontSize: '20px',
      fill: '#fff',
      fontFamily: 'tahoma',
    };
  }

  createScoreBoard() {
    this.scoreText = this.relatedScene.add.text(900, 16, 'Points: 0', this.fontStyle);
  }

  incrementPoints(points) {
    this.score += points;
    this.scoreText.setText(`POINTS: ${this.score}`);
  }
}
