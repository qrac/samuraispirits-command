import type { DataItem } from "../../../types"

export const senClaude: DataItem = {
  id: "sen-claude",
  name: "クロード",
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
          name: "エグゼグリード",
          command: "→+A",
          notes: ["上段"],
        },
        {
          name: "レイジングディガー",
          command: "→+A・A",
          notes: ["上・下"],
        },
        {
          name: "レイジングディガー～アクションチェンジ",
          command: "→+A・（A・C）",
          notes: ["上・中"],
        },
        {
          name: "クアドラプルA",
          command: "←+A・A・A・A",
          notes: ["上・上・上・上"],
          skills: [
            {
              name: "スティンガー",
              command: "1〜3段目中にB（溜め可）",
              notes: ["中段"],
            },
            {
              name: "チャージスティンガー",
              command: "1〜3段目中にB（最大溜めで自動発動）",
              notes: ["中段"],
            },
          ],
        },
        {
          name: "イグゼクトダウン",
          command: "↘+A",
          notes: ["中段"],
        },
        {
          name: "ベイハザード",
          command: "↙+A",
          notes: ["下段"],
        },
        {
          name: "ダブルベイハザード",
          command: "↙+A・A",
          notes: ["下・下"],
        },
        {
          name: "ダブルベイハザード〜アクションチェンジ",
          command: "↙+A・（A・C）",
          notes: ["下・中"],
        },
        {
          name: "ベイシェイカー",
          command: "↙+A・C・C",
          notes: ["下・中・中"],
        },
        {
          name: "D・I・V（ダプルインパクトヴァイパー）",
          command: "←→+A・B・B",
          notes: ["上・中・中"],
        },
        {
          name: "バーストブリッド",
          command: "←←+A",
          notes: ["中段"],
        },
        {
          name: "ハイトスレイ",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "ラウンドオーバー",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "ラウンドスパイク",
          command: "B・C",
          notes: ["中・中"],
        },
        {
          name: "デッドヒット",
          command: "→+B",
          notes: ["中段"],
        },
        {
          name: "デッドヒット～オーガスライド",
          command: "→+B・→",
          notes: ["中・特殊動作"],
        },
        {
          name: "ソニックノヴァ",
          command: "←+B",
          notes: ["中段"],
          skills: [
            {
              name: "ガトリングヘッドバット",
              command: "（相手立ち状態で）ヒット時にBC",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "レイウェーブ",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "オーガリミット",
          command: "↙+B・C",
          notes: ["中・中"],
          skills: [
            {
              name: "ガトリングヘッドバット",
              command: "ヒット時にBC",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "トランス",
          command: "怒り爆発可能な状態で↙+B・C・（A・B・A・AB）",
          notes: ["中・中・特殊動作"],
          skills: [
            {
              name: "ジ・エンド",
              command: "→↘↓↙←↖↑↗→+A",
              notes: ["（上・中・中・G不能）"],
            },
          ],
        },
        {
          name: "グロウトリガー",
          command: "→→+B",
          notes: ["上段"],
        },
        {
          name: "ターンフェイク Ver.α",
          command: "←→+B・A",
          notes: ["中・上"],
        },
        {
          name: "ターンフェイク Ver.β",
          command: "←→+B・B",
          notes: ["中・下"],
        },
        {
          name: "ターンフェイク Ver.γ",
          command: "←→+B・BC",
          notes: ["中・中"],
        },
        {
          name: "フルパワーエンド",
          command: "↓↙←+B",
          notes: ["中段"],
        },
        {
          name: "クイックデストロイド",
          command: "↓↙←+B・AB（溜め可）",
          notes: ["中段"],
          skills: [
            {
              name: "キャンセル",
              command: "←←",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "チャージデストロイド",
          command: "↓↙←+B・AB（最大溜めで自動発動）",
          notes: ["中・G不能"],
        },
        {
          name: "上段蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "中段蹴り",
          command: "→+C",
          notes: ["中段"],
        },
        {
          name: "下段蹴り",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "回し蹴り",
          command: "←+C",
          notes: ["中段"],
          skills: [
            {
              name: "ガトリングヘッドバット",
              command: "ヒット時にBC",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "前蹴り",
          command: "↘+C",
          notes: ["中段"],
        },
        {
          name: "足払い",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "オーガスライド",
          command: "↓↘→",
          notes: ["特殊動作"],
          skills: [
            {
              name: "オーガスイング",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "ブレイドハート",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "ケニーラッシュ Type I",
              command: "C・C・C",
              notes: ["中・中・中"],
            },
            {
              name: "ケニーラッシュ Type Ⅱ",
              command: "C・C・C（ジャスト入力）",
              notes: ["中・中・中"],
            },
          ],
        },
        {
          name: "InVaito Up Ver.1",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "InVaito Up Ver.2",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "InVaito Up Ver.3",
          command: "立ち途中にC・C",
          notes: ["中・中"],
        },
        {
          name: "マグナブレイカー",
          command: "AB・BC",
          notes: ["上・中"],
        },
        {
          name: "ギガントパルス",
          command: "BC・AB",
          notes: ["中・上"],
        },
        {
          name: "グレイブカイザー",
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
          name: "バーサーカーラッシュ",
          command: "↓↘→+BC",
          notes: ["中・中・中・中"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "クロード - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/18.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 クロード 技一覧 - YouTube",
          href: "https://youtu.be/AeIzAXh13sI",
        },
      ],
    },
  ],
}
