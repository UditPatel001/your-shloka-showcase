// import { motion } from "framer-motion";
// import { useMemo } from "react";

// const shlokas = [
//   {
//     sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
//     hindi: "तुम्हें कर्म करने का ही अधिकार है, फल पर कभी नहीं।",
//     english: "You have the right to perform your duty, but never to its fruits.",
//     source: "— Bhagavad Gita 2.47",
//   },
//   {
//     sanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम्।",
//     hindi: "विद्या विनय देती है, विनय से पात्रता आती है।",
//     english: "Knowledge gives humility; from humility comes worthiness.",
//     source: "— Hitopadesha",
//   },
//   {
//     sanskrit: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।",
//     hindi: "कार्य उद्यम से सिद्ध होते हैं, केवल इच्छाओं से नहीं।",
//     english: "Tasks are accomplished through effort, not merely by wishing.",
//     source: "— Hitopadesha",
//   },
//   {
//     sanskrit: "योगः कर्मसु कौशलम्।",
//     hindi: "कर्मों में कुशलता ही योग है।",
//     english: "Excellence in action is yoga.",
//     source: "— Bhagavad Gita 2.50",
//   },
//   {
//     sanskrit: "सत्यमेव जयते नानृतम्।",
//     hindi: "सत्य की ही विजय होती है, असत्य की नहीं।",
//     english: "Truth alone triumphs, not falsehood.",
//     source: "— Mundaka Upanishad 3.1.6",
//   },
//   {
//     sanskrit: "अहिंसा परमो धर्मः।",
//     hindi: "अहिंसा सबसे बड़ा धर्म है।",
//     english: "Non-violence is the highest duty.",
//     source: "— Mahabharata",
//   },
//   {
//     sanskrit: "तमसो मा ज्योतिर्गमय।",
//     hindi: "अंधकार से प्रकाश की ओर ले चलो।",
//     english: "Lead me from darkness to light.",
//     source: "— Brihadaranyaka Upanishad 1.3.28",
//   },
// ];

// function getDailyShlok() {
//   const start = new Date(2024, 0, 1).getTime();
//   const now = new Date();
//   const daysSinceStart = Math.floor((now.getTime() - start) / (1000 * 60 * 60 * 24));
//   return shlokas[daysSinceStart % shlokas.length];
// }

// const ShlokSection = () => {
//   const shlok = useMemo(() => getDailyShlok(), []);

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 border-b border-white/10 bg-black overflow-hidden">

//     <div className="absolute inset-0 z-0">
//       <img
//         src="/krishna.png"
//         alt=""
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
//     </div>



//   {/* Primary Large Soft Glow (centered) */}
//   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
//                   w-[1000px] h-[1000px] 
//                   bg-white/5 rounded-full blur-3xl pointer-events-none" />

//   {/* Secondary Ambient Glow (subtle accent like Skills/About) */}
//   <div className="absolute top-24 right-24 
//                   w-[450px] h-[450px] 
//                   bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

//   {/* Depth Gradient Layer */}
//   <div className="absolute inset-0 
//                   bg-gradient-to-b from-black via-zinc-950 to-black 
//                   opacity-90 pointer-events-none" />
//       <div className="absolute top-1/3 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      
//     <div className="absolute left-0 top-0 h-full w-32 
//                 bg-gradient-to-r from-white/5 to-transparent pointer-events-none" />

// <div className="absolute right-0 top-0 h-full w-32 
//                 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />



//       <motion.p
//   initial={{ opacity: 0, y: 10 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.8 }}
//   className="relative z-20 text-sm md:text-base 
//             uppercase tracking-[0.4em] 
//             text-white font-medium 
//             drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] 
//             mb-10"
// >
//   Shlok of the Day
// </motion.p>

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.7 }}
//         className="relative z-10 max-w-5xl space-y-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-10 shadow-2xl"
//       >
//         <p className="font-sanskrit text-2xl md:text-3xl lg:text-4xl text-sanskrit leading-relaxed">
//           {shlok.sanskrit}
//         </p>
//         <p className="font-sanskrit text-sm md:text-base text-muted-foreground">
//           {shlok.hindi}
//         </p>
//         <p className="font-serif text-lg md:text-xl text-secondary-foreground italic">
//           "{shlok.english}"
//         </p>
//         <p className="text-xs text-subtle tracking-wider">{shlok.source}</p>
//       </motion.div>
//     </section>
//   );
// };

// export default ShlokSection;

















import { log } from "console";
import { motion } from "framer-motion";
import { useMemo } from "react";

const shlokas = [
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    hindi: "तुम्हें कर्म करने का ही अधिकार है, फल पर कभी नहीं।",
    english: "You have the right to perform your duty, but never to its fruits.",
    source: "— Bhagavad Gita 2.47",
  },
  {
    sanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम्।",
    hindi: "विद्या विनय देती है, विनय से पात्रता आती है।",
    english: "Knowledge gives humility; from humility comes worthiness.",
    source: "— Hitopadesha",
  },
  {
    sanskrit: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।",
    hindi: "कार्य उद्यम से सिद्ध होते हैं, केवल इच्छाओं से नहीं।",
    english: "Tasks are accomplished through effort, not merely by wishing.",
    source: "— Hitopadesha",
  },
  {
    sanskrit: "योगः कर्मसु कौशलम्।",
    hindi: "कर्मों में कुशलता ही योग है।",
    english: "Excellence in action is yoga.",
    source: "— Bhagavad Gita 2.50",
  },
  {
    sanskrit: "सत्यमेव जयते नानृतम्।",
    hindi: "सत्य की ही विजय होती है, असत्य की नहीं।",
    english: "Truth alone triumphs, not falsehood.",
    source: "— Mundaka Upanishad 3.1.6",
  },
  {
    sanskrit: "अहिंसा परमो धर्मः।",
    hindi: "अहिंसा सबसे बड़ा धर्म है।",
    english: "Non-violence is the highest duty.",
    source: "— Mahabharata",
  },
  {
    sanskrit: "तमसो मा ज्योतिर्गमय।",
    hindi: "अंधकार से प्रकाश की ओर ले चलो।",
    english: "Lead me from darkness to light.",
    source: "— Brihadaranyaka Upanishad 1.3.28",
  },
   {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    hindi: "तुम्हें कर्म करने का ही अधिकार है, फल पर कभी नहीं।",
    english: "You have the right to perform your duty, but never to its fruits.",
    source: "— Bhagavad Gita 2.47",
  },
  {
    sanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम्।",
    hindi: "विद्या विनय देती है, विनय से पात्रता आती है।",
    english: "Knowledge gives humility; from humility comes worthiness.",
    source: "— Hitopadesha",
  },
  {
    sanskrit: "उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः।",
    hindi: "कार्य उद्यम से सिद्ध होते हैं, केवल इच्छाओं से नहीं।",
    english: "Tasks are accomplished through effort, not merely by wishing.",
    source: "— Hitopadesha",
  },
  {
    sanskrit: "योगः कर्मसु कौशलम्।",
    hindi: "कर्मों में कुशलता ही योग है।",
    english: "Excellence in action is yoga.",
    source: "— Bhagavad Gita 2.50",
  },
  {
    sanskrit: "सत्यमेव जयते नानृतम्।",
    hindi: "सत्य की ही विजय होती है, असत्य की नहीं।",
    english: "Truth alone triumphs, not falsehood.",
    source: "— Mundaka Upanishad 3.1.6",
  },
  {
    sanskrit: "अहिंसा परमो धर्मः।",
    hindi: "अहिंसा सबसे बड़ा धर्म है।",
    english: "Non-violence is the highest duty.",
    source: "— Mahabharata",
  },
  {
    sanskrit: "तमसो मा ज्योतिर्गमय।",
    hindi: "अंधकार से प्रकाश की ओर ले चलो।",
    english: "Lead me from darkness to light.",
    source: "— Brihadaranyaka Upanishad 1.3.28",
  },
];

console.log(shlokas.length)
function getDailyShlok() {
  // const start = new Date(2024, 0, 1).getTime();

  // const now = new Date();
  
 const random = Math.floor(Math.random() * 15)
  
  // const daysSinceStart = Math.floor(
  //   (now.getTime() - start) / (1000 * 60 * 60 * 24)
  // );

  // return shlokas[daysSinceStart % shlokas.length];
  return shlokas[random];
}

const ShlokSection = () => {
  const shlok = useMemo(() => getDailyShlok(), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 border-b border-white/10 bg-black overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/krishhh.png"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Clean dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/80 to-black/100"></div>
      </div>

      {/* Soft Center Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                      w-[900px] h-[900px] 
                      bg-white/2 rounded-full blur-3xl pointer-events-none" />

      {/* Section Heading */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-sm md:text-base 
                  uppercase tracking-[0.4em] 
                  text-white font-medium 
                  drop-shadow-[0_0_8px_rgba(255,255,255,0.25)] 
                  mb-12"
      >
        Shlok of the Day
      </motion.p>

      {/* Shlok Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl 
                  backdrop-blur-xl 
                bg-black/70 
                  border border-white/20 
                  rounded-2xl 
                  p-12 
                  shadow-2xl"

      >
        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-30 blur-2xl pointer-events-none"></div>

        <p className="relative font-sanskrit text-3xl md:text-4xl text-white leading-relaxed mb-6">
          {shlok.sanskrit}
        </p>

        <p className="relative font-sanskrit text-base md:text-lg text-zinc-300 mb-6">
          {shlok.hindi}
        </p>

        <p className="relative font-serif text-lg md:text-xl text-zinc-200 italic mb-6">
          “{shlok.english}”
        </p>

        <p className="relative text-xs text-zinc-400 tracking-wider">
          {shlok.source}
        </p>
      </motion.div>
    </section>
  );
};

export default ShlokSection;