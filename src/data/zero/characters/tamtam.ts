import type { DataItem } from "../../../types"

export const zeroTamtam: DataItem = {
  id: "zero-tamtam",
  name: "タムタム",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "パグナ・パグナ",
          command: "→+斬連打",
        },
        {
          name: "ムーラ・ムーラ",
          command: "↓↘→+A or B（3回まで）",
        },
        {
          name: "アハウ・ガブル",
          command: "→↓↘+斬",
        },
        {
          name: "パグナ・デオス",
          command: "←↓↙+斬",
        },
        {
          name: "ガブル・ガブル",
          command: "近距離で↓↘→+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "マグナス・ディオス・ザール",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
  ],
}
