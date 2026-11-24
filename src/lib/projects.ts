export type Project = {
  index: string;
  name: string;
  slug: string;
  href: string;
};

export const projects: Project[] = [
  { index: "01", name: "gmg", slug: "gmg", href: "/projects/gmg" },
  { index: "02", name: "RE_cook", slug: "re-cook", href: "/projects/re-cook" },
  {
    index: "03",
    name: "vibe-coding-project",
    slug: "vibe-coding-project",
    href: "/projects/vibe-coding-project",
  },
];

export const caseSections = [
  { title: "개요", text: "누가 쓰는 서비스인지, 핵심 기능이 무엇인지." },
  { title: "문제", text: "이 서비스가 없을 때 사용자가 하던 일." },
  { title: "맡은 일", text: "팀 작업이면 내가 만든 화면과 서버만." },
  { title: "화면 흐름", text: "사용자가 거치는 화면과 상태." },
  { title: "서버와 데이터", text: "요청이 지나가는 경로, 저장하는 데이터." },
  { title: "기술 선택", text: "당시 요구, 다른 방법, 고른 방법, 한계." },
  { title: "문제 해결", text: "증상, 원인, 수정, 다시 확인한 방법." },
  { title: "검증", text: "테스트와 배포. 측정값이면 조건까지." },
  { title: "결과", text: "달라진 점과, 아직 남은 한계." },
] as const;

export const stackGroups = [
  { title: "화면", text: "사용자가 보는 흐름과 상태." },
  { title: "서버", text: "API, 인증, 오류 응답." },
  { title: "데이터", text: "저장 구조와 지켜야 하는 관계." },
  { title: "배포", text: "빌드, 서버, 확인 방법." },
  { title: "협업", text: "저장소, 이슈, 역할을 나눈 방식." },
] as const;

export const navItems = [
  { href: "/#projects", label: "프로젝트" },
  { href: "/#structure", label: "구조" },
  { href: "/#stack", label: "스택" },
  { href: "/#about", label: "소개" },
  { href: "/#contact", label: "연락" },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
