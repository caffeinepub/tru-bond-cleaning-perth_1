import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Clock, Heart, Shield, Star } from "lucide-react";
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
                className="text-white/80 text-lg mb-6 leading-relaxed"
              >
                We started Tru Bond Cleaning Perth because we knew renters
                deserved better. Too many people in Perth were losing hundreds —
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
                src="/assets/generated/bond-back-guarantee-perth.dim_800x500.jpg"
                alt="100% bond back guarantee from Tru Bond Cleaning Perth"
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
              business. We&apos;re based in Perth and we only service Perth —
              that means we know this city, we know its rental market, and we
              know what Perth property managers expect at an inspection.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Our team of cleaners is fully trained in end-of-lease cleaning
              standards. Every cleaner on our team has completed a national
              police check and holds public liability insurance. When we enter
              your home, you can trust that you&apos;re in safe, professional
              hands.
            </motion.p>
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

      {/* Bond Back Guarantee */}
      <section className="py-16">
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
              inspection, contact us and we&apos;ll come back and fix it at no
              charge.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-white/80 max-w-xl mx-auto"
            >
              This guarantee is our commitment to you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Suburbs */}
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
              className="text-3xl font-display font-black mb-4 text-center"
            >
              Serving All Perth Suburbs
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-center text-muted-foreground mb-8"
            >
              We clean properties right across the Perth metro area.
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
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-black mb-3">
            Ready to Book Your Bond Clean?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us today for a free, no-obligation quote. We&apos;d love to
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
