import type { DataItem } from "../../../types"

export const senKirian: DataItem = {
  id: "sen-kirian",
  name: "キリアン",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "アンフルーレ",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "レイジングフルーレ",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "レイジングフルーレ〜MaM",
          command: "A・A・↑ or ↓ or ←←",
          notes: ["上・上・構え移行"],
        },
        {
          name: "コルメーナ・フルーレ",
          command: "A・A・A",
          notes: ["上・上・上"],
        },
        {
          name: "レイジングフェイザー",
          command: "←+A",
          notes: ["上段"],
        },
        {
          name: "レイジングフェイザーリターン",
          command: "←+A・A",
          notes: ["上・上"],
        },
        {
          name: "レイジングフェイザーフェイクロー",
          command: "←+A・B",
          notes: ["上・下"],
        },
        {
          name: "レイジングフェイザー〜MaM",
          command: "←+A・↑ or ↓ or ←←",
          notes: ["上・構え移行"],
        },
        {
          name: "レッグウェイヴ",
          command: "↙+A",
          notes: ["下段"],
        },
        {
          name: "トレオドゥ・ファーント",
          command: "↘+A・B",
          notes: ["上・中"],
          skills: [
            {
              name: "パレンテイーア・トレーロ",
              command: "2段目ヒット時にAB",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "トレオドゥ・レプシカ",
          command: "↘+A・C・B",
          notes: ["上・下・中"],
        },
        {
          name: "スエルテ",
          command: "屈中に↘+A",
          notes: ["中段"],
        },
        {
          name: "エスパーダ",
          command: "←←+A",
          notes: ["上段"],
        },
        {
          name: "ルカーノ・ファーント",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "キャートルチェーン",
          command: "B・B・B・B",
          notes: ["中・中・中・中"],
          skills: [
            {
              name: "MaM",
              command: "1〜3段目中に↑ or ↓ or ←←",
              notes: ["構え移行"],
            },
          ],
        },
        {
          name: "ストロークレッセント",
          command: "B・B・B・C",
          notes: ["中・中・中・下"],
        },
        {
          name: "フィストファーント",
          command: "→+B・B",
          notes: ["上・上"],
        },
        {
          name: "フェンシン",
          command: "←+B・B・B・B",
          notes: ["上・上・上・中"],
        },
        {
          name: "フェンシン〜MaM",
          command: "←+B・B・B・↑ or ↓ or ←←",
          notes: ["上・上・上・構え移行"],
        },
        {
          name: "レホネアドール",
          command: "↓+B",
          notes: ["下段"],
        },
        {
          name: "スルーディザスター",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "オーラ・ファーント",
          command: "↙+B・B",
          notes: ["中・中"],
          skills: [
            {
              name: "MaM",
              command: "1〜2段目中に↑ or ↓ or ←←",
              notes: ["構え移行"],
            },
            {
              name: "アフィショナード",
              command: "1〜2段目中にC・C",
              notes: ["下・中"],
            },
            {
              name: "オラ・デ・ベルダ",
              command: "1〜2段目中にC・↓+C",
              notes: ["下・下"],
            },
          ],
        },
        {
          name: "コリーダ・デ・トロス",
          command: "↙+B・B・B",
          notes: ["中・中・中"],
        },
        {
          name: "工ンシエロ",
          command: "←←+B",
          notes: ["中段"],
        },
        {
          name: "ピンチャソ",
          command: "→→+B",
          notes: ["中段"],
        },
        {
          name: "エストカーダ",
          command: "屈中に↘+B",
          notes: ["中段"],
        },
        {
          name: "テルシオ・デ・ムエルテ",
          command: "↓↘→+B",
          notes: ["中段"],
        },
        {
          name: "上段蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "中段蹴り",
          command: "↘+C",
          notes: ["中段"],
        },
        {
          name: "下段蹴り",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "足払い",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "MaM（マノ・ア・マノ）",
          command: "AR",
          notes: ["構え移行"],
          skills: [
            {
              name: "スラントフルーレ",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "ホーンテッドファーント",
              command: "B・B・B・B・B・B・B",
              notes: ["中・中・中・中・中・中・中"],
              skills: [
                {
                  name: "MaM",
                  command: "1〜6段目中に↑ or ↓ or ←←",
                  notes: ["構え移行"],
                },
              ],
            },
            {
              name: "アクセルチャージ",
              command: "C",
              notes: ["中段"],
            },
            {
              name: "アクセルチャージステップ",
              command: "C（溜め可）",
              notes: ["特殊動作"],
            },
            {
              name: "マックスアクセルチャージ",
              command: "C（最大溜めで自動発動）",
              notes: ["G不能"],
            },
            {
              name: "バックロール",
              command: "←←+R",
              notes: ["構え移行"],
            },
            {
              name: "レフトロール",
              command: "↑",
              notes: ["構え移行"],
            },
            {
              name: "ライトロール",
              command: "↓",
              notes: ["構え移行"],
            },
            {
              name: "キャンセル",
              command: "← or →",
              notes: ["構え解除"],
            },
          ],
        },
        {
          name: "ヴァイツフルーレ",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "レイブンストローク",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "ホークスパイク",
          command: "立ち途中にC",
          notes: ["中段"],
        },
        {
          name: "ストローク",
          command: "軸移動中にA",
          notes: ["中段"],
        },
        {
          name: "アベッハ・ファーント",
          command: "軸移動中にB",
          notes: ["（中・中）"],
        },
        {
          name: "ロールキック",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "スラントヴァイパー",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "ブルホーン・トリガー",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "マタドールドゥ・ファーント",
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
          name: "エクスプロシオン・ファーント",
          command: "↓↘→+BC",
          notes: ["（上・上・上・上・G不能）"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "キリアン - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/45.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 キリアン 技一覧 - YouTube",
          href: "https://youtu.be/-ye18rR40qw",
        },
      ],
    },
  ],
}
