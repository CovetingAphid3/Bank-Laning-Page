import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="trading billing" className="w-[100%] h-[100%] relative z-[5]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Streamline Your <br className="sm:block hidden" /> Trading <span className="text-green">Billing & Invoicing</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Simplify your financial processes with our advanced billing and invoicing solutions. Elite tools for managing transactions, ensuring efficiency, and optimizing your trading operations.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="Download on Apple Store" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="Get it on Google Play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
  </section>
);

export default Billing;
