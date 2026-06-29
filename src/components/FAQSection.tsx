import { SectionReveal } from "./SectionReveal";

const faqs = [
  {
    q: "Bác sĩ có khám ngoài giờ không?",
    a: "Bác sĩ Trung khám theo lịch của Bệnh viện Bưu Điện (Thứ Hai - Thứ Sáu). Bạn nên đặt lịch trước để được sắp xếp thời gian phù hợp."
  },
  {
    q: "Có cần phẫu thuật không?",
    a: "Bác sĩ ưu tiên điều trị không phẫu thuật bằng các phương pháp can thiệp ít xâm lấn như sóng cao tần RF/PRF, TMS, block thần kinh. Phẫu thuật chỉ được cân nhắc khi thật sự cần thiết."
  },
  {
    q: "Chi phí khám và điều trị như thế nào?",
    a: "Chi phí theo đúng quy định của Bệnh viện Bưu Điện và bảo hiểm y tế. Bạn nên mang theo thẻ BHYT khi đi khám để được hưởng quyền lợi."
  },
  {
    q: "Điều trị đau cổ vai gáy mất bao lâu?",
    a: "Tùy theo mức độ và nguyên nhân, thông thường sau 1-2 lần can thiệp, bệnh nhân sẽ cải thiện rõ rệt. Bác sĩ sẽ xây dựng phác đồ cụ thể sau khi thăm khám."
  },
  {
    q: "Tôi có thể đặt lịch qua Zalo được không?",
    a: "Có. Bạn có thể Chat Zalo hoặc Gọi trực tiếp qua số 097561215 để được hướng dẫn đặt lịch khám."
  }
];

export function FAQSection() {
  return (
    <SectionReveal id="faq" className="py-20 bg-background">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-base uppercase tracking-[3px] font-semibold text-secondary">
            HỎI ĐÁP
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary leading-tight mt-2 mb-3">
            Những câu hỏi thường gặp
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-200 hover:border-primary/20">
              <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                <span className="text-sm md:text-base font-semibold text-text-primary pr-4">
                  {faq.q}
                </span>
                <span className="text-xl text-text-secondary/50 group-open:rotate-180 transition-transform duration-200 flex-shrink-0">
                  +
                </span>
              </summary>
              <div className="px-5 pb-5 border-t border-border pt-4">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}