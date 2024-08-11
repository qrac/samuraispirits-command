import type { DataItem } from "../../../types"

export const zanKyoshiroRasetsu: DataItem = {
  id: "zan-kyoshiro-rasetsu",
  name: "千両狂死郎（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "火炎曲舞・宴",
          command: "↓↘→+斬",
        },
        {
          name: "回天曲舞・地",
          command: "→↓↘+斬",
        },
        {
          name: "血煙曲輪",
          command: "空中で↓+A",
        },
        {
          name: "跳尾獅子・乱心",
          command: "→↘↓↙←+斬",
        },
        {
          name: "八岐大蛇",
          command: "↓↙←↓↙←+C",
        },
        {
          name: "狂死郎宴舞",
          command: "↓↘→↓↘→+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "荒事師狂死郎“鬼の舞”",
          command: "↓↘→↓↘→+BC同時押し",
        },
      ],
    },
  ],
}
