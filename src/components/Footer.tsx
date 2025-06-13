export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl md:text-6xl font-bold mb-8">Thank You</h3>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto text-lg">
          Thank you for choosing Bonafit Bamaraja Marine as your trusted partner
          in high quality aquaculture production. Together, we create a
          sustainable future for the aquaculture food industry.
        </p>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Bonafit Bamaraja Marine</h4>
              <p className="text-primary-foreground/60">
                Premium Raw Marine Food Producer
              </p>
            </div>
            <div>
              <p className="text-primary-foreground/60">
                © 2025 Bonafit Bamaraja Marine. All rights reserved.
              </p>
            </div>
            <div>
              <p className="text-primary-foreground/60">
                Sustainable • Quality • Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
