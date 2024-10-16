import type { DataItem } from "../../../types"

export const kenTamtam: DataItem = {
  id: "ken-tamtam",
  name: "タムタム",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ムーラ・ムーラ",
          command: "↓↘→+A or B（3回まで）",
        },
        {
          name: "アハウ・ガブル",
          command: "→↓↘+斬",
        },
        {
          name: "パグナ・パグナ",
          command: "←↓↙+斬",
        },
        {
          name: "パグナ・デオス",
          command: "←↓↙+D",
        },
        {
          name: "ガブル・ガブル",
          command: "近距離で↓↘→+D",
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
          name: "アハウ・ティウワカン【真】",
          command: "→↓↘→↓↘+BC同時押し",
        },
        {
          name: "アハウ・ティウワカン【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "マグナス・ディオス・ザール",
          command: "↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
