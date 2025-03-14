import type { DataItem } from "../../../../types"

export const asuraAsuraShura: DataItem = {
  id: "asura-asura-shura",
  name: "アスラ（修羅）",
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
          name: "ロツァラ",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "サキュルフ",
          command: "↘+C",
          notes: ["上段", "×"],
        },
        {
          name: "リーヴ",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "セネロフ",
          command: "→→+A",
          notes: ["上・上", "×・×"],
        },
        {
          name: "イルティス",
          command: "→→+B",
          notes: ["中・上", "×・×"],
        },
        {
          name: "ハティリル",
          command: "→→+C",
          notes: ["中・上", "×・×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "シェドムーサ",
          command: "↓↘→+A or B or 怒時AB",
        },
        {
          name: "ロジェレフ",
          command: "→↓↘+A or B or 怒時AB",
        },
        {
          name: "ナハイベル",
          command: "←↓↙+A or B",
        },
        {
          name: "ノマム",
          command: "←↓↙+C",
          notes: ["上中段当て身 / 飛び道具相殺"],
        },
        {
          name: "エレス",
          command: "↓↘→+C",
          notes: ["ガード不能"],
        },
        {
          name: "ブベズリーブ",
          command: "←↙↓↘→+C",
          notes: ["ガード不能"],
        },
        {
          name: "レフィシュル",
          command: "→↘↓↙←+A or B",
          skills: [
            {
              name: "追加攻撃",
              command: "A or B",
              notes: ["派生前と同一ボタンを使用"],
            },
            {
              name: "フェイク",
              command: "C",
            },
            {
              name: "移動",
              command: "D",
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
          name: "サナタス",
          command: "←↙↓↘→+BC",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / キャラ雑感 アスラ（修羅） - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1%20/%20%a5%ad%a5%e3%a5%e9%bb%a8%b4%b6%a4%ca%a4%c9#asrA",
        },
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
          name: "サムライスピリッツ2アスラ斬魔伝 修羅アスラ技一覧 - YouTube",
          href: "https://youtu.be/dnS3vcCXy6c",
        },
      ],
    },
  ],
}
