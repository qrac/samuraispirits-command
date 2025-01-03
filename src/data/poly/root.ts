import type { DataItem } from "../../types"

export const polyRoot: DataItem = {
  id: "poly-root",
  name: "基本操作",
  groups: [
    {
      title: "ボタン説明",
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
          name: "投げ",
          command: "C",
        },
        {
          name: "移動",
          command: "D",
        },
      ],
    },
    {
      title: "共通動作",
      layout: "slim",
      skills: [
        {
          name: "基本組み技",
          command: "C",
          skills: [
            {
              name: "地面転がし投げ",
              command: "",
              notes: ["入力なしで自動派生"],
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
                  notes: ["入力なしで自動派生"],
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
          command: "被ガード時に対応技コマンド",
          notes: ["スタミナ半分必要"],
        },
        {
          name: "ステップ（前）",
          command: "→→ or →+D",
        },
        {
          name: "ステップ（後）",
          command: "←← or ←+D",
        },
        {
          name: "ステップ（奥）",
          command: "↖ or ↑ or ↗+D",
        },
        {
          name: "ステップ（手前）",
          command: "↙ or ↓ or ↘+D",
        },
        {
          name: "ダッシュ",
          command: "→→継続 or →継続+D",
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
          notes: ["1試合につき1回のみ使用可能 ※怒ゲージ消失"],
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
          notes: [
            "立ち中はオート立ちガード・屈中はオート屈ガード / 通常技と非削り技をガードしても削られるデメリットあり（KOにはならず） / 登場演出が変化 / 対戦で1勝（初心者モード相手では2勝）すると解除",
          ],
        },
      ],
    },
    {
      title: "S・C・S（共通）",
      titleNote: "キャラ個別ルートあり",
      skills: [
        {
          name: "",
          command: "CD",
          notes: ["スタミナ半分必要"],
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
  rootSources: [
    {
      title: "参考資料",
      links: [
        {
          name: "侍魂～サムライスピリッツ～ 完全攻略マニュアル（ネオジオフリークのムック）",
        },
        {
          name: "侍魂～SAMURAI SPIRITS～ 攻略wiki - atwiki",
          href: "https://w.atwiki.jp/samuraispirits64/",
        },
      ],
    },
  ],
}
