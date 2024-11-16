import type { DataItem } from "../../../../types"

export const polyUkyoRasetsu: DataItem = {
  id: "poly-ukyo-rasetsu",
  name: "橘右京（羅刹）",
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
          name: "雲雀",
          command: "↓↙←+B",
        },
        {
          name: "夢想真波",
          command: "←↓↙+A",
        },
        {
          name: "巻雲 甲ノ型",
          command: "←+BC",
          notes: ["上段当て身"],
        },
        {
          name: "巻雲 丙ノ型",
          command: "↓+BC",
          notes: ["下段当て身"],
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
