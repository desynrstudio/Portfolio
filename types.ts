import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  stats: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  items?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PricingItem {
  name: string;
  price: string;
  description?: string;
}

export interface PricingCategory {
  id: string;
  title: string;
  purpose: string;
  items: PricingItem[];
  addons?: string[];
}