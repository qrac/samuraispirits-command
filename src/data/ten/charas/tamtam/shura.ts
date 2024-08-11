import type { DataItem } from "../../../../types"

export const tenTamtamShura: DataItem = {
  id: "ten-tamtam-shura",
  name: "タムタム（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "パグナ・パグナ",
          command: "→+斬連打",
        },
        {
          name: "ムーラ・ガブル 上",
          command: "↓↘→+斬",
        },
        {
          name: "ムーラ・ガブル 下",
          command: "↓↙←+斬",
        },
        {
          name: "アハウ・ガブル",
          command: "→↓↘+斬",
        },
        {
          name: "パグナ・デオス",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "武器飛ばし",
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
