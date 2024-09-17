import type { DataItem } from "../../../../types"

export const zanShizumaruShura: DataItem = {
  id: "zan-shizumaru-shura",
  name: "緋雨閑丸（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "緋刀流 霧雨刃・豪雨",
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
          name: "緋刀流 五月雨斬り",
          command: "→↘↓↙←+斬",
        },
        {
          name: "緋刀流 氷雨返し",
          command: "←↙↓↘→+A",
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
          name: "緋刀流禁じ手 暴雨狂風斬",
          command: "→↘↓↙←→↘↓↙←+CD同時押し",
        },
      ],
    },
  ],
}
