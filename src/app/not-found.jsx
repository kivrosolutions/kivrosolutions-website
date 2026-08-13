import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="text-4xl font-bold">404</h2>
      <p className="text-lg text-zinc-600">Page not found</p>
      <Link href="/" className="rounded-full bg-black px-6 py-3 text-white hover:bg-zinc-800">
        Go home
      </Link>
    </div>
  );
}
