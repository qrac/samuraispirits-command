import type { DataItem } from "../../../types"

export const zerospGaira: DataItem = {
  id: "zerosp-gaira",
  name: "花諷院骸羅",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "喝！",
          command: "↓↘→+斬",
        },
        {
          name: "地震丸",
          command: "↓↓+A or B or C",
        },
        {
          name: "つかむぞ～組み天井",
          command: "←↓↙+A",
        },
        {
          name: "つかむぞ～石頭",
          command: "←↓↙+B",
        },
        {
          name: "つかむぞ～尻めくり",
          command: "←↓↙+C",
        },
        {
          name: "百貫落とし",
          command: "空中で↓+AB同時押し",
        },
        {
          name: "円心殺",
          command: "近距離で←↖↑↗→+AB同時押し（レバー回転でダメージ増加）",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "仁王爆震殺",
          command: "↓↘→+CD同時押し",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "カチ割るぞこらぁ！",
          command: "↓↙←+CD同時押し",
        },
      ],
    },
  ],
}
