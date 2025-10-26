// ...existing code...
import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import { FaSuitcaseRolling, FaTools, FaTruck, FaRegClock } from "react-icons/fa";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data (extrait / adapté du CV)
export const aboutData = [
  {
    title: "compétences",
    info: [
      {
        title: "Opérations au sol",
        stage: "Chargement/déchargement · Sécurisation des cargaisons · Coordination équipage",
        icons: [GiCommercialAirplane, FaSuitcaseRolling],
      },
      {
        title: "Logistique & manutention",
        stage: "Gestion flux bagages · Tri · Utilisation d’équipements (convois, tapis, élévateurs)",
        icons: [FaTruck, FaTools],
      },
      {
        title: "Sécurité & conformité",
        stage: "Contrôles sécurité · Respect des procédures IETA/compagnie",
        icons: [MdOutlineSecurity],
      },
      {
        title: "Organisation & réactivité",
        stage: "Travail en équipe · Priorisation des opérations en conditions pressurisées",
        icons: [FaRegClock],
      },
    ],
  },
  {
    title: "expériences",
    info: [
      {
        title: "Agent de piste / Bagagiste — Aéroport (poste opérationnel)",
        stage: "2020 - Présent",
      },
    ],
  },
  {
    title: "formation",
    info: [
      {
        title: "Formation Aéronautique / Opérations au sol",
        stage: "Certification interne & formation sécurité (dates dans le CV)",
      },
      {
        title: "BEP / BAC Pro (logistique / transport)",
        stage: "Année de diplôme (voir CV)",
      },
    ],
  },
  {
    title: "certifications",
    info: [
      {
        title: "Certificat de sécurité aéroportuaire",
        stage: "IETA / formations sécurité",
      },
      {
        title: "Certificat manutention et équipements",
        stage: "Conduite d’équipements · CACES (si applicable)",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-[12rem] text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Sabri <span className="text-accent">Belafi</span> — Agent de piste
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Passionné par le travail de terrain et la logistique aéroportuaire, j’assure
            la manutention et la préparation sécurisée des aéronefs et des bagages.
            Réactif et organisé, j’interviens sur le chargement/déchargement, la
            sécurisation des flux et la coordination entre équipes pour garantir la
            ponctualité et la sécurité des opérations.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Années d'expérience
                </div>
              </div>

              {/* vols gérés
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1000} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Vols gérés (estimé)
                </div>
              </div> */}

              {/* bagages */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={100} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Bagages traités (estimé)
                </div>
              </div>

              {/* certifications */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={4} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[120px]">
                  Certifications principales
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* info tabs */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start overflow-y-auto">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div className="font-medium">{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
// ...existing code...