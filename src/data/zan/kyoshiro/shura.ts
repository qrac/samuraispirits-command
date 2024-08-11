import type { DataItem } from "../../../types"

export const zanKyoshiroShura: DataItem = {
  id: "zan-kyoshiro-shura",
  name: "千両狂死郎（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "火炎曲舞",
          command: "↓↘→+斬",
        },
        {
          name: "大津波",
          command: "↓↙←+斬",
        },
        {
          name: "回天曲舞・天",
          command: "→↓↘+斬",
        },
        {
          name: "血煙曲輪",
          command: "空中で↓+A",
        },
        {
          name: "跳尾獅子",
          command: "→↘↓↙←+斬",
        },
        {
          name: "狂死郎宴舞",
          command: "↓↘→↓↘→+C",
        },
        {
          name: "蝦蟇地獄",
          command: "→←↙↓↘→+AC同時押し",
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
