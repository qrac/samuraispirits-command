import type { DataItem } from "../../../types"

export const zerospEnja: DataItem = {
  id: "zerosp-enja",
  name: "炎邪",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "愚連脚",
          command: "→↓↘+A or B or C",
          skills: [
            {
              name: "追加攻撃",
              command: "→+A or B or C・←+A or B or Cを交互に入力",
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
        {
          name: "炎滅",
          command: "←↓↙+斬",
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
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "炎邪爆熱",
          command: "↓↘→+CD同時押し",
          skills: [
            {
              name: "中断",
              command: "ABCD同時押し",
            },
          ],
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "三千大千世界全焦土",
          command: "↓↙←+CD同時押し",
        },
      ],
    },
  ],
}
