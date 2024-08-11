import type { DataItem } from "../../../../types"

export const zanGenjuroShura: DataItem = {
  id: "zan-genjuro-shura",
  name: "牙神幻十郎（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "桜華斬",
          command: "↓↙←+斬",
        },
        {
          name: "桐覇 光翼刃",
          command: "→↓↘+斬",
        },
        {
          name: "三連殺",
          command: "↓↘→+斬（3回まで）",
          skills: [
            {
              name: "返し刃",
              command: "斬",
            },
          ],
        },
        {
          name: "紅",
          command: "→↘↓+斬",
        },
        {
          name: "雫刃",
          command: "近距離で←↓↙+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "五光斬",
          command: "→←↙↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
