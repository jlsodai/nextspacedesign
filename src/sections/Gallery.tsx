/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

const gallery = [
  "https://res.cloudinary.com/dmaestro/image/upload/v1703220870/gallery3_nwinxd.webp",
  "https://res.cloudinary.com/dmaestro/image/upload/v1703220870/gallery2_syqxdg.webp",
  "https://res.cloudinary.com/dmaestro/image/upload/v1703220870/gallery4_yi6kqv.webp",
  "https://res.cloudinary.com/dmaestro/image/upload/v1703220870/gallery_wnjnwv.webp",
  "https://res.cloudinary.com/dmaestro/image/upload/v1703220870/gallery6_obhew6.webp",
  "https://res.cloudinary.com/dmaestro/image/upload/v1703220870/gallery5_y0obfs.webp",
];
const Gallery = () => {
  return (
    <section
      className="py-16 bg-gray-50 flex flex-col justify-center min-h-screen"
      id="gallery"
    >
      <div className="container mb-16">
        <p className="font-bold">Gallery</p>
        <div className="bg-gray-800 w-[40px] h-[5px]">&nbsp;</div>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 flex items-center">
        <div className="gap-8 columns-2 md:columns-3">
          {gallery.map((imgUrl, i) => (
            <img key={i} className="w-full mb-6 h-auto" src={imgUrl} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
