import Image from "next/image";
import Link from "next/link";

type SitePage = "core" | "modulos" | "neural-docs" | "cotizador";

const navigation = [
  { label: "Core", href: "/", page: "core" },
  { label: "Módulos", href: "/modulos", page: "modulos" },
  { label: "Neural Docs", href: "/neural-docs", page: "neural-docs" },
  { label: "Cotizador", href: "/cotizador", page: "cotizador" },
  { label: "Terminal", href: "/cotizador#operations", page: "cotizador" },
] as const;

export function SiteHeader({
  activePage = "neural-docs",
  avatarSrc = "/images/brand/logo-mark.svg",
}: {
  activePage?: SitePage;
  avatarSrc?: string;
}) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__identity">
          <Link className="brand" href="/" aria-label="NexFlow Labs, inicio">
            <span className="brand__name">
              <span className="brand__initial">N</span>EXFLOW
            </span>
            <span className="brand__badge">LABS</span>
          </Link>
          <span className="brand__descriptor">NEXT-GEN AI OPS</span>
        </div>

        <nav className="site-nav" aria-label="Navegación principal">
          {navigation.map((item, index) => {
            const isActive = item.page === activePage && (activePage !== "cotizador" || item.label === "Cotizador");
            return (
              <Link
                className={`site-nav__link${isActive ? " is-active" : ""}`}
                href={item.href}
                key={`${item.label}-${index}`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <span className="operational-badge">
            <span className="status-dot status-dot--blue" />
            OPERATIONAL
          </span>
          <Link className="header-demo-link" href="/neural-docs#playground">
            Iniciar Sesión / Demo
          </Link>
          <span className="header-avatar" aria-hidden="true">
            <Image
              src={avatarSrc}
              width={12}
              height={12}
              alt=""
            />
          </span>
        </div>
      </div>
    </header>
  );
}
