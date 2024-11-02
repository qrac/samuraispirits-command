import type { DataItem } from "../../../types"

export const shinKyoshiro: DataItem = {
  id: "shin-kyoshiro",
  name: "千両狂死郎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "風裂扇",
          command: "↓↙←+斬",
        },
        {
          name: "跳尾獅子",
          command: "↓↙←+蹴",
        },
        {
          name: "火炎曲舞",
          command: "↓↘→+斬",
        },
        {
          name: "回天曲舞",
          command: "→↓↘+斬",
        },
        {
          name: "血煙曲輪",
          command: "空中で↓+AB",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "しゃがみ移動",
          command: "↙ or ↘",
        },
        {
          name: "ぬいぐるみ変化",
          command: "→←↙↓↘→←+D",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "荒事師 狂死郎“血肉の舞”",
          command: "→←↙↓↘→+C",
        },
      ],
    },
  ],
}
