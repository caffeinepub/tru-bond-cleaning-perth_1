import SEOMeta from "@/components/SEOMeta";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const serviceOptions = [
  { id: "general", label: "General Bond Clean" },
  { id: "kitchen", label: "Kitchen Deep Clean" },
  { id: "bathroom", label: "Bathroom Cleaning" },
  { id: "carpet", label: "Carpet Steam Cleaning" },
  { id: "windows", label: "Window Cleaning" },
  { id: "oven", label: "Oven Cleaning" },
];

const suburbs = [
  "Perth CBD",
  "Fremantle",
  "Joondalup",
  "Rockingham",
  "Mandurah",
  "Midland",
  "Victoria Park",
  "Subiaco",
  "Cottesloe",
  "Claremont",
  "Nedlands",
  "Scarborough",
  "Innaloo",
  "Balcatta",
  "Morley",
  "Dianella",
  "Mount Lawley",
  "Northbridge",
  "East Perth",
  "South Perth",
  "Como",
  "Applecross",
  "Canning Vale",
  "Gosnells",
  "Armadale",
];

const trustPoints = [
  {
    icon: Shield,
    text: "100% Bond Back Guarantee — we return free within 72 hours if anything is missed",
  },
  {
    icon: Star,
    text: "Trusted by 500+ Perth renters who got their full bond back",
  },
  { icon: Award, text: "Police-checked, fully insured cleaners on every job" },
  {
    icon: Award,
    text: "REIWA-standard cleaning checklist used on every property",
  },
  {
    icon: Shield,
    text: "Same-day and weekend bookings available across Perth",
  },
  {
    icon: Star,
    text: "Transparent, all-inclusive pricing — no hidden fees on the day",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [suburb, setSuburb] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const servicesText = selectedServices
      .map((id) => serviceOptions.find((s) => s.id === id)?.label)
      .filter(Boolean)
      .join(", ");

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Suburb: ${suburb}`,
      `Property Type: ${propertyType}`,
      `Services Required: ${servicesText}`,
      `Preferred Date: ${preferredDate}`,
      `Additional Notes: ${notes}`,
    ].join("%0A");

    const subject = encodeURIComponent(`Bond Clean Quote Request from ${name}`);
    const mailtoHref = `mailto:humptydumptybondcleaning@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoHref;
  };

  return (
    <div>
      <SEOMeta
        title="Contact Tru Bond Cleaning Perth | Get a Free Bond Clean Quote Today"
        description="Get in touch with Tru Bond Cleaning Perth for a free, no-obligation bond cleaning quote. Chat on WhatsApp, call, or use our quick enquiry form. Same-day bookings available across all Perth suburbs."
        keywords="contact bond cleaning Perth, bond clean quote Perth, book bond cleaning Perth, Tru Bond Cleaning contact"
        ogImage="/assets/generated/contact-tru-bond-perth.dim_800x400.jpg"
        canonicalUrl="https://trubondcleaningbrisbane.com/contact"
      />

      {/* Hero Banner */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/contact-tru-bond-perth.dim_800x400.jpg"
            alt="Contact Tru Bond Cleaning Perth for a free bond cleaning quote"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-black mb-4">
            Contact Tru Bond Cleaning Perth
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Getting in touch is easy. Chat on WhatsApp for the fastest response,
            or fill in our form below for a free quote.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: WhatsApp + Trust + Info */}
          <motion.div initial="hidden" animate="show" variants={stagger}>
            {/* WhatsApp CTA */}
            <motion.div
              variants={fadeUp}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-display font-black mb-2">
                Chat on WhatsApp &ndash; Fast Response
              </h2>
              <p className="text-muted-foreground mb-6">
                The quickest way to get a quote. We usually reply within minutes
                during business hours.
              </p>
              <a
                href="https://wa.me/61488841883"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="contact.whatsapp.button"
                className="whatsapp-btn inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="font-semibold">0488 841 883</span>
              </div>
            </motion.div>

            {/* Trust signals */}
            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="text-2xl font-display font-black mb-4">
                Why Perth Renters Choose Us
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                When you book with Tru Bond Cleaning Perth, you are booking with
                a team that has successfully returned bonds for over 500 Perth
                renters. We show up on time, we clean to REIWA inspection
                standards, and we stand behind every job with our 100% bond back
                guarantee.
              </p>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                Every cleaner on our team is police-checked and fully insured.
                We do not use sub-contractors — the same trusted team is on your
                job from start to finish. You deal directly with the business
                owner, not a call centre.
              </p>
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point.text} className="flex items-start gap-3">
                    <point.icon className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Service Area */}
            <motion.div variants={fadeUp}>
              <h2 className="text-2xl font-display font-black mb-4">
                Our Service Area
              </h2>
              <p className="text-muted-foreground mb-4">
                We service all Perth suburbs, including:
              </p>
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-5 h-5 text-brand-teal mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  {suburbs.join(" • ")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div initial="hidden" animate="show" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="bg-card border border-border rounded-2xl p-8 shadow-card"
            >
              <h2 className="text-2xl font-display font-black mb-2">
                Get a Free Quote
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                Fill in the form below and your email app will open so you can
                send us your details directly.
              </p>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact.form"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-semibold"
                    >
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Johnson"
                      data-ocid="contact.name.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-semibold"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0412 345 678"
                      data-ocid="contact.phone.input"
                    />
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-semibold"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    data-ocid="contact.email.input"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="suburb"
                      className="mb-1.5 block text-sm font-semibold"
                    >
                      Suburb / Area *
                    </Label>
                    <Input
                      id="suburb"
                      type="text"
                      required
                      value={suburb}
                      onChange={(e) => setSuburb(e.target.value)}
                      placeholder="e.g. Subiaco"
                      data-ocid="contact.suburb.input"
                    />
                  </div>
                  <div>
                    <Label className="mb-1.5 block text-sm font-semibold">
                      Property Type *
                    </Label>
                    <Select onValueChange={setPropertyType}>
                      <SelectTrigger data-ocid="contact.propertytype.select">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Studio/1-bed">
                          Studio / 1-bedroom
                        </SelectItem>
                        <SelectItem value="2-bedroom">2-bedroom</SelectItem>
                        <SelectItem value="3-bedroom">3-bedroom</SelectItem>
                        <SelectItem value="4-bedroom">4-bedroom</SelectItem>
                        <SelectItem value="5-bedroom+">5-bedroom+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block text-sm font-semibold">
                    Services Required
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((svc) => (
                      <div
                        key={svc.id}
                        className="flex items-center gap-2"
                        data-ocid={`contact.service.${svc.id}.checkbox`}
                      >
                        <Checkbox
                          id={`service-${svc.id}`}
                          checked={selectedServices.includes(svc.id)}
                          onCheckedChange={() => toggleService(svc.id)}
                        />
                        <Label
                          htmlFor={`service-${svc.id}`}
                          className="text-sm cursor-pointer"
                        >
                          {svc.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label
                    htmlFor="date"
                    className="mb-1.5 block text-sm font-semibold"
                  >
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    data-ocid="contact.date.input"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="notes"
                    className="mb-1.5 block text-sm font-semibold"
                  >
                    Additional Notes
                  </Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any special requirements, access instructions, or questions..."
                    data-ocid="contact.notes.textarea"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brand-teal hover:bg-brand-teal-dark text-white font-bold shadow-cta"
                  data-ocid="contact.form.submit_button"
                >
                  Send Quote Request
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Clicking above will open your email app with your details
                  pre-filled, ready to send.
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
