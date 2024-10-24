import type { DataItem } from "../../../../types"

export const zanBasaraRasetsu: DataItem = {
  id: "zan-basara-rasetsu",
  name: "首斬り破沙羅（羅刹）",
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
          name: "影出",
          command: "→↙↓↘+斬",
        },
        {
          name: "影騙し",
          command: "→←→←+斬 or D",
        },
        {
          name: "友引",
          command: "近距離で←↙↓↘→+A",
        },
        {
          name: "刺し足",
          command: "空中で↓+D",
        },
        {
          name: "影吸い",
          command: "↓↙←+D",
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
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "影舞い・夢彈",
          command: "←↙↓↘→←+BC同時押し",
        },
      ],
    },
  ],
}
