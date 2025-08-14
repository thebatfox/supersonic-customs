import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Volume2, Settings, Zap, Speaker, ClipboardCheck, Home as HomeIcon, Hammer, Monitor, CheckCircle } from "lucide-react";
import { services } from "@/data/projects";

const iconMap = {
  Shield,
  Volume2,
  Settings,
  Zap,
  Speaker,
  ClipboardCheck,
  HomeIcon,
  Hammer,
  Monitor,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Comprehensive acoustic solutions tailored to your specific needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card key={service.id} className="h-full">
                <CardHeader>
                  <IconComponent className="w-12 h-12 text-primary mb-4" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>
                    {service.title === 'Soundproofing' && 'Noise Isolation Solutions'}
                    {service.title === 'Acoustic Treatment' && 'Echo & Reverberation Control'}
                    {service.title === 'Noise & Vibration Control' && 'Industrial Solutions'}
                    {service.title === 'ANC' && 'Active Noise Cancellation'}
                    {service.title === 'Sound System Design' && 'Specification & Engineering'}
                    {service.title === 'Noise Impact Surveys' && 'Compliance & Assessment'}
                    {service.title === 'Room-in-Room Construction' && 'Isolated Environments'}
                    {service.title === 'Carpentry & Custom Manufacturing' && 'Bespoke Solutions'}
                    {service.title === 'AV Tech Supply & Install' && 'Audio Visual Solutions'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="text-sm space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
