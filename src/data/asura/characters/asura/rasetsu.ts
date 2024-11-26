import type { DataItem } from "../../../../types"

export const asuraAsuraRasetsu: DataItem = {
  id: "asura-asura-rasetsu",
  name: "反面のアスラ（羅刹）",
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
          notes: ["上段", "○"],
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
          command: "（浮遊）A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（浮遊）B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（浮遊）C",
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
          name: "アサク＝アラク",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "マウ＝キュラト",
          command: "↘+C",
          notes: ["上段", "×"],
        },
        {
          name: "テラウ＝クロト",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "レアブ＝マ",
          command: "→→+A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "ルエギル＝グプス",
          command: "→→+B",
          notes: ["中・上", "×・×"],
        },
        {
          name: "ビ＝ラータ",
          command: "→→+C",
          notes: ["中・上", "×・×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "レ＝イルバグ",
          command: "↓↘→+A or B or 怒時AB",
        },
        {
          name: "レ＝ウグアル",
          command: "空中で↓↘→+A or B or 怒時AB",
        },
        {
          name: "レイ・マール",
          command: "→↓↘+A or B",
        },
        {
          name: "レアシィマ",
          command: "→↘↓↙←+A or B",
        },
        {
          name: "レタグ＝ラグ",
          command: "↓↘→+C",
          notes: ["ガード不能"],
        },
        {
          name: "ルエ＝レズ",
          command: "N+（A or B or C or D）継続押し",
          notes: ["体力回復"],
        },
        {
          name: "ノア＝ラテム",
          command: "←↓↙+D",
          notes: ["強化 / 時間で体力減少 / 体力枯渇で解除"],
          skills: [
            {
              name: "解除",
              command: "←↓↙+D",
            },
            {
              name: "レイル＝ハイ",
              command: "←↓↙+A or B or C",
              notes: ["ガード不能 / 強化解除"],
            },
          ],
        },
        {
          name: "レイ＝カース",
          command: "←↓↙+D",
          notes: ["浮遊モードに変化 / 10秒経過で解除"],
          skills: [
            {
              name: "解除",
              command: "←↓↙+D",
            },
            {
              name: "ミ＝ブレク",
              command: "←↓↙+A or B or C",
              notes: ["ガード不能 / 強化解除"],
            },
          ],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "レイ＝ファ＝ラース",
          command: "←↙↓↘→+BC",
        },
        {
          name: "リーン＝エーク",
          command: "浮遊中に↓↘→+BC",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / アスラ - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%a5%a2%a5%b9%a5%e9",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 羅刹アスラ(反面のアスラ)技一覧 - YouTube",
          href: "https://youtu.be/Mcv9C87Yegc",
        },
      ],
    },
  ],
}
