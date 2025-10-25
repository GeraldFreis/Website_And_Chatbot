import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Explanation Optimisation",
    skills: "Pytorch, Tensorflow, XAI, XAI Metrics, ML Pipeline design, Sklearn, Matplotlib, Analysis, Research, Synthesis",
    desc:
      "Tackled ML model untrustworthiness via novel training methods which integrate Explainability (XAI) metrics.",
    extra:
      "Improved a Graph ML models explanation (XAI) quality via the construction of a novel ML model training pipeline",
    bg: "bg-gradient-to-b from-primary to-secondary dark:from-gray-800 dark:to-gray-900",
    link: "https://github.com/GeraldFreis/ExplanationOptimisation",
  },
  {
    title: "Colour Generator From Songs",
    skills: "API, Data Analysis, ML Pipeline design, ML Architecture design, Sklearn, Analysis",
    desc: "A tool to generate lighting sequences for DJs from Spotify Songs.",
    extra:
      "Designed and trained a novel diffusion based Neural Network to turn Spotify songs into lighting sequences for DJs.",
    bg: "bg-gradient-to-b from-accent to-primary dark:from-gray-800 dark:to-gray-900",
    link: "https://github.com/GeraldFreis/ColourGeneratorFromSongs",
  },
  {
    title: "Block Compression Engine",
    skills: "CMake, Automated Testing, Agile, Iterative Design, Test-Driven Design, RLE, Research, Optimisation",
    desc: "A Lossless 3D block compression tool.",
    extra:
      "Worked alongside peers to design a Lossless 3D block compression tool with automated testing using Agile principles.",
    bg: "bg-gradient-to-b from-secondary to-accent dark:from-gray-800 dark:to-gray-900",
    link: "https://github.com/GeraldFreis/SEP_BLOCKCOMPRESSION_S2_2024",
  },
  {
    title: "Decision Tree Interpretability for NLP",
    skills: "Sklearn, Research, Synthesis, Iterative Development, Machine Learning, NLP, Data processing",
    desc: "An analysis of the viability of Decision Trees to explain predictions made by NLPs.",
    extra:
      "Analysed the efficacy of decision boundaries to embeddings of text classifiers for transparent model reasoning.",
    bg: "bg-gradient-to-b from-secondary to-accent dark:from-gray-800 dark:to-gray-900",
    link: "https://github.com/GeraldFreis/DTsAsInterpretabilityModelForNLPNeuralNetworks",
  },
  {
    title: "Vector-based Arithmetic Solution Tool",
    skills: "Matlab, OOP, Modularization, Image Processing, Vector-based Traversal",
    desc: "A tool using vectorized pixel traversal to verify shape consistency in handwritten arithmetic problems.",
    extra:
      "Utilized modular OOP and vector algebra to detect symbol topology and solve arithmetic equations captured by camera.",
    bg: "bg-gradient-to-b from-secondary to-accent dark:from-gray-800 dark:to-gray-900",
    link: "https://github.com/GeraldFreis/Matlab-arithmetic-operations-solver-from-images",
  },
  {
    title: "Autonomous Drone Pathfinding",
    skills: "Python, Automated Testing, Evolutionary Computation, Research",
    desc: "Developed a multi-agent drone path optimization simulator.",
    extra:
      "Implemented A* and RRT* algorithms for mathematical approximations in 3 dimensions.",
    bg: "bg-gradient-to-b from-primary to-accent dark:from-gray-800 dark:to-gray-900",
    link: "https://github.com/The-EC-Course-2024-S2/group-assignment-2-groupniners",
  },
];
const titleVariants = {
    hidden: { y: -60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };
  
  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  
export default function Projects() {
    const navigate = useNavigate();

    
    const sectionRef = useRef();
    const [sectionHeight, setSectionHeight] = useState("auto");
  
    // Dynamically adjust height to fit all project cards
    useEffect(() => {
      const updateHeight = () => {
        if (sectionRef.current) {
          // const rect = sectionRef.current.getBoundingClientRect();
          const contentHeight = sectionRef.current.scrollHeight;
          setSectionHeight(contentHeight + 32); // add some extra space
        }
      };
  
      updateHeight();
      window.addEventListener("resize", updateHeight);
      return () => window.removeEventListener("resize", updateHeight);
    }, []);
  
    return (
      <Section
        ref={sectionRef}
        bg="bg-gradient-to-b from-accent to-primary dark:from-gray-800 dark:to-gray-900"
        style={{ minHeight: sectionHeight }}
        className="pt-20"
      >
        {/* Title */}
        <motion.div
          className="w-full flex justify-center mt-10 mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
            Projects
          </h1>
        </motion.div>
  
        {/* Responsive Grid */}
        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {projects.map((p) => (
              <motion.article
                key={p.title}
                className={`${p.bg} relative p-6 rounded-xl shadow-lg backdrop-blur-md cursor-pointer overflow-hidden flex flex-col`}
                variants={projectVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: [-0.5, 0.5],
                  transition: { duration: 0.5, type: "spring", stiffness: 150 },
                }}
                onClick={() => window.open(p.link, "_blank")}
              >
                {/* Default content */}
                <motion.div
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1"
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-white/90 text-sm sm:text-base">{p.desc}</p>
                </motion.div>
  
                {/* Hover content */}
                <motion.div
                  className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 shadow-lg backdrop-blur-md cursor-pointer overflow-hidden"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <p className="text-white/90 font-semibold mb-2">{p.extra}</p>
                  <p className="text-white/80 text-sm sm:text-base">{p.skills}</p>
                </motion.div>
              </motion.article>
            ))}
          </div>
                        
        </motion.div>
        <h1 className="text-2xl sm:text-5xl font-bold text-white text-center pt-6 hover:text-yellow-400" onClick={() => navigate("/MLmodel")}>
            Take a look at my latest project?
        </h1>
      </Section>
    );
  }