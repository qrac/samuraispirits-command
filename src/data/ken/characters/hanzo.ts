import type { DataItem } from "../../../types"

export const kenHanzo: DataItem = {
  id: "ken-hanzo",
  name: "服部半蔵",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "忍法 爆炎龍",
          command: "↓↙←+斬",
        },
        {
          name: "烈風手裏剣",
          command: "空中で↓↘→+斬",
        },
        {
          name: "忍法 うつせみ天舞",
          command: "→↘↓↙←+AD同時押し",
        },
        {
          name: "忍法 うつせみ地斬",
          command: "→↘↓↙←+CE同時押し",
        },
        {
          name: "忍法 身代わりの術・仏",
          command: "被ダメージ中→←→←→←↓+AD同時押し",
        },
        {
          name: "忍法 身代わりの術・鬼",
          command: "被ダメージ中→←→←→←↓+CE同時押し",
        },
        {
          name: "モズ落とし",
          command: "近距離で→↓↘+斬",
        },
        {
          name: "モズ落とし -颯-",
          command: "踏み込み中近距離で→↓↘+斬",
        },
        {
          name: "忍法 静音",
          command: "↓↓+斬",
        },
        {
          name: "忍法 猿舞",
          command: "←↓↙+A or B or C or D",
        },
        {
          name: "忍法 車菱",
          command: "↓↓↓+AE",
        },
        {
          name: "忍法 影臥",
          command: "→←→←→←↓+BCD同時押し",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or ↘",
        },
        {
          name: "空転撃",
          command: "空中近距離で↙ or ↓ or ↘+D",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→←→←→←↓+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "真モズ落とし【真】",
          command: "近距離で↙→↘↓↙←↘+BC同時押し",
        },
        {
          name: "真モズ落とし【剣】",
          command: "近距離で↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "忍法 天魔覆滅",
          command: "↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
