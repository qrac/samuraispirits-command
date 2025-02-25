import type { DataItem } from "../../../types"

export const kenWanFu: DataItem = {
  id: "ken-wan-fu",
  name: "王虎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "真気功爆転法",
          command: "↓↙←+斬（空中も可）",
        },
        {
          name: "気功旋風突",
          command: "→↓↘+斬",
        },
        {
          name: "真気功大撲殺",
          command: "↓↘→+斬",
        },
        {
          name: "気功大失投",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "気功大爆投",
          command: "→←↙↓↘→+C",
        },
        {
          name: "怒髪球撃",
          command: "↓↙←+D",
        },
        {
          name: "気功肉弾砲",
          command: "素手時に近距離で→↓↘+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "↘+C",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←↙↓↘→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "超気功旋風大撲殺【真】",
          command: "↘←↙↓↘→←↓↙+BC",
        },
        {
          name: "超気功旋風大撲殺【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "極気功大爆天",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "王虎 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%b2%a6%b8%d7",
        },
        {
          name: "王虎 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#syo-wanfu",
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
