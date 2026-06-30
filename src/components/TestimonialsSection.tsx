import { Link } from "react-router-dom";
import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";
import { Quote, ArrowRight } from "lucide-react";
import { testimonials } from "../data/testimonials";

export function TestimonialsSection() {
  const featured = testimonials.slice(0, 3);

  return (
    <SectionReveal
      id="testimonials"
      className="py-20 bg-soft-blue relative"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            ĐÁNH GIÁ BỆNH NHÂN
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mt-2 mb-3">
            Người bệnh nói gì về hành trình điều trị?
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Những chia sẻ chân thực từ người bệnh đã đồng hành cùng Bác sĩ Trung trong quá trình kiểm soát cơn đau và phục hồi vận động.
          </p>
        </div>

        {/* Testimonials Grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featured.map((item) => (
            <StaggerItem key={item.id}>
              <div className="bg-surface border border-border rounded-[24px] p-6 md:p-8 text-left flex flex-col gap-4 h-full hover:border-primary-blue hover:shadow-md transition-all duration-300">

                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary-blue/30 flex-shrink-0" />

                {/* Content */}
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light italic">
                  &ldquo;{item.content}&rdquo;
                </p>

                {/* Divider */}
                <div className="border-t border-border/60 pt-4 mt-auto">
                  <p className="text-sm font-semibold text-medical-navy font-sans">
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

        {/* View All */}
        <div className="text-center mt-10">
          <Link
            to="/cam-nhan"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            Xem thêm đánh giá
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </SectionReveal>
  );
}