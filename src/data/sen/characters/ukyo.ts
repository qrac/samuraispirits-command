import type { DataItem } from "../../../types"

export const senUkyo: DataItem = {
  id: "sen-ukyo",
  name: "橘右京",
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
          name: "返し斬り～上段の構え",
          command: "A・A・R",
          notes: ["上・上・構え移行"],
        },
        {
          name: "脛払い",
          command: "A・↓+A",
          notes: ["上・下"],
        },
        {
          name: "夜霧",
          command: "↘+A",
          notes: ["中段"],
        },
        {
          name: "霜払い",
          command: "↙+A・B・AB",
          notes: ["下・中・上"],
        },
        {
          name: "白波",
          command: "←→+A",
          notes: ["上段"],
        },
        {
          name: "ささめ雪",
          command: "↓↘→+A・A・A・A・A・A・A・A・A",
          notes: ["特殊動作・上・中・上・中・上・中・上・中"],
        },
        {
          name: "縦斬り",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "寒椿",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "皐裏～上段の構え",
          command: "←+B・A・R",
          notes: ["上・中・構え移行"],
        },
        {
          name: "落ち花",
          command: "←+B・A・A",
          notes: ["中・上・下"],
        },
        {
          name: "五月雨",
          command: "←+B・A・B",
          notes: ["中・上・中"],
        },
        {
          name: "柄打ち上げ",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "柄打ち上げ〜上段の構え",
          command: "↘+B・R",
          notes: ["中・構え移行"],
        },
        {
          name: "露光",
          command: "↙+B・B",
          notes: ["上・上"],
        },
        {
          name: "露光〜上段の構え",
          command: "↙+B・B・R",
          notes: ["上・上・構え移行"],
        },
        {
          name: "柄打ち",
          command: "→→+B",
          notes: ["中段"],
        },
        {
          name: "風花",
          command: "←→+B",
          notes: ["中段"],
        },
        {
          name: "つばめ返し",
          command: "↓↘→+B・AB",
          notes: ["中・中"],
        },
        {
          name: "秘剣 つばめ返し",
          command: "↓↘→+B・AB（ジャスト入力）",
          notes: ["中・中"],
        },
        {
          name: "雨桜",
          command: "↓↙←+B",
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
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "足払い",
          command: "↙+C",
          notes: ["下段"],
        },
        {
          name: "上段の構え",
          command: "AR",
          notes: ["特殊動作"],
          skills: [
            {
              name: "奥移動",
              command: "↑",
              notes: ["奥移動"],
            },
            {
              name: "手前移動",
              command: "↓",
              notes: ["手前移動"],
            },
            {
              name: "解除",
              command: "← or →",
              notes: ["構え解除"],
            },
            {
              name: "上げ抜き",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "上げ抜き〜脛払い",
              command: "A・↓+A",
              notes: ["上・下"],
            },
            {
              name: "疾風",
              command: "A・A",
              notes: ["上・上"],
            },
            {
              name: "疾風〜上段の構え",
              command: "A・A・R",
              notes: ["上・上・構え移行"],
            },
            {
              name: "雪起し",
              command: "B・B",
              notes: ["中・中"],
            },
            {
              name: "雪起し〜上段の構え",
              command: "B・B・R",
              notes: ["中・中・構え移行"],
            },
            {
              name: "蹴踏み",
              command: "C",
              notes: ["下段"],
            },
            {
              name: "蹴踏み〜上段の構え",
              command: "C・R",
              notes: ["下・構え移行"],
            },
            {
              name: "雪風",
              command: "AB・A・B",
              notes: ["上・上・中"],
            },
            {
              name: "雪風〜上段の構え",
              command: "AB・A・B・R",
              notes: ["上・上・中・構え移行"],
            },
            {
              name: "木枯らし",
              command: "AB・A・B・AB",
              notes: ["上・上・中・（中・中）"],
            },
            {
              name: "風道",
              command: "BC・A・A",
              notes: ["上・下・中"],
            },
            {
              name: "風車",
              command: "BC・A・B",
              notes: ["上・下・上"],
            },
            {
              name: "鞘巻き",
              command: "ABC",
              notes: ["中段"],
            },
            {
              name: "変則 つばめ返し",
              command: "ABC・AB・AB",
              notes: ["特殊動作・中・中"],
            },
            {
              name: "地踏み",
              command: "ABC・BC",
              notes: ["特殊動作・下"],
            },
            {
              name: "花吹雪",
              command: "ABC・ABC",
              notes: ["特殊動作・（中・中・中・中）"],
            },
          ],
        },
        {
          name: "水平鞘打ち",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "連ね鞘打ち",
          command: "立ち途中にA・B",
          notes: ["中・上"],
        },
        {
          name: "桜東風",
          command: "立ち途中にA・B（ジャスト入力）",
          notes: ["中・中"],
        },
        {
          name: "上段鞘打ち",
          command: "立ち途中にB",
          notes: ["上段"],
        },
        {
          name: "返し抜き",
          command: "立ち途中にB・A",
          notes: ["上・上"],
        },
        {
          name: "上段鞘打ち〜上段の構え",
          command: "立ち途中にB・R",
          notes: ["上・構え移行"],
        },
        {
          name: "空脚打",
          command: "立ち途中にC",
          notes: ["中段"],
        },
        {
          name: "夢想・横ー文字",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "夢想・縦ー文字",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "瞬刃裂斬",
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
          name: "秘剣 ささめ雪",
          command: "↓↘→+BC",
          notes: ["（上・上）x4"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "橘右京 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/33.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 橘右京 技一覧 - YouTube",
          href: "https://youtu.be/AqephA7ZTfM",
        },
      ],
    },
  ],
}
