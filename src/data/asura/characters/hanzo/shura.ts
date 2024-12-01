import type { DataItem } from "../../../../types"

export const asuraHanzoShura: DataItem = {
  id: "asura-hanzo-shura",
  name: "服部半蔵（修羅）",
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
          name: "衝",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "影",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "流",
          command: "↘+C",
          notes: ["中・中", "×・×"],
        },
        {
          name: "燕",
          command: "↗+C",
          notes: ["中段", "×"],
        },
        {
          name: "闇",
          command: "↓+B",
          notes: ["中段", "×"],
        },
        {
          name: "幻",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "空",
          command: "→→+B",
          notes: ["中段", "×"],
        },
        {
          name: "凶",
          command: "→→+C",
          notes: ["G不能 / キャンセル発動可", "×"],
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
          name: "烈風手裏剣",
          command: "↓↘→+A or B or 怒時AB（空中も可）",
        },
        {
          name: "爆炎龍",
          command: "↓↙←+A or B or 怒時AB",
        },
        {
          name: "爆炎陣",
          command: "↓↙←+C",
        },
        {
          name: "爆炎微塵隠れ",
          command: "→↓↘+C",
        },
        {
          name: "空蝉 天舞",
          command: "→↘↓↙←+A",
          notes: ["全段当身性能あり"],
        },
        {
          name: "空蝉 地斬",
          command: "→↘↓↙←+B",
          notes: ["全段当身性能あり"],
        },
        {
          name: "影分身",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "影舞",
          command: "←↓↙+D",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "乱れ烈風手裏剣",
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
          name: "アスラ斬魔伝 / キャラ雑感 服部半蔵（修羅） - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1%20/%20%a5%ad%a5%e3%a5%e9%bb%a8%b4%b6%a4%ca%a4%c9#hanA",
        },
        {
          name: "アスラ斬魔伝 / 服部半蔵 - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%c8%be%c2%a2",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 修羅服部半蔵技一覧 - YouTube",
          href: "https://youtu.be/w1fa4IttFQ8",
        },
      ],
    },
  ],
}
