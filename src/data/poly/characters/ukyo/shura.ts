import type { DataItem } from "../../../../types"

export const polyUkyoShura: DataItem = {
  id: "poly-ukyo-shura",
  name: "橘右京（修羅）",
  groups: [
    {
      title: "通常技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
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
          command: "→+A",
          notes: ["上段", "×"],
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
          command: "↗+B",
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
          command: "↘↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↙ or ↘+AB",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈↙ or ↓+A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "屈B",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈AB",
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
          command: "空中でAB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "起き上がり中A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "起き上がり中B",
          notes: ["下段", "×"],
        },
      ],
    },
    {
      title: "コンビネーション技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      skills: [
        {
          name: "水平連斬",
          command: "A・A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "風車",
          command: "A・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "風車 乱",
          command: "A・B・B",
          notes: ["上・上・中", "×・×・×"],
        },
        {
          name: "風車 閃",
          command: "A・↓+B",
          notes: ["上・下", "×・×"],
        },
        {
          name: "夢想二連",
          command: "→+B・B",
          notes: ["上・中", "×・×"],
        },
        {
          name: "流雲連撃",
          command: "↘+B・B",
          notes: ["中・上", "×・×"],
        },
      ],
    },
    {
      title: "S・C・S",
      skills: [
        {
          name: "",
          command: "CD（中段 / スタミナ半分必要）",
          skills: [
            {
              name: "",
              command: "A・A・A・A or B・B・B・B",
              skills: [
                {
                  name: "駆け引きポイント",
                  command: "A（中段） or B（下段）",
                  skills: [
                    {
                      name: "",
                      command: "A・A・A or B・B・B",
                      skills: [
                        {
                          name: "駆け引きポイント",
                          command: "A（中段） or B（下段）",
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
          name: "秘剣 ツバメ返し",
          command: "空中で↓↘→+B",
        },
        {
          name: "秘剣 ささめゆき",
          command: "↓↙←+A",
        },
        {
          name: "非剣 ささめゆき",
          command: "↓↙←+D",
        },
        {
          name: "秘剣 朧刀",
          command: "↓↘→+B",
        },
        {
          name: "秘剣 天つ風",
          command: "→↘↓↙←+A",
        },
        {
          name: "秘剣 霜風",
          command: "→↘↓↙←+B",
        },
        {
          name: "秘剣 天霜の構え",
          command: "→↘↓↙←+A",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "飛燕十刃",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
}