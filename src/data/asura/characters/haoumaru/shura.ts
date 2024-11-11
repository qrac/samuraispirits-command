import type { DataItem } from "../../../../types"

export const asuraHaoumaruShura: DataItem = {
  id: "asura-haoumaru-shura",
  name: "覇王丸（修羅）",
  groups: [
    {
      title: "通常技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
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
      skills: [
        {
          name: "踏み込み下段斬り",
          command: "→→+A",
          notes: ["下段", "×"],
        },
        {
          name: "下段柄打ち",
          command: "↓+A",
          notes: ["下段", "×"],
        },
        {
          name: "中段柄打ち",
          command: "↘+A",
          notes: ["中段", "○"],
        },
        {
          name: "薙ぎ払い",
          command: "B中にB",
          notes: ["上段", "×"],
        },
        {
          name: "飛燕返し",
          command: "屈B中にB",
          notes: ["上段", "×"],
        },
        {
          name: "踏み込み縦斬り",
          command: "→→+B",
          notes: ["上段", "×"],
          skills: [
            {
              name: "斬り上げ",
              command: "B",
              notes: ["上段", "×"],
            },
          ],
        },
        {
          name: "突き",
          command: "↘+B",
          notes: ["中段", "×"],
          skills: [
            {
              name: "斬り下ろし",
              command: "B",
              notes: ["上段", "×"],
            },
          ],
        },
        {
          name: "背後薙ぎ払い",
          command: "（背面）B中にB",
          notes: ["上段", "×"],
        },
        {
          name: "背後飛燕返し",
          command: "（背面）屈B中にB",
          notes: ["上段", "×"],
        },
        {
          name: "豪柄",
          command: "↘+C",
          notes: ["中段", "×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "旋風裂斬",
          tags: [{ name: "防御キャンセル", color: 3 }],
          command: "↓↘→+A or B",
        },
        {
          name: "旋風裂斬",
          tags: [
            { name: "怒り限定", color: 2 },
            { name: "防御キャンセル", color: 3 },
          ],
          command: "↓↘→+AB",
        },
        {
          name: "弧月斬",
          tags: [{ name: "防御キャンセル", color: 3 }],
          command: "→↓↘+A or B",
        },
        {
          name: "弧月斬",
          tags: [
            { name: "怒り限定", color: 2 },
            { name: "防御キャンセル", color: 3 },
          ],
          command: "→↓↘+AB",
        },
        {
          name: "烈震斬",
          command: "←↓↙+A or B",
        },
        {
          name: "酒瓶打ち",
          command: "↓↙←+C",
        },
        {
          name: "豪傑投げ",
          command: "→↓↘+C",
          notes: ["投げ技 / 投げ抜け:C"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "天覇封神斬",
          tags: [{ name: "怒り限定", color: 2 }],
          command: "→↓↘+BC",
        },
      ],
    },
  ],
}
