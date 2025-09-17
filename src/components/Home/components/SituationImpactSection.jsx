import React from 'react';
import waterDropletImg from '../../../assets/water-droplet.webp';
import WaveDivider from './WaveDivider';

const SituationImpactSection = () => {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-[#D7E0E7] relative" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 ">
        <div data-aos="fade-up" data-aos-duration="1000" className="rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 bg-[#e4e9ed] border-2 border-white relative">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            {/* Current Situation */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 leading-tight">
                Current Situation
              </h2>
              <p className="text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl">
                Approximately{' '}
                <span className="font-semibold">2.2 billion</span> people do
                not have access to safe drinking water and{' '}
                <span className="font-semibold">3.5 billion</span> people lack
                access to clean drinking water. This crisis continues to grow
                due to the rapidly increasing global population. Poor water
                management has further aggravated the situation.
                <br />
                <br />
                The top countries facing severe water scarcity include{' '}
                Lebanon, Pakistan, Afghanistan, Syria, Yemen, and Ethiopia.
              </p>
            </div>

            {/* Health Impact */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 leading-tight">
                Health Impact of Contaminated Water
              </h2>
              <p className="text-gray-800 leading-relaxed text-base sm:text-lg md:text-xl">
                Every <span className="font-semibold">33 seconds</span> a
                person dies from heart disease worldwide, and around{' '}
                <span className="font-semibold">26,300</span> people die from
                cancer every day.
                <br />
                <br />
                Contaminated water often contains harmful bacteria and
                microplastics, which contribute to severe health problems such
                as cancer, high blood pressure, and heart diseases.
              </p>
            </div>

            {/* Animated Water Droplet */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none opacity-70 hidden lg:block">
              <div className="relative w-[180px] h-[180px] xl:w-[240px] xl:h-[240px]">
                <div className="absolute inset-0 bg-blue-400/20 rounded-full animate-pulse"></div>
                <img
                  alt="Water Droplet"
                  loading="lazy"
                  decoding="async"
                  src={waterDropletImg}
                  className="object-contain animate-float opacity-80"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    color: "transparent",
                  }}
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>


      </div>


     <WaveDivider isBottom={true} />
    </section>
  );
};

export default SituationImpactSection;
