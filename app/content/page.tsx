// app/page.tsx
import PageWrapper from '@/layout/PageWrapper';
import ContentShowcase from '@/components/sections/ContentShowcase';


export default function Home() {
  return (
    <main>

    <PageWrapper>
      <ContentShowcase />
      {/* Add more sections as needed */}
    </PageWrapper>
  
    <div className="h-[2000px]">
    </div>
      </main>
  );
}