import type { DataItem } from "../../../../types"

export const tenGairaRasetsu: DataItem = {
  id: "ten-gaira-rasetsu",
  name: "花諷院骸羅（羅刹）",
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
          command: "↓↓+AB同時押し",
        },
        {
          name: "円心殺",
          command: "↓↙←→+斬（レバー回転でダメージ増加）",
        },
        {
          name: "百貫落とし",
          command: "空中で↓+D",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "仁王爆震殺",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
