
import { cn } from "@/lib/utils";

export interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string[];
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("space-y-10", className)}>
      {items.map((item, index) => (
        <div 
          key={`${item.title}-${index}`} 
          className="relative pl-8 border-l border-border animate-hidden animate-slide-in-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          </div>
          
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-xl font-medium font-display">{item.title}</h3>
              <span className="text-sm text-muted-foreground">{item.date}</span>
            </div>
            <p className="text-muted-foreground mb-3">{item.subtitle}</p>
            <ul className="space-y-2">
              {item.description.map((bullet, idx) => (
                <li key={idx} className="flex">
                  <span className="mr-2">●</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {item.tags && (
              <div className="flex flex-wrap gap-2 mt-3">
                {item.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="inline-block px-2 py-1 text-xs rounded-md bg-secondary text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
