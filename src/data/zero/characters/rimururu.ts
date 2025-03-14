import type { DataItem } from "../../../types"

export const zeroRimururu: DataItem = {
  id: "zero-rimururu",
  name: "リムルル",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "ルプㇱ クアレ（ニㇱ）",
          command: "↓↘→+A or B",
        },
        {
          name: "ルプㇱ クアレ（トィトィ）",
          command: "↓↘→+AB",
        },
        {
          name: "コンル メㇺ",
          command: "↓↙←+斬",
        },
        {
          name: "コンル シラㇽ",
          command: "空中で↓+斬",
        },
        {
          name: "コンル ノンノ",
          command: "→↓↘+斬",
        },
        {
          name: "カムイ シトゥキ",
          command: "←↓↙+斬",
        },
        {
          name: "ウプン オㇷ゚",
          command: "→+斬連打",
        },
        {
          name: "ルプㇱ カムイ ウェイサンペコル",
          command: "素手時 踏み込み中AC or BC",
        },
        {
          name: "ルプㇱ カムイ ウェイサンペコル ルヤンペ",
          command: "素手+怒りゲージ最大時 踏み込み中AC or BC",
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
          name: "ルプㇱ カムイ エムㇱ（トィトィ）",
          command: "↓↘→+CD",
        },
      ],
    },
  ],
}
