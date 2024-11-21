import type { DataItem } from "../../../../types"

export const asuraShikiRasetsu: DataItem = {
  id: "asura-shiki-rasetsu",
  name: "半陰となりし色（羅刹）",
  groups: [
    {
      title: "通常技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      accordion: "normal",
      skills: [
        {
          name: "",
          command: "A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "B",
          notes: ["上・上", "○・○"],
        },
        {
          name: "",
          command: "C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "→+A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "→+B",
          notes: ["上段", "×"],
        },
        {
          name: "",
          command: "屈A",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "屈B",
          notes: ["上・上", "○・○"],
        },
        {
          name: "",
          command: "屈C",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "（背面）A",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）B",
          notes: ["上段", "○"],
        },
        {
          name: "",
          command: "（背面）C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（背面）屈A",
          notes: ["下段", "○"],
        },
        {
          name: "",
          command: "（背面）屈B",
          notes: ["下・下", "○・○"],
        },
        {
          name: "",
          command: "（背面）屈C",
          notes: ["下段", "×"],
        },
        {
          name: "",
          command: "空中でA",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "空中でB",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "空中でC",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（浮遊）A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（浮遊）B",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "（浮遊）C",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "起き上がり時A",
          notes: ["中段", "×"],
        },
        {
          name: "",
          command: "起き上がり時B",
          notes: ["下段", "×"],
        },
      ],
    },
    {
      title: "固有技",
      titleNote: "入力 / 属性 / キャンセル",
      layout: "note",
      accordion: "unique",
      skills: [
        {
          name: "ユガル ナークーン",
          command: "↘+B",
          notes: ["下・上", "×・×"],
        },
        {
          name: "尼羅鳥鉢（華）（ニーロートゥパラ）",
          command: "↘+C",
          notes: ["中・上", "×・×"],
        },
        {
          name: "ニカルナースーリヤ",
          command: "↖+B",
          notes: ["中段", "×"],
        },
        {
          name: "龍（ナーガ）",
          command: "↖+C",
          notes: ["中・中", "×・×"],
        },
        {
          name: "ティークシナーカインチ",
          command: "↓+B",
          notes: ["中段", "×"],
        },
        {
          name: "句文羅（華）（クムダ） ",
          command: "↓+C",
          notes: ["下・下", "×・×"],
        },
        {
          name: "蘇摩（ソーマ）",
          command: "→→+B",
          notes: ["上・上・上・上・上・上", "×・×・×・×・×・×"],
        },
        {
          name: "波曇摩（華）（パドマ）",
          command: "→→+C",
          notes: ["上・中", "×・×"],
        },
        {
          name: "芬陀利華（プンダリーカ）",
          command: "←←+C",
          notes: ["上段", "×"],
        },
        {
          name: "ナヤーユ ワーユ",
          command: "↘↘+B",
          notes: ["上・下", "×・×"],
        },
        {
          name: "優針摩（華）（ウトパラ）",
          command: "↘↘+C",
          notes: ["上・下", "×・×"],
        },
      ],
    },
    {
      title: "必殺技",
      skills: [
        {
          name: "転法輪（ダルマーチャクラープラヴァルタナ）",
          command: "↓↘→+A or B or 怒時AB",
        },
        {
          name: "刹那（クシャナ）",
          command: "↓↙←+A or B or C or D",
        },
        {
          name: "無常（アニトヤ）",
          command: "←↓↙+A or B",
        },
        {
          name: "無憂華（アショーカ）",
          command: "←↓↙+C",
          notes: ["全段当て身 / 受けるダメージの半分を返す"],
        },
        {
          name: "慈悲（カルナー）",
          command: "←↓↙+D",
          notes: ["ガード不能 / 自傷あり"],
        },
        {
          name: "択滅（プラティサンクヒヤーニローダ）",
          command: "←↙↓+C",
          notes: ["ガード不能"],
        },
        {
          name: "無明（アビドヤー）",
          command: "→↓↘+C",
          notes: ["上段投げ / 投げ抜け:C / レバー操作逆転 or ボタン配置変更"],
        },
        {
          name: "波羅夷（パーラジカ）",
          command: "怒時→↓↘+AB",
          notes: [
            "上段投げ / 投げ抜け:AB / レバー操作逆転 or ボタン配置変更 / 相手の体力が徐々に減る",
          ],
        },
        {
          name: "蒼空神（ヴァルナ）",
          command: "→↓↘+D",
          notes: ["浮遊モードに変化 / 被ダメ・時間経過・レバー着陸方向で解除"],
          skills: [
            {
              name: "頗梨（スパティカ）",
              command: "↓↘→+A",
            },
            {
              name: "摩尼（マニ）",
              command: "↓↘→+B",
            },
            {
              name: "閼伽（アルグヤ）",
              command: "怒時↓↘→+AB",
            },
          ],
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 2,
      skills: [
        {
          name: "色咒（ルーパ）",
          command: "↓↘→+BC",
          notes: ["ヒット時に体力回復"],
        },
        {
          name: "色蘊（ルーパ＝スカンダ）",
          command: "浮遊中に↓↘→+BC",
        },
      ],
    },
  ],
}
