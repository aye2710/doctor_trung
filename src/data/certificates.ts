export interface CertificateItem {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
  image: string;
  alt: string;
}

export const certificates: CertificateItem[] = [
  {
    id: "cert-01",
    title: "Bằng Bác sĩ đa khoa",
    issuer: "Học viện Quân Y",
    year: "2012",
    image: "/images/certificates/certificate-01.jpg",
    alt: "Bằng Bác sĩ đa khoa do Học viện Quân Y cấp"
  },
  {
    id: "cert-02",
    title: "Bằng Thạc sĩ Nội khoa",
    issuer: "Đại học Y Hà Nội",
    year: "2018",
    image: "/images/certificates/certificate-02.jpg",
    alt: "Bằng Thạc sĩ Nội khoa do Đại học Y Hà Nội cấp"
  },
  {
    id: "cert-03",
    title: "CME Kỹ thuật tiêm khớp",
    issuer: "Đại học Y Dược TP. Hồ Chí Minh",
    year: "2022",
    image: "/images/certificates/certificate-03.jpg",
    alt: "Chứng nhận CME Kỹ thuật tiêm khớp do Đại học Y Dược TP. Hồ Chí Minh cấp"
  },
  {
    id: "cert-04",
    title: "CME Sóng cao tần cơ bản",
    issuer: "Đại học Y Dược TP. Hồ Chí Minh",
    year: "2024",
    image: "/images/certificates/certificate-04.jpg",
    alt: "Chứng nhận CME Sóng cao tần cơ bản do Đại học Y Dược TP. Hồ Chí Minh cấp"
  },
  {
    id: "cert-05",
    title: "Gây tê vùng dưới hướng dẫn siêu âm",
    issuer: "Đại học Y Dược Hải Phòng",
    year: "2024",
    image: "/images/certificates/certificate-05.jpg",
    alt: "Chứng chỉ Gây tê vùng dưới hướng dẫn siêu âm do Đại học Y Dược Hải Phòng cấp"
  },
  {
    id: "cert-06",
    title: "Đào tạo TMS (Từ trường xuyên sọ)",
    issuer: "Chứng chỉ chuyên khoa",
    year: "2025",
    image: "/images/certificates/certificate-06.png",
    alt: "Chứng chỉ đào tạo TMS - Từ trường xuyên sọ trong điều trị đau"
  },
  {
    id: "cert-07",
    title: "CME Siêu âm cơ bản",
    issuer: "Bệnh viện Đa khoa Hà Đông",
    year: "2022",
    image: "/images/certificates/certificate-07.jpg",
    alt: "Chứng nhận CME Siêu âm cơ bản do Bệnh viện Đa khoa Hà Đông cấp"
  },
  {
    id: "cert-08",
    title: "Chứng nhận lĩnh vực Gây tê",
    issuer: "Hoa Kỳ",
    year: "2025",
    image: "/images/certificates/certificate-08.png",
    alt: "Chứng nhận chuyên môn lĩnh vực Gây tê - Hoa Kỳ"
  },
  {
    id: "cert-09",
    title: "Đào tạo RF/PRF chuyên sâu",
    issuer: "Nebraska, Hoa Kỳ",
    year: "2025",
    image: "/images/certificates/certificate-09.jpg",
    alt: "Khóa đào tạo RF/PRF chuyên sâu tại Nebraska, Hoa Kỳ"
  },
  {
    id: "cert-10",
    title: "Thực hành RF/PRF",
    issuer: "Nebraska, Hoa Kỳ",
    year: "2025",
    image: "/images/certificates/certificate-10.jpg",
    alt: "Thực hành kỹ thuật RF/PRF tại Nebraska, Hoa Kỳ"
  }
];
