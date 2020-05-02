const teas = [
  {
    "zh": "平陽黃湯",
    "type": "黃茶",
    "family": "黃小茶",
    "province": "中國浙江",
    "town": [
      "平陽， 泰順， 瑞安"
    ],
    "elevation": [
      300,
      1200
    ],
    "cultivar": "平陽特皁茶",
    "picking": [
      "一芽 一葉",
      "一芽 二葉"
    ],
    "harvest": "春季",
    "fermentation": [
      10,
      20
    ],
    "brewing": [
      {
        "type": "茶杯泡法",
        "temperature": [
          80,
          85
        ],
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "北港毛尖",
    "type": "黃茶",
    "picking": "一芽 二葉",
    "province": "中國湖南",
    "family": "黃小茶",
    "brewing": [
      {
        "type": "茶杯泡法",
        "temperature": [
          80,
          85
        ],
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "溈山毛尖",
    "type": "黃茶",
    "picking": "一芽 二葉",
    "province": "中國湖南",
    "family": "黃小茶",
    "brewing": [
      {
        "type": "茶杯泡法",
        "temperature": [
          80,
          85
        ],
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "霍山黃芽",
    "type": "黃茶",
    "picking": [
      "一芽",
      "一芽 一葉"
    ],
    "province": "中國安徽",
    "family": "黃芽茶",
    "image": true,
    "brewing": [
      {
        "type": "茶杯泡法",
        "temperature": 75,
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "君山銀針",
    "type": "黃茶",
    "family": "黃芽茶",
    "province": "中國湖南",
    "picking": [
      "一芽 一葉",
      "一芽 二葉"
    ],
    "brewing": [
      {
        "type": "茶杯泡法",
        "temperature": [
          70,
          75
        ],
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "蒙頂黃芽",
    "type": "黃茶",
    "family": "黃芽茶",
    "province": "中國四川",
    "picking": [
      "一芽 一葉",
      "一芽 二葉"
    ],
    "brewing": [
      {
        "type": "茶杯泡法",
        "temperature": 75,
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "廣東大葉青",
    "type": "黃茶",
    "picking": "一芽三葉",
    "province": "中國廣東",
    "family": "黃大茶",
    "brewing": [
      {
        "type": "茶杯泡法",
        "temperature": [
          85,
          90
        ],
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "霍山黃大茶",
    "type": "黃茶",
    "picking": "一芽三葉",
    "province": "中國安徽",
    "family": "黃大茶",
    "image": true,
    "brewing": [
      {
        "type": "茶杯泡法",
        "temperature": [
          85,
          90
        ],
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "碧螺春",
    "type": "綠茶",
    "picking": "芽葉",
    "province": "中國江蘇",
    "family": "炒青绿茶",
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          80,
          85
        ],
        "quantity": "1:30",
        "duration": [
          25,
          30,
          45
        ],
        "times": [
          2,
          5
        ]
      }
    ]
  },
  {
    "zh": "湄潭翠芽",
    "type": "綠茶",
    "picking": "芽葉",
    "province": "中國貴州",
    "family": "炒青绿茶",
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 80,
        "quantity": "1:30",
        "duration": [
          25,
          30,
          45
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 80,
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "黄山毛峰",
    "type": "綠茶",
    "picking": "一芽 一葉",
    "province": "中國安徽",
    "family": "烘青绿茶",
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          80,
          90
        ],
        "quantity": "1:30",
        "duration": [
          20,
          30,
          40,
          60
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": [
          80,
          90
        ],
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "龍井茶",
    "type": "綠茶",
    "picking": "一芽 一葉",
    "province": "中國浙江",
    "family": "炒青绿茶",
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 85,
        "quantity": "1:30",
        "duration": [
          20,
          30,
          40,
          60
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 85,
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "都勻毛尖",
    "type": "綠茶",
    "picking": "一芽 一葉",
    "province": "中國貴州",
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 80,
        "quantity": "1:30",
        "duration": [
          20,
          30,
          40,
          60
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 80,
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "信阳毛尖",
    "type": "綠茶",
    "picking": "一芽 一葉",
    "province": "中國河南",
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 80,
        "quantity": "1:30",
        "duration": [
          20,
          30,
          40,
          60
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 80,
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "竹葉青",
    "type": "綠茶",
    "picking": "一芽 一葉",
    "province": "中國四川",
    "family": "炒青绿茶",
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 85,
        "quantity": "1:30",
        "duration": [
          20,
          30,
          40,
          60
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 85,
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "頂谷大方",
    "type": "綠茶",
    "picking": "一芽 二葉",
    "province": "中國安徽",
    "family": "炒青绿茶",
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 80,
        "quantity": "1:30",
        "duration": [
          20,
          30,
          40,
          60
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 80,
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "太平猴魁",
    "type": "綠茶",
    "family": "烘青绿茶",
    "picking": "一芽三葉",
    "province": "中國安徽",
    "temperature": [
      80,
      90
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          80,
          90
        ],
        "quantity": "1:30",
        "duration": [
          20,
          30,
          40,
          60
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": [
          80,
          90
        ],
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "綠寶石",
    "type": "綠茶",
    "picking": [
      "一芽 二葉",
      "一芽三葉"
    ],
    "province": "中國貴州",
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          80,
          85
        ],
        "quantity": "1:30",
        "duration": [
          20,
          30,
          40,
          60
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": [
          80,
          85
        ],
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "珠茶",
    "type": "綠茶",
    "picking": [
      "一芽 二葉",
      "一芽三葉"
    ],
    "province": "中國浙江",
    "family": "炒青绿茶",
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 90,
        "quantity": "1:30",
        "duration": [
          20,
          30,
          40,
          60
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 90,
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "六安瓜片",
    "type": "綠茶",
    "picking": "單壯葉",
    "province": "中國安徽",
    "family": "烘青绿茶",
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 85,
        "quantity": "1:30",
        "duration": [
          20,
          30,
          40,
          60
        ],
        "times": [
          2,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 85,
        "quantity": "1:50"
      }
    ]
  },
  {
    "zh": "四季春",
    "type": "青茶",
    "family": "臺灣烏龍",
    "province": "臺灣",
    "cultivar": "四季春",
    "picking": "一芽 二葉",
    "harvest": [
      "春季",
      "夏季",
      "秋季"
    ],
    "fermentation": [
      20,
      25
    ],
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 90,
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          60
        ],
        "times": [
          4,
          6
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": 90,
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          "40，60"
        ],
        "times": [
          4,
          6
        ]
      }
    ]
  },
  {
    "zh": "金萱",
    "type": "青茶",
    "family": "臺灣烏龍",
    "province": "臺灣",
    "cultivar": "金萱",
    "picking": "一芽 二葉",
    "harvest": [
      "春季",
      "夏季",
      "秋季"
    ],
    "fermentation": [
      20,
      25
    ],
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 90,
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          60
        ],
        "times": [
          4,
          6
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": 90,
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          60
        ],
        "times": [
          4,
          6
        ]
      }
    ]
  },
  {
    "zh": "文山包種",
    "type": "青茶",
    "family": "臺灣烏龍",
    "province": "臺灣臺北",
    "town": "文山區",
    "elevation": [
      400,
      600
    ],
    "cultivar": [
      "青心烏龍",
      "金萱",
      "翠玉",
      "四季春"
    ],
    "picking": "一芽 二葉",
    "harvest": [
      "春季",
      "夏季",
      "秋季"
    ],
    "fermentation": [
      12,
      15
    ],
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 90,
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          60
        ],
        "times": [
          4,
          6
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": 90,
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          60
        ],
        "times": [
          4,
          6
        ]
      }
    ]
  },
  {
    "zh": "高山茶",
    "type": "青茶",
    "family": "臺灣烏龍",
    "province": "臺灣",
    "elevation": 1000,
    "Cultivar": [
      "青心烏龍",
      "金萱"
    ],
    "picking": "一芽 二葉",
    "harvest": [
      "春季",
      "夏季",
      "秋季"
    ],
    "fermentation": [
      15,
      20
    ],
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          95,
          100
        ],
        "quantity": "1:20",
        "duration": [
          20,
          15,
          20,
          25,
          35,
          45,
          60,
          90
        ],
        "times": [
          4,
          8
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": [
          95,
          100
        ],
        "quantity": "1:20",
        "duration": [
          20,
          15,
          20,
          25,
          35,
          45,
          60,
          90
        ],
        "times": [
          4,
          8
        ]
      }
    ]
  },
  {
    "zh": "木柵鐵觀音",
    "type": "青茶",
    "family": "臺灣烏龍",
    "province": "臺灣臺北",
    "town": "木柵",
    "elevation": [
      200,
      500
    ],
    "cultivar": [
      "鐵觀音",
      "硬枝紅心烏龍",
      "金萱"
    ],
    "picking": "一芽 二葉",
    "harvest": [
      "春季",
      "夏季",
      "秋季"
    ],
    "fermentation": 40,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          50,
          70,
          90
        ],
        "times": [
          4,
          8
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          50,
          70,
          90
        ],
        "times": [
          4,
          8
        ]
      }
    ]
  },
  {
    "zh": "凍頂烏龍",
    "type": "青茶",
    "family": "臺灣烏龍",
    "province": "臺灣南投",
    "town": "鹿谷",
    "elevation": [
      600,
      800
    ],
    "cultivar": "青心烏龍",
    "picking": "一芽 二葉",
    "harvest": [
      "春季",
      "夏季",
      "秋季"
    ],
    "fermentation": [
      25,
      30
    ],
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          50,
          70,
          90
        ],
        "times": [
          4,
          8
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          50,
          70,
          90
        ],
        "times": [
          4,
          8
        ]
      }
    ]
  },
  {
    "zh": "東方美人",
    "type": "青茶",
    "family": "臺灣烏龍",
    "province": [
      "臺灣新竹，苗栗"
    ],
    "town": [
      "北埔，公館"
    ],
    "elevation": [
      300,
      500
    ],
    "cultivar": [
      "青心大某，青心乌龙，白毛猴"
    ],
    "picking": "一芽 一葉",
    "harvest": "夏季",
    "fermentation": [
      60,
      75
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          85,
          90
        ],
        "quantity": "1:20",
        "duration": [
          20,
          15,
          20,
          25,
          35,
          50,
          70,
          100
        ],
        "times": [
          4,
          8
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": [
          85,
          90
        ],
        "quantity": "1:20",
        "duration": [
          20,
          15,
          20,
          25,
          35,
          50,
          70,
          100
        ],
        "times": [
          4,
          8
        ]
      }
    ]
  },
  {
    "zh": "大紅袍",
    "type": "青茶",
    "family": "閩北烏龍",
    "province": "中國福建",
    "town": "武夷山市",
    "elevation": [
      200,
      300
    ],
    "cultivar": [
      "奇丹",
      "其他拼配"
    ],
    "picking": "一芽 三四葉",
    "harvest": "春季",
    "fermentation": 70,
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          95,
          100
        ],
        "quantity": "1:20",
        "duration": [
          5,
          8,
          10,
          12,
          15,
          18,
          20
        ],
        "times": [
          15,
          20
        ]
      }
    ]
  },
  {
    "zh": "武夷水仙",
    "type": "青茶",
    "family": "閩北烏龍",
    "province": "中國福建",
    "town": "武夷山市",
    "elevation": [
      200,
      300
    ],
    "cultivar": "武夷水仙",
    "picking": "一芽 三四葉",
    "harvest": "春季",
    "fermentation": [
      35,
      45
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          95,
          100
        ],
        "quantity": "1:20",
        "duration": [
          5,
          8,
          10,
          12,
          15,
          18,
          20
        ],
        "times": [
          15,
          20
        ]
      }
    ]
  },
  {
    "zh": "肉桂",
    "type": "青茶",
    "family": "閩北烏龍",
    "province": "中國福建",
    "town": "武夷山市",
    "elevation": [
      200,
      300
    ],
    "cultivar": "武夷肉桂",
    "picking": "一芽 三四葉",
    "harvest": "春季",
    "fermentation": [
      35,
      45
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          95,
          100
        ],
        "quantity": "1:20",
        "duration": [
          5,
          8,
          10,
          12,
          15,
          18,
          20
        ],
        "times": [
          15,
          20
        ]
      }
    ]
  },
  {
    "zh": "鳳凰單叢",
    "type": "青茶",
    "family": "廣東烏龍",
    "province": "中國廣東",
    "town": "潮州市",
    "elevation": [
      500,
      1100
    ],
    "cultivar": "鳳凰水仙",
    "picking": "一芽 二三葉",
    "fermentation": [
      70,
      80
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          95,
          100
        ],
        "quantity": "1:20",
        "duration": [
          3,
          5,
          7,
          10,
          13,
          20
        ],
        "times": [
          5,
          20
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": [
          95,
          100
        ],
        "quantity": "1:20",
        "duration": [
          3,
          5,
          7,
          10,
          13,
          20
        ],
        "times": [
          5,
          20
        ]
      }
    ]
  },
  {
    "zh": "安溪鐵觀音",
    "type": "青茶",
    "family": "閩南烏龍",
    "province": "中國福建",
    "town": "安溪",
    "elevation": [
      300,
      1600
    ],
    "cultivar": "鐵觀音",
    "picking": [
      "一芽 二三葉",
      "一芽 三四葉"
    ],
    "harvest": [
      "春季",
      "秋季"
    ],
    "fermentation": [
      20,
      50
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          95,
          100
        ],
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          50,
          70,
          90
        ],
        "times": [
          4,
          8
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": [
          95,
          100
        ],
        "quantity": "1:20",
        "duration": [
          25,
          20,
          25,
          30,
          40,
          50,
          70,
          90
        ],
        "times": [
          4,
          8
        ]
      }
    ]
  },
  {
    "zh": "本山茶",
    "type": "青茶",
    "province": "中國福建",
    "town": "安溪",
    "elevation": [
      300,
      1600
    ],
    "cultivar": "本山",
    "picking": [
      "一芽 二三葉",
      "一芽 三四葉"
    ],
    "harvest": [
      "春季",
      "秋季"
    ],
    "fermentation": [
      20,
      50
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          30,
          25,
          30,
          35,
          45,
          60
        ],
        "times": [
          4,
          6
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          30,
          25,
          30,
          35,
          45,
          60
        ],
        "times": [
          4,
          6
        ]
      }
    ]
  },
  {
    "zh": "毛蟹茶",
    "type": "青茶",
    "family": "閩南烏龍",
    "province": "中國福建",
    "town": "安溪",
    "elevation": [
      300,
      1600
    ],
    "cultivar": "毛蟹",
    "picking": [
      "一芽 二三葉",
      "一芽 三四葉"
    ],
    "harvest": [
      "春季",
      "秋季"
    ],
    "fermentation": [
      20,
      50
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          30,
          25,
          30,
          35,
          45,
          60
        ],
        "times": [
          4,
          6
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          30,
          25,
          30,
          35,
          45,
          60
        ],
        "times": [
          4,
          6
        ]
      }
    ]
  },
  {
    "zh": "黃金桂",
    "type": "青茶",
    "family": "閩南烏龍",
    "province": "中國福建",
    "town": "安溪",
    "elevation": [
      300,
      1600
    ],
    "cultivar": "黃旦",
    "picking": [
      "一芽 二三葉",
      "一芽 三四葉"
    ],
    "harvest": [
      "春季",
      "秋季"
    ],
    "fermentation": [
      20,
      50
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          30,
          25,
          30,
          35,
          45,
          60
        ],
        "times": [
          4,
          6
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          30,
          25,
          30,
          35,
          45,
          60
        ],
        "times": [
          4,
          6
        ]
      }
    ]
  },
  {
    "zh": "白毫銀針",
    "type": "白茶",
    "province": "中國福建",
    "town": [
      "福鼎， 政和， 建陽， 松溪"
    ],
    "elevation": [
      500,
      800
    ],
    "cultivar": [
      "福鼎大白茶， 政和大白茶"
    ],
    "picking": "嫩芽",
    "harvest": "春季",
    "fermentation": [
      5,
      10
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 90,
        "quantity": "1:30",
        "duration": [
          15,
          20,
          25,
          35,
          45,
          60
        ],
        "times": [
          5,
          10
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 90,
        "quantity": "1:50",
        "duration": [
          180,
          300,
          480
        ],
        "times": [
          2,
          3
        ]
      }
    ]
  },
  {
    "zh": "白牡丹",
    "type": "白茶",
    "province": "中國福建",
    "town": [
      "政和， 福鼎， 建陽， 松溪"
    ],
    "elevation": [
      500,
      800
    ],
    "cultivar": [
      "福鼎大白茶， 福鼎大毫茶"
    ],
    "picking": "一芽 一二葉",
    "harvest": "春季",
    "fermentation": [
      5,
      10
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 95,
        "quantity": "1:30",
        "duration": [
          15,
          20,
          25,
          35,
          45,
          60
        ],
        "times": [
          5,
          10
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 95,
        "quantity": "1:50",
        "duration": [
          180,
          300,
          480
        ],
        "times": [
          2,
          3
        ]
      }
    ]
  },
  {
    "zh": "月光白",
    "type": "白茶",
    "province": "中國雲南",
    "town": "思茅地區",
    "elevation": 1600,
    "cultivar": "景谷大白茶",
    "picking": "一芽 二葉",
    "harvest": [
      "春季",
      "夏季",
      "秋季"
    ],
    "fermentation": [
      5,
      10
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 100,
        "quantity": "1:40",
        "duration": [
          10,
          10,
          10,
          20,
          30
        ],
        "times": [
          5,
          10
        ]
      },
      {
        "type": "小壺泡法",
        "temperature": 100,
        "quantity": "1:40",
        "duration": [
          10,
          10,
          10,
          "20， 30"
        ],
        "times": [
          5,
          10
        ]
      }
    ]
  },
  {
    "zh": "壽眉",
    "type": "白茶",
    "province": "中國福建",
    "town": [
      "政和",
      "福鼎",
      "建陽",
      "松溪"
    ],
    "elevation": [
      500,
      800
    ],
    "cultivar": [
      "福鼎大白茶， 福鼎大毫茶"
    ],
    "picking": "一芽 二三葉",
    "harvest": [
      "春季",
      "夏季",
      "秋季"
    ],
    "fermentation": [
      5,
      10
    ],
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 100,
        "quantity": "1:30",
        "duration": [
          50,
          60,
          80,
          100
        ],
        "times": [
          4,
          5
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": 100,
        "quantity": "1:50",
        "duration": [
          180,
          300,
          480
        ],
        "times": [
          2,
          3
        ]
      }
    ]
  },
  {
    "zh": "雲南白茶磚",
    "type": "白茶",
    "province": "中國雲南",
    "cultivar": "雲南大白茶",
    "picking": "一芽 二三葉",
    "fermentation": [
      5,
      10
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:30",
        "duration": [
          10,
          30,
          30,
          50
        ],
        "times": [
          4,
          8
        ]
      }
    ]
  },
  {
    "zh": "正山小種",
    "type": "紅茶",
    "family": "小種紅茶",
    "province": "中國福建",
    "town": "武夷山市星村桐木關",
    "elevation": 1100,
    "cultivar": "小菜茶羣體種",
    "picking": "一芽 二三葉",
    "harvest": [
      "春季",
      "夏季"
    ],
    "fermentation": [
      80,
      95
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": 90,
        "quantity": "1:20",
        "duration": [
          10,
          10,
          15,
          25,
          40,
          60
        ],
        "times": [
          4,
          6
        ]
      }
    ]
  },
  {
    "zh": "祁門紅茶",
    "type": "紅茶",
    "family": "工夫紅茶",
    "province": "中國安徽",
    "town": "祁門",
    "elevation": [
      100,
      350
    ],
    "cultivar": "祁門種",
    "picking": "一芽 二三葉",
    "harvest": [
      "春季",
      "夏季"
    ],
    "fermentation": [
      80,
      95
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          30,
          45,
          75,
          120
        ],
        "times": [
          3,
          4
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:50",
        "duration": [
          120,
          180
        ],
        "times": [
          1,
          2
        ]
      }
    ]
  },
  {
    "zh": "坦洋",
    "type": "紅茶",
    "family": "工夫紅茶",
    "province": "中國福建",
    "town": "福安",
    "elevation": [
      300,
      1000
    ],
    "cultivar": [
      "福安大白茶",
      "福鼎大毫茶"
    ],
    "picking": "一芽 一二葉",
    "harvest": [
      "春季",
      "夏季"
    ],
    "fermentation": [
      80,
      95
    ],
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:20",
        "duration": [
          30,
          45,
          75,
          120
        ],
        "times": [
          3,
          4
        ]
      },
      {
        "type": "茶杯泡法",
        "temperature": [
          90,
          95
        ],
        "quantity": "1:50",
        "duration": [
          120,
          180
        ],
        "times": [
          1,
          2
        ]
      }
    ]
  },
  {
    "zh": "金駿眉",
    "type": "紅茶",
    "family": "小種紅茶",
    "province": "中國福建",
    "town": "武夷山市星村桐木關",
    "elevation": [
      1000,
      1200
    ],
    "cultivar": "武夷野生奇種",
    "picking": "芽葉",
    "harvest": "春季",
    "fermentation": [
      80,
      95
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          80,
          90
        ],
        "quantity": "1:20",
        "duration": [
          15,
          25,
          35,
          45,
          60,
          70,
          80,
          90,
          120,
          150
        ],
        "times": [
          10,
          12
        ]
      }
    ]
  },
  {
    "zh": "紅碎茶",
    "type": "紅茶",
    "family": "紅碎茶",
    "province": [
      "中國雲南",
      "廣東， 海南， 廣西"
    ],
    "brewing": [
      {
        "type": "大壺泡法",
        "temperature": [
          90,
          100
        ],
        "quantity": "1:60",
        "duration": [
          180
        ],
        "times": 1
      },
      {
        "type": "蓋碗泡法",
        "temperature": [
          90,
          100
        ],
        "quantity": "1:30",
        "duration": [
          10,
          30
        ],
        "times": 2
      }
    ]
  },
  {
    "zh": "滇紅",
    "type": "紅茶",
    "family": "功夫紅茶",
    "province": "中國雲南",
    "town": "臨滄鳳慶",
    "elevation": 1000,
    "cultivar": "雲南大葉種拼配",
    "picking": [
      "芽葉",
      "一芽一葉",
      "一芽二三葉"
    ],
    "harvest": [
      "春季",
      "夏季",
      "秋季"
    ],
    "fermentation": [
      80,
      90
    ],
    "image": true,
    "brewing": [
      {
        "type": "蓋碗泡法",
        "temperature": [
          80,
          85
        ],
        "quantity": "1:30",
        "duration": [
          1,
          1,
          1,
          3,
          5,
          8,
          12,
          17,
          23,
          30
        ],
        "times": 10
      }
    ]
  },
  {
    "zh": "六堡黑茶",
    "type": "黑茶",
    "province": "中國廣西",
    "elevation": [
      1000,
      1500
    ],
    "cultivar": "桂青",
    "picking": [
      "一芽 二三葉",
      "一芽 三四葉"
    ],
    "fermentation": 99,
    "image": true,
    "brewing": [
      {
        "type": "煮泡法",
        "temperature": [
          95,
          99
        ],
        "quantity": "1:100",
        "duration": 300,
        "times": 1
      }
    ]
  }
]

export default teas