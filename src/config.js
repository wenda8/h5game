export const GAME_CONFIG = {
  // 画面尺寸
  width: 600,
  height: 1000,         
  groundHeight: 40,
  walkSpeed: 180,

  // 人物位置
  heroX: 200, 

  //地标
  landmarkGap: 680,
  spawnX: 700,
  destroyX: -200,
  maxOnScreen: 4,
};

export const LANDMARKS = [
  { 
    key: 'xing', 
    file: 'xing.png', 
    bg: 'xing',
    name: '興记',     
    question: '我们第一次见面是在？', 
    options: ['1. 忘了', '2. 真忘了', '3. 興记'], 
    answer: 2 // 索引 2 是 '興记'
  },
  { key: 'film',      
    file: 'dianyingyuan.png', 
    bg: 'dianyingyuan',
    name: '电影', 
    question: '我们第一次一起看的电影是？', 
    options: ['1. 爱在三部曲', '2. 海边的曼彻斯特', '3. 给阿嬷的情书'], 
    answer: 2 
  },
  { key: 'yanchanghui',    
    name: '演唱会',  
    bg: 'yanchanghui', 
    file:'yanchanghui.png',
    dialogue: [
      {speaker: 'he', text:'还记得这不'},
      {speaker: 'she', text:'这谁知道'},
      {speaker: 'he', text:'我们看了演唱会'},
      {speaker: 'she', text:'哦对薛之谦'},
    ],
    photos:['yanchanghuip1']
  },
  { key: 'jinan',    
    name: '济南',  
    bg: 'jinan', 
    file:'jinan.png',
    dialogue: [
      {speaker: 'he', text:'我们还来过这'},
      {speaker: 'she', text:'这能看出来啥'},
      {speaker: 'he', text:'我们在这看了教主专场'},
      {speaker: 'she', text:'这是济南么'},
    ],
    photos:['jinanp1']
  },
 
  { key: 'dalilijiang',    
    name: '云南',  
    bg: 'dalilijiang', 
    file:'dalilijiang.png',
    dialogue: [
      {speaker: 'he', text:'然后暑假我们去了彩云之南'},
      {speaker: 'she', text:'全是人'},
      {speaker: 'he', text:'坐了坐热气球，爬了爬玉龙雪山'},
      {speaker: 'she', text:'确实'},
    ],
    question: '我们什么时候在一起了？', 
    options: ['1. 嘿嘿忘了','2. 8月8号', '3. 8月7号吧'], 
    answer: 1,
    photos:['dalip1','dalip2','dalip3', 'lijiangp1'],
  },

   { key: 'sias',    
    name: '西亚斯',  
    bg: 'sias', 
    file:'sias.png',
    dialogue: [
      {speaker: 'he', text:'然后我们去看了看你的母校'},
      {speaker: 'she', text:'从这感觉有印象了'},
      {speaker: 'she', text:'不错不错'},
    ],
    //photo:'jinan'
  },

   { key: 'xuzhou',    
    name: '徐州',  
    bg: 'xuzhou', 
    file:'xuzhou.png',
    dialogue: [
      {speaker: 'he', text:'我们十一的时候来了这'},
      {speaker: 'she', text:'徐州'},
      {speaker: 'he', text:'给你嘴都吃肿了'},
      {speaker: 'she', text:'哪有'},
    ],
    photos:['xuzhoup1','xuzhoup2']
  },

  { key: 'yanhu',    
    name: '盐湖',  
    bg: 'yanhu', 
    file:'yanhu.png',
    dialogue: [
      {speaker: 'he', text:'之后我们又去了运城'},
      {speaker: 'she', text:'臭水沟子'},
    ],
    photos:['yanhup1']
  },

  { key: 'shengri',    
    name: '生日',  
    file:'yanhu.png',
    dialogue: [
      {speaker: 'he', text:'宝宝，今天是你生日'},
      {speaker: 'she', text:'这个真忘不了'},
      {speaker: 'he', text:'祝你生日快乐'},
      {speaker: 'she', text:'一般吧'},
      {speaker: 'he', text:'你想要什么生日礼物？'},
      {speaker: 'she', text:'我想想...'},
    ],  
    question: '慢慢想...', 
    options: ['1. 大比斗','2. 我看新出了个Apple Watch', '3. 我AirPods旧了'], 
    answer: [1, 2],

    followUp:{
      question: '还有呢？', 
      options: ['1. 大比斗','2. 我看新出了个Apple Watch', '3. 我AirPods旧了'], 
      answer: [1, 2],
    }
   },
];

export const CORRECT = [
  "一般吧",
  "可以",
  "AUV",
  "又能怎",
]

export const WRONG = [
  "布什戈门",
  "sha了你",
  "笑死",
  "咱就是说",
  "别放炮了",
  "这对吗",
]