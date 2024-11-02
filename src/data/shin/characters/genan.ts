import type { DataItem } from "../../../types"

export const shinGenan: DataItem = {
  id: "shin-genan",
  name: "不知火幻庵",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "毒吹雪",
          command: "↓↘→+斬",
        },
        {
          name: "肉転突き",
          command: "→↓↘+斬",
        },
        {
          name: "爪つまみ",
          command: "→↘↓↙←+斬",
        },
        {
          name: "幻庵うつせみ脱皮",
          command: "↘↓↙+BCD",
        },
        {
          name: "幻庵脱皮",
          command: "被ダメージ中BCD",
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
          name: "しゃがみ移動",
          command: "↙ or ↘",
        },
        {
          name: "ぬいぐるみ変化",
          command: "↘↓↙←↓↙+C",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "M.D.C（魔道ダイビングクロー）",
          command: "→↘↓↙←→+AB",
        },
      ],
    },
  ],
}
