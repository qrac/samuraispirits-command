import type { DataItem } from "../../../types"

export const kenZankuro: DataItem = {
  id: "ken-zankuro",
  name: "壬無月斬紅郎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "無限流 疾風斬",
          command: "↓↘→+斬",
        },
        {
          name: "無限流 無法拳",
          command: "↓↘→+D",
        },
        {
          name: "無限流 天崩斬",
          command: "→↓↘+斬",
        },
        {
          name: "無限流 無尽斬",
          command: "←↓↙+斬",
          notes: ["ボタン継続押しでタメ可能"],
          skills: [
            {
              name: "夜叉殺",
              command: "タメ1段階",
            },
            {
              name: "鬼神殺",
              command: "タメ2段階",
            },
            {
              name: "天魔殺",
              command: "タメ3段階",
            },
          ],
        },
        {
          name: "無限流 不動",
          command: "↓↙←+D",
        },
        {
          name: "無限流 震撃斬",
          command: "←→↘↓+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化【真】",
          command: "→↘↓↙←→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "無限流 奥義 無双震撃斬【真】",
          command: "↓↓↓↘→+BC",
        },
        {
          name: "無限流 奥義 無双震撃斬【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "無限流 無限砲",
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
          name: "壬無月斬紅郎 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%bf%d1%cc%b5%b7%ee%bb%c2%b9%c8%cf%ba",
        },
        {
          name: "壬無月斬紅郎 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#zan-zankuro",
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
