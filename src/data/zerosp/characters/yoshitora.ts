import type { DataItem } from "../../../types"

export const zerospYoshitora: DataItem = {
  id: "zerosp-yoshitora",
  name: "徳川慶寅",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "壱の太刀 撫子",
          command: "↓↘→+斬",
        },
        {
          name: "弐の太刀 白百合",
          command: "→↓↘+斬",
        },
        {
          name: "参の太刀 牡丹",
          command: "空中で↓↘→+斬",
        },
        {
          name: "四の太刀 椿",
          command: "←↓↙+斬",
        },
        {
          name: "五の太刀 朝顔",
          command: "↓↙←+斬",
        },
        {
          name: "六の太刀 夕顔",
          command: "→↓↘+C",
        },
        {
          name: "七の太刀 遊蝶華",
          command: "壱〜六をすべて当て終わったラウンドで→↘↓↙←→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "葵",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "百花繚乱",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "キャラ別攻略 徳川慶寅 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zerosp/character/17yoshitora.htm",
        },
        {
          name: "変更点～徳川慶寅～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/16_yositora.htm",
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
