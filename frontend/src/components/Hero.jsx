import styles from "../style";
import { discount, robot,bitcoin, paypal,bank } from "../assets";
import GetStarted from "./GetStarted";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-roboto font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          <span className="text-green">Secure</span> and <br className="sm:block hidden" />{" "}
            <span className="text-green">Convenient</span>{" "}
          </h1>
        
        </div>

        <h1 className="font-roboto font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
         Payment Methods for Traders. 
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts ensures hassle-free trading by offering a range of secure payment methods.
          We prioritize your needs and consider factors like transaction speed and security.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative flex-col`}>
        <img src={bitcoin} alt="billing" className="w-[70%] h-[70%] relative z-[5]" />
        
      </div>

    </section>
  );
};

export default Hero;