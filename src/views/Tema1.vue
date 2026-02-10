<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de sostenibilidad y análisis de consumo
      

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-4.p-lg-5.mb-0
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La sostenibilidad es el marco conceptual que orienta la gestión responsable de los recursos en la actualidad. Su definición más ampliamente aceptada proviene del informe Brundtland de 1987, en el cual se acuñó el concepto de desarrollo sostenible. Este se entiende como el desarrollo que satisface las necesidades del presente sin comprometer la capacidad de las futuras generaciones para satisfacer las propias.
            br
            br
            p.mb-0 Este enfoque se sustenta en la interdependencia de tres dimensiones o pilares: el pilar ambiental, que promueve la conservación de los recursos naturales y el manejo adecuado de los ecosistemas; el pilar social, que se orienta a garantizar la equidad, el bienestar y la seguridad de las personas; y el pilar económico, que busca la viabilidad financiera y la generación responsable de riqueza. Cada uno de estos pilares constituye un elemento esencial para alcanzar un equilibrio que permita avanzar hacia modelos de producción y desarrollo verdaderamente sostenibles.


    p.mb-5 A continuación, se describen ejemplos asociados a cada pilar:

    
    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg2.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema1/2.svg' alt='AvatarTop')
          .bg3.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Pilar ambiental (planeta)
          p.mb-2.text-center Conservación de los recursos naturales y manejo de los ecosistemas (ejemplo reducción de emisiones, protección de la biodiversidad).
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg2.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema1/3.svg' alt='AvatarTop')
          .bg3.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Pilar social (personas) 
          p.mb-2.text-center Equidad social, bienestar, seguridad y participación (ejemplo acceso a energía asequible, generación de empleos de calidad).
      .col-lg-4.col-md-6.col-10.mb-lg-0.mb-4
        .h-100.bg2.p-3
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-4
              img(src='@/assets/curso/tema1/4.svg' alt='AvatarTop')
          .bg3.p-1.mb-4
            h4.text-center.mb-0.ps-lg-4.pe-lg-4.ps-3.pe-3 Pilar económico (prosperidad)
          p.mb-2.text-center Viabilidad económica y generación de riqueza de manera responsable (ejemplo rentabilidad a largo plazo, eficiencia de costos).

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        .bg4.p-4.mb-2
          .titulo-sexto
            h5 Figura 1. 
            | #[em Diagrama del desarrollo sostenible]
          img.mb-0(src='@/assets/curso/tema1/5.png' alt='Diagrama del desarrollo sostenible que muestra la intersección de los pilares social, económico y medioambiental, destacando sus áreas de equilibrio como equitativo, viable y vivible.')
        figcaption Fuente: Sucerman, (2024).
      .col-lg-6
        .bg5.p-lg-5.p-4
          p.mb-0.mx-lg-5.mx-0.tex La verdadera sostenibilidad se alcanza en la intersección de los tres pilares fundamentales económico, social y ambiental, donde el crecimiento económico se desarrolla de manera justa, equitativa y responsable, sin comprometer la integridad de los recursos naturales ni afectar el bienestar de las generaciones presentes y futuras. Solo mediante un equilibrio consciente entre estos componentes es posible garantizar un modelo de desarrollo que perdure en el tiempo y que responda a las necesidades de la sociedad sin degradar el entorno que la sustenta.


    .row.justify-content-center.align-items-start.mb-0
      .col-lg-8.mb-lg-0.mb-5
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Huella ecológica")
            .col-lg-12
              p.mb-0 La huella ecológica es un indicador que mide el área de tierra y agua biológicamente productiva necesaria para producir los recursos que una población consume y para asimilar los residuos que genera. Aplicada al sector energético, ayuda a visualizar la cantidad de superficie que se requiere para absorber las emisiones de dióxido de carbono (CO2) resultantes del consumo de combustibles fósiles, siendo una herramienta clave para la concientización sobre nuestro impacto.
          .row.align-items-center(titulo="Economía circular")
            .col-lg-12
              p.mb-0 Este modelo busca desvincular el crecimiento económico del consumo de recursos finitos, promoviendo un sistema donde los productos, componentes y materiales se mantienen en su máximo valor y utilidad durante el mayor tiempo posible.
          .row.align-items-center(titulo="Principios clave")
            .col-lg-12
              p.mb-0 Rediseñar (productos duraderos), Reducir (uso de materiales vírgenes), Reutilizar (extender la vida útil) y Reciclar (reintegrar materiales al ciclo productivo).
          .row.align-items-center(titulo="Contraste con el modelo lineal")
            .col-lg-12
              p.mb-0 El modelo tradicional es “tomar – hacer - desechar”; la economía circular busca “cerrar el ciclo” y es fundamental para la gestión sostenible de los residuos energéticos (ejemplo palas de aerogeneradores, baterías).
      .col-lg-4
        img(src='@/assets/curso/tema1/6.png', alt='')     


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Consumo energético: concepto y análisis económico


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema1/7.png', alt='')     
      .col-lg-7
        p.mb-4 El consumo energético se refiere a la cantidad de energía utilizada por un proceso, sistema o instalación en un período determinado. Para una gestión eficiente, es vital clasificar este consumo:
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-2
            img.img-t.img-a(src='@/assets/curso/tema1/8.svg', alt='')     
          .col-lg-10
            ul.lista-ul.mb-0
              li.d-flex.mb-4
                i.fas.fa-angle-right
                p.mb-0 #[b Consumo activo (kWh):] es la energía que efectivamente realiza un trabajo útil (mover un motor, iluminar un espacio). Es la principal unidad de cobro.
              li.d-flex.mb-0
                i.fas.fa-angle-right
                p.mb-0 #[b Consumo reactivo (kVArh):] es la energía que los equipos inductivos (motores, transformadores) necesitan para generar campos magnéticos. Un exceso de consumo reactivo implica una penalización económica en la factura y una ineficiencia técnica.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.pe-lg-0
        .bg6.p-lg-5.p-4
          .bg8.p-2.mb-5
            h4.mb-0.text-white.ps-3.pe-3 ¿Cuál es la diferencia entre kW y kVA?
          p.mb-2 La principal diferencia entre kW y kVA es que kW mide la potencia real, mientras que kVA mide la potencia aparente. La potencia real, medida en kW, es la cantidad de energía que se está utilizando o produciendo en un momento dado. La potencia aparente, medida en kVA, es la cantidad de energía que se necesita para ejecutar un equipo eléctrico en particular.
      .col-lg-4.ps-lg-0
        .bg7.p-4
          img.img-t.img-a(src='@/assets/curso/tema1/9.svg', alt='')   


    p.mb-5 #[b Ejemplo:] un genio pensó una vez en explicar la relación entre kW y kVA usando algo que todos entenderíamos, una cerveza: imagina que estás sentado en su bar local, con un vaso de cerveza en la mano. El contenido total de tu vaso (líquido + espuma) es el kVA. Sin embargo, solo la parte líquida de tu cerveza te calma la sed, es decir, los kW. Cuanto mejor sea el barman (cuanto más eficiente sea el sistema eléctrico), más cerveza (kW) tendrás.  


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .titulo-sexto
          h5 Figura 2. 
          | #[em Diferencia entre kW y kVA]
        img.mb-2(src='@/assets/curso/tema1/10.png' alt='Imagen comparativa que utiliza un vaso de cerveza para ilustrar la relación entre potencia activa, potencia reactiva y potencia aparente, diferenciando energía útil y energía perdida.')
        figcaption Fuente: Equitel. (2025). 

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bg9.p-4.p-lg-5
          p.mb-0 En otras palabras, la potencia aparente es la cantidad total de energía que un equipo eléctrico consume, incluyendo la energía que se pierde debido a la resistencia en los cables y otros componentes del sistema eléctrico. La potencia real es la cantidad de energía que se convierte en trabajo útil, como mover una máquina o producir luz.


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Te proporcionamos algunos datos curiosos sobre la diferencia entre kW y kVA


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/tema1/11.png', alt='')   
      .col-lg-8
        ul.lista-ul.lista-ul--separador.mb-0
          li.d-flex.mb-3
            i.fas.fa-star
            p.mb-0 kW es la unidad de potencia activa, mientras que kVA es la unidad de potencia aparente. La potencia activa es la energía que se convierte en trabajo, mientras que la potencia aparente es la energía total suministrada a un circuito eléctrico.
          li.d-flex.mb-3
            i.fas.fa-star
            p.mb-0 En los circuitos eléctricos, siempre hay una pequeña cantidad de energía que se pierde debido a la resistencia del cableado y otros componentes. La potencia activa es la energía que realmente se utiliza, mientras que la potencia aparente incluye la energía perdida.
          li.d-flex.mb-3
            i.fas.fa-star
            p.mb-0 En un sistema 100 % eficiente, kW = kVA. Sin embargo, los sistemas eléctricos rara vez alcanzan el 100 % de eficiencia y, por lo tanto, no toda su potencia aparente se utiliza para generar trabajo útil.
          li.d-flex.mb-3
            i.fas.fa-star
            p.mb-0 La potencia aparente (kVA) es siempre mayor o igual a la potencia activa (kW). En un circuito con un FP de 1.0 kW y kVA son iguales. En un circuito con un FP de menos de 1.0 kVA es mayor que kW.
          li.d-flex.mb-0
            i.fas.fa-star
            p.mb-0 Las empresas eléctricas suelen facturar a los clientes por la potencia aparente (kVA), pero solo por la potencia activa (kW) si el FP es igual o superior a un valor preestablecido. Por lo tanto, un cliente con un FP bajo puede pagar más por la energía que realmente utiliza.

    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 ¿Por qué es importante tener estos conceptos claros al comprar una planta eléctrica?


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p.mb-4 Conocer la diferencia entre kVA y kW es fundamental al seleccionar un generador, ya que de ello depende que el equipo pueda suministrar la potencia necesaria para alimentar todos los dispositivos conectados y evitar sobrecargas. En los generadores trifásicos, es importante tener en cuenta que, de fábrica, suelen estar diseñados con un factor de potencia de 0,8. Esto implica que un generador de 100 kVA entrega 80 kW de potencia activa; sin embargo, lo ideal es conocer el factor de potencia real del sistema donde será instalado el equipo.
        .bg1.p-4.mb-4
          .row.justify-content-center.mb-lg-2.mt-lg-3
            .col-lg-2
              img.img-t.img-a(src='@/assets/curso/tema1/13.svg' alt='AvatarTop')
            .col-lg-10
              p.mb-0 El kVA representa la capacidad total del generador, mientras que el kW corresponde a la potencia útil que realmente se aprovecha. Si, por ejemplo, el sistema de la edificación presenta un factor de potencia de 0,9, esos mismos 100 kVA equivaldrán a 90 kW. En este caso, si el generador fue dimensionado para 80 kW, quedaría por debajo de la demanda real, lo que podría generar sobrecargas y apagados inesperados.
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-6
            p.mb-0 En conclusión, al diseñar y adquirir un generador resulta indispensable conocer el factor de potencia del sistema y dimensionar el equipo con base en la potencia activa requerida, y no únicamente en los kVA nominales. Esta práctica asegura un funcionamiento confiable y eficiente, prolonga la vida útil del generador y previene fallas que pueden resultar costosas.
          .col-lg-6
            p.mb-3 La clasificación por uso final es clave para la auditoría:
            ul.lista-ul.mb-0
              li.d-flex.mb-1
                i.fas.fa-pencil
                p.mb-0 Iluminación.
              li.d-flex.mb-1
                i.fas.fa-pencil
                p.mb-0 Climatización (calefacción, ventilación, aire acondicionado).
              li.d-flex.mb-1
                i.fas.fa-pencil
                p.mb-0 Fuerza motriz (motores y bombas).
              li.d-flex.mb-0
                i.fas.fa-pencil
                p.mb-0 Procesos térmicos (calderas, hornos).

      .col-lg-4
        img(src='@/assets/curso/tema1/12.png' alt='AvatarTop')


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subtitulo
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Análisis económico (la factura de energía eléctrica)

    p.mb-4 La factura es el primer y más importante instrumento de análisis económico del consumo energético. En Colombia, su interpretación permite identificar y clasificar los costos:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/tema1/14.png', alt='')   
      .col-lg-6
        ul.lista-ul.mb-3
          li.d-flex.mb-2
            i.fas.fa-star
            p.mb-0 #[b Cargos fijos:] incluyen componentes como la generación, transmisión, distribución y comercialización.
          li.d-flex.mb-2
            i.fas.fa-star
            p.mb-0 #[b Cargo por consumo (kWh):] el costo variable determinado por el volumen de energía activa consumida.
          li.d-flex.mb-0
            i.fas.fa-star
            p.mb-0 #[b Penalizaciones:] costos adicionales por alto consumo reactivo o por exceder la demanda máxima contratada.
        p.mb-0 El análisis de la factura permite identificar los componentes de cobro de mayor peso y establecer la primera línea base para buscar la viabilidad económica de los proyectos de eficiencia.


    .titulo.mb-5(data-aos="fade-right")
      img(:src="require('@/assets/curso/tema1/sub.svg')" alt='Imagen decorativa')
      h3.mb-0 Cómo leer la factura de energía eléctrica en Colombia 
    

    p.mb-5 La factura colombiana, aunque su presentación varía según el operador (Enel, Celsia, EPM, etc.), mantiene una estructura de información y cargos regulada por la Comisión de Regulación de Energía y Gas (CREG). La clave está en diferenciar la información de identificación, la información técnica de consumo y el detalle de los cobros.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12 
        .tarjetaf.p-4.mb-0
          SlyderA(tipo="b")(data-aos="fade-left")
            .row.justify-content-center.align-items-end.p-0.p-lg-4
              .col-lg-6
                p.mb-4 #[b a) Datos del usuario y periodo de facturación:]  esta sección es crucial para el seguimiento administrativo del consumo. 
                ul.lista-ul.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-angle-right
                    p.mb-0 #[b Cuenta / código del cliente:] número de identificación único que necesitará para pagos y consultas.
                  li.d-flex.mb-3
                    i.fas.fa-angle-right
                    p.mb-0 #[b Dirección / estrato:] indica el lugar de suministro y la clasificación socioeconómica que puede afectar el valor de los subsidios o contribuciones.
                  li.d-flex.mb-0
                    i.fas.fa-angle-right
                    p.mb-0 #[b Periodo facturado:] muestra las fechas de inicio y finalización del ciclo de lectura (generalmente 30 días) y la fecha límite de pago.
              .col-lg-5.col-md-9
                img.mb-0(alt="" src="@/assets/curso/tema1/15.png")
            .row.justify-content-center.align-items-end.p-0.p-lg-4
              .col-lg-6
                p.mb-4 #[b b)	Información técnica del consumo:]  aquí se traduce el uso de la energía en datos medibles:
                ul.lista-ul.mb-0
                  li.d-flex.mb-3
                    i.fas.fa-angle-right
                    p.mb-0 #[b Lectura actual y anterior:] valores registrados por el medidor al inicio y al final del ciclo de facturación.
                  li.d-flex.mb-3
                    i.fas.fa-angle-right
                    p.mb-0 #[b Consumo (kWh):] es la diferencia entre la lectura actual y la anterior, y representa la energía activa que se utilizó para realizar trabajo útil (la base principal del cobro).
                  li.d-flex.mb-0
                    i.fas.fa-angle-right
                    p.mb-0 #[b Histórico de consumo:] un gráfico o tabla que compara el consumo del periodo actual con meses anteriores. Esta es la primera herramienta para detectar anomalías o el éxito de medidas de ahorro.
              .col-lg-5.col-md-9
                img.mb-0(alt="" src="@/assets/curso/tema1/16.png")
            .row.justify-content-center.align-items-end.p-0.p-lg-4
              .col-lg-6
                p.mb-4 #[b c)	El Costo Unitario y la estructura tarifaria (CU):] 
                p.mb-4 El costo total que paga el usuario por cada kWh consumido se conoce como Costo Unitario de prestación del servicio (CU). Este costo no es uniforme y se compone de varios elementos definidos por la regulación de la Comisión de Regulación de Energía y Gas (CREG). Entender estos componentes es esencial para determinar la viabilidad económica de cualquier proyecto de eficiencia
                .titulo-sexto
                  h5 Figura 3. 
                  | #[em Ecuación del costo unitario de energía]
                img.img-t.img-a(src='@/assets/curso/tema1/18.svg' alt='Ecuación que representa el costo unitario de energía, expresada como CU igual a la suma de varios componentes: Ci, Ti, Di, Ci, Ri y Pi.')
              .col-lg-5.col-md-9
                img.mb-0(alt="" src="@/assets/curso/tema1/17.png")

    
    p.mb-5 Se define así:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0(data-aos="fade-left")
          .row.justify-content-center.align-items.p-0(titulo="Ci (Generación)")
            .col-lg-11.mb-0
              p.mb-0 El costo de producir el kWh. Es la parte más volátil y está directamente ligada al consumo activo.
          .row.justify-content-center.align-items.p-0(titulo="Ti (Transmisión)")
            .col-lg-11.mb-0
              p.mb-0 El costo de transportar la energía desde las centrales de generación hasta las subestaciones principales de alta tensión.
          .row.justify-content-center.align-items.p-0(titulo="Di (Distribución)")
            .col-lg-11.mb-0
              p.mb-0 El costo de llevar la energía desde las subestaciones hasta el punto de consumo final (redes de media y baja tensión).
          .row.justify-content-center.align-items.p-0(titulo="C (Comercialización)")
            .col-lg-11.mb-0
              p.mb-0 El costo de la gestión, lectura, facturación y atención al cliente. Es típicamente un cargo fijo o con una pequeña variación.
          .row.justify-content-center.align-items.p-0(titulo="Ri (Restricciones)")
            .col-lg-11.mb-0
              p.mb-0 Costos adicionales por mantener la seguridad y calidad del servicio cuando hay congestión o limitaciones en el sistema (ejemplo: costos de operación de plantas de respaldo).
          .row.justify-content-center.align-items.p-0(titulo="Pi (Pérdidas)")
            .col-lg-11.mb-0
              p.mb-0 El costo de la energía que se pierde en el sistema durante la distribución y transmisión (tanto pérdidas técnicas inevitables como pérdidas no técnicas).
      .col-lg-5
        img.mb-0(alt="" src="@/assets/curso/tema1/19.png")

    
    p.mb-5 La eficiencia energética se enfoca en reducir el consumo de kWh para impactar directamente el costo de Generación (G) y los costos variables.


    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-left")
      .col-auto.ps-lg-3.pe-lg-0.ps-0.pe-0
        .subtitulo
      .col.ps-lg-0
        .ssu.p-lg-2.p-3.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h4.mb-0 Implicaciones para la sostenibilidad

    
    p.mb-4 El análisis económico del CU es crucial porque las estrategias de eficiencia energética se dirigen principalmente a reducir el consumo activo (kWh), impactando directamente el cargo de Generación (Ci) y, marginalmente, los costos asociados a Transmisión (Ti) y Pérdidas (Pi).
    p.mb-5 Al Identificar el alto impacto de la variable Ci en la factura, el aprendiz puede justificar que la inversión en eficiencia no solo reduce el impacto ambiental (menos generación requerida) sino que también garantiza la Viabilidad Económica al reducir la porción más grande y variable del costo total.
    

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-8
        .h-100.bg11.p-4.p-lg-5
          .row.justify-content-center.align-items-center.mb-0
            .col-4.mb-4.my-3
              img.img-t.img-a(src='@/assets/curso/tema1/20.svg' alt='AvatarTop')
          .bg10.p-1.mb-4
            h4.text-center.text-white.mb-0.ps-3.pe-3 a)	Cargos adicionales y totales
          p.mb-4 Se detallan los cobros que no son solo por consumo de energía.
          ul.lista-ul.mb-0
            li.d-flex.mb-3
              i.fas.fa-angle-right
              p.mb-0 #[b Consumo reactivo (kVArh):] si el Factor de Potencia es inferior al límite normativo (típicamente 0.9 o 0.92, según el nivel de tensión), se aplica una penalización. Este cobro es un indicador claro de ineficiencia técnica que debe corregirse con bancos de condensadores.
            li.d-flex.mb-3
              i.fas.fa-angle-right
              p.mb-0 #[b Aseo y alumbrado público:] estos son cobros obligatorios pero no hacen parte del consumo energético.
            li.d-flex.mb-3
              i.fas.fa-angle-right
              p.mb-0 #[b Subsidios y contribuciones:] se aplica un subsidio (para estratos bajos) o una contribución solidaria (para estratos altos y sector industrial / comercial) al valor del servicio.
            li.d-flex.mb-0
              i.fas.fa-angle-right
              p.mb-0 #[b Total a pagar:] la suma final de todos los cargos, incluyendo impuestos.
      .col-lg-4
        .h-100.bg12.p-4.p-lg-5
          .row.justify-content-center.align-items-center.mb-0
            .col-5.mb-4.my-3
              img.img-t.img-a(src='@/assets/curso/tema1/21.svg' alt='AvatarTop')
          .bg10.p-1.mb-4
            h4.text-center.text-white.mb-0.ps-3.pe-3 b. Códigos de desconexión y suspensión
          p.mb-0.text-center El documento siempre incluye información sobre la fecha límite de pago y, en caso de incumplimiento, la fecha estimada de suspensión del servicio. Es crucial para evitar interrupciones en la operación.


    p.mb-5 A continuación, se presenta a manera de ejemplo el contenido típico de una factura de energía eléctrica. Para este caso en particular, se utilizará la información dispuesta por la empresa que presta el servicio a los habitantes de Bogotá. Cabe destacar que dicha información es de carácter general para todo el país y que la organización de los datos puede variar según la empresa prestadora del servicio en cada región; sin embargo, los conceptos incluidos serán siempre similares o equivalentes, de acuerdo con las disposiciones normativas vigentes.
    

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-6
        .titulo-sexto
          h5 Figura 4. 
          | #[em Ejemplo factura ENEL parte frontal 1]
        img.mb-2(src='@/assets/curso/tema1/22.png' alt='Imagen de una factura de energía de Enel que muestra el número de cliente, la información del titular y un aviso destacado sobre la entrega del recibo.perdida.')
        figcaption Fuente: Enel Colombia. (2025). Entendimiento de la factura de energía. <br>En la Figura 4 los números corresponden de la siguiente manera:
      .col-lg-6
        .bg13.p-lg-5.p-4
          ul.lista-ul.mb-0.mx-lg-5.mt-lg-3
            li.d-flex.mb-5
              i.fas.fa-pencil
              p.mb-0 Número 1 número de cliente: es el número que lo identifica como usuario del servicio, con él puede hacer trámites, consultas y solicitudes de la cuenta de energía.
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 Número 2 datos de cliente: corresponde al nombre del titular de la cuenta y dirección en la factura.

    
    h3.mb-5 a) En la Figura 5 los números corresponden de la siguiente manera


    .row.justify-content-center.align-items-end.mb-5
      .col-lg-6
        .titulo-sexto
          h5 Figura 5. 
          | #[em Ejemplo factura ENEL parte frontal 2]
        img.mb-2(src='@/assets/curso/tema1/23.png' alt='Imagen de una factura de energía de Enel que muestra el número de cliente, la información del titular y un aviso destacado sobre la entrega del recibo.')
        figcaption Fuente: Enel Colombia. (2025). Entendimiento de la factura de energía. 
      .col-lg-6
        .bg13.p-4
          ul.lista-ul.mb-0.mt-lg-2
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 #[b Número 3 histórico de consumo:] puede ver el comportamiento de tu consumo de energía para el mes actual y en los últimos seis periodos facturados.
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 #[b Energía activa:] es la energía consumida para la iluminación y el funcionamiento de todo tipo de aparatos eléctricos en el hogar.
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 #[b Energía reactiva:] es la energía que algunos equipos eléctricos absorben de la red, pero que se debe controlar ya que si supera el 50 % de la energía activa será cobrada.
            li.d-flex.mb-1
              i.fas.fa-pencil
              p.mb-0 #[b Número 4 periodo facturado y días facturados:] el periodo facturado hace referencia a las fechas de consumo y sobre el cual se aplica el cobro de la tarifa de energía.

    
    p.mb-4 Los días facturados corresponden a la diferencia entre la fecha de lectura actual y la fecha de lectura anterior, lo que permite determinar el número de días de consumo incluidos en la factura. Es importante considerar que, debido a la presencia de días festivos, los periodos de facturación pueden variar entre 27 y 33 días, completando al final del año un total de 365 días. Esta variación puede incidir en el valor facturado de un periodo a otro; por ello, resulta fundamental revisar los días facturados al analizar el consumo energético.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12.offset-lg-0
        .row.justify-content-center.align-items-center
          .col-lg-9.pad.com
            .bg14.p-3
              h4.mb-3.mx-3 Número 5 consumo mes kWh
              p.mb-0.mx-3 Es el total de la energía consumida entre las fechas del periodo actual de facturación.  
            .bg1.p-3
              h4.mb-3.mx-3 Número 6 valor kWh aplicado
              p.mb-0.pe-lg-5.mx-3 Es el precio cobrado por cada kilovatio hora del consumo, cuyo valor depende del resultado mensual de la fórmula tarifaria vigente definida por la Comisión de Regulación de Energía y Gas (CREG), por lo cual varia de un periodo a otro.
            .bg15.p-3
              h4.mb-3.mx-3 Número 7 consumo diario kWh y valor diario
              p.mb-0.pe-lg-5.mx-3 Corresponde al consumo diario en kilovatios hora y cuánto cuesta por día para que se haga un consumo eficiente y siga ahorrando energía.
            .bg1.p-3
              h4.mb-3.mx-3 Número 8 Consumo promedio
              p.mb-0.pe-lg-5.mx-3 Esta referencia permite comparar si el consumo actual es mayor, menor o similar al registrado en periodos anteriores. Corresponde al promedio del consumo de los últimos seis (6) periodos facturados.
            .bg16.p-3
              h4.mb-3.mx-3 Número 9 aviso informativo
              p.mb-0.pe-lg-5.mx-3 En la factura siempre encontrará la información sobre si se tuvo acceso a la lectura del medidor, lo que debe hacer cuando no se logre acceder al medidor. Además, se informará a través de un semáforo en verde, amarillo o rojo si el consumo de energía se encuentra en lo habitual o tiene un comportamiento diferente.
          .col-lg-5.sob.d-none.d-lg-block
            img.img-t.sobr(src="@/assets/curso/tema1/24.svg", alt="alt")


    h3.mb-5 b) En la Figura 6 los números corresponden de la siguiente manera


    .row.justify-content-center.align-items-end.mb-5
      .col-lg-6
        .titulo-sexto
          h5 Figura 6. 
          | #[em Ejemplo factura ENEL parte frontal 3]
        img.mb-2(src='@/assets/curso/tema1/25.png' alt='Gráfica de consumo de energía que muestra el comportamiento mensual, los días facturados, el consumo total del mes y los valores aplicados en la factura.')
        figcaption Fuente: Enel Colombia. (2025). Entendimiento de la factura de energía. 
      .col-lg-6
        .bg13.p-4
          ul.lista-ul.mb-0.mt-lg-2
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 #[b Número 10 aviso informativo:] corresponde a los datos asociados a la cuenta de energía, tales como la clase del servicio (residencial, comercial, industrial, entre otros), el estrato socioeconómico, el número de ruta utilizado para la toma de lectura y distribución de la factura, así como el número del medidor.
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 #[b Número 11 calidad del servicio:] en esta gráfica se muestra el número de horas con interrupción del servicio y el número de interrupciones (eventos) durante el periodo facturado.
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 #[b Número 12 uso eficiente de energía:] son tips que comparte la empresa de energía para hacer un mejor uso de energía en casa.
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 #[b Número 13 contacto con la empresa:] aquí refieren los canales habilitados para que se comuniquen con la empresa de servicios.


    h3.mb-5 c) En la Figura 7 los números corresponden de la siguiente manera

 
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-6
        .bg13.p-5
          ul.lista-ul.mb-0.mt-lg-2
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 #[b Número 14 medios de pago:] encontrará todos los canales que la empresa de energía tiene habilitados para el pago de la factura; puntos físicos y virtuales. 
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 #[b Número 15 componentes tarifarios:] es el costo de cada uno de los componentes del valor de la energía: generación, transmisión, distribución, comercialización, pérdidas y restricciones.
            li.d-flex.mb-2
              i.fas.fa-pencil
              p.mb-0 #[b Número 16 puntos de atención aseo:] si se incluye el cobro del servicio de aseo en la factura, en este apartado se encuentran los datos del operador correspondiente, a fin de atender cualquier inquietud o aclaración.
      .col-lg-6
        .titulo-sexto
          h5 Figura 7. 
          | #[em Ejemplo factura ENEL parte frontal 4]
        img.mb-2(src='@/assets/curso/tema1/26.png' alt='Imagen con información sobre los medios de pago de una factura de servicios públicos, incluyendo opciones presenciales, virtuales y puntos de atención al usuario.')
        figcaption Fuente: Enel Colombia. (2025). Entendimiento de la factura de energía. 
      
    
    p.mb-5 Detrás de la factura, el cliente encontrará el resumen detallado de los valores cobrados, tales como el cargo por el servicio de energía, el cobro por concepto de aseo (aplicable a determinados clientes), el valor de otros productos y servicios adquiridos, y el total general a pagar. Adicionalmente, se indica el plazo máximo establecido para efectuar el pago y otros datos de relevancia que el usuario debe conocer.


    h3.mb-5 d) En la Figura 8 los números corresponden de la siguiente manera


    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 1
          p.text-center.mx-3 
            b Número 1 total a pagar y valores a pagar de cada servicio
          p.mb-0.text-center.mx-3  Encontrará todos los canales que la empresa de energía tiene habilitados para el pago de la factura; puntos físicos y virtuales. 
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 2
          p.text-center.mx-3  
            b Número 2 fecha de pago oportuno
          p.mb-0.text-center.mx-3 Es la fecha de plazo máximo en la que podrá cancelar el valor total de la factura.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 3
          p.text-center.mx-3  
            b Número 3 fecha de suspensión
          p.mb-0.text-center.mx-3 Es la fecha a partir de la cual se generará la suspensión del servicio, si no se realiza el pago de la factura.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-botones.hh.p-4.h-100.mb-0
          .tarjeta-numerada__numero
            .h2 4
          p.text-center.mx-3  
            b Número 4 fecha de próxima lectura
          p.mb-0.text-center.mx-3 Corresponde a la próxima fecha en la que se realizará la visita al predio para tomar la lectura del medidor.


    .bg4.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-8
          .titulo-sexto
            h5 Figura 8. 
            | #[em Ejemplo factura ENEL parte posterior 1]
          img.mb-2(src='@/assets/curso/tema1/27.png' alt='Resumen del valor total a pagar en una factura de energía, mostrando los componentes cobrados y las fechas de pago oportuno, suspensión y lectura del medidor.')
          figcaption Fuente: Enel Colombia. (2025). Entendimiento de la factura de energía. 
      
  
    h3.mb-5 e) En la Figura 9 los números corresponden de la siguiente manera:


    .row.justify-content-center.align-items-end.mb-0
      .col-lg-6
        .bg13.p-5
          ul.lista-ul.mb-0.mt-lg-5
            li.d-flex.mb-
              i.fas.fa-pencil
              p.mb-0 #[b Número 5 cálculo del consumo de energía:] aquí encontrará el número de kWh consumidos durante el periodo de facturación, como resultado de la resta de los Kwh de la lectura actual menos los Kwh de la lectura inmediatamente anterior, adicional la totalidad del valor facturado, multiplicando el número de kWh consumidos por el valor unitario de cada kWh.
            li.d-flex.mb-3
              i.fas.fa-pencil
              p.mb-0 #[b Número 6 cajetilla de cobro:] para cada uno de los cobros aplicados en la factura, es decir, consumo y otros cobros asociados a la energía (color naranja), otros cobros de productos y servicios (color morado) y aseo (color azul), se presenta una cajetilla del mismo color en la que se detalla la información correspondiente a los valores facturados.
            li.d-flex.mb-3
              i.fas.fa-pencil
              p.mb-0 #[b Número 7 cajetilla de cajetilla valor de reconexión:] aquí encontrará el valor del cobro por reconexión en caso de que se haya suspendido su servicio.
            li.d-flex.mb-4
              i.fas.fa-pencil
              p.mb-0 #[b Número 8 cajetilla de aseo:] toda la información del servicio de aseo, incluido el valor a pagar.
      .col-lg-6
        .bg4.p-4.mb-2
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-12
              .titulo-sexto
                h5 Figura 9. 
                | #[em Ejemplo factura ENEL parte posterior 2]
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-9
              img.mb-2.img-t(src='@/assets/curso/tema1/28.png' alt='Resumen de los valores detallados en la factura de energía y aseo, mostrando los cobros desglosados por conceptos, subtotales, totales por servicio y datos de facturación del usuario.')
        figcaption Fuente: Enel Colombia. (2025). Entendimiento de la factura de energía. 
      

    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Aplicación práctica del análisis de consumo


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src='@/assets/curso/tema1/29.png', alt='')     
      .col-lg-8
        p.mb-4 La aplicación práctica del análisis de consumo constituye un paso esencial en la gestión energética, ya que permite comprender cómo se utilizan los recursos dentro de un proceso o instalación. Este ejercicio proporciona información clave sobre patrones de demanda, variaciones de uso y comportamientos que influyen directamente en la eficiencia operativa. Al interpretar estos datos, es posible identificar oportunidades de mejora, reducir costos y orientar decisiones fundamentadas en criterios técnicos y de sostenibilidad.
        .row.justify-content-center.align-items-center.mb-0
          .col-lg
            img(src='@/assets/curso/tema1/30.svg', alt='')     
          .col-lg-11
            p.mb-0 El enfoque de sostenibilidad exige que el análisis de consumo sea sistemático y estructurado, de modo que los datos recolectados permitan realizar diagnósticos precisos y comparables. Para ello, se utilizan herramientas como la factura de energía, los registros de carga, los indicadores de desempeño y los métodos de evaluación del ciclo de vida. Este análisis integral facilita la identificación de ineficiencias, la priorización de intervenciones y la formulación de estrategias que promuevan un uso racional, responsable y eficiente de la energía.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .bg6.p-4.mb-4
          .bg8.p-2.mb-4.mx-lg-4
            h4.mb-0.text-white.ps-3.pe-3 Pasos para la aplicación de la práctica
          ul.lista-ul.mb-0.mx-lg-4
            li.d-flex.mb-3
              i.fas.fa-angle-right.t1
              p.mb-0 #[b Identificar componentes clave:] separar los costos fijos de los costos variables en la factura para determinar el costo marginal real de cada kWh consumido.
            li.d-flex.mb-3
              i.fas.fa-angle-right.t1
              p.mb-0 #[b Clasificar y priorizar:] utilizar datos de medición (submedición) para clasificar qué áreas (ejemplo: producción, oficinas) tienen el mayor consumo activo y reactivo, priorizando las áreas con mayor potencial de ahorro para la intervención.
            li.d-flex.mb-0
              i.fas.fa-angle-right.t1
              p.mb-0 #[b Estructurar la base de datos:] crear un registro histórico del consumo (ejemplo: mensual o diario) y los costos unitarios para analizar tendencias y detectar anomalías que justifiquen una auditoría energética.
        p.mb-0 No todos los consumos son iguales ni tienen el mismo potencial de ahorro.
      .col-lg-3
        img(src='@/assets/curso/tema1/31.png', alt='')     


    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-right")
      .col-lg-10
        PasosA.color-primario.pas.mb-0(tipo="n")
          .row.justify-content-center.align-items
            .col-lg-7
              h4 Saberes de proceso aplicado
              p.mb-4 Clasificar los tipos de consumo para priorizar áreas.
              h5.mb-4 a)	Procedimiento:
              p.mb-3 #[b Submedición:] instalar o utilizar medidores secundarios (submedidores) para determinar qué áreas (ejemplo: producción, oficinas, climatización) contribuyen más al consumo total.
              .separadort1.mb-3 
              p.mb-3 #[b Principio 80 / 20:] aplicar el principio de pareto, identificando el 20 % de los equipos o áreas que consumen el 80 % de la energía. Estas áreas se convierten en la prioridad de intervención para las auditorías y proyectos de eficiencia.
              .separadort1.mb-3  
              p.mb-3 #[b Identificación de patrones:] determinar si el consumo se relaciona con el horario (diurno / nocturno) o con procesos específicos (pico de producción) para establecer estrategias de gestión de la demanda.
              .separadort1.mb-3  
              p.mb-0 El análisis de tendencias históricas es vital para establecer la línea base contra la cual se medirán los ahorros futuros.
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema1/32.png', alt='Texto que describa la imagen')
          .row.justify-content-center.align-items
            .col-lg-5.cel
              figure
                img(src='@/assets/curso/tema1/33.png', alt='Texto que describa la imagen')
            .col-lg-7.text-start
              h4 Saberes de proceso aplicado
              p.mb-4 Estructurar bases de datos de consumo histórico.
              h5.mb-4 a) Procedimiento:
              p.mb-3 #[b Recolección sistemática:] Recopilar datos de consumo (kWh) y costos de al menos 12 a 24 meses.
              .separadort1.mb-3 
              p.mb-3 #[b Normalización de datos:] ajustar los datos de consumo a factores externos que no se pueden controlar, como los Grados Día de Calentamiento y Enfriamiento (GDCE) para aislar el efecto de la temperatura en la climatización.
              .separadort1.mb-3  
              p.mb-3 #[b Detección de anomalías:] Utilizar gráficos (como el de barras) para visualizar patrones y detectar picos inusuales o consumos constantes en periodos de baja actividad (ejemplo: fines de semana), lo cual indica oportunidades de mejora.


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Sostenibilidad: definición y características


    .bl1
      .bloque-texto-a.color-secundario.p-4.p-md-4.p-lg-5.mb-5(data-aos="fade-right") 
        .row.m-0.align-items-center.justify-content-center  
          .col-lg-8.mb-0.comi
            .bloque-texto-a__texto.p-lg-5.p-md-4.p-4.mb-lg-0.mb-4.my-3.my-lg-0
              p.mb-4 La definición de sostenibilidad requiere una visión integral que incorpore el Ciclo de Vida (ACV), es decir, el análisis de los impactos desde la extracción de materias primas (donde se generan impactos ambientales iniciales) hasta la disposición final (donde se aplica la economía circular). Esta perspectiva es clave para que las soluciones de eficiencia energética no generen nuevos problemas en otras etapas del ciclo.
              p.mb-0 La gestión energética sostenible no es simplemente ahorrar costos (pilar económico), sino asegurar que ese ahorro no comprometa el medio ambiente ni la equidad social.
          .col-lg-4.col-md-6.mb-0
            img.enci.img-a(src='@/assets/curso/tema1/34.svg', alt='')


    .cont_5_1.mt-4(data-aos="fade-left").mb-5
      .row.justify-content-center
        .col-lg-6.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema1/40.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema1/up.png' alt="")
                .col-lg-10
                  h5.mb-3.txp a) Sostenibilidad y eficiencia
              p.mb-0.txp La eficiencia energética es la herramienta táctica (cómo optimizar el uso), mientras que la sostenibilidad es el objetivo estratégico (por qué optimizar el uso). Una empresa es verdaderamente sostenible si su eficiencia se mantiene en el tiempo y reduce su impacto en los pilares ambiental y social.
        .col-lg-6.mb-4.mb-lg-0.col-md-10(data-aos="zoom-in")
          .crd_hover_txt
            .crd_hover_txt--img
              figure
                img(src='@/assets/curso/tema1/41.png' alt="")
            .crd_hover_txt--body.colt
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-2
                  img.img-t.img-a.mtop.rot(src='@/assets/curso/tema1/up.png' alt="")
                .col-lg-10
                  h5.mb-3.txp b) Decisiones balanceadas
              p.mb-4.txp Una decisión es sostenible si:
              p.mb-0.txp #[b Es viable] (intersección económico / ambiental): genera rentabilidad a largo plazo.
              p.mb-0.txp #[b Es equitativa] (intersección social / económico): proporciona beneficios justos a los grupos de interés (ejemplo: comunidades locales, empleados).
              p.mb-0.txp #[b Es soportable] (intersección ambiental / social): no degrada los recursos naturales de los que depende la sociedad.





    .bg17.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-1
              img(src='@/assets/curso/tema1/35.svg', alt='')
            .col-lg-11
              p.mb-0 El enfoque de Análisis de Ciclo de Vida #[b (ACV)] es la metodología central que permite llevar la sostenibilidad a la práctica, superando la visión limitada de la factura eléctrica.
          p.mb-0 ACV como herramienta de evaluación: el ACV obliga al gestor energético a mirar los impactos generados antes y después de la fase de uso. Si se elige una tecnología de alta eficiencia, pero su fabricación o disposición final genera una alta contaminación, la solución no es verdaderamente sostenible.


    p.mb-5 Etapas del vínculo:


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        img(src='@/assets/curso/tema1/36.png', alt='Texto que describa la imagen')
      .col-lg-9
        .row.justify-content-center.align-items-stretch.mb-0
          .col-lg-4
            .h-100.bg18.p-4
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-4.my-3
                  img.img-t.img-a(src='@/assets/curso/tema1/37.svg' alt='AvatarTop')
              .bg10.p-1.mb-4
                h4.text-center.text-white.mb-0.ps-2.pe-2 1. Extracción / fabricación
              p.mb-0.text-center ¿Cuál es la huella de carbono y el consumo de agua asociados a la fabricación de la tecnología de eficiencia? (ejemplo: paneles solares, baterías).
          .col-lg-4
            .h-100.bg18.p-4
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-4.my-3
                  img.img-t.img-a(src='@/assets/curso/tema1/38.svg' alt='AvatarTop')
              .bg10.p-1.mb-4
                h4.text-center.text-white.mb-0.ps-2.pe-2 2. Uso
              p.mb-0.text-center La fase de consumo donde se aplica la eficiencia, impactando directamente la factura y el CO2 de la generación.
          .col-lg-4
            .h-100.bg18.p-4
              .row.justify-content-center.align-items-center.mb-0
                .col-12.mb-4.my-3
                  img.img-t.img-a(src='@/assets/curso/tema1/39.svg' alt='AvatarTop')
              .bg10.p-1.mb-4
                h4.text-center.text-white.mb-0.ps-2.pe-2 Fin de ciclo (disposición final)
              p.mb-0.text-center ¿Cómo se gestionarán los residuos de esa tecnología? Aquí es donde el principio de economía circular es imperativo, buscando la reutilización o el reciclaje de materiales (ejemplo: metales pesados en baterías).
        
    p.mb-0 Al adoptar esta visión, el aprendiz se prepara para la siguiente sección del documento, donde se evaluarán los impactos en cada una de estas etapas del ciclo, transformando el análisis de consumo en una evaluación de la huella ambiental del proceso.


    












</template>

<script>
export default {
  name: 'Tema1',
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
