import ImageGallery from "@/components/ImageGallery";

const Index = () => {
  const images = [
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled%20design%20(1)-1758131906814.png", alt: "Pen Drawing 1" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled%20design-1758131906556.png", alt: "Pen Drawing 2" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1-1758131897335.jpg", alt: "Pen Drawing 3" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dottoJVNfnm3088-1758131896381.jpg", alt: "Pen Drawing 4" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/nemport2005074-1758131901494.jpeg", alt: "Pen Drawing 5" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/imgpersp038-1758131903239.jpeg", alt: "Pen Drawing 6" },
    { src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/imgvio039-1758131902783.jpeg", alt: "Pen Drawing 7" }
  ];

  return (
    <div className="min-h-screen bg-background pl-48 pr-8 py-12">
      <ImageGallery images={images} />
    </div>
  );
};

export default Index;
