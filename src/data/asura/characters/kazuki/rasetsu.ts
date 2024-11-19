import type { DataItem } from "../../../../types"

export const asuraKazukiRasetsu: DataItem = {
  id: "asura-kazuki-rasetsu",
  name: "風間火月（羅刹）",
  groups: [
    {
      title: "通常技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      accordion: "normal",
      skills: [
        {
          name: "",
          command: "A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→+A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "屈A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈B",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "屈C",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "（背面）A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（背面）屈A",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "（背面）屈B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）屈C",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "空中でA",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "空中でB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "空中でC",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "起き上がり時A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "起き上がり時B",
          notes: ["下段", "×"],
        },
      ],
    },
    {
      title: "固有技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      accordion: "unique",
      skills: [
        {
          name: "踏み潰し",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "肘打",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "紅蓮拳",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "飛炎拳",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "焔突き",
          command: "→→+A",
          notes: ["中段", "×"],
        },
        {
          name: "怒火撃",
          command: "→→+B",
          notes: ["中段", "×"],
        },
        {
          name: "破吼山",
          command: "→→+C",
          notes: ["中段", "×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "炎熱獄",
          command: "→↓↘+A or B or 怒時AB",
        },
        {
          name: "火炎撃",
          command: "←↓↙+A or B or 怒時AB",
          notes: ["怒版はガード不能"],
        },
        {
          name: "六道烈火「祓」",
          command: "↓↘→+C",
          skills: [
            {
              name: "六道烈火「爆」",
              command: "↓↘→+A",
              skills: [
                {
                  name: "六道烈火「滅」",
                  command: "↓↘→+B",
                },
              ],
            },
          ],
        },
        {
          name: "六道烈火「地獄道」",
          command: "怒時↓↘→+AB",
          skills: [
            {
              name: "六道烈火・餓鬼道",
              command: "",
              notes: ["地獄道ヒット時に自動発動"],
              skills: [
                {
                  name: "六道烈火「畜生道」",
                  command: "↓↘→+A",
                  skills: [
                    {
                      name: "六道烈火「修羅道」",
                      command: "↓↘→+B",
                      skills: [
                        {
                          name: "六道烈火「人道」",
                          command: "→↓↘+C",
                          skills: [
                            {
                              name: "六道烈火「天道」",
                              command: "→↘↓↙←+D",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "肘打炎迅掌",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "絶焼騎馬式 噴虎",
          command: "→↘↓↙←+C",
          notes: ["ガード不能"],
        },
        {
          name: "炎皇転身",
          command: "←↓↙+D",
          notes: ["モードチェンジ / 発動時の炎はガード不能"],
          skills: [
            {
              name: "解除",
              command: "←↓↙+D （or 怒り爆発）",
            },
            {
              name: "炎皇技のみ使用可能（下記）",
              command: "",
            },
          ],
        },
      ],
    },
    {
      title: "炎皇技",
      titleNote: "入力 / 属性",
      layout: "note",
      accordion: "mode",
      skills: [
        {
          name: "流火-火丸",
          command: "A・A",
          notes: ["上・中"],
        },
        {
          name: "流火-火箭-飛火",
          command: "A・B・B",
          notes: ["上・上・中"],
        },
        {
          name: "火箭-飛火",
          command: "B・B",
          notes: ["上・中"],
        },
        {
          name: "焼脚",
          command: "C",
          notes: ["G不能"],
        },
        {
          name: "火象",
          command: "C・A",
          notes: ["中段"],
        },
        {
          name: "然身",
          command: "C・B",
          notes: ["G不能"],
        },
        {
          name: "元平",
          command: "C・C",
          notes: ["G不能"],
        },
        {
          name: "禁罰",
          command: "AB",
          notes: ["G不能"],
        },
        {
          name: "玄沙",
          command: "→+A",
          notes: ["上段"],
        },
        {
          name: "鉄鏘-鉄騎",
          command: "→+B・B",
          notes: ["上・中"],
        },
        {
          name: "幽玄",
          command: "→→+A",
          notes: ["中段"],
        },
        {
          name: "累劫",
          command: "→→+B",
          notes: ["中段"],
        },
        {
          name: "女青",
          command: "→→+C",
          notes: ["中段"],
        },
        {
          name: "火丸-北玄",
          command: "↘+A・A",
          notes: ["中・中"],
        },
        {
          name: "河伯",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "鉄車-焼脚",
          command: "↓+A・C",
          notes: ["上・G不能"],
        },
        {
          name: "鉄馬-天一",
          command: "↓+B・A",
          notes: ["中・中"],
        },
        {
          name: "鉄馬-藍天-平天",
          command: "↓+B・B・B",
          notes: ["中・中・中"],
        },
        {
          name: "鉄牛-鉄驢-飛火",
          command: "↓+C・B・B",
          notes: ["下・中・中"],
        },
        {
          name: "鉄牛-鉄馬",
          command: "↓+C・C",
          notes: ["下・中"],
        },
        {
          name: "天一",
          command: "↑+A",
          notes: ["中段"],
        },
        {
          name: "藍天-平天",
          command: "↑+B・B",
          notes: ["中・中"],
        },
        {
          name: "皇天",
          command: "↑+C",
          notes: ["下段"],
        },
        {
          name: "虚天",
          command: "↑+D",
          notes: ["背向け"],
        },
        {
          name: "九天",
          command: "（背面）A",
          notes: ["上段"],
        },
        {
          name: "元正-刑正-飛火",
          command: "（背面）B・B・B",
          notes: ["上・中・中"],
        },
        {
          name: "太真-焼脚",
          command: "（背面）C・C",
          notes: ["中・G不能"],
        },
        {
          name: "鉄錐",
          command: "（背面）↓+A",
          notes: ["下段"],
        },
        {
          name: "鉄牀",
          command: "（背面）↓+B",
          notes: ["中段"],
        },
        {
          name: "鉄杖",
          command: "（背面）↓+C",
          notes: ["下段"],
        },
        {
          name: "東方風雷",
          command: "→+C",
          notes: ["上段投げ", "投げ抜け:C"],
        },
        {
          name: "南方火翳",
          command: "↘+C",
          notes: ["上段投げ", "投げ抜け:C"],
        },
        {
          name: "西方金剛",
          command: "←+C",
          notes: ["上段投げ", "投げ抜け:C"],
        },
        {
          name: "北方溟冷",
          command: "相手の背後から→ or ↘ or ←+C",
          notes: ["中段投げ", "投げ抜け:C"],
        },
        {
          name: "避け",
          command: "N+D or ↓+D",
          notes: ["移動"],
          skills: [
            {
              name: "火丸-北玄",
              command: "A・A",
              notes: ["中・中"],
            },
            {
              name: "平天",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "女青",
              command: "C",
              notes: ["中段"],
            },
            {
              name: "天一北",
              command: "→+D",
              notes: ["左前方向に移動"],
              skills: [
                {
                  name: "火丸-北玄",
                  command: "A・A",
                  notes: ["中・中"],
                },
                {
                  name: "平天",
                  command: "B",
                  notes: ["中段"],
                },
                {
                  name: "女青",
                  command: "C",
                  notes: ["中段"],
                },
              ],
            },
            {
              name: "三十六天",
              command: "←+D",
              notes: ["右前方向に移動"],
              skills: [
                {
                  name: "火丸-北玄",
                  command: "A・A",
                  notes: ["中・中"],
                },
                {
                  name: "平天",
                  command: "B",
                  notes: ["中段"],
                },
                {
                  name: "女青",
                  command: "C",
                  notes: ["中段"],
                },
              ],
            },
          ],
        },
        {
          name: "上段避け構え",
          command: "↓",
          notes: ["構え"],
        },
        {
          name: "下段避け構え",
          command: "↑",
          notes: ["構え"],
        },
        {
          name: "ステップ",
          command: "→→ or →+D",
          notes: ["移動"],
        },
        {
          name: "バックステップ",
          command: "←← or ←+D",
          notes: ["移動"],
        },
        {
          name: "清沼",
          command: "↓↘→",
          notes: ["移動"],
          skills: [
            {
              name: "律令",
              command: "A",
              notes: ["中段"],
            },
            {
              name: "平天",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "冰池-無上",
              command: "C・B",
              notes: ["下・中"],
            },
            {
              name: "冰池-虚無",
              command: "C・C",
              notes: ["下・中"],
            },
          ],
        },
        {
          name: "黄天",
          command: "↓↙←",
          notes: ["移動"],
          skills: [
            {
              name: "火庭",
              command: "A",
              notes: ["中段"],
            },
            {
              name: "毒刃",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "風刀-平天",
              command: "C",
              notes: ["中・中"],
            },
          ],
        },
        {
          name: "寒夜",
          command: "起き上がり時A",
          notes: ["中段"],
        },
        {
          name: "九幽",
          command: "起き上がり時B",
          notes: ["下段"],
        },
        {
          name: "玄陰",
          command: "与ダウン時↙ or ↓ or ↘+A",
          notes: ["追い討ち"],
        },
        {
          name: "天玄",
          command: "与ダウン時↙ or ↓ or ↘+B",
          notes: ["追い討ち"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "狂覚醒",
          command: "←↓↙+BC",
          notes: ["発動時の炎はガード不能"],
          skills: [
            {
              name: "",
              command: "A",
              notes: ["中段フック3連"],
              skills: [
                {
                  name: "",
                  command: "A",
                  notes: ["中段フック3連"],
                },
                {
                  name: "",
                  command: "B",
                  notes: ["下段フック3連"],
                },
                {
                  name: "",
                  command: "C",
                  notes: ["中段ボディプレス3連"],
                },
                {
                  name: "呻",
                  command: "D",
                  notes: ["ガード不能の爆発"],
                },
              ],
            },
            {
              name: "",
              command: "B",
              notes: ["下段フック3連"],
              skills: [
                {
                  name: "",
                  command: "A",
                  notes: ["中段フック3連"],
                },
                {
                  name: "",
                  command: "B",
                  notes: ["下段フック3連"],
                },
                {
                  name: "",
                  command: "C",
                  notes: ["中段ボディプレス3連"],
                },
                {
                  name: "呻",
                  command: "D",
                  notes: ["ガード不能の爆発"],
                },
              ],
            },
            {
              name: "",
              command: "C",
              notes: ["中段ボディプレス3連"],
              skills: [
                {
                  name: "",
                  command: "A",
                  notes: ["中段フック3連"],
                },
                {
                  name: "",
                  command: "B",
                  notes: ["下段フック3連"],
                },
                {
                  name: "",
                  command: "C",
                  notes: ["中段ボディプレス3連"],
                },
                {
                  name: "呻",
                  command: "D",
                  notes: ["ガード不能の爆発"],
                },
              ],
            },
            {
              name: "呻",
              command: "D or 未入力",
              notes: ["ガード不能の爆発"],
            },
            {
              name: "",
              command: "AB",
              notes: ["ガード不能のフック・フック・アッパー"],
            },
            {
              name: "",
              command: "BC",
              notes: ["中段投げ"],
            },
            {
              name: "",
              command: "CD",
              notes: ["中段の高速吹っ飛び"],
            },
            {
              name: "",
              command: "AC",
              notes: ["中段の突進連撃"],
              skills: [
                {
                  name: "呻",
                  command: "",
                  notes: ["ガード不能の爆発 / 自動発動"],
                },
              ],
            },
            {
              name: "",
              command: "BD",
              notes: ["ガード不能の空中降下（追尾）"],
            },
            {
              name: "",
              command: "AD",
              notes: ["上段当て身"],
              skills: [
                {
                  name: "",
                  command: "",
                  notes: ["中段暴走 / 自動発動"],
                  skills: [
                    {
                      name: "緊急停止",
                      command: "ABCD",
                    },
                    {
                      name: "",
                      command: "",
                      notes: ["ガード不能の空中降下（追尾） / 自動発動"],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
