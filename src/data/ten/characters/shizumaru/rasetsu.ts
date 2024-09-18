import type { DataItem } from "../../../../types"

export const tenShizumaruRasetsu: DataItem = {
  id: "ten-shizumaru-rasetsu",
  name: "緋雨閑丸（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "緋刀流 霧雨刃（怒り時 豪雨）",
          command: "↓↘→+斬",
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
      title: "特殊技",
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
          command: "CD同時押し後にC,C,D",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "緋刀流禁じ手 雨流裂殺刃",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
