import type { DataItem } from "../../../../types"

export const zanHanzoShura: DataItem = {
  id: "zan-hanzo-shura",
  name: "服部半蔵（修羅）",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "忍法 爆炎龍・改",
          command: "↓↙←+斬",
        },
        {
          name: "忍法 烈風手裏剣",
          command: "空中で↓↘→+斬",
        },
        {
          name: "忍法 うつせみ天舞",
          command: "→↘↓↙←+BCD",
        },
        {
          name: "忍法 うつせみ地斬",
          command: "←↙↓↘→+BCD",
        },
        {
          name: "忍法 身代わりの術＝仏",
          command: "被ダメージ中AC",
        },
        {
          name: "忍法 身代わりの術＝鬼",
          command: "被ダメージ中BD",
        },
        {
          name: "忍法 もず落とし",
          command: "近距離で→↓↘+CD",
        },
        {
          name: "忍法 もず落とし -颯-",
          command: "踏み込み中近距離で→↓↘+CD",
        },
        {
          name: "忍法 影",
          command: "↓↓+A",
        },
        {
          name: "忍法 影分身",
          command: "→←↙↓↘→+A or B",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗ or → or ↘",
        },
        {
          name: "空転撃",
          command: "空中近距離で↙ or ↓ or ↘+C",
        },
      ],
    },
    {
      title: "武器飛ばし技",
      titleColor: 2,
      skills: [
        {
          name: "封じ手 微塵隠れ",
          command: "↓↓↓+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "服部半蔵 - キャラクターとコマンドリスト | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/command.htm#han",
        },
        {
          name: "服部半蔵 - ド定番連続技ガイド | 斬サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "https://amatoge.static.jp/meikyo/zan/combo.htm#han",
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
}
