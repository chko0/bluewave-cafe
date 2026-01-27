import { SITE } from "../../config/site";
import AnnouncementRail from "./announcements/AnnouncementRail";

export default function AnnouncementSection() {
  return (
    <section
      aria-labelledby="announcements-heading"
      className="relative px-6 md:px-16 py-8 overflow-hidden bg-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-primary-500" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary-600" />
          </span>

          <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-70 text-brand-primary-900">
            Today at {SITE.shortName}
          </h2>
          <div className="h-[1px] flex-1 rounded-full opacity-10 bg-brand-primary-900" />
        </div>

        {/*
          Fixed min-height prevents layout shift on mobile when
          announcement content or CTA length changes 
        */}
        <div className="min-h-[80px] md:min-h-[70px]">
          <AnnouncementRail />
        </div>
      </div>
    </section>
  );
}
