import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  const images = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled%20design%20(1)-1758131906814.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Untitled%20design-1758131906556.png",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/1-1758131897335.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/dottoJVNfnm3088-1758131896381.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/nemport2005074-1758131901494.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/imgpersp038-1758131903239.jpeg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/imgvio039-1758131902783.jpeg"
  ];

  return (
    <div className="min-h-screen bg-background pl-48 pr-8 py-12">
      <Tabs defaultValue="digital" className="w-full">
        <TabsList className="mb-8 bg-transparent p-0 h-auto">
          <TabsTrigger 
            value="digital" 
            className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none font-normal data-[state=active]:font-semibold px-0 mr-4"
          >
            digital
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="digital">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
            {images.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden">
                <img
                  src={image}
                  alt={`Jonathan Liu Image ${index + 1}`}
                  className="w-full h-full object-cover transition-opacity hover:opacity-80"
                />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Index;
