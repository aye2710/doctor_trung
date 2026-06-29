import { PageLayout } from "../components/PageLayout";
import { useActiveSection } from "../hooks/useActiveSection";
import { SectionReveal } from "../components/SectionReveal";
import { StaggerReveal, StaggerItem } from "../components/StaggerReveal";
import { Quote } from "lucide-react";
import { testimonials } from "../data/testimonials";

export function TrangCamNhan() {
  const activeSection = useActiveSection(["cam-nhan"]);

  return (
    <PageLayout activeSection={activeSection}>
      <div className="pt-[72px]">
        <SectionReveal id="cam-nhan" className="py-20 bg-background min-h-screen">
          <div className="max-w-[1280px] mx-auto px-6 md:px-8">

            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs uppercase tracking-[3px] font-semibold text-secondary">
                CẢM NHẬN BỆNH NHÂN
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary leading-tight mt-3 mb-4">
                Những chia sẻ từ người bệnh
              </h1>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                Hơn <strong className="text-primary">{testimonials.length}</strong> cảm nhận — mỗi câu chuyện là một hành trình vượt qua cơn đau.
              </p>
            </div>

            {/* Grid */}
            <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((item) => (
                <StaggerItem key={item.id}>
                  <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 text-left flex flex-col gap-4 h-full hover:border-secondary hover:shadow-md transition-all duration-300">

                    <Quote className="w-8 h-8 text-secondary/30 flex-shrink-0" />

                    <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light font-sans italic">
                      &ldquo;{item.content}&rdquo;
                    </p>

                    <div className="border-t border-border/60 pt-4 mt-auto">
                      <p className="text-sm font-semibold text-primary font-sans">
                        {item.name}
                      </p>
                      <p className="text-xs text-text-secondary/70 font-light">
                        {item.age} · {item.condition}
                      </p>
                    </div>

                  </div>
                </StaggerItem>
              ))}
            </StaggerReveal>

          </div>
        </SectionReveal>
      </div>
    </PageLayout>
  );
}