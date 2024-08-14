import type { DataItem } from "../../../../types"

export const zanAmakusaRasetsu: DataItem = {
  id: "zan-amakusa-rasetsu",
  name: "天草四郎時貞（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "冥府魔障弾",
          command: "↓↘→+斬",
        },
        {
          name: "降魔招来破",
          command: "←→←→+斬",
        },
        {
          name: "汝、暗転入滅せよ",
          command: "→←↙↓↘→+C（斬で攻撃・Dで中止）",
        },
        {
          name: "逢魔刻・前",
          command: "←↙↓↘→+D",
        },
        {
          name: "逢魔刻・後",
          command: "→↘↓↙←+D",
        },
        {
          name: "瘴氣断",
          command: "←↙←+A",
        },
        {
          name: "戒烈掌",
          command: "→↘↓+C",
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
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "凶冥十殺陣",
          command: "←→↓↘+BC同時押し",
        },
      ],
    },
  ],
}
