// ===== 真实简历内容（来自唐睿霖 CV） =====
// 图片字段为占位 key，后续替换为真实素材即可。

export const profile = {
  name: '唐睿霖',
  enName: 'Riley Tang',
  title: '本科在读',
  tagline: '把想法讲清楚，把事情做成',
  phone: '13670087554',
  email: 'ruilintang@link.cuhk.edu.cn',
  school: '香港中文大学（深圳）',
  major: '本科在读（2024 级）',
  duration: '2024.09 – 2028.06',

  summary:
    '我在香港中文大学（深圳）学习城市管理，我喜欢在我的专业领域探索不同的话题，' +
    '也同时很注重自身综合能力的培养和提升。我不仅兴趣爱好广泛，也渴望接纳尝试新事物，' +
    '我正在不断把它们转换成我的能力，以此不断拓展我探索自己，认识世界的边界。',

  education: {
    school: '香港中文大学（深圳）',
    major: '城市管理专业 · 2024 级',
    duration: '2024.09 – 2028.06',
  },

  honors: [
    '2024–2025 思廷书院院长荣誉录',
    '2024–2025 思廷书院阳光奖学金',
  ],

  resumeUrl: '/resume.pdf', // 将真实简历放入 public/ 并重命名

  // 「在校园里，我同时是」文件夹内容
  // 顺序即文件夹纸张顺序：paper-1 左 / paper-2 右 / paper-3 中间
  campusIdentities: [
    {
      title: '主持人',
      short: '中英主持',
      desc: '开学第一课、大师讲堂、Colour Run、毕业生家长晚宴等 10+ 场校园活动中的中英主持人。',
      img: '/identity-host.jpg',
    },
    {
      title: '城市研究与治理学会会长',
      short: '社团会长',
      desc: '从 0 到 1 创办学术社团并担任会长，策划讲座、调研与沙龙，把一群有趣的人聚在一起做成事情。',
      img: '/identity-association.jpg',
    },
    {
      title: '魅影戏剧社演员',
      short: '话剧演员',
      desc: '参演校园戏剧演出，在排练与舞台之间练习表达、共情与团队合作。',
      img: '/identity-drama.jpg',
    },
  ],
}

// 精选项目 / 经历
export const projects = [
  {
    id: 'leao',
    cat: '实习 · 城市规划设计',
    period: '2026.05 – 2026.08',
    title: '蕾奥规划设计咨询有限公司',
    role: '城市规划设计部 · 助理设计师',
    desc:
      '独立负责横琴高铁站 TOD 片区基础研判，梳理区域格局、产业定位与发展时序，' +
      '整理湾区枢纽开发案例库支撑方案；全程跟进政府专项会议，撰写新闻稿与政策文稿；' +
      '参与南山趣海滨海更新项目，独立完成方案 PPT 排版、分析图纸绘制与图文统筹；' +
      '独立撰写龙华区精细微小设计攻坚方案技术标书并参与竞标。',
    tags: ['TOD 研判', '项目交付', '规划与绘图', '政府会议'],
    gallery: 'accordion',
    images: [
      { src: '/proj-leao-1.jpg', alt: '蕾奥规划办公空间', label: '蕾奥规划' },
      { src: '/proj-leao-2.png', alt: '观澜片区现状分析图', label: '观澜片区研判' },
      { src: '/proj-leao-3.jpg', alt: '无界南山 · 市政规划研讨会现场', label: '市政规划研讨会' },
      { src: '/proj-leao-4.png', alt: '蛇口渔港主题标识导览图', label: '蛇口渔港导览' },
    ],
    span: 'wide',
  },
  {
    id: 'caotu',
    cat: '实习 · 社区营造',
    period: '2025.06 – 2025.08',
    title: '草图营造',
    role: '活动部实习生',
    desc:
      '负责人物专访与社区宣传，撰写并发表人物志及社工报文章多篇；' +
      '协助日常事务处理，含会议记录、出行安排与关键信息整理；' +
      '完成活动前期采购流程，制作比价表、草拟合同，并进行英语文稿校准与翻译；' +
      '参与社区空间测绘，实地测量骑手驿站等场所，协助完成平面地图绘制。',
    tags: ['人物专访', '社区测绘', '英文翻译', '活动执行'],
    gallery: 'accordion',
    images: [
      { src: '/proj-caotu-1.jpg', alt: '上围艺术村院落', label: '上围艺术村' },
      { src: '/proj-caotu-2.jpg', alt: '上围艺术村总览地图设计分享', label: '总览地图设计' },
      { src: '/proj-caotu-3.jpg', alt: '骑手驿站实地测绘', label: '骑手驿站测绘' },
      { src: '/proj-caotu-4.jpg', alt: '共建花园「匠心园长」颁奖现场', label: '匠心园长颁奖' },
      { src: '/proj-caotu-5.jpg', alt: '2025 共建花园遛遛游园分享会合影', label: '共建花园合影' },
    ],
    span: 'tall',
  },
  {
    id: 'society',
    cat: '社团实践 · 学术运营',
    period: '2024 – 至今',
    title: '城市研究与治理学会',
    role: '会长（核心发起人之一）',
    desc:
      '参与学会成立筹备，负责章程、注册材料等基础文件撰写，搭建社团初期框架；' +
      '策划并统筹「联合国参与者分享会」等学术活动，独立完成策划案、财务预算与全流程跟进；' +
      '负责学会公众号文案撰写、排版与日常发布，累计发布推文多篇。',
    tags: ['社团创办', '活动统筹', '公众号运营', '学术策划'],
    gallery: 'accordion',
    galleryDefault: 2,
    images: [
      { src: '/proj-society-1.jpg', alt: '城市研究与治理学会「纸牌屋」活动海报', label: '纸牌屋活动' },
      { src: '/proj-society-2.jpg', alt: '联合国气候变化大会青年说讲座推文', label: 'COP30 青年说' },
      { src: '/proj-society-3.jpg', alt: '「一场不严肃的城管人聚会」活动海报', label: '城管人聚会' },
      { src: '/proj-society-4.jpg', alt: 'COP30 主题分享讲座合影', label: '讲座合影' },
      { src: '/proj-society-5.jpg', alt: '「城管人」聚会圆桌现场', label: '聚会现场' },
    ],
    span: 'tall',
  },
  {
    id: 'service',
    cat: '学校项目 · 服务学习',
    period: '2024 – 2025',
    title: '思廷书院「鹏程黔里」服务学习项目',
    role: '小班班主任',
    desc:
      '负责为期两周的日常教学工作，涵盖课程设计与课堂讲授；' +
      '统筹班级纪律、班级管理、文艺节目编排等，在真实场景中打磨组织与表达能力。',
    tags: ['教学', '班级管理', '课程设计'],
    gallery: 'accordion',
    images: [
      { src: '/proj-service-1.jpg', alt: '与班级孩子们的教室合影', label: '教室合影' },
      { src: '/proj-service-2.jpg', alt: '课堂互动，孩子们踊跃举手', label: '课堂互动' },
      { src: '/proj-service-3.jpg', alt: '夜间观星课，望远镜看星星', label: '夜间观星课' },
      { src: '/proj-service-4.jpg', alt: '孩子们与「沉醉花园」木牌', label: '沉醉花园' },
      { src: '/proj-service-5.jpg', alt: '课间与孩子们的自拍', label: '课间自拍' },
      { src: '/proj-service-6.jpg', alt: '户外文艺汇演排练', label: '汇演排练' },
    ],
    span: 'wide',
  },
]

// 能力模块
export const skills = {
  hard: [
    {
      name: 'ArcGIS 空间分析',
      desc: '空间信息处理、地图绘制与片区研判',
      icon: 'map',
    },
    {
      name: '规划文本撰写',
      desc: '方案、标书、政策文稿的撰写与润色',
      icon: 'doc',
    },
    {
      name: 'PPT / Excel',
      desc: '方案排版、数据分析与比价表制作',
      icon: 'chart',
    },
    {
      name: '中英双语',
      desc: '全英文教学环境，流利双语表达与翻译',
      icon: 'lang',
    },
  ],
  soft: [
    {
      name: '双语主持',
      desc: '大师讲堂、毕业晚会、国际活动英文/中文主持',
      icon: 'mic',
    },
    {
      name: '活动统筹',
      desc: '策划、预算、会务与全流程落地',
      icon: 'plan',
    },
    {
      name: '社团运营',
      desc: '从 0 到 1 搭建社团与公众号内容运营',
      icon: 'team',
    },
    {
      name: '对外传播',
      desc: '人物专访、公众号推文与新闻稿输出',
      icon: 'news',
    },
  ],
}

// 主持 / 礼仪经历（按时间排序，用于主持经历页）
export const hostingTimeline = [
  {
    year: '2024',
    events: [
      {
        title: '思廷书院迎新营暨开学第一课 主持人',
        images: [
          { src: '/host-01.jpg', alt: '开学第一课主持现场', pos: '50% 12%' },
          { src: '/host-02.jpg', alt: '开学第一课舞台主持' },
        ],
      },
      {
        title: '思廷高桌晚宴 礼仪小姐',
        images: [
          { src: '/host-03.jpg', alt: '高桌晚宴现场留影' },
          { src: '/host-04.jpg', alt: '思廷书院毕业庆典晚宴合影' },
        ],
      },
    ],
  },
  {
    year: '2025',
    events: [
      {
        title: '思廷夜跑 主持人',
        images: [{ src: '/host-05.jpg', alt: '思廷夜跑舞台主持' }],
      },
      {
        title: '王江平先生 / 彭寿院士 / 林海青院士 大师讲堂（英语）主持人',
        images: [
          { src: '/host-06.jpg', alt: '大师讲堂主持台' },
          { src: '/host-07.jpg', alt: '大师讲堂发言' },
        ],
      },
      {
        title: '生物信息学会荣誉博士授予仪式 英语主持人',
        images: [{ src: '/host-08.jpg', alt: '荣誉博士授予仪式主持' }],
      },
      {
        title: '港中深 Colour-Run 英语主持人',
        images: [
          { src: '/host-09.jpg', alt: '彩色跑开幕主持' },
          { src: '/host-10.jpg', alt: '彩色跑大合影' },
        ],
      },
      {
        title: '大学艺术中心卤猫分享会 中文主持人',
        images: [{ src: '/host-11.jpg', alt: '与卤猫分享会合影' }],
      },
      {
        title: '第二届发展与治理研究大会 主持人',
        images: [{ src: '/host-12.jpg', alt: '发展与治理研究大会现场' }],
      },
    ],
  },
  {
    year: '2026',
    events: [
      {
        title: '思廷元宵喜乐会 主持人',
        images: [{ src: '/host-13.jpg', alt: '元宵喜乐会舞台主持' }],
      },
      {
        title: '香港中文大学（深圳）本科毕业生家长答谢晚会 主持人',
        images: [
          { src: '/host-14.jpg', alt: '毕业晚会三位主持同台' },
          { src: '/host-15.jpg', alt: '毕业晚会双人主持' },
        ],
      },
      {
        title: '人文学院开学典礼等活动 主持人',
        images: [
          { src: '/host-16.jpg', alt: '人文学院开学典礼发言' },
          { src: '/host-17.jpg', alt: '人文学院欢迎新同学合影' },
        ],
      },
    ],
  },
]

// 生活与爱好
export const life = [
  {
    id: 'drama',
    title: '戏剧',
    desc: '在别人的故事里体验不同的人生，排练厅是一周里最放松的地方。',
    tag: 'Drama',
    cover: '/drama-huasan-1.jpg',
    coverPos: '50% 42%',
    link: '/drama',
    imageLabel: '剧照 / 排练',
  },
  {
    id: 'dance',
    title: '舞蹈',
    desc: '音乐一响就不想停下来，跳舞的时候最像我自己。',
    tag: 'Dance',
    images: [
      { src: '/dance-01.jpg', alt: '练功房后台', pos: '50% 30%' },
      { src: '/dance-02.jpg', alt: '舞台双人舞' },
      { src: '/dance-03.jpg', alt: '民族舞演出' },
      { src: '/dance-04.jpg', alt: '舞蹈基本功' },
      { src: '/dance-05.jpg', alt: '元宵喜乐会汉服舞' },
      { src: '/dance-06.jpg', alt: '元宵喜乐会后台' },
    ],
    imageLabel: '舞蹈 / 练功房',
  },
  {
    id: 'more',
    title: '其他',
    desc: '还有好多想尝试的事，不着急，一件一件来。',
    tag: 'More',
    images: [
      { src: '/more-01.jpg', alt: '毕业季合唱团', pos: '50% 30%' },
      { src: '/more-02.jpg', alt: '国际会议合影' },
      { src: '/more-03.jpg', alt: '临摹的油画小作' },
      { src: '/more-04.jpg', alt: '溶洞里的演出' },
    ],
    imageLabel: '日常 / 碎片',
  },
]

// 戏剧经历（用于 /drama 页面）
export const dramaExperiences = [
  {
    id: 'huasan',
    year: '2024',
    title: '秋日剧场《花散》',
    role: '演员',
    images: [
      { src: '/drama-huasan-2.jpg', alt: '《花散》舞台剧照' },
      { src: '/drama-huasan-3.jpg', alt: '《花散》谢幕合影', pos: '50% 40%' },
      { src: '/drama-huasan-4.jpg', alt: '《花散》舞台剪影' },
      { src: '/drama-huasan-5.jpg', alt: '《花散》后台捧花', pos: '50% 25%' },
    ],
    paragraphs: [
      '从 10.7 的见面，到 11.23 最后一场演出，【花散组】就此完结"散"花🌸🌸',
      '好多个【三小时夜晚】，把每一天和周末占得满满当当。昨天首演，动作、灯光、音效、妆造的调整和尝试持续到观众进来的最后一刻。累，但也被感动着，惊喜着，探索着，尝试着。',
      '说一句有点"剧中剧"的话：在这个剧组中，其实每一位剧务编导和演员都是"樱"。因为如果你要问她们付出那么多的意义和原因是什么，她们大概会这么说——',
      '【仪式追求的是美，我想完成它，仅此而已。】',
    ],
    date: '☺️🥰 落笔 2024.11.23 记',
  },
  {
    id: 'fengsheng',
    year: '2026',
    title: '年度大戏《风声》',
    role: '饰 顾晓梦',
    images: [
      { src: '/drama-fs-1.jpg', alt: '《风声》排练厅合影' },
      { src: '/drama-fs-2.jpg', alt: '《风声》后台造型' },
      { src: '/drama-fs-3.jpg', alt: '《风声》舞台剧照' },
      { src: '/drama-fs-4.jpg', alt: '《风声》演出瞬间' },
      { src: '/drama-fs-5.jpg', alt: '《风声》舞蹈场景' },
      { src: '/drama-fs-6.jpg', alt: '《风声》双人对手戏' },
      { src: '/drama-fs-7.jpg', alt: '《风声》旗袍造型' },
      { src: '/drama-fs-8.jpg', alt: '《风声》舞蹈瞬间' },
    ],
    paragraphs: [
      '她和她的声音，是愈演愈烈的风声。',
      '一群人，三个月，毫无功利地只做一件事。昨天在最后一场演出前，在黑漆漆的幕后候场才发现今天是三八妇女节。想起三个月前的圣诞假从上海匆匆赶来排练，那一次初读全部的剧本；想起大家在每一个排练日的清晨微肿的双眼、捋不顺的舌头和台词；想起很多次讨论音乐，从串场到舞蹈再到谢幕，最后选出来的音乐每一次听都眼含泪水、热血澎湃；每一场舞美从一个灵感落地到每一帧动作与气息，再融入每一束灯光里。在这里，每一个演员和剧务都不容小觑——从剧该怎么排、怎么排得好看，到怎么宣传、海报和票根该如何制作，再到每一把椅子该如何安装、音效和灯光怎么配合演员和台词、上下场的道具怎么搬放……',
      '最后 70 分钟的剧，最后那些或感动或震撼的场面，最后那个娇媚可爱的小年、圆滑又决绝的火火、悲壮的国国、心狠手辣的香香和川川，还有惺惺相惜的玉梦，就这样展示在大家面前。',
      '我们不是专业的演员，我们的剧并不完美，我们收获不了什么世俗的"成果"，我们演的角色可能也并不满足所有人的期待……',
      '但我知道，在晓梦说出"我明白了……老鬼老枪是一种精神，一种信仰"的时候；在谢幕时深深鞠躬、掌声热烈响起时；在演出后睡了安稳的觉，却在结束后睡不着、脑子里一直回荡着玉姐和晓梦的呼喊声时；在看到老师们、我的爸爸妈妈妹妹们和朋友们来支持我，看到大家用心真诚的文字反馈时……',
      '我知道，在三八妇女节这天，晓梦和玉姐的使命完成了，我们的使命也许还在继续。',
    ],
    date: '—— 2026.3.8 记',
  },
]

export const nav = [
  { id: 'hero', label: '首页' },
  { id: 'about', label: '关于我' },
  { id: 'projects', label: '项目与实践' },
  { id: 'skills', label: '能力与技能' },
  { id: 'life', label: '生活与爱好' },
  { id: 'contact', label: '联系我' },
]
