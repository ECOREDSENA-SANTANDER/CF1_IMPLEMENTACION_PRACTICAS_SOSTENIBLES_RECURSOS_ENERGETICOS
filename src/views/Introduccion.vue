<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 Bienvenido al componente formativo “Usos y consumo energético según contexto”. El cual ha sido elaborado para proporcionar al aprendiz la información necesaria para navegar y aprovechar de manera adecuada este programa de formación. En él se presentan los objetivos de aprendizaje, la estructura de los contenidos, las actividades previstas, los criterios de evaluación y los recursos de apoyo disponibles.
        .bg1.p-4
          .row.justify-content-center.mb-lg-2.mt-lg-3
            .col-lg-2
              img.img-t.img-a(src='@/assets/curso/intro/2.svg' alt='AvatarTop')
            .col-lg-10
              p.mb-0 El manejo de los recursos energéticos constituye uno de los desafíos más relevantes del siglo XXI, debido al aumento de la demanda global, la presión sobre el medio ambiente y la necesidad de mantener la competitividad económica. Este material formativo ofrece una visión integral que permite transformar la gestión de los recursos, pasando de una actividad centrada únicamente en el consumo a una práctica estratégica orientada a la sostenibilidad. Para ello, el material guía al aprendiz en el análisis del consumo energético como un indicador susceptible de optimización, mediante herramientas como la factura de energía y el análisis del ciclo de vida, que permiten identificar impactos ambientales, sociales y económicos.
      .col-lg-4
        img(src='@/assets/curso/intro/1.png' alt='AvatarTop')


    p.mb-5 Finalmente, el documento contextualiza la temática en el marco energético nacional, abordando la composición de la matriz energética colombiana y la normativa vigente. Este enfoque permite fundamentar cada decisión de gestión en criterios legales y técnicos, fortaleciendo la capacidad del aprendiz para desarrollar procesos de uso eficiente, responsable y sostenible de la energía.
    

    .row.justify-content-center.align-items-center           
      .col-lg-12
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
