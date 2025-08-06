"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "@/hooks/useForm";
import PrivacyNotice from "@/components/PrivacyNotice";

interface QuestionnaireData {
  name: string;
  email: string;
  projectType: string;
  noiseSource: string;
  goals: string;
  location: string;
  details: string;
}

const initialData: QuestionnaireData = {
  name: '',
  email: '',
  projectType: '',
  noiseSource: '',
  goals: '',
  location: '',
  details: ''
};

export default function QuestionnaireSection() {
  const { data, loading, message, updateField, submitForm } = useForm({
    initialData,
    submitUrl: '/api/questionnaire',
    successMessage: 'Questionnaire submitted successfully! We\'ll review your requirements and get back to you soon.'
  });

  return (
    <section id="questionnaire" className="py-20 px-6 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Need our help?</h2>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Help us understand your acoustic needs for a customized solution
        </p>

        <Card>
          <CardContent className="p-8">
            {message && (
              <div className={`mb-6 p-4 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-200'
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}

            <form className="space-y-6" onSubmit={submitForm}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
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
                  <Label htmlFor="email">Email *</Label>
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
              </div>

              <div>
                <Label htmlFor="project-type">Project Type *</Label>
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
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="noise-source">Primary Noise Source *</Label>
                <Select value={data.noiseSource} onValueChange={(value) => updateField('noiseSource', value)} required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select noise source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="traffic">Traffic/Road Noise</SelectItem>
                    <SelectItem value="neighbors">Neighbor Noise</SelectItem>
                    <SelectItem value="machinery">Machinery/Equipment</SelectItem>
                    <SelectItem value="hvac">HVAC Systems</SelectItem>
                    <SelectItem value="music">Music/Audio Equipment</SelectItem>
                    <SelectItem value="voices">Voices/Speech</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="goals">Project Goals *</Label>
                <Select value={data.goals} onValueChange={(value) => updateField('goals', value)} required>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select primary goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="block-noise">Block incoming noise</SelectItem>
                    <SelectItem value="reduce-echo">Reduce echo/reverberation</SelectItem>
                    <SelectItem value="contain-sound">Contain sound within room</SelectItem>
                    <SelectItem value="improve-quality">Improve audio quality</SelectItem>
                    <SelectItem value="privacy">Improve privacy</SelectItem>
                    <SelectItem value="compliance">Meet noise regulations</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location">Location/Address</Label>
                <Input
                  id="location"
                  placeholder="Full address"
                  className="mt-1"
                  value={data.location}
                  onChange={(e) => updateField('location', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="details">Additional Details</Label>
                <Textarea
                  id="details"
                  placeholder="Please provide any additional information about your project, specific requirements, or questions you may have..."
                  className="mt-1 min-h-[120px]"
                  value={data.details}
                  onChange={(e) => updateField('details', e.target.value)}
                />
              </div>

              <PrivacyNotice />

              <Button className="w-full" size="lg" type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Questionnaire'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
