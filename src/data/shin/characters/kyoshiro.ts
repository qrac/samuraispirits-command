import type { DataItem } from "../../../types"

export const shinKyoshiro: DataItem = {
  id: "shin-kyoshiro",
  name: "千両狂死郎",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "風裂扇",
          command: "↓↙←+斬",
        },
        {
          name: "跳尾獅子",
          command: "↓↙←+蹴",
        },
        {
          name: "火炎曲舞",
          command: "↓↘→+斬",
        },
        {
          name: "回天曲舞",
          command: "→↓↘+斬",
        },
        {
          name: "血煙曲輪",
          command: "空中で↓+AB",
        },
      ],
    },
    {
      title: "投げ",
      skills: [
        {
          name: "槍殺投舞",
          command: "近距離で→ or ←+B or AB",
        },
        {
          name: "髪転投",
          command: "近距離で→ or ←+D（or 素手時に近距離で→ or ←+B）",
        },
        {
          name: "絞髪演舞",
          command: "近距離で→ or ←+CD（or 素手時に近距離で→ or ←+AB）",
        },
        {
          name: "獅子連舞脚",
          command: "アースクェイクに対して投げ",
        },
      ],
    },
    {
      title: "特殊",
      skills: [
        {
          name: "しゃがみ移動",
          command: "↙ or ↘",
        },
        {
          name: "ぬいぐるみ変化",
          command: "→←↙↓↘→←+D",
        },
      ],
    },
    {
      title: "武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "荒事師 狂死郎“血肉の舞”",
          command: "→←↙↓↘→+C",
        },
      ],
    },
  ],
  sources: [
    {
      title: "もっと詳しいサイト",
      links: [
        {
          name: "千両狂死郎 - 真刃繚乱",
          href: "https://ss843087.stars.ne.jp/chara_data/kyou/kyou_mainframe.htm",
        },
        {
          name: "千両狂死郎の連続技 - 真刃繚乱",
          href: "https://ss843087.stars.ne.jp/combo/kyou/kyou_comboframe.htm",
        },
      ],
    },
    {
      title: "もっと詳しい動画",
      links: [
        {
          name: "真サムライスピリッツ(SAMURAI SHODOWN 2)初心者講習会 第1回 その3（千両 狂死郎） - YouTube",
          href: "https://youtu.be/9tHZqX940ng",
        },
      ],
    },
  ],
}
