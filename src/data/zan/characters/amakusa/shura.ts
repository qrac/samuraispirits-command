import type { DataItem } from "../../../../types"

export const zanAmakusaShura: DataItem = {
  id: "zan-amakusa-shura",
  name: "天草四郎時貞（修羅）",
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
          command: "←→←→+斬",
        },
        {
          name: "汝、暗転入滅せよ",
          command: "→←↙↓↘→+C",
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
          name: "逢魔刻・前",
          command: "←↙↓↘→+D",
        },
        {
          name: "逢魔刻・後",
          command: "→↘↓↙←+D",
        },
        {
          name: "瘴氣断",
          command: "←↙←+A",
        },
        {
          name: "戒烈掌",
          command: "→↘↓+C",
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
          name: "凶冥十殺陣",
          command: "←→↓↘+BC同時押し",
        },
      ],
    },
  ],
}
