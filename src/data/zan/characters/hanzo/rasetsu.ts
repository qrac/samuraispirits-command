import type { DataItem } from "../../../../types"

export const zanHanzoRasetsu: DataItem = {
  id: "zan-hanzo-rasetsu",
  name: "服部半蔵（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "忍法 爆炎龍・改",
          command: "↓↙←+斬",
        },
        {
          name: "忍法 烈風手裏剣",
          command: "空中で↓↘→+斬",
        },
        {
          name: "忍法 うつせみ天舞",
          command: "→↘↓↙←+BCD",
        },
        {
          name: "忍法 うつせみ地斬",
          command: "←↙↓↘→+BCD",
        },
        {
          name: "忍法 爆炎微塵隠れ",
          command: "近距離で→↓↘+CD",
        },
        {
          name: "忍法 影・静音",
          command: "↓↓+A",
        },
        {
          name: "忍法 猿舞",
          command: "←↓↙+斬 or D",
        },
        {
          name: "忍法 影分身",
          command: "→←↙↓↘→+A or B",
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
        {
          name: "空転撃",
          command: "空中近距離で↙ or ↓ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "封じ手 毒龍",
          command: "→↘↓↙←→+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "服部半蔵 - サムライスピリッツ斬紅郎無双剣 キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zan/command.htm#han",
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
