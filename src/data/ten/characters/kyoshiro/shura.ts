import type { DataItem } from "../../../../types"

export const tenKyoshiroShura: DataItem = {
  id: "ten-kyoshiro-shura",
  name: "千両狂死郎（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "大津波",
          command: "↓↘→+斬",
        },
        {
          name: "回天曲舞",
          command: "→↓↘+斬",
        },
        {
          name: "火炎曲舞",
          command: "←↓↙+斬",
        },
        {
          name: "血煙曲輪",
          command: "空中で↓+A",
        },
        {
          name: "跳尾獅子",
          command: "↓↙←+斬",
        },
        {
          name: "蝦蟇地獄",
          command: "↓↘→+D",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "荒事師狂死郎“鬼の舞”",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
