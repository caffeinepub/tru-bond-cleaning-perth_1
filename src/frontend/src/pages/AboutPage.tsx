import SEOMeta from "@/components/SEOMeta";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Award, CheckCircle, Clock, Heart, Shield, Star } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const values = [
  {
    icon: Heart,
    title: "Honesty",
    desc: "We give you a straight quote and deliver what we promise. No hidden fees, no surprises.",
  },
  {
    icon: Star,
    title: "Thoroughness",
    desc: "We don't cut corners or rush the job. Every room, every surface, every time.",
  },
  {
    icon: Clock,
    title: "Reliability",
    desc: "We show up on time, every time. You can count on us to be there when you need us.",
  },
  {
    icon: Shield,
    title: "Accountability",
    desc: "If something isn't right, we fix it — no arguments, no extra charges.",
  },
];

const credentials = [
  "Police-checked cleaners with current national clearance certificates",
  "Fully covered by public liability insurance",
  "REIWA end-of-lease checklist training completed by all team members",
  "Eco-friendly, commercially certified cleaning products",
  "500+ successful bond cleans across Perth metro area",
  "Same-day and weekend bookings available across all Perth suburbs",
  "No sub-contractors — our own trained staff on every job",
  "Direct communication with the business owner at all times",
];

const processSteps = [
  {
    step: "1",
    title: "Request a Free Quote",
    desc: "Contact us via WhatsApp or our website form. Tell us your property size, suburb, and move-out date.",
  },
  {
    step: "2",
    title: "Receive Your Fixed Price",
    desc: "We send you a transparent, all-inclusive quote with no hidden extras. You know the total before we start.",
  },
  {
    step: "3",
    title: "We Show Up On Time",
    desc: "Our police-checked, fully equipped team arrives at your property ready to clean.",
  },
  {
    step: "4",
    title: "Full REIWA-Standard Clean",
    desc: "We work through every room on our detailed checklist — nothing is rushed, nothing is skipped.",
  },
  {
    step: "5",
    title: "Bond Back Guarantee",
    desc: "Your property passes inspection. If your agent raises an issue, we return within 72 hours free of charge.",
  },
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

export default function AboutPage() {
  return (
    <div>
      <SEOMeta
        title="About Tru Bond Cleaning Perth | Expert Bond Cleaners with 100% Bond Back Guarantee"
        description="Learn about Tru Bond Cleaning Perth. We are experienced, police-checked bond cleaning professionals in Perth. We have helped 500+ Perth renters get their full bond back."
        keywords="about Tru Bond Cleaning Perth, bond cleaning company Perth, professional bond cleaners Perth, trusted bond cleaners Perth"
        ogImage="/assets/generated/about-team-perth.dim_800x500.jpg"
        canonicalUrl="https://trubondcleaningbrisbane.com/about"
      />

      {/* Header */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate="show" variants={stagger}>
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl font-display font-black mb-4"
              >
                About Tru Bond Cleaning Perth
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-white/80 text-lg mb-4 leading-relaxed"
              >
                We started Tru Bond Cleaning Perth because we knew renters
                deserved better. Too many Perth renters were losing hundreds —
                sometimes thousands — of dollars from their security bonds, not
                because they were bad tenants, but because end-of-lease cleaning
                is genuinely hard to get right without professional training,
                equipment, and products.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-white/80 text-lg leading-relaxed"
              >
                Our mission is simple: help Perth renters get their full bond
                back, every time. We do that by delivering the most thorough,
                reliable, and stress-free bond cleaning service in Perth.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/assets/generated/about-team-perth.dim_800x500.jpg"
                alt="Tru Bond Cleaning Perth professional team ready for end of lease clean"
                className="w-full rounded-2xl shadow-cta"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-display font-black mb-4"
            >
              Who We Are
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg mb-4 leading-relaxed"
            >
              Tru Bond Cleaning Perth is a locally owned and operated cleaning
              business. We are based in Perth and we only service Perth — that
              means we know this city, we know its rental market, and we know
              what Perth property managers expect at an inspection.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg mb-4 leading-relaxed"
            >
              Our team of cleaners is fully trained in end-of-lease cleaning
              standards. Every cleaner on our team has completed a national
              police check and holds public liability insurance. When we enter
              your home, you can trust that you are in safe, professional hands.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              We do not use sub-contractors. Every person who cleans your home
              is a direct member of the Tru Bond Cleaning Perth team, trained by
              us to our standards. That means consistent quality, every single
              time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section
        className="py-16 bg-secondary/30"
        aria-labelledby="credentials-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                id="credentials-heading"
                variants={fadeUp}
                className="text-3xl font-display font-black mb-4"
              >
                Our Experience &amp; Credentials
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground mb-4 leading-relaxed"
              >
                We have completed over 500 bond cleans across Perth. Our team
                has seen every type of rental property — from inner-city studio
                apartments in Northbridge to large family homes in Canning Vale
                and Armadale.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground mb-6 leading-relaxed"
              >
                Every member of our team is trained specifically in REIWA
                end-of-lease cleaning standards. We know what property managers
                are looking for before they even open the front door.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-3">
                {credentials.map((c) => (
                  <motion.li
                    key={c}
                    variants={fadeUp}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                    {c}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/generated/end-of-lease-cleaning-perth.dim_800x500.jpg"
                alt="End of lease cleaning Perth by Tru Bond Cleaning professional team"
                className="w-full rounded-2xl shadow-cta"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-10"
          >
            <motion.h2
              id="process-heading"
              variants={fadeUp}
              className="text-3xl font-display font-black mb-3"
            >
              Our Cleaning Process
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground max-w-xl mx-auto"
            >
              From your first call to your bond being returned, here is exactly
              what happens when you book with us.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          >
            {processSteps.map((s) => (
              <motion.div
                key={s.step}
                variants={fadeUp}
                className="flex flex-col items-center text-center p-5 bg-secondary/40 rounded-2xl"
              >
                <div className="w-11 h-11 rounded-full bg-brand-teal flex items-center justify-center text-white font-black text-lg mb-3">
                  {s.step}
                </div>
                <h3 className="font-display font-bold text-sm mb-1">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-display font-black mb-8 text-center"
            >
              Our Values
            </motion.h2>
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {values.map((val) => (
                <motion.div
                  key={val.title}
                  variants={fadeUp}
                  className="bg-card rounded-2xl p-6 shadow-card text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center mx-auto mb-4">
                    <val.icon className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Customers Trust Us */}
      <section className="py-16" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/generated/bond-back-guarantee-certificate.dim_800x500.jpg"
                alt="Tru Bond Cleaning Perth 100% bond back guarantee certificate"
                className="w-full rounded-2xl shadow-cta"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2
                id="trust-heading"
                variants={fadeUp}
                className="text-3xl font-display font-black mb-4"
              >
                Why Our Customers Trust Us
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground mb-4 leading-relaxed"
              >
                When you invite a cleaning company into your home, trust matters
                more than anything. That is why we go out of our way to make
                sure every part of our service is transparent, professional, and
                accountable.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground mb-4 leading-relaxed"
              >
                We do not use sub-contractors. You always deal with the same
                trained team. If you have a question before, during, or after
                your clean, you can speak directly with the business owner — not
                a call centre.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground mb-4 leading-relaxed"
              >
                Our bond back guarantee is not a marketing gimmick. It is a real
                promise backed by real action. We have returned to properties
                across Perth to fix issues at our own cost, because we stand
                behind the quality of every clean we do.
              </motion.p>
              <motion.ul variants={stagger} className="space-y-2">
                {[
                  "No sub-contractors — your home, our team, every time",
                  "Direct owner contact — no call centres or outsourcing",
                  "Same team on every job for consistency",
                  "72-hour free return guarantee, no questions asked",
                  "Fully insured — your property is protected",
                ].map((point) => (
                  <motion.li
                    key={point}
                    variants={fadeUp}
                    className="flex items-start gap-2 text-sm text-foreground"
                  >
                    <Award className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bond Back Guarantee */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="bg-brand-teal text-white rounded-3xl p-10 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-display font-black mb-4"
            >
              Our Bond Back Guarantee
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/90 text-lg mb-2 max-w-2xl mx-auto leading-relaxed"
            >
              Every clean we do comes with a 100% bond back guarantee. If your
              property manager raises a cleaning issue within 72 hours of your
              inspection, contact us and we will come back and fix it at no
              charge.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-white/80 max-w-xl mx-auto"
            >
              This guarantee is our commitment to you. No fine print, no
              excuses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Suburbs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-display font-black mb-4 text-center"
            >
              Serving All Perth Suburbs
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-center text-muted-foreground mb-8"
            >
              We clean properties right across the Perth metro area — from the
              coast to the hills.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-2"
            >
              {suburbs.map((suburb) => (
                <span
                  key={suburb}
                  className="px-3 py-1.5 bg-card rounded-full text-sm font-medium border border-border text-foreground"
                >
                  {suburb}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-black mb-3 text-white">
            Ready to Book Your Bond Clean?
          </h2>
          <p className="text-white/80 mb-8">
            Contact us today for a free, no-obligation quote. We would love to
            help you get your bond back.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-brand-teal hover:bg-brand-teal-dark text-white shadow-cta"
            >
              <Link to="/contact" data-ocid="about.quote.button">
                Get a Free Quote
              </Link>
            </Button>
            <WhatsAppButton size="lg" ocid="about.whatsapp.button" />
          </div>
        </div>
      </section>
    </div>
  );
}
