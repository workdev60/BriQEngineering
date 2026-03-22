import ScrollReveal from "./ScrollReveal";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "240+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Expert Engineers" },
];

const StatsBar = () => (
  <section className="bg-secondary text-secondary-foreground section-padding-sm">
    <div className="container-wide mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 80}>
            <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tabular-nums">
              {stat.value}
            </div>
            <div className="text-sm sm:text-base mt-1 opacity-70">{stat.label}</div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBar;
