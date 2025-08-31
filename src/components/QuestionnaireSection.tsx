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
  return null;
}
