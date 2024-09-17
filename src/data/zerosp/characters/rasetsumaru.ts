import type { DataItem } from "../../../types"

export const zerospRasetsumaru: DataItem = {
  id: "zerosp-rasetsumaru",
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
          command: "↓↘→+C",
        },
        {
          name: "凪刃",
          command: "→↓↘+斬",
        },
        {
          name: "剛破",
          command: "→↓↘+C",
        },
        {
          name: "死祟",
          command: "↓↙←+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "天覇断空烈斬",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "臓腑抉り",
          command: "↓↙←+CD同時押し",
        },
      ],
    },
  ],
}
