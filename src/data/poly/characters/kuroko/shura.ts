import type { DataItem } from "../../../../types"

export const polyKurokoShura: DataItem = {
  id: "poly-kuroko-shura",
  name: "黒子（修羅）",
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
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "BC",
          notes: ["G不能", "×"],
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
          command: "↗+A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "←+A",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "↖+A",
          notes: ["上段", "×"],
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
          command: "↗+B",
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
          notes: ["中段", "×"],
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
          command: "↙+A",
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
          command: "↙+B",
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
          command: "↓N+AB",
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
          command: "屈BC",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "屈↘+A",
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
      skills: [
        {
          name: "黒子八極拳・壱",
          command: "A・A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "黒子八極拳・弐",
          command: "A・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "黒子八極拳・参",
          command: "A・A・A",
          notes: ["上・上・中", "×・×・×"],
        },
        {
          name: "黒子八極拳・四",
          command: "A・A・↓+B",
          notes: ["上・上・下", "×・×・×"],
        },
        {
          name: "黒子八極拳・伍",
          command: "A・A・↓+B・B",
          notes: ["上・上・下・上", "×・×・×・×"],
        },
        {
          name: "黒子八極拳・六",
          command: "A・A・B",
          notes: ["上・上・上", "×・×・×"],
        },
        {
          name: "黒子八極拳・七",
          command: "A・A・A・B",
          notes: ["上・上・中・中", "×・×・×・×"],
        },
        {
          name: "黒子八極拳・極",
          command: "A・A・A・B・→+B",
          notes: ["上・上・中・中・中", "×・×・×・×・×"],
        },
        {
          name: "顔砕き",
          command: "屈AB・AB",
          notes: ["中・中", "×・×"],
        },
        {
          name: "踵切り",
          command: "→+A・←+B",
          notes: ["中・中", "×・×"],
        },
        {
          name: "腹砕き",
          command: "←→+B・B",
          notes: ["中・中", "×・×"],
        },
        {
          name: "腹顎砕き",
          command: "←→+B・B・A",
          notes: ["中・中・中", "×・×・×"],
        },
        {
          name: "腹顔砕き",
          command: "←→+B・B・B",
          notes: ["中・中・上", "×・×・×"],
        },
        {
          name: "腹脚砕き",
          command: "←→+B・B・↓N+B",
          notes: ["中・中・下", "×・×・×"],
        },
        {
          name: "総身砕き",
          command: "←→+B・B・↓+B・B",
          notes: ["中・中・下・上", "×・×・×・×"],
        },
        {
          name: "足刀双脚",
          command: "↘+B・B",
          notes: ["中・中", "×・×"],
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
          name: "罰",
          command: "←↙↓↘→+C",
          notes: ["上段投げ"],
        },
        {
          name: "雷",
          command: "→↘↓↙←+C",
          notes: ["上段投げ"],
        },
        {
          name: "砕",
          command: "↖+C",
          notes: ["上段投げ"],
        },
        {
          name: "麟",
          command: "↓+C",
          notes: ["下段投げ"],
        },
        {
          name: "雹",
          command: "↘↘+C",
          notes: ["下段投げ"],
        },
        {
          name: "霞",
          command: "↗+C",
          notes: ["全段投げ"],
        },
        {
          name: "巴投げ",
          command: "↙+C",
          notes: ["上段投げ"],
        },
        {
          name: "上段当て身",
          command: "←+BC",
          notes: ["上段当て身"],
        },
        {
          name: "中段当て身",
          command: "↙+BC",
          notes: ["中段当て身"],
          skills: [
            {
              name: "中段当て身～転",
              command: "",
            },
            {
              name: "中段当て身～落",
              command: "A",
            },
            {
              name: "中段当て身～罰",
              command: "B",
            },
            {
              name: "中段当て身～雷",
              command: "C",
            },
          ],
        },
        {
          name: "蜘蛛走り",
          command: "↓↘→+D",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "黒子流もず落とし",
          command: "→↓↘+AB",
          notes: ["上段投げ"],
        },
      ],
    },
    {
      title: "システム",
      skills: [
        {
          name: "黒子の使用方法",
          command:
            "対戦のキャラ選択時にADで決定し、剣質選択時にBCで決定する（1回対戦後にカーソルを合わせていたキャラに変化）",
        },
      ],
    },
  ],
}
