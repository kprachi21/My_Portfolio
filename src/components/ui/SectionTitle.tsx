
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  align = "left",
  className,
}: SectionTitleProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn("mb-10", alignClass[align], className)}>
      <h2 className="text-3xl md:text-4xl font-display font-medium animate-hidden animate-slide-in-up">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-lg text-muted-foreground animate-hidden animate-slide-in-up animate-delay-100">
          {subtitle}
        </p>
      )}
    </div>
  );
}
