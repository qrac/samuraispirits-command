import type { DataItem } from "../../../../types"

export const asuraUkyoShura: DataItem = {
  id: "asura-ukyo-shura",
  name: "橘右京（修羅）",
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
          notes: ["上段", "○"],
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
          name: "こじり打突",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "飛びこみ斬り",
          command: "↗+B",
          notes: ["中段", "×"],
        },
        {
          name: "鞘打ち下段払い",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "踏み込み斬り",
          command: "→→+A",
          notes: ["下段", "×"],
        },
        {
          name: "夢想二連斬り",
          command: "→→+B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "かちあげ鞘打ち",
          command: "→→+C",
          notes: ["上段", "×"],
        },
        {
          name: "百日紅",
          command: "↘↘+C",
          notes: ["下段", "×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "燕返し",
          command: "空中で↓↘→+A or B or 怒時AB",
        },
        {
          name: "秘剣 細雪",
          command: "↓↙←+A or B or 怒時AB",
        },
        {
          name: "非剣 細雪",
          command: "↓↙←+D",
        },
        {
          name: "天霜の構え",
          command: "→↘↓↙←+C",
          skills: [
            {
              name: "天つ風",
              command: "A",
            },
            {
              name: "霜風",
              command: "B",
            },
          ],
        },
        {
          name: "雪崩",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け不可"],
        },
        {
          name: "春夢二連華",
          command: "←↙↓↘→+B",
          notes: ["ガード不能"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "燕六連",
          command: "→↓↘+BC（空中も可）",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / 橘右京 - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%b1%a6%b5%fe",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 修羅橘右京技一覧 - YouTube",
          href: "https://youtu.be/wrH9gSiuNyk",
        },
      ],
    },
  ],
}
