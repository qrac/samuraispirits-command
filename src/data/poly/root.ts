import type { DataItem } from "../../types"

export const polyRoot: DataItem = {
  id: "poly-root",
  name: "基本操作（ポリサム）",
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
          name: "基本組み技",
          command: "C",
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
          name: "動作キャンセル（巻き戻し）",
          command: "通常技などの発生前にC",
        },
        {
          name: "防御キャンセル",
          command: "被ガード時に対応技コマンド（スタミナ半分必要）",
        },
        {
          name: "ダッシュ",
          command: "→→継続 or D+→継続",
        },
        {
          name: "ステップ（前）",
          command: "→→ or D+→",
        },
        {
          name: "ステップ（後）",
          command: "←← or D+←",
        },
        {
          name: "ステップ（奥）",
          command: "D+↖ or ↑ or ↗",
        },
        {
          name: "ステップ（手前）",
          command: "D+↙ or ↓ or ↘",
        },
        {
          name: "走り込み",
          command: "D継続押し+レバー",
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
          command: "起き上がり時A",
        },
        {
          name: "起き上がり攻撃（下段）",
          command: "起き上がり時B",
        },
        {
          name: "ジャンプ復帰",
          command: "崖つかまり時↖ or ↑ or ↗",
        },
        {
          name: "クイック復帰",
          command: "崖つかまり時レバガチャ",
        },
        {
          name: "秘奥義",
          command: "怒ゲージ最大時にキャラ別コマンド",
        },
        {
          name: "怒り爆発",
          command: "怒ゲージ最大時ABC",
          skills: [
            {
              name: "一閃",
              command: "ABC or BCD",
            },
          ],
        },
        {
          name: "初心者モード",
          command: "スタートを押しながら剣質を決定",
        },
      ],
    },
    {
      title: "S・C・S（共通）",
      titleNote: "キャラ個別ルートあり",
      skills: [
        {
          name: "",
          command: "CD（スタミナ半分必要）",
          skills: [
            {
              name: "",
              command: "A・A・A・A or B・B・B・B",
              skills: [
                {
                  name: "駆け引きポイント",
                  command: "A or B",
                  notes: ["中段 or 下段"],
                  skills: [
                    {
                      name: "",
                      command: "A・A・A or B・B・B",
                      skills: [
                        {
                          name: "駆け引きポイント",
                          command: "A or B",
                          notes: ["中段 or 下段"],
                          skills: [
                            {
                              name: "",
                              command: "A・A or B・B",
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
          name: "S・C・S 弾き返し",
          command: "駆け引きポイント前にA or B",
        },
      ],
    },
  ],
}
