export type CaseSection = {
  title: string;
  paragraphs: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  index: string;
  slug: string;
  name: string;
  href: string;
  period: string;
  team: string;
  role: string;
  summary: string;
  tags: string[];
  github: string;
  links: ProjectLink[];
  serviceNote: string;
  sections: CaseSection[];
};

export const profile = {
  name: "최민영",
  email: "minyoung030106@gmail.com",
  github: "https://github.com/alstjdalsdud12",
  githubLogin: "alstjdalsdud12",
  department: "컴퓨터소프트웨어과",
  studentId: "2022136019",
  graduation: "2027.02 졸업 예정",
};

export const projects: Project[] = [
  {
    index: "01",
    slug: "gmg",
    name: "가면가",
    href: "/projects/gmg",
    period: "2026.09 – 2026.11",
    team: "캡스톤디자인 · 3인 팀 노플랜",
    role: "화면, 즐겨찾기·일정 API",
    summary:
      "지도에서 고른 국내 지역 주변 관광지로 여행 일정을 만드는 서비스입니다.",
    tags: ["React", "Vite", "Spring Boot", "MySQL"],
    github: "https://github.com/minsung6167/gmg",
    links: [],
    serviceNote: "백엔드와 프론트를 로컬에서 함께 실행합니다. 공개 주소는 없습니다.",
    sections: [
      {
        title: "개요",
        paragraphs: [
          "가면가(gmg)는 국내 지역을 고르고, 주변 관광지와 여행 일정을 한 흐름으로 보여주는 캡스톤 서비스입니다. 팀은 최민영, 최민성, 원재민입니다.",
          "사용자는 인원, 날짜, 동행, 테마, 자차 여부를 넣고 지역을 고릅니다. 고른 장소는 즐겨찾기에 남기고, 일자별 일정으로 이어집니다.",
        ],
      },
      {
        title: "문제",
        paragraphs: [
          "여행지, 이동시간, 일정표를 따로 찾으면 순서가 쉽게 어긋납니다. 가면가는 지역 선택 다음에 관광지와 일정이 나오게 합니다.",
        ],
      },
      {
        title: "맡은 일",
        paragraphs: [
          "저장소의 본인 커밋 기준으로 로그인·회원가입·첫 화면, 결과 화면, 하단 내비게이션, 계획 전 화면, 계획 목록을 만들었습니다.",
          "서버에서는 즐겨찾기 저장 API와 계획 저장 API를 나누고, 결과 화면의 관광지·즐겨찾기 연동과 AI 일정 화면 연결을 진행했습니다. 일정 테이블, 클러스터링, 이동시간 서비스 작업도 같은 흐름의 커밋에 있습니다.",
        ],
      },
      {
        title: "화면 흐름",
        paragraphs: [
          "시작 화면에서 로그인하거나 비로그인으로 들어갑니다. 필터와 지도에서 지역을 고르면 결과 화면에 관광지가 나오고, 즐겨찾기 뒤에는 계획 작성과 일자별 일정으로 이동합니다.",
        ],
      },
      {
        title: "서버와 데이터",
        paragraphs: [
          "React 화면이 Spring Boot API를 호출합니다. MySQL에는 사용자, 관광지, 평점, 즐겨찾기, 일정과 일정 항목이 있습니다.",
          "관광 정보는 한국관광공사 TourAPI, 지도와 이동시간은 카카오 API, 일정 문장은 Gemini가 만듭니다. 팀 README의 1차 원칙은 방문 순서를 모델이 바꾸지 않는 것입니다. 이동시간은 자차와 대중교통 API로 계산합니다.",
        ],
      },
      {
        title: "기술 선택",
        paragraphs: [
          "Gemini는 이미 정해진 장소의 시간대와 설명 문장만 만듭니다. 식당 이름 같은 실존 고유명사는 만들지 않습니다. 순서를 모델에 맡기지 않은 이유는 틀린 동선을 막기 위해서입니다.",
        ],
      },
      {
        title: "검증",
        paragraphs: [
          "공개 배포는 없습니다. 백엔드는 8080, 프론트는 Vite 개발 서버로 같이 띄웁니다. 저장소의 자동 테스트는 애플리케이션 기동 테스트 파일까지 확인했습니다. 응답 시간 측정값은 없습니다.",
        ],
      },
      {
        title: "결과",
        paragraphs: [
          "지역 선택, 관광지, 즐겨찾기, 일정 화면이 한 저장소에서 이어집니다.",
          "1차 버전은 비밀번호를 암호화하지 않고 세션에 사용자 번호를 저장합니다. README에 발표 때 말할 한계로 적혀 있습니다.",
        ],
      },
    ],
  },
  {
    index: "02",
    slug: "gyeot",
    name: "곁",
    href: "/projects/gyeot",
    period: "2026.07 – 2026.08",
    team: "팀 프로젝트 · 프론트엔드 F1",
    role: "화면과 오류 상태",
    summary:
      "회원가입 없이 응급조치 안내와 119, 가까운 응급실로 이어지는 웹서비스입니다.",
    tags: ["React", "Vite", "Kakao Map"],
    github: "https://github.com/soldesk7/gyeot",
    links: [],
    serviceNote: "이번 범위는 로컬 시연입니다. 공개 서버 배포는 하지 않았습니다.",
    sections: [
      {
        title: "개요",
        paragraphs: [
          "곁은 응급 상황에서 사진을 올리거나 상황을 고르면 응급조치 안내를 보여주고, 모든 화면에 119를 두며, 가까운 응급실을 지도로 보여 주는 서비스입니다. 계정은 없습니다.",
        ],
      },
      {
        title: "문제",
        paragraphs: [
          "안내를 찾지 못하거나, 조회가 실패했는데 화면이 계속 로딩 중으로 남으면 다음 행동을 할 수 없습니다. 서버가 죽었을 때 원인과 다른 오류 문구가 나오는 것도 같은 문제입니다.",
        ],
      },
      {
        title: "맡은 일",
        paragraphs: [
          "프론트엔드 F1입니다. 백엔드 폴더는 다른 담당입니다.",
          "주소 검색과 기준 시각, 홈으로 버튼을 공통 패턴으로 정리했습니다. 위치정보를 쓰도록 개발 서버를 HTTPS로 바꿨습니다. 응급실 조회가 실패하면 로딩이 끝나지 않던 문제와, 서버 실패 때 카카오맵 키 오류처럼 보이던 문구를 고쳤습니다.",
        ],
      },
      {
        title: "화면 흐름",
        paragraphs: [
          "홈에서 사진을 올리거나 화상·출혈·의식저하를 고릅니다. 안내 화면에는 119가 남아 있고, 이어서 응급실 지도로 이동합니다. 인식이 늦어도 119와 직접 선택은 막지 않는 것이 팀 원칙입니다.",
        ],
      },
      {
        title: "서버와 데이터",
        paragraphs: [
          "화면은 React입니다. 사진 인식, 가이드, 응급실 조회는 Spring Boot가 받아 Gemini와 공공데이터 API를 호출합니다.",
          "업로드한 사진은 서버에 저장하지 않고, 공공데이터 키와 Gemini 키는 서버 환경변수에만 둡니다. 이 경계는 팀 공통 규칙입니다.",
        ],
      },
      {
        title: "기술 선택",
        paragraphs: [
          "브라우저 위치정보는 보안 컨텍스트가 필요해서 개발 서버를 HTTPS로 전환했습니다. 커밋 메시지에 이 이유가 있습니다.",
          "파일 크기처럼 서버에 닿기 전에 알 수 있는 실패는 화면이 안내하고, 인식 결과와 공공데이터 상태는 서버가 안내합니다. 이 구분은 스프린트 회고에 정리되어 있습니다.",
        ],
      },
      {
        title: "문제 해결",
        paragraphs: [
          "지도 화면은 실패를 하나처럼 다뤄서, 서버가 죽어도 카카오맵 키를 확인하라는 문구가 나왔습니다. 조회 실패를 받는 처리가 없으면 로딩 문구도 남지 않았습니다.",
          "실패 종류를 나누고, 다시 받기가 조용히 실패하지 않도록 오류 문구를 붙였습니다. 스프린트 기록의 F1 수정과 본인 커밋이 같은 내용입니다.",
        ],
      },
      {
        title: "검증",
        paragraphs: [
          "공개 배포는 하지 않았습니다. 저장소에는 프론트와 백엔드 CI 워크플로가 있습니다. 본인이 측정해 남긴 응답 시간 수치는 없습니다.",
        ],
      },
      {
        title: "결과",
        paragraphs: [
          "응급실 지도에서 서버 실패와 지도 키 문제가 같은 문구로 보이지 않게 고쳤습니다.",
          "오프라인에서 새로고침하면 브라우저 오류 화면이 뜹니다. 팀 회고는 이것을 알려진 한계로 남겨 두었습니다.",
        ],
      },
    ],
  },
  {
    index: "03",
    slug: "vibe-coding-project",
    name: "AI 캐릭터 게임",
    href: "/projects/vibe-coding-project",
    period: "2026.05 – 2026.06",
    team: "1인 · 7주",
    role: "클라이언트, API, 저장",
    summary:
      "외형과 무기, 컨셉을 입력하면 AI가 캐릭터를 만들고 그 캐릭터로 바로 플레이합니다.",
    tags: ["Unity", "Node.js", "Firebase", "Groq"],
    github: "https://github.com/alstjdalsdud12/vibe-coding-project",
    links: [
      {
        label: "발표 자료",
        href: "https://alstjdalsdud12.github.io/vibe-coding-project/",
      },
    ],
    serviceNote:
      "게임은 Unity 에디터와 로컬 API로 실행합니다. 공개된 것은 발표 자료입니다.",
    sections: [
      {
        title: "개요",
        paragraphs: [
          "유저가 외형, 무기, 컨셉, 세계관을 입력하면 AI가 이름과 스탯, 스킬, 배경을 만들고, 그 캐릭터로 마을과 던전을 플레이하는 2D 게임입니다. 기획서의 개발자는 1인입니다.",
        ],
      },
      {
        title: "문제",
        paragraphs: [
          "기존 방식은 만들어 둔 캐릭터 중에서 고릅니다. 이 프로젝트는 입력한 설정으로 그 판의 캐릭터를 만들고 바로 플레이하게 합니다.",
        ],
      },
      {
        title: "맡은 일",
        paragraphs: [
          "기획, Unity 클라이언트, Node.js API, Firestore 저장, 발표 자료를 한 저장소에서 다뤘습니다.",
          "확인된 게임 커밋에는 마을 씬과 캐릭터 미리보기 비율 수정이 있습니다. 후반 커밋은 발표 슬라이드와 README 정리입니다.",
        ],
      },
      {
        title: "화면 흐름",
        paragraphs: [
          "타이틀, 캐릭터 목록, 캐릭터 생성, 마을, 던전 순서로 씬이 넘어갑니다. 마을에서는 상점, 미션, 출석, 가방을 다루고 던전에서는 공격과 스킬, 아이템, 도망이 있습니다. 전투에서 죽으면 Firestore의 캐릭터를 지웁니다.",
        ],
      },
      {
        title: "서버와 데이터",
        paragraphs: [
          "Unity가 REST로 Node.js를 호출합니다. 캐릭터 생성과 소설 생성은 Groq의 Llama 3.3 70B를 쓰고, 캐릭터와 상태는 Firestore에 저장합니다.",
          "README에 있는 API는 목록 조회, 생성, 상태 수정, 삭제, 소설 생성입니다.",
        ],
      },
      {
        title: "기술 선택",
        paragraphs: [
          "씬을 나누고 Android와 iOS 빌드를 같이 보기 위해 Unity를 골랐습니다. AI 호출과 저장은 게임 클라이언트 밖에 두었습니다. 기획서와 README의 선정 이유입니다.",
        ],
      },
      {
        title: "검증",
        paragraphs: [
          "실행 안내는 Unity 2022.3에서 프로젝트를 열고, 백엔드는 로컬 3000번 포트입니다. 발표 자료는 GitHub Pages에 있습니다.",
          "후반 슬라이드 수정에서 APK 배포 설명은 빼고 에디터 실행으로 정리했습니다. 생성 시간이 30초 안이라는 문장은 기획서의 목표이고, 측정 기록은 아닙니다.",
        ],
      },
      {
        title: "결과",
        paragraphs: [
          "캐릭터 입력부터 마을, 던전, 소설 생성까지 한 저장소에 연결되어 있습니다. 계정과 멀티플레이는 범위 밖입니다.",
        ],
      },
    ],
  },
];

export const stackGroups: { title: string; items: string[] }[] = [
  {
    title: "화면",
    items: ["React, Vite — 가면가, 곁", "Unity — AI 캐릭터 게임"],
  },
  {
    title: "서버",
    items: [
      "Spring Boot — 가면가의 즐겨찾기·일정 API, 곁의 BFF",
      "Node.js, Express — 캐릭터 생성 API",
    ],
  },
  {
    title: "데이터",
    items: ["MySQL — 가면가", "Firebase Firestore — AI 캐릭터 게임"],
  },
  {
    title: "외부 API",
    items: [
      "카카오맵, TourAPI, Gemini — 가면가",
      "공공데이터, Gemini, 카카오맵 — 곁",
      "Groq Llama 3.3 — AI 캐릭터 게임",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
