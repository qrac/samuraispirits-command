import type { DataItem } from "../../../../types"

export const zanRimururuShura: DataItem = {
  id: "zan-rimururu-shura",
  name: "リムルル（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
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
          command: "空中で→↘↓+A",
          skills: [
            {
              name: "終了",
              command: "↑",
            },
          ],
        },
        {
          name: "コンル ノンノ",
          command: "→↓↘+A",
        },
        {
          name: "カムイ シトゥキ",
          command: "↓↙←→+C",
        },
        {
          name: "ルプㇱ テㇰ ヌㇺ（チィゥ）",
          command: "近距離で→↘↓↙←+B",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "ルプㇱ カムイ エムㇱ",
          command: "→↘↓↙←→↘↓↙←+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "リムルル - キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/command.htm#rim",
        },
        {
          name: "リムルル - ド定番連続技ガイド | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/combo.htm#rim",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "",
          href: "https://youtu.be/xxx",
        },
      ],
    },*/
  ],
}
