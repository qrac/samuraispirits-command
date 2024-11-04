import type { DataItem } from "../../../../types"

export const polyNakoruruRasetsu: DataItem = {
  id: "poly-nakoruru-rasetsu",
  name: "ナコルル（羅刹）",
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
      skills: [
        {
          name: "",
          command: "CD（スタミナ半分必要）",
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
          name: "レラ オ チキリ",
          command: "近距離で→↓↘+C",
        },
        {
          name: "カムイ シキテ",
          command: "↓↘→+A",
        },
        {
          name: "疾走 流転胸撃刃",
          command: "↓↘→+C",
        },
        {
          name: "シクルゥを撫でる",
          command: "↓↓+AB",
        },
        {
          name: "円舞双掌",
          command: "BC・A",
        },
        {
          name: "円舞剛脚",
          command: "BC・B（相手が男性キャラの場合のみ）",
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
}
