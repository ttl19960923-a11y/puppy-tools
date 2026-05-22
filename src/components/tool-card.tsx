type ToolCardProps = {
  href: string;
  title: string;
  description: string;
  icon?: string;
};

export default function ToolCard({
  href,
  title,
  description,
  icon = "🐶",
}: ToolCardProps) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-slate-200 bg-white p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xl">
        {icon}
      </div>

      <h2 className="line-clamp-2 text-lg font-bold leading-6 text-slate-900 transition-colors group-hover:text-blue-600">
        {title}
      </h2>

      <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </a>
  );
}