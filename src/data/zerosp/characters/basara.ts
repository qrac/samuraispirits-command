import type { DataItem } from "../../../types"

export const zerospBasara: DataItem = {
  id: "zerosp-basara",
  name: "首斬り破沙羅",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "地刺し",
          command: "↓↘→+斬",
        },
        {
          name: "空刺し",
          command: "空中で↓↘→+斬",
        },
        {
          name: "鵺魂",
          command: "↓↘→+C",
        },
        {
          name: "友引",
          command: "近距離で→↓↘+C",
        },
        {
          name: "刺し足",
          command: "空中で↓+C",
        },
        {
          name: "影吸い",
          command: "↓↙←+C",
        },
        {
          name: "影出",
          command: "→↓↘+斬",
        },
        {
          name: "影騙し",
          command: "←↓↙+斬 or C",
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
        {
          name: "頭骨割り",
          command: "空中で↙ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "影舞い・夢彈",
          command: "↓↘→+CD",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "獄門",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "キャラ別攻略 首斬り破沙羅 | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zerosp/character/13basara.htm",
        },
        {
          name: "変更点～首斬り破沙羅～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/08_basara.htm",
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
