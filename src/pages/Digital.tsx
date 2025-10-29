import jrLeadApps from "@/assets/CCjrleadapps-01.png";
import hikeWeek4 from "@/assets/CChikeWEEK4-01.png";
import siNo9 from "@/assets/si_no_9-01.png";
import sponsorPack from "@/assets/CCsponsorpack1-01.png";
import minecraft from "@/assets/2022-11-30_01.29.27.png";
import si12 from "@/assets/si12-01-min.png";

const Digital = () => {
  const images = [
    { src: jrLeadApps, alt: "Junior Lead Applications" },
    { src: hikeWeek4, alt: "Sunset Hike Bonfire" },
    { src: siNo9, alt: "Digital Illustration" },
    { src: sponsorPack, alt: "Sponsorship Package" },
    { src: minecraft, alt: "Minecraft Build" },
    { src: si12, alt: "Character Illustration" }
  ];

  return (
    <div className="min-h-screen bg-background pl-48 pr-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
        {images.map((image, index) => (
          <div key={index} className="aspect-square overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-opacity hover:opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Digital;
