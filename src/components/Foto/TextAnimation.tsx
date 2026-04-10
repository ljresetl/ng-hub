"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "./Foto.module.scss";

interface TextAnimationProps {
  text: string;
}

const TextAnimation: React.FC<TextAnimationProps> = ({ text }) => {
  // Розбиваємо текст на масив окремих символів
  const letters = Array.from(text);

  // Варіанти анімації для батьківського контейнера (керує затримкою між буквами)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // staggerChildren задає інтервал між появою кожної наступної букви
        staggerChildren: 0.04,
        // delayChildren задає затримку перед початком анімації першої букви
        // (1.6с - щоб фото диригента встигло зібратися)
        delayChildren: 1.6,
      },
    },
  };

  // Варіанти анімації для кожної окремої букви
  const childVariants: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring" as const, // as const вирішує проблему з типізацією String
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -15, // Буква вилітає трохи зліва
      y: 10,  // І трохи знизу
    },
  };

  return (
    <motion.h1
      className={styles.heroText}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={`${letter}-${index}`}
          variants={childVariants}
          style={{ 
            display: letter === " " ? "inline" : "inline-block",
            whiteSpace: "pre" // Зберігає пробіли між словами
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextAnimation;