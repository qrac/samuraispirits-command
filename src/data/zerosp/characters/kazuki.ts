import type { DataItem } from "../../../types"

export const zerospKazuki: DataItem = {
  id: "zerosp-kazuki",
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
          command: "↓↘→+A or B or C or AB同時押し",
        },
        {
          name: "大爆殺",
          command: "→↓↘+A or B or C or AB同時押し",
        },
        {
          name: "炎滅",
          command: "←↓↙+A or B or C",
        },
        {
          name: "炎返し",
          command: "炎ストック時 被吹っ飛び中にAC同時押し",
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
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "暴爆、火炎撃",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "挟撃、火達磨大突進",
          command: "↓↙←+CD同時押し",
        },
      ],
    },
  ],
}
