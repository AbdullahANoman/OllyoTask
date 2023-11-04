import Image1 from "../public/assests/image-1.webp";

export interface ImageFile {
  id: number;
  imgSrc: string | File;
}

export const AllImages: ImageFile[] = [
  {
    id: 1,
    imgSrc: "/assests/image-1.webp",
  },
  {
    id: 2,
    imgSrc: "/assests/image-2.webp",
  },
  {
    id: 3,
    imgSrc: "/assests/image-3.webp",
  },
  {
    id: 4,
    imgSrc: "/assests/image-4.webp",
  },
  {
    id: 5,
    imgSrc: "/assests/image-5.webp",
  },
  {
    id: 6,
    imgSrc: "/assests/image-6.webp",
  },
  {
    id: 7,
    imgSrc: "/assests/image-7.webp",
  },
  {
    id: 8,
    imgSrc: "/assests/image-8.webp",
  },
  {
    id: 9,
    imgSrc: "/assests/image-9.webp",
  },
  {
    id: 10,
    imgSrc: "/assests/image-10.jpeg",
  },
  {
    id: 11,
    imgSrc: "/assests/image-11.jpeg",
  },
];
