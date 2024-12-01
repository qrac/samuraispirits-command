import type { DataItem } from "../../../../types"

export const tenKyoshiroRasetsu: DataItem = {
  id: "ten-kyoshiro-rasetsu",
  name: "千両狂死郎（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "八岐大蛇",
          command: "↓↘→+斬",
        },
        {
          name: "血風独楽",
          command: "→↓↘+斬",
        },
        {
          name: "跳尾獅子・乱心",
          command: "↓↙←+斬",
        },
        {
          name: "狂死郎宴舞",
          command: "↓↘→+D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "荒事師狂死郎“血肉の舞”",
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
