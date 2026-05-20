import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  url?: string;
  children?: ReactNode;
};

export function BrowserFrame({ src, alt, url = "yourproduct.com", children }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-violet-200/60 bg-white shadow-[0_20px_50px_-20px_rgba(99,102,241,0.35)]">
      <div className="flex items-center gap-2 border-b border-violet-100 bg-gradient-to-r from-violet-50 to-sky-50 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-lime-400" />
        <span className="ml-2 truncate rounded-md bg-white/90 px-3 py-0.5 text-[10px] font-medium text-slate-500">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-50 to-violet-50">
        {children ?? <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 50vw" />}
      </div>
    </div>
  );
}
