import type { DataItem } from "../../../../types"

export const polyGenjuroShura: DataItem = {
  id: "poly-genjuro-shura",
  name: "牙神幻十郎（修羅）",
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
          command: "←+A",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "←+B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "→→+B",
          notes: ["上段", "×"],
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
          command: "↙+A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↙+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↘↘+B",
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
          name: "快刀連刃",
          command: "A・A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "巧刀戻刃",
          command: "A・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "邪連砕",
          command: "←+A・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "邪光連華",
          command: "←+A・B・B",
          notes: ["上・上・上", "×・×・×"],
        },
        {
          name: "連環足刀",
          command: "←+B・B",
          notes: ["上・中", "×・○"],
        },
        {
          name: "やくざ礼儀",
          command: "→+B・B",
          notes: ["上・中", "×・×"],
        },
        {
          name: "やくざ礼儀 裏",
          command: "→+B・↓N+B",
          notes: ["上・下", "×・×"],
        },
        {
          name: "肘打連携割砕刃",
          command: "→→+B・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "地獄作法 初",
          command: "→+AB・A",
          notes: ["中・中", "×・×"],
        },
        {
          name: "地獄作法 馴染",
          command: "→+AB・A・B",
          notes: ["中・中・上", "×・×・×"],
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
            {
              name: "",
              command: "AB",
              skills: [
                {
                  name: "駆け引きポイント",
                  command: "A（中段） or B（下段） or AB（中段） or AD（下段）",
                  skills: [
                    {
                      name: "",
                      command: "AB・AB",
                    },
                  ],
                },
              ],
            },
            {
              name: "",
              command: "BD・BD・BD・BD・BD",
            },
            {
              name: "",
              command: "AD・AD・AD・AD・AD",
            },
          ],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "桜華斬",
          command: "↓↙←+A",
        },
        {
          name: "光翼刃",
          command: "→↓↘+B",
        },
        {
          name: "三連殺 牙",
          command: "↓↘→+B",
          skills: [
            {
              name: "三連殺 角",
              command: "↓↘→+B",
              skills: [
                {
                  name: "三連殺 燐",
                  command: "↓↘→+B",
                },
              ],
            },
          ],
        },
        {
          name: "雫刃",
          command: "近距離で→↓↘+C",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
}
