import type { DataItem } from "../../../types"

export const senJinbei: DataItem = {
  id: "sen-jinbei",
  name: "菅又刃兵衛",
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
          name: "槍返し",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "薙ぎ上げ",
          command: "A・A・B",
          notes: ["上・上・中"],
        },
        {
          name: "脛崩し",
          command: "A・A・↓+B",
          notes: ["上・上・下"],
        },
        {
          name: "輪体脚",
          command: "A・C",
          notes: ["上・下"],
        },
        {
          name: "地裂連突",
          command: "→+A・B・B・B",
          notes: ["上・下・下・下"],
        },
        {
          name: "復刃舞踊",
          command: "←+A・A・A",
          notes: ["上・上・上"],
        },
        {
          name: "復刃牙踊",
          command: "←+A・A・B",
          notes: ["上・上・中"],
        },
        {
          name: "面砕連打",
          command: "↘+A・B・B",
          notes: ["中・上・上"],
        },
        {
          name: "回輪斬",
          command: "屈中に↘+A",
          notes: ["中段"],
        },
        {
          name: "双頭二切",
          command: "↙+A・A・A",
          notes: ["下・上・上"],
        },
        {
          name: "双頭切牙",
          command: "↙+A・A・B",
          notes: ["下・上・下"],
        },
        {
          name: "龍尾返し",
          command: "←←+A",
          notes: ["上段"],
        },
        {
          name: "縦薙ぎ",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "天送槍",
          command: "B・B・B",
          notes: ["中・中・中"],
        },
        {
          name: "天落槍",
          command: "B・B・↓+B",
          notes: ["中・中・下"],
        },
        {
          name: "飛び空兜",
          command: "→+B",
          notes: ["中段"],
        },
        {
          name: "兜割り",
          command: "←+B",
          notes: ["上段"],
        },
        {
          name: "天破槍斬",
          command: "↓+B・B",
          notes: ["中・中"],
        },
        {
          name: "天破槍牙",
          command: "↓+B・↓+B",
          notes: ["中・下"],
        },
        {
          name: "槍尾打",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "瞬刃三撃",
          command: "↙+B・B・B",
          notes: ["上・上・上"],
        },
        {
          name: "瞬刃連撃",
          command: "↙+B・B・↓+B",
          notes: ["上・上・下"],
        },
        {
          name: "一鉄",
          command: "→→+B",
          notes: ["上段"],
        },
        {
          name: "鳶櫓",
          command: "←←+B・B・A",
          notes: ["中・中・上"],
        },
        {
          name: "櫓落とし",
          command: "←←+B・B・AB（溜め可）",
          notes: ["中・中・中"],
          skills: [
            {
              name: "解除",
              command: "←←",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "櫓壊し",
          command: "←←+B・B・AB（最大溜めで自動発動）",
          notes: ["中・中・中"],
        },
        {
          name: "牙群集中突",
          command: "↓↘→+B・B・B・B・B",
          notes: ["中・中・中・中・中"],
        },
        {
          name: "牙群中下突",
          command: "↓↘→+B・B・B・B・↓+B",
          notes: ["中・中・中・中・下"],
        },
        {
          name: "誉",
          command: "↓↙←+B（溜め可）",
          notes: ["中段"],
          skills: [
            {
              name: "解除",
              command: "←←",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "無上 誉",
          command: "↓↙←+B（最大溜めで自動発動）",
          notes: ["中段"],
        },
        {
          name: "上段蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "中段蹴り",
          command: "↘+C",
          notes: ["中段"],
        },
        {
          name: "下段蹴り",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "踏破瞬刃",
          command: "↓+C・A",
          notes: ["下・上"],
        },
        {
          name: "踏破昇刃",
          command: "↓+C・B",
          notes: ["下・中"],
        },
        {
          name: "袖絡",
          command: "立ち途中にA",
          notes: ["上段"],
        },
        {
          name: "空牙衝",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "隼嘴脚",
          command: "立ち途中にC",
          notes: ["中段"],
        },
        {
          name: "転体薙ぎ",
          command: "軸移動中にA",
          notes: ["上段"],
        },
        {
          name: "槍尾当て",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "踵刈り",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "鬼骨刈り",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "槍牙猛突",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "万鬼滅突",
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
          name: "鬼刃",
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
          name: "菅又刃兵衛 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/48.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 菅又刃兵衛 技一覧 - YouTube",
          href: "https://youtu.be/5f02oU9TVKc",
        },
      ],
    },
  ],
}
