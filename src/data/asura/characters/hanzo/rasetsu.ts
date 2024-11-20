import type { DataItem } from "../../../../types"

export const asuraHanzoRasetsu: DataItem = {
  id: "asura-hanzo-rasetsu",
  name: "服部半蔵（羅刹）",
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
          command: "C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→+A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "→+B",
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
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "屈C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（背面）A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（背面）屈A",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "（背面）屈B",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "（背面）屈C",
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
          command: "空中でC",
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
      title: "固有技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      accordion: "unique",
      skills: [
        {
          name: "衝",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "崩",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "虚",
          command: "↓+A",
          notes: ["下段", "×"],
        },
        {
          name: "闇",
          command: "↓+B",
          notes: ["中段", "×"],
        },
        {
          name: "廻",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "双",
          command: "→→+A",
          notes: ["上段", "×"],
        },
        {
          name: "空",
          command: "→→+B",
          notes: ["中段", "×"],
        },
        {
          name: "幽",
          command: "→→+D",
        },
        {
          name: "背",
          command: "←←+D",
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "影分身",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "猿舞",
          command: "←↓↙+A or B or C or D",
        },
        {
          name: "静音",
          command: "↓↓+C",
        },
        {
          name: "爆韻",
          command: "被ダメージ中にABCD",
          notes: ["ガード不能"],
        },
        {
          name: "もず落とし",
          command: "→↓↘+C or 怒時AB",
          notes: ["上段投げ / 投げ抜け:C（怒版AB）"],
        },
        {
          name: "上段当て身",
          command: "→↓↘+A",
          notes: ["上中段当て身"],
          skills: [
            {
              name: "もず落とし",
              command: "←↓↙+C or 怒時AB",
              notes: ["投げ抜け不可"],
            },
            {
              name: "罰 or 雷 or 碎に派生可能",
              command: "",
              notes: ["投げ抜け不可"],
            },
          ],
        },
        {
          name: "下段当て身",
          command: "→↓↘+B",
          notes: ["下段当て身"],
          skills: [
            {
              name: "もず落とし",
              command: "←↓↙+C or 怒時AB",
              notes: ["投げ抜け不可"],
            },
            {
              name: "罰 or 雷 or 碎に派生可能",
              command: "",
              notes: ["投げ抜け不可"],
            },
          ],
        },
        {
          name: "蜘蛛走り",
          command: "↓↘→+D",
          skills: [
            {
              name: "もず落とし",
              command: "←↓↙+C or 怒時AB",
              notes: ["上段投げ / 投げ抜け:C（怒版AB）"],
            },
            {
              name: "蝕",
              command: "C",
              notes: ["下段投げ / 投げ抜け:A"],
              skills: [
                {
                  name: "律",
                  command: "CD・AB",
                  notes: ["投げ抜け:A"],
                },
                {
                  name: "冥",
                  command: "D・C・B・A",
                  notes: ["ダウン投げ / 首 / 投げ抜け:B"],
                  skills: [
                    {
                      name: "業",
                      command: "ABCD・CD・AB",
                      notes: ["つり天井固め / 投げ抜け:A"],
                    },
                  ],
                },
                {
                  name: "獄",
                  command: "AB・CD・BC",
                  notes: ["ダウン投げ / 腕 / 投げ抜け:C"],
                },
              ],
            },
            {
              name: "（技名不明）",
              command: "相手の背後から←+C",
              notes: ["中段投げ / 投げ抜け不可"],
            },
            {
              name: "罰 or 雷 or 碎に派生可能",
              command: "",
            },
          ],
        },
        {
          name: "罰",
          command: "←↙↓↘→+C",
          notes: ["上段投げ / 腕を極める / 投げ抜け:C"],
          skills: [
            {
              name: "麟",
              command: "A・B・C・D",
              notes: ["下段投げ / 投げ抜け:A"],
              skills: [
                {
                  name: "断",
                  command: "AD・BC・ABCD",
                  notes: ["踏みつけ / 投げ抜け:A"],
                },
              ],
            },
            {
              name: "朧",
              command: "B・C・BC",
              notes: ["背後から関節 / 投げ抜け:B"],
              skills: [
                {
                  name: "戒",
                  command: "A・C・B・D・BC",
                  notes: ["のど元切り / 投げ抜け:B"],
                },
              ],
            },
          ],
        },
        {
          name: "雷",
          command: "→↘↓↙←+C",
          notes: ["上段投げ / 投げ飛ばし / 投げ抜け:C"],
          skills: [
            {
              name: "冥",
              command: "D・C・B・A",
              notes: ["ダウン投げ / 首 / 投げ抜け:A"],
              skills: [
                {
                  name: "業",
                  command: "ABCD・CD・AB",
                  notes: ["つり天井固め / 投げ抜け:A"],
                },
              ],
            },
            {
              name: "獄",
              command: "AB・CD・BC",
              notes: ["ダウン投げ / 腕 / 投げ抜け:B"],
            },
          ],
        },
        {
          name: "砕",
          command: "←+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "胤",
          command: "→→+C",
          notes: ["上段投げ / 飛びつき腕を極める / 投げ抜け:C"],
        },
        {
          name: "霞",
          command: "↗+C",
          notes: ["中段投げ / 飛びつき首をへし折る / 投げ抜け:C"],
        },
        {
          name: "麟",
          command: "相手が屈時に↙+C",
          notes: ["下段投げ / 投げ抜け:C"],
          skills: [
            {
              name: "断",
              command: "AD・BC・ABCD",
              notes: ["踏みつけ / 投げ抜け:A"],
            },
          ],
        },
        {
          name: "雹",
          command: "相手が屈時に↘+C",
          notes: ["下段投げ / 投げ抜け:C"],
        },
        {
          name: "冥",
          command: "与ダウン時に↘+C",
          notes: ["ダウン投げ / 首 / 投げ抜け:C"],
          skills: [
            {
              name: "業",
              command: "ABCD・CD・AB",
              notes: ["つり天井固め / 投げ抜け:A"],
            },
          ],
        },
        {
          name: "獄",
          command: "与ダウン時に↙+C",
          notes: ["ダウン投げ / 腕 / 投げ抜け:C"],
        },
        {
          name: "輦",
          command: "相手の背後から←+C",
          notes: ["中段投げ / 投げ抜け:C"],
          skills: [
            {
              name: "骸",
              command: "BC・A・D",
              notes: ["投げ抜け:A"],
              skills: [
                {
                  name: "旋",
                  command: "ABC・B・BCD・C",
                  notes: ["投げ抜け:A"],
                  skills: [
                    {
                      name: "もず落とし",
                      command: "A・C・B・D・AB・CD・ABCD （or 怒時→↓↘+AB）",
                      notes: ["投げ抜け:C（怒版AB）"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "（技名不明）",
          command: "相手の背後から→↓↘+C",
          notes: ["中段投げ / 投げ抜け不可"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "真もず落とし",
          command: "→↓↘+AB",
          notes: ["上段投げ / 投げ抜け不可"],
          skills: [
            {
              name: "",
              command: "→↓↘+C",
              notes: ["追加攻撃"],
            },
          ],
        },
      ],
    },
  ],
}
