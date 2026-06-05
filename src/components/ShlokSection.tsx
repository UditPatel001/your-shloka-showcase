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
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    hindi: "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। इसलिए कर्मफल की आसक्ति मत रखो और अकर्मण्यता में भी आसक्त मत हो।",
    english: "You have the right to perform your duty, but never to the fruits of your actions. Do not be attached to results, nor to inaction.",
    source: "— Bhagavad Gita 2.47",
  },

  {
    sanskrit: "उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    hindi: "मनुष्य को स्वयं अपने उत्थान का प्रयास करना चाहिए, क्योंकि वही अपना मित्र है और वही अपना शत्रु।",
    english: "One must elevate oneself by one's own efforts and not degrade oneself. The self alone is one's friend and one's enemy.",
    source: "— Bhagavad Gita 6.5",
  },

  {
    sanskrit: "विद्या ददाति विनयं विनयाद्याति पात्रताम्।\nपात्रत्वाद्धनमाप्नोति धनाद्धर्मं ततः सुखम्॥",
    hindi: "विद्या से विनम्रता आती है, विनम्रता से योग्यता, योग्यता से धन, धन से धर्म और धर्म से सुख प्राप्त होता है।",
    english: "Knowledge gives humility; humility brings worthiness; worthiness leads to wealth; wealth enables righteousness, and righteousness brings happiness.",
    source: "— Chanakya Niti",
  },

  {
    sanskrit: "अयं निजः परो वेति गणना लघुचेतसाम्।\nउदारचरितानां तु वसुधैव कुटुम्बकम्॥",
    hindi: "यह मेरा है और वह पराया है, ऐसा विचार छोटे मन वालों का होता है; उदार हृदय वालों के लिए पूरी पृथ्वी एक परिवार है।",
    english: "The distinction between 'mine' and 'others' is made by narrow minds; for the noble, the whole world is one family.",
    source: "— Maha Upanishad",
  },

  {
    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥",
    hindi: "इस संसार में ज्ञान के समान पवित्र कुछ नहीं है। योग में सिद्ध व्यक्ति समय के साथ इसे अपने भीतर अनुभव करता है।",
    english: "Nothing in this world is as purifying as knowledge. In due course, one perfected in yoga realizes it within.",
    source: "— Bhagavad Gita 4.38",
  },

  {
    sanskrit: "सत्यं ब्रूयात् प्रियं ब्रूयान्न ब्रूयात् सत्यमप्रियम्।\nप्रियं च नानृतं ब्रूयादेष धर्मः सनातनः॥",
    hindi: "सत्य बोलो, प्रिय बोलो, परंतु अप्रिय सत्य न बोलो; और प्रिय लगने वाला असत्य भी न बोलो। यही सनातन धर्म है।",
    english: "Speak the truth, speak pleasantly; do not speak unpleasant truth, nor pleasant falsehood. This is the eternal principle.",
    source: "— Manusmriti",
  },

  {
    sanskrit: "श्रद्धावान् लभते ज्ञानं तत्परः संयतेन्द्रियः।\nज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥",
    hindi: "श्रद्धावान और इन्द्रियों को संयमित रखने वाला व्यक्ति ज्ञान प्राप्त करता है, और ज्ञान प्राप्त कर शीघ्र ही परम शांति को प्राप्त होता है।",
    english: "The faithful and disciplined attain knowledge; having gained wisdom, they quickly achieve supreme peace.",
    source: "— Bhagavad Gita 4.39",
  },

  {
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    hindi: "जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं स्वयं अवतार लेता हूँ।",
    english: "Whenever righteousness declines and unrighteousness rises, I manifest Myself.",
    source: "— Bhagavad Gita 4.7",
  },

  {
    sanskrit: "उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः।\nन हि सुप्तस्य सिंहस्य प्रविशन्ति मुखे मृगाः॥",
    hindi: "कार्य केवल परिश्रम से सिद्ध होते हैं, केवल इच्छाओं से नहीं; सोए हुए सिंह के मुख में हिरण स्वयं प्रवेश नहीं करते।",
    english: "Success comes through effort, not mere wishes. Even a lion receives no prey while sleeping.",
    source: "— Panchatantra",
  },

  {
    sanskrit: "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः।\nसर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥",
    hindi: "सभी सुखी हों, सभी निरोग हों, सभी शुभ का दर्शन करें और कोई भी दुःख का भागी न बने।",
    english: "May all be happy, may all be free from illness, may all see auspiciousness, and may none suffer.",
    source: "— Vedic Prayer",
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
    sanskrit: "पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते।\nपूर्णस्य पूर्णमादाय पूर्णमेवावशिष्यते॥",
    hindi: "वह पूर्ण है, यह पूर्ण है। पूर्ण से पूर्ण की उत्पत्ति होती है। पूर्ण में से पूर्ण निकाल लेने पर भी पूर्ण ही शेष रहता है।",
    english: "That is whole; this is whole. From the Whole, the whole universe emerges. Even after taking the whole from the Whole, the Whole remains.",
    source: "— Isha Upanishad Invocation",
  },
  {
    sanskrit: "सह नाववतु। सह नौ भुनक्तु।\nसह वीर्यं करवावहै।\nतेजस्विनावधीतमस्तु मा विद्विषावहै॥",
    hindi: "हम दोनों की रक्षा हो, हम दोनों का पोषण हो, हम दोनों मिलकर पराक्रम से कार्य करें, हमारा अध्ययन तेजस्वी हो और हम परस्पर द्वेष न करें।",
    english: "May we be protected together, nourished together, work together with great energy, and never hate one another.",
    source: "— Taittiriya Upanishad",
  },

  {
    sanskrit: "ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत्।\nतेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद्धनम्॥",
    hindi: "इस जगत में जो कुछ भी है वह ईश्वर से व्याप्त है। त्याग की भावना से जीवन जीओ और लोभ मत करो।",
    english: "All this universe is pervaded by the Divine. Enjoy through renunciation and do not covet what belongs to another.",
    source: "— Isha Upanishad 1",
  },

  {
    sanskrit: "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः।\nयत्रैतास्तु न पूज्यन्ते सर्वास्तत्राफलाः क्रियाः॥",
    hindi: "जहाँ नारी का सम्मान होता है, वहाँ देवताओं का वास होता है; जहाँ उनका सम्मान नहीं होता, वहाँ सभी कर्म निष्फल हो जाते हैं।",
    english: "Where women are honored, the gods rejoice; where they are not, all actions become fruitless.",
    source: "— Manusmriti",
  },

  {
    sanskrit: "परोपकाराय फलन्ति वृक्षाः\nपरोपकाराय वहन्ति नद्यः।\nपरोपकाराय दुहन्ति गावः\nपरोपकारार्थमिदं शरीरम्॥",
    hindi: "वृक्ष, नदियाँ और गायें सब दूसरों के उपकार के लिए हैं; इसी प्रकार यह शरीर भी परोपकार के लिए है।",
    english: "Trees bear fruit, rivers flow, and cows give milk for the benefit of others; likewise, this body exists to serve others.",
    source: "— Skanda Purana",
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