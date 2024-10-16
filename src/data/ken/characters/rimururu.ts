import type { DataItem } from "../../../types"

export const kenRimururu: DataItem = {
  id: "ken-rimururu",
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
          command: "↓↘→+C",
        },
        {
          name: "コンル メㇺ",
          command: "↓↓+斬",
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
          name: "コンル シラㇽ",
          command: "空中で↓+斬",
        },
        {
          name: "ルプㇱ カムイ ウェイサンペコル",
          command: "素手時 踏み込み中AC or AD同時押し",
        },
        {
          name: "ルプㇱ カムイ ウェイサンペコル ルヤンペ",
          command: "素手+ゲージ最大時 踏み込み中AC or AD同時押し",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗",
        },
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "特殊技",
          command: "↘+B",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "↘↓↙←↓↙+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "ルプㇱ カムイ エムㇱ（トィトィ）【真】",
          command: "→↘↓↙←→↘↓↙←+BC同時押し",
        },
        {
          name: "ルプㇱ カムイ エムㇱ（トィトィ）【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "コンル ストゥ ポロ",
          command: "↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
