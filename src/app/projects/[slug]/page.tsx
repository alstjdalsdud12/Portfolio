import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { caseSections, getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "프로젝트 · 풀스택 포트폴리오" };
  }

  return {
    title: `${project.name} · 풀스택 포트폴리오`,
    description: `${project.name} 프로젝트 사례`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const others = projects.filter((item) => item.slug !== project.slug);

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-5 py-12 sm:px-8">
        <p className="font-mono text-xs tracking-[0.18em] text-index">{project.index}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
          {project.name}
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          이 사례는 아래 순서로 채웁니다. 서비스 주소는 배포한 뒤에 이 페이지에
          연결합니다.
        </p>
        <ol className="mt-10 border-t border-border">
          {caseSections.map((section, index) => (
            <li key={section.title} className="grid gap-2 border-b border-border py-5 sm:grid-cols-[7rem_1fr]">
              <p className="font-mono text-xs tracking-[0.16em] text-index">
                0{index + 1}
              </p>
              <div>
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{section.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button render={<Link href="/#projects" />} variant="outline" className="h-11 bg-background px-4">
            프로젝트 목록
          </Button>
        </div>
        <nav aria-label="다른 프로젝트" className="mt-10">
          <p className="text-sm text-muted-foreground">다른 프로젝트</p>
          <ul className="mt-3 flex flex-col gap-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link href={item.href} className="text-sm font-medium underline-offset-4 hover:underline">
                  {item.index} {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}
