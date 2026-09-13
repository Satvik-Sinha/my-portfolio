export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" }
];

export const gridItems = [
  {
    id: 1,
    title: "I build robust, high-performance distributed systems with a focus on business impact",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Ranked Knight on LeetCode & Expert on Codeforces with deep DSA mastery",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "Java, Spring Boot, Kafka, Kubernetes & Azure",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate backend engineer dedicated to clean architecture, LLD/HLD, and cloud scalability.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Integrating AI-driven telemetry, root-cause analysis, and schema verification agents into backend pipelines",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Interested in discussing distributed systems or starting a project?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Product Eligibility Rule Engine",
    des: "Architected a scalable metadata-driven rule engine in Java (Spring Boot) & SQL for savings portfolios, eliminating redeployments via versioned YAML configs and cutting rollout time by 80%.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Lending Repayment Engine",
    des: "Engineered an enterprise waterfall reconciliation engine for IO Buy-to-Let and residential accounts, ensuring 100% ledger accuracy across £100M+ in amortized assets.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Distributed Transaction & Streaming Platform",
    des: "High-volume internal transfer microservices integrated with core banking systems using idempotent REST APIs, Redis Jobrunr scheduling, and Apache Kafka state reconciliation.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "AI Telemetry & Schema Verification Agent",
    des: "Implemented LLM-driven root-cause telemetry slashing MTTR by 45% alongside localized LLM auditing for Liquibase migration scripts, avoiding 95% of deployment rollback issues.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  }
];

export const testimonials = [
  {
    quote:
      "Satvik consistently demonstrated complete end-to-end ownership across critical core banking epics. His rapid turnaround on high-priority architectural challenges and reliable execution earned him Employee of the Quarter for three consecutive quarters.",
    name: "Engineering Leadership",
    title: "One Savings Bank India",
  },
  {
    quote:
      "Satvik's expertise in system design, Spring Boot, and Kafka transformed our core repayment pipelines. His ability to navigate high-volume transactional ledgers while maintaining zero discrepancies made a substantial impact across our platforms.",
    name: "Senior Architect",
    title: "One Savings Bank India",
  },
  {
    quote:
      "A proactive problem solver with deep algorithmic foundations. Whether optimizing Redis caches or implementing zero-downtime AKS deployments with Istio, Satvik consistently delivers enterprise-grade software.",
    name: "Delivery Manager",
    title: "One Savings Bank India",
  }
];

export const companies = [
  {
    id: 1,
    name: "One Savings Bank",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Associate Software Engineer - OSB India",
    desc: "Architected metadata-driven eligibility & lending repayment engines (£100M+ assets), event-driven Kafka streams, Redis-backed Jobrunr scheduling, and zero-downtime AKS deployments.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Graduate Trainee Engineer - OSB India",
    desc: "Automated banking configuration lifecycles cutting workflow time by 98%, integrated Azure APIM/OAuth 2.0 security boundaries, and implemented GraphQL resolvers with multi-level caching.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Competitive Programmer - LeetCode Knight & Codeforces Expert",
    desc: "Achieved top 2% global ranking (Knight, 1873 peak) on LeetCode and Expert rank (1647 peak) on Codeforces solving complex DP, graph, and algorithmic challenges.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "B.Tech in Computer Science / Engineering - NIT Allahabad",
    desc: "Graduated with 8.42 CGPA from MNNIT Allahabad, building strong foundations in Data Structures, Algorithms, Distributed Systems, and Object-Oriented Software Design.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
