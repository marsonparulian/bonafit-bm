import { Card, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For more information and further details, you can contact us through
            the following portals
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
          <Card className="hover-scale">
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between p-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full w-fit">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Phone</CardTitle>
              </div>
              <p className="text-muted-foreground">+62 813-5388-1727</p>
            </div>
          </Card>

          <Card className="hover-scale">
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between p-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full w-fit">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Email</CardTitle>
              </div>
              <p className="text-muted-foreground break-words">
                bonafitbamarajamarine22@gmail.com
              </p>
            </div>
          </Card>

          <Card className="hover-scale">
            <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between p-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-full w-fit">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Address</CardTitle>
              </div>
              <p className="text-muted-foreground">
                <strong>KBN (Kampung Bahari Nusantara)</strong>
                <br />
                PT. Bonafit Bamaraja Marine,
                <br />
                Jalan Pantai Pebuahan, Desa Banyubiru, Kabupaten Jembrana,
                <br />
                Bali, Indonesia
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
