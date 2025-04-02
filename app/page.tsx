// app/page.tsx
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import PageWrapper from '@/layout/PageWrapper';
import ContentShowcase from '@/components/sections/ContentShowcase';
import HeroMessage from '@/components/sections/HeroMessage';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <PageWrapper>
        <HeroMessage />
        <Hero />
        <Skills />
        <ContentShowcase />
        <CTA />
        <Footer />
      </PageWrapper>
    </main>
  );
}