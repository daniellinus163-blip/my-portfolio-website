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
    <div className="overflow-hidden rounded-2xl border border-[rgba(0,229,255,0.2)] bg-[rgba(15,23,42,0.5)] shadow-[0_20px_50px_-20px_rgba(0,229,255,0.15)]">
      <div className="flex items-center gap-2 border-b border-[rgba(0,229,255,0.1)] bg-gradient-to-r from-[rgba(0,229,255,0.05)] to-[rgba(124,58,237,0.05)] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#00E5FF]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#7C3AED]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#38BDF8]" />
        <span className="ml-2 truncate rounded-md bg-[rgba(15,23,42,0.5)] px-3 py-0.5 text-[10px] font-medium text-[#94A3B8]">
          {url}
        </span>
      </div>
      <div className="relative aspect-[16/10] bg-gradient-to-br from-[rgba(15,23,42,0.3)] to-[rgba(124,58,237,0.1)]">
        {children ?? <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(max-width:768px) 100vw, 50vw" />}
      </div>
    </div>
  );
}
