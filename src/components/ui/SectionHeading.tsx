import { AnimateOnScroll } from "./AnimateOnScroll";

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <AnimateOnScroll className="mb-16 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
        {subtitle}
      </p>
    </AnimateOnScroll>
  );
}
