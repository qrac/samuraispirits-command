import type { DataItem } from "../../../types"

export const senKazuki: DataItem = {
  id: "sen-kazuki",
  name: "風間火月",
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
          name: "早薙ぎ",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "下火打ち",
          command: "A・A・C",
          notes: ["上・上・下"],
        },
        {
          name: "剛火山",
          command: "A・A・AB",
          notes: ["上・上・中"],
        },
        {
          name: "地衝斬",
          command: "→+A・A",
          notes: ["上・下"],
        },
        {
          name: "飛火斬り",
          command: "←+A",
          notes: ["上段"],
        },
        {
          name: "赤牙・旋烈刃",
          command: "↘+A・A・A",
          notes: ["上・上・上"],
        },
        {
          name: "赤牙・爆炎掌",
          command: "↘+A・A・B",
          notes: ["上・上・中"],
        },
        {
          name: "赤牙・爆炎砲",
          command: "↘+A・A・B溜め",
          notes: ["上・上・中"],
          skills: [
            {
              name: "赤牙・爆炎豪砲",
              command: "最大溜めで自動発動",
              notes: ["G不能"],
            },
            {
              name: "解除",
              command: "溜め中に←←",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "赤牙・焦土刃",
          command: "↘+A・A・↓+A",
          notes: ["上・上・下"],
        },
        {
          name: "地烈・爆噴撃",
          command: "↙+A・B",
          notes: ["下・上"],
        },
        {
          name: "地烈・轟爆噴撃",
          command: "↙+A・B（ジャスト入力）",
          notes: ["下・上"],
        },
        {
          name: "炎閃華",
          command: "↓↘→+A",
          notes: ["上段"],
        },
        {
          name: "縦斬り",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "縦炎・灼火砲",
          command: "B・B・BC",
          notes: ["中・上・上"],
        },
        {
          name: "縦炎・轟灼火砲",
          command: "B・B・BC（ジャスト入力）",
          notes: ["中・上・上"],
        },
        {
          name: "熱風斬",
          command: "→+B・B",
          notes: ["上・中"],
        },
        {
          name: "熱月昇",
          command: "←+B",
          notes: ["中段"],
        },
        {
          name: "半陽刃",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "熱昇・地炎刃",
          command: "↙+B・A",
          notes: ["中・下"],
        },
        {
          name: "熱昇・灼火砲",
          command: "↙+B・BC",
          notes: ["中・上"],
        },
        {
          name: "熱昇・轟灼火砲",
          command: "↙+B・BC（ジャスト入力）",
          notes: ["中・上"],
        },
        {
          name: "四亡烈火",
          command: "→→+B・B・B・A",
          notes: ["中・中・上・上"],
        },
        {
          name: "奥義・爆炎掌",
          command: "←→+B",
          notes: ["中段"],
        },
        {
          name: "奥義・爆炎砲",
          command: "←→+B溜め",
          notes: ["中段"],
          skills: [
            {
              name: "奥義・爆炎豪砲",
              command: "最大溜めで自動発動",
              notes: ["G不能"],
            },
            {
              name: "解除",
              command: "溜め中に←←",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "剛熱破",
          command: "↓↘→+B",
          notes: ["上段"],
          skills: [
            {
              name: "怒髪炎",
              command: "怒爆発可能な状態でAB",
              notes: ["特殊動作"],
              skills: [
                {
                  name: "怒髪炎消波",
                  command: "→↘↓↙←+AB",
                  notes: ["G不能"],
                },
              ],
            },
          ],
        },
        {
          name: "落陽刃",
          command: "↓↙←+B",
          notes: ["中段"],
        },
        {
          name: "落陽・爆噴撃",
          command: "↓↙←+B・AB",
          notes: ["中・上"],
        },
        {
          name: "落陽・轟爆噴撃",
          command: "↓↙←+B・AB（ジャスト入力）",
          notes: ["中・上"],
        },
        {
          name: "落陽・降火撃",
          command: "↓↙←+B・BC",
          notes: ["中・中"],
        },
        {
          name: "落陽・爆ぜ足",
          command: "↓↙←+B・C",
          notes: ["中・下"],
        },
        {
          name: "蹴撃・突風の型",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "蹴撃・旋風の型",
          command: "←+C",
          notes: ["中段"],
        },
        {
          name: "蹴撃・飛沫の型",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "蹴撃・細波の型",
          command: "↘+C",
          notes: ["中段"],
        },
        {
          name: "蹴撃・鎌鼬の型",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "蹴撃・白波の型",
          command: "→→+C",
          notes: ["中段"],
        },
        {
          name: "降火・熱蹴",
          command: "←←+C・C",
          notes: ["中・上"],
        },
        {
          name: "降火・地撃",
          command: "←←+C・↓+C",
          notes: ["中・下"],
        },
        {
          name: "降火・爆炎掌",
          command: "←←+C・B",
          notes: ["中・中"],
        },
        {
          name: "降火・爆炎砲",
          command: "←←+C・B溜め",
          notes: ["中・中"],
          skills: [
            {
              name: "降火・爆炎豪砲",
              command: "最大溜めで自動発動",
              notes: ["G不能"],
            },
            {
              name: "解除",
              command: "溜め中に←←",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "熱波暴脚殺",
          command: "C・C・C・C",
          notes: ["上・上・上・中"],
        },
        {
          name: "六道烈火・不燃",
          command: "↓↘→+Bヒット時にB・BC",
          notes: ["下・中・中・打撃投げ"],
        },
        {
          name: "六道烈火",
          command: "↓↘→+Bヒット時にB・BC（ジャスト入力）",
          notes: ["下・中・中・打撃投げ"],
        },
        {
          name: "熱転輪",
          command: "↓↙←+C・C",
          notes: ["下・下"],
        },
        {
          name: "熱転・爆噴撃",
          command: "↓↙←+C・C・B",
          notes: ["下・下・上"],
        },
        {
          name: "熱転・轟爆噴撃",
          command: "↓↙←+C・C・B（ジャスト入力）",
          notes: ["下・下・上"],
        },
        {
          name: "大爆殺",
          command: "↓↘→+R",
          notes: ["投げ"],
        },
        {
          name: "炎切",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "炎登斬",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "捲脚",
          command: "立ち途中にC",
          notes: ["上段"],
        },
        {
          name: "火巻き",
          command: "軸移動中にA",
          notes: ["中段"],
        },
        {
          name: "爆熱刃",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "無双焔",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "剛炎燃焼拳",
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
          name: "炎邪覚醒",
          command: "↓↘→+BC",
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
          name: "風間火月 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/30.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 風間火月 技一覧 - YouTube",
          href: "https://youtu.be/5VGoX7PZ-IE",
        },
      ],
    },
  ],
}
