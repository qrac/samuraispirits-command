import type { DataItem } from "../../../types"

export const kenAmakusa: DataItem = {
  id: "ken-amakusa",
  name: "天草四郎時貞",
  groups: [
    {
      title: "必殺技（共通）",
      skills: [
        {
          name: "魔力変質",
          command: "CE同時押し",
        },
        {
          name: "逢魔刻（前）",
          command: "↓↘→+D",
        },
        {
          name: "逢魔刻（後）",
          command: "↓↙←+D",
        },
      ],
    },
    {
      title: "必殺技（遠距離モード時）",
      skills: [
        {
          name: "死霊刃",
          command: "↓↘→+斬",
        },
        {
          name: "天照封魔掌",
          command: "↓↙←+斬",
        },
        {
          name: "瘴氣断",
          command: "→↓↘+D",
        },
      ],
    },
    {
      title: "必殺技（近距離モード時）",
      skills: [
        {
          name: "冥府魔障弾",
          command: "↓↘→+斬",
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
          name: "戒烈掌",
          command: "←↓↙+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗",
        },
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←↙↓↘→←+E",
        },
      ],
    },
    {
      title: "秘奥義（遠距離モード時）",
      titleColor: 3,
      skills: [
        {
          name: "煉獄死霊刃【真】",
          command: "←→↓↘+BC同時押し",
        },
        {
          name: "煉獄死霊刃【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "秘奥義（近距離モード時）",
      titleColor: 3,
      skills: [
        {
          name: "救恤魔導弾【真】",
          command: "←→↓↘+BC同時押し",
        },
        {
          name: "救恤魔導弾【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "凶冥十殺陣",
          command: "↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
