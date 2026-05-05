import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ── Leadership data ────────────────────────────────────────────────────────────
const leaders = [
  {
    name: "Paul Ruth",
    photo: "/imgs/leadership/paul-ruth.jpg",
    bio: "Paul Ruth is an Assistant Director of the Network Research and Infrastructure Group at RENCI, UNC-Chapel Hill. His research interests include building and using dynamic cloud computing and network testbeds targeting computational and data-driven scientific workflows. He is a long-time contributor to several large system and networking testbeds, including GENI (ExoGENI) and Chameleon, and is now the PI and Project Director for the FABRIC testbed. He earned his Ph.D. degree in Computer Science from Purdue University in 2007.",
  },
  {
    name: "Anita Nikolich",
    photo: "/imgs/leadership/anita-nikolich.jpg",
    bio: "Anita Nikolich is a Research Scientist and Director of Research Innovation at the Information School at UIUC. She served as Program Director for Cybersecurity at the National Science Foundation (NSF), was the Executive Director of Infrastructure at the University of Chicago, and has held a variety of research and operational roles in industry and government. She is the co-organizer of the DEFCON AI Village, a 2020-21 AAAS Leadership Fellow in AI Public Engagement, and serves on the ARIN Advisory Committee. She does work in cryptocurrency security and analytics and remains optimistic about bringing together hackers, academia, industry, and government to make the world a better place.",
  },
  {
    name: "Jim Griffioen",
    photo: "/imgs/leadership/jim-griffioen.jpg",
    bio: "Jim Griffioen is a Professor of Computer Science, Director of the Center for Computational Sciences, and Director of the Laboratory for Advanced Networking at the University of Kentucky. His research interests include future network architectures, cloud computing, programmable networks/software defined networks, network measurement and monitoring systems, experimental testbed networks, network virtualization, and network protocol design.",
  },
  {
    name: "Kuang-Ching Wang",
    photo: "/imgs/leadership/kuang-ching-wang.jpg",
    bio: "Kuang-Ching (KC) Wang joined the Watt Family Innovation Center as the associate director of research in July 2017. KC has been a Professor of Electrical and Computer Engineering at Clemson University since 2004. His core research interests include future networking and computing architecture, software-defined infrastructure, and more recently, artificial intelligence. He is also an adjunct professor for Public Health Sciences and a faculty scholar in the Clemson University School of Health Research. From 2012 to 2015, KC was a visiting professor with Stanford University, the Open Networking Lab (ON.Lab), and Big Switch Networks, Inc. From 2015 to 2017, he was the Networking Chief Technology Officer for Clemson.",
  },
  {
    name: "Inder Monga",
    photo: "/imgs/leadership/inder-monga.jpg",
    bio: "Indermohan (Inder) S. Monga serves as the Division Director for Scientific Networking Division, Lawrence Berkeley National Lab and Executive Director of Energy Sciences Network, a high-performance network user facility optimized for large-scale science, interconnecting the National Laboratory System in the United States. In addition to managing the organization, his efforts are directed towards advancing the science of networking for collaborative and distributed research applications, as well as contributing to ongoing research projects tackling programmability, analytics and quality of experience driving convergence between application layer and the network. He currently holds 23 patents and has 20+ years of industry and research experience in telecommunications and data networking. His work experience in the private sector includes network engineering for Wellfleet Communications, Bay Networks and Nortel where he focused on application and network convergence. His undergraduate degree is in electrical/electronics engineering from Indian Institute of Technology in Kanpur, India, with graduate studies in computer engineering from Boston University.",
  },
  {
    name: "Tom Lehman",
    photo: "/imgs/leadership/tom-lehman.jpg",
    bio: "Tom Lehman is currently a Research Scientist for Virnao. His research interests include technologies and systems which facilitate the orchestration of high-performance network, computation, and storage resources in service of big data driven domain science application workflows. He was previously the Director of Research at the University of Maryland Mid-Atlantic Crossroads where he was responsible for leading advanced cyberinfrastructure systems research and development. Prior to joining the University of Maryland, he was a Computer Scientist and Project Leader at the University of Southern California, Information Science Institute. He received a B.S. from Virginia Tech and a M.S. in Electrical Engineering from The Johns Hopkins University.",
  },
  {
    name: "Zongming Fei",
    photo: "/imgs/leadership/zongming-fei.jpg",
    bio: "Zongming Fei is a Professor and Director of Graduate Studies in the Department of Computer Science at the University of Kentucky. His research interests include Network Protocols, Distributed Systems, and Cyber-Physical systems, with a recent focus on cloud computing, software-defined networking, overlay networks, and smart grid communications.",
  },
  {
    name: "Dale Carder",
    photo: "/imgs/leadership/dale-carder.jpg",
    bio: "Dale Carder is a Network Engineer at Lawrence Berkeley National Laboratory working on ESnet. He builds large-scale, complex, resilient, next-generation long-haul networks for International science projects such as the Large Hadron Collider (LHC). His expertise lies in the areas of dynamic provisioning, global traffic engineering and control frameworks. He comfortably works at the intersection of software, network, compute, application workflows, and systems engineering and has run R&E networks for 20 years.",
  },
  {
    name: "Bryttany Todd",
    photo: "/imgs/leadership/bryttany-todd.jpg",
    bio: "Bryttany Todd is the Deputy Director of Research Operations at RENCI, UNC-Chapel Hill. Her interests include developing and executing project and program management strategy and operational needs. She currently manages various research projects and RENCI programs including FABRIC, MERIF, and RENCI's internship program.",
  },
];

const pastCollaborators = [
  {
    name: "Ilya Baldin",
    photo: "/imgs/leadership/ilya-baldin.jpg",
    bio: "Ilya Baldin is the former leader of RENCI's network research and infrastructure group (NRIG). He is currently working for DOE Jefferson Lab as a Data Fabric Integration Architect for the High-Performance Data Facility (HPDF). Ilya is a networking researcher with a wide range of interests, including high-speed optical network architectures, cross-layer interactions, novel signaling schemes, and network security. He was a co-PI for the ExoGENI project – part of the GENI testbed and was the PI and Project Director for the FABRIC testbed from 2019-2023 during its construction phase. Before coming to RENCI, Baldin was the principal scientist at the Center for Advanced Network Research at the Research Triangle Institute and a network research engineer at the Advanced Network Research group at MCNC, where he was a team member and a leader of a number of federally funded research efforts. He holds PhD and MS degrees in computer science from North Carolina State University.",
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
