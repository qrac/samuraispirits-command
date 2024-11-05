import type { DataItem } from "../../../../types"

export const polyHanzoRasetsu: DataItem = {
  id: "poly-hanzo-rasetsu",
  name: "服部半蔵（羅刹）",
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
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "BC",
          notes: ["G不能", "×"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "↗+B",
          notes: ["中段", "×"],
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
          name: "臨",
          command: "A・A",
          notes: ["上・上", "○・×"],
        },
        {
          name: "兵",
          command: "A・A・A",
          notes: ["上・上・中", "○・×・○"],
        },
        {
          name: "闘",
          command: "A・A・A・A",
          notes: ["上・上・中・中", "○・×・○・×"],
        },
        {
          name: "者",
          command: "A・A・B",
          notes: ["上・上・上", "○・×・×"],
        },
        {
          name: "皆",
          command: "A・A・C",
          notes: ["上・上・上", "○・×・×"],
        },
        {
          name: "陣",
          command: "↓N+A・A",
          notes: ["下・下", "×・×"],
        },
        {
          name: "列",
          command: "↓N+A・A・B",
          notes: ["下・下・下", "×・×・×"],
        },
        {
          name: "在",
          command: "↓N+B・B",
          notes: ["下・中", "×・×"],
        },
        {
          name: "前",
          command: "↘+B・↓+AB",
          notes: ["中・下", "×・×"],
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
          ],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "烈風手裏剣",
          command: "↓↘→+A（空中も可）",
        },
        {
          name: "忍法 影分身",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "忍法 猿舞",
          command: "←↓↙+A or B or C or D",
        },
        {
          name: "忍法 静音",
          command: "↓↓+A",
        },
        {
          name: "忍法 蜘蛛走り",
          command: "↘↘",
        },
        {
          name: "忍法 爆韻",
          command: "被ダメージ中BC",
        },
        {
          name: "もず落とし",
          command: "近距離で→↓↘+C",
        },
        {
          name: "上段当て身",
          command: "←+BC",
          skills: [
            {
              name: "地面転がし投げ",
              command: "",
            },
            {
              name: "もず落とし",
              command: "近距離で→↓↘+C",
              notes: ["（投げ抜け:A）"],
            },
            {
              name: "罰 or 雷に派生可能",
              command: "",
            },
          ],
        },
        {
          name: "中段当て身",
          command: "↙+BC",
          skills: [
            {
              name: "地面転がし投げ",
              command: "",
            },
            {
              name: "もず落とし",
              command: "近距離で→↓↘+C",
              notes: ["（投げ抜け:A）"],
            },
            {
              name: "罰 or 雷に派生可能",
              command: "",
            },
          ],
        },
        {
          name: "下段当て身",
          command: "↓+BC",
          skills: [
            {
              name: "輦",
              command: "",
              skills: [
                {
                  name: "骸",
                  command: "BC・A・D",
                  skills: [
                    {
                      name: "旋",
                      command: "ABC・B・BCD・C",
                      skills: [
                        {
                          name: "もず落とし",
                          command: "A・C・B・D・AB・CD・ABCD",
                          notes: ["（投げ抜け:D）"],
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
          name: "罰",
          command: "近距離で←↙↓↘→+C",
          notes: ["（上段投げ / 腕を極める / 投げ抜け:B）"],
          skills: [
            {
              name: "朧",
              command: "B・C・BC",
              notes: ["（背後から関節 / 投げ抜け:A）"],
              skills: [
                {
                  name: "戒",
                  command: "A・C・B・D・BC",
                  notes: ["（のど元切り）"],
                },
              ],
            },
            {
              name: "麟",
              command: "A・B・C・D",
              notes: ["（下段投げ / 投げ抜け:B）"],
              skills: [
                {
                  name: "断",
                  command: "AD・BC・ABCD",
                  notes: ["（踏みつけ）"],
                },
              ],
            },
          ],
        },
        {
          name: "雷",
          command: "近距離で→↘↓↙←+C",
          notes: ["（上段投げ / 投げ飛ばし / 投げ抜け:C）"],
          skills: [
            {
              name: "冥",
              command: "D・C・B・A",
              notes: ["（ダウン投げ / 首 / 投げ抜け:C）"],
              skills: [
                {
                  name: "業",
                  command: "ABCD・CD・AB",
                  notes: ["（つり天井固め）"],
                },
              ],
            },
            {
              name: "獄",
              command: "AB・CD・BC",
              notes: ["（ダウン投げ / 腕 / 投げ抜け:D）"],
            },
          ],
        },
        {
          name: "麟",
          command: "相手が屈時に近距離で↓+C",
          notes: ["（下段投げ）"],
          skills: [
            {
              name: "断",
              command: "AD・BC・ABCD",
              notes: ["（踏みつけ）"],
            },
          ],
        },
        {
          name: "雹",
          command: "相手が屈時に近距離で↓↘→+C",
          notes: ["（下段投げ）"],
        },
        {
          name: "冥",
          command: "与ダウン時に近距離で↘+C",
          notes: ["（ダウン投げ / 首 / 投げ抜け:A）"],
          skills: [
            {
              name: "業",
              command: "ABCD・CD・AB",
              notes: ["（つり天井固め）"],
            },
          ],
        },
        {
          name: "獄",
          command: "与ダウン時に近距離で↙+C",
          notes: ["（ダウン投げ / 腕 / 投げ抜け:B）"],
        },
        {
          name: "砕",
          command: "近距離で→+C",
          notes: ["（上段投げ / 投げ抜け:D）"],
        },
        {
          name: "胤",
          command: "→→+C",
          notes: ["（飛びつき上段投げ / 腕を極める）"],
        },
        {
          name: "霞",
          command: "↗+C",
          notes: ["（飛びつき中段投げ / 首をへし折る）"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "真もず落とし",
          command: "近距離で→↓↘+AB",
        },
      ],
    },
  ],
}
