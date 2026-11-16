import { GAME_CONFIG } from '../config.js';

export default class IntroScene extends Phaser.Scene {
  constructor() {
    super('IntroScene');
  }

  init() {
    // 在这里配置你的开场对话
    this.dialogueList = [
      { speaker: 'she', text: '我叫青青' },
      { speaker: 'she', text: '今天我即将晋升地球Online的Level-25' },
      { speaker: 'he', text: '在那之前————' },
      { speaker: 'he', text: '需要先接受我的晋级考验...' },
    ];
    this.currentIndex = 0;
  }

  create() {
    const { width, height } = this.scale;
    
    // 铺个底色（黑屏或者背景图）
    this.add.rectangle(0, 0, width, height, 0x000000).setOrigin(0);

    // ==========================================
    // 1. 画底部的 UI 框
    // ==========================================
    const boxHeight = 160;
    const boxY = height - boxHeight;
    
    // 背景框（半透明黑）
    this.add.rectangle(0, boxY, width, boxHeight, 0x000000, 0.8).setOrigin(0);
    
    // 名字标签
    this.shenameBg = this.add.rectangle(30, boxY - 15, 100, 30, 0x4a6fa5).setOrigin(0).setStrokeStyle(2, 0xffffff);
    this.shenameText = this.add.text(80, boxY, '', { fontSize: '18px', color: '#fff', fontStyle: 'bold' }).setOrigin(0.5);
    this.henameBg = this.add.rectangle(470, boxY - 15, 100, 30, 0x4a6fa5).setOrigin(0).setStrokeStyle(2, 0xffffff);
    this.henameText = this.add.text(520, boxY, '', { fontSize: '18px', color: '#fff', fontStyle: 'bold' }).setOrigin(0.5);
2
    // 对话文本
    this.dialogueText = this.add.text(40, boxY + 50, '', {
      fontSize: '20px',
      color: '#ffffff',
      wordWrap: { width: width - 80 },
      lineSpacing: 8,
      padding: { top: 10, bottom: 10, left: 10, right: 10 } 
    });

    // 提示文字
    this.hintText = this.add.text(width - 30, height - 30, '▼ 点击继续', {
      fontSize: '16px', color: '#aaaaaa'
    }).setOrigin(1, 1);
    
    // 呼吸闪烁动画
    this.tweens.add({ targets: this.hintText, alpha: 0.2, yoyo: true, repeat: -1, duration: 600 });

    // ==========================================
    // 2. 绘制左右头像
    // ==========================================
    // 女生在左边
    this.sheHead = this.add.image(80, boxY - 55, 'head-she').setDisplaySize(100, 100);
    this.add.rectangle(80, boxY - 40, 104, 113).setStrokeStyle(2, 0xdda0dd); // 紫色边框
    
    // 男生在右边
    this.heHead = this.add.image(width - 80, boxY - 55, 'head-he').setDisplaySize(100, 100);
    this.add.rectangle(width - 80, boxY - 40, 104, 113).setStrokeStyle(2, 0xffffff); // 蓝色边框

    // 默认两人头像都是灰色（谁说话谁变亮）
    this.sheHead.setTint(0x555555);
    this.heHead.setTint(0x555555);

    // 点击屏幕推进对话
    this.input.on('pointerdown', () => this.nextDialogue());
    
    // 初始显示第一句
    this.showDialogue();
  }

  showDialogue() {
    const current = this.dialogueList[this.currentIndex];
    
    // 如果所有人话都说完了
    if (!current) {
      this.hintText.setText('点击屏幕开始游戏...');
      this.input.once('pointerdown', () => {
        this.cameras.main.fadeOut(500, 0, 0, 0);
        this.cameras.main.once('camerafadeoutcomplete', () => {
          // 👇 跳转到你的主游戏场景！
          this.scene.start('WalkScene', { index: 0 }); 
        });
      });
      return;
    }

    // 女生暗粉色
    this.shenameBg.setFillStyle(0x8b5a76); 
    this.shenameText.setText('');
    this.shenameBg.setStrokeStyle(2, 0x555555); // 边框也暗一点
    
    // 男生暗蓝色
    this.henameBg.setFillStyle(0x2b4566); 
    this.henameText.setText('');
    this.henameBg.setStrokeStyle(2, 0x555555); // 边框也暗一点

    // 根据谁说话，更新名字、颜色、头像亮度
    if (current.speaker === 'he') {
      this.henameBg.setFillStyle(0x4a6fa5); // 蓝色标签
      this.henameText.setText('男生');
      this.heHead.clearTint(); // 男主变亮
      this.sheHead.setTint(0x555555); // 女主变暗
    } else {
      this.shenameBg.setFillStyle(0xdda0dd); // 粉色标签
      this.shenameText.setText('女生');
      this.sheHead.clearTint(); // 女主变亮
      this.heHead.setTint(0x555555); // 男主变暗
    }

    this.dialogueText.setText(current.text);
  }

  nextDialogue() {
    this.currentIndex++;
    this.showDialogue();
  }
}