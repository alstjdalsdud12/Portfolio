import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { profile, projects, stackGroups } from "@/lib/projects";

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
              {profile.name} · 풀스택 개발자
            </p>
            <h1 className="mt-4 max-w-xl text-4xl leading-[1.25] font-semibold tracking-tight sm:text-6xl sm:leading-[1.15]">
              화면과 서버를
              <br />
              한 프로젝트로 <br className="sm:hidden" />
              연결합니다
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              {profile.department} {profile.graduation}. 가면가, 곁, AI 캐릭터
              게임에서 맡은 화면과 API를 사례로 적었습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button render={<Link href="/#projects" />} className="h-11 px-4">
                프로젝트 보기
              </Button>
              <Button
                render={<a href={`mailto:${profile.email}`} />}
                variant="outline"
                className="h-11 bg-background px-4"
              >
                메일
              </Button>
              <Button
                render={<a href={profile.github} target="_blank" rel="noreferrer" />}
                variant="outline"
                className="h-11 bg-background px-4"
              >
                GitHub
              </Button>
            </div>
          </div>
          <nav aria-label="대표 프로젝트" className="border border-border bg-card">
            <ol>
              {projects.map((project, position) => (
                <li
                  key={project.slug}
                  className={position < projects.length - 1 ? "border-b border-border" : undefined}
                >
                  <Button
                    render={<Link href={project.href} />}
                    variant="ghost"
                    className="h-auto min-h-28 w-full items-end justify-between gap-4 rounded-none px-5 py-5 text-left whitespace-normal hover:bg-primary hover:text-primary-foreground"
                  >
                    <span>
                      <span className="block font-mono text-xs tracking-[0.18em] text-index group-hover/button:text-primary-foreground">
                        {project.index} · {project.period}
                      </span>
                      <span className="mt-3 block text-2xl font-semibold tracking-tight sm:text-3xl">
                        {project.name}
                      </span>
                      <span className="mt-1 block text-sm text-muted-foreground group-hover/button:text-primary-foreground">
                        {project.role}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium">
                      사례
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
              세 프로젝트 모두 공개 서비스 주소는 아직 없습니다. 저장소와 사례로
              맡은 범위를 확인합니다.
            </p>
            <ol className="mt-8 divide-y divide-border border-y border-border">
              {projects.map((project) => (
                <li key={project.slug} className="grid gap-4 py-6 lg:grid-cols-[8rem_1fr_auto] lg:items-start">
                  <p className="font-mono text-xs tracking-[0.16em] text-index">{project.period}</p>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {project.team} · {project.role}
                    </p>
                    <p className="mt-3 max-w-2xl text-base leading-7">{project.summary}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="border border-border px-2 py-1 text-xs">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button
                      render={<Link href={project.href} />}
                      variant="outline"
                      className="h-11 bg-background px-4"
                    >
                      사례 보기
                    </Button>
                    <Button
                      render={<a href={project.github} target="_blank" rel="noreferrer" />}
                      variant="ghost"
                      className="h-11 px-4"
                    >
                      저장소
                    </Button>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="stack" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
            <p className="font-mono text-xs tracking-[0.18em] text-index">02</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">스택</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
              세 저장소에서 실제로 이어진 기술만 적었습니다. 곁의 백엔드는 팀
              서버이고, 본인 담당은 화면입니다.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {stackGroups.map((group) => (
                <li key={group.title} className="border border-border bg-card px-5 py-5">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
            <p className="font-mono text-xs tracking-[0.18em] text-index">03</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">소개</h2>
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
              <p>
                {profile.department} {profile.studentId}. {profile.graduation}.
              </p>
              <p>
                가면가에서는 화면과 즐겨찾기·일정 API를 맡았습니다. 곁에서는
                프론트엔드로 실패 화면을 고쳤습니다. AI 캐릭터 게임은 클라이언트와
                API, 저장을 혼자 이었습니다.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8">
            <p className="font-mono text-xs tracking-[0.18em] text-index">04</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">연락</h2>
            <ul className="mt-6 space-y-3 text-base">
              <li>
                <a className="underline-offset-4 hover:underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  className="underline-offset-4 hover:underline"
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/{profile.githubLogin}
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
