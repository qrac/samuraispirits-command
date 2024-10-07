import type { DataItem } from "../../../types"

export const kenGalford: DataItem = {
  id: "ken-galford",
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
          name: "プラズマブレイク",
          command: "→↘↓↙←→+AC同時押し",
        },
        {
          name: "ラッシュドッグ",
          command: "↓↙←+A",
          skills: [
            {
              name: "フェイクドッグ ラッシュ",
              command: "↓↙←+A",
            },
            {
              name: "フェイクドッグ レプリカ",
              command: "↓↙←+B",
            },
            {
              name: "フェイクドッグ ストライク",
              command: "↓↙←+C",
            },
          ],
        },
        {
          name: "マシンガンドッグ",
          command: "↓↙←+B",
          skills: [
            {
              name: "フェイクドッグ ラッシュ",
              command: "↓↙←+A",
            },
            {
              name: "フェイクドッグ レプリカ",
              command: "↓↙←+B",
            },
            {
              name: "フェイクドッグ ストライク",
              command: "↓↙←+C",
            },
          ],
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
          command: "→↘↓↙←+AD同時押し",
        },
        {
          name: "レプリカアタック（リア）",
          command: "→↘↓↙←+CE同時押し",
        },
        {
          name: "イミテイトレプリカ（ヘッド）",
          command: "被ダメージ中→←→←→←↓+AD同時押し",
        },
        {
          name: "イミテイトレプリカ（リア）",
          command: "被ダメージ中→←→←→←↓+CE同時押し",
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
          command: "空中画面端で↗ or ↘",
        },
        {
          name: "スターダストドロップ",
          command: "空中近距離で↙ or ↓ or ↘+D",
        },
        {
          name: "特殊技",
          command: "↓↙←+E",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "→↘↓↙←→←+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "メガストライクドッグ【真】",
          command: "→↘↓↙←→+BC同時押し",
        },
        {
          name: "メガストライクドッグ【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "ダブルメガストライクヘッズ（ヘッド）",
          command: "↓↘→+AB同時押し",
        },
        {
          name: "ダブルメガストライクヘッズ（リア）",
          command: "↓↘→+AD同時押し",
        },
      ],
    },
  ],
}
