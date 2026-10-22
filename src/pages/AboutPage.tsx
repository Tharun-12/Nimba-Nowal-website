import { MantraSection } from '@/components/about/MantraSection';
import { StorySection } from '@/components/about/StorySection';
import { TeamSection } from '@/components/about/TeamSection';
import { DinacharyaSection } from '@/components/about/DinacharyaSection';
import { AccommodationSection } from '@/components/about/AccommodationSection';

export function AboutPage() {
  return (
    <>
      <MantraSection />
      <StorySection />
      <TeamSection />
      <DinacharyaSection />
      <AccommodationSection />
    </>
  );
}
