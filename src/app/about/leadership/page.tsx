import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ── Leadership data ────────────────────────────────────────────────────────────
const leaders = [
  {
    name: "Paul Ruth",
    photo: "/imgs/leadership/paul-ruth.jpg",
    bio: "Paul Ruth is a Research Professor at the Renaissance Computing Institute (RENCI) at UNC Chapel Hill. He has a background in distributed systems and cloud computing. Paul has been involved in many NSF-funded research projects and currently serves as FABRIC's principal investigator. He has led FABRIC's efforts in bringing together the heterogeneous network and computing elements from many institutions and vendors to form a unique research environment.",
  },
  {
    name: "Anita Nikolich",
    photo: "/imgs/leadership/anita-nikolich.jpg",
    bio: "Anita Nikolich is a Research Scientist and Director of Research Innovation at the University of Illinois at Urbana-Champaign. Her interests include cybersecurity, network infrastructure and technology policy. She previously served as Program Director for Cybersecurity at the National Science Foundation and prior to that, served in Director-level roles at Internet2. Anita leads FABRIC's cybersecurity and identity management efforts.",
  },
  {
    name: "Jim Griffioen",
    photo: "/imgs/leadership/jim-griffioen.jpg",
    bio: "Jim Griffioen is a Professor of Computer Science and Site Director of the NSF Center for Cloud and Autonomic Computing at the University of Kentucky. His research interests are in the areas of computer networking, distributed systems, and cloud computing. Jim has been involved in several GENI projects and leads FABRIC's efforts in developing tools and documentation that enable researchers to effectively use the FABRIC infrastructure.",
  },
  {
    name: "Kuang-Ching Wang",
    photo: "/imgs/leadership/kuang-ching-wang.jpg",
    bio: "Kuang-Ching (KC) Wang is a Professor in the Holcombe Department of Electrical and Computer Engineering at Clemson University. His research interests include software-defined networking, in-network computing and programmable data planes. KC has been involved in the NSF GENI project, and he leads FABRIC's efforts in developing in-network computing capabilities, including the integration of GPU, FPGA, and SmartNIC resources.",
  },
  {
    name: "Inder Monga",
    photo: "/imgs/leadership/inder-monga.jpg",
    bio: "Inder Monga is the Executive Director of ESnet (Energy Sciences Network) and Division Director for the Scientific Networking Division at Lawrence Berkeley National Laboratory. He has an extensive background in networking, Software Defined Networking (SDN) and network virtualization from his time at Nortel Networks, Fujitsu Network Communications, and as a network architect at CERN. Inder leads FABRIC's efforts on wide area networking and integration with ESnet.",
  },
  {
    name: "Tom Lehman",
    photo: "/imgs/leadership/tom-lehman.jpg",
    bio: "Tom Lehman is a Research Scientist at the Information Sciences Institute at the University of Southern California. His background is in networking, SDN, and network orchestration systems. Tom has been involved in multiple GENI projects over the years and leads FABRIC's efforts on wide area networking and integration with Internet2.",
  },
  {
    name: "Zongming Fei",
    photo: "/imgs/leadership/zongming-fei.jpg",
    bio: "Zongming Fei is a Professor of Computer Science at the University of Kentucky. His research interests are in computer networking and distributed computing. He has been involved in several GENI projects and contributes to FABRIC's efforts on networking and control plane development.",
  },
  {
    name: "Dale Carder",
    photo: "/imgs/leadership/dale-carder.jpg",
    bio: "Dale Carder is the Lead Network Engineer and Researcher for the Network Research group at the Energy Sciences Network (ESnet). He has expertise in high-speed networking and measurement infrastructure. Dale leads the technical implementation of wide area connectivity and measurement capabilities within FABRIC.",
  },
  {
    name: "Bryttany Todd",
    photo: "/imgs/leadership/bryttany-todd.jpg",
    bio: "Bryttany Todd is a Project Manager at the Renaissance Computing Institute (RENCI) at UNC Chapel Hill. She coordinates cross-team collaboration and project operations for FABRIC, ensuring the project's research and development activities stay on track and aligned with the project's goals.",
  },
];

const pastCollaborators = [
  {
    name: "Ilya Baldin",
    photo: "/imgs/leadership/ilya-baldin.jpg",
    bio: "Ilya Baldin was a Research Professor at the Renaissance Computing Institute (RENCI) at UNC Chapel Hill. As FABRIC's original Principal Investigator, he guided the project from inception and played a central role in its architectural design. His leadership laid the foundation for FABRIC's unique programmable infrastructure.",
  },
];

// ── Person card ───────────────────────────────────────────────────────────────
function PersonCard({ name, photo, bio }: { name: string; photo: string; bio: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 py-8 border-b border-fabric-gray-200 last:border-0">
      {/* Photo stack */}
      <div className="shrink-0 relative w-[130px] h-[150px] self-start">
        {/* Blue rounded rectangle behind the photo */}
        <div
          className="absolute bottom-0 right-0 w-[115px] h-[135px] rounded-2xl"
          style={{ background: "#2196C9" }}
        />
        {/* Photo */}
        <div className="absolute top-0 left-0 w-[115px] h-[135px] rounded-2xl overflow-hidden bg-fabric-gray-100">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h3
          className="text-lg font-bold mb-3 leading-snug"
          style={{ color: "#1A618E" }}
        >
          {name}
        </h3>
        <p className="text-sm text-fabric-gray-600 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* ── Section 1: Leadership Team ─────────────────────────────── */}
        <section className="py-16 bg-white">
          <div className="page-container max-w-4xl">
            <h1 className="text-3xl font-bold text-fabric-blue mb-2">Leadership</h1>
            <div>
              {leaders.map((person) => (
                <PersonCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 2: Past Collaborators ──────────────────────────── */}
        <section className="py-16 bg-fabric-off-white">
          <div className="page-container max-w-4xl">
            <h2 className="text-2xl font-bold text-fabric-blue mb-2">Past Collaborators</h2>
            <div>
              {pastCollaborators.map((person) => (
                <PersonCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
