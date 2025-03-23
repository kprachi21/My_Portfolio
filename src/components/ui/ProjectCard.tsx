
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageSrc?: string;
  className?: string;
  style?: CSSProperties;
}

export default function ProjectCard({
  title,
  description,
  tags,
  imageSrc,
  className,
  style,
}: ProjectProps) {
  return (
    <div 
      className={cn(
        "group p-6 rounded-xl border border-border bg-card hover:shadow-soft transition-all duration-300 animate-hidden animate-slide-in-up",
        className
      )}
      style={style}
    >
      {imageSrc && (
        <div className="mb-4 h-40 overflow-hidden rounded-lg">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <h3 className="text-xl font-display font-medium group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="mt-3 text-muted-foreground">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="inline-block px-2 py-1 text-xs rounded-md bg-secondary text-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
