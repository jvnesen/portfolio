import jrLeadApps from "@/assets/CCjrleadapps-01.png";
import hikeWeek4 from "@/assets/CChikeWEEK4-01.png";
import siNo9 from "@/assets/si_no_9-01.png";
import sponsorPack from "@/assets/CCsponsorpack1-01.png";
import minecraft from "@/assets/2022-11-30_01.29.27.png";
import si12 from "@/assets/si12-01-min.png";
import sproutToTree from "@/assets/41finalFINAL-01.png";
import platformGif from "@/assets/platformfinal.gif";
import triptic from "@/assets/tripticSI-01.png";
import meetTeam from "@/assets/CCmeettheteam2-01.jpg";
import wjeInfoNight from "@/assets/ccWJEINFONIGHfinal-01.png";
import ImageGallery from "@/components/ImageGallery";

const Digital = () => {
  const images = [
    { src: jrLeadApps, alt: "Junior Lead Applications" },
    { src: hikeWeek4, alt: "Sunset Hike Bonfire" },
    { src: siNo9, alt: "Digital Illustration" },
    { src: sponsorPack, alt: "Sponsorship Package" },
    { src: minecraft, alt: "Minecraft Build" },
    { src: wjeInfoNight, alt: "WJE Info Night" },
    { src: si12, alt: "Character Illustration" },
    { src: sproutToTree, alt: "From Sprout To Tree" },
    { src: platformGif, alt: "Platform Animation" },
    { src: triptic, alt: "The Monstrosity Advance Triptych" },
    { src: meetTeam, alt: "Meet the Team" }
  ];

  return (
    <div className="min-h-screen bg-background pl-48 pr-8 py-12">
      <ImageGallery images={images} />
    </div>
  );
};

export default Digital;
