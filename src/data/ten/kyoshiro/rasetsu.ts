import type { DataItem } from "../../../types"

export const tenKyoshiroRasetsu: DataItem = {
  id: "ten-kyoshiro-rasetsu",
  name: "千両狂死郎（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "八岐大蛇",
          command: "↓↘→+斬",
        },
        {
          name: "血風独楽",
          command: "→↓↘+斬",
        },
        {
          name: "跳尾獅子・乱心",
          command: "↓↙←+斬",
        },
        {
          name: "狂死郎宴舞",
          command: "↓↘→+D",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "荒事師狂死郎“血肉の舞”",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
