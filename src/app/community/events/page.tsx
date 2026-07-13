import { Suspense } from "react";
import { getAllEventsMeta } from "@/lib/events";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import EventsClient from "./EventsClient";

const today = new Date().toISOString().slice(0, 10);

export default function EventsPage() {
  const all      = getAllEventsMeta();
  const upcoming = all.filter((e) => e.event_date >= today);
  const past     = all.filter((e) => e.event_date <  today);

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-white">
          <div className="page-container max-w-4xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-4">Events &amp; Workshops</h1>
            <p className="text-sm text-fabric-gray-600 leading-relaxed mb-10">
              The following is a list of upcoming events hosted by the FABRIC team or our community members.
            </p>
            <Suspense>
              <EventsClient upcoming={upcoming} past={past} />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
