export default class LoadingScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'Loading',
        });
    }
    preload(): void {
        const loadingText = (progress: number): string =>
            `Now Loading ... ${Math.round(progress * 100)}%`;

        const currentLoadingText = this.add.text(10, 10, loadingText(0));

        for (let index = 0; index < 100; index++) {
            this.load.image('acorn' + index, '../../assets/picture.png');
        }

        this.load.on('progress', (progress: number) => {
            currentLoadingText.text = loadingText(progress);
        });
        this.load.on('complete', () => {
            this.scene.start('Title');
        });
    }
}
