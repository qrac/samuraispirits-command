import type { DataItem } from "../../../types"

export const tenHaoumaruShura: DataItem = {
  id: "ten-haoumaru-shura",
  name: "覇王丸（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "奥義 旋風裂斬",
          command: "↓↘→+斬",
        },
        {
          name: "奥義 弧月斬",
          command: "→↓↘+斬",
        },
        {
          name: "奥義 疾風弧月斬",
          command: "踏み込み中→↓↘+斬",
        },
        {
          name: "奥義 烈震斬",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "秘奥義 天覇封神斬",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
