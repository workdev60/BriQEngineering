import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "15+", label: "Years in the industry" },
  { value: "240+", label: "Projects completed" },
  { value: "98%", label: "Client satisfaction" },
  { value: "50+", label: "Team experts" },
];

const StatsBar = () => (
  <section className="section-spacing-sm border-t border-border">
    <div className="container-site px-5 sm:px-8 lg:px-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 80}>
            <div>
              <p className="label-sm mb-3">{stat.label}</p>
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.04em] tabular-nums">{stat.value}</p>
            </div>
            {i < stats.length - 1 && <div className="divider mt-8 hidden lg:block" />}
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
