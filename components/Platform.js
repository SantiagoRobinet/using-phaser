export class Platform {
  constructor(scene) {
    this.relatedScene = scene;
  }

  createPlatform() {
    this.platform = this.relatedScene.physics.add.image(500, 550, 'platform').setImmovable();
    this.platform.body.allowGravity = false;
    this.platform.setScale(0.2, 0.1);
    this.platform.setSize(850, 80);
    this.platform.setCollideWorldBounds(true);
  }

  platformMovement() {
    if (this.relatedScene.cursors.left.isDown) {
      this.platform.setVelocityX(-300);
    } else if (this.relatedScene.cursors.right.isDown) {
      this.platform.setVelocityX(300);
    } else {
      this.platform.setVelocityX(0);
    }
  }
}
