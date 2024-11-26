import type { DataItem } from "../../../../types"

export const asuraNakoruruRasetsu: DataItem = {
  id: "asura-nakoruru-rasetsu",
  name: "ナコルル（羅刹）",
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
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "（背面）屈C",
          notes: ["中段", "×"],
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
          command: "（狼乗）A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（狼乗）B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（狼乗）C",
          notes: ["中段", "○"],
        },
        {
          name: "",
          command: "（狼乗）→+A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（狼乗）→+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（狼乗）→+C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（狼乗・背面）A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（狼乗・背面）B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（狼乗・背面）C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（狼乗）空中でA",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（狼乗）空中でB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（狼乗）空中でC",
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
          name: "速中段",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "昇跳馬脚",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "天破脚",
          command: "屈↘+C",
          notes: ["上段", "×"],
        },
        {
          name: "弧円蹴",
          command: "↖+C",
          notes: ["中・中", "×・×"],
        },
        {
          name: "急下蹴",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "流閃光風斬",
          command: "→→+A",
          notes: ["中段", "×"],
        },
        {
          name: "螺旋翼破",
          command: "→→+B",
          notes: ["上段", "×"],
        },
        {
          name: "二連撃（縦～下段）",
          command: "↘↘+A",
          notes: ["上・下", "×・×"],
        },
        {
          name: "二連撃（中～縦）",
          command: "↘↘+B",
          notes: ["中・中", "×・×"],
        },
        {
          name: "円舞蹴",
          command: "↘↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "孤空裂脚",
          command: "空中で→+C",
          notes: ["中段", "×"],
        },
        {
          name: "空鷲脚",
          command: "空中で↓+C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（狼乗）→→+B",
          notes: ["中段", "×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "アンヌ ムツベ",
          command: "←↙↓+A or B or 怒時AB",
        },
        {
          name: "レラ ムツベ",
          command: "→↓↘+A or B or 怒時AB",
        },
        {
          name: "カムイ リㇺセ",
          command: "←↓↙+A or B or 怒時AB",
        },
        {
          name: "カムイ シキテ",
          command: "↓↘→+A or B",
        },
        {
          name: "疾走 流転胸撃刃",
          command: "↓↘→+C",
        },
        {
          name: "円舞剛脚",
          command: "→↓↘+C",
          notes: ["上段投げ / 男性限定 / 投げ抜け:C"],
        },
        {
          name: "円舞双掌",
          command: "→↓↘+C",
          notes: ["上段投げ / 女性限定 / 投げ抜け:C"],
        },
        {
          name: "シクルゥに乗る",
          command: "↓↙←+D",
          skills: [
            {
              name: "降りる",
              command: "↓↙←+D（空中も可）",
            },
            {
              name: "乗り攻撃",
              command: "A or B or C",
            },
            {
              name: "メル シキテ",
              command: "←↙↓+A or B or 怒時AB",
              skills: [
                {
                  name: "カムイ ムツベ",
                  command: "レバー左右 or 上方向+C",
                },
              ],
            },
            {
              name: "カント シキテ",
              command: "→↓↘+A or B or 怒時AB",
              skills: [
                {
                  name: "イメル シキテ",
                  command: "↓↘→+A or B",
                  skills: [
                    {
                      name: "カムイ ムツベ",
                      command: "レバー左右 or 下方向+C",
                    },
                  ],
                },
                {
                  name: "カムイ ムツベ",
                  command: "レバー左右 or 下方向+C",
                },
              ],
            },
            {
              name: "イメル シキテ",
              command: "空中で←↙↓+A or B",
              skills: [
                {
                  name: "カムイ ムツベ",
                  command: "レバー左右 or 下方向+C",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "イルスカ エムシ ネワ シキテ",
          command: "↓↙←+BC",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / ナコルル - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%a5%ca%a5%b3%a5%eb%a5%eb",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 羅刹ナコルル技一覧 - YouTube",
          href: "https://youtu.be/CWi8uQrv9kI",
        },
      ],
    },
  ],
}
