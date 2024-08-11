import type { DataItem } from "../../../../types"

export const tenKazukiRasetsu: DataItem = {
  id: "ten-kazuki-rasetsu",
  name: "風間火月（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "愚連脚",
          command: "→↓↘+斬 or D",
          skills: [
            {
              name: "追加攻撃",
              command: "→+斬 or D・←+斬 or Dを交互に入力",
            },
          ],
        },
        {
          name: "六道烈火・地獄道",
          command: "↓↘→+A",
          skills: [
            {
              name: "六道烈火・餓鬼道",
              command: "地獄道中に↓↘→+B",
              skills: [
                {
                  name: "六道烈火・天道",
                  command: "餓鬼道中に↓↘→+C",
                },
              ],
            },
          ],
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
          name: "炎邪覚醒",
          command: "←→↘↓+AB同時押し",
          skills: [
            {
              name: "覚醒停止",
              command: "ABCD同時押し",
            },
          ],
        },
      ],
    },
  ],
}
