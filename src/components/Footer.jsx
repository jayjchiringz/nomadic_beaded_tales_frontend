export default function Footer() {
  return (
    <footer className="bg-deepBrown text-white py-6 px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          src="/images/logo.png"
          alt="Logo"
          className="w-[60px] h-[60px] object-contain rounded-full border-0 border-white"
        />
        <p className="text-sm">&copy; {new Date().getFullYear()} Nomadic Beaded Tales</p>
      </div>

      <div className="mt-4 md:mt-0 text-sm text-center">
        <p>Crafted with pride from the heart of tradition.</p>
      </div>
    </footer>
  );
}
