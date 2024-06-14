import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function IndexPage() {
  return (
    <>
      <section className="pt-6 md:pt-10 lg:py-32 pb-8 md:pb-12">
        <div className="container text-center flex flex-col items-center gap-4 max-w-[64rem]">
          <Link
            href={siteConfig.links.x}
            className="bg-muted px-4 py-1.5 rounded-2xl font-medium text-sm"
            target="_blank"
            rel="noreferrer"
          >
            Xをフォローする
          </Link>
          <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Post Writer
          </h1>
          <p className="text-muted-foreground sm:text-xl leading-normal max-w-[42rem]">
            このアプリケーションはNext.js
            AppRouterで作られたものです。ユーザーは自由に投稿をポストすることができます。
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              はじめる
            </Link>
            <Link
              href={siteConfig.links.github}
              className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-8 md:py-12 lg:py-24 bg-slate-50"
      >
        <div className="container max-w-[64rem] space-y-6">
          <div className="text-center space-y-6 max-w-[58rem] mx-auto">
            <h2 className="font-extrabold text-3xl md:text-6xl">
              サービスの特徴
            </h2>
            <p className="text-muted-foreground sm:text-lg sm:leading-7">
              このプロジェクトはモダンな技術スタックを使って作られたWebアプリケーションです。Next.js
              AppRouterやcontentlayerを利用してマークダウン形式でブログ投稿ができます。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3">
            <div className="bg-background border p-2 rounded-lg">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="currentColor"
                    d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096a64 64 0 0 0 .111-.096"
                  />
                </svg>
                <div>
                  <h3>Next.js</h3>
                  <p>AppRouter/Layouts/APIRoutesの技術を使用。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
