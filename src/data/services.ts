export interface PricingTier {
  label: string;
  cuts: string;
  period: string;
  price: string;
  revisions: string;
}

export interface ServiceLine {
  name: string;
  nameEn: string;
  keywords: string;
  focus: string;
  suitable: string;
  includes: string;
  tiers: PricingTier[];
}

export const services: ServiceLine[] = [
  {
    name: "Base Sequence",
    nameEn: "base",
    keywords: "빠름, 실용, 안정",
    focus: "납기",
    suitable: "SNS 캠페인, 프로모션",
    includes:
      "AI 이미지 생성 및 영상 생성, 편집 및 보정, 텍스트 및 로고 삽입, 간단한 사운드 디자인",
    tiers: [
      {
        label: "Short Clip (15초 이내)",
        cuts: "5컷 이내",
        period: "4~7일",
        price: "90만원~",
        revisions: "총 2회 (이미지 1회 + 영상화 1회)",
      },
      {
        label: "Standard (30초 내외)",
        cuts: "10컷 이내",
        period: "7~10일",
        price: "180만원~",
        revisions: "총 2회 (이미지 1회 + 영상화 1회)",
      },
    ],
  },
  {
    name: "Mood Sequence",
    nameEn: "mood",
    keywords: "감도, 완성도",
    focus: "효율",
    suitable: "브랜드, 런칭",
    includes:
      "브랜드 톤앤무드 세션(간단 인터뷰), 시각적 콘셉트 시안 제안 후 AI 이미지 생성 및 영상 생성,\n모션그래픽 편집 및 보정, 브랜드 맞춤 톤앤매너, 나레이션, 섬세한 사운드 디자인",
    tiers: [
      {
        label: "Short Clip (15초 이내)",
        cuts: "10컷 이내",
        period: "17일 이내",
        price: "200만원~",
        revisions: "총 3회 (이미지 2회 + 영상화 1회)",
      },
      {
        label: "Standard (30초 내외)",
        cuts: "20컷 이내",
        period: "25일 이내",
        price: "330만원~",
        revisions: "총 3회 (이미지 2회 + 영상화 1회)",
      },
      {
        label: "Campaign (1분 내외)",
        cuts: "40컷 이내",
        period: "30일 이내",
        price: "660만원~",
        revisions: "총 3회 (이미지 2회 + 영상화 1회)",
      },
    ],
  },
  {
    name: "Prime Sequence",
    nameEn: "prime",
    keywords: "스토리, 품격",
    focus: "상징성",
    suitable: "프리미엄 브랜드, 시그니처 프로젝트",
    includes:
      "브랜드 영상 디렉팅 및 기획(1:1 인터뷰 및 콘셉트 설계), 시각 콘셉트 시안 제안 후 AI 이미지 생성 및 영상 생성,\n모션그래픽 감각적 편집 및 보정, 내러티브 설계 및 시네마틱 사운드 디자인, 브랜드 시그니처 씬 구성",
    tiers: [
      {
        label: "Short Clip (15초 이내)",
        cuts: "20컷 이내",
        period: "25일 이내",
        price: "400만원~",
        revisions: "총 4회 (이미지 2회 + 영상화 2회)",
      },
      {
        label: "Standard (30초 내외)",
        cuts: "35컷 이내",
        period: "35일 이내",
        price: "700만원~",
        revisions: "총 4회 (이미지 2회 + 영상화 2회)",
      },
      {
        label: "Campaign (1분 내외)",
        cuts: "70컷 이내",
        period: "45일 이내",
        price: "1,300만원~",
        revisions: "총 4회 (이미지 2회 + 영상화 2회)",
      },
    ],
  },
];
