import { SectionReveal } from "./SectionReveal";
import { StaggerReveal, StaggerItem } from "./StaggerReveal";

interface PainPoint {
  num: string;
  title: string;
  desc: string;
}

export function PainPointsSection() {
  const painPoints: PainPoint[] = [
    {
      num: "01",
      title: "Đau khớp gối",
      desc: "Những cơn đau âm ỉ tăng lên khi lên xuống cầu thang, xuất hiện tiếng lục khục khi co duỗi, gây cản trở các hoạt động đi lại hàng ngày."
    },
    {
      num: "02",
      title: "Đau vai gáy",
      desc: "Cảm giác đau mỏi ê ẩm vùng cổ vai, đôi khi lan xuống bả vai, gây tê bì cánh tay và hạn chế tầm vận động quay đầu khi làm việc."
    },
    {
      num: "03",
      title: "Đau cột sống",
      desc: "Đau mỏi thắt lưng sau khi ngồi hoặc đứng lâu, đau nhói khi cúi người hoặc mang vác vật nặng, làm giảm đáng kể hiệu suất lao động."
    },
    {
      num: "04",
      title: "Thoát vị đĩa đệm",
      desc: "Nhân nhầy đĩa đệm lệch khỏi vị trí chèn ép rễ thần kinh, gây ra các cơn đau buốt lan dọc xuống mông, đùi hoặc chân kèm cảm giác tê râm ran."
    },
    {
      num: "05",
      title: "Thoái hóa khớp",
      desc: "Sự bào mòn sụn khớp tự nhiên theo thời gian, gây viêm sưng khớp định kỳ, làm mất đi sự trơn tru linh hoạt trong các cử động cơ bản."
    },
    {
      num: "06",
      title: "Hạn chế vận động",
      desc: "Cơ thể giảm dần khả năng linh hoạt vật lý, người bệnh bắt đầu e ngại di chuyển, gây suy giảm cơ bắp và ảnh hưởng gián tiếp đến tinh thần."
    }
  ];

  return (
    <SectionReveal
      id="pain-points"
      className="py-20 bg-background relative border-b border-border"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest font-mono text-medical-blue font-bold">
            NHỮNG VẤN ĐỀ THƯỜNG GẶP
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-medical-navy italic tracking-tight leading-tight mt-2 mb-4">
            Cơn đau không chỉ ảnh hưởng đến khớp, mà còn làm thay đổi cách người bệnh sống mỗi ngày.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed font-light">
            Mỗi biểu hiện bất thường của khớp hay cột sống là một tín hiệu từ cơ thể. Thấu hiểu đúng bản chất cơn đau giúp định hướng phương pháp chăm sóc y khoa kịp thời và chính xác.
          </p>
        </div>

        {/* 6 Pain Point Cards grid */}
        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {painPoints.map((point) => (
            <StaggerItem key={point.num}>
              <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-primary-blue flex flex-col gap-4 group h-full">
                
                {/* Blue ordinal number */}
                <span className="text-3xl font-serif italic text-primary-blue/80 font-bold">
                  {point.num}
                </span>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-serif italic text-medical-navy font-bold group-hover:text-primary-blue transition-colors">
                  {point.title}
                </h3>

                {/* Patient empathetic description */}
                <p className="text-sm md:text-base text-text-secondary leading-relaxed font-light font-sans">
                  {point.desc}
                </p>

              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

      </div>
    </SectionReveal>
  );
}
