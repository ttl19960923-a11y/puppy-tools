type ToolCardProps = {
  href: string;
  title: string;
  description: string;
};

export default function ToolCard({
  href,
  title,
  description,
}: ToolCardProps) {
  return (
    <a
      href={href}
      className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:border-blue-500 hover:shadow-md"
    >
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p className="mt-3 text-slate-600">
        {description}
      </p>
    </a>
  );
}