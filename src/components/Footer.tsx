import Link from "next/link";
import { clinic, navItems } from "@/lib/clinic-data";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="section-container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-black text-slate-950">{clinic.name}</p>
          <p className="mt-1 text-sm text-slate-500">{clinic.tagline}</p>
        </div>

        <nav className="flex flex-wrap gap-5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-500 hover:text-cyan-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="section-container mt-8 border-t border-slate-100 pt-6">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} {clinic.name}. Landing page concept for
          dental clinic marketing. Verify clinic details before production use.
        </p>
      </div>
    </footer>
  );
}