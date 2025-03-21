import type { DataItem } from "../../../types"

export const kenKazuki: DataItem = {
  id: "ken-kazuki",
  name: "風間火月",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "災炎",
          command: "↓↙←+D",
          notes: ["3つまでストック可能"],
        },
        {
          name: "焦熱魂",
          command: "↓↘→+A or B or C or AD",
        },
        {
          name: "大爆殺",
          command: "→↓↘+A or B or C or AD",
        },
        {
          name: "火炎撃",
          command: "↓↙←+A or B or C or AD",
        },
        {
          name: "猛炎脚",
          command: "↓↘→+D",
        },
        {
          name: "炎滅",
          command: "←↓↙+D",
        },
        {
          name: "炎返し",
          command: "炎ストック時 被吹っ飛び中にAD",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗",
        },
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
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
          name: "極大災炎【真】",
          command: "←→↘↓+BC",
        },
        {
          name: "極大災炎【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "炎邪覚醒",
          command: "↓↘→+AB",
          skills: [
            {
              name: "覚醒停止",
              command: "ABCD",
            },
          ],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "風間火月 - サムライスピリッツ天下一剣客伝攻略 - Seesaa Wiki",
          href: "https://seesaawiki.jp/w/givingleaf/d/%c9%f7%b4%d6%b2%d0%b7%ee",
        },
        {
          name: "風間火月 - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/kenkaku/waza.htm#ten-kazuki",
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
