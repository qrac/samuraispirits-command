import type { DataItem } from "../../../../types"

export const polyHanmaShura: DataItem = {
  id: "poly-hanma-shura",
  name: "柳生磐馬（修羅）",
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
          command: "←+A",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "←+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "←→+B",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "→+AB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "←+AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "←→+AB",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "↘+A",
          notes: ["中段", "○"],
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
          command: "↘+AB",
          notes: ["上段G不能", "×"],
        },
        {
          name: "",
          command: "↓↓↓+AB",
          notes: ["G不能", "×"],
        },
        {
          name: "",
          command: "↓N+A",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "↓N+B",
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
          name: "左連拳",
          command: "A・A",
          notes: ["上・上", "○・○"],
        },
        {
          name: "連続突き",
          command: "A・A・B",
          notes: ["上・上・上", "○・○・○"],
        },
        {
          name: "左連拳弐之型",
          command: "A・A・→+B",
          notes: ["上・上・上", "○・○・×"],
        },
        {
          name: "左連拳参之型",
          command: "A・A・←+B",
          notes: ["上・上・中", "○・○・×"],
        },
        {
          name: "猪突猛進拳",
          command: "A・A・→+B or ←+B・A",
          notes: ["上・上・上 or 中・上", "○・○・×・×"],
        },
        {
          name: "雪崩式圧破",
          command: "A・A・→+B・A・B",
          notes: ["上・上・上・上・上", "○・○・×・×・×"],
        },
        {
          name: "雪崩式払苦",
          command: "A・A・←+B・A・B",
          notes: ["上・上・中・上・上", "○・○・×・×・×"],
        },
        {
          name: "馬殺し",
          command: "AB・B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "牛殺し",
          command: "→+AB・→+AB",
          notes: ["中・中", "×・×"],
        },
        {
          name: "熊殺し",
          command: "↓N+A・B・B",
          notes: ["下・中・上", "○・○・×"],
        },
        {
          name: "鬼殺し",
          command: "←+B・→+B・AB",
          notes: ["中・上・中", "×・×・×"],
        },
        {
          name: "半月崩し",
          command: "↓N+A・A",
          notes: ["下・下", "○・○"],
        },
        {
          name: "三連半月崩し",
          command: "↓N+A・A・A",
          notes: ["下・下・下", "○・○・○"],
        },
        {
          name: "半月崩し・改",
          command: "↓N+A・A・B",
          notes: ["下・下・中", "○・○・×"],
        },
        {
          name: "百壱圧破",
          command: "←+A・B・A・B",
          notes: ["上・上・上・上", "×・×・×・×"],
        },
        {
          name: "二段圧破",
          command: "←+A・→+AB",
          notes: ["上・上", "×・×"],
        },
        {
          name: "瓦割圧破",
          command: "↘+A・→+AB",
          notes: ["中・上", "○・×"],
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
          ],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "玉込め",
          command: "玉なし時に↓↘→+A",
        },
        {
          name: "鉄砕丸",
          command: "玉あり時に↓↘→+A",
          skills: [
            {
              name: "待機",
              command: "そのままA継続押し",
              notes: ["レバーで発射角度変更（斜め上・水平・斜め下）"],
            },
          ],
        },
        {
          name: "裏柳生 歯止刀",
          command: "←+BC",
          notes: ["上段当て身"],
        },
        {
          name: "持ち上げ",
          command: "→↓↘+C",
          notes: ["上段投げ"],
          skills: [
            {
              name: "放り捨て",
              command: "",
            },
            {
              name: "持ち続け",
              command: "そのままC継続押し",
              skills: [
                {
                  name: "放り捨て",
                  command: "Cを放す",
                },
              ],
            },
          ],
        },
        {
          name: "放り上げ",
          command: "↘↘+C",
          notes: ["上段投げ"],
          skills: [
            {
              name: "裏柳生流 投殺 四肢破壊固め",
              command: "←↙↓↘→+C",
            },
            {
              name: "裏柳生流 投殺 粉砕大落下",
              command: "→↘↓↙←+C",
            },
          ],
        },
        {
          name: "大外刈り",
          command: "→+C",
          notes: ["上段投げ"],
        },
        {
          name: "巴投げ",
          command: "↙+C",
          notes: ["上段投げ"],
        },
        {
          name: "山嵐",
          command: "←↙↓↘→+C",
          notes: ["上段投げ"],
        },
        {
          name: "裏柳生流 腕打遠心投",
          command: "→→+C",
          notes: ["上段投げ"],
        },
        {
          name: "裏柳生流 頭蓋落砕",
          command: "相手が屈時に↘+C",
          notes: ["下段投げ"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "鉄砕連轟丸",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}
