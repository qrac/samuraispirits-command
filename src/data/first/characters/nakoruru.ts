import type { DataItem } from "../../../types"

export const firstNakoruru: DataItem = {
  id: "first-nakoruru",
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
      title: "投げ",
      skills: [
        {
          name: "空裂投",
          command: "近距離で→ or ←+B",
        },
        {
          name: "流転胸激刃",
          command: "近距離で→ or ←+AB",
        },
        {
          name: "地天三連脚",
          command: "近距離で→ or ←+D or CD",
        },
        {
          name: "裂殺爪",
          command: "素手時に近距離で→ or ←+AB",
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
  ],
}
