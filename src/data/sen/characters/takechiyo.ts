import type { DataItem } from "../../../types"

export const senTakechiyo: DataItem = {
  id: "sen-takechiyo",
  name: "猛千代",
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
          name: "返し斬り",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "三ツ斬り",
          command: "A・A・A",
          notes: ["上・上・上"],
        },
        {
          name: "乱獅子",
          command: "←+A・AB",
          notes: ["上・上"],
        },
        {
          name: "狂い獅子",
          command: "←+A・AB（ジャスト入力）",
          notes: ["上・上"],
        },
        {
          name: "蛇打ち",
          command: "↓+A",
          notes: ["下段"],
        },
        {
          name: "牛角割り",
          command: "↘+A",
          notes: ["中段"],
        },
        {
          name: "猛牛払い",
          command: "↙+A",
          notes: ["上段"],
        },
        {
          name: "縦斬り",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "狢狩り",
          command: "B・C",
          notes: ["中・中"],
        },
        {
          name: "狢地打ち",
          command: "B・↓+C",
          notes: ["中・下"],
        },
        {
          name: "鷹羽飛ばし",
          command: "→+B・AB",
          notes: ["中・上"],
        },
        {
          name: "払い落とし",
          command: "←+B",
          notes: ["中段"],
        },
        {
          name: "山鯨",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "猪突越え",
          command: "↙+B",
          notes: ["中段"],
        },
        {
          name: "双角突き",
          command: "→→+B・B",
          notes: ["中・上"],
        },
        {
          name: "双角破り",
          command: "→→+B・B（ジャスト入力）",
          notes: ["中・上"],
        },
        {
          name: "柄落とし",
          command: "←→+B",
          notes: ["中段"],
        },
        {
          name: "背甲",
          command: "←←+B",
          notes: ["中段"],
        },
        {
          name: "上段蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "中段蹴り",
          command: "→+C",
          notes: ["中段"],
        },
        {
          name: "下段蹴り",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "渦蹴り",
          command: "←+C",
          notes: ["中段"],
        },
        {
          name: "寸胴蹴り",
          command: "↘+C",
          notes: ["中段"],
        },
        {
          name: "熊手打ち",
          command: "↙+C・A",
          notes: ["下・上"],
        },
        {
          name: "罷返し",
          command: "↙+C・A・AB（ジャスト入力）",
          notes: ["下・上・上"],
        },
        {
          name: "熊足砕き",
          command: "↙+C・C",
          notes: ["下・下"],
        },
        {
          name: "猛進",
          command: "↓↘→",
          notes: ["特殊動作"],
          skills: [
            {
              name: "突貫撃",
              command: "A",
              notes: ["中段"],
            },
            {
              name: "昇天撃",
              command: "B",
              notes: ["中段"],
            },
          ],
        },
        {
          name: "誘い腰",
          command: "↓↙←",
          notes: ["特殊動作"],
          skills: [
            {
              name: "薮蛇突き",
              command: "A",
              notes: ["中段"],
            },
            {
              name: "狗打ち",
              command: "B",
              notes: ["中段"],
            },
          ],
        },
        {
          name: "荒牛落し",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "鷲爪砕き",
          command: "立ち途中にB・B",
          notes: ["中・中"],
        },
        {
          name: "獅子伐倒",
          command: "軸移動中にA",
          notes: ["上段"],
        },
        {
          name: "雉落し",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "刈り足",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "鬼討ち",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "竜落し",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "天驚撃",
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
          name: "通貫撃",
          command: "↓↘→+BC（溜め可）",
          notes: ["中段"],
        },
        {
          name: "全力通貫撃",
          command: "↓↘→+BC（最大溜めで自動発動）",
          notes: ["中段"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "猛千代 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/25.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 猛千代 技一覧 - YouTube",
          href: "https://youtu.be/Lpx_UIteNS8",
        },
      ],
    },
  ],
}
