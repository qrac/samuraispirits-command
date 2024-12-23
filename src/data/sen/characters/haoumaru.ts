import type { DataItem } from "../../../types"

export const senHaoumaru: DataItem = {
  id: "sen-haoumaru",
  name: "覇王丸",
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
          name: "横斬り地薙ぎ",
          command: "A・↓+A",
          notes: ["上・下"],
        },
        {
          name: "旋風破",
          command: "←+A",
          notes: ["上段"],
        },
        {
          name: "旋風破〜凪足",
          command: "←+A・↘",
          notes: ["上・特殊動作"],
        },
        {
          name: "旋嵐陣",
          command: "←+A・A",
          notes: ["上・下"],
        },
        {
          name: "旋嵐双破",
          command: "←+A・B",
          notes: ["上・中"],
        },
        {
          name: "鬼面割り",
          command: "↘+A・B",
          notes: ["中・中"],
        },
        {
          name: "鬼倒蹴",
          command: "↘+A・C",
          notes: ["中・中"],
        },
        {
          name: "旋割り",
          command: "↙+A・B",
          notes: ["下・中"],
        },
        {
          name: "獄門通し",
          command: "←→+A・A・B",
          notes: ["中・中・中"],
        },
        {
          name: "獄閂斬破",
          command: "←→+A・A・↘+B",
          notes: ["中・中・中"],
        },
        {
          name: "縦斬り",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "飛燕送り",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "飛燕騙し",
          command: "B・B・←",
          notes: ["中・特殊動作"],
        },
        {
          name: "縦斬り追い蹴り",
          command: "B・C",
          notes: ["中・上"],
        },
        {
          name: "奈落送り",
          command: "←+B・A・C",
          notes: ["中・下・中"],
        },
        {
          name: "地獄送り",
          command: "←+B・B・AB",
          notes: ["中・上・上"],
        },
        {
          name: "地天刀斬",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "柄頭落とし",
          command: "↙+B",
          notes: ["上段"],
        },
        {
          name: "柄頭落とし〜凪足",
          command: "↙+B・↘",
          notes: ["上・特殊動作"],
        },
        {
          name: "鬼魂封じ",
          command: "↙+B・A・B",
          notes: ["上・中・中"],
        },
        {
          name: "覇王突き",
          command: "→→+B",
          notes: ["中段"],
          skills: [
            {
              name: "覇王地獄潰",
              command: "カウンターヒット時にAB",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "烈震斬",
          command: "↓↙←+B",
          notes: ["中段"],
        },
        {
          name: "頭側蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "蹴押し",
          command: "←+C",
          notes: ["中段"],
        },
        {
          name: "臍砕き",
          command: "↘+C",
          notes: ["中段"],
        },
        {
          name: "脛打ち",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "払い蹴り",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "凪足",
          command: "→N↓↘",
          notes: ["特殊動作"],
          skills: [
            {
              name: "旋風裂斬・壱式",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "旋風裂斬・弐式",
              command: "遅めにA",
              notes: ["上段"],
            },
            {
              name: "弧月斬",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "嵐封脚",
              command: "↘+C",
              notes: ["下段"],
            },
            {
              name: "嵐覇・空裂斬",
              command: "↘+C・A",
              notes: ["下・中"],
            },
            {
              name: "嵐覇・地烈閃",
              command: "↘+C・B",
              notes: ["下・下"],
            },
          ],
        },
        {
          name: "旋風裂斬・零式",
          command: "→N↓↘+A（最速入力）",
          notes: ["上段"],
        },
        {
          name: "弧月斬・零式",
          command: "→N↓↘+B（最速入力）",
          notes: ["中・中"],
        },
        {
          name: "天崩斬",
          command: "立ち途中にB",
          notes: ["下段"],
        },
        {
          name: "秘儀・地烈閃",
          command: "立ち途中に↓+B",
          notes: ["中段"],
        },
        {
          name: "髄弾き",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "斬巻閃",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "斬鉄閃",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "斬鋼閃",
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
          name: "天覇封神斬",
          command: "↓↘→+BC",
          notes: ["中・打撃投げ"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "覇王丸 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/15.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 覇王丸 技一覧 - YouTube",
          href: "https://youtu.be/hDTJgARc4q4",
        },
      ],
    },
  ],
}
