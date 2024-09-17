import type { DataItem } from "../../../types"

export const zerospGalford: DataItem = {
  id: "zerosp-galford",
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
          command: "↓↙←+AB同時押し",
        },
        {
          name: "オーバーヘッドクラッシュ",
          command: "↓↙←+C",
        },
        {
          name: "レプリカアタック（ヘッド）",
          command: "→↘↓↙←+AC同時押し",
        },
        {
          name: "レプリカアタック（リア）",
          command: "→↘↓↙←+BC同時押し",
        },
        {
          name: "イミテイトレプリカ（ヘッド）",
          command: "被ダメージ中→←→←→←↓+AC同時押し",
        },
        {
          name: "イミテイトレプリカ（リア）",
          command: "被ダメージ中→←→←→←↓+BC同時押し",
        },
        {
          name: "ストライクヘッズ",
          command: "近距離で→↓↘+斬 or C",
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
          command: "↓↘→+CD同時押し",
        },
        {
          name: "ダブルメガストライクヘッズ（リア）",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "絶・ヘブンズウルフ・バッドファング",
          command: "↓↙←+CD同時押し",
        },
      ],
    },
  ],
}
