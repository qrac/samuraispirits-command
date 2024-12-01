import type { DataItem } from "../../../../types"

export const zanUkyoRasetsu: DataItem = {
  id: "zan-ukyo-rasetsu",
  name: "橘右京（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "秘剣 ツバメ返し",
          command: "空中で↙↓↘→+斬",
        },
        {
          name: "秘剣 ささめゆき・閃",
          command: "↓↙←+斬",
        },
        {
          name: "雲雀",
          command: "←→+A",
        },
        {
          name: "秘剣 陽炎",
          command: "→↓↘+斬",
        },
        {
          name: "秘剣 夢霞",
          command: "↘↓↙←→+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "夢想残光霞",
          command: "→←→+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "橘右京 - サムライスピリッツ斬紅郎無双剣 キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zan/command.htm#uky",
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
