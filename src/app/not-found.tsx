import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-brass">404</p>
      <h1 className="mt-4 font-display text-5xl text-ink">Page not found</h1>
      <p className="mt-4 max-w-md text-ink-muted">
        This destination isn&apos;t on our map — but we can help you find the right one.
      </p>
      <Link
        href="/"
        className="mt-8 bg-pine px-8 py-4 text-sm uppercase tracking-wider text-sand hover:bg-pine-dark transition-colors"
      >
        Return home
      </Link>
    </div>
  );
}
