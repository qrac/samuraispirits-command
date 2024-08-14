import type { DataItem } from "../../../types"

export const shinEarthquake: DataItem = {
  id: "shin-earthquake",
  name: "アースクェイク",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ファットバウンド",
          command: "空中で↓+蹴",
        },
        {
          name: "ファットチェーンソー",
          command: "斬連打",
        },
        {
          name: "ファットブレス",
          command: "↓↙←+斬",
        },
        {
          name: "ファットレプリカアタック",
          command: "→↘↓↙←+BCD同時押し",
        },
        {
          name: "ファットコピー",
          command: "→←↙↓↘→+A or B",
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "ファットトライアングルジャンプ",
          command: "空中画面端で↗ or → or ↘",
        },
        {
          name: "ぬいぐるみ変化",
          command: "→←→←→←↓+B",
        },
      ],
    },
    {
      title: "武器破壊",
      titleColor: 2,
      skills: [
        {
          name: "アースガッデム",
          command: "→←↙↓↘→+CD同時押し",
        },
      ],
    },
  ],
}
