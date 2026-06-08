export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  icon: string;
  features: string[];
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  icon: string;
  targetValue: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}
