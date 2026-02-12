<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ciclo de vida, impactos y principios de gestión sostenible


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.color-primario.p-4.p-lg-5.p-md-4.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4.p-lg-5
            p.mb-0 El análisis del consumo debe complementarse con una visión integral que permita comprender las implicaciones y efectos asociados a dicho consumo. Esta perspectiva amplia se fundamenta en la aplicación del enfoque de ciclo de vida, que posibilita identificar los diferentes tipos de impactos generados a lo largo de cada etapa del proceso energético.
            br
            br
            p.mb-0 El Análisis de Ciclo de Vida (ACV) constituye la metodología central para evaluar los impactos ambientales, sociales y económicos asociados a todas las etapas de existencia de un producto o servicio energético. Adoptar este enfoque implica trascender la evaluación de las emisiones o efectos inmediatos en el punto de uso, con el propósito de reconocer la “huella real” que se produce desde la extracción de materias primas hasta la disposición final.

    
    p.mb-5(data-aos="fade-left") Las fases del ciclo para la energía (y los equipos que la consumen) son:


    .row.fondo2.p-4.p-lg-5.p-md-4.mb-5(data-aos="fade-down")
      .col-lg-12
    
        .tarjeta.tarjeta--gris.ul.p-4.mb-0(data-aos="fade-right")
          PasosB.color-acento-botones
            .row.justify-content-center.align-items-center(titulo="")
              .col-lg-5.mb-lg-0.mb-4
                h4.mb-4 a) Extracción de materias primas: 
                p.mb-4 Se refiere a la obtención de los materiales o combustibles.
                p.mb-0 #[b Ejemplo:] la minería de carbón, la extracción de petróleo y gas, o la obtención de silicio y metales raros para paneles solares y baterías.
              .col-lg-5.col-md-8.col-10
                img(src='@/assets/curso/tema2/2.png')
            .row.justify-content-center.align-items-center(titulo="")
              .col-lg-5.mb-lg-0.mb-4
                h4.mb-4 b) Procesamiento y fabricación: 
                p.mb-4 Transformación de la materia prima en un producto utilizable (combustible, equipo, infraestructura).
                p.mb-0 #[b Ejemplo:] refinación de petróleo, fabricación de turbinas eólicas, producción de acero para torres de alta tensión.
              .col-lg-5.col-md-8.col-10
                img(src='@/assets/curso/tema2/3.png')
            .row.justify-content-center.align-items-center(titulo="")
              .col-lg-5.mb-lg-0.mb-4
                h4.mb-4 c) Transporte y distribución: 
                p.mb-4 La logística para llevar el combustible o el equipo al punto de uso, y el transporte de la energía (líneas de transmisión y distribución).
                p.mb-0 #[b Ejemplo:] suministro de energía eléctrica desde una central generadora hasta una edificación, pasando por líneas de transmisión, subestaciones y redes de distribución locales.
              .col-lg-5.col-md-8.col-10
                img(src='@/assets/curso/tema2/4.png')
            .row.justify-content-center.align-items-center(titulo="")
              .col-lg-5.mb-lg-0.mb-4
                h4.mb-4 d) Uso y operación (consumo): 
                p.mb-4 Es la fase donde el proceso consume energía y es el foco de la eficiencia.
                p.mb-0 #[b Ejemplo:] funcionamiento de un motor, generación de energía en una planta, iluminación de un edificio. 
              .col-lg-5.col-md-8.col-10
                img(src='@/assets/curso/tema2/5.png')
            .row.justify-content-center.align-items-center(titulo="")
              .col-lg-5.mb-lg-0.mb-4
                h4.mb-4 e) Disposición de residuos (fin de ciclo):  
                p.mb-4 El manejo de los materiales cuando el producto o la infraestructura llegan al final de su vida útil.
                p.mb-0 #[b Ejemplo:] desmantelamiento de una central, gestión de cenizas de carbón, reciclaje o confinamiento de baterías de litio.
              .col-lg-5.col-md-8.col-10
                img(src='@/assets/curso/tema2/6.png')


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Figura 10. 
          | #[em Ejemplo de ciclo de vida]
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            img.mb-4(src='@/assets/curso/tema2/7.svg' alt='Diagrama que representa las etapas del ciclo de vida de un producto desde la extracción de materias primas hasta el fin de vida, mostrando entradas, salidas y flujos de reutilización y reciclaje.')
        figcaption Fuente: MtW17 (2020). 
      

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Impactos asociados al uso energético

    
    p.mb-5(data-aos="fade-right") La evaluación de impactos exige clasificar las consecuencias del proceso energético en cuatro grandes categorías. Esta clasificación ayuda a tener una visión equilibrada de la sostenibilidad:

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto
          h5 Tabla 1. 
          | #[em Ejemplo de impactos asociados al uso energético]
        .tabla-a.tab1
          table
            thead
              tr
                th Categoría de impacto
                th Descripción
                th Ejemplos en el sector energético
            tbody
              tr
                td.text-center #[b Ambiental]
                td Alteraciones negativas en el entorno natural y agotamiento de recursos.
                td Emisiones de GEI (CO2, Metano), contaminación de agua y suelo, deforestación, ruido.
              
              tr
                td.text-center #[b Técnico]
                td Problemas operativos que comprometen la calidad y la eficiencia del servicio.
                td Bajo factor de potencia (penalizaciones), fallas en equipos por sobrecalentamiento, interrupciones o microcortes de suministro.
              
              tr
                td.text-center #[b Económico]
                td Costos financieros directos e indirectos, y riesgos de inversión.
                td Sobrecostos por consumo reactivo, multas por incumplimiento normativo, incremento del CAPEX (Inversión de Capital) o OPEX (Gasto Operacional).
              
              tr
                td.text-center #[b Social]
                td Consecuencias sobre las comunidades, la salud y la seguridad.
                td Reasentamiento de comunidades (ejemplo: proyectos hidroeléctricos), riesgos de seguridad en el trabajo, contaminación atmosférica que afecta la salud pública.
        figcaption Referencia Tabla - Norma APA

    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema2/8.svg' alt='')

    
    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-6.mb-lg-0.mb-5
        .bg19.p-4
          p.mb-lg-2.mt-lg-3.mx-lg-3.mx-0.mb-0.mt-0 El impacto ambiental más crítico y medible es la generación de Gases de Efecto Invernadero (GEI). El CO2 es el principal indicador. La capacidad de diagnosticar y valorar el impacto energético se traduce en saber:
      .col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/tema2/9.svg' alt='')
      .col-lg-4
        .bg20.p-4
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              i.fas.fa-star.t2
              p.mb-0 Cuántos kWh se consumen (de la factura).
            li.d-flex.mb-0
              i.fas.fa-star.t2
              p.mb-0 Cuál es el factor de emisión de la fuente de energía (ej. kg \ CO2 por kWh generado).
            li.d-flex.mb-0
              i.fas.fa-star.t2
              p.mb-0 Cuál es la huella de carbono del proceso.


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Principios de sostenibilidad energética

    
    p.mb-5(data-aos="fade-right") La gestión energética sostenible no solo evalúa el impacto, sino que se rige por un conjunto de principios rectores que deben ser integrados en la planificación de soluciones. Estos principios aseguran que las acciones tomadas sean técnica, económica y ambientalmente responsables.


    .row.justify-content-center.align-items-start.mb-0
      .col-lg-8
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0(titulo="a) La eficiencia energética es universalmente reconocida como el “primer combustible”")
            .col-lg-11.mb-0
              ul.lista-ul.mb-0.mx-lg-4
                li.d-flex.mb-2
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Concepto:] se trata de reducir la cantidad de energía requerida para proporcionar productos y servicios. Es el uso óptimo de la energía, manteniendo o mejorando el nivel de servicio o producción.
                li.d-flex.mb-2
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Enfoque práctico:] se materializa a través de auditorías energéticas (analizando la iluminación, motores, climatización, etc.) y la implementación de tecnologías con mayor rendimiento energético.
                li.d-flex.mb-0
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Vínculo con el análisis:] una estrategia de eficiencia es la que ofrece el Periodo de Recuperación (PR) más corto y el mayor Valor Actual Neto (VAN), ya que el costo de la energía no utilizada es cero.
          .row.justify-content-center.align-items.p-0(titulo="b) Renovabilidad (descarbonización de la fuente)")
            .col-lg-11.mb-0
              p.mb-4.mx-lg-4 Este principio se enfoca en la fuente de la energía consumida:
              ul.lista-ul.mb-0.mx-lg-4
                li.d-flex.mb-2
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Concepto:] sustitución progresiva de fuentes de energía basadas en combustibles fósiles (con alta emisión de GEI) por Energías Renovables No Convencionales (ERNC), como la solar, eólica, biomasa y geotérmica.
                li.d-flex.mb-2
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Enfoque práctico:] en el ámbito empresarial, se traduce en proyectos de autogeneración o cogeneración a pequeña y mediana escala (paneles fotovoltaicos en tejados) y la compra de energía certificada con origen renovable.
                li.d-flex.mb-0
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Vínculo con ACV:] la renovabilidad ataca directamente el impacto ambiental en la fase de Generación / Combustión y es clave para el cumplimiento de las metas climáticas nacionales (NDC).
          .row.justify-content-center.align-items.p-0(titulo="c) Resiliencia (la seguridad del suministro)")
            .col-lg-11.mb-0
              p.mb-4.mx-lg-4 La resiliencia aborda la vulnerabilidad del sistema energético frente a amenazas:
              ul.lista-ul.mb-0.mx-lg-4
                li.d-flex.mb-2
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Concepto:] Es la capacidad de un sistema o empresa para soportar, absorber, recuperarse y adaptarse rápidamente a interrupciones o fallas graves (ejemplo: fenómenos climáticos extremos, fallas en la red de transmisión, ciberataques).
                li.d-flex.mb-2
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Enfoque práctico:] se logra mediante la diversificación de fuentes, la implementación de sistemas de almacenamiento de energía (baterías) y la promoción de la generación distribuida (descentralización de la energía).
                li.d-flex.mb-0
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Vínculo con el contexto:] en Colombia, la dependencia histórica del agua hace que la Resiliencia sea un principio vital para mitigar los riesgos asociados a los fenómenos de El Niño.
          .row.justify-content-center.align-items.p-0(titulo="d) Circularidad (gestión del fin de ciclo)")
            .col-lg-11.mb-0
              p.mb-4.mx-lg-4 Este principio aplica el modelo de economía circular a los activos energéticos:
              ul.lista-ul.mb-0.mx-lg-4
                li.d-flex.mb-2
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Concepto:] mantener los recursos y equipos energéticos en uso el mayor tiempo posible para eliminar la necesidad de extracción de nuevos materiales y reducir la generación de residuos.
                li.d-flex.mb-2
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Enfoque práctico:] se aplica en el rediseño de equipos para que sean modulares o reparables, la creación de programas de reutilización de componentes de alta vida útil y el reciclaje de materiales complejos (ejemplo: tierras raras, litio, cobre) en la fase de disposición de residuos.
                li.d-flex.mb-0
                  i.fas.fa-angle-right.t2
                  p.mb-0 #[b Vínculo con ACV:] es el principio clave para gestionar y reducir el impacto ambiental en la fase de fin de ciclo, cerrando el bucle de la sostenibilidad.
      .col-lg-4.d-none.d-lg-block
        img.mb-0(alt="" src="@/assets/curso/tema2/10.png")



</template>

<script>
export default {
  name: 'Tema2',
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
