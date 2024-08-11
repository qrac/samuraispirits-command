import type { DataItem } from "../../../types"

export const zanNakoruruRasetsu: DataItem = {
  id: "zan-nakoruru-rasetsu",
  name: "ナコルル（羅刹）",
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
          command: "←↓↙+斬",
          skills: [
            {
              name: "カムイ リㇺセの返し",
              command: "斬 or D",
            },
          ],
        },
        {
          name: "狼にまたがる",
          command: "↓↙←+D",
          skills: [
            {
              name: "狼から降りる",
              command: "↖︎ or ↑ or ↗︎+D",
            },
            {
              name: "狼またがり攻撃",
              command: "斬",
            },
            {
              name: "イメル シキテ",
              command: "空中で→↓↘+C",
            },
            {
              name: "メㇽ シキテ",
              command: "←↙↓+C（↖ or ↑ or ↗ or →+Cで分離）",
            },
            {
              name: "カント シキテ",
              command: "↓↘→+C（↑ or ↓以外+Cで分離）",
            },
          ],
        },
        {
          name: "エプンキネ シキテ",
          command: "被ダウン時AC同時押し",
        },
        {
          name: "レラ オ チキリ",
          command: "近距離で→↓↘+D",
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
          name: "ヌペキ カムイ シキテ",
          command: "←↙↓↘→↓↘+BC同時押し",
        },
      ],
    },
  ],
}
