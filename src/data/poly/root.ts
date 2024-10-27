import type { DataItem } from "../../types"

export const polyRoot: DataItem = {
  id: "poly-root",
  name: "基本操作（ポリサム）",
  layout: "slim",
  groups: [
    {
      title: "共通",
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
          name: "投げ（基本組み技）",
          command: "近距離でC",
          skills: [
            {
              name: "地面転がし投げ",
              command: "",
            },
            {
              name: "突き放し",
              command: "C",
            },
            {
              name: "投げ方向変更",
              command: "レバー入力",
              skills: [
                {
                  name: "地面転がし投げ",
                  command: "",
                },
                {
                  name: "突き放し",
                  command: "C",
                },
              ],
            },
          ],
        },
        {
          name: "投げ抜け",
          command: "投げられ直後にC",
        },
        {
          name: "ダッシュ",
          command: "→→継続 or D + →継続",
        },
        {
          name: "ステップ（前）",
          command: "→→ or D + →",
        },
        {
          name: "ステップ（後）",
          command: "←← or D + ←",
        },
        {
          name: "ステップ（奥）",
          command: "D or D + ↖ or ↑ or ↗",
        },
        {
          name: "ステップ（手前）",
          command: "D + ↙ or ↓ or ↘",
        },
        {
          name: "走り込み",
          command: "D押し継続 + レバー",
        },
        {
          name: "大ジャンプ",
          command: "長く↖ or ↑ or ↗",
        },
        {
          name: "小ジャンプ",
          command: "短く↖ or ↑ or ↗",
        },
        {
          name: "振り向き",
          command: "← or →",
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
          name: "起き上がり攻撃（中段）",
          command: "被ダウン復帰中A",
        },
        {
          name: "起き上がり攻撃（下段）",
          command: "被ダウン復帰中B",
        },
        {
          name: "ジャンプ復帰",
          command: "崖つかまり中↖ or ↑ or ↗",
        },
        {
          name: "クイック復帰",
          command: "崖つかまり中レバガチャ",
        },
        {
          name: "防御キャンセル",
          command: "被ガード中に対応技コマンド（スタミナ半分必要）",
        },
        {
          name: "S・C・S",
          command: "CD同時押し（スタミナ半分必要）",
          skills: [
            {
              name: "連斬",
              command: "A,A,A,A or B,B,B,B",
              slimMobileGrid: "auto-1fr",
              skills: [
                {
                  name: "駆け引き",
                  command: "A or B",
                  slimMobileGrid: "auto-1fr",
                  skills: [
                    {
                      name: "連斬",
                      command: "A,A,A or B,B,B",
                      slimMobileGrid: "auto-1fr",
                      skills: [
                        {
                          name: "駆け引き",
                          command: "A or B",
                          slimMobileGrid: "auto-1fr",
                          skills: [
                            {
                              name: "連斬",
                              command: "A,A or B,B",
                              slimMobileGrid: "auto-1fr",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "S・C・S弾き返し",
          command: "被弾中、駆け引き前にA or B",
        },
        {
          name: "秘奥義",
          command: "怒ゲージ最大時にキャラ別コマンド",
        },
        {
          name: "怒り爆発",
          command: "怒ゲージ最大時ABC同時押し",
          skills: [
            {
              name: "一閃",
              command: "ABC or BCD同時押し",
            },
          ],
        },
        {
          name: "初心者モード",
          command: "スタートを押しながら剣質を決定",
        },
      ],
    },
  ],
}
