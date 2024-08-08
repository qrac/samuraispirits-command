import type { DataItem } from "../../../types"

export const zanGalfordShura: DataItem = {
  id: "zan-galford-shura",
  name: "ガルフォード（修羅）",
  groups: [
    {
      title: "必殺技",
      list: [
        {
          name: "プラズマブレード",
          command: "↓↘→+斬",
        },
        {
          name: "ローリングクラッシュ",
          command: "→↓↘+C",
        },
        {
          name: "プラズマドッグ",
          command: "↓↙←↓↙←+A",
        },
        {
          name: "ラッシュドッグ",
          command: "↓↙←+A",
        },
        {
          name: "マシンガンドッグ",
          command: "↓↙←+B",
        },
        {
          name: "レプリカドッグ",
          command: "↓↙←+C",
        },
        {
          name: "オーバーヘッドクラッシュ",
          command: "↓↙←+D",
        },
        {
          name: "レプリカアタック",
          command: "→↘↓↙←+AC or BD同時押し",
        },
        {
          name: "イミテイトレプリカ",
          command: "被ダメージ中AC or BD同時押し",
        },
        {
          name: "シャドーコピー",
          command: "→←↙↓↘→+A or B",
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
        {
          name: "スターダストドロップ",
          command: "空中近距離で↙ or ↓ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし",
      titleColor: 2,
      list: [
        {
          name: "ダブルメガストライクヘッズ",
          command: "→←↙↓↘→+C or D",
        },
      ],
    },
  ],
}
