import type { DataItem } from "../../../../types"

export const tenShizumaruShura: DataItem = {
  id: "ten-shizumaru-shura",
  name: "緋雨閑丸（修羅）",
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
          command: "→↓↘+斬",
        },
        {
          name: "緋刀流 五月雨斬り",
          command: "↓↙←+斬",
        },
        {
          name: "緋刀流 氷雨返し",
          command: "↓↘→+D",
        },
        {
          name: "緋刀流 真・雨流狂落斬",
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
          command: "CD同時押し後にC,C,D",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "緋刀流禁じ手 暴雨狂風斬",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
