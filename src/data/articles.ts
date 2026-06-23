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
    title: "Đau mạn tính là gì? Khi nào bạn nên gặp bác sĩ điều trị đau?",
    category: "Đau mạn tính",
    summary: "Đau mạn tính kéo dài trên 3 tháng, ảnh hưởng nghiêm trọng đến chất lượng cuộc sống. Tìm hiểu các dấu hiệu nhận biết và khi nào cần can thiệp chuyên khoa điều trị đau.",
    coverImage: "/images/story/healthy-walking.jpg",
    date: "15/06/2026",
    readTime: "5 phút đọc"
  },
  {
    id: "art-02",
    title: "Sóng cao tần RF/PRF là gì? Giải pháp điều trị đau không phẫu thuật",
    category: "Công nghệ y khoa",
    summary: "RF (Radiofrequency) và PRF (Pulsed Radiofrequency) là phương pháp can thiệp giảm đau tiên tiến, ứng dụng sóng cao tần tác động lên dây thần kinh giúp giảm đau mạn tính mà không cần phẫu thuật.",
    coverImage: "/images/story/ezgif-1-85f73d73c5.gif",
    date: "10/06/2026",
    readTime: "6 phút đọc"
  },
  {
    id: "art-03",
    title: "Đau cổ vai gáy do đâu và khi nào cần điều trị chuyên sâu?",
    category: "Đau cột sống cổ",
    summary: "Đau mỏi vai gáy kéo dài có thể là dấu hiệu của tổn thương thần kinh. Bài viết phân tích nguyên nhân và các phương pháp điều trị từ cơ bản đến can thiệp chuyên sâu.",
    coverImage: "/images/story/body-joints.jpg",
    date: "05/06/2026",
    readTime: "4 phút đọc"
  },
  {
    id: "art-04",
    title: "TMS (Từ trường xuyên sọ) — Phương pháp mới trong điều trị đau",
    category: "Phương pháp điều trị",
    summary: "TMS kích thích từ trường lên vỏ não, giúp điều chỉnh các tín hiệu đau. Đây là lựa chọn điều trị không xâm lấn, không dùng thuốc cho nhiều bệnh lý đau mạn tính.",
    coverImage: "/images/story/rehabilitation.jpg",
    date: "28/05/2026",
    readTime: "5 phút đọc"
  },
  {
    id: "art-05",
    title: "Đau sau Zona thần kinh: Biến chứng cần được điều trị sớm",
    category: "Góc cảnh giác y khoa",
    summary: "Đau sau Zona là biến chứng thường gặp khi virus thủy đậu tái hoạt động, gây đau kéo dài. Phát hiện và can thiệp sớm giúp ngăn ngừa chuyển sang đau mạn tính khó điều trị.",
    coverImage: "/images/story/treatment-philosophy.jpg",
    date: "20/05/2026",
    readTime: "7 phút đọc"
  },
  {
    id: "art-06",
    title: "Đau dây thần kinh chẩm: Triệu chứng và hướng điều trị hiệu quả",
    category: "Bệnh lý thần kinh",
    summary: "Đau dây thần kinh chẩm gây đau nhức vùng đầu và cổ, dễ nhầm với đau đầu thông thường. Các phương pháp chẩn đoán và điều trị từ nội khoa đến can thiệp block thần kinh.",
    coverImage: "/images/story/medical-education.jpg",
    date: "12/05/2026",
    readTime: "4 phút đọc"
  }
];
