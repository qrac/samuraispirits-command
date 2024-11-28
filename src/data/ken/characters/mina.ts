import type { DataItem } from "../../../types"

export const kenMina: DataItem = {
  id: "ken-mina",
  name: "真鏡名ミナ",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "地弓心",
          command: "←↙↓↘→+A or B",
        },
        {
          name: "天弓心",
          command: "←↙↓↘→+C",
        },
        {
          name: "スンガンの誘い",
          command: "←↓↙+D",
          notes: ["3つまでストック可能"],
        },
        {
          name: "スンガンの迎え",
          command: "矢ストック時 ←↓↙+斬",
        },
        {
          name: "シニマブイの嘆き",
          command: "→↓↘+斬",
        },
        {
          name: "ウミチムンの怒り",
          command: "→↓↘+D",
          notes: ["レバー左右で落下制御"],
        },
        {
          name: "カジフチ",
          command: "空中で↓+D",
        },
        {
          name: "チャンプル、こっちおいで",
          command: "BE",
          notes: ["再入力で解除"],
        },
        {
          name: "チャンプル、おやすみなさい",
          command: "CE",
          notes: ["再入力で解除"],
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "三角飛び",
          command: "空中画面端で↗",
        },
        {
          name: "三角降り",
          command: "空中画面端で↘",
        },
        {
          name: "遠距離攻撃（立）",
          command: "→+斬",
        },
        {
          name: "遠距離攻撃（屈）",
          command: "↘+斬",
        },
        {
          name: "特殊技",
          command: "空中で↓+斬",
        },
        {
          name: "ぬいぐるみ変化【真】",
          command: "↘↓↙←↓↙+E",
        },
      ],
    },
    {
      title: "秘奥義",
      titleColor: 3,
      skills: [
        {
          name: "ミトゥンチの裁き【真】",
          command: "←↙↓↘→←↓↙+BC",
        },
        {
          name: "ミトゥンチの裁き【剣】",
          command: "↓↘→+BC",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "ニルヤ・カナヤの呪縛",
          command: "↓↘→+AB",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "真鏡名ミナ - キャラクターとコマンドリスト | 剣サム | 明鏡止水｡◇ﾟ in 雨峠",
          href: "http://amtug.html.xdomain.jp/meikyo/kenkaku/waza.htm#zero",
        },
      ],
    },
    /*{
      title: "もっと詳しい動画",
      links: [
        {
          name: "",
          href: "https://youtu.be/xxx",
        },
      ],
    },*/
  ],
}
