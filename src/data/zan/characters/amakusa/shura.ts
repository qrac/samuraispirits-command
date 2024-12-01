import type { DataItem } from "../../../../types"

export const zanAmakusaShura: DataItem = {
  id: "zan-amakusa-shura",
  name: "天草四郎時貞（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "死霊刃",
          command: "↓↘→+斬",
        },
        {
          name: "天照封凰拏",
          command: "←→←→+斬",
        },
        {
          name: "汝、暗転入滅せよ",
          command: "→←↙↓↘→+C",
          skills: [
            {
              name: "攻撃",
              command: "斬",
            },
            {
              name: "中止",
              command: "D",
            },
          ],
        },
        {
          name: "逢魔刻・前",
          command: "←↙↓↘→+D",
        },
        {
          name: "逢魔刻・後",
          command: "→↘↓↙←+D",
        },
        {
          name: "瘴氣断",
          command: "←↙←+A",
        },
        {
          name: "戒烈掌",
          command: "→↘↓+C",
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
          name: "凶冥十殺陣",
          command: "←→↓↘+BC",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "天草四郎時貞 - サムライスピリッツ斬紅郎無双剣 キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zan/command.htm#ama",
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
