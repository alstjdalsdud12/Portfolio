import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { getProject, projects } from "@/lib/projects";

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
    return { title: "프로젝트 · 최민영" };
  }

  return {
    title: `${project.name} · 최민영`,
    description: project.summary,
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
        <p className="font-mono text-xs tracking-[0.18em] text-index">
          {project.index} · {project.period}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{project.name}</h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          {project.team} · {project.role}
        </p>
        <p className="mt-4 text-base leading-7">{project.summary}</p>
        <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.serviceNote}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button
            render={<a href={project.github} target="_blank" rel="noreferrer" />}
            className="h-11 px-4"
          >
            저장소
          </Button>
          {project.links.map((link) => (
            <Button
              key={link.href}
              render={<a href={link.href} target="_blank" rel="noreferrer" />}
              variant="outline"
              className="h-11 bg-background px-4"
            >
              {link.label}
            </Button>
          ))}
          <Button render={<Link href="/#projects" />} variant="ghost" className="h-11 px-4">
            목록
          </Button>
        </div>
        <ol className="mt-10 border-t border-border">
          {project.sections.map((section, index) => (
            <li key={section.title} className="border-b border-border py-6">
              <p className="font-mono text-xs tracking-[0.16em] text-index">
                0{index + 1}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </li>
          ))}
        </ol>
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
