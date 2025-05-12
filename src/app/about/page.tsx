import Image from "next/image";
import { Award, Heart, ShieldCheck, User } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pharmacy2 from "../../../public/pharmacy2.jpg";
import Pharmacy3 from "../../../public/pharmacy3.jpg";

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 mx-auto">
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-4">About MediCare Pharmacy</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Your trusted healthcare partner for over 25 years
            </p>
            <p className="mb-4">
              MediCare Pharmacy was founded in 1998 with a simple mission: to
              provide accessible, affordable, and high-quality healthcare
              products and services to our community. What started as a small
              neighborhood pharmacy has grown into a trusted healthcare provider
              serving thousands of customers.
            </p>
            <p>
              Our team of experienced pharmacists and healthcare professionals
              are dedicated to ensuring that you receive the best possible care
              and advice for all your health needs. We believe in building
              lasting relationships with our customers based on trust,
              reliability, and exceptional service.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src={Pharmacy2}
              alt="MediCare Pharmacy Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Heart className="h-8 w-8 text-teal-600" />
              <CardTitle>Care</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We genuinely care about our {"customers'"} health and
                well-being. Every decision we make is centered around providing
                the best care possible.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <ShieldCheck className="h-8 w-8 text-teal-600" />
              <CardTitle>Trust</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We build trust through transparency, honesty, and reliability.
                Our customers can count on us for accurate information and
                quality products.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Award className="h-8 w-8 text-teal-600" />
              <CardTitle>Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We strive for excellence in everything we do, from the products
                we offer to the services we provide and the experience we create
                for our customers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <Tabs defaultValue="history" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-8">
            <TabsTrigger value="history">Our History</TabsTrigger>
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="vision">Our Vision</TabsTrigger>
          </TabsList>
          <TabsContent value="history" className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our History</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  MediCare Pharmacy was founded by Dr. James Wilson, a
                  pharmacist with a vision to create a healthcare establishment
                  that prioritized patient care above all else. In 1998, the
                  first MediCare Pharmacy opened its doors in a small storefront
                  on Main Street.
                </p>
                <p className="mb-4">
                  Over the years, our commitment to quality service and customer
                  satisfaction helped us grow steadily. By 2005, we had expanded
                  to three locations across the city.
                </p>
                <p>
                  Today, MediCare Pharmacy continues to serve our community with
                  the same dedication and personal touch that has defined us
                  from the beginning.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={Pharmacy3}
                  alt="MediCare Pharmacy History"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="mission" className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="mb-4">
              Our mission at MediCare Pharmacy is to enhance the health and
              wellbeing of our community by providing accessible, affordable,
              and high-quality healthcare products and services. We are
              committed to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>
                Offering a comprehensive range of medications and healthcare
                products
              </li>
              <li>
                Providing expert advice and personalized care to each customer
              </li>
              <li>Ensuring the safety and efficacy of all products we sell</li>
              <li>
                Making healthcare accessible through competitive pricing and
                convenient services
              </li>
              <li>
                Continuously improving our services based on customer feedback
                and healthcare advancements
              </li>
            </ul>
            <p>
              We believe that everyone deserves access to quality healthcare,
              and we work tirelessly to make that a reality for our customers.
            </p>
          </TabsContent>
          <TabsContent value="vision" className="p-6 border rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="mb-4">
              Our vision at MediCare Pharmacy is to be the leading healthcare
              provider that combines traditional pharmacy services with
              personalized care to create a comprehensive healthcare experience.
            </p>
            <p className="mb-4">We envision a future where:</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>Healthcare is accessible to everyone in our community</li>
              <li>The human touch remains central to healthcare delivery</li>
              <li>Preventive care is emphasized as much as treatment</li>
              <li>
                Customers are empowered with knowledge to make informed health
                decisions
              </li>
              <li>
                Our pharmacy is an integral part of the healthcare ecosystem,
                working collaboratively with other providers
              </li>
            </ul>
            <p>
              Through this vision, we aim to contribute to a healthier and
              happier community, one customer at a time.
            </p>
          </TabsContent>
        </Tabs>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <User className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-bold">Dr. James Wilson</h3>
            <p className="text-muted-foreground">Founder & Head Pharmacist</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <User className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-bold">Dr. Sarah Chen</h3>
            <p className="text-muted-foreground">Pharmacist</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <User className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-bold">Michael Rodriguez</h3>
            <p className="text-muted-foreground">Pharmacy Technician</p>
          </div>
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
              <User className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
            <h3 className="text-xl font-bold">Emily Johnson</h3>
            <p className="text-muted-foreground">Customer Service</p>
          </div>
        </div>
      </section>

      <section className="mb-12 py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">MediCare By The Numbers</h2>
          <p className="text-muted-foreground">Our impact over the years</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">25+</div>
            <p className="text-lg font-medium">Years of Service</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">3</div>
            <p className="text-lg font-medium">Store Locations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">10+</div>
            <p className="text-lg font-medium">Certified Pharmacists</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-teal-600 mb-2">50K+</div>
            <p className="text-lg font-medium">Customers Served</p>
          </div>
        </div>
      </section>
    </div>
  );
}
