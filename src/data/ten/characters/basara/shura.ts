import type { DataItem } from "../../../../types"

export const tenBasaraShura: DataItem = {
  id: "ten-basara-shura",
  name: "首斬り破沙羅（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "影縫い",
          command: "↓↘→+斬",
        },
        {
          name: "空刺し",
          command: "空中で↓↘→+斬",
        },
        {
          name: "鵺魂",
          command: "←↓↙+斬 or D",
        },
        {
          name: "友引",
          command: "近距離で→↓↘+斬 or D",
        },
        {
          name: "刺し足",
          command: "空中で↓+D",
        },
        {
          name: "影吸い",
          command: "↓↙←+斬 or D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
        {
          name: "頭骨割り",
          command: "空中で↙ or ↘+D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "影舞い・酬",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
}
