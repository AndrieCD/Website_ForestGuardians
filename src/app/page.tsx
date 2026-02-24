export default function Home() {
  const sections = [
    {
      id: "hero",
      color: "bg-slate-900",
      text: "Welcome to the Forest",
      btn: "Explore",
    },
    {
      id: "almanac",
      color: "bg-green-900",
      text: "The Almanac",
      btn: "View Data",
    },
    {
      id: "guardians",
      color: "bg-emerald-800",
      text: "Meet the Guardians",
      btn: "Learn More",
    },
    {
      id: "contact",
      color: "bg-stone-900",
      text: "Get in Touch",
      btn: "Contact Us",
    },
  ];

  return (
    <div className="h-full">
      {sections.map((section) => (
        <section
          key={section.id}
          className={`relative h-screen w-full flex flex-col items-center justify-center snap-start ${section.color}`}
        >
          {/* Main Center Text */}
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center px-4">
            {section.text}
          </h1>

          {/* Center-Bottom Button */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg">
              {section.btn}
            </button>
          </div>
        </section>
      ))}
    </div>
  );
}
