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
  fullName: "Đàm Quang Trung",
  degree: "Bác sĩ",
  hospitalTitle: "Bác sĩ Gây mê Hồi sức & Điều trị đau",
  specialty: "Điều trị Đau",
  hospital: "Bệnh viện Bưu Điện",
  experience: "13+ năm kinh nghiệm lâm sàng",
  languages: ["Tiếng Việt", "Tiếng Anh"],
  focusAreas: [
    "Điều trị đau mạn tính bằng sóng cao tần RF/PRF",
    "TMS (Từ trường xuyên sọ) trong điều trị đau",
    "Block thần kinh & Gây tê vùng dưới hướng dẫn siêu âm",
    "Can thiệp giảm đau không phẫu thuật"
  ],
  shortIntroduction:
    "Bác sĩ Trung chuyên sâu trong lĩnh vực Điều trị Đau, tập trung vào các phương pháp can thiệp giảm đau không xâm lấn, không phẫu thuật như sóng cao tần RF/PRF và TMS, đồng thời đồng hành cùng người bệnh trong quá trình kiểm soát cơn đau mạn tính và cải thiện chất lượng cuộc sống.",
  fullIntroduction: [
    "Với nền tảng đào tạo từ Học viện Quân Y và Đại học Y Hà Nội, cùng hơn 13 năm kinh nghiệm lâm sàng tại các bệnh viện lớn, Bác sĩ Trung luôn chú trọng việc lắng nghe để thấu hiểu sâu sắc từng cơn đau của người bệnh. Từ đó, bác sĩ đưa ra những phác đồ điều trị cá nhân hóa tối ưu nhất.",
    "Hành trình chuyên môn của bác sĩ gắn liền với cam kết không ngừng cập nhật các phương pháp y khoa tiên tiến thông qua các khóa đào tạo quốc tế về PRF, RF và Pain Fellowship, đồng thời đề cao tính nhân văn và sự gần gũi trong tiếp xúc lâm sàng, mang lại cảm giác an tâm và tin cậy tuyệt đối cho người bệnh."
  ],
  quote: "Điều trị đau mạn tính không chỉ là làm dịu triệu chứng, mà còn giúp người bệnh tìm lại chất lượng cuộc sống vốn có.",
  portraitImage: "/images/doctor/doctor-portrait.png",
  workingImage: "/images/doctor/doctor-working.jpg"
};
