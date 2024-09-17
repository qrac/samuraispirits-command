import type { DataItem } from "../../../../types"

export const tenTamtamRasetsu: DataItem = {
  id: "ten-tamtam-rasetsu",
  name: "タムタム（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ガブル・ガブル",
          command: "近距離で↓↘→+C",
        },
        {
          name: "ムーラ・ムーラ",
          command: "↓↘→+A or B（3回まで）",
        },
        {
          name: "パグナ・デオス",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "アハウ・ティウワカン",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
