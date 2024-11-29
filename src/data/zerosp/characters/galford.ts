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
          command: "↓↘→+CD",
        },
        {
          name: "ダブルメガストライクヘッズ（リア）",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "絶命奥義",
      titleColor: 2,
      skills: [
        {
          name: "絶・ヘブンズウルフ・バッドファング",
          command: "↓↙←+CD",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "キャラ別攻略 ガルフォード | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zerosp/character/04garu.htm",
        },
        {
          name: "変更点～ガルフォード～ サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/04_garu.htm",
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
