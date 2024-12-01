import type { DataItem } from "../../../../types"

export const zanGairaRasetsu: DataItem = {
  id: "zan-gaira-rasetsu",
  name: "花諷院骸羅（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "喝！",
          command: "↓↙←+A",
        },
        {
          name: "ぶちころし",
          command: "↓↘→+斬",
        },
        {
          name: "地震丸",
          command: "↓↓+AB",
        },
        {
          name: "円心殺～天",
          command: "↓↙←→+AB",
        },
        {
          name: "円心殺～地",
          command: "↓↙←→+CD",
        },
        {
          name: "百貫落とし",
          command: "空中で↓+D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "拳舞",
          command: "↓↘→↓↘+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "花諷院骸羅 - サムライスピリッツ斬紅郎無双剣 キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zan/command.htm#gai",
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
