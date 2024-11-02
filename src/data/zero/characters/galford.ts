import type { DataItem } from "../../../types"

export const zeroGalford: DataItem = {
  id: "zero-galford",
  name: "ガルフォード",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "プラズマブレード",
          command: "↓↘→+斬",
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
          command: "↓↙←+AB",
        },
        {
          name: "オーバーヘッドクラッシュ",
          command: "↓↙←+C",
        },
        {
          name: "レプリカアタック（ヘッド）",
          command: "→↘↓↙←+AC",
        },
        {
          name: "レプリカアタック（リア）",
          command: "→↘↓↙←+BC",
        },
        {
          name: "イミテイトレプリカ（ヘッド）",
          command: "被ダメージ中→←→←→←↓+AC",
        },
        {
          name: "イミテイトレプリカ（リア）",
          command: "被ダメージ中→←→←→←↓+BC",
        },
        {
          name: "シャドーコピー",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "ストライクヘッズ",
          command: "近距離で→↓↘+斬",
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
          name: "スターダストドロップ",
          command: "空中近距離で↙ or ↓ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "ダブルメガストライクヘッズ（ヘッド）",
          command: "↓↘→+CD",
        },
        {
          name: "ダブルメガストライクヘッズ（リア）",
          command: "↓↘→+BC",
        },
      ],
    },
  ],
}
