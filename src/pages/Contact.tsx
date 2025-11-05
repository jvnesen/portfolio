const Contact = () => {
  return (
    <div className="min-h-screen bg-background pl-48 pr-8 py-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold mb-8 text-foreground">contact // about</h1>
        
        <div className="space-y-6 text-foreground">
          <p>
            Jonathan Liu is a student at UCSD in the ICAM program. His favorite font is Helvetica.
          </p>
          
          <p className="mt-10">
            <a 
              href="mailto:jdliu31@gmail.com" 
              className="hover:underline hover:text-[#f76911]"
            >
              jdliu31@gmail.com
            </a>
          </p>
          
          <p>
            <a 
              href="https://linkedin.com/in/jondliu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#f76911]"
            >
              linkedin.com/in/jondliu
            </a>
          </p>
          
          <p>
            <a 
              href="https://instagram.com/jona9x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#f76911]"
            >
              @jona9x
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
