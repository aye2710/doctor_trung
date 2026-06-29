import { SectionReveal } from "./SectionReveal";

const painPoints = [
  {
    title: "Đau cổ vai gáy",
    image: "/images/pain-points/pain-neck.webp",
    details: [
      "Đau mỏi âm ỉ vùng cổ, lan xuống vai gáy và cánh tay",
      "Hạn chế tầm vận động quay đầu, khó quay sang hai bên",
      "Tê bì hoặc yếu cơ vùng vai, cánh tay khi kéo dài",
      "Đau tăng lên sau khi ngồi làm việc lâu hoặc ngủ sai tư thế",
    ],
  },
  {
    title: "Đau dây thần kinh",
    image: "/images/pain-points/pain-nerve.jpg",
    details: [
      "Đau nhói, đau rát dọc theo đường đi của dây thần kinh",
      "Tê bì, cảm giác như kiến bò hoặc kim châm",
      "Đau lan tỏa từ cột sống ra các chi",
      "Có thể kèm yếu cơ hoặc teo cơ nếu không điều trị kịp thời",
    ],
  },
  {
    title: "Đau xương cụt",
    image: "/images/pain-points/pain-coccyx.avif",
    details: [
      "Đau nhức vùng xương cụt khi ngồi lâu trên bề mặt cứng",
      "Khó chịu khi đứng lên hoặc nghiêng người về phía sau",
      "Đau tăng khi ngồi xổm hoặc cúi người về phía trước",
      "Ảnh hưởng đến sinh hoạt và công việc hàng ngày",
    ],
  },
  {
    title: "Đau sau Zona",
    image: "/images/pain-points/pain-zona.webp",
    details: [
      "Cơn đau rát bỏng dai dẳng sau khi tổn thương da đã lành",
      "Đau kéo dài nhiều tháng, có thể hàng năm sau Zona thần kinh",
      "Da vùng tổn thương trở nên nhạy cảm, chạm nhẹ cũng thấy đau",
      "Gây mất ngủ, lo âu và suy giảm chất lượng cuộc sống nghiêm trọng",
    ],
  },
];

export function PainPointsSection() {
  return (
    <SectionReveal
      id="pain-points"
      className="py-20 bg-background relative border-b border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[3px] font-semibold text-secondary">
            TRIỆU CHỨNG THƯỜNG GẶP
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary leading-tight mt-2 mb-4">
            Cơn đau không chỉ ảnh hưởng đến sức khỏe, mà còn làm thay đổi cách người bệnh sống mỗi ngày.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Mỗi biểu hiện bất thường của cơ thể là một tín hiệu. Thấu hiểu đúng bản chất cơn đau giúp định hướng phương pháp chăm sóc y khoa kịp thời và chính xác.
          </p>
        </div>

        {/* Pain Point Rows */}
        <div className="flex flex-col gap-10">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-10"
            >
              {/* Image Frame */}
              <div className="w-full md:w-[400px] shrink-0">
                <div className="bg-white rounded-2xl p-3 shadow-lg border border-border/50">
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={point.image}
                      alt={point.title}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Detail Card */}
              <div className="flex-1 bg-surface border border-border rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4">
                  {point.title}
                </h3>
                <ul className="space-y-3">
                  {point.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm md:text-base text-text-secondary leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionReveal>
  );
}