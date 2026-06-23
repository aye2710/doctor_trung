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
    subtitle: "Bác sĩ Trung chuyên khoa Điều trị Đau",
    image: "/images/doctor/doctor-portrait.png",
    alt: "Ảnh chân dung chính thức của Bác sĩ Đàm Quang Trung mặc áo blouse chuyên môn"
  },
  {
    id: "doctor-profile",
    index: "02",
    title: "Chuyên Khoa",
    subtitle: "Điều trị đau & Gây mê hồi sức",
    image: "/images/story/doctor-profile.jpg",
    alt: "Bác sĩ Trung đang trao đổi lâm sàng trong môi trường bệnh viện chuyên nghiệp"
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
    alt: "Mô tả biểu tượng các chứng chỉ đào tạo y học chuyên ngành điều trị đau uy tín"
  },
  {
    id: "events",
    index: "05",
    title: "Kết Nối",
    subtitle: "Hội nghị, diễn đàn chuyên ngành trong nước & quốc tế",
    image: "/images/story/medical-conference.jpg",
    alt: "Bác sĩ Trung tham gia phát biểu trao đổi khoa học tại hội nghị chuyên ngành điều trị đau"
  },
  {
    id: "pain-points",
    index: "06",
    title: "Thấu Cảm",
    subtitle: "Lắng nghe nỗi đau đồng hành cùng người bệnh",
    image: "/images/story/body-joints.jpg",
    alt: "Hình vẽ đồ họa tối giản minh họa các vị trí đau nhức thường gặp trên cơ thể"
  },
  {
    id: "philosophy",
    index: "07",
    title: "Triết Lý",
    subtitle: "Điều trị đau không xâm lấn, không phẫu thuật",
    image: "/images/story/treatment-philosophy.jpg",
    alt: "Hình ảnh minh họa triết lý điều trị đau không xâm lấn, lấy người bệnh làm trung tâm"
  },
  {
    id: "journey",
    index: "08",
    title: "Quy Trình",
    subtitle: "Hành trình thăm khám điều trị đau chính quy",
    image: "/images/story/rehabilitation.jpg",
    alt: "Bác sĩ thực hiện thăm khám lâm sàng và tư vấn phác đồ điều trị cho người bệnh"
  },
  {
    id: "knowledge",
    index: "09",
    title: "Kiến Thức",
    subtitle: "Góc chia sẻ kiến thức điều trị đau bổ ích",
    image: "/images/story/medical-education.jpg",
    alt: "Bác sĩ Trung đang viết bài chia sẻ y khoa, tài liệu hướng dẫn chăm sóc sức khỏe chủ động"
  },
  {
    id: "booking",
    index: "10",
    title: "Đồng Hành",
    subtitle: "Hướng dẫn đặt lịch khám tại Bệnh viện Bưu Điện",
    image: "/images/story/healthy-walking.jpg",
    alt: "Góc chụp nghệ thuật mô tả bước đi khỏe mạnh, vững vàng của một bệnh nhân đã phục hồi sau điều trị"
  }
];
