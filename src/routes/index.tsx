import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Phone, MapPin, Heart, ShieldCheck, Clock, MessageCircle } from "lucide-react";

import heroPuppy from "../assets/puppies/hero-puppy.jpg";
const GOLDEN_RETRIEVER_IMG =
  "https://tse3.mm.bing.net/th/id/OIP.hp6wntBrX3zPMbVAhZoQWwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
const BEAGLE_IMG =
  "https://tse2.mm.bing.net/th/id/OIP.CjztVxlw4SnfAD6hx78fIQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";
const LABRADOR_IMG =
  "https://tse3.mm.bing.net/th/id/OIP.wTKob21_rDSXihUsvbLECwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3";

const PHONE = "9870166623";
const PHONE_DISPLAY = "+91 98701 66623";
const WHATSAPP_LINK = `https://wa.me/91${PHONE}?text=Hi%20Gurgaon%20Puppy%20Point!%20I%20am%20interested%20in%20a%20puppy.`;

const getBreedWhatsAppLink = (breedName: string) => {
  const message = `Hi Gurgaon Puppy Point! I am interested in a ${breedName} puppy. Please share photos, price, and availability details.`;
  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;
};

const PUPPIES = [
  {
    name: "Golden Retriever",
    image: GOLDEN_RETRIEVER_IMG,
    age: "8 weeks old",
    price: "₹35,000",
    description: "Friendly, intelligent, and loyal — the perfect family companion.",
  },
  {
    name: "Labrador",
    image: LABRADOR_IMG,
    age: "7 weeks old",
    price: "₹32,000",
    description: "Outgoing, playful, and gentle — excellent with children.",
  },
  {
    name: "Shih Tzu",
    image:
      "https://th.bing.com/th/id/OIP.cUQ0BAqMufcHKzEiLyJtWwHaEP?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "9 weeks old",
    price: "₹30,000",
    description: "Charming, sturdy, and truffle-tousle — perfect lap dog for apartments.",
  },
  {
    name: "Pomeranian",
    image:
      "https://th.bing.com/th/id/OIP.tH6Bn8nTqGOYqMelJoN-7wHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "8 weeks old",
    price: "₹25,000",
    description: "Tiny fluff with a giant personality — a lively companion.",
  },
  {
    name: "German Shepherd",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.ISIHL96PAQMIkTdIuOQ3aAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "10 weeks old",
    price: "₹40,000",
    description: "Confident, courageous, and highly trainable loyal protector.",
  },
  {
    name: "Beagle",
    image: BEAGLE_IMG,
    age: "9 weeks old",
    price: "₹28,000",
    description: "Curious, friendly, and merry — a great active family pet.",
  },
  {
    name: "Siberian Husky",
    image:
      "https://tse4.mm.bing.net/th/id/OIP.bpD0aXT7jp42DM-5W2Pv4QHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "9 weeks old",
    price: "₹55,000",
    description: "Stunning, outgoing, and energetic adventure companion.",
  },
  {
    name: "Pug",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.nkRCdAQ6BRmkbDgoKV9PeAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "8 weeks old",
    price: "₹22,000",
    description: "Playful, mischievous, and loving small companion.",
  },
  {
    name: "French Bulldog",
    image: "https://cdn.britannica.com/45/233845-050-6B6A7F3E/Two-French-bulldogs.jpg",
    age: "10 weeks old",
    price: "₹60,000",
    description: "Playful, adaptable, and low maintenance — ideal for city living.",
  },
  {
    name: "Maltese",
    image:
      "https://th.bing.com/th/id/R.4a41884d58d93ab0dd3ecd0cc1557615?rik=enEYNhQjaOhHww&riu=http%3a%2f%2fwww.dog-learn.com%2fdog-breeds%2fmaltese%2fimages%2fmaltese-u2.jpg&ehk=oPtVeL4fDoeKniODxMyy75yddU%2b08jOE51OUdW9cvmk%3d&risl=&pid=ImgRaw&r=0",
    age: "8 weeks old",
    price: "₹28,000",
    description: "Gentle, fearless, and devoted — a super friendly companion.",
  },
  {
    name: "Dachshund",
    image: "https://a-z-animals.com/media/2023/09/GettyImages-1384645569-1.jpg",
    age: "9 weeks old",
    price: "₹24,000",
    description: "Clever, lively, and courageous — a bold little dog with a big heart.",
  },
  {
    name: "Cocker Spaniel",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.yNvRRoCL3d06T8clJV52OAHaFs?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "8 weeks old",
    price: "₹30,000",
    description: "Sweet, gentle, and eager to please — wonderful with families.",
  },
  {
    name: "Maltipoo",
    image:
      "https://th.bing.com/th/id/OIP.Oy5kWJaEawiWCmcBD_JjeAHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "8 weeks old",
    price: "₹35,000",
    description: "Hypoallergenic, loving, and super intelligent — a chic companion.",
  },
  {
    name: "Tibetan Mastiff",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.kqtnwSVmm8WGaQ81-IIgtwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "10 weeks old",
    price: "₹80,000",
    description: "Impressive, independent, and noble guardian breed with a lion-like mane.",
  },
  {
    name: "Bichon Frisé",
    image: "https://a-z-animals.com/media/2021/12/Bichon-Frise-1.jpg",
    age: "9 weeks old",
    price: "₹32,000",
    description: "Cheerful and hypoallergenic — a fluffy cloud of joy and affection.",
  },
  {
    name: "Toy Poodle",
    image:
      "https://tse1.mm.bing.net/th/id/OIP.r4hbAo1SgaXg5XQlck4FOAHaEA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "8 weeks old",
    price: "₹38,000",
    description: "Brilliant, elegant, and hypoallergenic — one of the most intelligent breeds.",
  },
  {
    name: "Cavalier King Charles Spaniel",
    image:
      "https://th.bing.com/th/id/OIP.VZ4t94QX91DNDRBhswRLwAHaFT?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "9 weeks old",
    price: "₹45,000",
    description: "Gentle, graceful, and affectionate — the ultimate companion lap dog.",
  },
  {
    name: "Rottweiler",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.Za9OfUFBr_wZZ23Kemnn0gAAAA?r=0&w=400&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "10 weeks old",
    price: "₹35,000",
    description: "Robust, loyal, and eager guardian — a devoted family protector.",
  },
  {
    name: "Doberman",
    image:
      "https://th.bing.com/th/id/OIP.sTzF_sf3XkQslncdcYLtxgHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "10 weeks old",
    price: "₹42,000",
    description: "Alert, fearless, and loyal — an exceptionally intelligent guard dog.",
  },
  {
    name: "Great Dane",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.7G5GFQeHbXV3pBXVGnbRGwHaE4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "10 weeks old",
    price: "₹50,000",
    description: "Gentle giant, friendly, and patient — a majestic family companion.",
  },
  {
    name: "Border Collie",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.l3KUNDhttgqtT5KQ4EAjpgHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    age: "8 weeks old",
    price: "₹38,000",
    description: "World's smartest dog breed — energetic, responsive, and athletic.",
  },
  {
    name: "Lhasa Apso",
    image:
      "https://cdn.britannica.com/36/256436-050-D09BECC9/Lhasa-Apso-dog-from-Tibet-show-coat.jpg",
    age: "9 weeks old",
    price: "₹20,000",
    description: "Ancient, confident, and hardy — a small dog with a big attitude.",
  },
];

const FEATURES = [
  {
    icon: Heart,
    title: "Raised with Care",
    description:
      "Our puppies are raised in a clean, loving home environment with daily socialisation.",
  },
  {
    icon: ShieldCheck,
    title: "Health First",
    description:
      "Every puppy comes with up-to-date vaccinations, deworming, and a basic health check.",
  },
  {
    icon: Clock,
    title: "Lifetime Support",
    description: "We stay in touch after purchase to help with diet, training, and any questions.",
  },
];

const SCHEMA_LOCAL_BUSINESS = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  name: "Gurgaon Puppy Point",
  image: GOLDEN_RETRIEVER_IMG,
  url: "https://gurgaonpuppypoint.com",
  telephone: `+91${PHONE}`,
  priceRange: "₹20,000 - ₹80,000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gurugram",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4595,
    longitude: 77.0266,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "20:00",
  },
  description:
    "Buy healthy, vaccinated, purebred puppies for sale in Gurgaon & Gurugram. Golden Retriever, Labrador, Beagle, Shih Tzu, Pug, French Bulldog & German Shepherd for sale.",
};

const SCHEMA_ITEM_LIST = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Puppies For Sale in Gurgaon Gurugram",
  itemListElement: PUPPIES.map((puppy, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: `${puppy.name} Puppy For Sale in Gurgaon`,
      image: puppy.image,
      description: puppy.description,
      offers: {
        "@type": "Offer",
        price: puppy.price.replace(/[^0-9]/g, ""),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        seller: {
          "@type": "PetStore",
          name: "Gurgaon Puppy Point",
        },
      },
    },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Buy Puppies in Gurgaon | Healthy Puppies for Sale in Gurugram | Gurgaon Puppy Point",
      },
      {
        name: "description",
        content:
          `Buy healthy, purebred, vaccinated puppies for sale in Gurgaon & Gurugram. Golden Retriever, Labrador, Beagle, Shih Tzu, French Bulldog, Husky & more for sale at Gurgaon Puppy Point. Call ${PHONE}.`,
      },
      {
        name: "keywords",
        content:
          `puppies for sale in gurgaon, puppies for sale in gurugram, buy puppies in gurgaon, buy dogs in gurgaon, dog shop in gurgaon, dog breeder gurugram, golden retriever puppy for sale gurgaon, labrador puppy for sale gurgaon, beagle puppy for sale gurgaon, shih tzu for sale gurgaon, dog seller in gurgaon, buy puppies gurugram, best pet shop gurgaon, ${PHONE}`,
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      {
        property: "og:title",
        content: "Buy Puppies in Gurgaon | Healthy Puppies for Sale in Gurugram",
      },
      {
        property: "og:description",
        content:
          `Buy healthy, vaccinated Golden Retriever, Beagle, Labrador, Shih Tzu, and French Bulldog puppies for sale in Gurugram & Gurgaon. Call ${PHONE}.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:phone_number", content: PHONE },
      { property: "og:locality", content: "Gurugram" },
      { property: "og:region", content: "Haryana" },
      { property: "og:country_name", content: "India" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Buy Puppies in Gurgaon | Healthy Puppies for Sale in Gurugram",
      },
      {
        name: "twitter:description",
        content: `Healthy, vaccinated puppies for sale in Gurgaon & Gurugram. Call ${PHONE}.`,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(SCHEMA_LOCAL_BUSINESS),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(SCHEMA_ITEM_LIST),
      },
    ],
  }),
  component: Index,
});

const REVIEWS = [
  {
    src: "/customer1.jpg",
    alt: "Happy customer with German Shepherd puppy",
    name: "Ramesh Ji",
    breed: "German Shepherd",
    quote:
      "Excellent service! The puppy was healthy, vaccinated, and so well-socialised. Highly recommend!",
  },
  {
    src: "/customer2.png",
    alt: "Happy young customer with black puppy",
    name: "Arjun",
    breed: "Puppy Owner",
    quote:
      "Super happy with my new puppy! They took great care in matching us with the right breed. Amazing!",
  },
  {
    src: "/customer3.jpg",
    alt: "Happy customer with Toy Poodle",
    name: "Emmanuel",
    breed: "Toy Poodle",
    quote:
      "Got my adorable Toy Poodle from here. Very professional and caring breeders. Will recommend to everyone!",
  },
  {
    src: "/customer4.png",
    alt: "Child customer with Poodle puppy",
    name: "Vedant",
    breed: "Poodle",
    quote:
      "My son is over the moon with his new puppy! The team was so patient and helpful throughout.",
  },
  {
    src: "/customer5.png",
    alt: "Customer cuddling black puppy",
    name: "Priya",
    breed: "Puppy Owner",
    quote:
      "Fell in love the moment I saw my puppy. The care and love they put into raising them is evident. 5 stars!",
  },
  {
    src: "/customer6.png",
    alt: "Customer holding Chow Chow puppy",
    name: "Sakshi",
    breed: "Chow Chow",
    quote:
      "My Chow Chow is the cutest! Gurgaon Puppy Point made the whole experience so smooth and easy.",
  },
  {
    src: "/customer7.png",
    alt: "Customer with Golden Retriever puppy",
    name: "Rahul",
    breed: "Golden Retriever",
    quote:
      "Got my Golden Retriever from here. Healthy, happy, and full of energy. Couldn't be more satisfied!",
  },
  {
    src: "/customer8.jpg",
    alt: "Customer relaxing with Shih Tzu puppy",
    name: "Vikram",
    breed: "Shih Tzu",
    quote:
      "My Shih Tzu is absolutely adorable. Great support from the team even after purchase. Thank you!",
  },
  {
    src: "/customer9.png",
    alt: "Customer smiling with Toy Poodle puppy",
    name: "Karan",
    breed: "Toy Poodle",
    quote:
      "Best decision ever! They helped me choose the perfect puppy. Super professional and trustworthy.",
  },
  {
    src: "/customer10.jpg",
    alt: "Customer holding Beagle puppy",
    name: "Riya",
    breed: "Beagle",
    quote: "My little Beagle has brought so much joy to our family. Thank you Gurgaon Puppy Point!",
  },
];

function ReviewCard({ review }: { review: (typeof REVIEWS)[0] }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <img
          src={review.src}
          alt={review.alt}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="text-yellow-400 text-sm mb-1">★★★★★</div>
          <p className="text-white font-semibold text-base leading-tight">{review.name}</p>
          <p className="text-white/75 text-xs mt-0.5">{review.breed}</p>
        </div>
      </div>
      <div className="p-4 flex-1">
        <p className="text-sm text-muted-foreground leading-relaxed italic">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>
    </div>
  );
}

function ReviewsSection() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = REVIEWS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  return (
    <section id="reviews" className="border-t border-border bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            What our customers say
          </p>
          <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">Happy Customers ❤️</h2>
          <p className="mt-4 text-muted-foreground">
            Hundreds of families in Gurugram have brought home their furry best friend through us.
            Here are a few of them!
          </p>
        </div>

        {/* ── MOBILE: Carousel ── */}
        <div className="mt-10 sm:hidden">
          <div
            className="relative overflow-hidden rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Sliding track */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {REVIEWS.map((review) => (
                <div key={review.name} className="min-w-full">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              aria-label="Previous review"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next review"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
            >
              ›
            </button>
          </div>

          {/* Dot indicators */}
          <div className="mt-4 flex justify-center gap-1.5">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="mt-2 text-center text-xs text-muted-foreground">
            {current + 1} / {total}
          </p>
        </div>

        {/* ── TABLET & DESKTOP: Grid ── */}
        <div className="mt-12 hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm mb-4">Ready to join our happy family?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Your Puppy Today
          </a>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="/" className="font-heading text-xl text-foreground sm:text-2xl">
            Gurgaon Puppy Point
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-foreground sm:flex">
            <a href="#puppies" className="transition-colors hover:text-primary">
              Puppies
            </a>
            <a href="#about" className="transition-colors hover:text-primary">
              About
            </a>
            <a href="#why-us" className="transition-colors hover:text-primary">
              Why Us
            </a>
            <a href="#reviews" className="transition-colors hover:text-primary">
              Reviews
            </a>
            <a href="#contact" className="transition-colors hover:text-primary">
              Contact
            </a>
          </nav>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Trusted local breeder in Gurugram
            </p>
            <h1 className="mt-4 text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Find your new best friend in Gurugram
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Healthy, happy puppies raised with love. Browse our available pups and take the first
              step toward bringing joy home.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#puppies"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Available Puppies
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-2 justify-center rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-green-700"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Located in Gurugram, Haryana</span>
            </div>
          </div>
          <div className="order-1 overflow-hidden rounded-2xl border border-border lg:order-2">
            <img
              src={heroPuppy}
              alt="A happy golden retriever puppy ready for a new home"
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Puppies */}
      <section id="puppies" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Available now
            </p>
            <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">Meet our puppies</h2>
            <p className="mt-4 text-muted-foreground">
              All our puppies are vaccinated, dewormed, and raised with care. Contact us to reserve
              your puppy today.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PUPPIES.map((puppy) => {
              const breedWhatsAppLink = getBreedWhatsAppLink(puppy.name);
              return (
                <div
                  key={puppy.name}
                  className="group flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
                >
                  <div>
                    <a
                      href={breedWhatsAppLink}
                      target="_blank"
                      rel="noreferrer"
                      className="block aspect-square overflow-hidden cursor-pointer"
                      title={`Enquire about ${puppy.name} puppy on WhatsApp`}
                    >
                      <img
                        src={puppy.image}
                        alt={`${puppy.name} puppy for sale in Gurgaon Gurugram`}
                        width={600}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </a>
                    <div className="p-5">
                      <div className="flex items-center justify-between gap-2">
                        <a
                          href={breedWhatsAppLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xl font-semibold text-card-foreground hover:text-primary transition-colors"
                        >
                          {puppy.name}
                        </a>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">{puppy.description}</p>
                    </div>
                  </div>
                  <div className="p-5 pt-0">
                    <div className="mt-4 flex gap-2">
                      <a
                        href={`tel:${PHONE}`}
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-green-600 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
                      >
                        <Phone className="h-4 w-4" />
                        Call Now
                      </a>
                      <a
                        href={breedWhatsAppLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-emerald-500 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Enquire Breed
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-y border-border bg-secondary py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About us
            </p>
            <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">Gurgaon Puppy Point</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We are a small, home-based puppy care service in Gurugram focused on matching healthy,
              well-socialised puppies with loving families. Every puppy is raised with attention,
              proper nutrition, and early socialisation so they settle into their new homes happily.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Whether you are looking for a playful Beagle, a gentle Golden Retriever, or a loyal
              Labrador, we are here to help you find the right companion for your family.
            </p>
          </div>
        </div>
      </section>

      {/* Why choose us / More */}
      <section id="why-us" className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              More reasons to choose us
            </p>
            <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">Why families trust us</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="inline-flex rounded-lg bg-secondary p-3 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl text-card-foreground">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Customers / Reviews */}
      <ReviewsSection />

      {/* Contact CTA */}
      <section id="contact" className="border-y border-border bg-primary py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl text-primary-foreground sm:text-4xl">
            Ready to welcome a puppy home?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Call or WhatsApp us to check availability, ask questions, or schedule a visit in
            Gurugram.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-6 py-3 text-base font-medium text-primary transition-colors hover:bg-primary-foreground/90"
            >
              <Phone className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <MessageCircle className="h-5 w-5" />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-page" className="py-16 sm:py-24 bg-secondary border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl text-foreground sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-muted-foreground">
              We'd love to hear from you. Call, WhatsApp, or visit us in Gurugram.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col items-center text-center gap-4">
              <div className="inline-flex rounded-full bg-green-100 p-4 text-green-600">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">Call Us</h3>
                <p className="mt-1 text-muted-foreground text-sm">Available 9 AM – 8 PM daily</p>
              </div>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-green-700"
              >
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col items-center text-center gap-4">
              <div className="inline-flex rounded-full bg-emerald-100 p-4 text-emerald-600">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">WhatsApp</h3>
                <p className="mt-1 text-muted-foreground text-sm">Quick replies, photos & videos</p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-600"
              >
                <MessageCircle className="h-4 w-4" />
                Message Us
              </a>
            </div>

            {/* Location */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm flex flex-col items-center text-center gap-4 justify-center">
              <div className="inline-flex rounded-full bg-blue-100 p-4 text-blue-600">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">Visit Us</h3>
                <p className="mt-1 text-muted-foreground text-sm">Gurugram, Haryana, India</p>
                <p className="mt-1 text-muted-foreground text-sm">By appointment only</p>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Gurugram location map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d76.76357484863281!3d28.423355697388063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1693000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Brand */}
            <div>
              <p className="text-xl font-bold">Gurgaon Puppy Point</p>
              <p className="mt-3 text-sm text-background/70 leading-relaxed">
                Trusted home-based puppy service in Gurugram. Healthy, vaccinated pups matched with
                loving families.
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center gap-1.5 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-600 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-background/50">
                Quick Links
              </p>
              <ul className="mt-4 space-y-2 text-sm text-background/80">
                <li>
                  <a href="#puppies" className="hover:text-background transition-colors">
                    Available Puppies
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-background transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-background transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-background transition-colors">
                    Happy Customers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-background transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#contact-page" className="hover:text-background transition-colors">
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-background/50">
                Contact Info
              </p>
              <ul className="mt-4 space-y-3 text-sm text-background/80">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <a href={`tel:${PHONE}`} className="hover:text-background transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-background transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Gurugram, Haryana, India</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>Mon – Sun: 9:00 AM – 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-background/20 pt-6 text-center text-sm text-background/50">
            <p>© {new Date().getFullYear()} Gurgaon Puppy Point. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ for dog lovers in Gurugram, Haryana, India</p>
            <p className="mt-2 text-xs font-light tracking-wide text-background/40">
              Powered by Nexcore Technologies
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Right Side CTA */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-emerald-600 p-2.5 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-emerald-500 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat on WhatsApp"
        title={`Chat on WhatsApp (${PHONE_DISPLAY})`}
      >
        <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs group-hover:pl-3 group-hover:pr-1">
          Chat on WhatsApp
        </span>
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.cwR7iqmTc5qiG7o3sqBe0AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="WhatsApp Icon CTA"
          className="h-12 w-12 rounded-full object-cover shadow-md border-2 border-white"
        />
      </a>
    </div>
  );
}
