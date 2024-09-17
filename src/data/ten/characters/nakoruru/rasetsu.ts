import type { DataItem } from "../../../../types"

export const tenNakoruruRasetsu: DataItem = {
  id: "ten-nakoruru-rasetsu",
  name: "ナコルル（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
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
          name: "狼にまたがる",
          command: "↓↙←+斬 or D",
          skills: [
            {
              name: "狼から降りる",
              command: "レバー+D",
            },
            {
              name: "狼またがり攻撃",
              command: "斬",
            },
            {
              name: "メㇽ シキテ",
              command: "←↙↓+斬",
              skills: [
                {
                  name: "分離攻撃",
                  command: "上下以外+C",
                },
              ],
            },
            {
              name: "カント シキテ",
              command: "→↓↘+斬",
              skills: [
                {
                  name: "分離攻撃",
                  command: "上下以外+C",
                },
              ],
            },
            {
              name: "イメル シキテ",
              command: "空中で↓↘→+斬",
              skills: [
                {
                  name: "分離攻撃",
                  command: "上下以外+C",
                },
              ],
            },
          ],
        },
        {
          name: "エプンキネ シキテ",
          command: "被ダウン時AC同時押し",
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
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "ヌペキ カムイ シキテ",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
