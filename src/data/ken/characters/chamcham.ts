import type { DataItem } from "../../../types"

export const kenChamcham: DataItem = {
  id: "ken-chamcham",
  name: "チャムチャム",
  groups: [
    {
      title: "必殺技",
      skills: [
        {
          name: "横に投げるンだゾ！",
          command: "↓↘→+斬",
        },
        {
          name: "上に投げるンだゾ！",
          command: "↓↙←+斬",
        },
        {
          name: "つかまえるゾ！",
          command: "→↓↘+斬",
          skills: [
            {
              name: "顔引っかくゾ！",
              command: "斬",
            },
            {
              name: "背中引っかくゾ！",
              command: "D",
            },
          ],
        },
        {
          name: "パクパク・デオス",
          command: "←↓↙+A",
        },
        {
          name: "ムーラ・パクパク",
          command: "←↓↙+B",
        },
        {
          name: "パクパク・ガブル",
          command: "←↓↙+C",
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
          name: "当たると痛いンだゾ！【真】",
          command: "→←↙↓↘→+BC同時押し",
        },
        {
          name: "当たると痛いンだゾ！【剣】",
          command: "↓↘→+BC同時押し",
        },
      ],
    },
    {
      title: "武器飛ばし技・武器破壊技",
      titleColor: 2,
      skills: [
        {
          name: "もぅ許さないンだからな！",
          command: "↓↘→+AB同時押し",
        },
      ],
    },
  ],
}
