"use client";

import styles from "./research-paper.module.css";

export default function VirtualResearchLab() {
  const paperData = {
    title: "Human-Robot Collaboration in Industry 4.0: A Comprehensive Review",
    authors: [
      "Prof. G. S. Shendre",
      "Harshad S. Talan",
      "Antriksh L. Pande",
      "Amey P. Saratkar",
      "Vedant R. Kakade",
      "Prashik P. Chichkhede",
    ],
    institution:
      "Dr. Rajendra Gode Institute of Technology and Research, Amravati, India",
    abstract:
      "This literature review presents a comprehensive analysis of the use and potential application scenarios of collaborative robots in the industrial working world, focusing on their impact on human work, safety, and health in the context of Industry 4.0. The aim is to provide a holistic evaluation of the employment of collaborative robots in the current and future working world, which is being increasingly driven by the automation and digitization of production processes, and which can be outlined using the term Work 4.0. Collaborative robots represent a key technology to aid the transition. The review utilizes expert interviews for identifying relevant keywords, and follows the Preferred Reporting Items for Systematic Review and Meta-Analyses (PRISMA) framework to evaluate peer-reviewed literature between 2002 and January 2022.",
    keywords: [
      "Human-Robot Collaboration",
      "Human-Robot Interaction",
      "Human-Robot Teaming",
      "Work 4.0",
      "Industry 4.0",
      "Cyber-Physical Systems",
      "Safety",
      "Health",
      "Ergonomics",
      "Flexible Automation",
    ],
    introduction:
      "Robotics research has a unique allure for both academia and the industry due to its potential for groundbreaking innovation and real-world applications. Robotics research and applications encompass a broad range of topics, challenges, and opportunities. The topics in this field represent just a small fraction of the diverse and interdisciplinary nature of robotics, which intersects with areas such as materials science and mechatronics, computer science, hardware engineering, robot kinematics, and bionics. Fast-paced development in sensor hardware, robot perception, smart decision-making strategy, and gripper designs allows robots to react in 'real-time' to the environment and thus work intelligently alongside human beings. More crucially, artificial intelligence (AI) integrated into robotic applications has the potential to revolutionize various aspects of human life, offering a wide range of benefits and support.",
    researchAreas: [
      {
        title: "Soft Robotics",
        description:
          "Focuses on the research and development of robots with compliant and flexible structures that are inspired by natural organisms. These robots can better adapt to dynamic environments and are often used in applications such as medical robotics, search and rescue tasks, and outdoor exploration.",
      },
      {
        title: "Bio-Inspired Robotics",
        description:
          "Draws inspiration from biology to design robots that mimic the structure and behavior of living organisms. This includes biomimetic locomotion, sensory systems inspired by animal perception, and soft actuators inspired by muscles and tendons.",
      },
      {
        title: "Manipulation",
        description:
          "Focuses on the development of robotic arms and hands that are capable of grasping, manipulating, and interacting with objects in a dexterous and precise manner. Primary applications include industrial automation, warehouse logistics, and assistive robotics for space applications.",
      },
      {
        title: "Motion Planning",
        description:
          "Involves the algorithms and techniques used to plan the path of a robot from the current state to a desired state while avoiding obstacles and adhering to constraints without any human intervention. Robot motion planning involves designing feedback systems to regulate the robot's motion, ensuring it executes its planned actions intelligently and safely.",
      },
    ],
    conclusion:
      "The applications of collaborative robots, and the implementations of Human-Robot Interaction (HRI) and Human-Robot Collaboration (HRC) in production processes and work systems have been steadily increasing, especially since 2016. This is followed by an increasing degree of the transfer of designed applications from scientific research institutions, as well as demonstration and learning factories into production and work environments. When implementing HRC into the production system, the advantages and disadvantages compared to a purely manual or a fully automated solution must be considered. In this context, not only are the technical characteristics and the profitability of robots interesting, but also the organizational and ergonomic improvement due to the collaborative robot and its use in production and work systems.",
    references: [
      "Simões, A.C.; Pinto, A.; Santos, J.; Pinheiro, S.; Romero, D. Designing human-robot collaboration (HRC) workspaces in industrial settings: A systemic literature review. J. Manuf. Syst. 2022, 62, 28-43.",
      "Hentout, A.; Aouache, M.; Maoudj, A.; Akli, I. Human-robot interaction in industrial collaborative robotics: A literature review of the decade 2008-2017. Adv. Robot. 2019, 33, 764-799.",
      "Segura, P.; Lobato-Calleros, O.; Ramirez-Serrano, A.; Soria, I. Human-robot collaborative systems: Structural components for current manufacturing applications. Adv. Ind. Manuf. Eng. 2021, 3, 100060.",
      "Tsarouchi, P.; Makris, S.; Chryssolouris, G. Human-robot interaction review and challenges on task planning and programming. Int. J. Comput. Integr. Manuf. 2016, 29, 916-931.",
      "Lasi, H.; Fettke, P.; Kemper, H.G.; Feld, T.; Hoffmann, M. Industry 4.0. Bus. Inf. Syst. Eng. 2014, 6, 239-242.",
      "Garcia, E.; Jimenez, M.A.; Santos, P.G.D.; Armada, M. The evolution of robotics research. IEEE Robot. Autom. Mag. 2007, 14, 90-103.",
      "Murphy, R.R. Introduction to AI Robotics; MIT Press: Cambridge, UK; London, UK, 2019.",
      "Cadena, C.; Carlone, L.; Carrillo, H.; Latif, Y.; Scaramuzza, D.; Neira, J.; Reid, I.; Leonard, J.J. Past, present, and future of simultaneous localization and mapping: Toward the robust-perception age. IEEE Trans. Robot. 2016, 32, 1309-1332.",
      "Kleeberger, K.; Bormann, R.; Kraus, W.; Huber, M.F. A survey on learning-based robotic grasping. Curr. Robot. Rep. 2020, 1, 239-249.",
    ],
  };

  return (
    <div className={styles.container}>

      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Research Paper</span>
          <h1 className={styles.title}>{paperData.title}</h1>
          <div className={styles.authors}>
            {paperData.authors.map((author, index) => (
              <span key={index} className={styles.author}>
                {author}
                {index < paperData.authors.length - 1 && ", "}
              </span>
            ))}
          </div>
          <p className={styles.institution}>{paperData.institution}</p>
        </div>
      </div>

      <div className={styles.content}>
        {/* Abstract Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Abstract</h2>
          <div className={styles.card}>
            <p className={styles.abstractText}>{paperData.abstract}</p>
          </div>
        </section>

        {/* Keywords Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Keywords</h2>
          <div className={styles.keywordsWrapper}>
            {paperData.keywords.map((keyword, index) => (
              <span key={index} className={styles.keyword}>
                {keyword}
              </span>
            ))}
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <div className={styles.card}>
            <p className={styles.text}>{paperData.introduction}</p>
          </div>
        </section>

        {/* Research Areas - Two Column Layout */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Research Areas</h2>
          <div className={styles.grid}>
            {paperData.researchAreas.map((area, index) => (
              <div key={index} className={styles.areaCard}>
                <h3 className={styles.areaTitle}>{area.title}</h3>
                <p className={styles.areaDescription}>{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Conclusion</h2>
          <div className={styles.card}>
            <p className={styles.text}>{paperData.conclusion}</p>
          </div>
        </section>

        {/* References Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>References</h2>
          <div className={styles.referencesCard}>
            <ol className={styles.referencesList}>
              {paperData.references.map((reference, index) => (
                <li key={index} className={styles.referenceItem}>
                  {reference}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}