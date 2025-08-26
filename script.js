// 根据图片更新的群管功能指令数据
const groupManagementCommands = [
    {
        command: '清屏',
        description: '执行命令后，屏幕上显示的信息将被顶上去',
        example: '清屏'
    },
    {
        command: '解@某人',
        description: '单独解除群内某个成员的禁言',
        example: '解@吃口理理 或者 解1867608'
    },
    {
        command: '踢@某人',
        description: '单独踢出群内某位成员，不加黑',
        example: '踢@吃口理理 或者 踢1867608'
    },
    {
        command: '踢黑@某人',
        description: '单独踢出群内某位成员，并加黑',
        example: '踢黑@吃口理理 或者 踢黑1867608'
    },
    {
        command: '撤以上+条数',
        description: '撤回该指令之前的消息，最多 100 条左右，不撤回管理员消息',
        example: '撤以上100【不加+号，不用空格】'
    },
    {
        command: '撤@某人 条数',
        description: '撤回某人最近发送的消息条数，最多 50 条，具体没测试',
        example: '撤@吃口理理50【注意空格】'
    },
    {
        command: '查身份@某人',
        description: '查询某人在机器人中的身份信息',
        example: '查身份@吃口理理'
    },
    {
        command: '全体禁言 / 全体解禁',
        description: '快捷设置全体禁言以及全体解禁',
        example: '全体禁言'
    },
    {
        command: '多群同踢+QQ',
        description: '踢出机器人所在群的某个人',
        example: '多群同踢1867608'
    },
    {
        command: '艾特全体+内容',
        description: '通过指令让机器人艾特全体并发送相关内容',
        example: '艾特全体今天晚上八点集合'
    },
    {
        command: '自身撤回+时间{秒}',
        description: '撤回机器人自己发送的内容，仅设置该指令之后的内容',
        example: '自身撤回 5{秒}'
    },
    {
        command: '延迟撤回+时间{秒}',
        description: '延迟撤回群内所有成员发送的信息，仅设置该指令之后的内容',
        example: '延迟撤回 5{秒}'
    },
    {
        command: '发公告+标题 内容',
        description: '通过机器人发送本群公告，仅本群负责人可用',
        example: '发公告语文作业 今天写 800 字作文'
    },
    {
        command: '退群撤回开 / 关',
        description: '设置退群消息撤回功能的启用与禁用',
        example: '退群撤回开'
    },
    {
        command: '静默模式开 / 关',
        description: '开启后机器人只工作不说话，关闭后机器人才会说话',
        example: '静默模式开'
    },
    {
        command: '图片群管开 / 关',
        description: '开启后将机器人的回复全部转换图片进行回复',
        example: '图片群管开'
    },
    {
        command: '表情回应开 / 关',
        description: '开启后机器人会根据群员发送表情包进行回复对应表情包',
        example: '表情回应开'
    },
    {
        command: '引用模式开 / 关',
        description: '开启后机器人会对相应的指令进行引用回复',
        example: '引用模式开'
    },
];

// 问答系统指令数据
const qaSystemCommands = [
    {
        command: '查模糊问',
        description: '查看本群所有模糊问的问题',
        example: '查模糊问'
    },
    {
        command: '查精准问',
        description: '查看本群所有精准问的问题',
        example: '查精准问'
    },
    {
        command: '删问答+问题',
        description: '删除本群某一个问答的问题',
        example: '删问答测试'
    },
    {
        command: '清空问答',
        description: '将本群所有问答全部清空',
        example: '清空问答'
    },
    {
        command: '清空模糊问',
        description: '仅清空本群的模糊问答',
        example: '清空模糊问'
    },
    {
        command: '清空精准问',
        description: '仅清空本群的精准问答',
        example: '清空精准问'
    },
    {
        command: '全局问答开 / 关',
        description: '开启全局问答的开关',
        example: '全局问答开 / 关'
    },
    {
        command: '问答功能开 / 关',
        description: '开启问答功能的开关',
        example: '问答功能开 / 关'
    },
    {
        command: '问答冷却+秒数',
        description: '设置问答问题的冷却，防止有人刷屏',
        example: '问答冷却5{秒}'
    },
    {
        command: '模糊问+问题#内容',
        description: '用于添加模糊问答',
        example: '模糊问你好#你好呀【图片】'
    },
    {
        command: '精准问+问题#内容',
        description: '用于添加精准问答',
        example: '精准问你好#你好呀【图片】'
    }
];

// 广告检测系统指令数据
const adDetectionCommands = [
    {
        command: '广告检测开 / 关',
        description: '开启或关闭广告检测功能',
        example: '广告检测开'
    },
    {
        command: '广告检测模式+模式名',
        description: '设置广告检测模式：严格、中等、宽松',
        example: '广告检测模式严格'
    },
    {
        command: '广告关键词+关键词',
        description: '添加广告关键词到检测列表',
        example: '广告关键词微信'
    },
    {
        command: '删除广告关键词+关键词',
        description: '从检测列表中删除指定关键词',
        example: '删除广告关键词微信'
    },
    {
        command: '查看广告关键词',
        description: '查看当前所有广告检测关键词',
        example: '查看广告关键词'
    },
    {
        command: '广告处理方式+方式',
        description: '设置检测到广告后的处理方式：删除、禁言、警告',
        example: '广告处理方式删除'
    },
    {
        command: '广告禁言时间+时间',
        description: '设置发广告后的禁言时间（单位：分钟）',
        example: '广告禁言时间30'
    },
    {
        command: '广告白名单+QQ号',
        description: '将指定QQ号添加到广告检测白名单',
        example: '广告白名单1867608'
    },
    {
        command: '删除广告白名单+QQ号',
        description: '从广告检测白名单中删除指定QQ号',
        example: '删除广告白名单1867608'
    },
    {
        command: '查看广告白名单',
        description: '查看当前所有广告检测白名单成员',
        example: '查看广告白名单'
    },
    {
        command: '广告检测统计',
        description: '查看广告检测的统计数据',
        example: '广告检测统计'
    },
    {
        command: '清空广告统计',
        description: '清空所有广告检测统计数据',
        example: '清空广告统计'
    },
    {
        command: '智能广告检测开 / 关',
        description: '开启或关闭基于AI的智能广告检测',
        example: '智能广告检测开'
    },
    {
        command: '图片广告检测开 / 关',
        description: '开启或关闭图片中的广告检测功能',
        example: '图片广告检测开'
    }
];

// 刷屏检测系统指令数据
const spamDetectionCommands = [
    {
        command: '刷屏检测开/关',
        description: '开启或关闭本群刷屏检测功能',
        example: '刷屏检测开'
    },
    {
        command: '刷屏撤回开/关',
        description: '开启或关闭本群转员刷屏被撤回功能',
        example: '刷屏撤回开'
    },
    {
        command: '刷屏提示开/关',
        description: '开启或关闭本群转员刷屏被提示功能',
        example: '刷屏提示开'
    },
    {
        command: '图片检测开/关',
        description: '这里刷屏的图片检测，不是单纯的发图就算刷',
        example: '图片检测开'
    },
    {
        command: '文本检测开/关',
        description: '这里刷屏的文本检测，不是单纯的文本就算刷',
        example: '文本检测开'
    },
    {
        command: '文本+秒数 条数',
        description: '设置文本几秒内允许发送几条，超出违罚',
        example: '文本3 5'
    },
    {
        command: '图片+秒数 条数',
        description: '设置图片几秒内允许发送几条，超出违罚',
        example: '图片5 3'
    },
    {
        command: '刷屏禁言+分钟',
        description: '设置刷屏会被禁言的时间',
        example: '刷屏禁言5'
    },
    {
        command: '字数禁言+字数',
        description: '设置超出多少字数会被禁言，限制群员文字长度',
        example: '字数禁言20'
    },
    {
        command: '字数撤回+字数',
        description: '设置超出多少字数会被撤回，限制群员文字长度',
        example: '字数撤回20'
    },
    {
        command: '行数禁言+字数',
        description: '设置超出多少行数会被禁言，限制群员文字行数',
        example: '行数禁言10'
    },
    {
        command: '行数撤回+字数',
        description: '设置超出多少行数会被撤回，限制群员文字行数',
        example: '行数撤回10'
    },
    {
        command: '累计踢出+次数',
        description: '连续超出累计次数会被踢出群聊',
        example: '累计踢出99'
    },
    {
        command: '累计禁言+次数 分钟',
        description: '连续超出累计次数会被禁言',
        example: '累计禁言99 1440'
    }
];

// 审核系统指令数据
const auditSystemCommands = [
    {
        command: 'Q龄检测+Q龄',
        description: '设置进入本群最低的Q龄',
        example: 'Q龄检测10'
    },
    {
        command: '等级检测+等级',
        description: '设置进入本群最低的QQ等级',
        example: '等级检测10'
    },
    {
        command: '入群询问开/关',
        description: '开启进入本群询问管理员，管理员同意可入群',
        example: '入群询问开'
    },
    {
        command: '入群审核开/关',
        description: '开启进入本群进行通过或拒绝',
        example: '入群审核开'
    },
    {
        command: '会员检测开/关',
        description: '检测进群本群成员是否是会员',
        example: '会员检测开'
    },
    {
        command: '昵称检测开/关',
        description: '开启本群的昵称检测，违规昵称不允许进群',
        example: '昵称检测开'
    },
    {
        command: '签名检测开/关',
        description: '开启本群的签名检测，违规签名不允许进群',
        example: '签名检测开'
    },
    {
        command: '名单检测开/关',
        description: '开启本群的名单检测，黑名单成员不允许进群',
        example: '名单检测开'
    },
    {
        command: '重复加群开/关',
        description: '开启本群的重复加群检测，二次加群不允许进群',
        example: '重复加群开'
    },
    {
        command: '性别检测开/关',
        description: '开启本群的性别检测，禁止的性别不允许进群',
        example: '性别检测开'
    },
    {
        command: '男拒绝开/关',
        description: '开启性别男的QQ进入本群，与性别检测一起用',
        example: '男拒绝开'
    },
    {
        command: '女拒绝开/关',
        description: '开启性别女的QQ进入本群，与性别检测一起用',
        example: '女拒绝开'
    },
    {
        command: '未知拒绝开/关',
        description: '开启性别未知的QQ进入本群，与性别检测一起用',
        example: '未知拒绝开'
    }
];

// 积分系统指令数据
const pointsSystemCommands = [
    {
        command: '查积分@某人',
        description: '查看某人的积分，不加艾特查自己',
        example: '查积分@吃口理理'
    },
    {
        command: '充积分+数量',
        description: '给自己充值积分100比例',
        example: '充积分200'
    },
    {
        command: '送积分+QQ+数量',
        description: '给某人送积分',
        example: '送积分1867608 200'
    },
    {
        command: '扣积分+QQ+数量',
        description: '扣除某个人的一定积分',
        example: '扣积分1867608 200'
    },
    {
        command: '全员送积分+数量',
        description: '给本群所有成员赠送一定数量积分',
        example: '全员送积分200'
    },
    {
        command: '全员扣积分+数量',
        description: '扣除本群所有成员一定数量积分',
        example: '全员扣积分200'
    },
    {
        command: '积分转让+QQ+数量',
        description: '将自己的积分转让给某人',
        example: '积分转让1867608 200'
    },
    {
        command: '积分排行',
        description: '查看本群积分排行榜',
        example: '积分排行'
    },
    {
        command: '积分商城',
        description: '积分商城用于兑换卡密等其他物品',
        example: '积分商城'
    },
    {
        command: '删签到@某人',
        description: '删除某人的签到记录',
        example: '删签到@吃口理理'
    }
];

// 积分开关指令数据
const pointsSwitchCommands = [
    {
        command: '积分系统开/关',
        description: '开启本群的积分系统功能',
        example: '积分系统开'
    },
    {
        command: '积分签到开/关',
        description: '开启本群的积分签到功能',
        example: '积分签到开'
    },
    {
        command: '积分兑换开/关',
        description: '开启本群的积分兑换功能',
        example: '积分兑换开'
    },
    {
        command: '积分充值开/关',
        description: '开启本群的积分充值功能',
        example: '积分充值开'
    },
    {
        command: '积分转让开/关',
        description: '开启本群的积分转让功能',
        example: '积分转让开'
    },
    {
        command: '全局积分开/关',
        description: '开启全局积分系统功能',
        example: '全局积分开'
    },
    {
        command: '发言积分开/关',
        description: '开启本群发言获得积分功能',
        example: '发言积分开'
    },
    {
        command: '邀请积分开/关',
        description: '开启本群邀请获得积分功能',
        example: '邀请积分开'
    },
    {
        command: '兑换上限提示开/关',
        description: '开启本群积分兑换上限提示功能',
        example: '兑换上限提示开'
    },
    {
        command: '限领上限提示开/关',
        description: '开启本群兑换物品限领提示功能',
        example: '限领上限提示开'
    },
    {
        command: '重签惩罚提示开/关',
        description: '开启本群的积分签到，重复签到惩罚功能',
        example: '重签惩罚提示开'
    },
    {
        command: '发言积分提示开/关',
        description: '开启本群的发言获得积分的提示功能',
        example: '发言积分提示开'
    },
    {
        command: '卡密邮箱发送开/关',
        description: '开启本群兑换的商品邮件发送通知',
        example: '卡密邮箱发送开'
    },
    {
        command: '卡密私聊发送开/关',
        description: '开启本群兑换的商品私聊发送通知',
        example: '卡密私聊发送开'
    }
];

// 积分设置指令数据
const pointsSettingsCommands = [
    {
        command: '积分设置',
        description: '设置积分系统的基本参数',
        example: '积分设置'
    },
    {
        command: '签到积分+数量',
        description: '设置签到获得的积分数量',
        example: '签到积分 10'
    },
    {
        command: '发言积分+数量',
        description: '设置发言获得的积分数量',
        example: '发言积分 5'
    },
    {
        command: '邀请积分+数量',
        description: '设置邀请人员获得的积分数量',
        example: '邀请积分 50'
    },
    {
        command: '每日签到上限+次数',
        description: '设置每日签到的最大次数',
        example: '每日签到上限 1'
    },
    {
        command: '积分转认手续费+百分比',
        description: '设置积分转让的手续费比例',
        example: '积分转认手续费 5'
    },
    {
        command: '最小转让积分+数量',
        description: '设置一次性转让的最小积分数量',
        example: '最小转让积分 10'
    },
    {
        command: '每日转让上限+数量',
        description: '设置每日积分转让的上限',
        example: '每日转让上限 1000'
    },
    {
        command: '积分兑换比例+比例',
        description: '设置积分与现金的兑换比例',
        example: '积分兑换比例 100:1'
    },
    {
        command: '重签惩罚积分+数量',
        description: '设置重复签到惩罚的积分数量',
        example: '重签惩罚积分 -20'
    }
];

// 卡密系统指令数据
const cardKeySystemCommands = [
    {
        command: '查未用卡密',
        description: '查看未使用的机器人卡密',
        example: '查未用卡密'
    },
    {
        command: '删已用卡密',
        description: '删除已经使用的机器人卡密',
        example: '删已用卡密'
    },
    {
        command: '删未用卡密',
        description: '删除未使用的机器人卡密',
        example: '删未用卡密'
    },
    {
        command: '删所有卡密',
        description: '删除已生成的所有机器人卡密',
        example: '删所有卡密'
    },
    {
        command: '生成+数量 天数',
        description: '生成一定天数的卡密数量',
        example: '生成10 30'
    }
];

// 头衔管理系统指令数据
const titleManagementCommands = [
    {
        command: '删头衔@某人',
        description: '删除某个人的头衔，限机器人已设置的头衔',
        example: '删头衔@吃口理理'
    },
    {
        command: '送头衔@某人 头衔',
        description: '给某个人设置头衔',
        example: '送头衔@吃口理理 群管用户'
    },
    {
        command: '查头衔到期',
        description: '查询头衔的到期时间，限机器人已设置的头衔',
        example: '查头衔到期'
    },
    {
        command: '清空头衔记录',
        description: '清空机器人已设置的头衔',
        example: '清空头衔记录'
    },
    {
        command: '查头衔禁词',
        description: '查询本群机器人头衔禁词，触发申请头衔失败',
        example: '查头衔禁词'
    },
    {
        command: '清空头衔禁词',
        description: '清空本群机器人头衔禁词',
        example: '清空头衔禁词'
    },
    {
        command: '加头衔禁词+内容',
        description: '给本群添加头衔禁词',
        example: '加头衔禁词管 君'
    },
    {
        command: '删头衔禁词+内容',
        description: '删除本群某个头衔禁词',
        example: '删头衔禁词管 君'
    },
    {
        command: '无头衔禁言开/关',
        description: '开启本群没有头衔的成员禁言，限机器人已设置的头衔',
        example: '无头衔禁言开'
    },
    {
        command: '无头衔踢回开/关',
        description: '开启本群没有头衔的成员回应，限机器人已设置的头衔',
        example: '无头衔踢回开'
    },
    {
        command: '无头衔提示开/关',
        description: '开启本群没有头衔的成员的提示，限机器人已设置的头衔',
        example: '无头衔提示开'
    },
    {
        command: '无头衔禁言时间+分钟',
        description: '设置本群没有头衔的成员禁言时间',
        example: '无头衔禁言时间 10'
    },
    {
        command: '自助申请头衔开/关',
        description: '开启本群成员自助申请头衔，可驳机器人已设',
        example: '自助申请头衔开'
    },
    {
        command: '自助申请价格+金额',
        description: '设置本群自助申请头衔的价格',
        example: '自助申请价格 5'
    },
    {
        command: '自助申请方式永久/按月',
        description: '设置本群成员自助申请头衔是永久的还是一个月的',
        example: '自助申请方式永久'
    },
    {
        command: '申请头衔 头衔 时长(月)',
        description: '本群成员自助申请头衔发送的指令，单位：【月】',
        example: '申请头衔 群管用户 1(月)'
    },
    {
        command: '临时头衔@某人 头衔 时长',
        description: '负责人临时给某人设置头衔',
        example: '临时头衔@某人 群管用户 2'
    }
];

// 管理设置系统指令数据
const managementSettingsCommands = [
    {
        command: '上管@某人',
        description: '给本群成员设置为群管理员',
        example: '上管@吃口理理'
    },
    {
        command: '下管@某人',
        description: '下撒本群成员的群管理员设置',
        example: '下管@吃口理理'
    },
    {
        command: '超管列表',
        description: '查看机器人的超管列表，超管可设机器人',
        example: '超管列表'
    },
    {
        command: '查管理到期',
        description: '查看本群管理员的到期时间',
        example: '查管理到期'
    },
    {
        command: '添加超管@某人',
        description: '添加某人为机器人的超管，超管可设机器人功能',
        example: '添加超管@吃口理理'
    },
    {
        command: '删除超管@某人',
        description: '删除某人的机器人超管身份',
        example: '删除超管@吃口理理'
    },
    {
        command: '申请管理开/关',
        description: '开启本群成员自助申请管理员',
        example: '申请管理开'
    },
    {
        command: '管理价格+金额',
        description: '设置申请本群管理员的价格',
        example: '管理价格5'
    },
    {
        command: '申请管理+时长',
        description: '设置申请本群管理员的时长',
        example: '申请管理1'
    }
];

// 名片管理系统指令数据
const businessCardCommands = [
    {
        command: '入群改名开/关',
        description: '开启新人进群后是否改名',
        example: '入群改名开'
    },
    {
        command: '发言改名开/关',
        description: '开启群员发言后是否改名',
        example: '发言改名开'
    },
    {
        command: '改名提示开/关',
        description: '开启群员改名后发言的提示，群员发言检测',
        example: '改名提示开'
    },
    {
        command: '过滤字符开/关',
        description: '开启群员昵称中字符过滤',
        example: '过滤字符开'
    },
    {
        command: '名片锁定开/关',
        description: '开启群员新名片锁定，群员不可更改',
        example: '名片锁定开'
    },
    {
        command: '格式男+格式',
        description: '设置群员男的昵称格式',
        example: '格式男皇室^[昵称]'
    },
    {
        command: '格式女+格式',
        description: '设置群员女的昵称格式',
        example: '格式女皇室^[昵称]'
    },
    {
        command: '格式未知+格式',
        description: '设置群员未知的昵称格式',
        example: '格式未知皇室^[昵称]'
    },
    {
        command: '清空名片记录',
        description: '清空群员在本群的名片记录',
        example: '清空名片记录'
    },
    {
        command: '删记录@某人',
        description: '删除本群某个人的名片记录',
        example: '删记录@皇室1867608'
    },
    {
        command: '改名片@某人 新名片',
        description: '记录某个人的新名片',
        example: '改名片@吃口理理 皇室'
    },
    {
        command: '违规检测开/关',
        description: '开启本群违规昵称检测',
        example: '违规检测开'
    },
    {
        command: '踢出违规开/关',
        description: '开启昵称违规后被踢出群聊检测',
        example: '踢出违规开'
    },
    {
        command: '检测间隔+分钟',
        description: '设置检测昵称是否违规的时间',
        example: '检测间隔5'
    },
    {
        command: '昵称词+违禁词',
        description: '设置昵称的违规词，多个用空格',
        example: '昵称词你 我 他 她'
    },
    {
        command: '设置违规名片+名片',
        description: '设置检测到违规昵称后，统一修改的名片',
        example: '设置违规名片违规名片请修改'
    }
];

// 人机验证系统指令数据
const humanVerificationCommands = [
    {
        command: '免验证+QQ',
        description: '设置不需要验证的QQ',
        example: '免验证1867608'
    },
    {
        command: '验证码开/关',
        description: '开启本群验证功能，输入正确验证码才会被踢',
        example: '验证码开'
    },
    {
        command: '数字/混合/算法验证',
        description: '设置本群验证码类型',
        example: '算法验证'
    },
    {
        command: '验证次数+次数',
        description: '设置输入验证码的次数，超出错误次数踢出群聊',
        example: '验证次数5'
    },
    {
        command: '验证时间+分钟',
        description: '设置多长时间，输入正确验证码，否则踢出',
        example: '验证时间10'
    },
    {
        command: '验证成功提示开/关',
        description: '开启本群验证成功的提示功能',
        example: '验证成功提示开'
    },
    {
        command: '验证超时提示开/关',
        description: '开启本群验证超时的提示功能',
        example: '验证超时提示开'
    },
    {
        command: '强制公告开/关',
        description: '开启本群阅读公告，才能正常聊天的功能',
        example: '强制公告开'
    },
    {
        command: '公告禁言+分钟',
        description: '设置阅读公告禁言的时间，与公告检测一起使用',
        example: '公告禁言5'
    },
    {
        command: '公告检测+分钟',
        description: '设置多长时间阅读完公告，否则踢出群聊',
        example: '公告检测10'
    },
    {
        command: '发言检测开/关',
        description: '开启本群发言检测功能，规定时间未发言踢出',
        example: '发言检测开'
    },
    {
        command: '发言时间+分钟',
        description: '设置多长时间内发言',
        example: '发言时间5'
    },
    {
        command: '人数控制开/关',
        description: '开启本群人数控制功能，优先踢出最早不发言者',
        example: '人数控制开'
    },
    {
        command: '设置人数+数量',
        description: '设置本群最多保留多少人，超出踢出',
        example: '设置人数1999'
    },
    {
        command: '入群禁言开/关',
        description: '开启本群进群禁言功能，可与发言检测一起使用',
        example: '入群禁言开'
    },
    {
        command: '入群禁言+分钟',
        description: '设置进群后禁言多久，时间低于发言时间最好',
        example: '入群禁言3'
    },
    {
        command: '入群付费开/关',
        description: '开区本群进群收费功能',
        example: '入群付费开'
    },
    {
        command: '入群金额+金额',
        description: '设置本群进群付费金额',
        example: '入群金额15'
    },
    {
        command: '付费禁言+分钟',
        description: '设置未付费禁言的时间，付费后自动解开',
        example: '付费禁言43200'
    }
];

// 定时任务系统指令数据
const scheduledTaskCommands = [
    {
        command: '查定时+序号',
        description: '查看某个定时任务的内容',
        example: '查定时2'
    },
    {
        command: '查循环+序号',
        description: '查看某个循环任务的内容',
        example: '查循环1'
    },
    {
        command: '删定时+序号',
        description: '删除本群某个定时任务',
        example: '删定时1'
    },
    {
        command: '删循环+序号',
        description: '删除本群某个循环任务',
        example: '删循环2'
    },
    {
        command: '定时任务列表',
        description: '查看本群定时任务列表',
        example: '定时任务列表'
    },
    {
        command: '循环任务列表',
        description: '查看本群循环任务列表',
        example: '循环任务列表'
    },
    {
        command: '定时任务开/关',
        description: '开启本群定时任务功能',
        example: '定时任务开'
    },
    {
        command: '循环任务开/关',
        description: '开启本群循环任务功能',
        example: '循环任务开'
    },
    {
        command: '循环任务 间隔 内容',
        description: '给本群添加定时任务',
        example: '循环任务 30 大家好'
    },
    {
        command: '定时任务 小时 分钟 内容',
        description: '给本群添加循环任务',
        example: '定时任务 7 30 [全体禁言]123'
    }
];

// 提示系统指令数据
const promptSystemCommands = [
    {
        command: '入群欢迎开/关',
        description: '开启本群入群欢迎功能',
        example: '入群欢迎开'
    },
    {
        command: '邀请提示开/关',
        description: '开启本群邀请提示的功能',
        example: '邀请提示开'
    },
    {
        command: '入群私聊开/关',
        description: '开启本群入群私聊成员功能',
        example: '入群私聊开'
    },
    {
        command: '退群提示开/关',
        description: '开启本群成员退群提示功能',
        example: '退群提示开'
    },
    {
        command: '踢出提示开/关',
        description: '开启本群成员被踢出的提示功能',
        example: '踢出提示开'
    },
    {
        command: '管理变动开/关',
        description: '开启本群管理员【上、下】提示功能',
        example: '管理变动开'
    },
    {
        command: '防撤提示开/关',
        description: '开启本群成员撤回消息提示功能',
        example: '防撤提示开'
    },
    {
        command: '防撤转发开/关',
        description: '将成员自主回的消息转发给某人',
        example: '防撤转发开'
    },
    {
        command: '欢迎提示词+内容',
        description: '设置本群的欢迎提示语',
        example: '欢迎提示词+内容'
    },
    {
        command: '邀请提示词+内容',
        description: '设置本群的邀请提示语',
        example: '邀请提示词+内容'
    },
    {
        command: '私聊提示词+内容',
        description: '设置本群的私聊提示语',
        example: '私聊提示词+内容'
    },
    {
        command: '退群提示词+内容',
        description: '设置本群成员自主退群的提示语',
        example: '退群提示词+内容'
    },
    {
        command: '踢出提示词+内容',
        description: '设置本群成员被踢提示语',
        example: '踢出提示词+内容'
    }
];

// 发言统计系统指令数据
const speechStatsCommands = [
    {
        command: '查发言',
        description: '查询自己的发言数据统计',
        example: '查发言'
    },
    {
        command: '发言日榜',
        description: '查看今天群里的发言排行',
        example: '发言日榜'
    },
    {
        command: '发言周榜',
        description: '查看本周群里的发言排行',
        example: '发言周榜'
    },
    {
        command: '发言月榜',
        description: '查看本月群里的发言排行',
        example: '发言月榜'
    },
    {
        command: '重置日榜',
        description: '重置今天群里的发言排行',
        example: '重置日榜'
    },
    {
        command: '重置周榜',
        description: '重置本周群里的发言排行',
        example: '重置周榜'
    },
    {
        command: '重置月榜',
        description: '重置本月群里的发言排行',
        example: '重置月榜'
    },
    {
        command: '查发言@某人',
        description: '查询某个人的发言数据统计',
        example: '查发言@吃口理理'
    },
    {
        command: '重置统计@某人',
        description: '重置某个人的发言数据统计',
        example: '重置统计@吃口理理'
    }
];

// 清人系统指令数据
const clearSystemCommands = [
    {
        command: '查重+群号',
        description: '查询本群和别的群出现重复的成员',
        example: '查重1867608'
    },
    {
        command: '踢重+群号',
        description: '踢出本群和别的群出现重复的成员',
        example: '踢重1867608'
    },
    {
        command: '查不良成员',
        description: '查询本群打卡账号不良的成员',
        example: '查不良成员'
    },
    {
        command: '踢不良成员',
        description: '踢出本群打卡账号不良的成员',
        example: '踢不良成员'
    },
    {
        command: '查等级小于+等级',
        description: '查询本群QQ等级低于某个等级的数量',
        example: '查等级小于20'
    },
    {
        command: '踢等级小于+等级',
        description: '踢出本群QQ等级低于某个等级的数量',
        example: '踢等级小于20'
    },
    {
        command: '查入群小于+天数',
        description: '查询本群进群天数小于几天的数量',
        example: '查入群小于5'
    },
    {
        command: '踢入群小于+天数',
        description: '踢出本群进群天数小于几天的数量',
        example: '踢入群小于5'
    },
    {
        command: '查未发言大于+天数',
        description: '查询本群未发言天数大于几天的数量',
        example: '查未发言大于10'
    },
    {
        command: '踢未发言大于+天数',
        description: '踢出本群未发言天数大于几天的数量',
        example: '踢未发言大于10'
    }
];

// 抽奖系统指令数据
const lotterySystemCommands = [
    {
        command: '奖品列表',
        description: '查看当前所有可用的抽奖奖品',
        example: '奖品列表'
    },
    {
        command: '开启抽奖',
        description: '开启群内抽奖活动',
        example: '开启抽奖'
    },
    {
        command: '关闭抽奖',
        description: '关闭群内抽奖活动',
        example: '关闭抽奖'
    },
    {
        command: '随机抽奖',
        description: '随机抽取幸运用户获得奖品',
        example: '随机抽奖'
    },
    {
        command: '一开一抽',
        description: '开启一开一抽模式，每次抽奖后自动开启下一轮',
        example: '一开一抽'
    },
    {
        command: '我的奖品',
        description: '查看自己获得的所有奖品记录',
        example: '我的奖品'
    },
    {
        command: '每日抽奖次数+次数',
        description: '设置每个用户每日可抽奖的次数',
        example: '每日抽奖次数3'
    },
    {
        command: '设置奖与积分+数量',
        description: '设置参与抽奖所需的积分数量',
        example: '设置奖与积分100'
    }
];

// 发卡系统指令数据
const cardDistributionCommands = [
    {
        command: '商品分类',
        description: '查看或管理商品分类信息',
        example: '商品分类'
    },
    {
        command: '商品列表',
        description: '查看所有可用商品列表',
        example: '商品列表'
    },
    {
        command: '查分类+ID',
        description: '根据ID查看具体分类信息',
        example: '查分类1'
    },
    {
        command: '查商品+ID',
        description: '根据ID查看具体商品信息',
        example: '查商品1'
    },
    {
        command: '删分类+分类ID',
        description: '删除指定的商品分类',
        example: '删分类1'
    },
    {
        command: '删商品+商品ID',
        description: '删除指定的商品',
        example: '删商品1'
    },
    {
        command: '发卡系统开/关',
        description: '开启或关闭发卡系统功能',
        example: '发卡系统开'
    },
    {
        command: '邮箱提醒开/关',
        description: '开启或关闭邮箱提醒功能',
        example: '邮箱提醒开'
    },
    {
        command: '设置域名+域名',
        description: '设置发卡系统的域名地址',
        example: '设置域名shop.example.com'
    },
    {
        command: '设置账号+商户ID',
        description: '设置发卡系统的商户账号',
        example: '设置账号123456'
    },
    {
        command: '设置密钥+密钥',
        description: '设置发卡系统的接口密钥',
        example: '设置密钥abc123'
    }
];

// 黑白名单系统指令数据
const blackWhiteListCommands = [
    {
        command: '查黑名单',
        description: '查看本群的黑名单',
        example: '查黑名单'
    },
    {
        command: '查白名单',
        description: '查看本群的白名单',
        example: '查白名单'
    },
    {
        command: '查全局黑',
        description: '查看全局的黑名单，仅机器主人可用',
        example: '查全局黑'
    },
    {
        command: '查全局白',
        description: '查看全局的白名单，仅机器主人可用',
        example: '查全局白'
    },
    {
        command: '查名单@某人',
        description: '查询某个是黑名单还是白名单',
        example: '查名单@吃口理理'
    },
    {
        command: '踢黑名单',
        description: '踢出本群所有黑名单成员，不用等待宣告在踢出',
        example: '踢黑名单'
    },
    {
        command: '踢全局黑',
        description: '踢出全局所有黑名单成员，不用等待宣告在踢出',
        example: '踢全局黑'
    },
    {
        command: '清空黑/白',
        description: '清空本群黑/白名单记录，进行重新记录',
        example: '清空黑'
    },
    {
        command: '清空全局黑/白',
        description: '清空全局黑/白名单记录，进行重新记录',
        example: '清空全局黑'
    },
    {
        command: '加/删黑@某人',
        description: '把某个人加入本群黑名单，或者删除黑名记录',
        example: '加黑@吃口理理'
    },
    {
        command: '加/删白@某人',
        description: '把某个人加入本群白名单，或者删除白名记录',
        example: '加白@吃口理理'
    },
    {
        command: '加/删全局黑@某人',
        description: '把某个人加入全局黑名单，或者删除黑名记录',
        example: '加全局黑@吃口理理'
    },
    {
        command: '加/删全局白@某人',
        description: '把某个人加入全局白名单，或者删除白名记录',
        example: '加全局白@吃口理理'
    },
    {
        command: '踢出加黑开/关',
        description: '开启或关闭被踢出成员并加入黑名单',
        example: '踢出加黑开'
    },
    {
        command: '退群加黑开/关',
        description: '开启或关闭被群成员自动退群成员并加入黑名单',
        example: '退群加黑开'
    },
    {
        command: '踢出加全局黑开/关',
        description: '开启或关闭对全局被踢出成员并加入黑名单',
        example: '踢出加全局黑开'
    },
    {
        command: '退群加全局黑开/关',
        description: '开启或关闭对全局自动退群成员并加入黑名单',
        example: '退群加全局黑开'
    }
];

// DOM元素
let commandSearch, commandsTableBody, qaSearch, qaTableBody, backToTopButton;

// 全局模糊搜索数据
const allCommands = [
    ...groupManagementCommands.map(cmd => ({...cmd, category: '群管功能', page: 'group-management'})),
    ...qaSystemCommands.map(cmd => ({...cmd, category: '问答系统', page: 'qa-system'})),
    ...adDetectionCommands.map(cmd => ({...cmd, category: '广告检测', page: 'ad-detection'})),
    ...auditSystemCommands.map(cmd => ({...cmd, category: '审核系统', page: 'audit-system'})),
    ...scheduledTaskCommands.map(cmd => ({...cmd, category: '定时任务', page: 'scheduled-task'})),
    ...promptSystemCommands.map(cmd => ({...cmd, category: '提示系统', page: 'prompt-system'})),
    ...speechStatsCommands.map(cmd => ({...cmd, category: '发言统计', page: 'speech-stats'})),
    ...clearSystemCommands.map(cmd => ({...cmd, category: '清人系统', page: 'clear-system'})),
    ...lotterySystemCommands.map(cmd => ({...cmd, category: '抽奖系统', page: 'lottery-system'})),
    ...cardDistributionCommands.map(cmd => ({...cmd, category: '发卡系统', page: 'card-distribution'})),
    ...pointsSystemCommands.map(cmd => ({...cmd, category: '积分系统', page: 'points-system'})),
    ...pointsSwitchCommands.map(cmd => ({...cmd, category: '积分开关', page: 'points-switch'})),
    ...pointsSettingsCommands.map(cmd => ({...cmd, category: '积分设置', page: 'points-settings'})),
    ...cardKeySystemCommands.map(cmd => ({...cmd, category: '卡密系统', page: 'card-key-system'})),
    ...titleManagementCommands.map(cmd => ({...cmd, category: '头衔管理', page: 'title-management'})),
    ...managementSettingsCommands.map(cmd => ({...cmd, category: '管理设置', page: 'management-settings'})),
    ...businessCardCommands.map(cmd => ({...cmd, category: '名片管理', page: 'business-card'})),
    ...humanVerificationCommands.map(cmd => ({...cmd, category: '人机验证', page: 'human-verification'})),
    ...blackWhiteListCommands.map(cmd => ({...cmd, category: '黑白名单', page: 'blackwhite-list'})),
    ...spamDetectionCommands.map(cmd => ({...cmd, category: '刷屏检测', page: 'spam-detection'}))
];

// 获取页面图标的辅助函数
function getPageIcon(page) {
    switch(page) {
        case 'group-management':
            return 'fa-users-cog';
        case 'qa-system':
            return 'fa-question-circle';
        case 'ad-detection':
            return 'fa-shield-alt';
        case 'audit-system':
            return 'fa-clipboard-check';
        case 'clear-system':
            return 'fa-user-minus';
        case 'lottery-system':
            return 'fa-gift';
        case 'card-distribution':
            return 'fa-credit-card';
        case 'speech-stats':
            return 'fa-chart-bar';
        case 'prompt-system':
            return 'fa-bell';
        case 'scheduled-task':
            return 'fa-clock';
        case 'points-system':
            return 'fa-coins';
        case 'points-switch':
            return 'fa-toggle-on';
        case 'points-settings':
            return 'fa-cogs';
        case 'card-key-system':
            return 'fa-key';
        case 'title-management':
            return 'fa-crown';
        case 'management-settings':
            return 'fa-user-cog';
        case 'business-card':
            return 'fa-id-card';
        case 'human-verification':
            return 'fa-user-check';
        case 'blackwhite-list':
            return 'fa-list-alt';
        case 'spam-detection':
            return 'fa-exclamation-triangle';
        default:
            return 'fa-cog';
    }
}

// 导航栏搜索功能
function toggleSearch() {
    const navSearchBox = document.getElementById('navSearchBox');
    const navSearchResults = document.getElementById('navSearchResults');
    
    if (navSearchBox.classList.contains('show')) {
        // 关闭搜索框
        navSearchBox.classList.remove('show');
        navSearchResults.classList.remove('show');

        // 延迟隐藏以等待动画完成
        setTimeout(() => {
            if (!navSearchBox.classList.contains('show')) {
                navSearchBox.style.display = 'none';
                navSearchResults.style.display = 'none';
            }
        }, 300);
    } else {
        // 显示搜索框
        navSearchBox.style.display = 'flex';
        navSearchResults.style.display = 'block';
        
        // 强制重绘以确保 display 属性生效
        navSearchBox.offsetHeight;
        
        // 添加动画类
        navSearchBox.classList.add('show');
        
        // 聚焦到输入框
        setTimeout(() => {
            document.getElementById('navGlobalSearch').focus();
        }, 100);
    }
}

function clearNavSearch() {
    const navGlobalSearch = document.getElementById('navGlobalSearch');
    const navSearchClear = document.getElementById('navSearchClear');
    const navSearchResults = document.getElementById('navSearchResults');
    
    if (navGlobalSearch) {
        navGlobalSearch.value = '';
        navSearchClear.style.display = 'none';
        navSearchResults.style.display = 'none';
        navGlobalSearch.focus();
    }
}

function initializeNavSearch() {
    const navGlobalSearch = document.getElementById('navGlobalSearch');
    const navSearchResults = document.getElementById('navSearchResults');
    const navSearchClear = document.getElementById('navSearchClear');
    
    if (!navGlobalSearch) return;
    
    navGlobalSearch.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        
        if (query.length === 0) {
            hideNavSearchResults();
            return;
        }
        
        // 显示清除按钮
        if (navSearchClear) {
            navSearchClear.style.display = query.length > 0 ? 'block' : 'none';
        }
        
        // 执行模糊搜索
        const results = performFuzzySearch(query);
        displayNavSearchResults(results);
    });
    
    // 点击其他地方隐藏搜索结果
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-search')) {
            hideNavSearchResults();
            const navSearchBox = document.getElementById('navSearchBox');
            if (navSearchBox) {
                navSearchBox.style.display = 'none';
            }
        }
    });
}

// 模糊搜索功能
function performFuzzySearch(query) {
    return allCommands.filter(cmd => {
        const searchText = (cmd.command + ' ' + cmd.description + ' ' + cmd.example).toLowerCase();
        return searchText.includes(query.toLowerCase());
    }).slice(0, 10); // 限制返回10个结果
}

function displayNavSearchResults(results) {
    const navSearchResults = document.getElementById('navSearchResults');
    if (!navSearchResults) return;
    
    if (results.length === 0) {
        navSearchResults.innerHTML = `
            <div class="search-no-results">
                <i class="fas fa-search"></i>
                <div>没有找到相关指令</div>
            </div>
        `;
    } else {
        navSearchResults.innerHTML = results.map(result => `
            <div class="search-result-item" onclick="goToCommandPageAndClose('${result.page}', '${result.command}')">
                <div class="search-result-icon">
                    <i class="fas ${getPageIcon(result.page)}"></i>
                </div>
                <div class="search-result-content">
                    <div class="search-result-title">${result.command}</div>
                    <div class="search-result-description">${result.description}</div>
                    <div class="search-result-category">${result.category}</div>
                </div>
            </div>
        `).join('');
    }
    
    // 显示结果并添加动画
    navSearchResults.style.display = 'block';
    navSearchResults.offsetHeight; // 强制重绘
    navSearchResults.classList.add('show');
}

function hideNavSearchResults() {
    const navSearchResults = document.getElementById('navSearchResults');
    const navSearchClear = document.getElementById('navSearchClear');
    
    if (navSearchResults) {
        navSearchResults.classList.remove('show');
        setTimeout(() => {
            if (!navSearchResults.classList.contains('show')) {
                navSearchResults.style.display = 'none';
            }
        }, 300);
    }
    if (navSearchClear) {
        navSearchClear.style.display = 'none';
    }
}

function goToCommandPageAndClose(page, command) {
    // 隐藏导航栏搜索
    const navSearchBox = document.getElementById('navSearchBox');
    const navSearchResults = document.getElementById('navSearchResults');
    
    if (navSearchBox) navSearchBox.style.display = 'none';
    if (navSearchResults) navSearchResults.style.display = 'none';
    
    // 跳转到相应页面
    showPage(page);
    
    // 稍后在页面中搜索对应指令
    setTimeout(() => {
        let searchInput;
        if (page === 'group-management') {
            searchInput = document.getElementById('commandSearch');
        } else if (page === 'qa-system') {
            searchInput = document.getElementById('qaSearch');
        } else if (page === 'ad-detection') {
            searchInput = document.getElementById('adSearch');
        } else if (page === 'audit-system') {
            searchInput = document.getElementById('auditSystemSearch');
        } else if (page === 'clear-system') {
            searchInput = document.getElementById('clearSystemSearch');
        } else if (page === 'card-distribution') {
            searchInput = document.getElementById('cardDistributionSearch');
        } else if (page === 'speech-stats') {
            searchInput = document.getElementById('speechStatsSearch');
        } else if (page === 'prompt-system') {
            searchInput = document.getElementById('promptSystemSearch');
        } else if (page === 'scheduled-task') {
            searchInput = document.getElementById('scheduledTaskSearch');
        } else if (page === 'business-card') {
            searchInput = document.getElementById('businessCardSearch');
        } else if (page === 'human-verification') {
            searchInput = document.getElementById('humanVerificationSearch');
        } else if (page === 'blackwhite-list') {
            searchInput = document.getElementById('blackwhiteSearch');
        } else if (page === 'spam-detection') {
            searchInput = document.getElementById('spamSearch');
        }
        
        if (searchInput) {
            searchInput.value = command;
            searchInput.dispatchEvent(new Event('input'));
            
            // 滚动到表格位置
            const tableContainer = document.querySelector('.commands-table-container');
            if (tableContainer) {
                tableContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, 300);
}
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebar && overlay && mainContent) {
        const isOpen = sidebar.classList.contains('open');
        
        if (isOpen) {
            // 关闭侧边栏
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
            mainContent.classList.remove('sidebar-open');
        } else {
            // 打开侧边栏
            sidebar.classList.add('open');
            overlay.classList.add('visible');
            mainContent.classList.add('sidebar-open');
        }
    }
}

// 更新侧边栏导航状态
function updateSidebarNavigation(activePageId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // 根据页面ID设置对应的导航项为活动状态
    let targetSelector = '';
    switch(activePageId) {
        case 'home-page':
            targetSelector = '.nav-link[onclick="showHome()"]';
            break;
        case 'group-management-page':
            targetSelector = '.nav-link[onclick="showPage(\'group-management\')"]';
            break;
        case 'qa-system-page':
            targetSelector = '.nav-link[onclick="showPage(\'qa-system\')"]';
            break;
        case 'ad-detection-page':
            targetSelector = '.nav-link[onclick="showPage(\'ad-detection\')"]';
            break;
        case 'audit-system-page':
            targetSelector = '.nav-link[onclick="showPage(\'audit-system\')"]';
            break;
        case 'clear-system-page':
            targetSelector = '.nav-link[onclick="showPage(\'clear-system\')"]';
            break;
        case 'card-distribution-page':
            targetSelector = '.nav-link[onclick="showPage(\'card-distribution\')"]';
            break;
        case 'speech-stats-page':
            targetSelector = '.nav-link[onclick="showPage(\'speech-stats\')"]';
            break;
        case 'prompt-system-page':
            targetSelector = '.nav-link[onclick="showPage(\'prompt-system\')"]';
            break;
        case 'scheduled-task-page':
            targetSelector = '.nav-link[onclick="showPage(\'scheduled-task\')"]';
            break;
        case 'points-system-page':
            targetSelector = '.nav-link[onclick="showPage(\'points-system\')"]';
            break;
        case 'points-switch-page':
            targetSelector = '.nav-link[onclick="showPage(\'points-switch\')"]';
            break;
        case 'points-settings-page':
            targetSelector = '.nav-link[onclick="showPage(\'points-settings\')"]';
            break;
        case 'card-key-system-page':
            targetSelector = '.nav-link[onclick="showPage(\'card-key-system\')"]';
            break;
        case 'title-management-page':
            targetSelector = '.nav-link[onclick="showPage(\'title-management\')"]';
            break;
        case 'management-settings-page':
            targetSelector = '.nav-link[onclick="showPage(\'management-settings\')"]';
            break;
        case 'business-card-page':
            targetSelector = '.nav-link[onclick="showPage(\'business-card\')"]';
            break;
        case 'human-verification-page':
            targetSelector = '.nav-link[onclick="showPage(\'human-verification\')"]';
            break;
        case 'blackwhite-list-page':
            targetSelector = '.nav-link[onclick="showPage(\'blackwhite-list\')"]';
            break;
        case 'spam-detection-page':
            targetSelector = '.nav-link[onclick="showPage(\'spam-detection\')"]';
            break;
    }
    
    if (targetSelector) {
        const targetLink = document.querySelector(targetSelector);
        if (targetLink) {
            targetLink.classList.add('active');
        }
    }
}

// 页面切换功能（更新版本）
function showPage(pageId) {
    // 隐藏所有页面
    const pages = document.querySelectorAll('.page-container');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // 显示目标页面
    const targetPage = document.getElementById(pageId+'-page');
    if (targetPage) {
        targetPage.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // 显示导航栏首页按钮
        const homeBtn = document.getElementById('homeBtn');
        if (homeBtn) {
            homeBtn.style.display = 'flex';
        }
        
        // 更新侧边栏导航状态
        updateSidebarNavigation(pageId+'-page');
        
        // 在移动端自动关闭侧边栏
        if (window.innerWidth <= 768) {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            const mainContent = document.querySelector('.main-content');
            if (sidebar && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                if (overlay) overlay.classList.remove('visible');
                if (mainContent) mainContent.classList.remove('sidebar-open');
            }
        }
        
        // 如果是群管功能页面，渲染表格数据
        if (pageId === 'group-management') {
            setTimeout(() => {
                renderTable(groupManagementCommands);
            }, 100);
        } else if (pageId === 'qa-system') {
            setTimeout(() => {
                renderQATable(qaSystemCommands);
            }, 100);
        } else if (pageId === 'ad-detection') {
            setTimeout(() => {
                renderAdTable(adDetectionCommands);
            }, 100);
        } else if (pageId === 'audit-system') {
            setTimeout(() => {
                renderAuditSystemTable(auditSystemCommands);
            }, 100);
        } else if (pageId === 'clear-system') {
            setTimeout(() => {
                renderClearSystemTable(clearSystemCommands);
            }, 100);
        } else if (pageId === 'lottery-system') {
            setTimeout(() => {
                renderLotterySystemTable(lotterySystemCommands);
            }, 100);
        } else if (pageId === 'card-distribution') {
            setTimeout(() => {
                renderCardDistributionTable(cardDistributionCommands);
            }, 100);
        } else if (pageId === 'speech-stats') {
            setTimeout(() => {
                renderSpeechStatsTable(speechStatsCommands);
            }, 100);
        } else if (pageId === 'prompt-system') {
            setTimeout(() => {
                renderPromptSystemTable(promptSystemCommands);
            }, 100);
        } else if (pageId === 'scheduled-task') {
            setTimeout(() => {
                renderScheduledTaskTable(scheduledTaskCommands);
            }, 100);
        } else if (pageId === 'points-system') {
            setTimeout(() => {
                renderPointsSystemTable(pointsSystemCommands);
            }, 100);
        } else if (pageId === 'points-switch') {
            setTimeout(() => {
                renderPointsSwitchTable(pointsSwitchCommands);
            }, 100);
        } else if (pageId === 'points-settings') {
            setTimeout(() => {
                renderPointsSettingsTable(pointsSettingsCommands);
            }, 100);
        } else if (pageId === 'card-key-system') {
            setTimeout(() => {
                renderCardKeySystemTable(cardKeySystemCommands);
            }, 100);
        } else if (pageId === 'title-management') {
            setTimeout(() => {
                renderTitleManagementTable(titleManagementCommands);
            }, 100);
        } else if (pageId === 'management-settings') {
            setTimeout(() => {
                renderManagementSettingsTable(managementSettingsCommands);
            }, 100);
        } else if (pageId === 'business-card') {
            setTimeout(() => {
                renderBusinessCardTable(businessCardCommands);
            }, 100);
        } else if (pageId === 'human-verification') {
            setTimeout(() => {
                renderHumanVerificationTable(humanVerificationCommands);
            }, 100);
        } else if (pageId === 'blackwhite-list') {
            setTimeout(() => {
                renderBlackWhiteTable(blackWhiteListCommands);
            }, 100);
        } else if (pageId === 'spam-detection') {
            setTimeout(() => {
                renderSpamTable(spamDetectionCommands);
            }, 100);
        }
    }
}

function showHome() {
    // 隐藏所有页面
    const pages = document.querySelectorAll('.page-container');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // 显示首页
    const homePage = document.getElementById('home-page');
    if (homePage) {
        homePage.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // 隐藏导航栏首页按钮
        const homeBtn = document.getElementById('homeBtn');
        if (homeBtn) {
            homeBtn.style.display = 'none';
        }
        
        // 更新侧边栏导航状态
        updateSidebarNavigation('home-page');
        
        // 在移动端自动关闭侧边栏
        if (window.innerWidth <= 768) {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            const mainContent = document.querySelector('.main-content');
            if (sidebar && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                if (overlay) overlay.classList.remove('visible');
                if (mainContent) mainContent.classList.remove('sidebar-open');
            }
        }
    }
}

// 渲染表格数据
function renderTable(commands, tableBody = null) {
    if (!tableBody) {
        tableBody = document.getElementById('commandsTableBody');
    }
    
    if (!tableBody) return;

    tableBody.innerHTML = '';

    commands.forEach(cmd => {
        const row = document.createElement('tr');

        // 处理示例文本中的特殊内容
        let exampleText = cmd.example;
        // 高亮【图片】标记
        exampleText = exampleText.replace(/【图片】/g, '<span class="highlight-content">【图片】</span>');
        // 高亮{秒}标记
        exampleText = exampleText.replace(/\{秒\}/g, '<span class="highlight-content">{秒}</span>');
        // 高亮【维护中】标记
        exampleText = exampleText.replace(/【维护中】/g, '<span class="highlight-content">【维护中】</span>');
        // 高亮【不加+号，不用空格】标记
        exampleText = exampleText.replace(/【不加 \+ 号，不用空格】/g, '<span class="highlight-content">【不加+号，不用空格】</span>');
        // 高亮【注意空格】标记
        exampleText = exampleText.replace(/【注意空格】/g, '<span class="highlight-content">【注意空格】</span>');

        row.innerHTML = `
            <td>
                <span class="command-text">${cmd.command}</span>
            </td>
            <td>${cmd.description}</td>
            <td>
                <span class="example-text">${exampleText}</span>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // 高亮QQ号码
    setTimeout(() => {
        const exampleCells = tableBody.querySelectorAll('td:last-child .example-text');
        exampleCells.forEach(cell => {
            let content = cell.innerHTML;
            // 高亮QQ号码
            content = content.replace(/(\d{9,11})/g, '<span class="qq-number">$1</span>');
            cell.innerHTML = content;
        });
    }, 50);
}

// 渲染问答系统表格
function renderQATable(commands) {
    const qaTableBody = document.getElementById('qaTableBody');
    renderTable(commands, qaTableBody);
}

// 渲染广告检测表格
function renderAdTable(commands) {
    const adTableBody = document.getElementById('adTableBody');
    renderTable(commands, adTableBody);
}

// 渲染审核系统表格
function renderAuditSystemTable(commands) {
    const auditSystemTableBody = document.getElementById('auditSystemTableBody');
    renderTable(commands, auditSystemTableBody);
}

// 渲染积分系统表格
function renderPointsSystemTable(commands) {
    const pointsSystemTableBody = document.getElementById('pointsSystemTableBody');
    renderTable(commands, pointsSystemTableBody);
}

// 渲染积分开关表格
function renderPointsSwitchTable(commands) {
    const pointsSwitchTableBody = document.getElementById('pointsSwitchTableBody');
    renderTable(commands, pointsSwitchTableBody);
}

// 渲染积分设置表格
function renderPointsSettingsTable(commands) {
    const pointsSettingsTableBody = document.getElementById('pointsSettingsTableBody');
    renderTable(commands, pointsSettingsTableBody);
}

// 渲染卡密系统表格
function renderCardKeySystemTable(commands) {
    const cardKeySystemTableBody = document.getElementById('cardKeySystemTableBody');
    renderTable(commands, cardKeySystemTableBody);
}

// 渲染头衔管理表格
function renderTitleManagementTable(commands) {
    const titleManagementTableBody = document.getElementById('titleManagementTableBody');
    renderTable(commands, titleManagementTableBody);
}

// 渲染管理设置表格
function renderManagementSettingsTable(commands) {
    const managementSettingsTableBody = document.getElementById('managementSettingsTableBody');
    renderTable(commands, managementSettingsTableBody);
}

// 渲染名片管理表格
function renderBusinessCardTable(commands) {
    const businessCardTableBody = document.getElementById('businessCardTableBody');
    renderTable(commands, businessCardTableBody);
}

// 渲染人机验证表格
function renderHumanVerificationTable(commands) {
    const humanVerificationTableBody = document.getElementById('humanVerificationTableBody');
    renderTable(commands, humanVerificationTableBody);
}

// 渲染黑白名单表格
function renderBlackWhiteTable(commands) {
    const blackwhiteTableBody = document.getElementById('blackwhiteTableBody');
    renderTable(commands, blackwhiteTableBody);
}

// 渲染刷屏检测表格
function renderSpamTable(commands) {
    const spamTableBody = document.getElementById('spamTableBody');
    renderTable(commands, spamTableBody);
}

// 搜索功能
function searchCommands(query) {
    const filteredCommands = groupManagementCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderTable(filteredCommands);
}

// 问答系统搜索功能
function searchQACommands(query) {
    const filteredCommands = qaSystemCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderQATable(filteredCommands);
}

// 广告检测搜索功能
function searchAdCommands(query) {
    const filteredCommands = adDetectionCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderAdTable(filteredCommands);
}

// 审核系统搜索功能
function searchAuditSystemCommands(query) {
    const filteredCommands = auditSystemCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderAuditSystemTable(filteredCommands);
}

// 积分系统搜索功能
function searchPointsSystemCommands(query) {
    const filteredCommands = pointsSystemCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderPointsSystemTable(filteredCommands);
}

// 积分开关搜索功能
function searchPointsSwitchCommands(query) {
    const filteredCommands = pointsSwitchCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderPointsSwitchTable(filteredCommands);
}

// 积分设置搜索功能
function searchPointsSettingsCommands(query) {
    const filteredCommands = pointsSettingsCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderPointsSettingsTable(filteredCommands);
}

// 卡密系统搜索功能
function searchCardKeySystemCommands(query) {
    const filteredCommands = cardKeySystemCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderCardKeySystemTable(filteredCommands);
}

// 头衔管理搜索功能
function searchTitleManagementCommands(query) {
    const filteredCommands = titleManagementCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderTitleManagementTable(filteredCommands);
}

// 管理设置搜索功能
function searchManagementSettingsCommands(query) {
    const filteredCommands = managementSettingsCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderManagementSettingsTable(filteredCommands);
}

// 名片管理搜索功能
function searchBusinessCardCommands(query) {
    const filteredCommands = businessCardCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderBusinessCardTable(filteredCommands);
}

// 人机验证搜索功能
function searchHumanVerificationCommands(query) {
    const filteredCommands = humanVerificationCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderHumanVerificationTable(filteredCommands);
}

// 黑白名单搜索功能
function searchBlackWhiteCommands(query) {
    const filteredCommands = blackWhiteListCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderBlackWhiteTable(filteredCommands);
}

// 渲染清人系统表格
function renderClearSystemTable(commands) {
    const clearSystemTableBody = document.getElementById('clearSystemTableBody');
    renderTable(commands, clearSystemTableBody);
}

// 渲染抽奖系统表格
function renderLotterySystemTable(commands) {
    const lotterySystemTableBody = document.getElementById('lotterySystemTableBody');
    renderTable(commands, lotterySystemTableBody);
}

// 渲染发卡系统表格
function renderCardDistributionTable(commands) {
    const cardDistributionTableBody = document.getElementById('cardDistributionTableBody');
    renderTable(commands, cardDistributionTableBody);
}

// 渲染发言统计表格
function renderSpeechStatsTable(commands) {
    const speechStatsTableBody = document.getElementById('speechStatsTableBody');
    renderTable(commands, speechStatsTableBody);
}

// 渲染提示系统表格
function renderPromptSystemTable(commands) {
    const promptSystemTableBody = document.getElementById('promptSystemTableBody');
    renderTable(commands, promptSystemTableBody);
}

// 渲染定时任务表格
function renderScheduledTaskTable(commands) {
    const scheduledTaskTableBody = document.getElementById('scheduledTaskTableBody');
    renderTable(commands, scheduledTaskTableBody);
}

// 清人系统搜索功能
function searchClearSystemCommands(query) {
    const filteredCommands = clearSystemCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderClearSystemTable(filteredCommands);
}

// 抽奖系统搜索功能
function searchLotterySystemCommands(query) {
    const filteredCommands = lotterySystemCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderLotterySystemTable(filteredCommands);
}

// 发卡系统搜索功能
function searchCardDistributionCommands(query) {
    const filteredCommands = cardDistributionCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderCardDistributionTable(filteredCommands);
}

// 发言统计搜索功能
function searchSpeechStatsCommands(query) {
    const filteredCommands = speechStatsCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderSpeechStatsTable(filteredCommands);
}

// 提示系统搜索功能
function searchPromptSystemCommands(query) {
    const filteredCommands = promptSystemCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderPromptSystemTable(filteredCommands);
}

// 定时任务搜索功能
function searchScheduledTaskCommands(query) {
    const filteredCommands = scheduledTaskCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderScheduledTaskTable(filteredCommands);
}

// 刷屏检测搜索功能
function searchSpamCommands(query) {
    const filteredCommands = spamDetectionCommands.filter(cmd =>
        cmd.command.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase()) ||
        cmd.example.toLowerCase().includes(query.toLowerCase())
    );
    renderSpamTable(filteredCommands);
}

// 初始化搜索功能
function initializeSearch() {
    commandSearch = document.getElementById('commandSearch');
    qaSearch = document.getElementById('qaSearch');
    const adSearch = document.getElementById('adSearch');
    const auditSystemSearch = document.getElementById('auditSystemSearch');
    const clearSystemSearch = document.getElementById('clearSystemSearch');
    const lotterySystemSearch = document.getElementById('lotterySystemSearch');
    const cardDistributionSearch = document.getElementById('cardDistributionSearch');
    const speechStatsSearch = document.getElementById('speechStatsSearch');
    const promptSystemSearch = document.getElementById('promptSystemSearch');
    const scheduledTaskSearch = document.getElementById('scheduledTaskSearch');
    const pointsSystemSearch = document.getElementById('pointsSystemSearch');
    const pointsSwitchSearch = document.getElementById('pointsSwitchSearch');
    const pointsSettingsSearch = document.getElementById('pointsSettingsSearch');
    const cardKeySystemSearch = document.getElementById('cardKeySystemSearch');
    const titleManagementSearch = document.getElementById('titleManagementSearch');
    const managementSettingsSearch = document.getElementById('managementSettingsSearch');
    const businessCardSearch = document.getElementById('businessCardSearch');
    const humanVerificationSearch = document.getElementById('humanVerificationSearch');
    const blackwhiteSearch = document.getElementById('blackwhiteSearch');
    const spamSearch = document.getElementById('spamSearch');

    // 群管功能搜索事件监听
    if (commandSearch) {
        commandSearch.addEventListener('input', (e) => {
            searchCommands(e.target.value);
        });

        // 搜索框焦点效果
        commandSearch.addEventListener('focus', () => {
            commandSearch.parentElement.classList.add('search-focused');
        });

        commandSearch.addEventListener('blur', () => {
            commandSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 问答系统搜索事件监听
    if (qaSearch) {
        qaSearch.addEventListener('input', (e) => {
            searchQACommands(e.target.value);
        });

        // 搜索框焦点效果
        qaSearch.addEventListener('focus', () => {
            qaSearch.parentElement.classList.add('search-focused');
        });

        qaSearch.addEventListener('blur', () => {
            qaSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 广告检测搜索事件监听
    if (adSearch) {
        adSearch.addEventListener('input', (e) => {
            searchAdCommands(e.target.value);
        });

        // 搜索框焦点效果
        adSearch.addEventListener('focus', () => {
            adSearch.parentElement.classList.add('search-focused');
        });

        adSearch.addEventListener('blur', () => {
            adSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 审核系统搜索事件监听
    if (auditSystemSearch) {
        auditSystemSearch.addEventListener('input', (e) => {
            searchAuditSystemCommands(e.target.value);
        });

        // 搜索框焦点效果
        auditSystemSearch.addEventListener('focus', () => {
            auditSystemSearch.parentElement.classList.add('search-focused');
        });

        auditSystemSearch.addEventListener('blur', () => {
            auditSystemSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 清人系统搜索事件监听
    if (clearSystemSearch) {
        clearSystemSearch.addEventListener('input', (e) => {
            searchClearSystemCommands(e.target.value);
        });

        // 搜索框焦点效果
        clearSystemSearch.addEventListener('focus', () => {
            clearSystemSearch.parentElement.classList.add('search-focused');
        });

        clearSystemSearch.addEventListener('blur', () => {
            clearSystemSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 抽奖系统搜索事件监听
    if (lotterySystemSearch) {
        lotterySystemSearch.addEventListener('input', (e) => {
            searchLotterySystemCommands(e.target.value);
        });

        // 搜索框焦点效果
        lotterySystemSearch.addEventListener('focus', () => {
            lotterySystemSearch.parentElement.classList.add('search-focused');
        });

        lotterySystemSearch.addEventListener('blur', () => {
            lotterySystemSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 发卡系统搜索事件监听
    if (cardDistributionSearch) {
        cardDistributionSearch.addEventListener('input', (e) => {
            searchCardDistributionCommands(e.target.value);
        });

        // 搜索框焦点效果
        cardDistributionSearch.addEventListener('focus', () => {
            cardDistributionSearch.parentElement.classList.add('search-focused');
        });

        cardDistributionSearch.addEventListener('blur', () => {
            cardDistributionSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 发言统计搜索事件监听
    if (speechStatsSearch) {
        speechStatsSearch.addEventListener('input', (e) => {
            searchSpeechStatsCommands(e.target.value);
        });

        // 搜索框焦点效果
        speechStatsSearch.addEventListener('focus', () => {
            speechStatsSearch.parentElement.classList.add('search-focused');
        });

        speechStatsSearch.addEventListener('blur', () => {
            speechStatsSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 提示系统搜索事件监听
    if (promptSystemSearch) {
        promptSystemSearch.addEventListener('input', (e) => {
            searchPromptSystemCommands(e.target.value);
        });

        // 搜索框焦点效果
        promptSystemSearch.addEventListener('focus', () => {
            promptSystemSearch.parentElement.classList.add('search-focused');
        });

        promptSystemSearch.addEventListener('blur', () => {
            promptSystemSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 定时任务搜索事件监听
    if (scheduledTaskSearch) {
        scheduledTaskSearch.addEventListener('input', (e) => {
            searchScheduledTaskCommands(e.target.value);
        });

        // 搜索框焦点效果
        scheduledTaskSearch.addEventListener('focus', () => {
            scheduledTaskSearch.parentElement.classList.add('search-focused');
        });

        scheduledTaskSearch.addEventListener('blur', () => {
            scheduledTaskSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 积分系统搜索事件监听
    if (pointsSystemSearch) {
        pointsSystemSearch.addEventListener('input', (e) => {
            searchPointsSystemCommands(e.target.value);
        });

        // 搜索框焦点效果
        pointsSystemSearch.addEventListener('focus', () => {
            pointsSystemSearch.parentElement.classList.add('search-focused');
        });

        pointsSystemSearch.addEventListener('blur', () => {
            pointsSystemSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 积分开关搜索事件监听
    if (pointsSwitchSearch) {
        pointsSwitchSearch.addEventListener('input', (e) => {
            searchPointsSwitchCommands(e.target.value);
        });

        // 搜索框焦点效果
        pointsSwitchSearch.addEventListener('focus', () => {
            pointsSwitchSearch.parentElement.classList.add('search-focused');
        });

        pointsSwitchSearch.addEventListener('blur', () => {
            pointsSwitchSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 积分设置搜索事件监听
    if (pointsSettingsSearch) {
        pointsSettingsSearch.addEventListener('input', (e) => {
            searchPointsSettingsCommands(e.target.value);
        });

        // 搜索框焦点效果
        pointsSettingsSearch.addEventListener('focus', () => {
            pointsSettingsSearch.parentElement.classList.add('search-focused');
        });

        pointsSettingsSearch.addEventListener('blur', () => {
            pointsSettingsSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 卡密系统搜索事件监听
    if (cardKeySystemSearch) {
        cardKeySystemSearch.addEventListener('input', (e) => {
            searchCardKeySystemCommands(e.target.value);
        });

        // 搜索框焦点效果
        cardKeySystemSearch.addEventListener('focus', () => {
            cardKeySystemSearch.parentElement.classList.add('search-focused');
        });

        cardKeySystemSearch.addEventListener('blur', () => {
            cardKeySystemSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 头衔管理搜索事件监听
    if (titleManagementSearch) {
        titleManagementSearch.addEventListener('input', (e) => {
            searchTitleManagementCommands(e.target.value);
        });

        // 搜索框焦点效果
        titleManagementSearch.addEventListener('focus', () => {
            titleManagementSearch.parentElement.classList.add('search-focused');
        });

        titleManagementSearch.addEventListener('blur', () => {
            titleManagementSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 管理设置搜索事件监听
    if (managementSettingsSearch) {
        managementSettingsSearch.addEventListener('input', (e) => {
            searchManagementSettingsCommands(e.target.value);
        });

        // 搜索框焦点效果
        managementSettingsSearch.addEventListener('focus', () => {
            managementSettingsSearch.parentElement.classList.add('search-focused');
        });

        managementSettingsSearch.addEventListener('blur', () => {
            managementSettingsSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 名片管理搜索事件监听
    if (businessCardSearch) {
        businessCardSearch.addEventListener('input', (e) => {
            searchBusinessCardCommands(e.target.value);
        });

        // 搜索框焦点效果
        businessCardSearch.addEventListener('focus', () => {
            businessCardSearch.parentElement.classList.add('search-focused');
        });

        businessCardSearch.addEventListener('blur', () => {
            businessCardSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 人机验证搜索事件监听
    if (humanVerificationSearch) {
        humanVerificationSearch.addEventListener('input', (e) => {
            searchHumanVerificationCommands(e.target.value);
        });

        // 搜索框焦点效果
        humanVerificationSearch.addEventListener('focus', () => {
            humanVerificationSearch.parentElement.classList.add('search-focused');
        });

        humanVerificationSearch.addEventListener('blur', () => {
            humanVerificationSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 黑白名单搜索事件监听
    if (blackwhiteSearch) {
        blackwhiteSearch.addEventListener('input', (e) => {
            searchBlackWhiteCommands(e.target.value);
        });

        // 搜索框焦点效果
        blackwhiteSearch.addEventListener('focus', () => {
            blackwhiteSearch.parentElement.classList.add('search-focused');
        });

        blackwhiteSearch.addEventListener('blur', () => {
            blackwhiteSearch.parentElement.classList.remove('search-focused');
        });
    }

    // 刷屏检测搜索事件监听
    if (spamSearch) {
        spamSearch.addEventListener('input', (e) => {
            searchSpamCommands(e.target.value);
        });

        // 搜索框焦点效果
        spamSearch.addEventListener('focus', () => {
            spamSearch.parentElement.classList.add('search-focused');
        });

        spamSearch.addEventListener('blur', () => {
            spamSearch.parentElement.classList.remove('search-focused');
        });
    }
}

// 导航栏滚动效果和返回顶部按钮
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollY = window.scrollY;

    // 导航栏效果
    if (scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }

    // 返回顶部按钮显示/隐藏
    backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        if (scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
});

// 返回顶部功能
function initializeBackToTop() {
    backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// 为所有按钮添加点击波纹效果
function addRippleEffect() {
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size+'px';
            ripple.style.left = x+'px';
            ripple.style.top = y+'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// 表格行点击复制功能
function initializeTableClick() {
    document.addEventListener('click', (e) => {
        const row = e.target.closest('.commands-table tbody tr');
        if (row) {
            const commandText = row.querySelector('.command-text');
            if (commandText) {
                // 获取指令文本，去除多余空格
                const textToCopy = commandText.textContent.trim();
                
                // 检查是否有有效内容
                if (!textToCopy) {
                    showToast('没有可复制的内容', 'error');
                    return;
                }
                
                // 尝试使用现代的 Clipboard API
                if (navigator.clipboard && window.isSecureContext) {
                    navigator.clipboard.writeText(textToCopy).then(() => {
                        showToast('指令已复制到剪贴板');
                    }).catch(err => {
                        console.error('复制失败:', err);
                        // 如果现代API失败，使用传统方法
                        fallbackCopy(textToCopy);
                    });
                } else {
                    // 使用传统的复制方法
                    fallbackCopy(textToCopy);
                }
            } else {
                // 如果没有找到指令文本，可能用户点击的不是指令列
                showToast('请点击指令列进行复制', 'warning');
            }
        }
    });
}

// 传统复制方法的备选方案
function fallbackCopy(text) {
    try {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
            showToast('指令已复制到剪贴板');
        } else {
            showToast('复制失败，请手动复制', 'error');
        }
    } catch (err) {
        console.error('复制失败:', err);
        showToast('复制失败，请手动复制', 'error');
    }
}

// 显示提示消息
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    // 根据类型设置不同的样式
    let backgroundColor, iconClass;
    switch(type) {
        case 'error':
            backgroundColor = '#f56565'; // 红色
            iconClass = 'fas fa-exclamation-circle';
            break;
        case 'warning':
            backgroundColor = '#ed8936'; // 橙色
            iconClass = 'fas fa-exclamation-triangle';
            break;
        case 'success':
        default:
            backgroundColor = 'var(--primary-blue)'; // 蓝色
            iconClass = 'fas fa-check-circle';
            break;
    }
    
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${backgroundColor};
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        font-size: 14px;
        font-weight: 500;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
        max-width: 300px;
    `;
    
    // 添加图标
    const icon = document.createElement('i');
    icon.className = iconClass;
    toast.insertBefore(icon, toast.firstChild);
    
    // 设置文本内容
    const textSpan = document.createElement('span');
    textSpan.textContent = message;
    toast.appendChild(textSpan);
    toast.removeChild(toast.childNodes[1]); // 移除原有的文本节点

    document.body.appendChild(toast);

    // 显示动画
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 10);

    // 隐藏动画
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000); // 增加显示时间到3秒
}

// 添加加载动画
function initializeAnimations() {
    const cards = document.querySelectorAll('.feature-nav-card, .quick-start-card, .guide-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 键盘快捷键（增强版本）
function initializeKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ctrl+F 或 Cmd+F 聚焦当前页面的搜索框
        if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
            e.preventDefault();
            const activeSearchInput = document.querySelector('#commandSearch, #qaSearch, #adSearch, #auditSystemSearch, #clearSystemSearch, #lotterySystemSearch, #cardDistributionSearch, #speechStatsSearch, #promptSystemSearch, #scheduledTaskSearch, #businessCardSearch, #humanVerificationSearch, #blackwhiteSearch, #spamSearch');
            if (activeSearchInput && activeSearchInput.offsetParent !== null) {
                activeSearchInput.focus();
            }
        }

        // ESC 清空当前页面的搜索或关闭侧边栏
        if (e.key === 'Escape') {
            const sidebar = document.getElementById('sidebar');
            if (sidebar && sidebar.classList.contains('open')) {
                toggleSidebar();
                return;
            }
            
            const activeSearchInput = document.querySelector('#commandSearch, #qaSearch, #adSearch, #auditSystemSearch, #clearSystemSearch, #lotterySystemSearch, #cardDistributionSearch, #speechStatsSearch, #promptSystemSearch, #scheduledTaskSearch, #businessCardSearch, #humanVerificationSearch, #blackwhiteSearch, #spamSearch');
            if (activeSearchInput && activeSearchInput.offsetParent !== null && activeSearchInput.value) {
                activeSearchInput.value = '';
                // 触发input事件来清空搜索结果
                activeSearchInput.dispatchEvent(new Event('input'));
                activeSearchInput.blur();
            }
        }

        // H键回到首页
        if (e.key.toLowerCase() === 'h' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            if (document.activeElement.tagName !== 'INPUT') {
                showHome();
            }
        }
        
        // S键切换侧边栏
        if (e.key.toLowerCase() === 's' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            if (document.activeElement.tagName !== 'INPUT') {
                e.preventDefault();
                toggleSidebar();
            }
        }
    });
}

// 响应式处理
function handleResize() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const mainContent = document.querySelector('.main-content');
    
    if (window.innerWidth > 768) {
        // 桌面端：关闭侧边栏
        if (sidebar && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
            overlay.classList.remove('visible');
            mainContent.classList.remove('sidebar-open');
        }
    }
}

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    // 初始化各种功能
    initializeSearch();
    initializeBackToTop();
    addRippleEffect();
    initializeTableClick();
    initializeAnimations();
    initializeKeyboardShortcuts();
    initializeNavSearch();

    // 添加窗口大小变化监听
    window.addEventListener('resize', handleResize);
    
    // 添加页面加载完成后的淡入效果
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);

    // 默认显示首页
    showHome();
});

// 页面可见性变化时的处理
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // 页面变为可见时，重新初始化一些功能
        setTimeout(() => {
            initializeSearch();
        }, 100);
    }
});

// 导出函数供全局使用
window.showPage = showPage;
window.showHome = showHome;
window.toggleSidebar = toggleSidebar;
window.goToCommandPage = goToCommandPage;
window.toggleSearch = toggleSearch;
window.clearNavSearch = clearNavSearch;