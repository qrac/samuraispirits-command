import type { DataItem } from "../../../types"

export const senGalford: DataItem = {
  id: "sen-galford",
  name: "ガルフォード",
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
          name: "リバースブレード",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "ダブルバックナックル",
          command: "←+A・A",
          notes: ["上・上"],
        },
        {
          name: "ダブルバックナックル～ニンジャスライド",
          command: "←+A・A・↘",
          notes: ["上・上・特殊動作"],
        },
        {
          name: "ボルテックコンビネーション",
          command: "←+A・A・B",
          notes: ["上・上・中"],
        },
        {
          name: "カッティングエッジ",
          command: "↘+A",
          notes: ["中段"],
        },
        {
          name: "カッティングエッジ～ニンジャスライド",
          command: "↘+A・↘",
          notes: ["中・特殊動作"],
        },
        {
          name: "バーニングホライゾン",
          command: "↘+A・C",
          notes: ["中・上"],
        },
        {
          name: "シャイニングホライゾン",
          command: "↘+A・↓+C",
          notes: ["中・下"],
        },
        {
          name: "サンダーアタックコンビネーション",
          command: "↙+A・A・AB",
          notes: ["上・上・中"],
        },
        {
          name: "ライジングサンダーキックコンボ",
          command: "↙+A・C・C",
          notes: ["上・中・上"],
        },
        {
          name: "ダークネススラッシュ",
          command: "←←+A・B",
          notes: ["特中・中"],
        },
        {
          name: "ソニックブレード",
          command: "↓↙←+A",
          notes: ["中段"],
        },
        {
          name: "ハイトスレイ",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "コンボ：ライトニングストーム",
          command: "B・B・B",
          notes: ["中・中・中"],
        },
        {
          name: "コンボ：ライトニング＆アースブレイク",
          command: "B・B・C",
          notes: ["中・中・下"],
        },
        {
          name: "ソニックスラッシュ",
          command: "→+B・A",
          notes: ["上・上"],
        },
        {
          name: "グランドホイール",
          command: "→+B・C",
          notes: ["上・特殊動作・下"],
        },
        {
          name: "グランドホイール〜ライジングスター",
          command: "→+B・C・B",
          notes: ["上・特殊動作・中"],
        },
        {
          name: "グランドホイール〜ストライクヘッズ",
          command: "→+B・C・CR",
          notes: ["上・特殊動作・投げ"],
        },
        {
          name: "ライトニングナックル",
          command: "←+B",
          notes: ["中段"],
        },
        {
          name: "スウェー＆スプリングバック",
          command: "←+B・←",
          notes: ["中・特殊動作"],
        },
        {
          name: "スウェー＆ニンジャスライド",
          command: "←+B・↘",
          notes: ["中・特殊動作"],
        },
        {
          name: "スウェー＆レッグブレイカー",
          command: "←+B・C",
          notes: ["下段"],
        },
        {
          name: "サザンクロスブレード",
          command: "↓+B・B・A",
          notes: ["中・中・上"],
        },
        {
          name: "ライジングスター",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "コンボ：トルネードエッジ",
          command: "↙+B・A・A",
          notes: ["中・上・中"],
        },
        {
          name: "ライトニングインパクト",
          command: "↓↙←+B（溜め可）",
          notes: ["中段"],
          skills: [
            {
              name: "ライトニングインパクトMAX",
              command: "最大溜めで自動発動",
              notes: ["G不能"],
            },
            {
              name: "キャンセル",
              command: "溜め中に←←",
              notes: ["特殊動作"],
            },
            {
              name: "モーメントムーブ・ビハインド",
              command: "溜め中に→",
              notes: ["瞬間移動（相手背後）"],
            },
            {
              name: "モーメントムーブ・フライ",
              command: "溜め中に→↑",
              notes: ["瞬間移動（空中）"],
            },
            {
              name: "モーメントムーブ・バック",
              command: "溜め中に→←",
              notes: ["瞬間移動（後退）"],
            },
          ],
        },
        {
          name: "ハイキック",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "コンボ：ハリケーンアタック",
          command: "→+C・C",
          notes: ["中・中"],
        },
        {
          name: "ボルトチャージ",
          command: "→+C・AB",
          notes: ["中・特殊動作"],
        },
        {
          name: "ボルトチャージ～スウェー",
          command: "→+C・AB・←",
          notes: ["中・特殊動作・中"],
        },
        {
          name: "ボルトチャージ～ニンジャスライド",
          command: "→+C・AB・↘",
          notes: ["中・特殊動作・特殊動作"],
        },
        {
          name: "ボルテッククロー",
          command: "→+C・AB・AB",
          notes: ["中・特殊動作・中"],
        },
        {
          name: "フェイクスピン",
          command: "→+C・AB・C",
          notes: ["中・特殊動作・下"],
        },
        {
          name: "ブレイクラウド",
          command: "←+C・C",
          notes: ["上・上"],
        },
        {
          name: "コンボ：ライトニングプラズマ",
          command: "↓+C・B・B",
          notes: ["下・上・中"],
        },
        {
          name: "ミドルキック",
          command: "↘+C",
          notes: ["中段"],
        },
        {
          name: "フェイクキックハイ",
          command: "↘+C・C",
          notes: ["中・上"],
        },
        {
          name: "フェイクキックロー",
          command: "↘+C・↘+C",
          notes: ["中・下"],
        },
        {
          name: "レッグブレイカー",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "トルネードキック",
          command: "→→+C",
          notes: ["中段"],
        },
        {
          name: "ストライクヘッズ",
          command: "CR",
          notes: ["投げ"],
        },
        {
          name: "ラッシュドッグ",
          command: "↓↙←+R",
          notes: ["下段"],
        },
        {
          name: "スプリングバック",
          command: "←←+R",
          notes: ["特殊動作"],
        },
        {
          name: "ニンジャスライド",
          command: "↓↘",
          notes: ["特殊動作"],
          skills: [
            {
              name: "モーメントムーブ・ビハインド",
              command: "A",
              notes: ["瞬間移動（相手背後）"],
            },
            {
              name: "モーメントムーブ・フライ",
              command: "A・↑",
              notes: ["瞬間移動（空中）"],
            },
            {
              name: "モーメントムーブ・バック",
              command: "A・←",
              notes: ["瞬間移動（後退）"],
            },
            {
              name: "プラズマブロウ",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "スターライズヒット",
              command: "C",
              notes: ["上段"],
            },
            {
              name: "ネオストライクヘッズ",
              command: "↘+C",
              notes: ["投げ"],
            },
          ],
        },
        {
          name: "ライジングブロウ",
          command: "↓↘+B（ジャスト入力）",
          notes: ["中段"],
        },
        {
          name: "サマーソルトキック",
          command: "↓↘+C（ジャスト入力）",
          notes: ["中段"],
        },
        {
          name: "スカイレイ",
          command: "立ち途中にA",
          notes: ["上段"],
        },
        {
          name: "ムーンスラッシュ",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "ハイサイドキック",
          command: "立ち途中にC",
          notes: ["上段"],
        },
        {
          name: "モーメントムーブ・ビハインド",
          command: "軸移動中にA",
          notes: ["瞬間移動（相手背後）"],
        },
        {
          name: "モーメントムーブ・フライ",
          command: "軸移動中にA・↑",
          notes: ["瞬間移動（空中）"],
        },
        {
          name: "モーメントムーブ・バック",
          command: "軸移動中にA・←",
          notes: ["瞬間移動（後退）"],
        },
        {
          name: "ダウンブレイクロー",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "スウィープキック",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "ジャスティススラッシュ",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "ジャスティススレイヤー",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "ライトニングジャッジメント",
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
          name: "パニッシングビート",
          command: "↓↘→+BC",
          notes: ["中段"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "ガルフォード - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/47.html",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 ガルフォード 技一覧 - YouTube",
          href: "https://youtu.be/xxxx",
        },
      ],
    },*/
  ],
}
