import type { DataItem } from "../../../../types"

export const zanShizumaruRasetsu: DataItem = {
  id: "zan-shizumaru-rasetsu",
  name: "緋雨閑丸（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "緋刀流 霧雨刃",
          command: "↓↘→+斬",
        },
        {
          name: "緋刀流 梅雨円殺陣",
          command: "→↙↓↘+斬",
        },
        {
          name: "緋刀流 雨流狂落斬",
          command: "←↓↙+斬",
        },
        {
          name: "緋刀流 時雨",
          command: "空中で↓+C",
        },
        {
          name: "緋刀流 小雨",
          command: "空中で↑+C",
          skills: [
            {
              name: "解除",
              command: "斬 or D",
            },
          ],
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
          name: "緋刀流禁じ手 雨流裂殺刃",
          command: "→←↙↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "緋雨閑丸 - キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/command.htm#shiz",
        },
        {
          name: "緋雨閑丸 - ド定番連続技ガイド | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/combo.htm#shiz",
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
