import type { DataItem } from "../../../../types"

export const polyHanzoShura: DataItem = {
  id: "poly-hanzo-shura",
  name: "服部半蔵（修羅）",
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
          command: "AB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "BC",
          notes: ["G不能", "×"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↗+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→+AB",
          notes: ["中段", "×"],
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
          command: "↓N+A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "↓N+B",
          notes: ["下段", "×"],
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
          command: "空中でAB",
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
          name: "臨",
          command: "A・A",
          notes: ["上・上", "○・×"],
        },
        {
          name: "兵",
          command: "A・A・A",
          notes: ["上・上・中", "○・×・○"],
        },
        {
          name: "闘",
          command: "A・A・A・A",
          notes: ["上・上・中・中", "○・×・○・×"],
        },
        {
          name: "者",
          command: "A・A・B",
          notes: ["上・上・上", "○・×・×"],
        },
        {
          name: "皆",
          command: "A・A・C",
          notes: ["上・上・上", "○・×・×"],
        },
        {
          name: "陣",
          command: "↓N+A・A",
          notes: ["下・下", "×・×"],
        },
        {
          name: "列",
          command: "↓N+A・A・B",
          notes: ["下・下・下", "×・×・×"],
        },
        {
          name: "在",
          command: "↓N+B・B",
          notes: ["下・中", "×・×"],
        },
        {
          name: "前",
          command: "↘+B・↓+AB",
          notes: ["中・下", "×・×"],
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
          name: "烈風手裏剣",
          command: "↓↘→+A（空中も可）",
        },
        {
          name: "忍法 爆炎龍",
          command: "↓↙←+A",
        },
        {
          name: "忍法 爆炎陣",
          command: "↓↙←+C",
        },
        {
          name: "忍法 爆炎微塵隠れ",
          command: "→↓↘+B",
        },
        {
          name: "忍法 空蝉 天舞",
          command: "→↘↓↙←+A",
        },
        {
          name: "忍法 空蝉 地斬",
          command: "→↘↓↙←+B",
        },
        {
          name: "忍法 影分身",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "忍法 影舞",
          command: "↓↓+BC",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "乱れ烈風手裏剣",
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
          name: "服部半蔵 - 侍魂～SAMURAI SPIRITS～ 攻略wiki - atwiki",
          href: "https://w.atwiki.jp/samuraispirits64/pages/27.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "SAMURAI SPIRITS 〜侍魂〜（ポリサム）服部半蔵（修羅/羅刹）全技一覧 - YouTube",
          href: "https://youtu.be/8EytqeePo2c",
        },
      ],
    },
  ],
}
