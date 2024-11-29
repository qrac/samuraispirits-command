import type { DataItem } from "../../types"

export const zerospRoot: DataItem = {
  id: "zerosp-root",
  name: "基本操作（零SP）",
  layout: "slim",
  groups: [
    {
      skills: [
        {
          name: "弱斬り",
          command: "A",
        },
        {
          name: "中斬り",
          command: "B",
        },
        {
          name: "強斬り",
          command: "AB",
        },
        {
          name: "蹴り",
          command: "C",
        },
        {
          name: "特殊動作",
          command: "D",
        },
        {
          name: "瞑想",
          command: "D継続押し",
          notes: ["怒ゲージを消費"],
        },
        {
          name: "上段蹴り",
          command: "N or ←+C",
        },
        {
          name: "下段狙い蹴り",
          command: "→+C",
        },
        {
          name: "牽制攻撃",
          command: "↙ or ↓+C",
        },
        {
          name: "足払い",
          command: "↘+C",
        },
        {
          name: "防御崩し",
          command: "近距離で→+CD or ←+CD",
          skills: [
            {
              name: "崩し斬り",
              command: "斬",
            },
          ],
        },
        {
          name: "不意打ち",
          command: "BC",
        },
        {
          name: "小追い打ち",
          command: "与ダウン時↘+BC",
        },
        {
          name: "大追い打ち",
          command: "与ダウン時↑+BC",
        },
        {
          name: "踏み込み",
          command: "→→",
        },
        {
          name: "引き込み",
          command: "←←",
        },
        {
          name: "下段避け",
          command: "←+D",
        },
        {
          name: "跳び込み",
          command: "→+D",
        },
        {
          name: "前転",
          command: "↘+D",
        },
        {
          name: "後転",
          command: "↙+D",
        },
        {
          name: "伏せ",
          command: "↓+D",
        },
        {
          name: "移動起き上がり",
          command: "被ダウン時← or →",
        },
        {
          name: "クイック起き上がり",
          command: "被ダウン時↑",
        },
        {
          name: "弾き",
          command: "武器あり時↓↙←→+D",
        },
        {
          name: "真剣白羽取り",
          command: "素手時↓↙←→+D",
        },
        {
          name: "武器捨て挑発",
          command: "スタート x 3回",
        },
        {
          name: "自決",
          command: "←→↘↓+スタート",
        },
        {
          name: "武器飛ばし技",
          command: "怒ゲージ最大時に↓↘→+CD",
        },
        {
          name: "怒り爆発",
          command: "ABC",
          skills: [
            {
              name: "絶命奥義",
              command: "勝負が決まるラウンド・相手が体力青の時↓↙←+CD",
            },
          ],
        },
        {
          name: "無の境地",
          command: "体力青でBCD",
          skills: [
            {
              name: "一閃",
              command: "BCD",
            },
          ],
        },
      ],
    },
  ],
  sources: [
    {
      title: "参考資料",
      links: [
        {
          name: "サムライスピリッツ ネオジオコレクション 対戦攻略ガイド",
        },
        {
          name: "サムライスピリッツ零SPECIAL 初心者向け攻略ページ | 零SP | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/zerosp/index.htm",
        },
        {
          name: "サムライスピリッツ零SPECIAL - ぽんしゃぶ弐号",
          href: "https://www5b.biglobe.ne.jp/~hitokiri/zerosp/zerosp_index.htm",
        },
        {
          name: "サムライスピリッツ零スペシャル | OcchiGames",
          href: "https://occhi-games.com/category/ss6/",
        },
      ],
    },
    {
      title: "検証環境",
      links: [
        {
          name: "サムライスピリッツ零スペシャル / Steam",
        },
        {
          name: "サムライスピリッツ ネオジオコレクション / Steam",
        },
      ],
    },
  ],
}
