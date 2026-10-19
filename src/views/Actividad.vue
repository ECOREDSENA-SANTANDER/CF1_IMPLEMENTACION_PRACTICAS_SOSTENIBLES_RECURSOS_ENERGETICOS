<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: ActividadController(:cuestionario="cuestionario") 
      // Para parrafo usar: ActividadController(:parrafo="parrafo")
      ActividadController(:cuestionario="cuestionario")
  </template>

<script>
import ActividadController from '@ecored-sena/base-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Usos y consumo energético según contexto.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión de los conceptos fundamentales del componente formativo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡FELICIDADES!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de la sostenibilidad?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Incrementar la producción sin considerar los recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Satisfacer las necesidades actuales sin comprometer la capacidad de las futuras generaciones para satisfacer las suyas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Priorizar exclusivamente el crecimiento económico de las organizaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar todas las actividades industriales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la sostenibilidad, sus dimensiones ambiental, social y económica, y su importancia para el uso responsable de los recursos.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la clasificación de tipos de datos en Microsoft Access.',
        },
        {
          id: 2,
          texto: '¿Qué aspectos integra el concepto de sostenibilidad?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Exclusivamente los aspectos ambientales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el crecimiento económico y la rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solamente la conservación de los recursos naturales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las dimensiones ambiental, social y económica.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de las dimensiones ambiental, social y económica que integran el concepto de sostenibilidad.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con las dimensiones de la sostenibilidad y su importancia para alcanzar un equilibrio entre el desarrollo económico, el bienestar social y la protección ambiental.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes acciones contribuye directamente a reducir la huella de carbono de una organización?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el consumo de combustibles fósiles.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener encendidos los equipos que no se utilizan.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar el uso de materiales desechables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mejorar la eficiencia energética y reducir las emisiones asociadas a las actividades.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las estrategias orientadas a reducir la huella de carbono mediante la eficiencia energética y la disminución de las emisiones asociadas a las actividades organizacionales.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la huella de carbono, sus principales fuentes de emisión y las acciones que contribuyen a reducir los impactos ambientales.',
        },
        {
          id: 4,
          texto: '¿Qué se entiende por eficiencia energética?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar menos energía para realizar una misma actividad o producir un resultado equivalente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Incrementar el consumo energético para mejorar la productividad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir todos los equipos eléctricos sin evaluar su desempeño.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir la producción para disminuir el consumo de energía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión del concepto de eficiencia energética y de su propósito de optimizar el uso de la energía sin afectar el resultado de las actividades realizadas.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la eficiencia energética y las medidas que permiten reducir el consumo de energía mediante el uso adecuado de los recursos y equipos.',
        },
        {
          id: 5,
          texto:
            '¿Qué diferencia existe entre la energía activa y la energía reactiva?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambas representan exactamente el mismo tipo de energía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La energía activa se mide en kVArh y la reactiva en kWh.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La energía activa realiza trabajo útil, mientras que la reactiva está asociada al funcionamiento de determinados equipos eléctricos y al establecimiento de campos magnéticos o eléctricos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La energía reactiva es la única que permite el funcionamiento de los equipos eléctricos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de las diferencias entre la energía activa y la energía reactiva, así como de sus funciones en el funcionamiento de los sistemas eléctricos.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con las características de la energía activa y la energía reactiva, sus unidades de medida y su comportamiento en las instalaciones eléctricas.',
        },
        {
          id: 6,
          texto:
            '¿Qué unidad se utiliza habitualmente para medir el consumo de energía eléctrica activa?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Kilovatio (kW).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Kilovatio-hora (kWh).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Kilovoltamperio reactivo-hora (kVArh).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Voltio (V).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de las unidades de medida utilizadas en el consumo de energía eléctrica, especialmente del kilovatio-hora (kWh).',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con las unidades de medida de la energía eléctrica y las diferencias entre potencia, energía activa y energía reactiva.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la finalidad principal de interpretar una factura de energía eléctrica?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar únicamente el nombre del comercializador.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Determinar exclusivamente la cantidad de equipos instalados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer el número de empleados que utilizan energía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comprender el consumo, los costos facturados y los posibles aspectos que requieren revisión para mejorar la eficiencia energética.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de la interpretación de la factura de energía eléctrica como herramienta para identificar el consumo, comprender los costos del servicio y reconocer oportunidades de mejora en la eficiencia energética.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la lectura e interpretación de la factura de energía eléctrica y la identificación de información útil para el análisis del consumo y los costos.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de los siguientes elementos puede formar parte de los costos de una factura de energía eléctrica en Colombia?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los costos asociados a componentes del servicio, como generación, transmisión, distribución y comercialización, según corresponda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Exclusivamente el valor de los equipos eléctricos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Únicamente el consumo de energía reactiva en todos los casos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solo los impuestos municipales, sin considerar el servicio prestado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de los componentes que pueden integrar el costo del servicio de energía eléctrica en Colombia, de acuerdo con las condiciones de facturación aplicables.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la estructura de costos del servicio de energía eléctrica y los conceptos que pueden reflejarse en la factura.',
        },
        {
          id: 9,
          texto: '¿Qué es el factor de potencia en un sistema eléctrico?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad total de equipos conectados a una instalación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La relación entre el consumo mensual y el número de trabajadores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una medida de la relación entre la potencia activa y la potencia aparente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'El valor económico total de la factura eléctrica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio del concepto de factor de potencia y de su relación con la potencia activa y la potencia aparente en los sistemas eléctricos.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con el factor de potencia, las magnitudes eléctricas que intervienen en su cálculo y su importancia para el desempeño de las instalaciones eléctricas.',
        },
        {
          id: 10,
          texto:
            '¿Por qué es importante revisar el factor de potencia en una instalación eléctrica?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque permite eliminar todos los costos del servicio eléctrico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Porque un factor de potencia bajo puede generar ineficiencias y, cuando corresponde según la regulación y las condiciones del servicio, cargos adicionales. (Respuesta correcta)',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Porque determina directamente la cantidad de energía renovable disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque reemplaza la necesidad de medir el consumo de energía activa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de la importancia de controlar el factor de potencia para mejorar el desempeño de las instalaciones eléctricas y prevenir ineficiencias o cargos adicionales cuando corresponda.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con las consecuencias de un factor de potencia bajo y las medidas que pueden contribuir a mejorar el aprovechamiento de la energía eléctrica.',
        },
        {
          id: 11,
          texto: '¿Qué es el Análisis de Ciclo de Vida (ACV)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un procedimiento que evalúa únicamente los costos de compra de un equipo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Una herramienta que considera solamente los residuos generados al final de la vida útil.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un método que mide exclusivamente el consumo eléctrico durante la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una metodología para evaluar los impactos ambientales asociados a las etapas del ciclo de vida de un producto, proceso o servicio',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio del Análisis de Ciclo de Vida (ACV) como metodología para evaluar los impactos ambientales asociados a las diferentes etapas de un producto, proceso o servicio.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con el Análisis de Ciclo de Vida (ACV), su propósito y su aplicación en la identificación de impactos ambientales.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de las siguientes etapas puede generar impactos ambientales durante el ciclo de vida de un equipo energético?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La extracción de materias primas, la fabricación, el transporte, el uso y la disposición final.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente la disposición final del equipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Exclusivamente la etapa de compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solamente la etapa de mantenimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de las etapas del ciclo de vida de un equipo energético y de los impactos ambientales que pueden generarse desde la extracción de materias primas hasta su disposición final.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con las etapas del ciclo de vida de los equipos energéticos y la identificación de sus posibles impactos ambientales.',
        },
        {
          id: 13,
          texto: '¿Qué principio caracteriza a la economía circular?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar la extracción de materias primas para incrementar la producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Promover el uso de productos desechables y de corta duración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir los residuos mediante la reutilización, la reparación, el mantenimiento y el aprovechamiento de materiales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Limitar la gestión ambiental al tratamiento de residuos al final del proceso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio del principio de economía circular y de las prácticas que permiten reducir los residuos mediante la reutilización, la reparación y el aprovechamiento de los materiales.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la economía circular y las estrategias orientadas a optimizar el uso de los recursos y reducir la generación de residuos.',
        },
        {
          id: 14,
          texto:
            '¿Cómo puede aplicarse la circularidad en la gestión de equipos energéticos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazando todos los equipos cada año, independientemente de su estado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Prolongando su vida útil mediante mantenimiento, reparación y actualización, y gestionando adecuadamente sus componentes al finalizar su uso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Desechando los equipos sin evaluar sus posibilidades de aprovechamiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Incrementando la compra de equipos sin considerar su desempeño ambiental.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de la aplicación de la economía circular en la gestión de equipos energéticos mediante el mantenimiento, la reparación, la prolongación de su vida útil y el aprovechamiento de sus componentes.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la gestión circular de los equipos energéticos y las acciones que contribuyen a prolongar su vida útil y reducir los impactos asociados a su disposición final.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es uno de los principales retos de la matriz energética colombiana frente a la variabilidad climática?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ausencia total de fuentes de generación eléctrica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La imposibilidad de utilizar fuentes renovables en el país.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de toda infraestructura de transmisión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La necesidad de gestionar la vulnerabilidad de la generación hidroeléctrica y fortalecer la diversificación de las fuentes de energía.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los retos de la matriz energética colombiana frente a la variabilidad climática y de la importancia de fortalecer la diversificación de las fuentes de generación.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la matriz energética colombiana, la vulnerabilidad de la generación hidroeléctrica frente a las condiciones climáticas y la necesidad de diversificar las fuentes de energía.',
        },
        {
          id: 16,
          texto:
            '¿Qué significa diversificar las fuentes de generación energética?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Depender exclusivamente de una fuente de energía.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir todas las fuentes existentes por una única tecnología.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incorporar y combinar distintas fuentes de generación para reducir la dependencia de una sola y mejorar la seguridad del suministro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Incrementar el consumo sin modificar la estructura de generación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de la diversificación energética como estrategia para reducir la dependencia de una sola fuente de generación y fortalecer la seguridad del suministro.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la diversificación de las fuentes de generación y su contribución a la seguridad y continuidad del suministro energético.',
        },
        {
          id: 17,
          texto: '¿Qué se entiende por resiliencia energética?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de un sistema energético para resistir, adaptarse y recuperarse ante fallas, interrupciones o condiciones adversas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La capacidad de aumentar permanentemente los costos de la energía.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de las actividades de mantenimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La dependencia total de una sola fuente de generación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio del concepto de resiliencia energética y de la capacidad de los sistemas para resistir, adaptarse y recuperarse ante interrupciones o condiciones adversas.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la resiliencia energética, sus características y su importancia para afrontar fallas, interrupciones y situaciones que puedan afectar el suministro de energía.',
        },
        {
          id: 18,
          texto:
            '¿Cuál de las siguientes medidas puede fortalecer la resiliencia energética de una organización?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Depender de un único equipo sin mantenimiento preventivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Diversificar las fuentes de suministro cuando sea viable, mantener los equipos y establecer planes de contingencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Ignorar las alertas sobre posibles interrupciones del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar los procedimientos de respuesta ante emergencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada comprensión de las medidas que fortalecen la resiliencia energética, como el mantenimiento de los equipos, la diversificación del suministro y la planificación ante posibles interrupciones.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con las estrategias para fortalecer la resiliencia energética mediante el mantenimiento preventivo, la gestión de riesgos y la elaboración de planes de contingencia.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es el propósito general de la Ley 2099 de 2021 en Colombia?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Prohibir todas las iniciativas relacionadas con energías renovables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar los programas de eficiencia energética.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Impedir la participación de nuevas tecnologías en el sector energético.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Impulsar la transición energética, promover el uso de fuentes no convencionales de energía y fortalecer disposiciones relacionadas con el sector energético.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado conocimiento del propósito general de la Ley 2099 de 2021 y de su relación con la transición energética, las fuentes no convencionales de energía y el fortalecimiento del sector energético en Colombia.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la Ley 2099 de 2021, sus principales disposiciones y su contribución al desarrollo de la transición energética en Colombia.',
        },
        {
          id: 20,
          texto:
            'Una organización desea reducir sus costos energéticos y sus impactos ambientales. ¿Cuál sería la estrategia más integral?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Reemplazar todos los equipos inmediatamente, sin evaluar costos ni necesidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Concentrarse únicamente en disminuir el valor de la factura, sin revisar los hábitos de consumo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Analizar la factura, identificar oportunidades de ahorro, mejorar la eficiencia de los equipos, evaluar alternativas energéticas y gestionar adecuadamente los residuos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Reducir las actividades de mantenimiento para disminuir los gastos operativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada capacidad para integrar el análisis del consumo y los costos energéticos con las medidas de eficiencia energética y la gestión ambiental orientada a reducir los impactos de las actividades organizacionales.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo relacionados con la planificación de estrategias integrales de sostenibilidad y eficiencia energética, considerando el análisis de la factura, la optimización del consumo, el desempeño de los equipos y la gestión responsable de los residuos.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra un adecuado dominio de los conceptos relacionados con la sostenibilidad, la eficiencia energética y la gestión responsable de los recursos ambientales.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la sostenibilidad, la eficiencia energética y la gestión ambiental, e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
