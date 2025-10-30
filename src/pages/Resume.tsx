import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background pl-48 pr-8 py-12">
      <div className="max-w-4xl">
        <h1 className="text-2xl font-semibold mb-4 text-foreground">resume</h1>
        
        <div className="mb-8">
          <a 
            href="/JonathanLiuResume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1"
          >
            download pdf resume
            <Download size={16} strokeWidth={1.5} />
          </a>
        </div>
        
        <div className="space-y-8 text-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="font-medium">University of California, San Diego</p>
                <p>Aug. 2023 - Present</p>
              </div>
              <p>B.A. in ICAM (Interdisciplinary Computing and the Arts Major) | GPA: 3.43</p>
              <p className="text-sm mt-2">
                <span className="font-medium">Coursework:</span> Creative Coding, Design Communication, 
                Practices in Computing Arts, Architectural Practices, Virtual Environments, Media Sketchbook, 
                Programming Arts, Media Forms and Cultures, Film Media Foundations
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <p className="font-medium">SCSE Concrete Canoe UCSD - Lead Aesthetics Captain</p>
                  <p>May 2025 - Present</p>
                </div>
                <p className="text-sm mb-2">San Diego, CA</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Led aesthetics subteam to design a cohesive visual theme for a 20-ft concrete canoe, presentations and infographics, and social media</li>
                  <li>Designed promotional and sponsorship graphics and branding for Psws display, apparel, and social media campaigns</li>
                  <li>Implemented user feedback from team to refine canoe visual theme and design, enhancing aesthetic functionality and aligning with competition standards</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <p className="font-medium">Marugame Udon UTC - Shift Lead</p>
                  <p>Oct. 2024 - Present</p>
                </div>
                <p className="text-sm mb-2">San Diego, CA</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Delivered exceptional customer service as a cashier and bowl maker, memorizing diverse menu selection and client preferences to ensure satisfaction in a fast-paced environment making 400+ orders daily</li>
                  <li>Helped manage inventory organization and trained new crew members across cashier, udon making, tempura frying, and prep stations, honing interpersonal communication and ensuring consistent quality and team efficiency</li>
                  <li>Collaborated with a team of 20+ to switch between stations like making udon, toppings, assembling to-go orders, tempura frying, and table bussing, optimizing workflows and upholding cleanliness standards</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <p className="font-medium">Saltaire Catering UCSD - Service Crew</p>
                  <p>Mar. 2024 - Sep. 2024</p>
                </div>
                <p className="text-sm mb-2">San Diego, CA</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Designed and executed food and event setups for high-profile UCSD events, including VIP guest seminars, board meetings and investor conferences with UCSD chancellor and staff</li>
                  <li>Delivered tailored client service by anticipating and addressing needs during formal events, maintaining a professional ambiance for seminars and speeches</li>
                  <li>Organized and maintained post-event cleanup processes and transported catering equipment, upholding cleanliness standards and streamlining deadline and time management between events</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <p className="text-sm">
              <span className="font-medium">Tools / Programs:</span> Adobe Illustrator, Adobe InDesign, 
              Adobe Photoshop, Adobe XD, Adobe Premiere Pro / CapCut, Blender, Figma, Canva, 
              PPT/Slides, Procreate / Sketchbook, Adobe Animate, Adobe Express
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
