import type { DataItem } from "../../../../types"

export const asuraRimururuShura: DataItem = {
  id: "asura-rimururu-shura",
  name: "リムルル（修羅）",
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
          name: "速下段",
          command: "↓+C",
          notes: ["下段", "×"],
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
          notes: ["キャンセル発動可"],
        },
        {
          name: "飛び越し（後）",
          command: "←←+D",
          notes: ["キャンセル発動可"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "ルプㇱ クアレ",
          command: "↓↘→+A or B or 怒時AB",
        },
        {
          name: "コンル ノンノ",
          command: "→↓↘+A or B or 怒時AB",
        },
        {
          name: "ウプン オㇷ゚",
          command: "↓↙←+A or B",
        },
        {
          name: "コンル シラㇽ",
          command: "空中で↓+C",
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
              name: "くるくる！無敵連回転",
              command: "D",
            },
          ],
        },
        {
          name: "エタイェ シノッ",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "セトゥル ヤイト ゥパレ",
          command: "相手の背後から→↓↘+C",
          notes: ["中段投げ / 投げ抜け:C"],
        },
        {
          name: "テㇽケ ポン オンカミクル",
          command: "↓↘→+C",
          notes: ["下段投げ / 投げ抜け:C"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "ルプㇱ カムイ エムㇱ（ニㇱ）",
          command: "↓↘→+BC",
          notes: ["ボタン継続押しで持ち続ける"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / リムルル - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%a5%ea%a5%e0%a5%eb%a5%eb",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 修羅リムルル技一覧 - YouTube",
          href: "https://youtu.be/9dbBq-Qla7A",
        },
      ],
    },
  ],
}
