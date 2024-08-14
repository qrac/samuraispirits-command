import type { DataItem } from "../../../types"

export const firstGenan: DataItem = {
  id: "first-genan",
  name: "不知火幻庵",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "毒吹雪",
          command: "↓↘→+斬",
        },
        {
          name: "肉転突き",
          command: "→↓↘+斬",
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "しゃがみ移動",
          command: "↙ or ↘",
        },
      ],
    },
  ],
}
