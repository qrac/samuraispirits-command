import type { DataItem } from "../../../../types"

export const asuraMorosumiRasetsu: DataItem = {
  id: "asura-morosumi-rasetsu",
  name: "八角泰山（羅刹）",
  groups: [
    {
      title: "通常技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      accordion: "normal",
      skills: [
        {
          name: "",
          command: "近A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "近B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "遠A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "遠B",
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
          command: "近屈A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "近屈B",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "遠屈A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "遠屈B",
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
          name: "柄頭打ち",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "石頭",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "爆槍砕",
          command: "↗+B",
          notes: ["中段", "×"],
        },
        {
          name: "地薙ぎ",
          command: "↓+B",
          notes: ["下段", "×"],
        },
        {
          name: "突き",
          command: "→→+B",
          notes: ["中段", "×"],
        },
        {
          name: "泰山吼",
          command: "→→+C",
          notes: ["中段", "×"],
        },
        {
          name: "回天槍",
          command: "↘↘+B",
          notes: ["上・上", "×・×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "封字の法「炎」",
          command: "↓↘→+A or B or 怒時AB",
        },
        {
          name: "封字の法「噴」",
          command: "→↘↓↙←+A or B or C or 怒時AB",
        },
        {
          name: "封字の法「封印」",
          command: "↓↘→+C",
          notes: ["上段投げ / 投げ抜け:C / 必殺技とジャンプを10秒封印"],
        },
        {
          name: "封字の法「乱」",
          command: "↓↙←+C",
          notes: ["上段投げ / 投げ抜け:C / レバー操作の上下左右を10秒逆転"],
        },
        {
          name: "封字の法「因果」",
          command: "←↓↙+C",
          notes: ["上中段当て身"],
        },
        {
          name: "空天槍 ",
          command: "空中で↓↘→+B",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "封字の法 禁じ手「火炎爆」",
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
          name: "アスラ斬魔伝 / 八角泰山 - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%c8%ac%b3%d1",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 羅刹八角泰山技一覧 - YouTube",
          href: "https://youtu.be/kF3y3C1krE4",
        },
      ],
    },
  ],
}
