import type { DataItem } from "../../../../types"

export const polyGalfordShura: DataItem = {
  id: "poly-galford-shura",
  name: "ガルフォード（修羅）",
  groups: [
    {
      title: "通常技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
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
          notes: ["G不能", "×"],
        },
        {
          name: "",
          command: "→→+A",
          notes: ["上段", "○"],
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
          command: "↖+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↓N+A",
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
          name: "GC1",
          command: "A・A",
          notes: ["上・上", "○・×"],
        },
        {
          name: "GC2",
          command: "A・A・A",
          notes: ["上・上・上", "○・×・○"],
        },
        {
          name: "GC3",
          command: "A・A・→+A",
          notes: ["上・上・中", "○・×・×"],
        },
        {
          name: "GC4",
          command: "A・B",
          notes: ["上・上", "○・×"],
        },
        {
          name: "GC5",
          command: "↘+B・B",
          notes: ["中・中", "×・○"],
        },
        {
          name: "GC6",
          command: "←+B・↓+AB",
          notes: ["上・下", "×・×"],
        },
        {
          name: "GSC1",
          command: "→→+B・←+B",
          notes: ["中・中", "×・×"],
        },
        {
          name: "GSC2",
          command: "→→+B・←+B・→+AB",
          notes: ["中・中・中", "×・×・×"],
        },
        {
          name: "GSC3",
          command: "→→+B・↓+B",
          notes: ["中・下", "×・×"],
        },
        {
          name: "GSC4",
          command: "→→+B・↓+B・←→+AB",
          notes: ["中・下・中", "×・×・×"],
        },
        {
          name: "GSC5",
          command: "→→+B・↓+B・←→+AB・→↓↘+BC",
          notes: ["中・下・中・中", "×・×・×・×"],
        },
      ],
    },
    {
      title: "S・C・S",
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
            {
              name: "",
              command: "AB・AB・AB・AB",
            },
          ],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "ラッシュドッグ",
          command: "↓↘→+A",
        },
        {
          name: "マシンガンドッグ",
          command: "↓↘→+B",
        },
        {
          name: "ストライクドッグ",
          command: "↓↘→+C",
        },
        {
          name: "レプリカドッグ",
          command: "↓↙←+A",
        },
        {
          name: "オーバーヘッドクラッシュ",
          command: "↓↙←+B",
        },
        {
          name: "レプリカアタック",
          command: "→↘↓↙←+A or B",
        },
        {
          name: "シャドーコピー",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "パピィに餌をあげる",
          command: "↓↓+AB",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "MSD（メガストライクドッグ）",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}
