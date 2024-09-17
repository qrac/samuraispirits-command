import type { DataItem } from "../../../types"

export const firstEarthquake: DataItem = {
  id: "first-earthquake",
  name: "アースクェイク",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ファットバウンド",
          command: "空中で↓+蹴連打",
        },
        {
          name: "ファットチェーンソー",
          command: "斬連打",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ファットトライアングルジャンプ",
          command: "空中画面端で↗ or → or ↘",
        },
      ],
    },
  ],
}
