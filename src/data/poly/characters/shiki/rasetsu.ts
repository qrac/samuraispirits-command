import type { DataItem } from "../../../../types"

export const polyShikiRasetsu: DataItem = {
  id: "poly-shiki-rasetsu",
  name: "色（羅刹）",
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
          notes: ["G不能", "×"],
        },
        {
          name: "",
          command: "→+A",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "→→+A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["上・上", "×・○"],
        },
        {
          name: "",
          command: "→→+B",
          notes: ["上・中", "×・×"],
        },
        {
          name: "",
          command: "←+B",
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
          command: "↙+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↖+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↓N+B",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "↘+AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "↙+AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "屈A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈B",
          notes: ["下・下", "×・×"],
        },
        {
          name: "",
          command: "屈AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "背面AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "背面BC",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "背面CD",
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
          name: "カイラース",
          command: "A・A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "マトゥラー",
          command: "A・A・B",
          notes: ["上・上・（上・上）", "×・×・（○・○）"],
        },
        {
          name: "ハリドワール",
          command: "A・A・→+B",
          notes: ["上・上・上", "×・×・×"],
        },
        {
          name: "ヴァーラーナスィー",
          command: "A・A・↘+B",
          notes: ["上・上・下", "×・×・×"],
        },
        {
          name: "アラーハーバード",
          command: "A・A・↘+B・ヒット後←+B",
          notes: ["上・上・下・上", "×・×・×・×"],
        },
        {
          name: "アマルナート",
          command: "A・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "ウッタラーカンド",
          command: "A・B・↑+B",
          notes: ["上・上・上", "×・×・×"],
        },
        {
          name: "ガヤー",
          command: "→→+A・B",
          notes: ["中・中", "×・×"],
        },
        {
          name: "ジャガンナート",
          command: "→→+A・B・↖+B",
          notes: ["中・中・中", "×・×・×"],
        },
        {
          name: "ラーメーシュワラム",
          command: "→→+A・B・↘+B",
          notes: ["中・中・下", "×・×・×"],
        },
        {
          name: "ウッジャイン",
          command: "↙+AB・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "ドワールカー",
          command: "↙+AB・↘+B",
          notes: ["上・中", "×・×"],
        },
        {
          name: "クルクシェートラ",
          command: "↙+AB・↓+B",
          notes: ["上・下", "×・×"],
        },
        {
          name: "ガンガーサーガル",
          command: "↙+AB・↗+A",
          notes: ["上・ー", "×・×"],
        },
        {
          name: "カーンチープラム",
          command: "↓N+B・→+B",
          notes: ["下・中", "×・×"],
        },
        {
          name: "ヴァイディヤナート",
          command: "BCヒット後↖+B",
          notes: ["G不能・中", "×・×"],
        },
        {
          name: "カニヤークマリ",
          command: "屈AB・→+B",
          notes: ["上・中", "×・×"],
        },
        {
          name: "第1の空華・阿",
          command: "↗+A・A",
          notes: ["ー・中", "×・×"],
        },
        {
          name: "第2の空華・阿",
          command: "↗+A・B",
          notes: ["ー・下", "×・×"],
        },
        {
          name: "第3の空華・阿",
          command: "↗+A・D",
          notes: ["ー・ー", "×・×"],
        },
        {
          name: "第4の空華・阿",
          command: "↗+A・C",
          notes: ["ー・ー", "×・×"],
        },
        {
          name: "第1の空華・吽",
          command: "↖+A・B",
          notes: ["ー・中", "×・×"],
        },
        {
          name: "第2の空華・吽",
          command: "↖+A・C",
          notes: ["ー・ー", "×・×"],
        },
        {
          name: "第3の空華・吽",
          command: "↖+A・D",
          notes: ["ー・ー", "×・×"],
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
          name: "転法輪",
          command: "↓↘→+A",
        },
        {
          name: "沙喇",
          command: "→↓↘+B",
          skills: [
            {
              name: "双鷲",
              command: "←+B",
            },
          ],
        },
        {
          name: "刹那",
          command: "↓↙←+A or B or C or D or AB or BC or CD or AD",
        },
        {
          name: "無常",
          command: "←↓↙+A",
        },
        {
          name: "無憂華",
          command: "←↓↙+C",
          notes: ["全段当て身"],
        },
        {
          name: "無明",
          command: "→↓↘+C",
        },
        {
          name: "波羅夷",
          command: "体力1割以下で→↓↘+C",
        },
        {
          name: "色咒",
          command: "↓↘→+C",
        },
        {
          name: "空華・阿",
          command: "↗+A",
        },
        {
          name: "空華・吽",
          command: "↖+A",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "涅槃",
          command: "→↓↘+AB",
        },
      ],
    },
  ],
}
