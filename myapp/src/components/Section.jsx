import { motion } from "framer-motion";

function Section({ id, children, bg }) {
  return (
    <motion.section
      id={id}
      className={`snap-start min-h-screen w-full flex flex-col justify-start ${bg} py-8`}
      initial={{ x: '-75vw' }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1.0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
}

export default Section;