import type { DataItem } from "../../../../types"

export const polyRimururuShura: DataItem = {
  id: "poly-rimururu-shura",
  name: "リムルル（修羅）",
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
          name: "ルプㇱ クアレ（ニㇱ）",
          command: "↓↘→+A",
          skills: [
            {
              name: "氷の華を発生",
              command: "A",
            },
          ],
        },
        {
          name: "ウプン オㇷ゚",
          command: "↓↘→+B",
        },
        {
          name: "コンル ノンノ",
          command: "→↓↘+B",
        },
        {
          name: "コンル シラㇽ",
          command: "空中で↓↓+A",
        },
        {
          name: "ルプㇱ テㇰ ヌㇺ",
          command: "近距離で→↘↓↙←+C",
        },
        {
          name: "テㇽケ ポン オンカミクル",
          command: "近距離で↓+C",
        },
        {
          name: "ルプㇱ カムイ ウェイサンペコル",
          command: "ダッシュ中AB",
        },
        {
          name: "エプンキネ コンル",
          command: "ふっ飛びダメージ中AB",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "ルプㇱ カムイ エムㇱ（ニㇱ）",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}