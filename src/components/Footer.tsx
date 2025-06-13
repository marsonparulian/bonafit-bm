
export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">AquaMarine</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your trusted partner for premium raw marine foods. Committed to sustainable 
              fishing practices and exceptional quality since 2003.
            </p>
            <div className="text-sm text-primary-foreground/60">
              © 2024 AquaMarine. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Wholesale Distribution</li>
              <li>Custom Processing</li>
              <li>Quality Assurance</li>
              <li>Cold Chain Logistics</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>Built with care for the marine food industry</p>
        </div>
      </div>
    </footer>
  );
};
