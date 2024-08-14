import type { DataItem } from "../../../../types"

export const tenSougetsuShura: DataItem = {
  id: "ten-sougetsu-shura",
  name: "風間蒼月（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "月光",
          command: "→↓↘+斬",
        },
        {
          name: "浮月",
          command: "↓↘→+斬 or D",
          skills: [
            {
              name: "浮月操作",
              command: "浮月後ボタンを押したままレバー操作",
            },
          ],
        },
        {
          name: "月隠れ",
          command: "↓↙←+斬",
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
      title: "連斬",
      skills: [
        {
          name: "火月専用①",
          command: "CD同時押し後にC,C",
        },
        {
          name: "火月専用②",
          command: "CD同時押し後にC,B,B,B",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "消波・風月斬",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
