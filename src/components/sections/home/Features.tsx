'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Zap,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  Palette,
  Code2,
  Headphones,
  Lock,
} from 'lucide-react';

export default function Features() {
  const handleStartTrial = () => {
    window.location.href = '/signup';
  };

  const handleViewFeatures = () => {
    window.location.href = '/features';
  };

  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description:
        'Leverage machine learning to automate repetitive tasks and boost productivity by 300%.',
      badge: 'AI/ML',
    },
    {
      icon: Shield,
      title: 'SOC 2 Compliance',
      description:
        'Enterprise-grade security with SOC 2 Type II certification and zero-trust architecture.',
      badge: 'Security',
    },
    {
      icon: Smartphone,
      title: 'Native Mobile SDKs',
      description:
        'React Native and Flutter SDKs for seamless mobile integration and offline-first functionality.',
      badge: 'Mobile',
    },
    {
      icon: Globe,
      title: 'Multi-Region Deployment',
      description:
        'Deploy across 15+ global regions with automatic failover and 99.99% uptime SLA.',
      badge: 'Infrastructure',
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description:
        'Advanced metrics dashboard with custom KPIs, cohort analysis, and predictive insights.',
      badge: 'Analytics',
    },
    {
      icon: Palette,
      title: 'White-Label Solution',
      description:
        'Complete customization with your branding, custom domains, and CSS framework integration.',
      badge: 'Branding',
    },
    {
      icon: Code2,
      title: 'GraphQL & REST APIs',
      description:
        'Comprehensive API suite with webhooks, rate limiting, and auto-generated documentation.',
      badge: 'Developer',
    },
    {
      icon: Headphones,
      title: 'Dedicated Success Manager',
      description:
        'Personal account manager with SLA response times and priority technical support.',
      badge: 'Support',
    },
    {
      icon: Lock,
      title: 'GDPR & CCPA Ready',
      description:
        'Built-in privacy controls with data residency options and automated compliance reporting.',
      badge: 'Privacy',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20"
          >
            Platform Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Ready Features for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern SaaS Teams
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Production-grade infrastructure and developer tools that scale from startup to
            enterprise with zero configuration overhead.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-card/50 backdrop-blur-sm"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 border border-primary/10">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-secondary/50 text-secondary-foreground"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4 text-lg">
            Join 2,500+ tech teams already building with Startup Tech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartTrial}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
            >
              Start 14-Day Trial
            </button>
            <button
              onClick={handleViewFeatures}
              className="px-8 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors text-foreground"
            >
              Explore Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
