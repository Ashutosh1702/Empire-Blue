import React from "react";

const lungsImg = new URL("../../../assets/lungus.jpg", import.meta.url).href;
// Icons removed per request; keep only center lungs image

// Inline SVG icons (no external assets)
const VitaminAIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="vitA_red" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ff1744" />
        <stop offset="100%" stopColor="#ff5252" />
      </linearGradient>
      <linearGradient id="vitA_white" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#e3f2fd" />
      </linearGradient>
    </defs>
    <g transform="translate(8 16)">
      <rect x="0" y="0" rx="12" ry="12" width="24" height="20" fill="url(#vitA_red)" />
      <rect x="24" y="0" rx="12" ry="12" width="24" height="20" fill="url(#vitA_white)" />
      <circle cx="14" cy="10" r="7" fill="#fff" opacity="0.18" />
      <text x="11.5" y="14" fontSize="12" fontWeight="700" fill="#ffffff">A</text>
    </g>
  </svg>
);

const GarlicIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="garlicBulb" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#fff5f8" />
        <stop offset="100%" stopColor="#e0d7e7" />
      </linearGradient>
      <linearGradient id="garlicStem" x1="0" x2="0" y1="1" y2="0">
        <stop offset="0%" stopColor="#43a047" />
        <stop offset="100%" stopColor="#81c784" />
      </linearGradient>
    </defs>
    <g transform="translate(8 6)">
      <path d="M24 6c-3 2-4 5-4 8 0 1 .2 2 .5 3-6 2-10 7-10 12 0 7 6 13 14 13s14-6 14-13c0-5-4-10-10-12.1.3-1 .5-2 .5-2.9 0-3-1-6-4-8z" fill="url(#garlicBulb)" stroke="#d1c4e9" strokeWidth="1"/>
      <path d="M24 6c2 1 4 3 5 6" fill="none" stroke="#ceb9de" strokeWidth="1"/>
      <path d="M24 2c-1 2-2 3-2 5 1-1 2-1 3-1s2 0 3 1c0-2-1-3-2-5z" fill="url(#garlicStem)"/>
    </g>
  </svg>
);

const HeartIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="heartGrad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ff6b6b" />
        <stop offset="100%" stopColor="#ff1e56" />
      </linearGradient>
    </defs>
    <path fill="url(#heartGrad)" d="M12 21s-6.716-4.258-9.193-7.207C.962 11.592 1.39 8.5 3.757 6.86 5.64 5.548 8.138 6.034 9.6 7.8L12 10.5l2.4-2.7c1.462-1.766 3.96-2.252 5.843-.94 2.367 1.64 2.795 4.732.95 6.933C18.716 16.742 12 21 12 21z"/>
  </svg>
);

const LeafIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="leafGrad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#66bb6a" />
        <stop offset="100%" stopColor="#26a69a" />
      </linearGradient>
    </defs>
    <path d="M10 34c8-14 22-20 34-22 2 10-1 26-12 34-10 8-20 6-22-12z" fill="url(#leafGrad)"/>
    <path d="M10 34c10-6 18-8 34-12" stroke="#e8f5e9" strokeWidth="2" fill="none"/>
  </svg>
);

const BrainIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="brainGrad" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#ba68c8" />
        <stop offset="100%" stopColor="#7e57c2" />
      </linearGradient>
    </defs>
    <g transform="translate(6 10)">
      <path d="M18 10a8 8 0 0 1 16 0 8 8 0 0 1 8 8c0 8-8 12-16 12S10 26 10 18a8 8 0 0 1 8-8z" fill="url(#brainGrad)"/>
      <path d="M22 14c2 0 4 2 4 4m-8 2c2 0 4 2 4 4m8-8c2 0 4 2 4 4m-4 6c-2 0-4 2-4 4" stroke="#ede7f6" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </g>
  </svg>
);

const BenefitItem = ({ title, subtitle, text, align = "left" }) => {
  return (
    <div className={`flex items-start gap-3 mb-8 ${align === 'right' ? 'lg:text-right lg:flex-row-reverse' : ''}`}>
      <div className="w-2 h-2 rounded-full bg-blue-700 mt-2 flex-shrink-0" />
      <div>
        <h4 className="text-blue-800 font-semibold text-lg">{title}</h4>
        {subtitle && <div className="text-blue-600 text-sm font-medium mb-1">{subtitle}</div>}
        <p className="text-gray-600 text-sm leading-relaxed max-w-[280px]">{text}</p>
      </div>
    </div>
  );
};

const HealthBenefitsSection = () => {
  return (
    <section className="bg-[#d7e0e7] py-8 sm:py-10 lg:py-12" data-aos="fade-up">
      <div className="w-full max-w-[1200px] mx-auto bg-[#e5e5e5] rounded-[30px] lg:rounded-[40px] shadow-xl px-6 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-16">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Health <span className="bg-gradient-to-r from-blue-700 to-green-500 bg-clip-text text-transparent">Benefits</span>
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base">
            Discover the key nutrients and their powerful effects on your health
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center">
          <div className="order-2 lg:order-1">
            <BenefitItem
              title="Anthoxanthin"
              subtitle="Healthy Bone"
              text="Antioxidant properties beneficial for heart health and better blood flow."
            />
            <BenefitItem
              title="Carotenoids"
              subtitle="Immunity Booster"
              text="Supports immune function and promotes eye health while reducing inflammation."
            />
            <BenefitItem
              title="Anthocyanin"
              subtitle="Healthy Brains"
              text="May lower blood pressure and reduce risks associated with heart disease."
            />
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] lg:w-[340px] lg:h-[340px] mx-auto">
              <div className="absolute inset-0 rounded-full bg-white/50" />
              <div className="absolute inset-6 rounded-full bg-white/70" />
              <div className="absolute inset-14 rounded-full bg-white" />
              <div className="absolute inset-24 rounded-full bg-white shadow-xl flex items-center justify-center">
                <img src={lungsImg} alt="Lungs" className="w-24 h-24 object-contain" />
              </div>

              {/* Orbiting badges */}
              {/* Vitamin A - upper left */}
              <div className="absolute -left-2 sm:left-0 top-6 sm:top-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <VitaminAIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
              </div>

              {/* Leaf - top right */}
              <div className="absolute right-2 sm:right-3 top-4 sm:top-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <LeafIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
              </div>

              {/* Heart - right lower */}
              <div className="absolute right-0 sm:-right-2 bottom-10 sm:bottom-12">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <HeartIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
              </div>

              {/* Garlic - left lower */}
              <div className="absolute left-0 sm:-left-2 bottom-8 sm:bottom-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <GarlicIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
              </div>

              {/* Brain - bottom center */}
              <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-1/4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <BrainIcon className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-3 lg:order-3">
            <BenefitItem
              align="right"
              title="Chlorophyll"
              subtitle="Healthy Lungs"
              text="Aids immunity and may block harmful chemicals while supporting cholesterol balance."
            />
            <BenefitItem
              align="right"
              title="Lycopene"
              subtitle="Healthy Heart"
              text="Powerful antioxidant that supports heart health and protects against damage."
            />
            <BenefitItem
              align="right"
              title="Hydration"
              subtitle="Overall Wellness"
              text="Balanced minerals help maintain hydration and support daily performance."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthBenefitsSection;


