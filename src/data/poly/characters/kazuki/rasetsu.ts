import type { DataItem } from "../../../../types"

export const polyKazukiRasetsu: DataItem = {
  id: "poly-kazuki-rasetsu",
  name: "風間火月（羅刹）",
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
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→→+A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "←+A",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "←→+A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→→+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "←+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↖+B",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "←→+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→+AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↘↘+A",
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
          command: "↘+AB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↓+AB",
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
          name: "八熱地獄・等活",
          command: "A・A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "八熱地獄・黒縄",
          command: "A・B",
          notes: ["上・中", "×・×"],
        },
        {
          name: "八熱地獄・衆合",
          command: "A・A・A",
          notes: ["上・上・中", "×・×・×"],
        },
        {
          name: "八熱地獄・叫喚",
          command: "A・A・↓+B",
          notes: ["上・上・下", "×・×・×"],
        },
        {
          name: "八熱地獄・大叫喚",
          command: "A・A・↓+B・B",
          notes: ["上・上・下・上", "×・×・×・×"],
        },
        {
          name: "八熱地獄・焦熱",
          command: "A・A・B",
          notes: ["上・上・上", "×・×・×"],
        },
        {
          name: "八熱地獄・大焦熱",
          command: "A・A・A・B",
          notes: ["上・上・中・中", "×・×・×・×"],
        },
        {
          name: "八熱地獄・無間",
          command: "A・A・A・B・→+B",
          notes: ["上・上・中・中・中", "×・×・×・×・×"],
        },
        {
          name: "肘打顔面拳",
          command: "↘+A・B",
          notes: ["中・上", "×・×"],
        },
        {
          name: "飛炎烈震拳",
          command: "屈AB・AB",
          notes: ["中・上", "×・×"],
        },
        {
          name: "踵鎌",
          command: "→+A・←+B",
          notes: ["中・上", "×・×"],
        },
        {
          name: "牙炎拳",
          command: "↘+AB・B",
          notes: ["中・中", "×・×"],
        },
        {
          name: "双炎牙",
          command: "BC・B",
          notes: ["中・中", "×・×"],
        },
        {
          name: "紅蓮双拳",
          command: "←→+B・B",
          notes: ["中・中", "×・×"],
        },
        {
          name: "飛炎烈火拳",
          command: "←→+B・B・A",
          notes: ["中・中・中", "×・×・×"],
        },
        {
          name: "灼熱轟炎拳",
          command: "←→+B・B・B",
          notes: ["中・中・上", "×・×・×"],
        },
        {
          name: "紅蓮爆炎掌",
          command: "←→+B・B・→↓↘+C",
          notes: ["中・中・上", "×・×・×"],
        },
        {
          name: "烈火双炎刃",
          command: "←→+A・→+AB",
          notes: ["中・中", "×・×"],
        },
        {
          name: "烈火破吼山",
          command: "←→+A・→+AB・→→+AB",
          notes: ["中・中・上", "×・×・×"],
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
          notes: ["中段 or 下段"],
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
                            {
                              name: "",
                              command: "AB・AB・AB",
                            },
                            {
                              name: "",
                              command: "→+B・B・B・B",
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
              command: "AB・A",
              skills: [
                {
                  name: "駆け引きポイント",
                  command: "A or B",
                  notes: ["中段 or 下段"],
                  skills: [
                    {
                      name: "",
                      command: "A・A",
                      skills: [
                        {
                          name: "駆け引きポイント",
                          command: "A or B",
                          notes: ["中段 or 下段"],
                          skills: [
                            {
                              name: "",
                              command: "A・A",
                              skills: [
                                {
                                  name: "駆け引きポイント",
                                  command: "A or B",
                                  notes: ["中段 or 下段"],
                                  skills: [
                                    {
                                      name: "",
                                      command: "A・A",
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
          ],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "不動撃",
          command: "↓↘→+A or B",
        },
        {
          name: "火炎撃",
          command: "←↓↙+B",
        },
        {
          name: "灼熱地獄・命門",
          command: "→↓↘+C",
          notes: ["上段投げ"],
          skills: [
            {
              name: "灼熱地獄・暴爆",
              command: "→↓↘+B",
            },
          ],
        },
        {
          name: "炎滅",
          command: "↓↙←+A or B",
        },
        {
          name: "六道烈火・祓",
          command: "→↓↘+A",
          skills: [
            {
              name: "六道烈火・爆",
              command: "B",
              skills: [
                {
                  name: "六道烈火・滅",
                  command: "→↓↘+B",
                },
              ],
            },
          ],
        },
        {
          name: "炎邪覚醒",
          command: "↓↓+AB",
        },
        {
          name: "六道烈火・地獄道",
          command: "覚醒中に→↓↘+A",
          skills: [
            {
              name: "六道烈火・餓鬼道",
              command: "B",
              skills: [
                {
                  name: "六道烈火・畜生道",
                  command: "B",
                  skills: [
                    {
                      name: "六道烈火・修羅道",
                      command: "→↓↘+B",
                      skills: [
                        {
                          name: "六道烈火・人道",
                          command: "→↓↘+AB",
                          skills: [
                            {
                              name: "六道烈火・天道",
                              command: "↓↓+AB",
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
          name: "狂覚醒",
          command: "覚醒中に↓↓↓+AB",
        },
        {
          name: "狂覚醒・呻",
          command: "狂覚醒中に移動",
        },
        {
          name: "狂覚醒・叫",
          command: "狂覚醒中にA",
        },
        {
          name: "狂覚醒・吼",
          command: "狂覚醒中にB",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "大炎上",
          command: "→↘↓↙←+AB",
        },
      ],
    },
  ],
}
