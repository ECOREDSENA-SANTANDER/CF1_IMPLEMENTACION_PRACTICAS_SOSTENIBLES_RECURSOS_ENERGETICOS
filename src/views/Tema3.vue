<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Contexto energético nacional y regulación


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-4
            p.mb-0 El contexto geográfico de Colombia, la disponibilidad de recursos naturales y las políticas energéticas históricas han configurado una matriz energética particular, caracterizada por una alta dependencia de fuentes hidráulicas. Esta composición representa desafíos importantes para la resiliencia del sistema, especialmente frente a fenómenos climáticos, pero también ofrece oportunidades para fortalecer la diversificación y la incorporación de energías renovables.

    
    p.mb-5(data-aos="fade-left") La matriz energética se entiende como la combinación de fuentes primarias utilizadas para generar electricidad en el país. Entre sus componentes se destacan:


    .row.justify-content-center.align-items-stretch.mb-5(data-aos="fade-right")
      .col-lg-4.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4.mb-md-4
        .bg21.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/2.svg')
          h3.mb-4.text-center Dominio hidroeléctrico
          p.mb-0 Históricamente, la mayor parte de la capacidad instalada proviene de centrales hidroeléctricas basadas en ríos y embalses. La implicación de este dominio es que el sistema se vuelve vulnerable a fenómenos climáticos como El Niño, que reducen significativamente los caudales y comprometen la resiliencia del suministro eléctrico. Esta situación exige contar con fuentes de respaldo que garanticen la continuidad del servicio.
      .col-lg-4.col-md-6.ps-lg-0.pe-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-4
        .bg22.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/3.svg')
          h3.mb-4.text-center.text-white Fuentes de respaldo
          p.mb-0.text-white La generación térmica (carbón, gas y combustibles líquidos) se activa en épocas de sequía para cubrir la demanda. Aunque garantiza seguridad energética, incrementa de manera significativa la huella de carbono del sistema.
      .col-lg-4.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4.mb-md-0
        .bg23.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4(src='@/assets/curso/tema3/4.svg')
          h3.mb-4.text-center.text-white Transición hacia ERNC
          p.mb-0.text-white En la última década se ha promovido de manera sostenida la incorporación de energías renovables no convencionales, principalmente solar fotovoltaica y eólica, con el fin de diversificar la matriz y reducir las emisiones asociadas al sector eléctrico.

    
    p.mb-5(data-aos="fade-left") Durante el periodo comprendido entre agosto de 2024 y julio de 2025, más de las tres cuartas partes del consumo eléctrico del país provinieron de fuentes bajas en carbono, lo que representa alrededor del 74 % del total. La energía hidroeléctrica continúa siendo la principal fuente, aportando aproximadamente el 65 %. Las fuentes fósiles, por su parte, generaron algo más de una cuarta parte de la electricidad, con contribuciones cercanas al 14 % por parte del gas y al 8 % por parte del carbón. Aunque aún es minoritaria, la energía solar alcanzó un aporte cercano al 5 %. El consumo de petróleo y biocombustibles aparece en proporciones marginales.

    
    .bg20.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-3.mb-lg-0.mb-4
          img.img-t.img-a(src='@/assets/curso/tema3/5.svg')
        .col-lg-9
          p.mb-0 En cuanto al consumo eléctrico per cápita, en 2025 se registró una disminución frente al récord histórico del año anterior. El valor alcanzó 1662 kWh por persona, lo que equivale a una reducción de 43 kWh respecto a 2024. La generación per cápita de electricidad proveniente de fuentes bajas en carbono también mostró una caída: en 2025 se produjo un total de 1226 kWh por persona, es decir, 81 kWh menos que el máximo alcanzado en 2017. Estas reducciones resultan preocupantes en un contexto global que exige aumentos sostenidos en la generación limpia para apoyar un futuro energético más electrificado y sostenible.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-2
          .titulo-sexto.mb-4
            h5 Figura 11. 
            | #[em Composición matriz energética colombiana para el año 2024]
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              img.mb-0(src='@/assets/curso/tema3/6.svg' alt='Gráfico circular que muestra la composición de la matriz eléctrica de Colombia, donde el 64 % corresponde a fuentes bajas en carbono, principalmente hidroeléctrica con un 58.1 %, seguida de gas, carbón, solar, biocombustibles y petróleo. Enlace: https://lowcarbonpower.org/es/region/Colombia')
        figcaption Fuente: Low Carbon Power (2025). 


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-9
        .titulo.mb-5
          img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
          h3.mb-0 Retos estratégicos
        ul.lista-ul.mb-4
          li.d-flex.mb-2
            i.fas.fa-angle-right
            p.mb-0 #[b Seguridad del suministro:] garantizar que la demanda creciente se cubra incluso durante la escasez hídrica. 
          li.d-flex.mb-2
            i.fas.fa-angle-right
            p.mb-0 #[b Integración de ERNC:] asegurar la estabilidad de la red y la infraestructura de transmisión necesaria para conectar los grandes proyectos solares y eólicos, a menudo ubicados en zonas remotas.
          li.d-flex.mb-2
            i.fas.fa-angle-right
            p.mb-0 #[b Gestión ambiental:] controlar los impactos generados por la extracción y el transporte de los combustibles de respaldo.
        .bg24.p-4
          p.mb-0 Durante el primer semestre de 2024 se declararon en operación comercial 32 proyectos de generación y 8 de transmisión, los cuales ingresaron para fortalecer la flexibilidad, seguridad y confiabilidad del Sistema interconectado nacional. Con la entrada de estos nuevos proyectos de generación el SIN ha superado el primer gigavatio de capacidad proveniente de fuentes renovables, no obstante, continúa el camino hacia la diversificación y transformación energética de nuestra matriz de generación de energía eléctrica.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema3/7.png')

    
    p.mb-5(data-aos="fade-right") Con la entrada en operación de los proyectos de generación, contamos con una capacidad efectiva neta instalada de 20.767 MW en nuestra matriz de generación a corte de junio de 2024 y están en pruebas 514 MW de energía solar, 32 MW de energía eólica y 12.5 MW de energía hidráulica”, afirma Juan Carlos Morales Ruíz, gerente Centro Nacional de Despacho.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bg4.p-4.mb-2
          .titulo-sexto.mb-4
            h5 Figura 12. 
            | #[em Proyectos de generación de energía para el año 2024]
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-8
              img.mb-0(src='@/assets/curso/tema3/8.svg' alt='Mapa de Colombia que muestra, por departamentos, la ubicación y capacidad en megavatios de diferentes proyectos de generación energética instalados en 2024. Enlace: https://andesco.org.co/en-el-primer-semestre-del-2024-con-el-ingreso-de-40-proyectos-nuevos-se-fortalece-la-seguridad-del-sistema-interconectado-nacional/')
        figcaption Fuente: Andesco (2024).


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-6
        p.mb-lg-3.mb-4 De los 32 proyectos de generación, 29 son de tecnología solar y 3 térmicas. Asimismo, 12 son de generación distribuida, es decir, plantas que generan energía eléctrica con capacidad instalada menor a 1 MW y que se encuentra instalada cerca de los centros de consumo; y 5 son autogeneradores a gran escala que entregan energía al SIN, los cuales están reglamentados por la resolución CREG 174 de 2021.
        p.mb-lg-3.mb-4 Durante el primer semestre, entraron en operación las primeras plantas solares despachadas centralmente: portón del sol de 102 MW y el paso de 68 MW. A estas se sumaron 5 plantas: Tepuy de 83 MW, la unión de 100 MW, fundación de 90 MW, la loma de 150 MW y la mata de 80 MW. 
        .bg25.p-4.mb-lg-0.mb-5
          p.mb-0 Estas plantas aportan 673 MW a la capacidad efectiva neta del SIN. Además, la capacidad del sistema se vio reforzada con la entrada en operación de la planta térmica termocaribe 3 de 52 MW. Con lo anterior, a 30 de junio de 2024 la matriz de generación del SIN tiene los siguientes porcentajes de participación por tecnología: 
      .col-lg-6
        .titulo-sexto.mb-lg-5.mb-4
          h5 Figura 13. 
          | #[em Tipos de proyectos de generación de energía para el año 2024]
        img.mb-4(src='@/assets/curso/tema3/9.svg' alt='Tabla que muestra la capacidad efectiva neta en megavatios de tres tecnologías de generación eléctrica en Colombia: hidráulica (13.220 MW, 63,7 %), térmica (6.274 MW, 30,2 %) y solar (1.273 MW, 6,1 %). Enlace: https://www.xm.com.co/noticias/7028-en-el-primer-semestre-del-2024-con-el-ingreso-de-40-proyectos-nuevos-se-fortalece-la')
        figcaption Fuente: Andesco (2024).


    separador
    #t_3_1.titulo-segundo.mb-5
      h2 3.1 Regulación y sostenibilidad


    p.mb-5(data-aos="fade-left") El marco normativo en Colombia no solo permite la transición energética, sino que la impulsa mediante incentivos y obligaciones, lo cual es fundamental para la planificación de la gestión ambiental.


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Leyes Fundamentales para la gestión sostenible


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-10
        .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4
          .col-lg-6.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 1
              p.text-center.mx-3.mb-4 
                b Ley 697 de 2001 (Uso racional y eficiente de la energía - URE)
              ul.lista-ul.mx-3.mb-0
                li.d-flex.mb-4
                  i.fas.fa-star
                  p.mb-0 Fue la primera ley que estableció la obligatoriedad de fomentar el uso Racional y Eficiente de la Energía (URE).
                li.d-flex.mb-0
                  i.fas.fa-star
                  p.mb-0 Puso las bases para las auditorías energéticas y la implementación de programas de ahorro, enfocándose en la eficiencia como política de Estado.
          .col-lg-6.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 2
              p.text-center.mx-3.mb-lg-5.mb-4  
                b Ley 2099 de 2021 (transición energética)
              ul.lista-ul.mx-3.mb-0
                li.d-flex.mb-4
                  i.fas.fa-star
                  p.mb-0 Es la normativa más reciente y estratégica. Fortalece los instrumentos de la URE y la integración de las ERNC.
                li.d-flex.mb-4
                  i.fas.fa-star
                  p.mb-0 Incentivos clave: establece beneficios tributarios (ejemplo: deducción de renta, exención de IVA y arancel) para proyectos e inversiones en eficiencia energética y autogeneración con fuentes renovables.
                li.d-flex.mb-0
                  i.fas.fa-star
                  p.mb-0 Implicación: permite al gestor justificar la viabilidad económica de los proyectos de sostenibilidad al incorporar los ahorros fiscales como parte del análisis de VAN/TIR.

      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema3/10.png')


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 2. 
          | #[em Marco normativo fundamental]
        .tabla-a.tab2
          table
            thead
              tr
                th Principio de sostenibilidad
                th Regulación Colombiana
                th Resultado de la aplicación
            tbody
              tr
                td.text-center #[b  Eficiencia]
                td Ley 697 (URE), Ley 2099 (incentivos).
                td Reducción de Ci (generación) en la factura y mejora del rendimiento operativo.
              tr
                td.text-center #[b  Renovabilidad]
                td Ley 2099 (autogeneración), CREG (Regulación de Conexión).
                td Diversificación de la matriz y cumplimiento de metas de descarbonización.
              tr
                td.text-center #[b  Circularidad]
                td Normativa ambiental sobre gestión de residuos peligrosos (aplicable a baterías y residuos electrónicos).
                td Minimización del impacto en la fase de Fin de Ciclo de equipos de ERNC.


    p.mb-0(data-aos="fade-right") El conocimiento de estas leyes permite al aprendiz consultar la normativa vigente y relacionar los principios de sostenibilidad con los requerimientos legales, asegurando que las futuras estrategias de eficiencia y mitigación no solo sean viables, sino también legales y fiscalmente atractivas.


</template>

<script>
export default {
  name: 'Tema3',
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
