import type { DataItem } from "../../types"

export const kenRoot: DataItem = {
  id: "ken-root",
  name: "基本操作（剣サム）",
  layout: "slim",
  groups: [
    {
      title: "共通",
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
          command: "C",
        },
        {
          name: "蹴り",
          command: "D",
        },
        {
          name: "特殊動作",
          command: "E",
        },
        {
          name: "上段蹴り",
          command: "レバーニュートラル or ←+D",
        },
        {
          name: "下段狙い蹴り",
          command: "→+D",
        },
        {
          name: "牽制攻撃",
          command: "↙ or ↓+D",
        },
        {
          name: "足払い",
          command: "↘+D",
        },
        {
          name: "防御崩し",
          command: "近距離で→+BC同時押し or ←+BC同時押し",
        },
        {
          name: "追い打ち",
          command: "与ダウン時↘+C",
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
          name: "近距離受け身",
          command: "被ダウン時E",
        },
        {
          name: "遠距離受け身",
          command: "被ダウン時←+E",
        },
        {
          name: "弾き返し",
          command: "武器あり時↓↘→+E",
        },
        {
          name: "真剣白羽取り",
          command: "素手時↓↘→+E",
        },
        {
          name: "挑発",
          command: "←+スタート",
        },
        {
          name: "武器捨て挑発",
          command: "→+スタート",
        },
        {
          name: "武器拾い",
          command: "武器に重なりA",
        },
        {
          name: "アイテム使用",
          command: "アイテムに重なりAD同時押し",
        },
      ],
    },
    {
      title: "怒スピリッツ",
      skills: [
        {
          name: "怒ゲージ増加",
          command: "被ダメージ",
        },
        {
          name: "超斬り",
          command: "AB同時押し",
        },
      ],
    },
    {
      title: "真スピリッツ",
      skills: [
        {
          name: "真ゲージ増加",
          command: "被ダメージ",
        },
        {
          name: "下段避け",
          command: "← or →+E",
        },
        {
          name: "前転",
          command: "↘+E",
        },
        {
          name: "後転",
          command: "↙+E",
        },
        {
          name: "伏せ",
          command: "↓+E",
        },
        {
          name: "ぬいぐるみ変化",
          command: "キャラ別コマンド",
        },
        {
          name: "秘奥義",
          command: "キャラ別コマンド ※1試合につき1回のみ使用可能",
        },
        {
          name: "怒り頂点ポーズ",
          command: "ゲージ最大化後の行動可能時に自動発動",
        },
        {
          name: "武器破壊技",
          command:
            "ゲージ最大時に↓↘→+AB同時押し（ガルフォード・風間蒼月・妖怪腐れ外道は複数あり）",
        },
      ],
    },
    {
      title: "斬スピリッツ",
      skills: [
        {
          name: "斬ゲージ増加",
          command: "被ダメージ",
        },
        {
          name: "斬ゲージ溜め",
          command: "AB同時押し継続",
        },
        {
          name: "斬ゲージ常時最大",
          command: "体力が色違い以下",
        },
        {
          name: "避け",
          command: "E",
        },
        {
          name: "回り込み",
          command: "近距離で→+E",
        },
        {
          name: "空中ガード",
          command: "空中でE",
        },
        {
          name: "武器飛ばし技",
          command:
            "ゲージ最大時に↓↘→+AB同時押し（ガルフォード・風間蒼月・妖怪腐れ外道は複数あり）",
        },
      ],
    },
    {
      title: "天スピリッツ",
      skills: [
        {
          name: "天ゲージ増加",
          command: "被ダメージ",
        },
        {
          name: "避け",
          command: "E",
        },
        {
          name: "回り込み",
          command: "近距離で→+E",
        },
        {
          name: "連斬",
          command: "AB同時押し",
          skills: [
            {
              name: "ルート①",
              command: "A,A,A",
            },
            {
              name: "ルート②",
              command: "B,B,C",
            },
            {
              name: "ルート③",
              command: "C,C,D",
            },
            {
              name: "ルート④",
              command: "A,A,B,B,C,C,C",
            },
          ],
        },
        {
          name: "武器飛ばし技",
          command:
            "ゲージ最大時に↓↘→+AB同時押し（ガルフォード・風間蒼月・妖怪腐れ外道は複数あり）",
        },
        {
          name: "怒り爆発",
          command: "ABC同時押し",
          skills: [
            {
              name: "一閃",
              command: "ABC同時押し",
            },
          ],
        },
      ],
    },
    {
      title: "零スピリッツ",
      skills: [
        {
          name: "零ゲージ増加",
          command: "被ダメージ",
        },
        {
          name: "瞑想",
          command: "AB同時押し継続（零ゲージ消費）",
        },
        {
          name: "跳び込み",
          command: "→+E",
        },
        {
          name: "下段避け",
          command: "←+E",
        },
        {
          name: "前転",
          command: "↘+E",
        },
        {
          name: "後転",
          command: "↙+E",
        },
        {
          name: "伏せ",
          command: "↓+E",
        },
        {
          name: "武器飛ばし技",
          command:
            "ゲージ最大時に↓↘→+AB同時押し（ガルフォード・風間蒼月・妖怪腐れ外道は複数あり）",
        },
        {
          name: "怒り爆発",
          command: "ABC同時押し",
        },
        {
          name: "無の境地",
          command: "体力青でDE同時押し",
          skills: [
            {
              name: "一閃",
              command: "ABC同時押し",
            },
          ],
        },
      ],
    },
    {
      title: "剣スピリッツ",
      skills: [
        {
          name: "剣ゲージ増加",
          command: "攻撃を当てる",
        },
        {
          name: "ミキリスライド・スライド",
          command: "E",
        },
        {
          name: "ミキリスライド・下段避け",
          command: "← or →+E",
        },
        {
          name: "ミキリスライド・伏せ",
          command: "↓+E",
        },
        {
          name: "完全ガード",
          command: "AB同時押し継続（剣ゲージ消費）",
        },
        {
          name: "秘奥義",
          command: "体力緑で↓↘→+BC同時押し",
        },
        {
          name: "武器飛ばし技",
          command:
            "ゲージ最大時に↓↘→+AB同時押し（ガルフォード・風間蒼月・妖怪腐れ外道は複数あり）",
        },
      ],
    },
  ],
}
