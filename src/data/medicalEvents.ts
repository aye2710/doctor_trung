export interface MedicalEvent {
  id: string;
  title: string;
  type: "Hội nghị" | "Diễn đàn" | "Hội thảo";
  date?: string;
  location?: string;
  summary: string;
  coverImage: string;
  images: {
    src: string;
    alt: string;
  }[];
}

export const medicalEvents: MedicalEvent[] = [
  {
    id: "event-01",
    title: "Báo cáo viên VNC 2024 — Hội nghị Đau toàn quốc",
    type: "Hội nghị",
    date: "2024",
    location: "Việt Nam",
    summary: "Tham gia với tư cách báo cáo viên, chia sẻ kinh nghiệm lâm sàng trong điều trị đau mạn tính bằng sóng cao tần và các phương pháp can thiệp giảm đau không xâm lấn.",
    coverImage: "/images/events/event-01/cover.jpg",
    images: [
      { src: "/images/events/event-01/img-1.jpg", alt: "Bác sĩ Trung trình bày báo cáo tại hội nghị VNC 2024" },
      { src: "/images/events/event-01/img-2.jpg", alt: "Thảo luận chuyên môn cùng các đồng nghiệp tại VNC 2024" },
      { src: "/images/events/event-01/img-3.jpg", alt: "Ảnh chụp cùng ban tổ chức hội nghị VNC 2024" },
      { src: "/images/events/event-01/img-4.jpg", alt: "Bác sĩ Trung tại gian trưng bày thiết bị y khoa" }
    ]
  },
  {
    id: "event-02",
    title: "Báo cáo viên VNC 2025 — Hội nghị Đau toàn quốc",
    type: "Hội nghị",
    date: "2025",
    location: "Việt Nam",
    summary: "Tiếp tục tham gia với tư cách báo cáo viên, cập nhật các tiến bộ mới trong điều trị đau và chia sẻ ca lâm sàng ứng dụng PRF trong thực hành.",
    coverImage: "/images/events/event-02/cover.jpg",
    images: [
      { src: "/images/events/event-02/img-1.jpg", alt: "Bác sĩ Trung phát biểu tại hội nghị VNC 2025" },
      { src: "/images/events/event-02/img-2.jpg", alt: "Trao đổi chuyên môn cùng hội đồng khoa học VNC 2025" },
      { src: "/images/events/event-02/img-3.jpg", alt: "Tham dự phiên thảo luận chuyên đề tại VNC 2025" },
      { src: "/images/events/event-02/img-4.jpg", alt: "Bác sĩ Trung chụp ảnh cùng các đại biểu tham dự" },
      { src: "/images/events/event-02/img-5.jpg", alt: "Trình bày nghiên cứu ca lâm sàng điều trị đau" },
      { src: "/images/events/event-02/img-6.jpg", alt: "Bác sĩ Trung tại khu vực hội thảo chuyên ngành" },
      { src: "/images/events/event-02/img-7.jpg", alt: "Giao lưu cùng các chuyên gia đầu ngành" }
    ]
  },
  {
    id: "event-03",
    title: "Hội nghị Đau Quốc tế — Thái Lan 2024",
    type: "Hội nghị",
    date: "2024",
    location: "Thái Lan",
    summary: "Tham dự hội nghị quốc tế chuyên ngành Đau tại Thái Lan, trao đổi kinh nghiệm cùng các chuyên gia hàng đầu trong khu vực về các phương pháp điều trị đau mạn tính tiên tiến.",
    coverImage: "/images/events/event-03/cover.jpg",
    images: [
      { src: "/images/events/event-03/img-1.jpg", alt: "Bác sĩ Trung tại Hội nghị Đau Quốc tế Thái Lan 2024" },
      { src: "/images/events/event-03/img-2.jpg", alt: "Tham gia phiên thảo luận chuyên môn quốc tế" },
      { src: "/images/events/event-03/img-3.jpg", alt: "Chụp ảnh cùng các chuyên gia quốc tế tại Thái Lan" },
      { src: "/images/events/event-03/img-4.jpg", alt: "Bác sĩ Trung tại khu vực hội nghị" }
    ]
  },
  {
    id: "event-04",
    title: "The 4th Evolution of PRF Symposium — Hà Lan-Pháp",
    type: "Diễn đàn",
    date: "11/2025",
    location: "Hà Lan - Pháp",
    summary: "Tham gia khóa đào tạo chuyên sâu về PRF (Pulsed Radiofrequency) đạt chuẩn CME Châu Âu (6.0 CME), cập nhật các kỹ thuật can thiệp tiên tiến nhất trong điều trị đau.",
    coverImage: "/images/events/event-04/cover.jpg",
    images: [
      { src: "/images/events/event-04/img-1.jpg", alt: "Bác sĩ Trung tại PRF Symposium Hà Lan-Pháp" },
      { src: "/images/events/event-04/img-2.jpg", alt: "Thực hành kỹ thuật PRF dưới hướng dẫn chuyên gia" },
      { src: "/images/events/event-04/img-3.jpg", alt: "Chụp ảnh cùng giảng viên quốc tế tại khóa đào tạo" },
      { src: "/images/events/event-04/img-4.jpg", alt: "Bác sĩ Trung tham gia thảo luận chuyên môn" },
      { src: "/images/events/event-04/img-5.jpg", alt: "Hoạt động thực hành lâm sàng tại PRF Symposium" },
      { src: "/images/events/event-04/img-6.jpg", alt: "Trao đổi cùng chuyên gia đầu ngành về PRF" },
      { src: "/images/events/event-04/img-7.jpg", alt: "Bác sĩ Trung tại phòng thực hành kỹ thuật" },
      { src: "/images/events/event-04/img-8.jpg", alt: "Chứng nhận tham dự PRF Symposium Châu Âu" },
      { src: "/images/events/event-04/img-9.jpg", alt: "Giao lưu cùng đồng nghiệp quốc tế" },
      { src: "/images/events/event-04/img-10.jpg", alt: "Bác sĩ Trung tại buổi tổng kết khóa đào tạo" }
    ]
  },
  {
    id: "event-05",
    title: "Hội nghị Phẫu thuật Thần kinh Việt Nam",
    type: "Hội nghị",
    date: "2024-2025",
    location: "Việt Nam",
    summary: "Tham gia chuỗi hội nghị Phẫu thuật Thần kinh Việt Nam (lần 23, 24 và Hội nghị Trẻ), cập nhật các tiến bộ trong điều trị đau và kết nối với mạng lưới chuyên gia y khoa trong nước.",
    coverImage: "/images/events/event-05/cover.png",
    images: [
      { src: "/images/events/event-05/img-1.png", alt: "Chứng nhận tham gia Hội nghị PT Thần kinh VN lần thứ 23" },
      { src: "/images/events/event-05/img-2.png", alt: "Chứng nhận tham gia Hội nghị PT Thần kinh Trẻ Việt Nam" }
    ]
  }
];
