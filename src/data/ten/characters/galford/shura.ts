import type { DataItem } from "../../../../types"

export const tenGalfordShura: DataItem = {
  id: "ten-galford-shura",
  name: "ガルフォード（修羅）",
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
          command: "↓↙←+C",
        },
        {
          name: "オーバーヘッドクラッシュ",
          command: "↓↙←+D",
        },
        {
          name: "レプリカアタック（ヘッド）",
          command: "→↘↓↙←+AC同時押し",
        },
        {
          name: "レプリカアタック（リア）",
          command: "→↘↓↙←+BD同時押し",
        },
        {
          name: "イミテイトレプリカ（ヘッド）",
          command: "被ダメージ中AC同時押し",
        },
        {
          name: "イミテイトレプリカ（リア）",
          command: "被ダメージ中BD同時押し",
        },
        {
          name: "シャドーコピー",
          command: "→←↙↓↘→+A or B",
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
          name: "ダブルメガストライクヘッズ",
          command: "←→↘↓+AB or CD同時押し",
        },
      ],
    },
  ],
}
