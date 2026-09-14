export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  badge?: string;
}

export interface DemoIndustry {
  id: string;
  name: string;
  businessName: string;
  category: string;
  heroHeadline: string;
  heroSubheadline: string;
  accentColor: string;
  chatPreset: {
    greeting: string;
    suggestions: string[];
    qaPairs: {
      question: string;
      answer: string;
    }[];
  };
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  clientType: string;
  description: string;
  highlights: string[];
  metricsPreview: string;
  accent: string;
  desktopPreview: {
    heroTitle: string;
    heroSubtitle: string;
    features: string[];
    ctaText: string;
  };
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface ChannelCard {
  id: 'website' | 'whatsapp' | 'telegram';
  name: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: string;
  benefits: string[];
}

export interface IndustryCategory {
  title: string;
  examples: string[];
  icon: string;
  agentBenefit: string;
}
