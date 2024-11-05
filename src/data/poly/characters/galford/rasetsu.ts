import type { DataItem } from "../../../../types"

export const polyGalfordRasetsu: DataItem = {
  id: "poly-galford-rasetsu",
  name: "ガルフォード（羅刹）",
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
          name: "プラズマブレード",
          command: "↓↘→+A",
          skills: [
            {
              name: "プラズマスパーク",
              command: "AB",
            },
          ],
        },
        {
          name: "ライトニングスラッシュ",
          command: "↓↘→+B",
        },
        {
          name: "プラズマブレイク",
          command: "→↓↘+B",
        },
        {
          name: "ストライクヘッズ",
          command: "近距離で→↓↘+C",
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
          name: "プラズマファクト",
          command: "↓↓+BC",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "LST（ライトニングストライクスリー）",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}
