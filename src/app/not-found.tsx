import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-5 py-16 sm:px-8">
        <h1 className="text-4xl font-semibold tracking-tight">없는 주소입니다</h1>
        <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
          첫 화면의 프로젝트 세 개 중에서 다시 고르면 됩니다.
        </p>
        <Button render={<Link href="/" />} className="mt-8 h-11 w-fit px-4">
          첫 화면으로
        </Button>
      </main>
    </div>
  );
}
