"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useForm } from "@/hooks/useForm";
import PrivacyNotice from "@/components/PrivacyNotice";

interface SiteVisitData {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  projectType: string;
  details: string;
}

const initialData: SiteVisitData = {
  name: '',
  email: '',
  phone: '',
  preferredDate: '',
  preferredTime: '',
  location: '',
  projectType: '',
  details: ''
};

const timeSlots = [
  "08:00 - 10:00",
  "10:00 - 12:00",
  "12:00 - 14:00",
  "14:00 - 16:00",
  "16:00 - 18:00"
];

export default function BookSiteVisitPage() {
  const { data, loading, message, updateField, submitForm } = useForm({
    initialData,
    submitUrl: '/api/site-visit',
    successMessage: 'Site visit request submitted successfully! We\'ll contact you within 24 hours to confirm the appointment.'
  });

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="bg-primary text-primary-foreground py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center">
          <Button variant="ghost" size="sm" asChild className="mr-4 text-primary-foreground hover:bg-primary-foreground/20">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

        </div>
      </nav>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Schedule Your Site Visit</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book a free consultation and site assessment with our acoustic experts. We'll evaluate your space and provide tailored recommendations.
            </p>
          </div>

          {/* Booking Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Book Your Appointment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {message && (
                <div className={`mb-6 p-4 rounded-lg ${
                  message.type === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {message.text}
                </div>
              )}

              <form onSubmit={submitForm} className="space-y-6">
                {/* Contact Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      className="mt-1"
                      value={data.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+27 XX XXX XXXX"
                      className="mt-1"
                      value={data.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="mt-1"
                    value={data.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    required
                  />
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="preferredDate">Preferred Date *</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      className="mt-1"
                      min={today}
                      value={data.preferredDate}
                      onChange={(e) => updateField('preferredDate', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="preferredTime">Preferred Time *</Label>
                    <Select value={data.preferredTime} onValueChange={(value) => updateField('preferredTime', value)} required>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select time slot" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Location Details */}
                <div>
                  <Label htmlFor="location">Site Location *</Label>
                  <Input
                    id="location"
                    placeholder="Full address of the site to visit"
                    className="mt-1"
                    value={data.location}
                    onChange={(e) => updateField('location', e.target.value)}
                    required
                  />
                </div>

                {/* Project Type */}
                <div>
                  <Label htmlFor="projectType">Project Type *</Label>
                  <Select value={data.projectType} onValueChange={(value) => updateField('projectType', value)} required>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="studio">Recording Studio</SelectItem>
                      <SelectItem value="office">Office Space</SelectItem>
                      <SelectItem value="restaurant">Restaurant/Bar</SelectItem>
                      <SelectItem value="educational">Educational</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Details */}
                <div>
                  <Label htmlFor="details">Brief Project Description</Label>
                  <Textarea
                    id="details"
                    placeholder="Tell us about your acoustic challenges or what you'd like to achieve (optional)"
                    className="mt-1 min-h-[100px]"
                    value={data.details}
                    onChange={(e) => updateField('details', e.target.value)}
                  />
                </div>

                <PrivacyNotice />

                <Button type="submit" size="lg" className="w-full" disabled={loading}>
                  {loading ? 'Booking...' : 'Book Site Visit'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* What to Expect */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">What to Expect During Your Site Visit</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-medium mb-2">Site Assessment</h4>
                  <p className="text-sm text-muted-foreground">Our expert will evaluate your space and identify acoustic challenges</p>
                </div>
                <div className="text-center">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-medium mb-2">Consultation</h4>
                  <p className="text-sm text-muted-foreground">Discussion of your needs, budget, and timeline</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-medium mb-2">Written Quote</h4>
                  <p className="text-sm text-muted-foreground">Detailed proposal with recommendations and pricing within 48 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
