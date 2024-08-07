import type { DataItem } from "../../../types"

export const zanHaoumaruShura: DataItem = {
  id: "zan-haoumaru-shura",
  name: "覇王丸（修羅）",
  groups: [
    {
      title: "必殺技",
      list: [
        {
          name: "奥義 旋風裂斬",
          command: "↓↘→+斬",
        },
        {
          name: "奥義 飛翔旋風裂斬",
          command: "（空中で）↓↘→+斬",
        },
        {
          name: "奥義 弧月斬",
          command: "→↙↓↘+斬",
        },
        {
          name: "奥義 疾風弧月斬",
          command: "（踏み込み中）→↙↓↘+斬",
        },
        {
          name: "奥義 烈震斬",
          command: "←↓↙+斬",
        },
        {
          name: "奥義 飛翔烈震斬",
          command: "（空中で）↓↙←+斬",
        },
        {
          name: "斬鋼閃",
          command: "→↘↓↙←+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      list: [
        {
          name: "秘奥義 天覇封神斬",
          command: "→↓↘→↓↘+AB同時押し",
        },
      ],
    },
  ],
}
