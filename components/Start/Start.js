import React from "react";
import styles from "..//..//styles/Start.module.css";

const Start = () => {
  return (
    <>
      <div className={styles.start} id="experience">

      <div className={styles.title}>Proporciono Servicios de Calidad!</div>

        <div className={styles.containers}>
          <div className={styles.content}>
            <div className={styles.flex}>
              <div className={styles.num}>01.</div>
              <div className={styles.item}>Diseñador de Productos</div>
            </div>
            <div className={styles.descrip}>
              Responsable de la experiencia del usuario de un producto,
              generalmente tomando la dirección de las metas y objetivos
              comerciales de la gestión del producto. ¡Hay más de 50 proyectos!
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.flex}>
              <div className={styles.num}>02.</div>
              <div className={styles.item}>Diseñador de Marca</div>
            </div>
            <div className={styles.descrip}>
              Elementos de la marca, como el logotipo, la combinación de
              colores, la tipografía y otros componentes de diseño que hacen que
              una marca se destaque de la competencia y sea reconocible.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Start;
