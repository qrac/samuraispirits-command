import type { DataItem } from "../../../../types"

export const asuraKazukiShura: DataItem = {
  id: "asura-kazuki-shura",
  name: "風間火月（修羅）",
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
          name: "踏み潰し",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "焔裁き",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "飛炎拳",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "狂炎牙",
          command: "↖+B",
          notes: ["中段", "×"],
        },
        {
          name: "双炎牙",
          command: "→→+B",
          notes: ["上・上", "×・×"],
        },
        {
          name: "怒火撃",
          command: "→→+C",
          notes: ["中段", "×"],
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
          name: "不動撃",
          command: "↓↘→+A or B or 怒時AB",
        },
        {
          name: "大爆殺",
          command: "→↓↘+A or B or 怒時AB",
        },
        {
          name: "地龍炎",
          command: "→↘↓↙←+A or B or C",
        },
        {
          name: "炎滅",
          command: "←↓↙+A or B",
          notes: ["全段当て身"],
        },
        {
          name: "肘打炎迅掌",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け:C"],
        },
        {
          name: "災炎",
          command: "↓↙←+D",
          notes: ["3つまでストック可能"],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "大炎上",
          command: "→↘↓↙←+BC",
        },
      ],
    },
  ],
}
