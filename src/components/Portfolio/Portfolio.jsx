import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div variants={textVariant(0.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Projects</span>
            <p style={{ marginTop: "10px" }}>Learned various Tech Stacks by building Projects</p>
          </div>
          <a
            href="https://github.com/pranavmagdum4"
            target="_blank"
            rel="noopener noreferrer"
            className="secondaryText"
          >
            Explore More Projects
          </a>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://pranavmagdum4.github.io/Tree-Visualizer/" target="_blank">
            <img src="./showCase1.png" alt="project" className={css.showCaseImage} />
            <p className={css.showCaseDescription}>Interactive Tree Visualizer</p>
          </a>
          <a href="https://github.com/pranavmagdum4/TicTacToe_Minimax" target="_blank">
            <img src="./showCase3.png" alt="project" className={css.showCaseImage} />
            <p className={css.showCaseDescription}>Tic Tac Toe with Minimax AI</p>
          </a>
          <a href="https://github.com/pranavmagdum4/SQLi-proof-CRUD-app" target="_blank">
            <img src="./showCase2.png" alt="project" className={css.showCaseImage} />
            <p className={css.showCaseDescription}>SQL Injection-Proof CRUD App</p>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
