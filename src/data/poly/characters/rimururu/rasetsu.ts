import type { DataItem } from "../../../../types"

export const polyRimururuRasetsu: DataItem = {
  id: "poly-rimururu-rasetsu",
  name: "リムルル（羅刹）",
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
          notes: ["上段", "○"],
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
          command: "←+B",
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
          command: "→→+A",
          notes: ["中段", "○"],
        },
        {
          name: "",
          command: "↓N+AB",
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
          notes: ["上段", "×"],
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
          name: "熊爪翼破",
          command: "A・A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "熊爪双掌",
          command: "A・A・B",
          notes: ["上・上・中", "×・×・×"],
        },
        {
          name: "螺旋双破",
          command: "AB・B",
          notes: ["上・上", "×・○"],
        },
        {
          name: "跳蹴崩",
          command: "←+B・B",
          notes: ["上・下", "×・×"],
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
          notes: ["中段"],
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
          name: "ルプㇱ クアレ（トィトィ）",
          command: "↓↘→+A",
        },
        {
          name: "カムイ シトゥキ",
          command: "↓↘→+B",
        },
        {
          name: "コンル メㇺ",
          command: "↓↙←+A",
        },
        {
          name: "テㇽケ ポン オンカミクル",
          command: "↓+C",
          notes: ["下段投げ"],
        },
        {
          name: "ルプㇱ カムイ ウェイサンペコル",
          command: "ダッシュ中にAB",
        },
        {
          name: "ルプシ トゥム",
          command: "↓↓+AB",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "ルプㇱ カムイ エムㇱ（トィトィ）",
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
          name: "リムルル - 侍魂～SAMURAI SPIRITS～ 攻略wiki - atwiki",
          href: "https://w.atwiki.jp/samuraispirits64/pages/24.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "SAMURAI SPIRITS 〜侍魂〜（ポリサム）リムルル（修羅/羅刹）全技一覧 - YouTube",
          href: "https://youtu.be/PeUsBAdnyiY",
        },
      ],
    },
  ],
}
