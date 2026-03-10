import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ChevronRight,
  Clock,
  DollarSign,
  Leaf,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    title: "General Bond Clean",
    summary:
      "We clean your entire rental from top to bottom — every room, every surface, every corner. Our detailed checklist follows REIWA standards so your inspection goes smoothly.",
    image: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    imageAlt: "Professional bond cleaning team in Perth – Tru Bond Cleaning",
  },
  {
    title: "Kitchen Deep Clean",
    summary:
      "Grease, grime, and burnt-on residue — we tackle it all. Our kitchen clean covers the oven, rangehood, stovetop, cupboards, benches, and sink until they sparkle.",
    image: "/assets/generated/kitchen-cleaning-perth.dim_800x500.jpg",
    imageAlt:
      "Professional kitchen bond cleaning service in Perth by Tru Bond Cleaning",
  },
  {
    title: "Bathroom & Toilet Clean",
    summary:
      "We remove soap scum, mould, limescale, and stains from tiles, shower screens, toilets, and vanities. We leave every bathroom spotless and inspection-ready.",
    image: "/assets/generated/bathroom-cleaning-perth.dim_800x500.jpg",
    imageAlt:
      "Sparkling clean bathroom after Tru Bond Cleaning Perth bond clean",
  },
  {
    title: "Carpet Steam Cleaning",
    summary:
      "Our hot water extraction steam cleaning removes deep-set stains, odours, and allergens. Most Perth leases require professional carpet cleaning — we've got you covered.",
    image: "/assets/generated/carpet-cleaning-perth.dim_800x500.jpg",
    imageAlt: "Professional carpet steam cleaning Perth – Tru Bond Cleaning",
  },
  {
    title: "Window Cleaning",
    summary:
      "Streak-free, crystal-clear windows — inside and out. We clean glass, tracks, frames, and fly screens so your property makes the best impression at inspection.",
    image: "/assets/generated/window-cleaning-perth.dim_800x500.jpg",
    imageAlt: "Window cleaning service Perth – Tru Bond Cleaning end of lease",
  },
  {
    title: "Oven & Appliance Cleaning",
    summary:
      "The oven is the hardest part of any bond clean. We disassemble, soak, scrub, and polish every part until it looks brand new — microwave, rangehood, and dishwasher too.",
    image: "/assets/generated/kitchen-cleaning-perth.dim_800x500.jpg",
    imageAlt:
      "Professional oven and appliance cleaning Perth by Tru Bond Cleaning",
  },
];

const whyChoose = [
  {
    icon: Shield,
    title: "100% Bond Back Guarantee",
    desc: "We come back free within 72 hours if anything is missed at inspection.",
  },
  {
    icon: Users,
    title: "Police-Checked Cleaners",
    desc: "Every cleaner on our team holds a current national police clearance.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    desc: "We use safe, environmentally friendly cleaning products throughout your home.",
  },
  {
    icon: Clock,
    title: "Same-Day & Weekend Bookings",
    desc: "Need us in a hurry? We offer same-day and weekend bookings across Perth.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "You get a fixed quote upfront — no hidden fees, no surprises on the day.",
  },
  {
    icon: Star,
    title: "Trusted by 500+ Perth Renters",
    desc: "Hundreds of Perth families have got their bond back with our help.",
  },
];

const faqs = [
  {
    q: "What is Bond Cleaning and Why is it Required?",
    a: "Bond cleaning (also called end-of-lease cleaning or exit cleaning) is a thorough clean of your entire rental home before you move out. Your landlord or property manager needs the place to be spotless before they give your bond money back.\n\nIn Western Australia, renters pay a security bond at the start of their lease. When you leave, the property must be as clean as it was when you moved in. If it's not clean, the landlord can keep part or all of your bond to pay for professional cleaning. That's why a proper bond clean is so important — it helps you get all your money back!",
  },
  {
    q: "Why is Bond Cleaning Important?",
    a: "Bond cleaning is important because it directly affects whether you get your security deposit back. In Perth, the average bond for a 3-bedroom home is between $2,000 and $4,000. That's a lot of money to lose just because of a dirty oven or grubby bathroom tiles.\n\nA professional bond clean makes sure every single part of the property meets the real estate agent's standards. It removes stains, grime, mould, and odours that regular cleaning misses. At Tru Bond Cleaning Perth, we follow a detailed checklist that covers every room, every surface, and every appliance — so your inspection goes smoothly.",
  },
  {
    q: "How Much Does a Bond Clean Cost?",
    a: "The cost of a bond clean in Perth depends on the size of your home and its condition. Here's a rough guide:\n\n• Studio / 1-bedroom: from $250–$350\n• 2-bedroom unit: from $320–$450\n• 3-bedroom house: from $420–$600\n• 4-bedroom house: from $550–$750\n\nThese prices may vary if the property needs extra work like carpet steam cleaning, oven cleaning, or external window cleaning. At Tru Bond Cleaning Perth, we give you a free, no-obligation quote upfront — so you know exactly what you're paying before we start.",
  },
  {
    q: "What is a Full Bond Clean?",
    a: "A full bond clean covers every single area of your rental property from top to bottom. It's much more detailed than a regular weekly clean. A full bond clean includes:\n\n• All rooms: vacuuming, mopping, dusting, cobweb removal\n• Kitchen: oven, rangehood, stovetop, benches, cupboards (inside and out), sink\n• Bathrooms: tiles, shower screens, toilets, basins, mirrors, exhaust fans\n• Bedrooms: built-in wardrobes, window sills, skirting boards\n• Living areas: ceiling fans, light fittings, air con filters\n• Laundry: tub, taps, shelves\n• Garage & outdoor areas (if requested)\n• Windows: interior glass and tracks\n\nA professional team like Tru Bond Cleaning Perth covers all of this and more with a satisfaction guarantee.",
  },
  {
    q: "Which Are the Top-Rated Bond Cleaning Companies Near Me?",
    a: "Here are 5 top-rated bond cleaning companies in Perth and Brisbane:\n\n1. End of Lease Cleaning Perth (endofleasecleaningperth.com.au) — One of Perth's most established bond cleaning services. Flexible scheduling, a comprehensive checklist, and a satisfaction guarantee.\n\n2. Whizz (whizz.com.au) — A tech-forward platform to book online in seconds. Vetted cleaners, transparent pricing, and easy rebooking.\n\n3. Jim's Cleaning Perth (jimscleaning.com.au) — Part of the Jim's Group franchise network. Professional service, insurance coverage, and satisfaction guarantee.\n\n4. Electrodry (electrodry.com.au) — Well known for carpet and upholstery cleaning across Australia. Dry cleaning technology that dries faster.\n\n5. Tru Bond Cleaning (trubondcleaningbrisbane.com) — Serving Perth and Brisbane, our team delivers a meticulous end-of-lease clean backed by a 100% bond back guarantee. Trained, police-checked cleaners with transparent pricing.",
  },
  {
    q: "Which Cleaning Products Are Best for Bond Cleaning?",
    a: "Professional bond cleaners in Perth use products that cut through grease, remove mould, and leave surfaces sparkling:\n\n• White King Bleach — Great for bathrooms, toilets, and mould removal\n• Sugar Soap — Perfect for washing walls and removing marks\n• Exit Mould — Specifically designed to kill bathroom mould\n• Selleys Shower Power — Removes soap scum and water marks from glass and tiles\n• Easy-Off Oven Cleaner — The go-to for tough oven grease\n• Enjo Cleaning Fibres — Eco-friendly microfibre cloths that work without harsh chemicals\n\nAt Tru Bond Cleaning Perth, we bring all our own professional-grade products — you don't need to provide anything.",
  },
  {
    q: "How Much Does Professional Bond Cleaning Typically Cost?",
    a: "Professional bond cleaning in Perth typically costs between $250 and $750 depending on property size, condition, and add-on services. Most cleaners charge either a fixed rate or an hourly rate.\n\nFixed-rate packages are usually better value because you know exactly what you'll pay. Carpet cleaning, oven cleaning, and external window washing are often charged separately. Always ask for a written quote before booking so there are no surprises on the day.",
  },
  {
    q: "What Products Are Best for Bond Cleaning Carpets?",
    a: "When it comes to carpet cleaning during a bond clean, steam cleaning is the gold standard. Here are the best products and equipment used by professionals:\n\n• Bissell ProHeat 2X Revolution (bissell.com/en-au) — A powerful carpet cleaner for deep stains\n• Kärcher Puzzi Carpet Cleaner (karcher.com/au) — Professional-grade injection-extraction cleaner\n• Rug Doctor Carpet Cleaner — Available for hire at major Perth supermarkets\n• Woolite Carpet & Upholstery Cleaner (woolite.com.au) — Gentle formula safe for wool and delicate fibres\n\nFor the best results, always hire a professional carpet steam cleaner as part of your bond clean.",
  },
  {
    q: "How Do I Choose a Reliable Bond Cleaner?",
    a: "Choosing the right bond cleaner is important. Here's what to look for:\n\n• Bond back guarantee — Will they come back free if something is missed?\n• Checklist-based cleaning — Do they follow a room-by-room checklist?\n• Reviews — Check Google reviews and word of mouth\n• Insurance — Are they insured in case of damage?\n• Police checks — Are the cleaners background checked?\n• Transparent pricing — Do they give you a written quote?\n• Experience — How long have they been doing bond cleans in Perth?\n\nTru Bond Cleaning Perth ticks all these boxes. We're fully insured, police-checked, and we back every job with a satisfaction guarantee.",
  },
  {
    q: "Can I Book a Bond Cleaning Company Online with a Satisfaction Guarantee?",
    a: "Yes! At Tru Bond Cleaning Perth, you can book your bond clean quickly and easily right here on our website or via WhatsApp. We back every clean with a 100% satisfaction guarantee.\n\nIf your property manager isn't happy with any part of our work, we'll come back and fix it for free — no questions asked. Our online booking is simple: tell us your property details, choose your services, pick a date, and we'll confirm your booking. It's that easy.",
  },
  {
    q: "How Much Does a Cleaner Cost Per Hour in Perth?",
    a: "In Perth, professional cleaners typically charge between $40 and $60 per hour for general cleaning. Bond cleaning and end-of-lease cleaning often has a flat fee rather than an hourly rate, as the job scope is fixed.\n\nFor a better deal, always ask for a fixed quote rather than paying by the hour — that way, you know the total cost upfront and there are no surprises if the job takes longer than expected.",
  },
  {
    q: "How Much is End-of-Lease Cleaning in Australia? How Much to Pay a Cleaner for 3 Hours? What is the 20-Minute Rule in Cleaning?",
    a: "End-of-lease cleaning costs in Australia typically range from $250 to $800+ depending on property size and location. Perth is generally in line with the national average.\n\nFor a 3-hour clean, expect to pay between $120 and $180 at standard rates of $40–$60/hour. However, for a bond clean, a single 3-hour session is rarely enough to clean an entire rental property properly. Most bond cleans take 4–12 hours depending on the size and condition of the home.\n\nThe 20-minute rule in cleaning is a popular time-management tip: focus intensely on one task or room for 20 minutes, then move on. Professional cleaners use structured systems to clean efficiently, but a thorough bond clean goes far beyond the 20-minute rule — every surface must be spotless.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative min-h-[600px] flex items-center"
        data-ocid="hero.section"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg"
            alt="Professional bond cleaning team in Perth – Tru Bond Cleaning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate="show"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block bg-brand-teal text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Perth&apos;s #1 Bond Cleaning Service
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-4"
            >
              Bond Cleaning Perth &ndash;{" "}
              <span className="text-brand-teal-light">
                Get Your Full Bond Back, Guaranteed
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/85 mb-8 leading-relaxed"
            >
              Perth&apos;s most trusted end-of-lease cleaning team. We clean
              every corner so your landlord has nothing to complain about.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold shadow-cta text-base"
              >
                <Link to="/contact" data-ocid="hero.quote.button">
                  Get a Free Quote
                </Link>
              </Button>
              <WhatsAppButton size="lg" ocid="hero.whatsapp.button" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-teal text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold">
            <span>&#10003; 100% Bond Back Guarantee</span>
            <span>&#10003; Same-Day Bookings Available</span>
            <span>&#10003; Police-Checked Cleaners</span>
            <span>&#10003; Eco-Friendly Products</span>
            <span>&#10003; Trusted by 500+ Perth Renters</span>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-secondary/30" data-ocid="services.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-display font-black text-foreground mb-3"
            >
              Our Bond Cleaning Services in Perth
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              We offer a complete range of end-of-lease cleaning services.
              Everything you need to pass your rental inspection, all in one
              visit.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((svc, i) => (
              <motion.div key={svc.title} variants={fadeUp}>
                <Card
                  className="overflow-hidden shadow-card hover:shadow-cta transition-shadow h-full"
                  data-ocid={`services.item.${i + 1}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.imageAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-display font-bold text-lg mb-2 text-foreground">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {svc.summary}
                    </p>
                    <Link
                      to="/services"
                      data-ocid={`services.item.${i + 1}.link`}
                      className="inline-flex items-center gap-1 text-brand-teal font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Learn More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" data-ocid="why-choose.section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-display font-black mb-4"
              >
                Why Choose Tru Bond Cleaning Perth?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground mb-8"
              >
                We&apos;re not just another cleaning company. We&apos;re Perth
                renters&apos; most trusted partner for getting their bond back
                in full.
              </motion.p>
              <motion.div
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {whyChoose.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
                  >
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-brand-teal/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-brand-teal" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {item.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/generated/bond-back-guarantee-perth.dim_800x500.jpg"
                alt="100% bond back guarantee from Tru Bond Cleaning Perth"
                className="w-full rounded-2xl shadow-cta"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-secondary/30" data-ocid="faq.section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-display font-black mb-3"
            >
              Bond Cleaning Perth &ndash; Frequently Asked Questions
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground">
              Everything you need to know about bond cleaning in Perth, answered
              simply and clearly.
            </motion.p>
          </motion.div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={faq.q}
                value={`faq-${i}`}
                data-ocid={`faq.item.${i + 1}`}
                className="bg-card rounded-xl border border-border px-5 shadow-card"
              >
                <AccordionTrigger
                  className="text-left font-semibold text-foreground hover:text-brand-teal py-4"
                  data-ocid={`faq.item.${i + 1}.toggle`}
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4 leading-relaxed whitespace-pre-line">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 bg-brand-teal text-white"
        data-ocid="cta.section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl font-display font-black mb-4"
            >
              Ready to Get Your Bond Back?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/85 text-lg mb-8">
              Book your free quote today &mdash; we&apos;ll take care of the
              rest.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-brand-teal hover:bg-white/90 font-bold text-base"
              >
                <Link to="/contact" data-ocid="cta.quote.button">
                  Get a Free Quote
                </Link>
              </Button>
              <WhatsAppButton
                size="lg"
                text="Chat on WhatsApp"
                ocid="cta.whatsapp.button"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
