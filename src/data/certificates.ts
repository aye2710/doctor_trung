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
    title: "[Tên chứng nhận chuyên khoa Cơ Xương Khớp]",
    issuer: "[Đơn vị cấp chứng nhận 01]",
    year: "[Năm cấp 01]",
    image: "/images/certificates/certificate-01.jpg",
    alt: "Chứng nhận chuyên khoa Cơ Xương Khớp"
  },
  {
    id: "cert-02",
    title: "[Tên chứng nhận Đào tạo liên tục chuyên ngành]",
    issuer: "[Đơn vị cấp chứng nhận 02]",
    year: "[Năm cấp 02]",
    image: "/images/certificates/certificate-02.jpg",
    alt: "Chứng nhận đào tạo liên tục chuyên ngành Cơ Xương Khớp"
  },
  {
    id: "cert-03",
    title: "[Tên chứng chỉ Kỹ thuật can thiệp khớp]",
    issuer: "[Đơn vị cấp chứng nhận 03]",
    year: "[Năm cấp 03]",
    image: "/images/certificates/certificate-03.jpg",
    alt: "Chứng chỉ kỹ thuật can thiệp khớp ít xâm lấn"
  },
  {
    id: "cert-04",
    title: "[Tên chứng chỉ Siêu âm khớp lâm sàng]",
    issuer: "[Đơn vị cấp chứng nhận 04]",
    year: "[Năm cấp 04]",
    image: "/images/certificates/certificate-04.jpg",
    alt: "Chứng chỉ siêu âm hệ vận động và cơ xương khớp"
  },
  {
    id: "cert-05",
    title: "[Tên chứng chỉ Quản lý đau xương khớp toàn diện]",
    issuer: "[Đơn vị cấp chứng nhận 05]",
    year: "[Năm cấp 05]",
    image: "/images/certificates/certificate-05.jpg",
    alt: "Chứng chỉ hoàn thành khóa đào tạo quản lý đau toàn diện"
  },
  {
    id: "cert-06",
    title: "[Tên chứng nhận Nghiên cứu khoa học y khoa]",
    issuer: "[Đơn vị cấp chứng nhận 06]",
    year: "[Năm cấp 06]",
    image: "/images/certificates/certificate-06.jpg",
    alt: "Chứng nhận báo cáo khoa học tại hội nghị chuyên ngành"
  }
];
