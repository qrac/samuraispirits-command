import type { DataItem } from "../../../../types"

export const polyNakoruruRasetsu: DataItem = {
  id: "poly-nakoruru-rasetsu",
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
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "BC",
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
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↖+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→→+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↘+AB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "屈A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈B",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "屈BC",
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
          command: "空中でBC",
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
      title: "コンビネーション技",
      titleNote: "入力 / 属性 / キャンセル",
      accordion: "combination",
      skills: [
        {
          name: "双猫爪",
          command: "A・A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "双猫円舞",
          command: "A・A・B",
          notes: ["上・上・中", "×・×・×"],
        },
        {
          name: "双猫螺旋円舞",
          command: "A・A・B・←+B",
          notes: ["上・上・中・中", "×・×・×・×"],
        },
        {
          name: "猫突弧円蹴",
          command: "A・B",
          notes: ["上・中", "×・×"],
        },
      ],
    },
    {
      title: "S・C・S",
      accordion: "scs",
      skills: [
        {
          name: "",
          command: "CD",
          skills: [
            {
              name: "",
              command: "A・A・A・A or B・B・B・B",
              skills: [
                {
                  name: "駆け引きポイント",
                  command: "A or B",
                  notes: ["中段 or 下段"],
                  skills: [
                    {
                      name: "",
                      command: "A・A・A or B・B・B",
                      skills: [
                        {
                          name: "駆け引きポイント",
                          command: "A or B",
                          notes: ["中段 or 下段"],
                          skills: [
                            {
                              name: "",
                              command: "A・A or B・B",
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
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "アンヌ ムツベ",
          command: "←↙↓+A",
        },
        {
          name: "レラ ムツベ",
          command: "←↙↓+B",
        },
        {
          name: "カムイ リㇺセ",
          command: "←↓↙+A",
        },
        {
          name: "カムイ シキテ",
          command: "↓↘→+A",
        },
        {
          name: "レラ オ チキリ",
          command: "→↓↘+C",
          notes: ["全段投げ"],
        },
        {
          name: "疾走 流転胸撃刃",
          command: "↓↘→+C",
          notes: ["上段投げ"],
        },
        {
          name: "円舞双掌",
          command: "BC・A",
        },
        {
          name: "円舞剛脚",
          command: "BC・B",
          notes: ["相手が男性キャラの場合のみ"],
        },
        {
          name: "シクルゥを撫でる",
          command: "↓↓+AB",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "イルスカ カムイ シキテ",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "ナコルル - 侍魂～SAMURAI SPIRITS～ 攻略wiki - atwiki",
          href: "https://w.atwiki.jp/samuraispirits64/pages/21.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "SAMURAI SPIRITS 〜侍魂〜（ポリサム）ナコルル（羅刹）全技一覧 - YouTube",
          href: "https://youtu.be/WycXlPTUVQ4",
        },
      ],
    },
  ],
}
