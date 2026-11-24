import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { projects, stackGroups } from "@/lib/projects";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-30 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        프로젝트로 이동
      </a>
      <SiteHeader />
      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end">
          <div>
            <p className="text-sm font-medium text-index">
              컴퓨터소프트웨어 · 풀스택 개발자
            </p>
            <h1 className="mt-4 max-w-xl text-4xl leading-[1.2] font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.12]">
              화면과 서버를
              <br />한 프로젝트로 설명합니다
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              gmg, RE_cook, vibe-coding-project. 세 편의 사례로 맡은 일과
              구조를 읽습니다. 서비스 주소는 각 프로젝트를 배포한 뒤에
              연결합니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button render={<Link href="/#projects" />} className="h-11 px-4">
                프로젝트 보기
              </Button>
              <Button
                render={<Link href="/#contact" />}
                variant="outline"
                className="h-11 bg-background px-4"
              >
                연락
              </Button>
            </div>
          </div>
          <nav aria-label="대표 프로젝트" className="border border-border bg-card">
            <ol>
              {projects.map((project, position) => (
                <li
                  key={project.slug}
                  className={
                    position < projects.length - 1 ? "border-b border-border" : undefined
                  }
                >
                  <Button
                    render={<Link href={project.href} />}
                    variant="ghost"
                    className="h-auto min-h-28 w-full items-end justify-between gap-4 rounded-none px-5 py-5 text-left whitespace-normal hover:bg-primary hover:text-primary-foreground"
                  >
                    <span>
                      <span className="block font-mono text-xs tracking-[0.18em] text-index group-hover/button:text-primary-foreground">
                        {project.index}
                      </span>
                      <span className="mt-3 block text-2xl font-semibold tracking-tight sm:text-3xl">
                        {project.name}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      사례 보기
                      <ArrowRight aria-hidden="true" />
                    </span>
                  </Button>
                </li>
              ))}
            </ol>
          </nav>
        </section>

        <section id="projects" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
            <p className="font-mono text-xs tracking-[0.18em] text-index">01</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">프로젝트</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              카드에는 기간, 맡은 범위, 한 줄 설명, 기술, 사례 링크가 들어갑니다.
              돌아가는 서비스 주소는 배포 후에 같은 카드에 붙입니다.
            </p>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {projects.map((project) => (
                <li key={project.slug} className="grid gap-4 py-6 sm:grid-cols-[4rem_1fr_auto] sm:items-center">
                  <p className="font-mono text-xs tracking-[0.18em] text-index">
                    {project.index}
                  </p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      서비스 주소는 아직 연결하지 않았습니다.
                    </p>
                  </div>
                  <Button
                    render={<Link href={project.href} />}
                    variant="outline"
                    className="h-11 bg-background px-4"
                  >
                    사례 보기
                  </Button>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="structure" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
            <p className="font-mono text-xs tracking-[0.18em] text-index">02</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">구조</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              한 프로젝트 안에서 화면, 서버, 데이터를 같이 적습니다. 요청이 어디서
              끝나며, 무엇을 저장하는지가 사례의 중심입니다.
            </p>
            <ol className="mt-8 grid gap-px bg-border sm:grid-cols-3">
              {[
                ["화면", "사용자가 거치는 화면과 로딩, 빈 화면, 오류."],
                ["서버", "API의 성공과 실패, 인증이 있으면 그 방식."],
                ["데이터", "테이블이나 저장 구조, 그 관계를 만든 이유."],
              ].map(([title, text], index) => (
                <li key={title} className="bg-background px-5 py-6">
                  <p className="font-mono text-xs tracking-[0.18em] text-index">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="stack" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
            <p className="font-mono text-xs tracking-[0.18em] text-index">03</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">스택</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              기술 이름은 세 프로젝트에서 실제로 쓴 것만 묶습니다. 로고 목록으로
              채우지 않습니다.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {stackGroups.map((group) => (
                <li key={group.title} className="border border-border bg-card px-5 py-5">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
            <p className="font-mono text-xs tracking-[0.18em] text-index">04</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">소개</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              컴퓨터소프트웨어 전공 졸업 과제 포트폴리오입니다. 세 프로젝트를
              화면과 서버가 같이 보이게 정리합니다. 이름, 메일, 학력은 확인되는
              내용만 이어서 넣습니다.
            </p>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
            <p className="font-mono text-xs tracking-[0.18em] text-index">05</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">연락</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              메일과 GitHub 주소를 받으면 여기에 연결합니다. 각 프로젝트의 서비스
              주소도 배포가 끝난 뒤에 사례 페이지에 넣습니다.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
