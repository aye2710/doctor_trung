export interface StoryVisualItem {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
}

export const storyVisuals: StoryVisualItem[] = [
  {
    id: "home",
    index: "01",
    title: "Khởi Đầu",
    subtitle: "Bác sĩ Trung chuyên khoa Cơ Xương Khớp",
    image: "/images/doctor/doctor-portrait.jpg",
    alt: "Ảnh chân dung chính thức của Bác sĩ Trung mặc áo blouse chuyên môn"
  },
  {
    id: "doctor-profile",
    index: "02",
    title: "Chuyên Khoa",
    subtitle: "Lâm sàng & Học thuật chuyên sâu",
    image: "/images/story/doctor-profile.jpg",
    alt: "Bác sĩ Trung đang trao đổi công việc lâm sàng trong môi trường bệnh viện chuyên nghiệp"
  },
  {
    id: "career-story",
    index: "03",
    title: "Hành Trình",
    subtitle: "Những cột mốc cống hiến y học",
    image: "/images/story/doctor-career.jpg",
    alt: "Hình ảnh phản chiếu hành trình cống hiến, nghiên cứu y khoa lâm sàng nhiều năm qua"
  },
  {
    id: "certificates",
    index: "04",
    title: "Bảo Chứng",
    subtitle: "Chứng nhận chuyên môn cao cấp",
    image: "/images/story/doctor-certificates.jpg",
    alt: "Mô tả biểu tượng các chứng chỉ đào tạo y học chuyên ngành cơ xương khớp uy tín"
  },
  {
    id: "events",
    index: "05",
    title: "Kết Nối",
    subtitle: "Hội nghị, diễn đàn chuyên ngành",
    image: "/images/story/medical-conference.jpg",
    alt: "Bác sĩ Trung tham gia phát biểu trao đổi khoa học tại hội thảo y học cơ xương khớp"
  },
  {
    id: "pain-points",
    index: "06",
    title: "Thấu Cảm",
    subtitle: "Lắng nghe nỗi đau của khớp và cột sống",
    image: "/images/story/body-joints.jpg",
    alt: "Hình vẽ đồ họa tối giản về cấu trúc các khớp xương vận động và vị trí đau nhức của cơ thể"
  },
  {
    id: "philosophy",
    index: "07",
    title: "Triết Lý",
    subtitle: "Đồng hành phục hồi vận động bền vững",
    image: "/images/story/treatment-philosophy.jpg",
    alt: "Hình ảnh bác sĩ Trung đang hướng dẫn bài tập vận động, giải thích mô hình khớp cột sống"
  },
  {
    id: "journey",
    index: "08",
    title: "Quy Trình",
    subtitle: "Hành trình thăm khám y khoa chính quy",
    image: "/images/story/rehabilitation.jpg",
    alt: "Bác sĩ thực hiện thăm khám lâm sàng, gõ khớp và kiểm tra tầm vận động cho bệnh nhân"
  },
  {
    id: "knowledge",
    index: "09",
    title: "Kiến Thức",
    subtitle: "Góc chia sẻ kiến thức xương khớp bổ ích",
    image: "/images/story/medical-education.jpg",
    alt: "Bác sĩ Trung đang viết bài chia sẻ y khoa, tài liệu hướng dẫn chăm sóc sức khỏe chủ động"
  },
  {
    id: "booking",
    index: "10",
    title: "Đồng Hành",
    subtitle: "Hướng dẫn đặt lịch khám bệnh viện chính thức",
    image: "/images/story/healthy-walking.jpg",
    alt: "Góc chụp nghệ thuật mô tả bước đi khỏe mạnh, vững vàng của một bệnh nhân lớn tuổi đã phục hồi"
  }
];
