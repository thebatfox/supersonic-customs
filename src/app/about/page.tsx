import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { ArrowLeft, MapPin, Calendar, Award, Target, Lightbulb, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="bg-primary text-primary-foreground py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/">
            <Button variant="secondary" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <div className="hidden md:flex space-x-6">
            <a
              href="/#services"
              className="hover:text-hover-text transition-colors"
            >
              Services
            </a>
            <a
              href="/#gallery"
              className="hover:text-hover-text transition-colors"
            >
              Gallery
            </a>
            <a
              href="/blog"
              className="hover:text-hover-text transition-colors"
            >
              Blog
            </a>
            <a
              href="/#contact"
              className="hover:text-hover-text transition-colors"
            >
              Contact
            </a>
            <a
              href="/#questionnaire"
              className="hover:text-hover-text transition-colors"
            >
              Get Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <img
              src="https://ugc.same-assets.com/mPV43MWKgtE4HVSGMz-VP38DKbAO2OjZ.svg"
              alt="Supersonic Customs Logo"
              className="h-32 md:h-40 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Supersonic Customs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in soundproofing and acoustic treatment solutions across Southern Africa
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Welcome to Supersonic Customs</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Welcome to Supersonic Customs, your trusted partner in soundproofing and acoustic treatment solutions. Based in Paarden Eiland, Cape Town, our small but dynamic team of eight passionate professionals is dedicated to transforming spaces into acoustic masterpieces.
                </p>
                <p>
                  With over a decade of experience in the industry, we specialize in creating bespoke soundproofing and acoustic solutions for diverse venues, including nightclubs, restaurants, recording studios, schools, and more. Our expertise extends beyond South Africa, having successfully delivered projects across Namibia, Zambia, Mozambique, and the DRC.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Company Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Years Experience</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <p className="text-muted-foreground">Countries Served</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </CardContent>
            </Card>
          </div>



          {/* Our Approach */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Approach</h2>
              <div className="text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Whether you need to isolate the noise of a powerful generator, contain the energy of a loud nightclub, or create a serene and functional acoustic environment, we deliver tailored solutions to suit your needs. Our advanced techniques and materials ensure sound levels are comfortable and controlled, protecting your spaces from disruptive noise while enhancing the experience inside.
                </p>
                <p>
                  From acoustic absorption panels and sound-seal doors to complete system design and installation, we pride ourselves on delivering results that meet the highest quality standards. Our centrally located workshop uses premium materials to craft solutions customized for each project.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What We Do */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">What We Specialize In</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Entertainment Venues</h4>
                      <p className="text-sm text-muted-foreground">Nightclubs, bars, and entertainment spaces</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Hospitality</h4>
                      <p className="text-sm text-muted-foreground">Restaurants and dining establishments</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Recording Studios</h4>
                      <p className="text-sm text-muted-foreground">Professional audio production facilities</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Educational</h4>
                      <p className="text-sm text-muted-foreground">Schools and learning environments</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Corporate Spaces</h4>
                      <p className="text-sm text-muted-foreground">Offices and meeting rooms</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Industrial Solutions</h4>
                      <p className="text-sm text-muted-foreground">Generator noise isolation and machinery control</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Custom Design</h4>
                      <p className="text-sm text-muted-foreground">Bespoke acoustic furniture and installations</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">AV Integration</h4>
                      <p className="text-sm text-muted-foreground">Complete audio-visual system installation</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Geographic Coverage */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Reach Across Southern Africa</h2>
              <div className="grid md:grid-cols-5 gap-4 text-center">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">South Africa</h4>
                  <p className="text-sm text-muted-foreground">Home Base</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Namibia</h4>
                  <p className="text-sm text-muted-foreground">Regional Projects</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Zambia</h4>
                  <p className="text-sm text-muted-foreground">Expanding Presence</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">Mozambique</h4>
                  <p className="text-sm text-muted-foreground">Growing Market</p>
                </div>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold">DRC</h4>
                  <p className="text-sm text-muted-foreground">Specialized Projects</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Closing Statement */}
          <Card className="mb-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-6">Let's Make Great Spaces Together!</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether you're enhancing a vibrant entertainment venue, refining a corporate space, or improving acoustic performance in schools or studios, Supersonic Customs is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contact">
                  <Button size="lg" className="text-lg px-8 py-3">
                    Get In Touch
                  </Button>
                </Link>
                <Link href="/#gallery">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
