import type { DataItem } from "../../../../types"

export const asuraRimururuRasetsu: DataItem = {
  id: "asura-rimururu-rasetsu",
  name: "リムルル（羅刹）",
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
          command: "屈↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈↙ or ↘+C",
          notes: ["下段", "×"],
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
          name: "速下段",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "跳蹴",
          command: "↘+C",
          notes: ["中段", "×"],
          skills: [
            {
              name: "空円蹴",
              command: "↖+C",
              notes: ["中段", "×"],
            },
          ],
        },
        {
          name: "空円蹴",
          command: "↖+C",
          notes: ["中段", "×"],
        },
        {
          name: "中段避け AT 屈伸打頭",
          command: "↘↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "中段避け AT 氷柱斬り",
          command: "立 or 屈↘+B",
          notes: ["上段", "×"],
        },
        {
          name: "双掌破",
          command: "屈↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "座位背身短脚",
          command: "C中にD",
          notes: ["中段", "×"],
        },
        {
          name: "立位背身短脚",
          command: "屈C中にD",
          notes: ["下段", "×"],
        },
        {
          name: "天舞脚",
          command: "（背面）↑+C",
          notes: ["上段", "×"],
        },
        {
          name: "北風蹴",
          command: "（背面）屈↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "滑地蹴",
          command: "（背面）屈↙+C",
          notes: ["下段", "×"],
        },
        {
          name: "張弓突",
          command: "→→+A",
          notes: ["中段", "×"],
        },
        {
          name: "裂地斬",
          command: "→→+B",
          notes: ["上段", "×"],
        },
        {
          name: "飛翔頭襲",
          command: "→→+C",
          notes: ["下段", "×"],
        },
        {
          name: "背振斬",
          command: "←←+A",
          notes: ["上段", "×"],
        },
        {
          name: "飛び越し（前）",
          command: "→→+D",
        },
        {
          name: "飛び越し（後）",
          command: "←←+D",
        },
        {
          name: "「いけてなーい！」",
          command: "AD",
          notes: ["キャンセル発動可"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "コンル メㇺ",
          command: "↓↙←+A or B or 怒時AB",
        },
        {
          name: "カムイ シトゥキ",
          command: "←↓↙+A or B",
        },
        {
          name: "コンル シラㇽ",
          command: "空中で↓+C or 怒時AB",
        },
        {
          name: "カルカルセ（シヌ）",
          command: "↓↘→+D （or ↘+D）",
          notes: ["↘+Dはキャンセルから発動不可"],
          skills: [
            {
              name: "くるくる！氷柱斬り",
              command: "B",
            },
            {
              name: "くるくる！双掌破",
              command: "C",
            },
            {
              name: "くるくる！飛翔頭襲",
              command: "→+C",
            },
            {
              name: "くるくる！怒寒蹴り",
              command: "←+C",
            },
            {
              name: "くるくる！兎脚突",
              command: "相手の背後でC",
            },
            {
              name: "下段避け 前転天抱襲",
              command: "↑+C",
            },
            {
              name: "中段避け 前転屈伸打頭",
              command: "↓+C",
            },
            {
              name: "くるくる！無敵連回転",
              command: "D",
            },
          ],
        },
        {
          name: "カルカルセ（エンカ）",
          command: "↓↙←+D （or ↙+D）",
          notes: ["↙+Dはキャンセルから発動不可"],
          skills: [
            {
              name: "くるっと！後転強力撃",
              command: "B",
            },
            {
              name: "くるっと！後転跳躍襲",
              command: "→→+C",
            },
            {
              name: "くるくる！双掌破",
              command: "C",
            },
            {
              name: "くるくる！飛翔頭襲",
              command: "→+C",
            },
            {
              name: "くるくる！怒寒蹴り",
              command: "←+C",
            },
            {
              name: "くるくる！兎脚突",
              command: "相手の背後でC",
            },
            {
              name: "くるくる！無敵連回転",
              command: "D",
            },
          ],
        },
        {
          name: "アラカ アラカ",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "ピリカノ オカ ヤン",
          command: "相手の背後から→↓↘+C",
          notes: ["中段投げ / 投げ抜け:C"],
        },
        {
          name: "テㇽケ ポン オンカミクル",
          command: "↓↘→+C",
          notes: ["下段投げ / 投げ抜け:C"],
        },
        {
          name: "ルプㇱ テク ヌム",
          command: "→↘↓↙←+C",
          notes: ["上段投げ / 投げ抜け不可"],
        },
        {
          name: "ルプシ トゥム",
          command: "←↓↙+D",
          notes: ["強化 / 時間で体力減少 / 体力枯渇で解除"],
          skills: [
            {
              name: "解除",
              command: "←↓↙+D",
            },
            {
              name: "コンル ストゥ",
              command: "←↓↙+C",
              notes: ["ガード不能 / 強化解除"],
            },
          ],
        },
        {
          name: "エプンキネ コンル",
          command: "吹っ飛び中にABCD",
          notes: ["ガード不能"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "ルヤンペ コンル ノチゥ",
          command: "↓↘→+BC",
          notes: ["ボタン継続押しで持ち続ける"],
        },
      ],
    },
  ],
}
