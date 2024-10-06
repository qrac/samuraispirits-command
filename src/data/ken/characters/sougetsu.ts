import type { DataItem } from "../../../types"

export const kenSougetsu: DataItem = {
  id: "ken-sougetsu",
  name: "風間蒼月",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "月光",
          command: "→↓↘+A or B or C or D",
        },
        {
          name: "浮月",
          command: "↓↘→+A or B or C or D",
          skills: [
            {
              name: "水球を割る",
              command: "↓↘→+A or B or C or D",
            },
          ],
        },
        {
          name: "風月斬",
          command: "↓↙←+斬",
        },
        {
          name: "月読",
          command: "↓↙←+D",
        },
        {
          name: "月隠れ",
          command: "↓↓+A or B or C or D",
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
          name: "特殊技1",
          command: "→+B",
        },
        {
          name: "特殊技2",
          command: "空中で↙ or ↓ or ↘+C",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←→←→←↓+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "消波・風月斬【真】",
          command: "←→↘↓+BC同時押し",
        },
        {
          name: "消波・風月斬【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "湖月・水鏡の陣",
          command: "↓↘→+AB or AD同時押し",
        },
      ],
    },
  ],
}
