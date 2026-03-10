import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

type ContentBlock = { type: string; text?: string; items?: string[] };

const services = [
  {
    id: "general-bond-clean",
    title: "General Bond Clean Perth – The Complete End-of-Lease Solution",
    image: "/assets/generated/hero-bond-cleaning-perth.dim_1200x600.jpg",
    imageAlt: "Professional bond cleaning team in Perth – Tru Bond Cleaning",
    content: [
      {
        type: "para",
        text: "Moving out of a rental property is stressful enough without worrying about whether the place is clean enough to pass inspection. At Tru Bond Cleaning Perth, our general bond clean covers your entire home from the front door to the back fence. We know exactly what real estate agents look for — and we make sure your property passes first time, every time.",
      },
      {
        type: "para",
        text: "Our general bond clean follows a detailed, room-by-room checklist that aligns with the Real Estate Institute of Western Australia (REIWA) standards. We don't guess or rush — we work systematically through your home to make sure every surface, corner, and fixture is spotless before we leave.",
      },
      { type: "heading", text: "What's Included in Our General Bond Clean:" },
      {
        type: "list",
        items: [
          "Every room gets vacuumed and mopped",
          "Dust and cobwebs removed from ceilings, cornices, and light fittings",
          "Skirting boards, door frames, and window sills wiped down",
          "All windows cleaned inside, including tracks and frames",
          "Built-in wardrobes and storage spaces cleaned inside and out",
          "Air conditioning filters removed and washed",
          "Ceiling fans dusted and wiped",
          "Power points and light switches spot-cleaned",
        ],
      },
      {
        type: "heading",
        text: "Why Perth Renters Choose Our General Bond Clean:",
      },
      {
        type: "para",
        text: "In Perth's competitive rental market, landlords and property managers hold high expectations. A missed mark on a wall, a dusty ceiling fan, or a grubby skirting board can cost you hundreds of dollars from your bond. Our team has cleaned hundreds of Perth rental properties and we know the common areas that inspectors focus on. We don't just clean the obvious spots — we get into every nook and cranny so your inspection goes smoothly.",
      },
      {
        type: "para",
        text: "Our cleaners arrive with all the equipment and professional-grade cleaning products they need. You don't need to provide a single thing — just hand us the keys and we'll take care of the rest. We work efficiently without cutting corners, and we're happy to work around your moving schedule, including weekends and same-day bookings.",
      },
      { type: "heading", text: "Our Bond Back Guarantee:" },
      {
        type: "para",
        text: "Every general bond clean at Tru Bond Cleaning Perth comes with our 100% bond back guarantee. If your property manager finds something we missed during the inspection, we'll come back and fix it within 72 hours at no extra cost. Your peace of mind is our priority.",
      },
      {
        type: "para",
        text: "Book your general bond clean in Perth today. Get a free, no-obligation quote online or chat with us on WhatsApp. Moving out has never been this easy.",
      },
    ] as ContentBlock[],
  },
  {
    id: "kitchen-deep-clean",
    title:
      "Kitchen Deep Clean Perth – Grease, Grime, and Everything In Between",
    image: "/assets/generated/kitchen-cleaning-perth.dim_800x500.jpg",
    imageAlt:
      "Professional kitchen bond cleaning service in Perth by Tru Bond Cleaning",
    content: [
      {
        type: "para",
        text: "The kitchen is always the hardest room to clean during a bond clean — and it's always the room your property manager scrutinises most. Grease builds up on the rangehood, oven racks turn brown, and the inside of cupboards collects crumbs and spills over months or years. A regular wipe-down won't cut it when you're trying to get your bond back.",
      },
      {
        type: "para",
        text: "At Tru Bond Cleaning Perth, our kitchen deep clean tackles every single surface in your kitchen with professional-grade degreasers and cleaning equipment. We restore your kitchen to the same clean condition it was in when you first moved in.",
      },
      { type: "heading", text: "What's Included in Our Kitchen Deep Clean:" },
      {
        type: "list",
        items: [
          "Oven disassembled — all racks, trays, and shelves soaked and scrubbed",
          "Oven interior cleaned free of burnt-on residue and grease",
          "Oven door and glass panel polished streak-free",
          "Rangehood filter removed, washed, and degreased",
          "Stovetop (gas or electric) cleaned of all grease and food residue",
          "All benchtops wiped down and sanitised",
          "Sink and taps scrubbed and polished",
          "Cupboard doors cleaned inside and out",
          "Dishwasher cleaned inside and out",
          "Splashback tiles degreased and polished",
          "Kitchen floor mopped around oven and under fridge",
        ],
      },
      { type: "heading", text: "Why Our Kitchen Clean Stands Out:" },
      {
        type: "para",
        text: "Many end-of-lease cleaners rush through the kitchen and miss key areas like the inside of the rangehood, behind the stovetop, or the rubber seal around the oven door. These are exactly the areas property managers check. Our team is trained to find and fix every greasy corner. We use commercial-strength degreasers that cut through years of built-up grease in minutes, leaving your kitchen looking and smelling brand new.",
      },
      {
        type: "para",
        text: "Whether you need just the kitchen done or a full property bond clean, Tru Bond Cleaning Perth has you covered. Contact us on WhatsApp or get a free quote online. We'll make your kitchen sparkle.",
      },
    ] as ContentBlock[],
  },
  {
    id: "bathroom-toilet-clean",
    title:
      "Bathroom & Toilet Cleaning Perth – Spotless, Sanitised, and Ready for Inspection",
    image: "/assets/generated/bathroom-cleaning-perth.dim_800x500.jpg",
    imageAlt:
      "Sparkling clean bathroom after Tru Bond Cleaning Perth bond clean",
    content: [
      {
        type: "para",
        text: "Bathrooms are one of the most scrutinised rooms during a rental inspection. Soap scum on shower screens, mould on grout, limescale on taps, and stains in the toilet — these are the things that get renters' bonds docked. Regular cleaning can keep a bathroom tidy, but it takes a professional-grade clean to make it truly inspection-ready.",
      },
      {
        type: "para",
        text: "At Tru Bond Cleaning Perth, our bathroom and toilet cleaning service removes every trace of mould, limescale, soap scum, and grime. We leave your bathroom tiles, shower screens, mirrors, and fixtures absolutely spotless.",
      },
      {
        type: "heading",
        text: "What's Included in Our Bathroom & Toilet Clean:",
      },
      {
        type: "list",
        items: [
          "Shower screens, tiles, and grout scrubbed and polished",
          "Shower recess and bath thoroughly cleaned and disinfected",
          "All taps, mixers, and showerheads descaled and polished",
          "Vanity benchtops and sinks wiped, scrubbed, and sanitised",
          "Mirrors cleaned streak-free",
          "Toilet bowls, cisterns, seats, and surrounding floor disinfected",
          "Exhaust fans removed and cleaned of dust and build-up",
          "Towel rails and toilet roll holders wiped",
          "Cabinet doors and shelving dusted and cleaned",
          "Bathroom floor mopped with disinfectant solution",
        ],
      },
      { type: "heading", text: "Tackling Mould and Limescale:" },
      {
        type: "para",
        text: "Perth's water has high mineral content, which causes limescale build-up on taps, shower screens, and tiles. Mould loves the warm, damp conditions in Perth bathrooms. These are two of the most common reasons property managers withhold bond money. Our team uses specialist descaling agents and mould-killing products to tackle both problems at the source. We don't just wipe over the surface — we treat the problem properly so your bathroom passes inspection with flying colours.",
      },
      {
        type: "para",
        text: "Most Perth rental homes have at least two bathrooms. Our team cleans all of them as part of our comprehensive bond clean package. Whether your home has an ensuite, a main bathroom, or a separate toilet, we cover every one.",
      },
      {
        type: "para",
        text: "Don't let a dirty bathroom cost you your bond. Tru Bond Cleaning Perth delivers a professional bathroom and toilet clean that meets real estate inspection standards. Get a free quote online or chat with us on WhatsApp today.",
      },
    ] as ContentBlock[],
  },
  {
    id: "carpet-steam-cleaning",
    title:
      "Carpet Steam Cleaning Perth – Deep Clean That Gets Right to the Roots",
    image: "/assets/generated/carpet-cleaning-perth.dim_800x500.jpg",
    imageAlt: "Professional carpet steam cleaning Perth – Tru Bond Cleaning",
    content: [
      {
        type: "para",
        text: "Carpets take a beating during a tenancy. Foot traffic, pet hair, spills, and everyday dirt all work their way deep into carpet fibres. A regular vacuum removes surface dust, but it doesn't get rid of the deep-set stains, odours, and allergens that accumulate over time. When you move out, your property manager expects the carpets to look as close to new as possible — and that means professional steam cleaning.",
      },
      {
        type: "para",
        text: "At Tru Bond Cleaning Perth, we use hot water extraction steam cleaning to deep-clean your carpets and restore them to a near-original condition. Our powerful cleaning machines inject hot water and cleaning solution deep into the carpet pile, then extract it along with all the dirt, stains, and bacteria.",
      },
      {
        type: "heading",
        text: "What's Included in Our Carpet Steam Cleaning:",
      },
      {
        type: "list",
        items: [
          "Pre-treatment of all visible stains before the main clean",
          "Steam cleaning machine run methodically across every carpeted area",
          "Cleaning solutions safe for all carpet types (wool, nylon, synthetic)",
          "High-powered extraction removes most moisture for faster drying",
          "Odour treatment — great if you've had pets in the home",
          "Proof of professional cleaning receipt provided",
        ],
      },
      { type: "heading", text: "Why Perth Property Managers Require It:" },
      {
        type: "para",
        text: "Most Perth lease agreements specify that carpets must be professionally steam cleaned at the end of the tenancy — not just vacuumed. This is a common clause in REIWA lease agreements. If you don't have a receipt from a professional carpet cleaner, your property manager may withhold bond money to have it done themselves. Tru Bond Cleaning Perth always provides a receipt you can show to your property manager as proof of professional cleaning.",
      },
      {
        type: "para",
        text: "We treat common carpet stains including red wine, coffee, pet urine, mud, and food spills. While we can't guarantee every stain will disappear completely (some stains set permanently), our pre-treatment process gives the best possible chance of removal.",
      },
      {
        type: "para",
        text: "Carpet steam cleaning is an essential part of every bond clean. Add it to your Tru Bond Cleaning Perth package and get everything done in one visit. Get your free quote online or contact us on WhatsApp.",
      },
    ] as ContentBlock[],
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning Perth – Crystal Clear Results, Inside and Out",
    image: "/assets/generated/window-cleaning-perth.dim_800x500.jpg",
    imageAlt: "Window cleaning service Perth – Tru Bond Cleaning end of lease",
    content: [
      {
        type: "para",
        text: "Dirty windows are one of the quickest ways to fail a rental inspection. Streaks, water marks, and grime on window glass make the whole property look uncared for — even if everything else is spotless. Property managers and landlords notice dirty windows immediately, and they expect them to be clean for the final inspection.",
      },
      {
        type: "para",
        text: "At Tru Bond Cleaning Perth, our window cleaning service covers all interior windows as standard, and we offer exterior window cleaning as an optional add-on. We use professional squeegees, microfibre cloths, and streak-free cleaning solutions to leave every pane of glass crystal clear.",
      },
      {
        type: "heading",
        text: "What's Included in Our Window Cleaning Service:",
      },
      {
        type: "list",
        items: [
          "All interior window glass cleaned with streak-free solution",
          "Window tracks and frames vacuumed and wiped",
          "Window sills wiped clean",
          "Fly screens removed, cleaned, and reinstalled",
          "Exterior windows cleaned with extension squeegees (optional add-on)",
          "Sliding door tracks and glass panels cleaned",
        ],
      },
      { type: "heading", text: "Dealing with Hard Water Stains:" },
      {
        type: "para",
        text: "Perth's hard water leaves mineral deposits on window glass that don't come off with regular spray-and-wipe cleaning. We use specialist hard water stain removers to tackle these stubborn marks and restore the glass to its original clarity. If left untreated, hard water stains can etch into glass permanently — so it's worth addressing them promptly.",
      },
      {
        type: "para",
        text: "Real estate agents walk through a property looking at the overall impression. Clean windows let in more natural light, making the whole home feel brighter and better presented. Our professional window cleaning makes sure your property makes the best possible impression.",
      },
      {
        type: "para",
        text: "Add professional window cleaning to your bond clean package with Tru Bond Cleaning Perth. Get a free, no-obligation quote online or chat with us on WhatsApp.",
      },
    ] as ContentBlock[],
  },
  {
    id: "oven-appliance-cleaning",
    title: "Oven & Appliance Cleaning Perth – The Dirtiest Job Done Right",
    image: "/assets/generated/kitchen-cleaning-perth.dim_800x500.jpg",
    imageAlt:
      "Professional oven and appliance cleaning Perth by Tru Bond Cleaning",
    content: [
      {
        type: "para",
        text: "The oven is consistently rated as the most time-consuming and difficult part of a bond clean. Years of baked-on grease, burnt food residue, and carbon deposits turn a standard oven into a full-scale cleaning project. Most renters attempt oven cleaning themselves and run out of time, patience, or the right products. Property managers know this — and oven cleanliness is one of the first things they check.",
      },
      {
        type: "para",
        text: "At Tru Bond Cleaning Perth, our oven and appliance cleaning service uses professional-grade alkaline degreasers and purpose-built cleaning tools to restore your oven, microwave, and other appliances to a like-new condition.",
      },
      {
        type: "heading",
        text: "What's Included in Our Oven & Appliance Clean:",
      },
      {
        type: "list",
        items: [
          "Oven completely disassembled — racks, trays, and door removed for soaking",
          "Oven cavity treated with commercial degreaser and scrubbed clean",
          "Oven glass polished streak-free, inside and out",
          "Rubber door seal cleaned carefully",
          "Stovetop burners, grates, and drip trays degreased and polished",
          "Rangehood filter removed, soaked, and scrubbed",
          "Rangehood interior and exterior degreased",
          "Microwave interior, turntable, and door seal cleaned and sanitised",
          "Dishwasher filter, spray arms, and interior walls cleaned",
          "Fridge interior and exterior wiped and sanitised (if required)",
        ],
      },
      {
        type: "heading",
        text: "Why Professional Oven Cleaning Makes a Difference:",
      },
      {
        type: "para",
        text: "Store-bought oven cleaners like Easy-Off are effective but require proper application time, protective equipment, and thorough rinsing. DIY oven cleaning often leaves a chemical residue or misses hard-to-reach areas like the back corners and door hinges. Our professional cleaning team arrives with the right products, the right tools, and the experience to clean your oven thoroughly and safely, without damaging the oven surfaces or leaving chemical residues.",
      },
      {
        type: "para",
        text: "Moving out fast? We offer same-day oven and appliance cleaning as a standalone service or as part of a full bond clean. Just contact us on WhatsApp and we'll do our best to fit you in.",
      },
      {
        type: "para",
        text: "Don't let a dirty oven cost you your bond. Tru Bond Cleaning Perth's oven and appliance cleaning service is thorough, affordable, and backed by our satisfaction guarantee. Get a free quote online or contact us on WhatsApp.",
      },
    ] as ContentBlock[],
  },
];

function renderContent(content: ContentBlock[]) {
  return content.map((block, i) => {
    const key = `${block.type}-${i}`;
    if (block.type === "para") {
      return (
        <p key={key} className="text-muted-foreground leading-relaxed mb-4">
          {block.text}
        </p>
      );
    }
    if (block.type === "heading") {
      return (
        <h3
          key={key}
          className="font-display font-bold text-foreground text-lg mt-6 mb-3"
        >
          {block.text}
        </h3>
      );
    }
    if (block.type === "list") {
      return (
        <ul key={key} className="space-y-2 mb-4">
          {block.items?.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-muted-foreground"
            >
              <CheckCircle className="w-4 h-4 text-brand-teal mt-0.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  });
}

export default function ServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-black mb-4">
            Our Bond Cleaning Services in Perth
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Complete end-of-lease cleaning services to help you get your full
            bond back. Every service is backed by our 100% satisfaction
            guarantee.
          </p>
        </div>
      </section>

      {/* Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {services.map((svc, i) => (
          <motion.section
            key={svc.id}
            id={svc.id}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            data-ocid={`services.item.${i + 1}.section`}
          >
            <div
              className={`grid lg:grid-cols-2 gap-12 items-start ${
                i % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <motion.div
                variants={fadeUp}
                className={i % 2 === 1 ? "lg:col-start-2" : ""}
              >
                <img
                  src={svc.image}
                  alt={svc.imageAlt}
                  className="w-full rounded-2xl shadow-cta"
                />
              </motion.div>
              <motion.div variants={stagger}>
                <motion.h2
                  variants={fadeUp}
                  className="text-2xl sm:text-3xl font-display font-black text-foreground mb-4"
                >
                  {svc.title}
                </motion.h2>
                <motion.div variants={fadeUp}>
                  {renderContent(svc.content)}
                </motion.div>
                <motion.div
                  variants={fadeUp}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  <Button
                    asChild
                    className="bg-brand-teal hover:bg-brand-teal-dark text-white shadow-cta"
                  >
                    <Link
                      to="/contact"
                      data-ocid={`services.item.${i + 1}.quote.button`}
                    >
                      Get a Free Quote
                    </Link>
                  </Button>
                  <WhatsAppButton
                    size="sm"
                    text="Chat on WhatsApp"
                    ocid={`services.item.${i + 1}.whatsapp.button`}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-brand-teal text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-black mb-3">
            Ready to Book Your Bond Clean?
          </h2>
          <p className="text-white/85 mb-8">
            Get a free, no-obligation quote today. We service all Perth suburbs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-teal hover:bg-white/90 font-bold"
            >
              <Link to="/contact" data-ocid="services.cta.quote.button">
                Get a Free Quote
              </Link>
            </Button>
            <WhatsAppButton size="lg" ocid="services.cta.whatsapp.button" />
          </div>
        </div>
      </section>
    </div>
  );
}
