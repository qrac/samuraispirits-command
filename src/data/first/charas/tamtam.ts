import type { DataItem } from "../../../types"

export const firstTamtam: DataItem = {
  id: "first-tamtam",
  name: "タムタム",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "パグナ・パグナ",
          command: "←タメ→+斬",
        },
        {
          name: "ムーラ・ガブル",
          command: "↓↘→+斬",
        },
        {
          name: "アハウ・ガブル",
          command: "→↘↓↙←+斬",
        },
        {
          name: "パグナ・デオス",
          command: "↓↙←+蹴",
        },
      ],
    },
  ],
}
