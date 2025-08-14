const footerSections = [
  {
    title: "Supersonic Customs",
    content: "Professional acoustic solutions for entertainment, residential, commercial and industrial applications.",
    isDescription: true
  },
  {
    title: "Services",
    items: ["Soundproofing", "Acoustic Treatment", "Noise Control", "Custom Solutions"]
  },
  {
    title: "Company",
    items: ["About Us", "Our Process", "Testimonials", "Blog"]
  },
  {
    title: "Contact",
    items: [
      "+27 21 2030054",
      "info@supersonicafrica.co.za",
      "25B Gray Rd,",
      "Paarden Eiland,\nCape Town\n7405"
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={section.title}>
              <h3 className={`font-bold mb-4 ${index === 0 ? 'text-xl' : ''}`}>
                {section.title}
              </h3>
              {section.isDescription ? (
                <p className="text-gray-400 text-sm">{section.content}</p>
              ) : (
                <ul className="space-y-2 text-sm text-gray-400">
                  {section.items?.map((item) => (
                    <li key={item} className="whitespace-pre-line">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Supersonic Customs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
