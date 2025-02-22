import type { DataItem } from "../../../types"

export const zeroKusaregedo: DataItem = {
  id: "zero-kusaregedo",
  name: "妖怪腐れ外道",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "悪霊呼び",
          command: "↓↘→+斬",
        },
        {
          name: "胃液吐き",
          command: "↓↙←+斬",
        },
        {
          name: "肉持ち上げ",
          command: "←↓↙+C",
        },
        {
          name: "外道の烙印押し",
          command: "近距離で→←↓↑+C",
        },
        {
          name: "泥投げ",
          command: "↘←↙↓↘→←↓↙+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "飛び頭突き",
          command: "↓↘→+CD",
        },
        {
          name: "外道の獲物狩り",
          command: "近距離で→↗↑↖←↙↓↑+CD",
        },
      ],
    },
  ],
}
