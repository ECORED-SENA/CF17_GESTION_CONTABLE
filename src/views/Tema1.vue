<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    #t1.titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Costos

    p.mb-5 Es momento de identificar los diferentes tipos y sistemas de costos que permitan identificar los procesos de producción dentro de las diferentes entidades que ejercen actividades en la transformación de productos para la venta. Es importante tener en cuenta que los costos están estructurados por la suma de pagos o erogaciones que la empresa realiza durante los procesos, esfuerzos y materia prima que interviene en la elaboración de un producto, para lograr obtener un producto terminado. 

    .row.justify-content-center.mb-5
      .col-md-9
        img(src="@/assets/curso/t1-01.svg", alt="Texto que describa la imagen")

    Separador

    #t1-1.titulo-segundo
      h2 1.1 Tipos de costos

    p.mb-5 Es necesario identificar los tipos de costos, los cuales se clasifican de acuerdo con su comportamiento, factores de producción y productos, y su comportamiento, como se observa a continuación: 

    .tarjeta.color-primario--claro.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-md-9
          img(src="@/assets/curso/t1-tabla-01.svg", alt="Texto que describa la imagen")

      .row.mb-4.justify-content-center
        .col-4.col-sm-2.col-md-1.mb-4.mb-sm-0
          img(src="@/assets/curso/t1-icon-01.svg", alt="Texto que describa la imagen")
        .col-sm
          p.mb-4 Los tipos de costos de acuerdo con su comportamiento hacen referencia a los costos fijos, costos variables y costos semivariables.

          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right
              p.mb-0 
                b Costos fijos: 
                | son todos aquellos costos que intervienen en la elaboración o creación de un producto, que permanecen constantes durante un tiempo determinado y que, a su vez, no tienen incidencia con la cantidad de producción, lo que significa que estos costos se mantendrán con producción o sin ella. Algunos ejemplos son: arrendamientos, servicio de Internet, salarios, seguros, permisos, licencias, servicios públicos, entre otros, de acuerdo con el tipo de empresa.
            li 
              i.fas.fa-chevron-right
              p.mb-0 
                b Costos variables: 
                | son todos los costos que hacen parte del producto y dependen directamente de la cantidad producida, lo cual hace que incremente o disminuya el valor del costo.  Algunos ejemplos de costos variables: materia prima, insumos, horas extras, reparación y mantenimiento de maquinaria, distribución, comisiones, etc.
            li 
              i.fas.fa-chevron-right
              p.mb-0 
                b Costos semivariables: 
                | son los costos que pueden variar según el producto y cambios que se pueden generar en el mismo, por ejemplo, en la producción de camisas, el canon de arrendamiento se considera un costo fijo puesto que el pago será el mismo y no se tiene en cuenta la cantidad producida, la tela para la camisa es un costo variable pues depende de la cantidad de tela para las camisas producidas, el costo semivariable sería el costo de energía dependiendo de la máquina de costura. 

      .row.mb-4.justify-content-center
        .col-4.col-sm-2.col-md-1.mb-4.mb-sm-0
          img(src="@/assets/curso/t1-icon-02.svg", alt="Texto que describa la imagen")
        .col-sm
          p.mb-4 Los tipos de costos según factores de producción y productos hacen referencia a los costos directos y los costos indirectos de fabricación.

          ul.lista-ul--color
            li 
              i.fas.fa-chevron-right
              p.mb-0 
                b Costos indirectos:  
                | son los costos que se asignan a la producción total, lo cual significa que no hay control ni seguimiento para cada producto, por ejemplo: arrendamiento, mano de obra indirecta, tributos, intereses financieros, etc. 
            li 
              i.fas.fa-chevron-right
              p.mb-0 
                b Costos directos: 
                | son los costos identificados, distribuidos y controlados para cada unidad producida, como la materia prima e insumos que hacen parte del producto.  

      .row.justify-content-center
        .col-4.col-sm-2.col-md-1.mb-4.mb-sm-0
          img(src="@/assets/curso/t1-icon-03.svg", alt="Texto que describa la imagen")
        .col-sm
          p.mb-4 Los tipos de costos según su naturaleza, como los costos de mano de obra, materia prima, costos financieros, costos de distribución y costos tributarios:

          ul.lista-ul--color.mb-0
            li 
              i.fas.fa-chevron-right
              p.mb-0 
                b Costos por mano de obra: 
                | corresponden a los pagos de nómina o mano de obra que interviene con la transformación del producto.
            li 
              i.fas.fa-chevron-right
              p.mb-0 
                b Materia prima: 
                | son los costos de los materiales que hacen parte del producto a elaborar.
            li 
              i.fas.fa-chevron-right
              p.mb-0 
                b Costos financieros: 
                | son los costos que conlleva el pago del financiamiento de la entidad para el funcionamiento óptimo.
            li 
              i.fas.fa-chevron-right
              p.mb-0 
                b Costos de distribución: 
                | corresponden a los pagos por parte del productor para hacer llegar los productos a su lugar de destino. Estos costos son de acuerdo con la negociación. 
            li 
              i.fas.fa-chevron-right
              p.mb-0 
                b Costos tributarios: 
                | pagos que se realizan a las entidades fiscalizadoras que recaudan los impuestos, como son la Secretaría de Hacienda y la DIAN, según las obligaciones tributarias adquiridas como empresa.

    Separador

    #t1-2.titulo-segundo
      h2 1.2 Sistemas de costeo

    p.mb-5 Después de identificar los diferentes tipos de costos, ahora es momento de continuar con los sistemas de costos. Es valioso tener clara la definición y los objetivos de los sistemas de costos que se relacionan a continuación. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    h3.mb-4 Costos por órdenes de producción.

    p.mb-5 El sistema de costos por órdenes de producción es el utilizado para la recolección de costos de acuerdo con las órdenes o lotes, como materia prima (MP), mano de obra directa (MOD), costos indirectos de fabricación (CIF), reparaciones y mantenimientos, los cuales se acumulan en una orden.
      br
      br
      | Algunos de los tipos de empresas que utilizan el sistema de costos por órdenes son las entidades que se dedican a actividades de construcción, ingenierías, aeronáuticas, entre otras.  Por lo tanto, se requiere una planificación anticipada del proceso a seguir en la producción, bajo el control de cada orden u hoja de trabajo que se reunirá para la producción según solicitud de la empresa (cliente). Este sistema requiere análisis y control de la producción.
      br
      br
      | Los elementos del costo que intervienen en costos por órdenes de producción son: 

    .row.justify-content-around.align-items-center.mb-5
      .col-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/t1-02.svg", alt="Texto que describa la imagen")
      .col-md-4
        ol.lista-ol--cuadro.mb-0
          li.mb-4
            .lista-ol--cuadro__vineta
              span 1
            .h4.mb-0 Materia prima. 
          li.mb-4
            .lista-ol--cuadro__vineta
              span 2
            .h4.mb-0 Mano de obra directa. 
          li.mb-4
            .lista-ol--cuadro__vineta
              span 3
            .h4.mb-0 Mano de obra indirecta. 
          li.mb-4
            .lista-ol--cuadro__vineta
              span 4
            .h4.mb-0 Costos indirectos de fabricación.
          li.mb-4
            .lista-ol--cuadro__vineta
              span 5
            .h4.mb-0 Horas máquina. 

    p.mb-5 Los cuales permiten identificar y cuantificar cada uno de los elementos de acuerdo con la producción.

    .row.justify-content-center
      .col-md-9
        .cajon.color-primario.p-4.mb-5
          h4 Ejemplo:
          p.mb-0 El 15 de enero de 20XX, la empresa EL SOL, realizó un pedido a la compañía LUNA, que consistía en la fabricación de una sala de juntas la cual consta de 1 mesa y 4 sillas hechas a medida. La entrega será a más tardar el 30 de enero de 20XX”.

    p.mb-5 En primer lugar, el departamento de compras realiza:

    PasosA.color-acento-contenido.mb-5(tipo="l")
      div
        p.mb-0 
          b Compra de materiales. 
          | Recibe $110.000 en materiales, consistentes en: 20 láminas de madera ($100.000), 100 galones de pintura ($5.000), 15 cajas de pegamento ($3.000), 5 cajas de clavos ($2.000)
      div
        p.mb-0 
          b Consumo de materiales. 
          | Un día posterior al que el departamento de compras recibió el material, el departamento de producción solicitó los siguientes materiales: 5 láminas de madera ($25.000), 10 galones de pintura ($5.000), pegamento ($2.000), clavos ($4.000).
          br
          br
          | Total de costos indirectos: $11.000. Son costos indirectos porque no utilizarán toda la pintura, ni todo el pegamento, ni todos los clavos.Recibe $110.000 en materiales, consistentes en: 20 láminas de madera ($100.000), 100 galones de pintura ($5.000), 15 cajas de pegamento ($3.000), 5 cajas de clavos ($2.000)

      div
        p.mb-0 
          b Costo de la mano de obra. 
          | El departamento de producción incurrió en los siguientes costos de nómina: mano de obra directa ($35.000), mano de obra indirecta ($10.000). Total $45.000. 
          br
          br
          | A estos costos hay que agregarles los costos indirectos de fabricación y se obtiene el total del valor de los costos de las órdenes de producción. 

    p.mb-5 A continuación, se detalla el ciclo contable de los costos por órdenes de producción:

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      div(titulo="Compra de materia prima directa. Reconocimiento:")
        figure
          img(src='@/assets/curso/t1-tabla-02.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
      div(titulo="Traslado materia prima directa a la planta de producción. Reconocimiento:")
        figure
          img(src='@/assets/curso/t1-tabla-03.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
      div(titulo="Contratación de mano de obra directa. Reconocimiento:")
        figure
          img(src='@/assets/curso/t1-tabla-04.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
      div(titulo="Compra de los insumos de producción. Reconocimiento:")
        figure
          img(src='@/assets/curso/t1-tabla-05.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
      div(titulo="Contratación de mano de obra indirecta. Reconocimiento:")
        figure
          img(src='@/assets/curso/t1-tabla-06.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
      div(titulo="Compra y reconocimiento de otros CIF, como arriendos, servicios públicos, mantenimiento, seguros, impuestos, depreciación, entre otros. Reconocimiento: ")
        figure
          img(src='@/assets/curso/t1-tabla-07.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
      div(titulo="Servicios contratados o maquila en la cuenta control de producción. Reconocimiento:")
        figure
          img(src='@/assets/curso/t1-tabla-08.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
      div(titulo="Cierre o capitalización de la cuenta control de costos de producción. Reconocimiento:")
        figure
          img(src='@/assets/curso/t1-tabla-09.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
      div(titulo="Traslado de las unidades terminadas al inventario de producto terminado. Reconocimiento:")
        figure
          img(src='@/assets/curso/t1-tabla-10.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
      div(titulo="Venta del producto terminado. Reconocimiento:")
        figure
          img(src='@/assets/curso/t1-tabla-11.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen
      div(titulo="Reconocimiento del costo de ventas")
        figure
          img(src='@/assets/curso/t1-tabla-12.svg', alt='Texto que describa la imagen')
          //- figcaption Leyenda de la imagen



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

<style lang="sass" scoped></style>
