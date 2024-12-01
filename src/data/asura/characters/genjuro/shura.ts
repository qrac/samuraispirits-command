import type { DataItem } from "../../../../types"

export const asuraGenjuroShura: DataItem = {
  id: "asura-genjuro-shura",
  name: "牙神幻十郎（修羅）",
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
          name: "撲撃襲打",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "水月抉り",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "破落戸蹴り",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "膝骨砕き",
          command: "↓+A",
          notes: ["下段", "×"],
        },
        {
          name: "蹴り足博徒殺し",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "水月突き",
          command: "屈↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "地擦り斬り",
          command: "→→+A",
          notes: ["下段", "×"],
        },
        {
          name: "極縦斬",
          command: "→→+B",
          notes: ["上段", "×"],
        },
        {
          name: "膝蹴り臓腑打ち",
          command: "→→+C",
          notes: ["中段", "×"],
        },
        {
          name: "斬殺旋",
          command: "↘↘+A",
          notes: ["上段", "×"],
        },
        {
          name: "極横断",
          command: "↘↘+B",
          notes: ["中段", "×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "桜華斬",
          command: "↓↙←+A or B",
        },
        {
          name: "光翼刃",
          command: "→↓↘+A or B or 怒時AB",
        },
        {
          name: "三連殺 牙",
          command: "↓↘→+A or B or 怒時AB",
          skills: [
            {
              name: "三連殺 角",
              command: "↓↘→+A or B or 怒時AB",
              notes: ["派生前と同一ボタンを使用"],
              skills: [
                {
                  name: "三連殺 燐",
                  command: "↓↘→+A or B or 怒時AB",
                  notes: ["派生前と同一ボタンを使用"],
                },
              ],
            },
          ],
        },
        {
          name: "雫刃",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け不可"],
        },
        {
          name: "盃割り",
          command: "↓↘→+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
          command: "→↓↘+BC",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / キャラ雑感 牙神幻十郎（修羅） - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1%20/%20%a5%ad%a5%e3%a5%e9%bb%a8%b4%b6%a4%ca%a4%c9#genA",
        },
        {
          name: "アスラ斬魔伝 / 牙神幻十郎 - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1/%b8%b8%bd%bd%cf%ba",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 修羅牙神幻十郎技一覧 - YouTube",
          href: "https://youtu.be/51aHGV8Oy6M",
        },
      ],
    },
  ],
}
