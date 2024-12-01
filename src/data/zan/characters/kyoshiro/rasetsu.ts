import type { DataItem } from "../../../../types"

export const zanKyoshiroRasetsu: DataItem = {
  id: "zan-kyoshiro-rasetsu",
  name: "千両狂死郎（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "火炎曲舞・宴",
          command: "↓↘→+斬",
        },
        {
          name: "回天曲舞・地",
          command: "→↓↘+斬",
        },
        {
          name: "血煙曲輪",
          command: "空中で↓+A",
        },
        {
          name: "跳尾獅子・乱心",
          command: "→↘↓↙←+斬",
        },
        {
          name: "八岐大蛇",
          command: "↓↙←↓↙←+C",
        },
        {
          name: "狂死郎宴舞",
          command: "↓↘→↓↘→+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "荒事師狂死郎“鬼の舞”",
          command: "↓↘→↓↘→+BC",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "千両狂死郎 - サムライスピリッツ斬紅郎無双剣 キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zan/command.htm#kyo",
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
