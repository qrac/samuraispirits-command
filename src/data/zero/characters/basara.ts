import type { DataItem } from "../../../types"

export const zeroBasara: DataItem = {
  id: "zero-basara",
  name: "首斬り破沙羅",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "地刺し",
          command: "↓↘→+斬",
        },
        {
          name: "空刺し",
          command: "空中で↓↘→+斬",
        },
        {
          name: "鵺魂",
          command: "↓↘→+C",
        },
        {
          name: "友引",
          command: "近距離で→↓↘+C",
        },
        {
          name: "刺し足",
          command: "空中で↓+C",
        },
        {
          name: "影吸い",
          command: "↓↙←+C",
        },
        {
          name: "影出",
          command: "→↓↘+斬",
        },
        {
          name: "影騙し",
          command: "←↓↙+斬 or C",
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
        {
          name: "頭骨割り",
          command: "空中で↙ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "影舞い・夢彈",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
  ],
}
