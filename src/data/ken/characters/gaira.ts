import type { DataItem } from "../../../types"

export const kenGaira: DataItem = {
  id: "ken-gaira",
  name: "花諷院骸羅",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "喝！",
          command: "↓↘→+斬",
        },
        {
          name: "地震丸",
          command: "↓↓+斬",
        },
        {
          name: "断固相殺",
          command: "→↓↘+C",
        },
        {
          name: "つかむぞ～組み天井",
          command: "←↓↙+A",
        },
        {
          name: "つかむぞ～石頭",
          command: "←↓↙+B",
        },
        {
          name: "つかむぞ～尻めくり",
          command: "←↓↙+C",
        },
        {
          name: "円心殺",
          command: "近距離で←↖↑↗→+C",
          notes: ["発動後レバー回転でダメージ増加"],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "百貫落とし",
          command: "空中で↓+C",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "←↙↓↙←→+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "断固相殺・大往生【真】",
          command: "↓↘→↓↘+BC",
        },
        {
          name: "断固相殺・大往生【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "仁王爆震殺",
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
          name: "花諷院骸羅 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%b2%d6%eb%e5%b1%a1%b3%bc%cd%e5",
        },
        {
          name: "花諷院骸羅 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#zan",
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
