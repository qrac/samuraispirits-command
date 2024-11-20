import type { DataItem } from "../../../../types"

export const asuraSougetsuShura: DataItem = {
  id: "asura-sougetsu-shura",
  name: "風間蒼月（修羅）",
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
          name: "月刺",
          command: "↘+A",
          notes: ["中段", "×"],
        },
        {
          name: "逆月刃",
          command: "↘+B",
          notes: ["中段", "×"],
        },
        {
          name: "月嶺脚",
          command: "↘+C",
          notes: ["中段", "×"],
        },
        {
          name: "流月刃",
          command: "↓+B",
          notes: ["上段", "×"],
        },
        {
          name: "月沈脚",
          command: "↓+C",
          notes: ["下段", "×"],
        },
        {
          name: "旋月刃",
          command: "→→+A",
          notes: ["上段", "×"],
        },
        {
          name: "月下旋月刃",
          command: "→→+B",
          notes: ["下段", "×"],
        },
        {
          name: "月砕脚",
          command: "→→+C",
          notes: ["中段", "×"],
        },
        {
          name: "夢月刃・裏",
          command: "AD",
          notes: ["上段（軸移動）", "×"],
        },
        {
          name: "夢月刃・表",
          command: "BD",
          notes: ["上段（軸移動）", "×"],
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
          name: "月輪波",
          command: "↓↘→+A or B or 怒時AB（空中も可）",
          notes: ["召喚全消費 / 召喚数で数増加"],
        },
        {
          name: "浮月",
          command: "↓↘→+C",
          notes: ["召喚全消費 / 召喚数で数増加"],
        },
        {
          name: "月光",
          command: "→↓↘+A or B or C",
          notes: ["召喚全消費 / 召喚数で巨大化・時間増加"],
        },
        {
          name: "死月",
          command: "空中で↓↙←+C",
        },
        {
          name: "月隠れ",
          command: "←↓↙+A or B or C or D",
        },
        {
          name: "召還",
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
          name: "月昇 水柱波",
          command: "→↘↓↙←+BC",
        },
      ],
    },
  ],
}
