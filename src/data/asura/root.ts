import type { DataItem } from "../../types"

export const asuraRoot: DataItem = {
  id: "asura-root",
  name: "基本操作（アスラ斬魔伝）",
  groups: [
    {
      title: "共通",
      layout: "slim",
      skills: [
        {
          name: "弱攻撃",
          command: "A",
        },
        {
          name: "強攻撃",
          command: "B",
        },
        {
          name: "特殊攻撃",
          command: "C",
        },
        {
          name: "軸移動",
          command: "D or ↓+D",
        },
        {
          name: "つかみ",
          command: "→+C",
          skills: [
            {
              name: "基本投げ",
              command: "",
              notes: ["自動（正面）｜投げ抜け:C"],
            },
            {
              name: "背後投げ",
              command: "",
              notes: ["自動（背面） / 投げ抜け:C"],
            },
            {
              name: "防御崩し（突き放し）",
              command: "→",
            },
            {
              name: "防御崩し（引っ張り）",
              command: "←",
            },
          ],
        },
        {
          name: "投げ抜け",
          command: "投げられ直後にC",
        },
        {
          name: "踏み込み",
          command: "→→ or →+D",
        },
        {
          name: "引き込み",
          command: "←← or ←+D",
        },
        {
          name: "ダッシュジャンプ",
          command: "踏み込み中に↑ or ↗",
        },
        {
          name: "目ジャンプ",
          command: "着地時↓↑",
        },
        {
          name: "着地キャンセル",
          command: "着地時に必殺技コマンド",
        },
        {
          name: "防御キャンセル",
          command: "被ガード時に対応技コマンド",
          notes: ["怒ゲージ50%必要"],
        },
        {
          name: "弾き返し",
          command: "攻撃を受ける直前に←",
        },
        {
          name: "振り向き",
          command: "← or →",
        },
        {
          name: "追い打ち",
          command: "与ダウン時↙ or ↓ or ↘+A or B",
        },
        {
          name: "受け身",
          command: "被ダウン直前にA or B or C or D",
        },
        {
          name: "移動起き上がり",
          command: "被ダウン時← or →",
        },
        {
          name: "体力回復",
          command: "被ダウン時D継続押し",
        },
        {
          name: "起き上がり攻撃（中段）",
          command: "起き上がり時A",
        },
        {
          name: "起き上がり攻撃（下段）",
          command: "起き上がり時B",
        },
        {
          name: "S・C・S",
          command: "CD ｜ →+CD ｜ ↓or↘+CD",
          notes: ["攻撃型 ｜ 弾き型（上・中・投・G不） ｜ 下段弾き型"],
          layout: "unslim",
          skills: [
            {
              name: "",
              command: "A・A・A",
            },
            {
              name: "",
              command: "B・B・B",
            },
            {
              name: "",
              command: "A・A・B・B・C・C・A・B・C",
            },
          ],
        },
        {
          name: "秘奥義",
          command: "怒ゲージ最大時にキャラ別コマンド",
        },
        {
          name: "怒り爆発",
          command: "ABC",
          notes: ["1試合につき1回のみ使用可能 ※怒ゲージ消失"],
          skills: [
            {
              name: "一閃",
              command: "ABC or BCD",
            },
            {
              name: "スーパーキャンセル",
              command: "本来できないキャンセルが可能になる",
            },
          ],
        },
      ],
    },
  ],
}
