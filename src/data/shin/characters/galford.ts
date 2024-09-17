import type { DataItem } from "../../../types"

export const shinGalford: DataItem = {
  id: "shin-galford",
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
          command: "↓↙←+斬",
        },
        {
          name: "マシンガンドッグ",
          command: "↓↙←+C",
        },
        {
          name: "レプリカドッグ",
          command: "↓↙←+D",
        },
        {
          name: "リア・レプリカアタック",
          command: "→↘↓↙←+BCD同時押し",
        },
        {
          name: "ヘッド・レプリカアタック",
          command: "被ダメージ中BCD同時押し",
        },
        {
          name: "シャドーコピー",
          command: "→←↙↓↘→+A or B",
        },
        {
          name: "ストライクヘッズ",
          command: "近距離で→↓↘+蹴",
        },
      ],
    },
    {
      title: "特殊技",
      skills: [
        {
          name: "トライアングルジャンプ",
          command: "空中画面端で↗ or → or ↘",
        },
        {
          name: "スターダストドロップ",
          command: "空中近距離で↙ or ↓ or ↘+B or AB同時押し",
        },
        {
          name: "ぬいぐるみ変化",
          command: "→↘↓↙←→←+C",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "バックスタブ",
          command: "→←→←→←↓+BCD同時押し",
        },
      ],
    },
    {
      title: "武器破壊",
      titleColor: 2,
      skills: [
        {
          name: "メガストライクドッグ",
          command: "→↘↓↙←→+D",
        },
      ],
    },
  ],
}
