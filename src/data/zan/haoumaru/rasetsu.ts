import type { DataItem } from "../../../types"

export const zanHaoumaruRasetsu: DataItem = {
  id: "zan-haoumaru-rasetsu",
  name: "覇王丸（羅刹）",
  groups: [
    {
      title: "必殺技",
      list: [
        {
          name: "奥義 旋風裂斬・刹",
          command: "↓↘→+斬",
        },
        {
          name: "旋風波",
          command: "↓↘→+D",
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
          name: "剛破",
          command: "→↓↘+D",
        },
        {
          name: "凪刃",
          command: "↓↙←→+C",
        },
        {
          name: "牙突",
          command: "近距離立Cヒット中にC",
        },
        {
          name: "飛燕",
          command: "近距離屈Cヒット中にC",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      list: [
        {
          name: "秘奥義 天覇断空烈斬",
          command: "→←↙↓↘→+CD同時押し",
        },
      ],
    },
  ],
}
