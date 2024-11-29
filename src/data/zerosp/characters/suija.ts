import type { DataItem } from "../../../types"

export const zerospSuija: DataItem = {
  id: "zerosp-suija",
  name: "水邪",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "月輪波",
          command: "空中で←↓↙+斬",
        },
        {
          name: "死月",
          command: "空中で↓↙←+斬",
        },
        {
          name: "円月",
          command: "空中で→↓↘+斬",
        },
        {
          name: "翔月",
          command: "空中で↙↓↘→+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "天昇・水柱波",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "平等カツ神聖ナル裁キ",
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
          name: "キャラ別攻略 水邪 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zerosp/character/24sui.htm",
        },
        {
          name: "変更点～水邪～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/15_suizya.htm",
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
