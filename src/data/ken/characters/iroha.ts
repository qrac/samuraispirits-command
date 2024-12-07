import type { DataItem } from "../../../types"

export const kenIroha: DataItem = {
  id: "ken-iroha",
  name: "いろは",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "風斬（平行）",
          command: "↓↘→+斬（空中も可）",
        },
        {
          name: "風斬（斜め）",
          command: "↓↘→+D（空中も可）",
        },
        {
          name: "風車",
          command: "↓↙←+斬（空中も可）",
        },
        {
          name: "露時雨",
          command: "→↓↘+斬（空中も可）",
        },
        {
          name: "雨葵",
          command: "→←→+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "二段ジャンプ",
          command: "空中で↖ or ↑ or ↗",
        },
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "特殊技",
          command: "←+D",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "↘↓↙←↓↙+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "冬曙 雪月花【真】",
          command: "→←↙↓↘→+BC",
        },
        {
          name: "冬曙 雪月花【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "夕鶴の舞",
          command: "近距離で↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "いろは - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%a4%a4%a4%ed%a4%cf",
        },
        {
          name: "いろは - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#ken-iroha",
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
