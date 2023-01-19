import logo from '../logo.svg';
import * as Phaser from 'phaser';

export class AppMainScene extends Phaser.Scene {
    constructor() {
        super("AppMainScene");
    }
    preload() {
        this.load.image("logo", logo);
    }
    create() {
        const logo = this.add.image(400, 150, "logo");

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
    }
}