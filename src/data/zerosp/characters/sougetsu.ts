import type { DataItem } from "../../../types"

export const zerospSougetsu: DataItem = {
  id: "zerosp-sougetsu",
  name: "風間蒼月",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "月光",
          command: "→↓↘+斬",
        },
        {
          name: "浮月",
          command: "↓↘→+斬",
          notes: ["ボタン継続押し+レバーで操作可能"],
        },
        {
          name: "月隠れ",
          command: "↓↙←+斬",
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
          name: "消波・風月斬",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "湖月・水鏡の陣",
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
          name: "キャラ別攻略 風間蒼月 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zerosp/character/16sogetsu.htm",
        },
        {
          name: "変更点～風間蒼月～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/11_sougetu.htm",
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
