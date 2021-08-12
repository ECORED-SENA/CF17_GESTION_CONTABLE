<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #t2.titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Estado de costos

    p.mb-5 El estado de costos de producción y ventas identifica el costo de las unidades fabricadas. Controlar los elementos del costo (materia prima, mano de obra directa y los costos indirectos de fabricación), conocer la producción, identificar los costos de las unidades vendidas es la base para identificar la diferencia entre los costos estimados y los costos reales.    

    .row.justify-content-center.mb-5
      .col-7
        img(src="@/assets/curso/t6-01.svg", alt="Texto que describa la imagen")


    h3.mb-5 Las partes que componen el estado de costos 
    .row.justify-content-center
      .col-md-6.col-lg.mb-5.mb-lg-0

        .tarjeta-avatar
          img(src='@/assets/curso/t6-icon-01.svg' alt='AvatarTop')
          .tarjeta.color-primario--claro
            .p-4
              h4.text-center Encabezado del estado de costos 
              ul.lista-ul--color.ps-3
                li 
                  i.fas.fa-chevron-right
                  | Nombre de la empresa 
                li 
                  i.fas.fa-chevron-right
                  | Nombre del estado costos 
                li 
                  i.fas.fa-chevron-right
                  | Periodo de tiempo de la presentación de las cifras 
                li 
                  i.fas.fa-chevron-right
                  | Tipo de moneda en que se presenta el estado de costos

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/t6-icon-02.svg' alt='AvatarTop')
          .tarjeta.color-primario--claro
            .p-4
              h4.text-center Cuerpo del estado de costos 
              ul.lista-ul--color.ps-3
                li 
                  i.fas.fa-chevron-right
                  | Costo de materias primas directas 
                li 
                  i.fas.fa-chevron-right
                  | Costo de la producción terminada 
                li 
                  i.fas.fa-chevron-right
                  | Costo de venta 
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/t6-icon-03.svg' alt='AvatarTop')
          .tarjeta.color-primario--claro
            .p-4
              h4.text-center Firmas Identificación de: 
              ul.lista-ul--color.ps-3
                li 
                  i.fas.fa-chevron-right
                  | Quien lo elaboró
                li 
                  i.fas.fa-chevron-right
                  | Quien lo revisó 
                li 
                  i.fas.fa-chevron-right
                  | Quien lo aprobó

    Separador

    #t2-1.titulo-segundo(data-aos="flip-up")
      h2 2.1 Estructura del estado de costos

    .row.justify-content-center
      .col-md.mb-4.mb-md-0
        p.mb-0 En el estado de costos, se parte del inventario inicial de materia prima directa y se suma la compra de materia prima del periodo, para obtener la materia prima disponible del periodo; a este resultado se le resta el inventario final de materia prima directa y se obtiene el consumo de la materia prima directa en el periodo.
          br
          br
          | Al resultado anterior se le suma la mano de obra directa, de lo cual se obtiene el costo primo; a este resultado se le suman costos indirectos de fabricación de insumos, mano de obra y costos indirectos de fabricación varios, para llegar al resultado de costo de producción.
          br
          br
          | Al anterior resultado se le suma el inventario inicial de productos en proceso y se le resta el inventario final de productos en proceso y se obtiene como resultado el costo del producto terminado, al cual se le suma el inventario inicial de producto terminado y se obtiene el costo del producto terminado disponible, al cual se le resta el inventario final de producto terminado para llegar al resultado de costo de ventas del periodo.

      .col-6.col-md-4
        img(src="@/assets/curso/t6-02.svg", alt="Texto que describa la imagen")

    Separador

    #t2-2.titulo-segundo(data-aos="flip-up")
      h2 2.2 Análisis del punto de equilibrio

    p.mb-5 Cuando en la industria se ha logrado establecer el presupuesto de cada uno de los elementos del costo para obtener el costo unitario de producción y, a su vez, se tiene el presupuesto de gastos de administración y ventas para proyectar el precio de venta unitario, también se puede establecer el punto de equilibrio en cantidades, como pesos, con el uso de las siguientes fórmulas:
      br
      br
      b El punto de equilibrio en cantidades 
      | le permite al industrial conocer las unidades que tiene que producir periódicamente para cubrir sus costos y gastos fijos sin obtener ningún beneficio con este volumen de producción.

    h3.mb-5 Fórmulas de punto de equilibrio en cantidades (Q)


    .text-center.mb-5
      .cajon.color-primario.d-inline-block.p-4
        .d-flex.align-items-center.justify-content-center
          .flex-shrink-1.me-3
            .d-flex.align-items-center
              h4.mb-0.text-end.me-3 Punto de equilibrio en cantidades
              h4.mb-0 =
          .divicion
            .divicion__top.px-3.py-1 
              h4.mb-0 Costos fijos mensuales
            .divicion__bottom.px-3.py-1
              h4.mb-0 Precio de venta unitario - Costo variable unitario


    .text-center.mb-5
      .cajon.color-primario.d-inline-block.p-4
        .text-start
          h5 Ejemplo:
        .d-flex.align-items-center.justify-content-center
          .divicion.me-3
            .divicion__top.px-3.py-1
              h4.mb-0 $23.082.497,00
            .divicion__bottom.px-3.py-1
              h4.mb-0 3.000,00 - 1.449,38
          h4.mb-0.me-3 = 
          h4.mb-0.text-start 14.886 Unidades a vender

    p.mb-5 De acuerdo con el ejemplo, se puede deducir que la empresa debe vender más de las 14.886 unidades para obtener utilidad; si lo hace por debajo de esas unidades, presentará perdida.

    h3.mb-5 Fórmula de punto de equilibrio en pesos

    p.mb-5 El punto de equilibrio en pesos le indica al industrial Juan cuál debe ser el monto de las ventas en pesos para cubrir los costos y gastos fijos de la empresa sin obtener ningún beneficio en este punto.
      br
      br
      | Ejemplo:

    .text-center.mb-5
      .cajon.color-primario.d-inline-block.p-4
        .d-flex.align-items-center.justify-content-center.mb-4
          .flex-shrink-1.me-2
            .d-flex.align-items-center
              h4.mb-0.text-end.me-2 Punto de<br/>equilibrio<br/>en pesos
              h4.mb-0 = 
          .divicion.flex-shrink-1
            .divicion__top.px-3.py-1 
              h4.mb-0 Costo fijo mensual 
            .divicion__bottom.px-1.py-1
              .d-flex.align-items-stretch.justify-content-center.mb-4
                .flex-shrink-1.me-3
                  .d-flex.align-items-center.h-100
                    h4.mb-0 1-
                .parentesis-s
                .divicion
                  .divicion__top.px-3.py-1 
                    h4.mb-0 Costo variable unitario
                  .divicion__bottom.px-3.py-1
                    h4.mb-0 Precio de venta unitario
                .parentesis-e

        .d-flex.align-items-center.justify-content-center
          .flex-shrink-1.me-2
            .d-flex.align-items-center
              h4.mb-0.text-end.me-2 Punto de<br/>equilibrio<br/>en pesos
              h4.mb-0 =
          .divicion.flex-shrink-1.me-2
            .divicion__top.px-1.py-1 
              h4.mb-0 23.082.497
            .divicion__bottom.px-1.py-1
              .d-flex.align-items-stretch.justify-content-center
                .flex-shrink-1.me-1
                  .d-flex.align-items-center.h-100
                    h4.mb-0 1-
                .parentesis-s
                .divicion
                  .divicion__top.py-1 
                    h4.mb-0 1.449,38
                  .divicion__bottom.py-1
                    h4.mb-0 3.000
                .parentesis-e
          h4.mb-0.me-2 =
          h4.mb-0 44.657.793

    p.mb-5 Es el punto donde los ingresos cubren la totalidad de los costos y gastos de la empresa para el periodo establecido, por tanto, ni se gana ni se pierde. Pero le permite a la administración tomar decisiones en el ambiente del recurso humano, tecnológico y financiero. 
      br
      br
      | En la siguiente figura se comprende mejor lo que significa y representa el punto de equilibrio.


    .row.justify-content-center
      .col-md-8
        figure
          img.mb-4(src='@/assets/curso/t6-tabla-01.svg' alt='AvatarTop')
          figcaption Nota. Tomada de Valladares (2018).
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

<style lang="sass" scoped></style>
