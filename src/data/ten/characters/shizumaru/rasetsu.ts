import type { DataItem } from "../../../../types"

export const tenShizumaruRasetsu: DataItem = {
  id: "ten-shizumaru-rasetsu",
  name: "緋雨閑丸（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "緋刀流 霧雨刃",
          command: "↓↘→+斬",
          notes: ["怒り時 豪雨"],
        },
        {
          name: "緋刀流 梅雨円殺陣",
          command: "→↓↘+斬",
        },
        {
          name: "緋刀流 時雨",
          command: "空中で↓+斬",
        },
        {
          name: "緋刀流 小雨",
          command: "空中で↑+斬",
          skills: [
            {
              name: "緋刀流 雷雨",
              command: "斬",
            },
          ],
        },
        {
          name: "緋刀流 真・雨流れ狂落斬",
          command: "D継続押し後離す",
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
      title: "連斬",
      skills: [
        {
          name: "閑丸専用",
          command: "CD後にC・C・D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "緋刀流禁じ手 雨流裂殺刃",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "攻略～緋雨閑丸～ サムライスピリッツ天草降臨 - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/kouryku/10sizumaru.htm",
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
