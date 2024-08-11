import type { DataItem } from "../../../types"

export const tenRimururuRasetsu: DataItem = {
  id: "ten-rimururu-rasetsu",
  name: "リムルル（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ルプㇱ クアレ（トィトィ）",
          command: "↓↘→+斬",
        },
        {
          name: "コンル メㇺ",
          command: "←↙↓+斬",
        },
        {
          name: "ルプㇱ トゥム",
          command: "→↓↘+斬",
        },
        {
          name: "ウプン オㇷ゚",
          command: "→+斬連打",
        },
        {
          name: "ルプㇱ カムイ ウェイサンペコル",
          command: "素手時踏み込み中AC or BD同時押し",
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
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "ルプㇱ カムイ エムㇱ（トィトィ）",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
