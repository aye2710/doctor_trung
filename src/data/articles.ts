export interface Article {
  id: string;
  title: string;
  category: string;
  summary: string;
  coverImage: string;
  date: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: "art-01",
    title: "5 dấu hiệu thoái hóa khớp gối cần chú ý",
    category: "Thoái hóa khớp",
    summary: "Thoái hóa khớp gối phát triển thầm lặng. Nhận biết sớm các triệu chứng như cứng khớp buổi sáng, tiếng kêu lục khục hay đau tăng khi lên xuống cầu thang giúp phòng tránh biến chứng nguy hiểm.",
    coverImage: "/images/story/healthy-walking.jpg",
    date: "15/06/2026",
    readTime: "5 phút đọc"
  },
  {
    id: "art-02",
    title: "Khi nào đau lưng kéo dài cần đi khám bác sĩ xương khớp?",
    category: "Đau cột sống",
    summary: "Nhiều người thường chủ quan tự mua thuốc giảm đau khi bị đau lưng. Bài viết chỉ ra các dấu hiệu báo động đỏ như đau lan xuống chân, tê bì, hoặc đau nhiều về đêm cần gặp bác sĩ chuyên khoa ngay lập tức.",
    coverImage: "/images/story/doctor-working.jpg",
    date: "10/06/2026",
    readTime: "6 phút đọc"
  },
  {
    id: "art-03",
    title: "Đau vai gáy do đâu và cần xử lý thế nào cho đúng cách?",
    category: "Bệnh lý cột sống cổ",
    summary: "Đau mỏi vai gáy là căn bệnh văn phòng phổ biến. Tìm hiểu nguyên nhân từ tư thế làm việc sai lệch đến các bệnh lý thực thể như thoát vị đĩa đệm cổ và các giải pháp điều trị, bài tập phục hồi hiệu quả.",
    coverImage: "/images/story/body-joints.jpg",
    date: "05/06/2026",
    readTime: "4 phút đọc"
  },
  {
    id: "art-04",
    title: "Cách vận động phù hợp cho người đang gặp các vấn đề về khớp",
    category: "Phục hồi vận động",
    summary: "Đau khớp không đồng nghĩa với việc ngưng hoạt động hoàn toàn. Lựa chọn các bộ môn tác động thấp như bơi lội, đạp xe hoặc yoga trị liệu giúp bôi trơn khớp, tăng cơ quanh khớp và hỗ trợ giảm đau an toàn.",
    coverImage: "/images/story/rehabilitation.jpg",
    date: "28/05/2026",
    readTime: "5 phút đọc"
  },
  {
    id: "art-05",
    title: "Những hiểu lầm thường gặp về bệnh lý đau cột sống thắt lưng",
    category: "Góc cảnh giác y khoa",
    summary: "Phân tích các quan niệm sai lầm phổ biến như nằm đệm cứng hoàn toàn là tốt cho lưng, bị đau lưng thì phải mổ, hoặc tự ý nắn chỉnh cột sống không theo chỉ định của bác sĩ chuyên khoa Cơ Xương Khớp.",
    coverImage: "/images/story/treatment-philosophy.jpg",
    date: "20/05/2026",
    readTime: "7 phút đọc"
  },
  {
    id: "art-06",
    title: "Khi nào bạn cần tiến hành kiểm tra loãng xương định kỳ?",
    category: "Loãng xương",
    summary: "Loãng xương được coi là kẻ giết người thầm lặng vì không có triệu chứng rõ rệt cho đến khi xảy ra gãy xương. Nhận biết độ tuổi, các yếu tố nguy cơ và thời điểm thích hợp để đo mật độ xương.",
    coverImage: "/images/story/medical-education.jpg",
    date: "12/05/2026",
    readTime: "4 phút đọc"
  }
];
