import type { DataItem } from "../../../types"

export const tenNakoruruShura: DataItem = {
  id: "ten-nakoruru-shura",
  name: "ナコルル（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "アンヌ ムツベ",
          command: "←↙↓+斬",
          skills: [
            {
              name: "緊急停止",
              command: "ABCD同時押し",
            },
          ],
        },
        {
          name: "レラ ムツベ",
          command: "↓↘→+斬",
        },
        {
          name: "カムイ リㇺセ",
          command: "←↓↙+斬",
          skills: [
            {
              name: "追加攻撃",
              command: "斬連打",
            },
          ],
        },
        {
          name: "鷹につかまる",
          command: "↓↙←+D",
          skills: [
            {
              name: "鷹から降りる",
              command: "↙ or ↓ or ↘+D",
            },
            {
              name: "鷹つかまり攻撃",
              command: "斬",
            },
            {
              name: "カムイ ムツベ",
              command: "AB同時押し",
            },
          ],
        },
        {
          name: "シチカㇷ゚ エトゥ",
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
        {
          name: "カムイ フㇺ ケスㇷ゚",
          command: "空中で↙ or ↓ or ↘+D",
        },
        {
          name: "レラ キシマ テㇰ",
          command: "空中近距離で↙ or ↓ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "エレルㇱ カムイ リㇺセ",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
