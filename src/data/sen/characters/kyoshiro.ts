import type { DataItem } from "../../../types"

export const senKyoshiro: DataItem = {
  id: "sen-kyoshiro",
  name: "千両狂死郎",
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
          name: "あおり返し",
          command: "A・A",
          notes: ["上・上"],
        },
        {
          name: "天井送り",
          command: "←+A・B",
          notes: ["上・上"],
        },
        {
          name: "八双三段",
          command: "↘+A・B・A",
          notes: ["中・中・上"],
        },
        {
          name: "八双下三段",
          command: "↘+A・B・B",
          notes: ["中・中・下"],
        },
        {
          name: "流れ大渦",
          command: "↙+A・A・A",
          notes: ["下・下・下"],
        },
        {
          name: "流れ渦飛沫",
          command: "↙+A・A・B",
          notes: ["下・下・中"],
        },
        {
          name: "大回転斬",
          command: "→→+A",
          notes: ["中段"],
        },
        {
          name: "千両役者",
          command: "←→+A",
          notes: ["上段"],
        },
        {
          name: "千両役者～六方突き",
          command: "←→+A・B・B・B・B",
          notes: ["上・下・下・下・下"],
        },
        {
          name: "回天曲舞",
          command: "↓↘→+A・A・A・A・A・A",
          notes: ["上・上・上・上・上・上"],
          skills: [
            {
              name: "極楽狂技",
              command: "1〜5段目中にB",
              notes: ["上段"],
            },
          ],
        },
        {
          name: "縦薙ぎ",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "薙刀上三座",
          command: "B・A・A",
          notes: ["中・上・上"],
        },
        {
          name: "薙刀三座",
          command: "B・A・B",
          notes: ["中・上・中"],
        },
        {
          name: "薙刀下三座",
          command: "B・A・↓+A",
          notes: ["中・上・下"],
        },
        {
          name: "彼岸渡し",
          command: "←+B・B",
          notes: ["上・上"],
        },
        {
          name: "岸渡 回天曲舞",
          command: "←+B・A・A・A・A・A",
          notes: ["上・上・上・上・上・上"],
          skills: [
            {
              name: "極楽狂技",
              command: "2〜5段目中にB",
              notes: ["上段"],
            },
          ],
        },
        {
          name: "六方突き",
          command: "↓+B・B・B・B",
          notes: ["下・下・下・下"],
        },
        {
          name: "打ち出し",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "螺旋薙ぎ",
          command: "↙+B・A",
          notes: ["下・下"],
        },
        {
          name: "薙獅子",
          command: "↙+B・C",
          notes: ["下・上"],
        },
        {
          name: "嵐獅子",
          command: "↙+B・C（ジャスト入力）",
          notes: ["下・上"],
        },
        {
          name: "開幕撃",
          command: "→→+B",
          notes: ["中段"],
          skills: [
            {
              name: "新・歌舞伎滅殺",
              command: "ヒット時にAB",
              notes: ["打撃投げ"],
            },
          ],
        },
        {
          name: "獅子四連打",
          command: "←→+B・B・B・A",
          notes: ["中・上・上・上"],
        },
        {
          name: "宙乗り",
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
          name: "跳尾獅子",
          command: "↓↙←+C",
          notes: ["上段"],
        },
        {
          name: "独楽斬り",
          command: "立ち途中にA",
          notes: ["上段"],
        },
        {
          name: "奈落旋打",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "蹴り止め",
          command: "立ち途中にC",
          notes: ["中段"],
        },
        {
          name: "蹴り止め〜六方突き",
          command: "立ち途中にC・B・B・B・B",
          notes: ["中・下・下・下・下"],
        },
        {
          name: "歌舞伎張り手",
          command: "軸移動中にA",
          notes: ["上段"],
        },
        {
          name: "舞台送り",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "泣き弁慶",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "厳誤胴断",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "豪快血閃",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "火炎曲舞",
          command: "ABCR（A連打で技継続）",
          notes: ["G不能"],
        },
      ],
    },
    {
      title: "怒り爆発中専用技",
      titleColor: 2,
      skills: [
        {
          name: "一番太鼓",
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
          name: "千両狂死郎 - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/31.html",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 千両狂死郎 技一覧 - YouTube",
          href: "https://youtu.be/xxxx",
        },
      ],
    },*/
  ],
}
