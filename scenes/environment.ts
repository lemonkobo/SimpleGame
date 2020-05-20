const config: Phaser.Types.Core.GameConfig = {
    //画面サイズ
    width: 360,
    height: 360,
    type: Phaser.AUTO,
    //ゲーム画面を描画するcanvasを書き出す先
    parent: 'game',
    //ゲーム画面を伸縮して表示させるための設定
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'game',
    },
};
