import type { DataItem } from "../../../types"

export const senKim: DataItem = {
  id: "sen-kim",
  name: "キム・ヘリョン",
  groups: [
    {
      title: "固有技・必殺技",
      skills: [
        {
          name: "横薙ぎ",
          command: "A",
          notes: ["上段"],
        },
        {
          name: "薙ぎ返し",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "青龍閃",
          command: "A・A・A",
          notes: ["上・上・上"],
        },
        {
          name: "青龍打",
          command: "A・A・B",
          notes: ["上・上・中"],
        },
        {
          name: "朧三連",
          command: "A・B・A",
          notes: ["上・中・上"],
        },
        {
          name: "朧衝下",
          command: "A・B・↓+B",
          notes: ["上・中・下"],
        },
        {
          name: "朱雀双翼",
          command: "←+A・A・A",
          notes: ["上・上・上"],
        },
        {
          name: "後閃",
          command: "←←+A",
          notes: ["上段"],
        },
        {
          name: "虚駁鶴戈",
          command: "↘+A・A・B",
          notes: ["中・中・下"],
        },
        {
          name: "虚駁転踵脚",
          command: "↘+A・A・C",
          notes: ["中・中・中"],
        },
        {
          name: "烈下",
          command: "↙+A",
          notes: ["下段"],
        },
        {
          name: "縦薙ぎ",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "白虎爪",
          command: "B・B",
          notes: ["中・上"],
        },
        {
          name: "白虎襲",
          command: "B・↓+B",
          notes: ["中・下"],
        },
        {
          name: "四獣撃",
          command: "←+B・B・B・AB",
          notes: ["中・中・中・上"],
        },
        {
          name: "無二双閃",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "玄武甲槍",
          command: "↙+B・B",
          notes: ["下・中"],
        },
        {
          name: "車輪脚",
          command: "↙+B・C",
          notes: ["下・下"],
        },
        {
          name: "玄武車輪脚",
          command: "↙+B・C・AB（ジャスト入力）",
          notes: ["下・下・上"],
        },
        {
          name: "裏突",
          command: "→→+B",
          notes: ["中段"],
          skills: [
            {
              name: "槍斧落投",
              command: "ヒット時にAB",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "降一槍",
          command: "←→+B",
          notes: ["中段"],
        },
        {
          name: "廻上",
          command: "←←+B",
          notes: ["中段"],
        },
        {
          name: "飛龍咆様",
          command: "↓↙←+B・A",
          notes: ["中・上"],
        },
        {
          name: "上段蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "下段蹴り",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "集円脚",
          command: "←+C・C",
          notes: ["中・下"],
        },
        {
          name: "集打針",
          command: "←+C・AB",
          notes: ["中・上"],
        },
        {
          name: "集打真",
          command: "←+C・AB（ジャスト入力）",
          notes: ["中・上"],
        },
        {
          name: "天翔槍撃",
          command: "↘+C・B",
          notes: ["中・中"],
        },
        {
          name: "足払い",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "飛燕斬",
          command: "↓↘→+C",
          notes: ["中段"],
        },
        {
          name: "半月斬",
          command: "↓↙←+C",
          notes: ["中段"],
        },
        {
          name: "虎脚",
          command: "↓↘→",
          notes: ["特殊動作"],
          skills: [
            {
              name: "螺旋槍",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "天衝斬",
              command: "B",
              notes: ["中段"],
            },
          ],
        },
        {
          name: "狂獣法・麋",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "狂獣法・狼",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "狂獣法・鳳",
          command: "立ち途中にC",
          notes: ["中段"],
          skills: [
            {
              name: "鳳凰脚",
              command: "ヒット時に←↙↓↘→+C",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "雀羅",
          command: "軸移動中にA",
          notes: ["上段"],
        },
        {
          name: "哭虎脚",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "輪光撃",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "鷹爪裂斬",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "鳳凰斬",
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
          name: "秘天・鳳凰脚",
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
          name: "キム・ヘリョン - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/44.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 キム・ヘリョン 技一覧 - YouTube",
          href: "https://youtu.be/Zm0Af_qOHWs",
        },
      ],
    },
  ],
}
