import type { DataItem } from "../../../types"

export const senGenjuro: DataItem = {
  id: "sen-genjuro",
  name: "牙神幻十郎",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "横斬り",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "薙ぎ返し",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "羅将門",
          command: "A・C",
          notes: ["上・下"],
        },
        {
          name: "旋覇 昏刈",
          command: "←+A・B・A",
          notes: ["上・中・中"],
        },
        {
          name: "旋覇 昏止",
          command: "←+A・B・C",
          notes: ["上・中・下"],
        },
        {
          name: "旋覇 掌突",
          command: "←+A・C",
          notes: ["上・上"],
        },
        {
          name: "旋覇 掌滅",
          command: "←+A・C（ジャスト入力）",
          notes: ["上・上"],
        },
        {
          name: "鬼斬天剋",
          command: "↘+A・B",
          notes: ["上・中"],
        },
        {
          name: "鬼斬地掃",
          command: "↘+A・C",
          notes: ["上・中"],
        },
        {
          name: "脛払い",
          command: "↙+A",
          notes: ["下段"],
        },
        {
          name: "役払い",
          command: "↙+A・AB（ジャスト入力）",
          notes: ["下・中"],
        },
        {
          name: "鬼刃・光翼刃",
          command: "←→+A・A・B",
          notes: ["中・下・中"],
        },
        {
          name: "鬼刃・倒蹴",
          command: "←→+A・A・C",
          notes: ["中・下・上"],
        },
        {
          name: "影札刃",
          command: "→↓↘+A",
          notes: ["上段"],
          skills: [
            {
              name: "五光斬",
              command: "ヒット時にAB",
              notes: ["上・打撃投げ / 相手が空中でも可能"],
            },
          ],
        },
        {
          name: "縦斬り",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "縦連斬",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "天誅殺",
          command: "←+B・B・B",
          notes: ["中・中・中"],
        },
        {
          name: "鬼誅撃",
          command: "←+B・C・BC",
          notes: ["中・下・中"],
        },
        {
          name: "飛燕閃",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "三連殺",
          command: "↙+B・A・AB",
          notes: ["中・中・中"],
        },
        {
          name: "三連殺・三光",
          command: "↙+B・A・AB（ジャスト入力）",
          notes: ["中・中・中"],
        },
        {
          name: "鬼貫き",
          command: "→→+B",
          notes: ["中段"],
          skills: [
            {
              name: "百鬼殺",
              command: "ヒット時にAB",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "極門",
          command: "←→+B",
          notes: ["上段"],
        },
        {
          name: "桐覇 光翼刃",
          command: "→↓↘+B",
          notes: ["中段"],
        },
        {
          name: "上段蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "中段蹴り",
          command: "←+C",
          notes: ["中段"],
        },
        {
          name: "下段蹴り",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "黄泉落し",
          command: "↘+C・C・C",
          notes: ["中・中・中"],
        },
        {
          name: "足払い",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "鬼車",
          command: "→↓↘+C・C",
          notes: ["下・中"],
        },
        {
          name: "飛燕刃",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "髄弾き",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "夜叉無音殺",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "修羅狂震斬",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "餓鬼滅殺",
          command: "ABCR",
          notes: ["G不能"],
        },
      ],
    },
    {
      title: "怒り爆発中専用技",
      titleColor: 2,
      skills: [
        {
          name: "三連桜",
          command: "↓↘→+BC",
          notes: ["中・中・中"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "牙神幻十郎 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/17.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 牙神幻十郎 技一覧 - YouTube",
          href: "https://youtu.be/Nu8iW52uchI",
        },
      ],
    },
  ],
}
