import type { DataItem } from "../../../types"

export const zanRimururuShura: DataItem = {
  id: "zan-rimururu-shura",
  name: "リムルル（修羅）",
  groups: [
    {
      title: "必殺技",
      list: [
        {
          name: "ルプㇱ クアレ",
          command: "↓↘→+斬",
        },
        {
          name: "コンル メㇺ",
          command: "←↙↓+A",
        },
        {
          name: "コンル シラㇽ",
          command: "空中で→↘↓+A（↑で終了）",
        },
        {
          name: "カムイ シトゥキ",
          command: "↓↙←→+C",
        },
        {
          name: "コンル ノンノ",
          command: "→↓↘+A",
        },
        {
          name: "ルプㇱ テㇰ ヌㇺ（チィゥ）",
          command: "近距離で→↘↓↙←+B",
        },
      ],
    },
    {
      title: "特殊技",
      list: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      list: [
        {
          name: "ルプㇱ カムイ エムㇱ",
          command: "→↘↓↙←→↘↓↙←+CD同時押し",
        },
      ],
    },
  ],
}
