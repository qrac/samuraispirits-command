import type { DataItem } from "../../../types"

export const kenNicotine: DataItem = {
  id: "ken-nicotine",
  name: "花諷院和狆",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "式神霊符・炎",
          command: "↓↘→+斬",
        },
        {
          name: "式神霊符・雷",
          command: "→↓↘+斬",
        },
        {
          name: "式神霊符・命",
          command: "↓↙←+斬",
        },
        {
          name: "縛鎖杖撃",
          command: "→↘↓↙←+D",
        },
        {
          name: "心乱呪符",
          command: "→↓↘+D",
        },
        {
          name: "支杖螺旋脚（攻撃）",
          command: "空中で↙↓↘→+斬",
        },
        {
          name: "支杖螺旋脚（降りる）",
          command: "空中で↙↓↘→+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "特殊技",
          command: "↘+B",
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
          name: "式神霊符・仁王符霊殺【真】",
          command: "→←↙↓↘→+BC",
        },
        {
          name: "式神霊符・仁王符霊殺【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "封魔真言",
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
          name: "花諷院和狆 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%b2%d6%eb%e5%b1%a1%cf%c2%e0%be",
        },
        {
          name: "花諷院和狆 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#sin-nicotine",
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
