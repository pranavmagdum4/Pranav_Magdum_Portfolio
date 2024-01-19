import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's build something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:magdump4@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Social Media Acoounts</span>
            <p>Pranav Magdum</p>
          </div>
          <ul className={css.menu}>
  <li><a href="https://twitter.com/pranavmagdum14" target="_blank" rel="noopener noreferrer">TWITTER</a></li>
  <li><a href="https://www.instagram.com/pranav_783?utm_source=qr&igsh=NHA3MmJ3ejhxMGky" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
  <li><a href="https://www.linkedin.com/in/pranav-magdum-5b7205225/" target="_blank" rel="noopener noreferrer">LINKEDIN</a></li>
  <li><a href="https://github.com/pranavmagdum4" target="_blank" rel="noopener noreferrer">GITHUB</a></li>
</ul>

        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
