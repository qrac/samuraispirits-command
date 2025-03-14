import type { DataItem } from "../../../../types"

export const asuraGalfordShura: DataItem = {
  id: "asura-galford-shura",
  name: "ガルフォード（修羅）",
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
          name: "ライジングシュート",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "ライトニングサマー",
          command: "↖+C",
          notes: ["中段", "×"],
        },
        {
          name: "ライトニングヘッド",
          command: "↑+C",
          notes: ["中段", "×"],
        },
        {
          name: "ライトニングボレー",
          command: "↗+C",
          notes: ["中段", "×"],
        },
        {
          name: "スピニングローキック",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "ローリングスラッシュ",
          command: "→→+A",
          notes: ["上段", "×"],
        },
        {
          name: "グランドローリングスラッシュ",
          command: "→→+B",
          notes: ["下段", "×"],
        },
        {
          name: "ライトニングダイブヘッド",
          command: "→→+C",
          notes: ["中段", "×"],
        },
        {
          name: "ライトニングスライド",
          command: "↘↘+C",
          notes: ["下段", "×"],
        },
        {
          name: "バク転",
          command: "←←+D",
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "ラッシュドッグ",
          command: "↓↘→+A or 怒時AB",
        },
        {
          name: "マシンガンドッグ",
          command: "↓↘→+B",
        },
        {
          name: "ストライクドッグ",
          command: "↓↘→+C",
        },
        {
          name: "レプリカドッグ",
          command: "↓↙←+A or 怒時AB",
        },
        {
          name: "オーバーヘッドクラッシュ",
          command: "↓↙←+B",
        },
        {
          name: "パピィに餌をあげる",
          command: "↓↙←+C",
          notes: ["秘奥義以外のパピイ技を1回強化（約1.5倍）"],
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
          name: "M.S.D.（メガストライクドッグ）",
          command: "怒時←↙↓↘→+AB",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "D.D.D.（ダンシングドッグダイナマイト）",
          command: "↓↘→+BC",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / キャラ雑感 ガルフォード（修羅） - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1%20/%20%a5%ad%a5%e3%a5%e9%bb%a8%b4%b6%a4%ca%a4%c9#galA",
        },
        {
          name: "アスラ斬魔伝 / ガルフォード - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%a5%ac%a5%eb%a5%d5%a5%a9%a1%bc%a5%c9",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 修羅ガルフォード技一覧 - YouTube",
          href: "https://youtu.be/8ue35pZgO_k",
        },
      ],
    },
  ],
}
