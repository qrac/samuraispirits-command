import type { DataItem } from "../../../types"

export const kenGenjuro: DataItem = {
  id: "ken-genjuro",
  name: "牙神幻十郎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "裏桜華・菖蒲",
          command: "↓↙←+斬（与ガード時ボタン継続押しで跳ね返り）",
        },
        {
          name: "桐覇 光翼刃",
          command: "→↓↘+斬",
        },
        {
          name: "三連殺",
          command: "↓↘→+斬（3回まで）",
        },
        {
          name: "百鬼殺",
          command: "→←→+斬",
        },
        {
          name: "酒振舞",
          command: "←↓↙+斬",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "ぬいぐるみ変化【真】",
          command: "→↘↓↙←→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "桐覇 光翼刃・鬼面割り【真】",
          command: "→↘↓↙←→+BC",
        },
        {
          name: "桐覇 光翼刃・鬼面割り【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
}
