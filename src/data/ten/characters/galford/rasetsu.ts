import type { DataItem } from "../../../../types"

export const tenGalfordRasetsu: DataItem = {
  id: "ten-galford-rasetsu",
  name: "ガルフォード（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "プラズマブレイク",
          command: "→+斬連打",
        },
        {
          name: "プラズマファクター",
          command: "↓↘→+A or B",
        },
        {
          name: "ライトニングスラッシュ",
          command: "↓↘→+C",
        },
        {
          name: "ストライクヘッズ",
          command: "近距離で→↓↘+斬 or D",
        },
        {
          name: "ダッシュストライクヘッズ",
          command: "踏み込み中近距離で→↓↘+斬 or D",
        },
        {
          name: "レプリカアタック（ヘッド）",
          command: "→↘↓↙←+AC",
        },
        {
          name: "レプリカアタック（リア）",
          command: "→↘↓↙←+BD",
        },
        {
          name: "イミテイトレプリカ（ヘッド）",
          command: "被ダメージ中にAC",
        },
        {
          name: "イミテイトレプリカ（リア）",
          command: "被ダメージ中にBD",
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
          name: "ライトニングストライクスリー",
          command: "←→↘↓+AB",
        },
      ],
    },
  ],
}
