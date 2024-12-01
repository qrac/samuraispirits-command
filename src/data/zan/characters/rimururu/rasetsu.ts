import type { DataItem } from "../../../../types"

export const zanRimururuRasetsu: DataItem = {
  id: "zan-rimururu-rasetsu",
  name: "リムルル（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ルプㇱ クアレ",
          command: "↓↘→+斬",
        },
        {
          name: "コンル メㇺ",
          command: "←↙↓+A",
        },
        {
          name: "コンル シラㇽ",
          command: "空中で→↘↓+A",
          skills: [
            {
              name: "終了",
              command: "↑",
            },
          ],
        },
        {
          name: "ウプン オㇷ゚",
          command: "斬連打",
        },
        {
          name: "ルプㇱ トゥム（立ち）",
          command: "→+AB",
        },
        {
          name: "ルプㇱ トゥム（屈）",
          command: "↘+AB",
        },
        {
          name: "ルプㇱ テㇰ ヌㇺ（ヤク）",
          command: "近距離で→↘↓↙←+D",
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
          name: "ルプㇱ カムイ エムㇱ",
          command: "→↘↓↙←→↘↓↙←+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "リムルル - サムライスピリッツ斬紅郎無双剣 キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zan/command.htm#rim",
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
