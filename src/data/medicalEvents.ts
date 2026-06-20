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
    title: "[Tên hội nghị thường niên Cơ Xương Khớp toàn quốc]",
    type: "Hội nghị",
    date: "[Thời gian diễn ra 01]",
    location: "[Địa điểm diễn ra 01]",
    summary: "Tham gia trao đổi chuyên môn, thảo luận về các nghiên cứu lâm sàng mới nhất và cập nhật xu hướng điều trị bảo tồn các bệnh lý thoái hóa khớp gối giai đoạn sớm.",
    coverImage: "/images/events/event-01/cover.jpg",
    images: [
      { src: "/images/events/event-01/img-1.jpg", alt: "Bác sĩ tham gia báo cáo tại hội trường lớn" },
      { src: "/images/events/event-01/img-2.jpg", alt: "Thảo luận chuyên môn cùng hội đồng y khoa" },
      { src: "/images/events/event-01/img-3.jpg", alt: "Ảnh chụp cùng các đồng nghiệp tại hội nghị" }
    ]
  },
  {
    id: "event-02",
    title: "[Tên diễn đàn Y khoa Quốc tế về Điều trị Cơ Xương Khớp]",
    type: "Diễn đàn",
    date: "[Thời gian diễn ra 02]",
    location: "[Địa điểm diễn ra 02]",
    summary: "Trao đổi kinh nghiệm cùng các chuyên gia quốc tế về kỹ thuật can thiệp khớp ít xâm lấn và quản lý đau cột sống cho người bệnh trung và cao tuổi.",
    coverImage: "/images/events/event-02/cover.jpg",
    images: [
      { src: "/images/events/event-02/img-1.jpg", alt: "Phát biểu ý kiến tại diễn đàn trao đổi chuyên môn" },
      { src: "/images/events/event-02/img-2.jpg", alt: "Tham khảo các thiết bị y tế chẩn đoán hình ảnh thế hệ mới" },
      { src: "/images/events/event-02/img-3.jpg", alt: "Buổi tọa đàm bàn tròn chuyên đề đau khớp gối" }
    ]
  },
  {
    id: "event-03",
    title: "[Tên hội thảo Cập nhật điều trị loãng xương lâm sàng]",
    type: "Hội thảo",
    date: "[Thời gian diễn ra 03]",
    location: "[Địa điểm diễn ra 03]",
    summary: "Cập nhật các phác đồ y khoa hiện đại trong phòng ngừa và điều trị loãng xương, hạn chế rủi ro xẹp lún cột sống ở người lớn tuổi.",
    coverImage: "/images/events/event-03/cover.jpg",
    images: [
      { src: "/images/events/event-03/img-1.jpg", alt: "Trình bày bài chia sẻ thực hành lâm sàng tại bệnh viện" },
      { src: "/images/events/event-03/img-2.jpg", alt: "Bác sĩ hướng dẫn thực hành kỹ năng siêu âm khớp" },
      { src: "/images/events/event-03/img-3.jpg", alt: "Giải đáp thắc mắc chuyên môn trong buổi hội thảo" }
    ]
  },
  {
    id: "event-04",
    title: "[Tên hội nghị Y học thể thao & Phục hồi vận động]",
    type: "Hội nghị",
    date: "[Thời gian diễn ra 04]",
    location: "[Địa điểm diễn ra 04]",
    summary: "Nghiên cứu ứng dụng các phương pháp phục hồi chức năng vận động chủ động kết hợp với điều trị nội khoa cho bệnh nhân bị tổn thương cơ và khớp dây chằng.",
    coverImage: "/images/events/event-04/cover.jpg",
    images: [
      { src: "/images/events/event-04/img-1.jpg", alt: "Tham gia thảo luận về chấn thương thể thao" },
      { src: "/images/events/event-04/img-2.jpg", alt: "Trao đổi chuyên sâu cùng chuyên gia phục hồi chức năng" },
      { src: "/images/events/event-04/img-3.jpg", alt: "Quan sát các bài tập phục hồi chức năng chuẩn y khoa" }
    ]
  },
  {
    id: "event-05",
    title: "[Tên hội thảo Đào tạo can thiệp giảm đau cột sống]",
    type: "Hội thảo",
    date: "[Thời gian diễn ra 05]",
    location: "[Địa điểm diễn ra 05]",
    summary: "Đào tạo thực hành kỹ năng chọc hút, tiêm khớp dưới hướng dẫn của siêu âm để tăng cường hiệu quả giảm đau cột sống và các khớp lớn.",
    coverImage: "/images/events/event-05/cover.jpg",
    images: [
      { src: "/images/events/event-05/img-1.jpg", alt: "Thực hành lâm sàng sử dụng máy siêu âm khớp" },
      { src: "/images/events/event-05/img-2.jpg", alt: "Lớp học thực hành kỹ thuật tiêm giảm đau cột sống" },
      { src: "/images/events/event-05/img-3.jpg", alt: "Chụp ảnh lưu niệm nhận chứng chỉ hoàn thành khóa đào tạo" }
    ]
  }
];
