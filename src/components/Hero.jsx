import React from "react";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute left-1/4 top-1/2 transform -translate-x-1/4 -translate-y-1/2 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-center gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Salaheddine</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do
            <Typewriter
              options={{
                strings: ["Data analytics", "Data visualization", "Predictive analytics", "Database management"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "natural",
                pauseFor: 1000,
              }}
            />
          </p>
        </div>
      </div>

      
    </section>
  );
};




export default Hero;
