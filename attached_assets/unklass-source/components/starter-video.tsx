import BrandedSection from './ui/branded-section';

export default function StarterVideo() {
  return (
    <BrandedSection
      title="Unklass in 30 seconds"
      dottedLines={false}
      color="blue"
    >
      <div className="flex items-center justify-center w-full h-full px-4">
        <iframe
          className="w-full lg:w-[80%] h-[300px] lg:h-[500px]"
          src="https://www.youtube.com/embed/yB4iJwxS-NE?si=KKbD-bCOMDfM1VTh"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </BrandedSection>
  );
}
