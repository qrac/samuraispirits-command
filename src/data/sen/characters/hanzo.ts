import type { DataItem } from "../../../types"

export const senHanzo: DataItem = {
  id: "sen-hanzo",
  name: "服部半蔵",
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
          name: "闇裂き",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "影刈り",
          command: "←+A・A",
          notes: ["上・上"],
        },
        {
          name: "影出・モズ落とし",
          command: "←+A・CR",
          notes: ["上・投げ"],
        },
        {
          name: "騎馬崩し",
          command: "↘+A・C・C",
          notes: ["上・下・下"],
        },
        {
          name: "騎馬滅殺",
          command: "↘+A・C・AB",
          notes: ["上・下・中"],
        },
        {
          name: "土蛇・蜘蛛足",
          command: "↙+A・↘",
          notes: ["下・特殊動作"],
        },
        {
          name: "土蛇撃ち",
          command: "↙+A・A",
          notes: ["下・上"],
        },
        {
          name: "土蛇・狢返り",
          command: "↙+A・R",
          notes: ["下・特殊動作"],
        },
        {
          name: "忍法・烈風手裏剣",
          command: "↓↙←+A",
          notes: ["中段"],
        },
        {
          name: "縦斬り",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "縦連刃",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "縦刃地旋脚",
          command: "B・C",
          notes: ["中・下"],
        },
        {
          name: "連ね槌打",
          command: "→+B・B・AB",
          notes: ["上・中・中"],
        },
        {
          name: "槌打・蜘蛛足",
          command: "→+B・B・AB・↘",
          notes: ["上・中・特殊動作"],
        },
        {
          name: "天露払い",
          command: "←+B",
          notes: ["中段"],
        },
        {
          name: "鬼面通し",
          command: "↘+B",
          notes: ["上段"],
        },
        {
          name: "逆裂き",
          command: "↙+B",
          notes: ["中段"],
        },
        {
          name: "気門連ね撃ち",
          command: "→→+B・B",
          notes: ["上・中"],
        },
        {
          name: "飛龍閃",
          command: "↓↙←+B（←+Bで溜め可）",
          notes: ["中段"],
          skills: [
            {
              name: "爆龍閃",
              command: "最大溜めで自動発動",
              notes: ["G不能"],
            },
            {
              name: "キャンセル",
              command: "溜め中にN",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "空突脚",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "二逆月",
          command: "→+C・C",
          notes: ["中・中"],
        },
        {
          name: "二逆月～蜘蛛足",
          command: "→+C・C・↘",
          notes: ["中・中・特殊動作"],
        },
        {
          name: "三間逆月",
          command: "→+C・C・C",
          notes: ["中・中・中"],
        },
        {
          name: "三貞流れ",
          command: "→+C・↓+C・C",
          notes: ["中・下・中"],
        },
        {
          name: "踝旋風",
          command: "←+C",
          notes: ["上段"],
        },
        {
          name: "影太刀",
          command: "↓+C・B",
          notes: ["下・中"],
        },
        {
          name: "鶴足飛倒",
          command: "↓+C・↓+C・C",
          notes: ["下・下・上"],
        },
        {
          name: "鶴足流舞",
          command: "↓+C・↓+C・↓+C",
          notes: ["下・下・中"],
        },
        {
          name: "伊賀連蹴",
          command: "↘+C・C",
          notes: ["中・上"],
        },
        {
          name: "伊賀連蹴～蜘蛛足",
          command: "↘+C・C・↘",
          notes: ["中・上・特殊動作"],
        },
        {
          name: "伊賀連蹴撃",
          command: "↘+C・C・B",
          notes: ["中・上・中"],
        },
        {
          name: "伊賀参連蹴",
          command: "↘+C・C・C",
          notes: ["中・上・上"],
        },
        {
          name: "伊賀連蹴倒",
          command: "↘+C・C・↓+C",
          notes: ["中・上・下"],
        },
        {
          name: "地旋脚",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "飯綱落とし",
          command: "→→+C",
          notes: ["中段"],
        },
        {
          name: "飯綱落とし～蜘蛛足",
          command: "→→+C・↘",
          notes: ["中・特殊動作"],
        },
        {
          name: "飯綱返し",
          command: "→→+C・C",
          notes: ["中・中"],
        },
        {
          name: "車輪烈脚",
          command: "↓↙←+C・C・C",
          notes: ["上・上・上"],
        },
        {
          name: "車輪地掃脚",
          command: "↓↙←+C・C・↓+C",
          notes: ["上・上・下"],
        },
        {
          name: "モズ落とし",
          command: "CR",
          notes: ["投げ"],
        },
        {
          name: "モズ落とし 颯",
          command: "走り中にCR",
          notes: ["投げ"],
        },
        {
          name: "空中モズ落とし",
          command: "↓↙←→+R",
          notes: ["投げ（空中の相手のみ）"],
        },
        {
          name: "狢返り",
          command: "←←+R",
          notes: ["特殊動作"],
        },
        {
          name: "蜘蛛足",
          command: "↓↘",
          notes: ["特殊動作"],
          skills: [
            {
              name: "忍法朧うつし・影討",
              command: "A",
              notes: ["瞬間移動（相手背後）"],
            },
            {
              name: "忍法朧うつし・猿舞",
              command: "A・↑",
              notes: ["瞬間移動（空中）"],
            },
            {
              name: "忍法朧うつし・静音",
              command: "A・←",
              notes: ["瞬間移動（後退）"],
            },
            {
              name: "臓貫",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "逆月",
              command: "C",
              notes: ["上段"],
            },
            {
              name: "モズ落とし 改",
              command: "↘+C",
              notes: ["投げ"],
            },
          ],
        },
        {
          name: "水月",
          command: "↓↘+B（ジャスト入力）",
          notes: ["中段"],
        },
        {
          name: "飛翔脚",
          command: "↓↘+C（ジャスト入力）",
          notes: ["中段"],
        },
        {
          name: "空首落し",
          command: "立ち途中にA",
          notes: ["上段"],
        },
        {
          name: "鴉羽・爆太刀",
          command: "立ち途中にB・B・BC",
          notes: ["中・上・中"],
        },
        {
          name: "鴉羽・蜘蛛足",
          command: "立ち途中にB・B・↘",
          notes: ["中・上・特殊動作"],
        },
        {
          name: "朧月",
          command: "立ち途中にC",
          notes: ["上段"],
        },
        {
          name: "残月",
          command: "軸移動中にA",
          notes: ["中段"],
        },
        {
          name: "忍法朧うつし・影討",
          command: "軸移動中にB",
          notes: ["瞬間移動（相手背後）"],
        },
        {
          name: "忍法朧うつし・猿舞",
          command: "軸移動中にB・↑",
          notes: ["瞬間移動（空中）"],
        },
        {
          name: "忍法朧うつし・静音",
          command: "軸移動中にB・←",
          notes: ["瞬間移動（後退）"],
        },
        {
          name: "地掃脚",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "円月閃",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "風車斬り",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "赤銅破り",
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
          name: "忍法・爆炎龍",
          command: "↓↘→+BC（溜め可）",
          notes: ["中段"],
          skills: [
            {
              name: "封じ手・爆炎龍",
              command: "最大溜めで自動発動",
              notes: ["G不能"],
            },
          ],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "服部半蔵 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/28.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 服部半蔵 技一覧 - YouTube",
          href: "https://youtu.be/2ZXompaXQsY",
        },
      ],
    },
  ],
}
