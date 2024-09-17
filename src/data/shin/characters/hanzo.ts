import type { DataItem } from "../../../types"

export const shinHanzo: DataItem = {
  id: "shin-hanzo",
  name: "服部半蔵",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "忍法 爆炎龍",
          command: "→↘↓↙+斬",
        },
        {
          name: "烈風手裏剣・改",
          command: "空中で←↙↓↘+斬",
        },
        {
          name: "忍法 うつせみ天舞",
          command: "→↘↓↙←+BCD同時押し",
        },
        {
          name: "忍法 うつせみ地斬",
          command: "被ダメージ中BCD同時押し",
        },
        {
          name: "忍法 影分身",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "モズ落とし",
          command: "近距離で→↓↘+蹴",
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
          command: "空中近距離で↙ or ↓ or ↘+B or AB同時押し",
        },
        {
          name: "ぬいぐるみ変化",
          command: "→←→←→←↓+A",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "忍法 影舞",
          command: "→←→←→←↓+BCD同時押し",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "忍法 天魔覆滅",
          command: "→↘↓↙←→+D",
        },
      ],
    },
  ],
}
