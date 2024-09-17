import type { DataItem } from "../../../types"

export const zeroHanzo: DataItem = {
  id: "zero-hanzo",
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
          command: "→↘↓↙←+AC同時押し",
        },
        {
          name: "忍法 うつせみ地斬",
          command: "→↘↓↙←+BC同時押し",
        },
        {
          name: "忍法 身代わりの術・仏",
          command: "被ダメージ中→←→←→←↓+AC同時押し",
        },
        {
          name: "忍法 身代わりの術・鬼",
          command: "被ダメージ中→←→←→←↓+BC同時押し",
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
          command: "←↓↙+A or B or C",
        },
        {
          name: "忍法 影分身",
          command: "→←↙↓↘→+A or B",
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
          command: "空中近距離で↙ or ↓ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "真モズ落とし",
          command: "近距離で↓↘→+CD同時押し",
        },
      ],
    },
  ],
}
