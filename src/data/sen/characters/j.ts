import type { DataItem } from "../../../types"

export const senJ: DataItem = {
  id: "sen-j",
  name: "J.",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "サイドスレイ",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "リターンスレイ",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "ビガーツイスター",
          command: "←+A",
          notes: ["上段"],
        },
        {
          name: "ダブルビガーツイスター",
          command: "←+A・A",
          notes: ["上・上"],
        },
        {
          name: "ビガーツイスター～フロッグアッパー",
          command: "←+A・B",
          notes: ["上・中"],
        },
        {
          name: "ビガーツイスター～ハイキック",
          command: "←+A・C",
          notes: ["上・上"],
        },
        {
          name: "ビガーツイスター～USH",
          command: "←+A・R",
          notes: ["上・構え移行"],
        },
        {
          name: "ビガーツイスター～MNR",
          command: "←+A・AR（溜め可）",
          notes: ["上・特殊動作"],
        },
        {
          name: "カラミテイコンボ",
          command: "↓+A・B",
          notes: ["下・中"],
        },
        {
          name: "カラミテイコンボ〜USH",
          command: "↓+A・B・R",
          notes: ["下・中・構え移行"],
        },
        {
          name: "パウロスラッシュ",
          command: "↘+A",
          notes: ["中段"],
        },
        {
          name: "パウロスラッシュ〜USH",
          command: "↘+A・R",
          notes: ["中・構え移行"],
        },
        {
          name: "スラッシュラッシュ",
          command: "↙+A・A・B",
          notes: ["上・上・中"],
        },
        {
          name: "ライナーハルト",
          command: "←→+A・A",
          notes: ["上・下"],
        },
        {
          name: "ライナーウォッシャー",
          command: "←→+A・B",
          notes: ["上・中"],
        },
        {
          name: "ライナーウォッシャー〜USH",
          command: "←→+A・B・R",
          notes: ["上・中・構え移行"],
        },
        {
          name: "ハイトスレイ",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "ヴォルトエッジ",
          command: "B・B・B",
          notes: ["中・中・中"],
        },
        {
          name: "ヴォルトサイクロン",
          command: "B・C・C",
          notes: ["中・中・下"],
        },
        {
          name: "ブラックウェイ",
          command: "→+B",
          notes: ["中段"],
        },
        {
          name: "ダブルブラックウェイ",
          command: "→+B・B",
          notes: ["中・中"],
        },
        {
          name: "ブラックウェイ〜USH",
          command: "→+B・R",
          notes: ["中・構え移行"],
        },
        {
          name: "フィフサバイヴァー",
          command: "←+B",
          notes: ["中段"],
        },
        {
          name: "スカイハイ",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "フルパワーショット",
          command: "↙+B",
          notes: ["中段"],
        },
        {
          name: "スピードカット",
          command: "→→+B",
          notes: ["上段"],
        },
        {
          name: "マグナムバック",
          command: "←→+B・B",
          notes: ["中・中"],
        },
        {
          name: "マグナムバックラッシュ",
          command: "←→+B・B・B",
          notes: ["中・中・中"],
        },
        {
          name: "マグナムバック＆キック",
          command: "←→+B・B・C",
          notes: ["中・中・下"],
        },
        {
          name: "マグナムバック〜USH",
          command: "←→+B・B・R",
          notes: ["中・中・構え移行"],
        },
        {
          name: "ハイキック",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "ミドルキック",
          command: "↘+C",
          notes: ["中段"],
        },
        {
          name: "ローキック",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "バックストレートキック",
          command: "←+C",
          notes: ["中段"],
        },
        {
          name: "リージングスレイ",
          command: "↙+C・B",
          notes: ["下・中"],
        },
        {
          name: "リージングキック",
          command: "↙+C・C",
          notes: ["下・下"],
        },
        {
          name: "デンプシーステップ",
          command: "↓↘→（→継続で動作継続）",
          notes: ["特殊動作"],
          skills: [
            {
              name: "ベースボールスウィング",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "フロッグアッパー",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "ジャッジメントセット",
              command: "C・AB",
              notes: ["下・上"],
            },
            {
              name: "ジャッジメントセット〜USH",
              command: "C・AB・R",
              notes: ["下・上・構え移行"],
            },
            {
              name: "USH",
              command: "R",
              notes: ["構え移行"],
            },
            {
              name: "MNR",
              command: "AR（溜め可）",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "USH（アップサイドホールド）",
          command: "AR",
          notes: ["構え移行"],
          skills: [
            {
              name: "L⇒スライド",
              command: "↑",
              notes: ["奥移動"],
            },
            {
              name: "R⇒スライド",
              command: "↓",
              notes: ["手前移動"],
            },
            {
              name: "F⇒ステップ",
              command: "→",
              notes: ["前移動"],
            },
            {
              name: "キャンセル",
              command: "←",
              notes: ["構え解除"],
            },
            {
              name: "オーバーダイブカノン",
              command: "A or B or C or R",
              notes: ["中段"],
            },
          ],
        },
        {
          name: "MNR（ミッドナイトレボリューション）",
          command: "※派生始動（溜め可）",
          notes: ["特殊動作"],
          skills: [
            {
              name: "ソウルショット",
              command: "最大溜めで自動発動",
              notes: ["G不能"],
            },
            {
              name: "ビガーツイスター",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "ロースラスト",
              command: "↓+A",
              notes: ["下段"],
            },
            {
              name: "フロッグアッパー",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "ハイキック",
              command: "C",
              notes: ["上段"],
            },
            {
              name: "アイアンホーン",
              command: "BC",
              notes: ["中段"],
            },
            {
              name: "USH",
              command: "R",
              notes: ["構え移行"],
            },
          ],
        },
        {
          name: "パワフルスイング",
          command: "立ち途中にA",
          notes: ["上段"],
        },
        {
          name: "アップフォーミュラ",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "クラフトキック",
          command: "立ち途中にC",
          notes: ["中段"],
        },
        {
          name: "シングルマグナム",
          command: "立ち途中にC・B",
          notes: ["中・中"],
        },
        {
          name: "カラミティホーン",
          command: "立ち途中にC・AB",
          notes: ["中・中"],
        },
        {
          name: "カラミティホーン〜USH",
          command: "立ち途中にC・AB・R",
          notes: ["中・中・構え移行"],
        },
        {
          name: "スピニングロール",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "スピニングリバース",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "リーサルシャドマニー",
          command: "ABCR",
          notes: ["G不能"],
        },
      ],
    },
    {
      title: "怒り爆発中専用技",
      titleColor: 2,
      skills: [
        {
          name: "メテオドライヴ",
          command: "↓↘→+BC",
          notes: ["（中・中）"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "J. - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/32.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 J. 技一覧 - YouTube",
          href: "https://youtu.be/lZKi3tpA-XU",
        },
      ],
    },
  ],
}
