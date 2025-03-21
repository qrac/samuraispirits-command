import type { DataItem } from "../../types"

export const asuraRoot: DataItem = {
  id: "asura-root",
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
          name: "特殊攻撃",
          command: "C",
        },
        {
          name: "ステップ移動",
          command: "D",
        },
      ],
    },
    {
      title: "共通動作",
      layout: "slim",
      skills: [
        {
          name: "つかみ",
          command: "→+C",
          skills: [
            {
              name: "基本投げ",
              command: "",
              notes: ["自動（正面） / 投げ抜け:C"],
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
          name: "軸移動（奥）",
          command: "N+D",
        },
        {
          name: "軸移動（手前）",
          command: "↙ or ↓ or ↘+D",
        },
        {
          name: "ステップ（前）",
          command: "→→ or →+D",
        },
        {
          name: "ステップ（後）",
          command: "←← or ←+D",
          notes: ["2回連続で行うと尻餅をついてしまう"],
        },
        {
          name: "ダッシュ",
          command: "→→継続 or →継続+D",
        },
        {
          name: "ダッシュジャンプ",
          command: "ステップ（前）中に↗",
          notes: ["↖ or ↑を入力しても前方に飛ぶ"],
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
          notes: ["怒ゲージ50%必要 / 25%消費"],
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
          notes: ["攻撃型 ｜ 弾き型（上・中・投・G不能） ｜ 下段弾き型"],
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
              notes: ["相手体力が赤より多いとKOできない"],
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
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "アスラ斬魔伝 / システムなど - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1%20/%20%a5%b7%a5%b9%a5%c6%a5%e0%a4%ca%a4%c9",
        },
        {
          name: "アスラ斬魔伝 / キャラ雑感など - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1%20/%20%a5%ad%a5%e3%a5%e9%bb%a8%b4%b6%a4%ca%a4%c9",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ2アスラ斬魔伝 もっと楽しむためのシステム解説 - YouTube",
          href: "https://youtu.be/HI2lgp-MBoI",
        },
        {
          name: "アスラ斬魔伝 攻略動画 List - YouTube",
          href: "https://www.youtube.com/watch?v=KsPlF3uQkCY&list=PLwCs6ckjhfm4f6lCPva60HWu1VVvtjeQE",
        },
      ],
    },
  ],
  rootSources: [
    {
      title: "参考資料",
      links: [
        {
          name: "アスラ斬魔伝コマンドブック（詳細版）",
          href: "https://drive.google.com/drive/folders/1dMubK6-69pWR471Py4rUT3j-dAo4pp1e",
        },
        {
          name: "アスラ斬魔伝 / コマンド一覧 - 数字置き場",
          href: "https://seesaawiki.jp/kakugesouko/d/%a5%a2%a5%b9%a5%e9%bb%c2%cb%e2%c5%c1%20/%20%a5%b3%a5%de%a5%f3%a5%c9%b0%ec%cd%f7",
        },
        {
          name: "ワイタの仮雑記 サムライスピリッツ2アスラ斬魔伝＋侍魂-Samurai Spirits-(ポリサム)関連リンク集",
          href: "http://waitanokari.blog38.fc2.com/blog-entry-364.html",
        },
        {
          name: "ワイタの仮 - YouTube",
          href: "https://www.youtube.com/@Maniwaita-YTA",
        },
      ],
    },
  ],
}
