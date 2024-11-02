import type { DataItem } from "../../../types"

export const zeroGenjuro: DataItem = {
  id: "zero-genjuro",
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
          command: "←↓↙+斬",
        },
        {
          name: "雫刃",
          command: "近距離で→↓↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
          command: "↓↘→+CD",
        },
      ],
    },
  ],
}
