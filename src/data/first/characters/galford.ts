import type { DataItem } from "../../../types"

export const firstGalford: DataItem = {
  id: "first-galford",
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
          name: "ダイビングドッグ",
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
          command: "→←↙↓↘→+A or B or C or D",
        },
        {
          name: "ストライクヘッズ",
          command: "近距離で→↓↘+蹴",
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
          name: "スターダストドロップ",
          command: "空中近距離で↙ or ↓ or ↘+B or AB",
        },
      ],
    },
  ],
}
