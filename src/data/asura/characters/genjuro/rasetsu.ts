import type { DataItem } from "../../../../types"

export const asuraGenjuroRasetsu: DataItem = {
  id: "asura-genjuro-rasetsu",
  name: "牙神幻十郎（羅刹）",
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
          name: "百鬼殺",
          command: "↓↘→+A or B or 怒時AB",
        },
        {
          name: "牙神突",
          command: "→↘↓↙←+A or B",
          notes: ["ガード不能 / ボタン継続押しで威力と距離増加"],
        },
        {
          name: "紫暮",
          command: "←↓↙+A or B",
        },
        {
          name: "引きずり回し",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "盃割り",
          command: "↓↘→+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "盃砕き",
          command: "→↘↓↙←+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "賭場荒らし",
          command: "←↓↙+C",
          notes: ["上段ガード崩し投げ / 投げ抜け不可"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "役縛り",
          command: "↓↘→+BC",
        },
      ],
    },
  ],
}
