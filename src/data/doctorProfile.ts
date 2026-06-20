export interface DoctorProfile {
  fullName: string;
  degree: string;
  hospitalTitle: string;
  specialty: string;
  hospital: string;
  experience?: string;
  languages?: string[];
  focusAreas: string[];
  shortIntroduction: string;
  fullIntroduction: string[];
  quote?: string;
  portraitImage: string;
  workingImage?: string;
}

export const doctorProfile: DoctorProfile = {
  fullName: "[Họ và tên bác sĩ]",
  degree: "[Học vị]",
  hospitalTitle: "[Chức danh tại bệnh viện]",
  specialty: "Cơ Xương Khớp",
  hospital: "[Tên bệnh viện]",
  experience: "15+ năm kinh nghiệm lâm sàng",
  languages: ["Tiếng Việt", "Tiếng Anh"],
  focusAreas: [
    "Thăm khám & Điều trị thoái hóa khớp gối, khớp háng",
    "Kiểm soát cơn đau cột sống cổ, cột sống thắt lưng",
    "Chẩn đoán & Điều trị bảo tồn thoát vị đĩa đệm",
    "Tư vấn phục hồi chức năng & Vận động chủ động"
  ],
  shortIntroduction:
    "Bác sĩ Trung tập trung thăm khám và điều trị các bệnh lý Cơ Xương Khớp, đồng thời đồng hành cùng người bệnh trong quá trình kiểm soát cơn đau, phục hồi vận động và duy trì chất lượng cuộc sống.",
  fullIntroduction: [
    "Với sự tận tâm trong thực hành y khoa, Bác sĩ Trung luôn chú trọng việc lắng nghe để thấu hiểu sâu sắc từng biểu hiện đau đớn và khó khăn trong vận động của người bệnh. Từ đó, bác sĩ đưa ra những phác đồ điều trị cá nhân hóa tối ưu nhất.",
    "Hành trình chuyên môn của bác sĩ gắn liền với cam kết không ngừng cập nhật các phương pháp y khoa tiên tiến, đồng thời đề cao tính nhân văn và sự gần gũi trong tiếp xúc lâm sàng, mang lại cảm giác an tâm và tin cậy tuyệt đối cho người bệnh."
  ],
  quote: "Điều trị không chỉ nhằm giảm đau, mà còn giúp người bệnh duy trì khả năng vận động lâu dài.",
  portraitImage: "/images/doctor/doctor-portrait.jpg",
  workingImage: "/images/doctor/doctor-working.jpg"
};
