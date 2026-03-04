interface PageHeroProps {
  title:       string;
  description?: string;
  /** Optional right-side illustration slot */
  illustration?: React.ReactNode;
  /** Variant: "dark" = navy hero (like Use FABRIC), "light" = off-white */
  variant?: "dark" | "light";
}

export function PageHero({
  title,
  description,
  illustration,
  variant = "dark",
}: PageHeroProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={
        isDark
          ? "pt-14 min-h-[240px] flex items-center bg-hero-gradient relative overflow-hidden"
          : "pt-14 min-h-[200px] flex items-center bg-fabric-off-white border-b border-fabric-gray-200"
      }
    >
      {isDark && (
        <div className="absolute inset-0 bg-hero-radial" />
      )}

      <div className="page-container relative z-10 py-12">
        <div className={`grid grid-cols-1 ${illustration ? "md:grid-cols-2" : ""} gap-8 items-center`}>
          <div>
            <h1
              className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
                isDark ? "text-white" : "text-fabric-navy"
              }`}
            >
              {title}
            </h1>
            {description && (
              <p className={`text-base leading-relaxed max-w-xl ${isDark ? "text-white/70" : "text-fabric-gray-600"}`}>
                {description}
              </p>
            )}
          </div>
          {illustration && (
            <div className="flex justify-center md:justify-end">{illustration}</div>
          )}
        </div>
      </div>
    </section>
  );
}
