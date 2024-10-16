import type { DataItem } from "../../../../types"

export const tenGenjuroRasetsu: DataItem = {
  id: "ten-genjuro-rasetsu",
  name: "牙神幻十郎（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "裏桜華・菖蒲",
          command: "↓↙←+斬（与ガード時ボタン継続で跳ね返り）",
        },
        {
          name: "桐覇 光翼刃",
          command: "→↓↘+斬",
        },
        {
          name: "三空殺",
          command: "↓↘→+斬（3回まで）",
        },
        {
          name: "紫暮",
          command: "←↓↙+斬",
        },
        {
          name: "百鬼殺",
          command: "↓↙←→+斬",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "裏五光",
          command: "←→↘↓+AB同時押し",
        },
      ],
    },
  ],
}
