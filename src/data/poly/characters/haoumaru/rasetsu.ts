import type { DataItem } from "../../../../types"

export const polyHaoumaruRasetsu: DataItem = {
  id: "poly-haoumaru-rasetsu",
  name: "覇王丸（羅刹）",
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
          command: "→+B",
          notes: ["上段", "○"],
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
          command: "↓N+A",
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
          notes: ["上段", "○"],
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
          command: "空中で↓+A",
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
          name: "疾風連斬",
          command: "A・A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "松風剛斬",
          command: "A・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "疾風斬蹴",
          command: "A・A・B",
          notes: ["上・上・中", "×・×・×"],
        },
        {
          name: "轟砕天地",
          command: "屈AB・→+B",
          notes: ["上・上", "○・×"],
        },
        {
          name: "双豪",
          command: "↘↘+B・B",
          notes: ["中・上", "×・×"],
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
                  command: "A（中段） or B（下段） or AB（中段）",
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
          name: "旋風波",
          command: "↓↘→+A",
        },
        {
          name: "剛破",
          command: "→↓↘+A",
        },
        {
          name: "弧月斬",
          command: "→↓↘+B",
        },
        {
          name: "酒瓶打ち",
          command: "↓↙←+A",
        },
        {
          name: "連環剛破",
          command: "酒瓶が割れた状態で↓↙←+A",
          skills: [
            {
              name: "",
              command: "↓↙←+B",
              skills: [
                {
                  name: "",
                  command: "→+AB",
                  skills: [
                    {
                      name: "凄煌斬",
                      command: "←↓↙+AB",
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
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "天覇封神斬",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
}
