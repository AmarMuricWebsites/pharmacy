import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, ShieldCheck, Truck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductCard } from "@/components/product-card";
import HeroImage from "../../public/hero.jpg";
import VitaminC from "../../public/vitaminc.jpg";
import Thermo from "../../public/thermo.jpg";
import Pain from "../../public/pain.jpg";
import FirstAid from "../../public/first-aid.jpg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-50 to-teal-50 grid place-items-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Your Health, Our Priority
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  We provide quality medications and healthcare products with
                  personalized service.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  <Link href="/products">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/prescriptions">Request Prescription</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={HeroImage}
                width={550}
                height={550}
                alt="Pharmacy Hero Image"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-gray-50 grid place-items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Featured Products
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our most popular health and wellness products
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            <ProductCard
              id="1"
              name="Vitamin C Complex"
              price={19.99}
              image={VitaminC}
              category="Vitamins"
              rating={4.5}
            />
            <ProductCard
              id="2"
              name="Digital Thermometer"
              price={24.99}
              image={Thermo}
              category="Medical Devices"
              rating={4.8}
            />
            <ProductCard
              id="3"
              name="Pain Relief Gel"
              price={12.99}
              image={Pain}
              category="Pain Management"
              rating={4.2}
            />
            <ProductCard
              id="4"
              name="First Aid Kit"
              price={29.99}
              image={FirstAid}
              category="First Aid"
              rating={4.7}
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-white grid place-items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Our Services
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive healthcare services to meet all your needs
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Truck className="h-8 w-8 text-teal-600" />
                <div>
                  <CardTitle>Local Delivery</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  We offer local delivery services for our customers. Contact us
                  to learn more about delivery options in your area.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Clock className="h-8 w-8 text-teal-600" />
                <div>
                  <CardTitle>Medication Counseling</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  Our pharmacists are available to answer your health-related
                  queries and provide guidance on your medications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <ShieldCheck className="h-8 w-8 text-teal-600" />
                <div>
                  <CardTitle>Prescription Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p>
                  We make it easy to fill and refill your prescriptions. Visit
                  our pharmacy or contact us to learn more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 bg-gray-50 grid place-items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                What Our Customers Say
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Hear from our satisfied customers about their experience with us
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Sarah Johnson</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  &quot;The pharmacists are very knowledgeable and always take
                  time to explain my medications. {"I've"} been using this
                  pharmacy for years and have never been disappointed.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Michael Thompson</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  &quot;I appreciate the personal touch this pharmacy provides.
                  They know me by name and always make sure I understand my
                  prescriptions.&quot;
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Emily Rodriguez</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  &quot;The consultation service has been a lifesaver. I can get
                  professional advice without having to wait for hours. Highly
                  recommend this pharmacy!&quot;
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-teal-600 text-white grid place-items-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Visit Our Pharmacy Today
              </h2>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                {"We're"} here to help with all your healthcare needs
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
              >
                <Link href="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
