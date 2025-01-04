import type { DataItem } from "../../../../types"

export const zanHaoumaruRasetsu: DataItem = {
  id: "zan-haoumaru-rasetsu",
  name: "覇王丸（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "奥義 旋風裂斬・刹",
          command: "↓↘→+斬",
        },
        {
          name: "奥義 弧月斬",
          command: "→↙↓↘+斬",
        },
        {
          name: "奥義 疾風弧月斬",
          command: "踏み込み中に→↙↓↘+斬",
        },
        {
          name: "旋風波",
          command: "↓↘→+D",
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
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "秘奥義 天覇断空烈斬",
          command: "→←↙↓↘→+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "覇王丸 - キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/command.htm#hao",
        },
        {
          name: "覇王丸 - ド定番連続技ガイド | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/combo.htm#hao",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "",
          href: "https://youtu.be/xxx",
        },
      ],
    },*/
  ],
}
