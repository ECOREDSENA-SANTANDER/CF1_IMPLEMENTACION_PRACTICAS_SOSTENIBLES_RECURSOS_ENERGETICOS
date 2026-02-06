<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente formativo establece primero los conceptos esenciales de sostenibilidad y el análisis del consumo energético, destacando la importancia de comprender la interacción entre los pilares ambiental, social y económico. Se introduce además el análisis económico del consumo a partir de la factura de energía, diferenciando las magnitudes activas y reactivas, e identificando los elementos que conforman el costo unitario. Este enfoque permite determinar una línea base sobre la cual se podrán diseñar estrategias posteriores de eficiencia.
    p.mb-4 Posteriormente, se amplía la perspectiva mediante la incorporación del análisis de ciclo de vida, una metodología que permite evaluar los impactos generados en todas las etapas de la energía, desde la extracción de recursos hasta la disposición final. Se abordan las diferentes categorías de impacto ambientales, técnicas, económicas y sociales y se resalta la importancia de cuantificar las emisiones de gases de efecto invernadero. En este contexto, se presentan también los principios de gestión sostenible, orientados a fortalecer la eficiencia, la renovabilidad, la resiliencia y la circularidad.
    p.mb-4 Finalmente, se contextualizan estos conceptos en la realidad energética del país mediante el estudio de la matriz de generación eléctrica y de los retos que plantea su composición actual. Se revisa el marco normativo relevante, entre ellos la Ley 697 de 2001 y la Ley 2099 de 2021, fundamentales para promover la transición energética y los incentivos asociados. Este análisis permite comprender cómo la regulación sustenta la viabilidad económica de los proyectos de sostenibilidad y orienta la toma de decisiones en el sector.
    

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama que resume el impacto de los usos energéticos, organizado en tres componentes: fundamentos de sostenibilidad y análisis de consumo, ciclo de vida e impactos, y contexto energético nacional y regulación, cada uno con sus conceptos principales asociados.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
