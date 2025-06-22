import { useEffect, useState } from 'react';

const images = [
  '/images/maasai1.jpg',
  '/images/maasai2.jpg',
  '/images/maasai3.jpg',
  '/images/maasai4.jpg',
  '/images/maasai5.jpg',
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] w-full overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Maasai style ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center px-6 animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 text-maasaiRed text-outline-gold">
          Nomadic Beaded Tales
        </h1>
        <p className="text-lg md:text-xl max-w-2xl font-[Apple_Chancery]">
          Celebrating global beauty through traditional Maasai beadwork, one handcrafted piece at a time.
        </p>
      </div>
    </div>
  );
}
