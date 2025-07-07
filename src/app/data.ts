// Tipe data untuk tools
export interface Tool {
  id: number;
  gambar: string;
  nama: string;
  ket: string;
  dad: string;
}

// Tipe data untuk proyek
export interface Proyek {
  id: number;
  gambar: string;
  nama: string;
  desk: string;
  tools: string[];
  dad: string;
}

// Data gambar utama
const DataImage: { HeroImage: string } = {
  HeroImage: "/assets/hajra.png",
};

export default DataImage;

// Daftar tools
export const listTools: Tool[] = [
  {
    id: 1,
    gambar: "/assets/tools/vscode.png",
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: "/assets/tools/reactjs.png",
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: "/assets/tools/nextjs.png",
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: "/assets/tools/tailwind.png",
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: "/assets/tools/bootstrap.png",
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: "/assets/tools/js.png",
    nama: "JavaScript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: "/assets/tools/nodejs.png",
    nama: "Node JS",
    ket: "Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: "/assets/tools/github.png",
    nama: "GitHub",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: "/assets/tools/ai.png",
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: "/assets/tools/canva.png",
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: "/assets/tools/figma.png",
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

// Daftar proyek
export const listProyek: Proyek[] = [
  {
    id: 1,
    gambar: "/assets/proyek/proyek1.webp",
    nama: "Website Sekolah",
    desk: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tools: ["HTML", "CSS", "JavaScript", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: "/assets/proyek/proyek2.webp",
    nama: "Company Profile",
    desk: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tools: ["HTML", "CSS", "JavaScript", "Swiper", "Lightbox"],
    dad: "300",
  },
  {
    id: 3,
    gambar: "/assets/proyek/proyek3.webp",
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tools: ["ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
  {
    id: 4,
    gambar: "/assets/proyek/proyek4.webp",
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tools: ["ReactJS", "Bootstrap", "AOS"],
    dad: "500",
  },
  {
    id: 5,
    gambar: "/assets/proyek/proyek5.webp",
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tools: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    dad: "600",
  },
  {
    id: 6,
    gambar: "/assets/proyek/proyek6.webp",
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    tools: ["NextJS", "TailwindCSS", "Framer Motion"],
    dad: "700",
  },
];
