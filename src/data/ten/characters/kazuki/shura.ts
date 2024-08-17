import type { DataItem } from "../../../../types"

export const tenKazukiShura: DataItem = {
  id: "ten-kazuki-shura",
  name: "風間火月（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "災炎",
          command: "↓↙←+斬 or D（3つまでストック）",
        },
        {
          name: "焦熱魂",
          command: "↓↘→+斬 or D",
        },
        {
          name: "大爆殺",
          command: "→↓↘+斬 or D",
        },
        {
          name: "炎滅",
          command: "←↓↙+斬 or D",
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
      title: "連斬",
      skills: [
        {
          name: "火月専用①",
          command: "CD同時押し後にC,C",
        },
        {
          name: "火月専用②",
          command: "CD同時押し後にC,B,B,B",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "暴爆、火炎撃",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
