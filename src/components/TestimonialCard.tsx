type TestimonialCardProps = {
  /** Path under /public, e.g. /testimonials/t1.png */
  image: string;
  /** Accessible description of the Fiverr review screenshot */
  alt: string;
};

export function TestimonialCard({ image, alt }: TestimonialCardProps) {
  return (
    <article className="glass-card overflow-hidden rounded-2xl p-2 shadow-lg">
      <img
        src={image}
        alt={alt}
        className="max-h-[420px] w-full rounded-xl bg-white object-contain object-top shadow-sm"
      />
    </article>
  );
}
