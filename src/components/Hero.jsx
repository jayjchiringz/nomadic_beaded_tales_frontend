import logo from '../assets/logo.png';

export default function Hero() {
  return (
    <section className="bg-maasaiRed text-white min-h-[90vh] flex flex-col justify-center items-center text-center px-4">
      <img src={logo} alt="Nomadic Beaded Tales" className="w-28 h-28 mb-4 rounded-full border-4 border-white shadow-md" />
      <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">Nomadic Beaded Tales</h1>
      <p className="text-lg md:text-xl max-w-xl mb-6">
        Celebrating Maasai culture through hand-crafted beaded ornaments. Each piece tells a story of heritage, strength, and beauty.
      </p>
      <a href="#about" className="bg-accentGold text-deepBrown px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-maasaiRed transition">
        Discover the Story
      </a>
    </section>
  );
}
