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
          command: "↓↘→+A or B",
          notes: ["3回まで連続入力可能"],
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
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
}
