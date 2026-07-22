import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const MAILCHIMP_ACTION =
  "https://renci.us22.list-manage.com/subscribe/post?u=473f2c587d0f8de123a54df78&amp;id=622423558b&amp;f_id=00efc2e1f0";

export default function NewsletterSignupPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-12 bg-white border-b border-fabric-gray-200">
          <div className="page-container max-w-3xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-2">Newsletter Signup</h1>
            <p className="text-sm text-fabric-gray-600 leading-relaxed max-w-2xl">
              Interested in learning more about FABRIC? Sign up here to receive email announcements
              and be the first to hear about our community workshops, events, and news!
            </p>
          </div>
        </section>

        {/* Form */}
        <section className="py-12 bg-fabric-off-white">
          <div className="page-container max-w-2xl">
            <form
              action={MAILCHIMP_ACTION}
              method="post"
              name="mc-embedded-subscribe-form"
              target="_blank"
              noValidate
              className="bg-white rounded-2xl border border-fabric-gray-200 shadow-sm p-8 space-y-6"
            >
              <p className="text-xs text-fabric-gray-400">
                <span className="text-red-500">*</span> indicates required
              </p>

              {/* Email */}
              <div>
                <label htmlFor="mce-EMAIL" className="block text-sm font-semibold text-fabric-navy mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                  className="w-full px-4 py-2.5 rounded-lg border border-fabric-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue"
                />
              </div>

              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mce-FNAME" className="block text-sm font-semibold text-fabric-navy mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="FNAME"
                    id="mce-FNAME"
                    className="w-full px-4 py-2.5 rounded-lg border border-fabric-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue"
                  />
                </div>
                <div>
                  <label htmlFor="mce-LNAME" className="block text-sm font-semibold text-fabric-navy mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="LNAME"
                    id="mce-LNAME"
                    className="w-full px-4 py-2.5 rounded-lg border border-fabric-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue"
                  />
                </div>
              </div>

              {/* Org / Industry row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="mce-MMERGE5" className="block text-sm font-semibold text-fabric-navy mb-1.5">
                    Organization / Institution
                  </label>
                  <input
                    type="text"
                    name="MMERGE5"
                    id="mce-MMERGE5"
                    className="w-full px-4 py-2.5 rounded-lg border border-fabric-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue"
                  />
                </div>
                <div>
                  <label htmlFor="mce-MMERGE8" className="block text-sm font-semibold text-fabric-navy mb-1.5">
                    Industry
                  </label>
                  <input
                    type="text"
                    name="MMERGE8"
                    id="mce-MMERGE8"
                    className="w-full px-4 py-2.5 rounded-lg border border-fabric-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue"
                  />
                </div>
              </div>

              {/* Anything else */}
              <div>
                <label htmlFor="mce-MMERGE4" className="block text-sm font-semibold text-fabric-navy mb-1.5">
                  Anything else you want to share?
                </label>
                <input
                  type="text"
                  name="MMERGE4"
                  id="mce-MMERGE4"
                  className="w-full px-4 py-2.5 rounded-lg border border-fabric-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-fabric-blue/40 focus:border-fabric-blue"
                />
              </div>

              {/* Interests */}
              <fieldset>
                <legend className="text-sm font-semibold text-fabric-navy mb-3">
                  What are you interested in? (check all that apply)
                </legend>
                <div className="space-y-2">
                  {[
                    { name: "group[1][1]",  id: "mce-group[1]-1-0", label: "Experimenter" },
                    { name: "group[1][2]",  id: "mce-group[1]-1-1", label: "Hank Node" },
                    { name: "group[1][4]",  id: "mce-group[1]-1-2", label: "Facility Partner" },
                    { name: "group[1][8]",  id: "mce-group[1]-1-3", label: "Regional Provider" },
                    { name: "group[1][16]", id: "mce-group[1]-1-4", label: "Other" },
                  ].map((opt) => (
                    <label key={opt.id} htmlFor={opt.id} className="flex items-center gap-2.5 text-sm text-fabric-gray-600 cursor-pointer">
                      <input type="checkbox" name={opt.name} id={opt.id} value="" className="rounded border-fabric-gray-200 text-fabric-blue focus:ring-fabric-blue/40" />
                      {opt.label}
                    </label>
                  ))}
                </div>
                <p className="text-xs text-fabric-gray-400 mt-2">
                  FYI: Deploying a Hank node brings FABRIC to your site.
                </p>
              </fieldset>

              {/* Hidden fields */}
              <input type="hidden" name="tags" value="358" />
              <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
                <input type="text" name="b_473f2c587d0f8de123a54df78_622423558b" tabIndex={-1} defaultValue="" />
              </div>

              {/* Submit */}
              <button type="submit" className="btn-yellow w-full sm:w-auto">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
