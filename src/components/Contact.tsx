import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover-scale">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">+62 813-5388-1727</p>
              {/* <p className="text-muted-foreground">+62 812 3456 7890</p> */}
            </CardContent>
          </Card>

          <Card className="text-center hover-scale">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                bonafitbamarajamarine22@gmail.com
              </p>
              {/* <p className="text-muted-foreground">sales@bonafitbamaraja.com</p> */}
            </CardContent>
          </Card>

          <Card className="text-center hover-scale">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Address</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <strong>
                  KBN (Kampung Bahari Nusantara) PT. Bonafit Bamaraja Marine
                </strong>
                ,
                <br />
                Jalan Pantai Pebuahan, Desa Banyubiru, Kabupaten Jembrana,
                <br />
                Bali, Indonesia
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
