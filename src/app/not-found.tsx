import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-[100px] md:text-[140px] font-[family-name:var(--font-display)] font-bold tracking-tighter leading-none text-[#cacacb] dark:text-[#2a2a2a] select-none">
          404
        </p>
        <p className="text-[#707072] mt-4 mb-8">
          Page not found
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-[#111111] dark:bg-[#f5f5f5] text-[#ffffff] dark:text-[#000000] text-sm font-medium rounded-full hover:bg-[#1151ff] dark:hover:bg-[#1151ff] transition-colors tracking-hover"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
