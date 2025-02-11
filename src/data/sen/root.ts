import type { DataItem } from "../../types"

export const senRoot: DataItem = {
  id: "sen-root",
  name: "基本操作",
  layout: "slim",
  groups: [
    {
      title: "ボタン説明",
      skills: [
        {
          name: "横斬り",
          command: "A",
        },
        {
          name: "縦斬り",
          command: "B",
        },
        {
          name: "蹴り",
          command: "C",
        },
        {
          name: "特殊動作",
          command: "R",
        },
      ],
    },
    {
      title: "共通",
      skills: [
        {
          name: "横大斬り",
          command: "AB",
          notes: ["動作開始時に←で中断可能"],
        },
        {
          name: "縦大斬り",
          command: "BC",
          notes: ["動作開始時に←で中断可能"],
        },
        {
          name: "ガード不能攻撃",
          command: "ABCR",
        },
        {
          name: "投げ",
          command: "R",
        },
        {
          name: "投げ（広域）",
          command: "→+R",
        },
        {
          name: "後方投げ",
          command: "R←",
        },
        {
          name: "後方投げ（広域）",
          command: "→+R←",
        },
        {
          name: "投げ抜け",
          command: "投げられ直後にR",
        },
        {
          name: "特殊投げ抜け",
          command: "被コマ投げ直後にAR",
        },
        {
          name: "弾き（上段・中断）",
          command: "←+R",
        },
        {
          name: "弾き（下段）",
          command: "↙+R",
        },
        {
          name: "ステップイン",
          command: "→→",
        },
        {
          name: "踏み込み",
          command: "→→継続",
        },
        {
          name: "引き込み",
          command: "←←",
        },
        {
          name: "軸移動（奥）",
          command: "↑N",
        },
        {
          name: "軸移動（手前）",
          command: "↓N",
        },
        {
          name: "受け身（通常）",
          command: "被ダウンの瞬間に→",
        },
        {
          name: "受け身（後転）",
          command: "被ダウンの瞬間に←",
        },
        {
          name: "受け身（軸変）",
          command: "被ダウンの瞬間に↑ or ↓+R",
        },
        {
          name: "移動起き上がり（前後）",
          command: "被ダウン時← or →",
        },
        {
          name: "移動起き上がり（軸変）",
          command: "被ダウン時↑ or ↓",
        },
        {
          name: "クイック起き上がり",
          command: "被ダウン時R",
        },
        {
          name: "起き上がり攻撃（中段）",
          command: "起き上がり時A or B",
        },
        {
          name: "起き上がり攻撃（下段）",
          command: "起き上がり時C",
        },
        {
          name: "挑発",
          command: "ABC",
          notes: ["怒ゲージ最大時は使用不可"],
        },
        {
          name: "怒り爆発",
          command: "怒ゲージ最大時にABC",
          notes: [
            "上中段攻撃吹き飛ばし / 被弾中は使用不可 / 特定の技からキャンセル可能",
          ],
          skills: [
            {
              name: "怒り爆発中専用技",
              command: "↓↘→+BC",
            },
          ],
        },
        {
          name: "一閃",
          command: "体力点滅時に↓↘→+AB",
          notes: ["1ラウンドにつき1回のみ使用可能"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "基本操作・システム・技表 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/49.html",
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
  rootSources: [
    {
      title: "参考資料",
      links: [
        {
          name: "サムライスピリッツ閃 ゲーム内コマンドリスト / Xbox360",
        },
        {
          name: "サムライスピリッツ閃 公式サイト",
          href: "https://game.snk-corp.co.jp/official/samurai_sen/index.html",
        },
        {
          name: "サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/",
        },
        {
          name: "ワイタの仮 - YouTube",
          href: "https://www.youtube.com/@Maniwaita-YTA",
        },
      ],
    },
    {
      title: "検証環境",
      links: [
        {
          name: "サムライスピリッツ閃 / Xbox360",
        },
      ],
    },
  ],
}
