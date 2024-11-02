import type { DataItem } from "../../../types"

export const kenRasetsumaru: DataItem = {
  id: "ken-rasetsumaru",
  name: "羅刹丸",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "旋風裂斬・刹",
          command: "↓↘→+斬",
        },
        {
          name: "旋風波",
          command: "↓↘→+D",
        },
        {
          name: "凪刃",
          command: "→↓↘+斬",
        },
        {
          name: "剛破",
          command: "→↓↘+D",
        },
        {
          name: "死祟",
          command: "↓↙←+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←↙↓↘→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "剛咆【真】",
          command: "↙→↘↓↙←→↓↘+BC",
        },
        {
          name: "剛咆【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "天覇断空烈斬",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}
