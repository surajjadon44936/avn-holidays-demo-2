import { team } from "@/data/contact";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/Motion";
import { EditorialImage } from "@/components/ui/EditorialImage";

export function ThePeople() {
  return (
    <section className="bg-sand-dark/30 py-24 md:py-32" aria-labelledby="people-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <EditorialImage
              imageKey="concierge-team"
              className="aspect-[4/3]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading
              eyebrow="The people"
              title="Real experts. Real presence."
              description="Based in Mysore, with resident representatives across India — because peace of mind shouldn't end when you leave Karnataka."
            />
            <ul className="mt-10 space-y-6">
              {team.map((member) => (
                <li key={member.name} className="border-l-2 border-brass/50 pl-5">
                  <p className="font-display text-xl text-ink">{member.name}</p>
                  <p className="text-sm text-ink-muted">
                    {member.role}
                    {member.location && ` · ${member.location}`}
                  </p>
                  {member.phone && (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="mt-1 inline-block text-sm text-pine tabular-nums hover:text-pine-dark"
                    >
                      {member.phone}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
