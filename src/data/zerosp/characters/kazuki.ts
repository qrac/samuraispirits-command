import type { DataItem } from "../../../types"

export const zerospKazuki: DataItem = {
  id: "zerosp-kazuki",
  name: "風間火月",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "災炎",
          command: "↓↙←+C",
          notes: ["3つまでストック可能"],
        },
        {
          name: "焦熱魂",
          command: "↓↘→+A or B or C or AB",
        },
        {
          name: "大爆殺",
          command: "→↓↘+A or B or C or AB",
        },
        {
          name: "炎滅",
          command: "←↓↙+A or B or C",
        },
        {
          name: "炎返し",
          command: "炎ストック時 被吹っ飛び中にAC",
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
          name: "暴爆、火炎撃",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "挟撃、火達磨大突進",
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
          name: "キャラ別攻略 風間火月 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zerosp/character/15kazuki.htm",
        },
        {
          name: "変更点～風間火月～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/10_kazuki.htm",
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
