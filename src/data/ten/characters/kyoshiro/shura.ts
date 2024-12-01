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
          name: "跳尾獅子",
          command: "↓↙←+斬",
        },
        {
          name: "蝦蟇地獄",
          command: "↓↘→+D",
        },
        {
          name: "血煙曲輪",
          command: "空中で↓+A",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "荒事師狂死郎“鬼の舞”",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "攻略～千両狂死郎～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/06kyousirou.htm",
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
