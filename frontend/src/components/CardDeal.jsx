import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Discover <span className="text-green">Exclusive</span>  Trading Deals <br className="sm:block hidden" /> in a Few <span className="text-green">Simple</span> Steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elevate your trading experience with curated deals tailored to your needs. Our platform provides a seamless and secure environment for unlocking lucrative trading opportunities.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="trading card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
