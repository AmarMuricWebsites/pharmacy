"use client";

import type React from "react";
import { Clock, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function PrescriptionsPage() {
  const handleNewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast(
      "We've received your prescription request and will contact you shortly."
    );
  };

  const handleRefillSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Your refill request has been submitted successfully.");
  };

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 mx-auto">
      <h1 className="text-4xl font-bold mb-4">Prescription Services</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Request a new prescription or refill your existing medications
      </p>

      <Tabs defaultValue="new" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="new">New Prescription</TabsTrigger>
          <TabsTrigger value="refill">Request Refill</TabsTrigger>
        </TabsList>
        <TabsContent value="new">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Request a New Prescription</CardTitle>
                  <CardDescription>
                    Fill out this form to request a new prescription. Our
                    pharmacist will contact you to confirm details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" type="date" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="medication">
                        Medication Name (if known)
                      </Label>
                      <Input
                        id="medication"
                        placeholder="e.g., Lisinopril 10mg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor">{"Doctor's"} Name</Label>
                      <Input id="doctor" placeholder="Dr. Jane Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Information</Label>
                      <Textarea
                        id="notes"
                        placeholder="Please provide any additional information about your prescription needs"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-preference">
                        Preferred Contact Method
                      </Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="contact-phone"
                            name="contact-preference"
                            value="phone"
                          />
                          <Label htmlFor="contact-phone">Phone</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="contact-email"
                            name="contact-preference"
                            value="email"
                          />
                          <Label htmlFor="contact-email">Email</Label>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700"
                    >
                      Submit Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Submit Your Request</h3>
                      <p className="text-sm text-muted-foreground">
                        Fill out the form with your prescription details.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Pharmacist Contact</h3>
                      <p className="text-sm text-muted-foreground">
                        Our pharmacist will contact you to confirm details and
                        discuss your medication.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Preparation</h3>
                      <p className="text-sm text-muted-foreground">
                        {"We'll"} prepare your medication according to the
                        prescription.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Pickup or Delivery</h3>
                      <p className="text-sm text-muted-foreground">
                        Pick up your medication at our pharmacy or ask about our
                        local delivery options.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="refill">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Request a Refill</CardTitle>
                  <CardDescription>
                    Fill out the form below to request a refill for your
                    existing prescription.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRefillSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="refill-name">Full Name</Label>
                        <Input
                          id="refill-name"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="refill-email">Email</Label>
                        <Input
                          id="refill-email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="refill-phone">Phone Number</Label>
                        <Input
                          id="refill-phone"
                          placeholder="(123) 456-7890"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="refill-dob">Date of Birth</Label>
                        <Input id="refill-dob" type="date" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="prescription-number">
                        Prescription Number (if available)
                      </Label>
                      <Input
                        id="prescription-number"
                        placeholder="e.g., RX123456789"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="medication-name">Medication Name</Label>
                      <Input
                        id="medication-name"
                        placeholder="e.g., Lisinopril 10mg"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="doctor-name">Prescribing Doctor</Label>
                      <Input id="doctor-name" placeholder="Dr. Jane Smith" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="refill-notes">Additional Notes</Label>
                      <Textarea
                        id="refill-notes"
                        placeholder="Any specific instructions or information about your refill request"
                        rows={3}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700"
                    >
                      Request Refill
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Refill Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">
                    You can check the status of your refill request by calling
                    our pharmacy directly.
                  </p>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-teal-600" />
                    <span className="text-sm">
                      Processing time: 1-2 business days
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    If you have any questions about your prescription or refill,
                    our pharmacists are here to help.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-teal-600" />
                      <span className="text-sm">(123) 456-7890</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-teal-600" />
                      <span className="text-sm">
                        pharmacy@medicarepharmacy.com
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
