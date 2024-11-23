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
          command: "→↘↓↙←+BCD",
        },
        {
          name: "ヘッド・レプリカアタック",
          command: "被ダメージ中にBCD",
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
      title: "投げ",
      skills: [
        {
          name: "ローリングドロップ",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "エグゼキューショナー",
          command: "近距離で→ or ←+D or CD",
        },
        {
          name: "レッグスルー",
          command: "素手時に近距離で→ or ←+D or CD",
        },
        {
          name: "スターダストドロップ",
          command: "空中近距離で↙ or ↓ or ↘+B or AB",
        },
        {
          name: "ライトニングキック",
          command: "アースクェイクに対して投げ",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "トライアングルジャンプ",
          command: "空中画面端で↗ or → or ↘",
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
          command: "→←→←→←↓+BCD",
        },
      ],
    },
    {
      title: "武器破壊技",
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
