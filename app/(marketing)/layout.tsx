import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import { marketingConfig } from "@/config/marketing";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <div className="container max-w-[64rem] h-20 py-6 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
          <nav>
            <Link href="/login" className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}>ログイン</Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </>
  );
}
