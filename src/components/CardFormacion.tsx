import { motion, type Variants, useScroll, useTransform, useSpring, easeInOut } from "framer-motion";
import { useRef } from "react";

interface TrainingCard {
  title: string;
  description: string;
  img: string;
  bgColor: string;
  link: string;
}

interface CardFormationProps {
  card: TrainingCard;
  index: number;
}

export default function CardFormation({ card, index }: CardFormationProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [40, -40]),
    { damping: 30, stiffness: 100 }
  );

  const isEven = index % 2 === 1;

  // ✅ Variants corregidos usando easeInOut como función
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeInOut } },
  };

  return (
    <motion.section
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      style={{ y, background: `linear-gradient(135deg, ${card.bgColor}BB 0%, ${card.bgColor}99 100%)` }}
      className={`w-full min-h-[500px] flex flex-col md:flex-row ${
        isEven ? "md:flex-row-reverse" : ""
      } justify-center items-center gap-10 md:gap-20 py-16 px-6 md:px-16 rounded-3xl shadow-2xl overflow-hidden`}
    >
      {/* IMAGEN */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex justify-center items-center bg-white/20 rounded-2xl shadow-lg overflow-hidden">
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-full object-contain p-4 drop-shadow-md"
          />
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left text-white z-10 max-w-[500px]">
        <h3 className="text-3xl md:text-5xl font-bold mb-4">{card.title}</h3>
        <p className="text-base md:text-lg mb-6 leading-relaxed">{card.description}</p>
        <a
          href={card.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white/90 text-black font-semibold rounded-lg hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300"
        >
          Ver más
        </a>
      </div>
    </motion.section>
  );
}
