import type { DataItem } from "../../../types"

export const senNakoruru: DataItem = {
  id: "sen-nakoruru",
  name: "ナコルル",
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
          name: "小太刀連斬",
          command: "A・B",
          notes: ["上・上"],
        },
        {
          name: "首刈り",
          command: "A・B・A",
          notes: ["上・上・上"],
        },
        {
          name: "天地連斬",
          command: "A・B・A・B",
          notes: ["上・上・上・中"],
        },
        {
          name: "ウコトゥイパ",
          command: "A・B・A・B・AB",
          notes: ["上・上・上・中・中"],
        },
        {
          name: "昇激斬",
          command: "A・B・A・↘+B",
          notes: ["上・上・上・中"],
        },
        {
          name: "螺旋翼波",
          command: "A・B・B",
          notes: ["上・上・中"],
        },
        {
          name: "転襲斬",
          command: "A・B・B・A",
          notes: ["上・上・中・中"],
        },
        {
          name: "飛翔閃",
          command: "A・B・B・B",
          notes: ["上・上・中・中"],
        },
        {
          name: "鳳連脚",
          command: "A・B・B・C",
          notes: ["上・上・中・上"],
        },
        {
          name: "突鷹爪",
          command: "A・B・↓+B",
          notes: ["上・上・下"],
        },
        {
          name: "横裂斬",
          command: "A・B・↘+A",
          notes: ["上・上・中"],
        },
        {
          name: "上段脚襲撃",
          command: "A・C",
          notes: ["上・上"],
        },
        {
          name: "虚空閃",
          command: "A・↓+A",
          notes: ["上・下"],
        },
        {
          name: "往復ビンタ",
          command: "←+A・A",
          notes: ["上・上"],
        },
        {
          name: "脛蹴り",
          command: "←+A・A・C",
          notes: ["上・上・下"],
        },
        {
          name: "マタンキクルテケヘ",
          command: "←+A・A・AB",
          notes: ["上・上・中"],
        },
        {
          name: "レタライメラッ",
          command: "↘+A・B・B",
          notes: ["上・上・上"],
        },
        {
          name: "下段脚襲撃",
          command: "↙+A・C",
          notes: ["下・下"],
        },
        {
          name: "アンヌムツベ",
          command: "→→+A",
          notes: ["特中"],
        },
        {
          name: "縦斬り",
          command: "B",
          notes: ["中段"],
        },
        {
          name: "エムシルヤンペ",
          command: "B・A・B・AB",
          notes: ["中・上・上・中"],
        },
        {
          name: "カルンパニウプン",
          command: "B・A・C・B・AB",
          notes: ["中・上・上・中"],
        },
        {
          name: "殺牙",
          command: "B・B",
          notes: ["中・中"],
        },
        {
          name: "乱れ刹那",
          command: "B・C",
          notes: ["中・中"],
        },
        {
          name: "ヌペクコルアイ",
          command: "←+B",
          notes: ["中段"],
        },
        {
          name: "レラコルラプ",
          command: "↘+B",
          notes: ["中段"],
        },
        {
          name: "シピリカノンノ",
          command: "↙+B・B・A",
          notes: ["中・上・中"],
        },
        {
          name: "ユプケイメラッ",
          command: "↙+B・B・B",
          notes: ["中・上・中"],
        },
        {
          name: "レラムツベ",
          command: "→→+B",
          notes: ["中段"],
          skills: [
            {
              name: "ママハハにつかまる",
              command: "与ガード時にR",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "回し蹴り",
          command: "C",
          notes: ["上段"],
        },
        {
          name: "花連撃",
          command: "C・A",
          notes: ["上・中"],
        },
        {
          name: "花翔閃",
          command: "C・B",
          notes: ["上・中"],
        },
        {
          name: "無形発脚",
          command: "→+C・C",
          notes: ["中・中"],
        },
        {
          name: "天回脚",
          command: "←+C",
          notes: ["中段"],
        },
        {
          name: "天回脚〜ママハハにつかまる",
          command: "←+C・R",
          notes: ["中・特殊動作"],
        },
        {
          name: "下段蹴り",
          command: "↓+C",
          notes: ["下段"],
        },
        {
          name: "チコイキプアミヒ",
          command: "↘+C・B",
          notes: ["中・中"],
        },
        {
          name: "レラリムセ",
          command: "↙+C・A・A",
          notes: ["下・上・下"],
        },
        {
          name: "ニシコトロリムセ",
          command: "↙+C・A・B",
          notes: ["下・上・中"],
        },
        {
          name: "烈華車輪",
          command: "→→+C・C",
          notes: ["中・中"],
        },
        {
          name: "烈華仙脚",
          command: "→→+C・↓+C",
          notes: ["中・下"],
        },
        {
          name: "雪滑り",
          command: "↓↘→",
          notes: ["特殊動作"],
        },
        {
          name: "ママハハにつかまる",
          command: "↓↙←+R",
          notes: ["特殊動作"],
          skills: [
            {
              name: "前進",
              command: "→",
              notes: ["前移動"],
            },
            {
              name: "後退",
              command: "←",
              notes: ["後ろ移動"],
            },
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
              name: "飛翔",
              command: "→→",
              notes: ["回り込み移動"],
            },
            {
              name: "翔裂爪",
              command: "A",
              notes: ["上段"],
            },
            {
              name: "カムイムツベ",
              command: "B",
              notes: ["中段"],
            },
            {
              name: "脚砕突打",
              command: "C",
              notes: ["下段"],
            },
            {
              name: "脚砕突打 キャンセル",
              command: "C・←←",
              notes: ["下・特殊動作"],
            },
            {
              name: "降りる",
              command: "R",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "清突き",
          command: "立ち途中にA",
          notes: ["中段"],
        },
        {
          name: "空月斬",
          command: "立ち途中にB",
          notes: ["中段"],
        },
        {
          name: "乱れ櫻",
          command: "立ち途中にC・B・AB",
          notes: ["中・中・中"],
        },
        {
          name: "閃輪",
          command: "軸移動中にA",
          notes: ["中段"],
        },
        {
          name: "エムシ落とし",
          command: "軸移動中にB",
          notes: ["中段"],
        },
        {
          name: "エエンレラ",
          command: "軸移動中にC",
          notes: ["下段"],
        },
        {
          name: "ノタクレラ",
          command: "AB",
          notes: ["上段"],
        },
        {
          name: "ノタクルアンベ",
          command: "BC",
          notes: ["中段"],
        },
        {
          name: "ノチウチュラクンネチュプリムセ",
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
          name: "アシトマップアンヌムツベ",
          command: "↓↘→+BC",
          notes: ["特中 / BC継続押しでタメ可"],
          skills: [
            {
              name: "キャンセル",
              command: "タメ中に←←",
              notes: ["特殊動作"],
            },
          ],
        },
        {
          name: "アフンチャロアンヌムツベ",
          command: "↓↘→+BC最大タメ",
          notes: ["G不能"],
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "ナコルル - サムライスピリッツ閃 @ ウィキ - atwiki",
          href: "https://w.atwiki.jp/samuraispiritssen/pages/16.html",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "サムライスピリッツ閃 ナコルル 技一覧 - YouTube",
          href: "https://youtu.be/lSsj1XMhWRs",
        },
      ],
    },
  ],
}
