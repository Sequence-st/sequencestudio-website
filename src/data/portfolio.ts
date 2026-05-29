export type AspectRatio = "vertical" | "horizontal";

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  youtubeId: string;
  aspect: AspectRatio;
  thumbnail?: string;
}

// 세로형 (9:16) — Short Form AI Contents
export const shortFormItems: PortfolioItem[] = [
  {
    id: "1",
    title: "더마 크림팩 클랜저 ASMR",
    client: "MEDIHEAL",
    category: "Short Form AI Contents",
    youtubeId: "MV77TozLnbI",
    aspect: "vertical",
  },
  {
    id: "2",
    title: "PDRN 토너패드 미니어쳐",
    client: "MEDIHEAL",
    category: "Short Form AI Contents",
    youtubeId: "Yj4QBA3QoLg",
    aspect: "vertical",
  },
  {
    id: "3",
    title: "토너패드 성분 키보드 ASMR",
    client: "MEDIHEAL",
    category: "Short Form AI Contents",
    youtubeId: "UJnJWyr6Ksg",
    aspect: "vertical",
  },
  {
    id: "4",
    title: "시대가 증명하는 가치",
    client: "KOHONJIN",
    category: "Short Form AI Contents",
    youtubeId: "reMNcv3GE0E",
    aspect: "vertical",
    thumbnail: "/images/portfolio/Kohonjin.png",
  },
  {
    id: "5",
    title: "비타 세럼 원료, 효능",
    client: "Amorepacific",
    category: "Short Form AI Contents",
    youtubeId: "iXq8hnvpVbw",
    aspect: "vertical",
    thumbnail: "/images/portfolio/innisfree.png",
  },
  {
    id: "6",
    title: "2 Weeks to Glow",
    client: "매경미디어, d'Alba",
    category: "Short Form AI Contents",
    youtubeId: "F2ejLAV2n9s",
    aspect: "vertical",
    thumbnail: "/images/portfolio/dalba.png",
  },
  {
    id: "7",
    title: "Oriental Hinoki Perfume",
    client: "Bella nuit",
    category: "Short Form AI Contents",
    youtubeId: "4Q3gUsXjAVI",
    aspect: "vertical",
    thumbnail: "/images/portfolio/bella nuit.png",
  },
  {
    id: "8",
    title: "쿨링 타올 (팔껄 편)",
    client: "깨끗한나라",
    category: "Short Form AI Contents",
    youtubeId: "IvnBOjhAM60",
    aspect: "vertical",
    thumbnail: "/images/portfolio/cooling towl.png",
  },
  {
    id: "9",
    title: "Go Create Your Story",
    client: "Personal Work",
    category: "Short Form AI Contents",
    youtubeId: "aLAwHU_jZrY",
    aspect: "vertical",
    thumbnail: "/images/portfolio/go create your story.png",
  },
  {
    id: "10",
    title: "Jo Malone London",
    client: "Personal Work",
    category: "Short Form AI Contents",
    youtubeId: "Qnu-BQDb2yw",
    aspect: "vertical",
    thumbnail: "/images/portfolio/jomalone.png",
  },
  {
    id: "11",
    title: "Christmas with Quanzi",
    client: "Personal Work",
    category: "Short Form AI Contents",
    youtubeId: "FQCLQpILDmo",
    aspect: "vertical",
    thumbnail: "/images/portfolio/quenzi.png",
  },
];

// 가로형 (16:9) — AI Contents
export const horizontalItems: PortfolioItem[] = [
  {
    id: "h1",
    title: "Winter Season Brand Film",
    client: "Bella nuit",
    category: "AI Contents",
    youtubeId: "KKqUjI5ZMpI",
    aspect: "horizontal",
  },
  {
    id: "h2",
    title: "AI 가짜 뉴스 오프닝",
    client: "KT",
    category: "AI Contents",
    youtubeId: "sodfBaB04AI",
    aspect: "horizontal",
  },
  {
    id: "h3",
    title: "우리들의 제주",
    client: "제주시",
    category: "AI Contents",
    youtubeId: "wGNnTkXMpmA",
    aspect: "horizontal",
  },
];

// 가로형 (16:9) — Motion Graphics Contents
export const motionItems: PortfolioItem[] = [
  {
    id: "m1",
    title: "Sequence Studio ShowReel",
    client: "Motion Graphic ShowReel",
    category: "Motion Graphics Contents",
    youtubeId: "H--DzjtUyCE",
    aspect: "horizontal",
  },
  {
    id: "m2",
    title: "The Consensus - Infomercial",
    client: "Consensus",
    category: "Motion Graphics Contents",
    youtubeId: "ifv7Gkwisrk",
    aspect: "horizontal",
  },
  {
    id: "m3",
    title: "Perfumed Spa Body Wash",
    client: "Plu",
    category: "Motion Graphics Contents",
    youtubeId: "8unsO8DI1qM",
    aspect: "horizontal",
  },
  {
    id: "m4",
    title: "체험 부스 DCTI 카드 셀렉",
    client: "KT",
    category: "Motion Graphics Contents",
    youtubeId: "uWDfkJwmiE8",
    aspect: "horizontal",
  },
  {
    id: "m5",
    title: "Home Care All in one - Brand",
    client: "(주)엔오엔",
    category: "Motion Graphics Contents",
    youtubeId: "uu7U6jH8kGI",
    aspect: "horizontal",
  },
  {
    id: "m6",
    title: "Betajell Magic Pillow",
    client: "BALANCE ON",
    category: "Motion Graphics Contents",
    youtubeId: "QfcyoRokb6k",
    aspect: "horizontal",
  },
  {
    id: "m7",
    title: "Super Special Live - Bumper",
    client: "현대홈쇼핑",
    category: "Motion Graphics Contents",
    youtubeId: "PTlYbU-ROVA",
    aspect: "horizontal",
  },
];
