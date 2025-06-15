
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
            <div className="p-6 grid grid-cols-[auto_1fr] items-center gap-x-6">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl mb-2">Phone</CardTitle>
                <p className="text-muted-foreground">+62 813-5388-1727</p>
              </div>
            </div>
          </Card>

          <Card className="hover-scale">
            <div className="p-6 grid grid-cols-[auto_1fr] items-center gap-x-6">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl mb-2">Email</CardTitle>
                <p className="text-muted-foreground break-words">
                  bonafitbamarajamarine22@gmail.com
                </p>
              </div>
            </div>
          </Card>

          <Card className="hover-scale">
            <div className="p-6 grid grid-cols-[auto_1fr] items-start gap-x-6">
              <div className="p-3 bg-primary/10 rounded-full w-fit">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="text-xl mb-2">Address</CardTitle>
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
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
