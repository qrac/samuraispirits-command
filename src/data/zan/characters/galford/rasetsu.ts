import type { DataItem } from "../../../../types"

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
          command: "→+AB",
        },
        {
          name: "プラズマファクター（屈）",
          command: "↘+AB",
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
          command: "→↘↓↙←+AC or BD",
        },
        {
          name: "イミテイトレプリカ",
          command: "被ダメージ中にAC or BD",
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
          command: "→↘↓↙←→+C",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "ガルフォード - キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/command.htm#gal",
        },
        {
          name: "ガルフォード - ド定番連続技ガイド | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/combo.htm#gal",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "",
          href: "https://youtu.be/xxx",
        },
      ],
    },*/
  ],
}
