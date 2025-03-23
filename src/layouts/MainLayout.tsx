
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  // Initiate intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-up");
            entry.target.classList.remove("animate-hidden");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    document.querySelectorAll(".animate-hidden").forEach((element) => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".animate-hidden").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="py-6 bg-background border-t border-border">
          <div className="container-tight text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Prachi Khopkar. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
