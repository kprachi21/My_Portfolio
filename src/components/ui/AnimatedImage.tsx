
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export default function AnimatedImage({
  src,
  alt,
  className,
  imgClassName,
}: AnimatedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setIsLoaded(true);
    };
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full transition-all duration-700",
          isLoaded ? "opacity-100 animate-image-reveal" : "opacity-0 blur-md",
          imgClassName || "object-cover"
        )}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse"></div>
      )}
    </div>
  );
}
