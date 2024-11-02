import type { DataItem } from "../../../types"

export const kenKyoshiro: DataItem = {
  id: "ken-kyoshiro",
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
          name: "跳尾獅子",
          command: "↓↙←+斬",
        },
        {
          name: "似非跳尾",
          command: "↓↙←+D",
          skills: [
            {
              name: "似非跳尾・乱心",
              command: "A",
            },
            {
              name: "似非跳尾・介錯",
              command: "B",
            },
            {
              name: "似非跳尾・泣所",
              command: "C",
            },
            {
              name: "似非跳尾・跋扈",
              command: "D",
            },
          ],
        },
        {
          name: "蝦蟇地獄",
          command: "↓↘→+D",
        },
        {
          name: "血煙曲輪",
          command: "空中で↓+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "→+B",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←↙↓↘→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "鬼炎曲舞【真】",
          command: "→←↙↓↘→+BC",
        },
        {
          name: "鬼炎曲舞【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "荒事師狂死郎“血肉の舞”",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}
