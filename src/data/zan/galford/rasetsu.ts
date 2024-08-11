import type { DataItem } from "../../../types"

export const zanGalfordRasetsu: DataItem = {
  id: "zan-galford-rasetsu",
  name: "ガルフォード（羅刹）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "プラズマブレイク",
          command: "↓↘→+斬",
        },
        {
          name: "プラズマファクター（立ち）",
          command: "→+AB同時押し",
        },
        {
          name: "プラズマファクター（屈）",
          command: "↘+AB同時押し",
        },
        {
          name: "ライトニングスラッシュ",
          command: "→↓↘+C",
        },
        {
          name: "ストライクヘッズ",
          command: "近距離で→↓↘+D",
        },
        {
          name: "ダッシュストライクヘッズ",
          command: "踏み込み中近距離で→↓↘+D",
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
      title: "武器飛ばし",
      titleColor: 2,
      skills: [
        {
          name: "ライトニングストライクスリー",
          command: "→↘↓↙←→+C",
        },
      ],
    },
  ],
}
