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
