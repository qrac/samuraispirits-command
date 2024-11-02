import type { DataItem } from "../../../types"

export const zeroKazuki: DataItem = {
  id: "zero-kazuki",
  name: "風間火月",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "災炎",
          command: "↓↙←+C（3つまでストック）",
        },
        {
          name: "焦熱魂",
          command: "↓↘→+A or B or C or AB",
        },
        {
          name: "大爆殺",
          command: "→↓↘+A or B or C or AB",
        },
        {
          name: "炎滅",
          command: "←↓↙+A or B or C",
        },
        {
          name: "炎返し",
          command: "炎ストック時 被吹っ飛び中にAC",
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
          name: "暴爆、火炎撃",
          command: "↓↘→+CD",
        },
      ],
    },
  ],
}
