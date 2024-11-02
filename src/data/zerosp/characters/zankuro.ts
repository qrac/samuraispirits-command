import type { DataItem } from "../../../types"

export const zerospZankuro: DataItem = {
  id: "zerosp-zankuro",
  name: "壬無月斬紅郎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "無限流 疾風斬",
          command: "↓↘→+斬",
        },
        {
          name: "無限流 無法拳",
          command: "↓↘→+C",
        },
        {
          name: "無限流 天崩斬",
          command: "→↓↘+斬",
        },
        {
          name: "無限流 不動",
          command: "↓↙←+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "無限流 無限砲",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "無限流極意 無双剣",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
}
