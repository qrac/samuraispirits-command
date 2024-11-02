import type { DataItem } from "../../../types"

export const zerospAmakusa: DataItem = {
  id: "zerosp-amakusa",
  name: "天草四郎時貞",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "死霊刃",
          command: "↓↘→+斬",
        },
        {
          name: "天照封凰拏",
          command: "↓↙←+斬",
        },
        {
          name: "汝、暗転入滅せよ",
          command: "→↓↘+斬",
          skills: [
            {
              name: "攻撃",
              command: "斬",
            },
            {
              name: "中止",
              command: "D",
            },
          ],
        },
        {
          name: "逢魔刻（前）",
          command: "↓↘→+C",
        },
        {
          name: "逢魔刻（後）",
          command: "↓↙←+C",
        },
        {
          name: "戒烈掌",
          command: "→↓↘+C",
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
          name: "凶冥十殺陣",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "汝、懺悔せよ。我、滅罪せん。",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
}
