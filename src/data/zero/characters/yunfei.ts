import type { DataItem } from "../../../types"

export const zeroYunfei: DataItem = {
  id: "zero-yunfei",
  name: "劉雲飛",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "天威太保",
          command: "↓↘→+斬",
        },
        {
          name: "天哭封羅",
          command: "近距離で→↓↘+C",
        },
        {
          name: "天殺太歳",
          command: "天哭封羅後に↓↘→+AB同時押し",
        },
        {
          name: "天機七曜 月",
          command: "↓↙←+A（4回まで）",
        },
        {
          name: "天機七曜 火",
          command: "↓↙←+B（4回まで）",
        },
        {
          name: "天機七曜 水",
          command: "空中で↓↘→ or ↓↙←+A（4回まで）",
        },
        {
          name: "天機七曜 木",
          command: "空中で↓↘→ or ↓↙←+B（4回まで）",
        },
        {
          name: "天機七曜 金",
          command: "空中で↓↘→ or ↓↙←+C（4回まで）",
        },
        {
          name: "天機七曜 土",
          command: "空中で↓↘→ or ↓↙←+D（4回まで）",
        },
        {
          name: "天機七曜 日",
          command: "空中でAC同時押し",
        },
        {
          name: "天猛金翅",
          command: "空中で↓↘→ or ↓↙←+AB or CD同時押し",
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
          name: "天彗跳陥",
          command: "空中近距離で↙ or ↓ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "天魁雲裏",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
  ],
}
