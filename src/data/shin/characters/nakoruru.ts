import type { DataItem } from "../../../types"

export const shinNakoruru: DataItem = {
  id: "shin-nakoruru",
  name: "ナコルル",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "アンヌ ムツベ",
          command: "←↙↓+斬",
        },
        {
          name: "レラ ムツベ",
          command: "↓↘→+斬",
        },
        {
          name: "カムイ リㇺセ",
          command: "↓↙←+斬",
        },
        {
          name: "アムベヤトロ",
          command: "→↘↓↙←+斬",
        },
        {
          name: "ママハハにつかまる",
          command: "ママハハ近くで↓↙←+C",
          skills: [
            {
              name: "カムイ ムツベ",
              command: "斬 or 蹴",
            },
            {
              name: "ヤトロポック",
              command: "↙ or ↓ or ↘+斬 or 蹴",
            },
          ],
        },
        {
          name: "ママハハを呼ぶ",
          command: "素手時→↘↓↙←+斬 or ↓↙←+C",
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
          name: "飛天鷹落撃",
          command: "空中近距離で↙ or ↓ or ↘+B or AB同時押し",
        },
        {
          name: "ぬいぐるみ変化",
          command: "↘↓↙←↓↙+D",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "アペフチ カムイ リㇺセ",
          command: "↘↓↙←→↓↘+BC同時押し",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "イルスカ ヤトロ リㇺセ",
          command: "→←↙↓↘→+A",
        },
      ],
    },
  ],
}
