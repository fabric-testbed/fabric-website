import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Acceptable Use Policy | FABRIC",
};

export default function AcceptableUsePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <section className="py-16 bg-white">
          <div className="page-container max-w-4xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-8">
              FABRIC Acceptable Use Policy
            </h1>
            <iframe
              title="FABRIC Acceptable Use Policy"
              src="https://docs.google.com/document/d/e/2PACX-1vS2QXcWlyR_d5P3dm_UaujkxpmIgGUWG1KSGaUt7s1PP8Jw62rQmxzcVUNlZ1z8n4H8bfNGpYlh6vVl/pub?embedded=true"
              className="w-full border-0 rounded-lg"
              style={{ minHeight: "80vh" }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
