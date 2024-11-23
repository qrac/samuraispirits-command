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
    {
      title: "投げ",
      skills: [
        {
          name: "ムルタ・カプト・インクルシオー",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "ムルタ・グラディウス・インクルシオー",
          command: "近距離で→ or ←+D or CD",
        },
      ],
    },
  ],
}
