import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="relative py-20 px-6 text-white"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-7xl mx-auto text-center z-10">
        <div className="mb-6 flex justify-center">
          <img
            src="https://ugc.same-assets.com/mPV43MWKgtE4HVSGMz-VP38DKbAO2OjZ.svg"
            alt="Supersonic Customs Logo"
            className="h-64 md:h-80 w-auto"
          />
        </div>
        <p className="text-xl md:text-2xl mb-6 opacity-90">
          Specialist Soundproofing & Acoustic Treatment Company
        </p>

        <div className="text-lg mb-8 opacity-90 max-w-4xl mx-auto">
          <p className="mb-6">We provide expert solutions for:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Nightclubs, bars & entertainment venues
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Corporate offices & meeting spaces
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Schools, universities & classrooms
              </li>
            </ul>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Residential homes, apartments & estates
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Churches and houses of worship
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                Generator & equipment noise treatment
              </li>
            </ul>
          </div>

          <p className="text-center mb-8 text-lg opacity-80">
            Our work spans <strong>South Africa, DRC, Zambia, Mozambique, and Namibia</strong>,
            with proven results across diverse industries and environments.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
            <a href="/about">Who are we?</a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-hover-text" asChild>
            <a href="/book-site-visit">Book a Site Visit</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-hover-text bg-[#1339AA]"
            asChild
          >
            <a href="#questionnaire">Get Started Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
