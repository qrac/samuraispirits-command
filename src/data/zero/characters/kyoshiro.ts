import type { DataItem } from "../../../types"

export const zeroKyoshiro: DataItem = {
  id: "zero-kyoshiro",
  name: "千両狂死郎",
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
          command: "空中で↓+斬",
        },
        {
          name: "跳尾獅子",
          command: "↓↙←+A or B",
        },
        {
          name: "跳尾獅子・乱心",
          command: "↓↙←+AB同時押し",
        },
        {
          name: "蝦蟇地獄",
          command: "↓↙←+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "荒事師狂死郎“血肉の舞”",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
  ],
}
