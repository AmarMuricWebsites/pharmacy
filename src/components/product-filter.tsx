"use client";

import { useState } from "react";
import { Filter, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function ProductFilter() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [openCategories, setOpenCategories] = useState(true);
  const [openBrands, setOpenBrands] = useState(true);
  const [openRating, setOpenRating] = useState(true);

  const categories = [
    { id: "vitamins", label: "Vitamins & Supplements" },
    { id: "pain", label: "Pain Relief" },
    { id: "cold", label: "Cold & Flu" },
    { id: "allergy", label: "Allergy" },
    { id: "first-aid", label: "First Aid" },
    { id: "devices", label: "Medical Devices" },
    { id: "personal", label: "Personal Care" },
  ];

  const brands = [
    { id: "brand1", label: "HealthPlus" },
    { id: "brand2", label: "MediCare" },
    { id: "brand3", label: "NatureCare" },
    { id: "brand4", label: "VitaWell" },
    { id: "brand5", label: "PharmaTrust" },
  ];

  const ratings = [
    { id: "rating5", label: "5 Stars", value: 5 },
    { id: "rating4", label: "4 Stars & Up", value: 4 },
    { id: "rating3", label: "3 Stars & Up", value: 3 },
    { id: "rating2", label: "2 Stars & Up", value: 2 },
    { id: "rating1", label: "1 Star & Up", value: 1 },
  ];

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-4">Price Range</h3>
        <Slider
          defaultValue={[0, 100]}
          max={200}
          step={1}
          value={priceRange}
          onValueChange={setPriceRange}
          className="mb-2"
        />
        <div className="flex items-center justify-between">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <Collapsible open={openCategories} onOpenChange={setOpenCategories}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Categories</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              {openCategories ? "-" : "+"}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={category.id} />
                <Label htmlFor={category.id} className="text-sm cursor-pointer">
                  {category.label}
                </Label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openBrands} onOpenChange={setOpenBrands}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Brands</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              {openBrands ? "-" : "+"}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="space-y-2">
            {brands.map((brand) => (
              <div key={brand.id} className="flex items-center space-x-2">
                <Checkbox id={brand.id} />
                <Label htmlFor={brand.id} className="text-sm cursor-pointer">
                  {brand.label}
                </Label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={openRating} onOpenChange={setOpenRating}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-medium">Rating</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
              {openRating ? "-" : "+"}
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="space-y-2">
            {ratings.map((rating) => (
              <div key={rating.id} className="flex items-center space-x-2">
                <Checkbox id={rating.id} />
                <Label
                  htmlFor={rating.id}
                  className="text-sm cursor-pointer flex items-center"
                >
                  <div className="flex mr-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < rating.value
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  {rating.label}
                </Label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Button className="w-full bg-teal-600 hover:bg-teal-700">
        Apply Filters
      </Button>
    </div>
  );

  if (false) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            className="w-full flex items-center justify-center"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[400px]">
          <h2 className="text-xl font-bold mb-6">Filters</h2>
          <FilterContent />
        </SheetContent>
      </Sheet>
    );
  }

  return <FilterContent />;
}
