import type { DataItem } from "../../../../types"

export const polySougetsuRasetsu: DataItem = {
  id: "poly-sougetsu-rasetsu",
  name: "風間蒼月（羅刹）",
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
          command: "BD",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "↗+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "←+B",
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
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "↓+AB",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "↓N+A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "↓N+BD",
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
      skills: [
        {
          name: "蒼連水・睦月",
          command: "A・A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "蒼連水・卯月",
          command: "A・B",
          notes: ["上・上", "×・○"],
        },
        {
          name: "蒼連水・文月",
          command: "A・A・A",
          notes: ["上・上・上", "×・×・×"],
        },
        {
          name: "蒼連水・長月",
          command: "A・A・A・B",
          notes: ["上・上・上・下", "×・×・×・×"],
        },
        {
          name: "蒼連水・極月",
          command: "A・A・B",
          notes: ["上・上・上", "×・×・×"],
        },
        {
          name: "月乱れ・月破",
          command: "→+A・↘+B",
          notes: ["中・中", "×・×"],
        },
        {
          name: "月乱れ・祓い",
          command: "→+A・↓+B",
          notes: ["中・下", "×・×"],
        },
        {
          name: "蒼連脚・月朔",
          command: "BC",
          notes: ["上", "×"],
        },
        {
          name: "蒼連脚・如月",
          command: "BC・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "蒼連脚・水無月",
          command: "BC・↘+B",
          notes: ["上・中", "×・×"],
        },
        {
          name: "蒼連脚・霜月",
          command: "BC・↓+B",
          notes: ["上・下", "×・×"],
        },
        {
          name: "月惑い",
          command: "↘+B・B",
          notes: ["中・中", "×・×"],
        },
        {
          name: "月連脚・雫",
          command: "↓N+A・A",
          notes: ["下・下", "×・×"],
        },
        {
          name: "月連脚・雲",
          command: "↓N+A・B",
          notes: ["下・中", "×・×"],
        },
        {
          name: "月連脚・惑",
          command: "↓N+A・A・B",
          notes: ["下・下・中", "×・×・×"],
        },
        {
          name: "螺旋舞",
          command: "AB・↓+AB",
          notes: ["上・下", "×・×"],
        },
      ],
    },
    {
      title: "S・C・S",
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
                              command: "→+A・A",
                              skills: [
                                {
                                  name: "駆け引きポイント",
                                  command: "A or B",
                                  notes: ["中段 or 下段"],
                                  skills: [
                                    {
                                      name: "",
                                      command: "B・B・AB",
                                    },
                                    {
                                      name: "",
                                      command: "AB・AB・AB",
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              name: "",
                              command: "A・A or B・B",
                            },
                            {
                              name: "",
                              command: "AB・B・B",
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
          name: "月輪波",
          command: "↓↘→+A or B（空中も可）",
        },
        {
          name: "死月",
          command: "空中で↓↙←+C",
        },
        {
          name: "蓮華水舞・青蓮華",
          command: "→↓↘+A",
          skills: [
            {
              name: "蓮華水舞・紅蓮華",
              command: "B",
              skills: [
                {
                  name: "蓮華水舞・白蓮華",
                  command: "→↓↘+B",
                },
              ],
            },
          ],
        },
        {
          name: "水邪覚醒",
          command: "↓↓+AB",
        },
        {
          name: "蓮華水舞・生",
          command: "覚醒中に→↓↘+A",
          skills: [
            {
              name: "蓮華水舞・幼",
              command: "B",
              skills: [
                {
                  name: "蓮華水舞・青",
                  command: "B",
                  skills: [
                    {
                      name: "蓮華水舞・中",
                      command: "B",
                      skills: [
                        {
                          name: "蓮華水舞・老",
                          command: "B",
                          skills: [
                            {
                              name: "蓮華水舞・死",
                              command: "→↓↘+AB",
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
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "月昇 水柱波",
          command: "→↘↓↙←+AB",
        },
      ],
    },
  ],
}