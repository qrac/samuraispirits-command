import type { DataItem } from "../../../types"

export const kenEnja: DataItem = {
  id: "ken-enja",
  name: "炎邪",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "六道烈火・地獄道",
          command: "↓↘→+A",
          skills: [
            {
              name: "六道烈火・餓鬼道",
              command: "↓↘→+B",
              skills: [
                {
                  name: "六道烈火・天道",
                  command: "↓↘→+C",
                },
                {
                  name: "六道烈火・天道（MAX版）",
                  command: "ゲージ最大時に↓↘→↗↑↖←↙↓+AB同時押し",
                },
              ],
            },
          ],
        },
        {
          name: "愚連脚",
          command: "→↓↘+D",
          skills: [
            {
              name: "追加攻撃",
              command: "→+D・←+Dを交互に入力",
            },
          ],
        },
        {
          name: "絶焼・全焦土",
          command: "←↙↓↘→+C",
        },
        {
          name: "炎滅",
          command: "←↓↙+D",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "特殊技",
          command: "→+B",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "紅蓮黒縄【真】",
          command: "→↓↘→↓↘+BC同時押し",
        },
        {
          name: "紅蓮黒縄【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "炎邪爆熱",
          command: "↓↘→+AB同時押し",
          skills: [
            {
              name: "中断",
              command: "ABCD同時押し",
            },
          ],
        },
      ],
    },
  ],
}
