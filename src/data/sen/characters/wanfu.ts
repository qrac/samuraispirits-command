import type { DataItem } from "../../../types"

export const senWanfu: DataItem = {
  id: "sen-wanfu",
  name: "王虎",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "単殴打",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "双殴打",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "烈壊怒轟払斬",
          command: "←+A",
          notes: ["上段"],
        },
        {
          name: "王虎的怒乱舞",
          command: "怒り爆発可能な状態で←+A・（A・B・C・ABC）",
          notes: ["上・（中・上・下・中・中）"],
        },
        {
          name: "王虎大掌打",
          command: "↘+A・B・A",
          notes: ["中・中・上"],
        },
        {
          name: "王虎砕脚拳",
          command: "↘+A・B・↓+A",
          notes: ["中・中・下"],
        },
        {
          name: "王虎回払斬",
          command: "↙+A",
          notes: ["下段"],
        },
        {
          name: "気功大回殺",
          command: "↓↘→+A・A・A",
          notes: ["上・上・上"],
        },
        {
          name: "縦斬",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "王虎裂滅打",
          command: "B・A・B",
          notes: ["中・上・中"],
        },
        {
          name: "虎牙撃滅斬",
          command: "←+B・AB",
          notes: ["上・上"],
        },
        {
          name: "真・虎牙撃滅斬",
          command: "←+B・AB（ジャスト入力）",
          notes: ["上・上"],
        },
        {
          name: "気功大昇拳",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "怒轟撃滅突",
          command: "↙+B",
          notes: ["下段"],
        },
        {
          name: "王虎頭撃",
          command: "→→+B",
          notes: ["中段"],
          skills: [
            {
              name: "王虎的剛拳乱舞",
              command: "ヒット時にAB",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "王虎大昇天撃・一",
          command: "←→+B・B・B・B",
          notes: ["中・中・中・中"],
        },
        {
          name: "王虎大昇天撃・二",
          command: "←→+B・B・B・A",
          notes: ["中・中・中・下"],
        },
        {
          name: "気功旋風斬",
          command: "↓↘→+B",
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
          name: "足払い",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "王虎的三連回転尻",
          command: "↘+C・C・C",
          notes: ["中・中・中"],
          skills: [
            {
              name: "気功脛破掌",
              command: "1〜2段目中にA",
              notes: ["下段"],
            },
            {
              name: "気功大回殺",
              command: "1〜2段目中にAB・A・A",
              notes: ["上・上・上"],
            },
            {
              name: "王虎的大回転尻",
              command: "1〜2段目中にBC",
              notes: ["中段"],
            },
          ],
        },
        {
          name: "王虎的大回転尻",
          command: "→→+C",
          notes: ["中段"],
        },
        {
          name: "虎牙円回斬",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "虎牙連重打",
          command: "立ち途中にB・A",
          notes: ["中・上"],
        },
        {
          name: "壁砕掌",
          command: "軸移動中にA",
          notes: ["上段"],
        },
        {
          name: "虎潰落",
          command: "軸移動中にB・BC",
          notes: ["下・中"],
        },
        {
          name: "王虎的鉄山靠",
          command: "軸移動中にC",
          notes: ["中段"],
        },
        {
          name: "王虎的開門掌",
          command: "軸移動中にC・AB",
          notes: ["中・上"],
        },
        {
          name: "真・王虎的開門掌",
          command: "軸移動中にC・AB（ジャスト入力）",
          notes: ["中・上"],
        },
        {
          name: "虎牙重撃砕",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "気功大一刀",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "王虎的斬撃滅砕",
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
          name: "大旋風斬",
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
          name: "王虎 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/41.html",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 王虎 技一覧 - YouTube",
          href: "https://youtu.be/xxxx",
        },
      ],
    },*/
  ],
}
