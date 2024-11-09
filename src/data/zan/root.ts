import type { DataItem } from "../../types"

export const zanRoot: DataItem = {
  id: "zan-root",
  name: "基本操作（斬サム）",
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
          name: "上段蹴り",
          command: "N or ←+D",
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
          command: "近距離で→+C or ←+C",
        },
        {
          name: "見切り",
          command: "AB",
        },
        {
          name: "回り込み",
          command: "近距離でAB",
        },
        {
          name: "不意打ち",
          command: "BC",
        },
        {
          name: "怒ゲージ溜め",
          command: "ABC継続押し",
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
          name: "移動起き上がり",
          command: "被ダウン時← or →",
        },
        {
          name: "クイック起き上がり",
          command: "被ダウン時↑",
        },
        {
          name: "当て身",
          command: "武器あり時←↙↓↘→",
        },
        {
          name: "真剣白羽取り",
          command: "素手時←↙↓↘→",
        },
        {
          name: "武器飛ばし技",
          command: "怒ゲージ最大時にキャラ別コマンド",
        },
      ],
    },
    {
      title: "剣客",
      skills: [
        {
          name: "オートガード",
          command: "自動発動",
          notes: ["1試合につき5回まで"],
        },
        {
          name: "怒ゲージ常時最大",
          command: "体力が一定以下",
        },
      ],
    },
    {
      title: "剣豪",
      skills: [
        {
          name: "怒ゲージ常時最大",
          command: "体力が一定以下",
        },
      ],
    },
    {
      title: "剣聖",
      skills: [
        {
          name: "ガード不能",
          command: "常時",
        },
        {
          name: "怒ゲージ常時最大",
          command: "常時",
        },
      ],
    },
  ],
}
