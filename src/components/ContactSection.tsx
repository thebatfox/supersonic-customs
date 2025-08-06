"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "@/hooks/useForm";
import PrivacyNotice from "@/components/PrivacyNotice";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialData: ContactData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+27 21 203 0054"
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@supersoniccustoms.com"
  },
  {
    icon: MapPin,
    label: "Address",
    value: "25B Gray Road, Paarden Eiland, Cape Town\n7405"
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon-Fri: 8:30 AM - 17:00 PM\nSat: 9:00 AM - 14:00 PM (by appointment only)"
  }
];

export default function ContactSection() {
  const { data, loading, message, updateField, submitForm } = useForm({
    initialData,
    submitUrl: '/api/contact',
    successMessage: 'Message sent successfully! We\'ll get back to you within 24 hours.'
  });

  return (
    <section id="contact" className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-xl text-center opacity-90 mb-12">
          Ready to start your acoustic project? Get in touch with our experts.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-center space-x-4">
                    <info.icon className="w-6 h-6" />
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="opacity-90 whitespace-pre-line">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white text-foreground">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                {message && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    message.type === 'success'
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {message.text}
                  </div>
                )}

                <form className="space-y-4" onSubmit={submitForm}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        className="mt-1"
                        value={data.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="mt-1"
                        value={data.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contact-phone">Phone</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="Mobile Number"
                      className="mt-1"
                      value={data.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact-subject">Subject *</Label>
                    <Select value={data.subject} onValueChange={(value) => updateField('subject', value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Free Consultation</SelectItem>
                        <SelectItem value="quote">Project Quote</SelectItem>
                        <SelectItem value="question">General Question</SelectItem>
                        <SelectItem value="support">Support</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us about your project or question..."
                      className="mt-1 min-h-[100px]"
                      value={data.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      required
                    />
                  </div>

                  <PrivacyNotice />

                  <Button className="w-full" size="lg" type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full min-h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.0524156932087!2d18.475567315521!3d-33.90525428063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d355df215e3%3A0xcb7791784a28b7fe!2s25B%20Gray%20Rd%2C%20Paarden%20Eiland%2C%20Cape%20Town%2C%207405!5e0!3m2!1sen!2sza!4v1735252800000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{border: 0, minHeight: '600px'}}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SuperSonic Customs Workshop Location - 25B Gray Road, Paarden Eiland"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
