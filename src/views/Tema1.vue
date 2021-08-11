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

    .tarjeta.color-primario--claro.p-5
      .row.justify-content-center.mb-5
        .col-md-9
          img(src="@/assets/curso/t1-tabla-01.svg", alt="Texto que describa la imagen")

      p.mb-5 A continuación, se puede ver qué significa cada uno de ellos: 

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
        iframe(width="560" height="315" src="https://www.youtube.com/embed/E7yMcPXQ7Ps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    h3.mb-4 Costos por órdenes de producción

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
      .col-md-6.col-lg-4
        ol.lista-ol--cuadro.mb-0
          li.mb-4
            .lista-ol--cuadro__vineta
              span 1
            .h4.mb-0 Materia prima
          li.mb-4
            .lista-ol--cuadro__vineta
              span 2
            .h4.mb-0 Mano de obra directa
          li.mb-4
            .lista-ol--cuadro__vineta
              span 3
            .h4.mb-0 Mano de obra indirecta
          li.mb-4
            .lista-ol--cuadro__vineta
              span 4
            .h4.mb-0 Costos indirectos de fabricación
          li.mb-0
            .lista-ol--cuadro__vineta
              span 5
            .h4.mb-0 Horas máquina

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
          | Total de costos indirectos: $11.000. Son costos indirectos porque no utilizarán toda la pintura, ni todo el pegamento, ni todos los clavos.

      div
        p.mb-0 
          b Costo de la mano de obra. 
          | El departamento de producción incurrió en los siguientes costos de nómina: mano de obra directa ($35.000), mano de obra indirecta ($10.000). Total $45.000. 
          br
          br
          | A estos costos hay que agregarles los costos indirectos de fabricación y se obtiene el total del valor de los costos de las órdenes de producción. 

    p.mb-5 Con estos conceptos y el ejemplo utilizado, se espera que se comprenda el concepto de sistema de costos por órdenes. 
      br
      br
      | A continuación, se detalla el 
      b ciclo contable de los costos por órdenes de producción:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      div(titulo="Compra de materia prima directa. Reconocimiento:")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 1405XX
                td(colspan="2") Inventarios de materia prima
                td.text-end xxx
                td.text-end $$
                td 
              tr
                td 2205XX
                td(colspan="2") Proveedores
                td 
                td 
                td $$
              tr
                td 24XXXX
                td(colspan="2") Impuestos
                td 
                td 
                td $$
              tr
                td 23XXXX
                td(colspan="2") Retenciones
                td 
                td 
                td $$

      div(titulo="Traslado de materia prima directa a la planta de producción. Reconocimiento:")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 7105XX
                td(colspan="2") Materia prima directa
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 1405XX
                td(colspan="2") Inventarios de materia prima
                td 
                td 
                td $$

      div(titulo="Contratación de mano de obra directa. Reconocimiento:")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 7205XX
                td(colspan="2") Mano de obra directa
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 25XXXX
                td(colspan="2") Obligaciones laborales
                td 
                td 
                td $$

      div(titulo="Compra de los insumos de producción. Reconocimiento:")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 7301XX
                td(colspan="2") CIF Insumos
                td.text-end xxx
                td.text-end $$
                td 
              tr
                td 2205XX
                td(colspan="2") Proveedores
                td 
                td 
                td $$
              tr
                td 24XXXX
                td(colspan="2") Impuestos
                td 
                td 
                td $$
              tr
                td 23XXXX
                td(colspan="2") Retenciones
                td 
                td 
                td $$

      div(titulo="Contratación de mano de obra indirecta. Reconocimiento:")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 7305XX
                td(colspan="2") Mano de obra indirecta
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 25XXXX
                td(colspan="2") Obligaciones laborales
                td 
                td 
                td $$

      div(titulo="Compra y reconocimiento de otros CIF, como arriendos, servicios públicos, mantenimiento, seguros, impuestos, depreciación, entre otros. Reconocimiento: ")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 7320XX
                td(colspan="2") Arriendos
                td.text-end xxx
                td.text-end $$
                td 
              tr
                td 7335XX
                td(colspan="2") Servicios
                td.text-end xxx
                td.text-end $$
                td 
              tr
                td 7345XX
                td(colspan="2") Mantenimiento
                td.text-end xxx
                td.text-end $$
                td 
              tr
                td 24XXXX
                td(colspan="2") Impuestos
                td 
                td 
                td.text-end $$
              tr
                td 23XXXX
                td(colspan="2") Retenciones
                td 
                td 
                td.text-end $$
              tr
                td 23XXXX
                td(colspan="2") Cuentas por Pagar
                td 
                td 
                td.text-end $$
              tr
                td 7360XX
                td(colspan="2") Depreciaciones
                td.text-end xxx
                td.text-end $$
                td 
              tr
                td 1592XX
                td(colspan="2") Depreciación acumulada
                td 
                td 
                td.text-end $$

      div(titulo="Servicios contratados o maquila en la cuenta control de producción. Reconocimiento:")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 74XXXX
                td(colspan="2") Servicios contratados - maquila
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 24XXXX
                td(colspan="2") Impuestos
                td 
                td 
                td $$
              tr
                td 23XXXX
                td(colspan="2") Retenciones
                td 
                td 
                td $$
              tr
                td 23XXXX
                td(colspan="2") Cuentas por pagar
                td 
                td 
                td $$

      div(titulo="Cierre o capitalización de la cuenta control de costos de producción. Reconocimiento:")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 141005
                td(colspan="2") Inventario PP materia prima directa
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 5196XX
                td(colspan="2") Gasto MPD dañada
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 7198XX
                td(colspan="2") Materia prima directa
                td.text-end XX
                td 
                td.text-end $$
              tr
                td 141010
                td(colspan="2") Inventario PP mano obra directa
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 5196XX
                td(colspan="2") Gasto tiempo ocioso
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 7298XX
                td(colspan="2") Mano obra directa
                td.text-end XX
                td 
                td.text-end $$
              tr
                td 141015
                td(colspan="2") Inventario PP CIF
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 7398XX
                td(colspan="2") Costos indirectos de fabricación -CIF
                td.text-end XX
                td 
                td.text-end $$
              tr
                td 141020
                td(colspan="2") Inventario PP servicio contratado - maquila
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 7498XX
                td(colspan="2") Servicios contratados - maquila
                td.text-end XX
                td 
                td.text-end $$

      div(titulo="Traslado de las unidades terminadas al inventario de producto terminado. Reconocimiento:")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 1430XX
                td(colspan="2") Inventario producto terminado
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 141005
                td(colspan="2") Inventario PP materia prima directa
                td.text-end XX
                td 
                td $$
              tr
                td 141010
                td(colspan="2") Inventario PP mano obra directa
                td.text-end XX
                td 
                td $$
              tr
                td 141015
                td(colspan="2") Inventario PP CIF
                td.text-end XX
                td 
                td $$
              tr
                td 141020
                td(colspan="2") Inventario PP servicio contratado - maquila
                td.text-end XX
                td 
                td $$

      div(titulo="Venta del producto terminado. Reconocimiento:")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 4120XX
                td(colspan="2") Venta MFE
                td.text-end XX
                td 
                td $$
              tr
                td 24XXXX
                td(colspan="2") Impuestos
                td.text-end XX
                td 
                td $$
              tr
                td 1355XX
                td(colspan="2") Retenciones
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 1305XX
                td(colspan="2") Deudores clientes
                td 
                td.text-end $$
                td 
              tr
                td 1355XX
                td(colspan="2") Retenciones ARER
                td 
                td.text-end $$
                td 
              tr
                td 2365XX
                td(colspan="2") CXP retenciones
                td 
                td 
                td $$

      div(titulo="Reconocimiento del costo de ventas")
        .tabla
          table
            thead
              tr
                th CÓDIGO
                th(colspan="2") CUENTA
                th OP
                th DÉBITO
                th CRÉDITO
            tbody
              tr
                td 6120XX
                td(colspan="2") Costo de ventas MFE
                td.text-end XX
                td.text-end $$
                td 
              tr
                td 1430
                td(colspan="2") Inventario producto terminado
                td.text-end XX
                td 
                td $$

    p.mb-4 Con el fin de dar cumplimiento al proceso de sistema de costos por órdenes de producción, se debe recurrir a los soportes que permiten identificar cada uno de los procesos; ellos son:

    .tarjeta.color-primario--claro.p-4.mb-5
      TabsC.color-acento-contenido
        .py-3.py-md-4(titulo="Orden de producción")
          p.mb-4 Es un formato que contiene identificación de la empresa fabricante y del cliente; describe el producto a fabricar con sus características específicas, fecha de inicio de la producción, fecha de entrega del producto, y espacios específicos para identificar cada uno de los elementos del costo que se cargarán a dicha orden de producción; soportado por requisición de materia prima directa e insumos,  controles de tiempo de mano de obra directa y otros costos indirectos de fabricación cargados a dicha orden, generando un total por elemento del costo y un gran total del costo de dicha orden de producción, con el cual podemos establecer el costo unitario dependiendo de las unidades fabricadas. 
            br
            br
            | Ejemplo de formato de orden de producción. 

          .tabla
            table
              thead
                tr
                  th(colspan="4") ALMACENES ÉXITO
                  th(colspan="3") HOJA DE COSTOS
              tbody
                tr
                  td PRODUCTO 
                  td EMPANADA
                  td 
                  td 
                  td(colspan="2") ORDEN DE PRODUCCIÓN No.
                  td 1001
                tr
                  td CANTIDAD
                  td 
                  td 
                  td 
                  td(colspan="2") UNIDADES TERMINADAS
                  td 
              
              thead
                tr
                  th(colspan="2") COSTO MATERIA PRIMA
                  th(colspan="2") COSTO MOD
                  th(colspan="3") COSTOS INDIRECTOS
              tbody
                tr
                  td 
                  td 
                  td 
                  td 
                  td 
                  td 
                  td 
                tr
                  td 
                  td 
                  td 
                  td 
                  td 
                  td 
                  td 
                tr
                  td 
                  td 
                  td 
                  td 
                  td 
                  td 
                  td 
                tr
                  td TOTAL 
                  td -
                  td TOTAL
                  td -
                  td TOTAL 
                  td 
                  td -
                tr
                  td 
                  td 
                  td 
                  td 
                  td TOTAL GENERAL
                  td 
                  td -


        .py-3.py-md-4(titulo="Requisición")
          p.mb-4 Formato requerido para el traslado de materia prima directa e insumos de la planta del almacén a la planta de producción. Dicho formato contiene: nombre de la empresa fabricante, orden de producción a la cual se va a cargar la materia prima directa e insumos, espacios específicos para identificar las materias e insumos en cuanto a referencia, cantidades, unidades y valores por los que se deben cargar a la orden de producción.
            br
            br
            | Ejemplo de formato de requisición.

          .tabla
            table
              thead
                tr
                  th(colspan="5")
                  th REQUISICIÓN No. 
                  th 2233
              tbody
                tr
                  td EMPRESA
                  td 
                  td  
                  td  
                  td(colspan="2") ORDEN DE PRODUCCIÓN No. 
                  td 50
                tr
                  td FECHA
                  td 
                  td  
                  td DEPARTAMENTO
                  td  
                  td  
                  td  
                tr
                  td  
                  td 
                  td  
                  td  
                  td  
                  td  
                  td  
              thead
                tr
                  th ORDEN PRODUCCIÓN
                  th CÓDIGO MATERIA PRIMA
                  th DESCRIPCIÓN
                  th UNIDAD MEDIDA
                  th CANTIDAD
                  th VALOR UNITARIO 
                  th VALOR TOTAL
              tbody
                tr
                  td  
                  td  
                  td 
                  td  
                  td  
                  td  
                  td  
                tr
                  td  
                  td  
                  td 
                  td  
                  td  
                  td  
                  td  
                tr
                  td  
                  td  
                  td 
                  td  
                  td  
                  td  
                  td  
                tr
                  td  
                  td  
                  td 
                  td  
                  td  
                  td TOTAL 
                  td  
                tr
                  td SOLICITÓ
                  td  
                  td ENTREÓ
                  td KARDEX
                  td  
                  td RECIBIDO 
                  td  


        .py-3.py-md-4(titulo="Kardex")
          p.mb-5 Formato utilizado para el control de la materia prima directa adquirida para los diferentes bienes a producir, en el cual se identifica el producto con su referencia, cantidades mínimas, cantidades máximas, localización, proveedores de dicha materia prima, y espacios específicos para fecha, descripción, cantidades y valores de entrada, cantidades y valores de salida, y saldos en cantidades y valores que soportan los valores de las cuentas de inventario que arroje la contabilidad.
            br
            br
            | Ejemplo de formato Kardex.
          
          .tabla
            table
              thead
                tr
                  th KARDEX
                  th  
                  th  
                  th  
                  th  
                  th  
                  th  
                  th  
              tbody
                tr
                  td REFERENCIA
                  td 6677
                  td EMPANADA
                  td 
                  td CANTIDAD MÍNIMA
                  td 4.000
                  td CANTIDAD MÁXIMA
                  td 30.000
                tr
                  td PROVEEDORES
                  td PRODUCCIÓN INTERNA
                  td 
                  td 
                  td 
                  td 
                  td 
                  td 
                tr
                  td  
                  td  
                  td  
                  td  
                  td  
                  td  
                  td  
                  td  
                tr
                  td  
                  td  
                  td  
                  td  
                  td  
                  td  
                  td  
                  td  
                tr
                  td  
                  td  
                  td ENTRADA
                  td SALIDA
                  td SALIDA
                  td  
                  td  
                  td  
              thead
                tr
                  th FECHA
                  th DESCRIPCIÓN
                  th CANTIDAD
                  th VALOR TOTAL
                  th CANTIDAD
                  th VALOR TOTAL
                  th VALOR UNITARIO
                  th VALOR TOTAL
              tbody
                tr
                  td  
                  td  
                  td  
                  td  
                  td  
                  td  
                  td  
                  td  
                tr
                  td  
                  td TOTAL 
                  td  
                  td  
                  td  
                  td  
                  td  
                  td  

        .py-3.py-md-4(titulo="Ficha técnica")
          p.mb-4 Indica el producto a elaborar, debe tener una foto, bosquejo o plano del producto con sus características específicas, indicando además las materias primas requeridas en cantidades y unidades para la elaboración de un producto y los procesos que se deben seguir para la elaboración del producto terminado; también informa sobre los equipos o maquinaria requeridos para la elaboración de dicho producto.

          .tabla.w-small
            table
              thead
                tr
                  th.dark(colspan="2") MODELO FICHA TÉCNICA
                  th(colspan="2") PASO A PASO
              tbody
                tr
                  th(colspan="2") PRODUCTO: EMPANADAS
                  td(colspan="2").text-start Funda la mantequilla en un sartén
                tr
                  td(rowspan="4" colspan="2")
                    .row.justify-content-center
                      .col-6
                        img(src="@/assets/curso/t1-00.svg", alt="Texto que describa la imagen")
                  td(colspan="2").text-start Tamice la harina y coloque en un tazón, junto con la sal y el azúcar
                tr
                  td(colspan="2").text-start Agregue la mantequilla fundida
                tr
                  td(colspan="2").text-start Mezcle por 8 minutos o hasta formar una masa homogénea que no se pegue
                tr
                  td(colspan="2").text-start Deje reposar por 20 minutos
                tr
                  th(colspan="2") INGREDIENTES
                  td(colspan="2").text-start Extienda con un rodillo y corte pequeños círculos con un cortador o el borde de un vaso.
                tr
                  td(colspan="2") 500g de harina de trigo
                  th.dark(colspan="2") Equipo requerido: 
                tr
                  td(colspan="2") ½ cucharada de azúcar
                  th CONCEPTO
                  th CANTIDAD
                tr
                  td(colspan="2") ½ cucharada de sal
                  td Estufa industrial
                  td 1
                tr
                  td(colspan="2") 200 g de mantequilla 
                  td Freidoras
                  td 5
    p.mb-5 Con la información suministrada por la ficha técnica, la empresa elabora los presupuestos básicos de producción y preparación de la planta para el inicio del proceso productivo. El proceso inicia con el presupuesto básico, con la proyección de ventas, tomando como base las estadísticas promedio que ha tenido la empresa o el sector industrial respectivo.

    .row.justify-content-center.mb-5
      .col-6.col-md-4.mb-4.mb-md-0
        img(src="@/assets/curso/t2-01.svg", alt="Texto que describa la imagen")
        
      .col-md
        .tabla.w-auto
          table
            thead
              tr
                th(colspan="2") PRESUPUESTO MENSUAL 
              tr
                th(colspan="2") MFE
            tbody
              tr
                td + Presupuesto de ventas
                td 48.000
              tr
                td + Inventario final 
                td 2.000
              tr
                td - Inventario inicial
                td -
              tr
                td = Presupuesto compra/producción-PR
                td 50.000
        
    p.mb-5 Con base en el presupuesto de ventas y en la información de la ficha técnica, se presupuestan materias primas requeridas, y así se proyecta el precio de compra, por medio de las cotizaciones, eligiendo al proveedor que se ajuste a los requerimientos y calidades de materias primas:

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="4") HOJA DE COSTOS ESTÁNDAR UNITARIO MPD
            th(colspan="2") PRODUCCIÓN REQUERIDA
            td.text-end 50.000
          tr
            th CONCEPTO 
            th CANTIDAD
            th UNIDAD MEDIDA
            th PRECIO UNITARIO 
            th COSTO UNITARIO MPD
            th TOTAL CANTIDAD MPD PRODUCCIÓN 
            th TOTAL PRODUCCIÓN
        tbody
          tr
            td HARINA 
            td.text-end 50
            td GRAMOS 
            td.text-end 4
            td.text-end 200
            td.text-end 2.500.000
            td 10.000.000
          tr
            td ARROZ
            td.text-end 100
            td GRAMOS 
            td.text-end 4,4
            td.text-end 440
            td.text-end 5.000.000
            td 22.000.000
          tr
            td HUEVO 
            td.text-end 0,25
            td UNIDAD
            td.text-end 350
            td.text-end 87,5
            td.text-end 12.500
            td 4.375.000
          tr
            td  
            td  
            td(colspan="2") MATERIA PRIMA PROYECTADO
            td.text-end 727,5
            td  
            td 36.375.000

    .row.justify-content-center.mb-5.align-items-center
      .col-6.col-md-3.mb-4.mb-md-0
        img(src="@/assets/curso/t2-02.svg", alt="Texto que describa la imagen")
        
      .col-md-6
        p.mb-3 La ficha técnica informa los procesos requeridos para la producción, con los tiempos unitarios, por lo cual se procede a proyectar la nómina de la mano de obra directa teniendo en cuenta todos los conceptos del costo de la mano de obra directa a cargo de la empresa (empleador), como son:
        ul.lista-ul--color.ps-3
          li 
            i.fas.fa-chevron-right
            | Salarios
          li 
            i.fas.fa-chevron-right
            | Prestaciones sociales
          li 
            i.fas.fa-chevron-right
            | Aportes a la seguridad social
          li 
            i.fas.fa-chevron-right
            | Parafiscales 

    p.mb-5 De acuerdo con la cantidad de operarios requeridos para el proceso de producción según solicitud del cliente.
      br
      br
      | Para la proyección del costo de la mano de obra directa, se diseña un modelo de proyección que cumpla todos los requerimientos, tanto del costo de producción como la normatividad legal laboral vigente. A continuación, se presenta un simulador de proyección de la mano de obra directa que se ajusta a cada salario de los diferentes procesos de la producción; se requiere que se actualicen las casillas de color azul.

    .tabla.mb-5
      table
        thead
          tr
            th SIMULADOR
            th PROYECCIÓN COSTO
            th(colspan="2") MOD - MOI - (NÓMINA)
        tbody
          tr
            th.dark.text-end DÍAS AÑO
            td.text-end 366
            th.dark.text-end DOMINGOS Y FESTIVOS
            td.text-end 70
          tr
            th.dark.text-end DÍAS LABORABLES
            td.text-end 296
            th.dark.text-end DÍAS PROMEDIO
            td 24,67
          tr
            th.dark.text-end SMLV
            td.text-end $877.803
            th(colspan="2" rowspan="2") PAGADO POR LA EMPRESA AL TRABAJADOR 
          tr
            th.dark.text-end AUXILIO
            td $102.854
          tr
            th CONCEPTO
            th VALOR MES 
            th APORTES 
            th %
          tr
            th.dark.text-end BÁSICO 
            td.text-end $877.803
            th.dark.text-end ARL
            td 0,52 %
          tr
            th.dark.text-end AUXILIO
            td.text-end $102.854
            th.dark.text-end EPS
            td 0,00 %
          tr
            th.dark.text-end APORTES 
            td.text-end $145.031
            th.dark.text-end FP
            td 12 %
          tr
            th.dark.text-end PRESTACIÓN
            td.text-end $214.077
            th.dark.text-end CC
            td 4 %
          tr
            th.dark.text-end TOTAL MES 
            td.text-end $1.339.765
            th.dark.text-end ICBF
            td 0,00 %
          tr
            th.dark.text-end DÍAS TRABAJADOS MES 
            td.text-end 24,67
            th.dark.text-end SENA
            td 0,00 %
          tr
            th.dark.text-end HORAS MES 
            td.text-end 197
            th.dark.text-end TOTAL
            td 16,52 %
          tr
            th.dark.text-end VALOR HORA 
            td.text-end $6.789
            th PRESTACIONES 
            th  %
          tr
            th.dark.text-end MINUTOS MES 
            td.text-end $11.840
            th.dark.text-end CESANTÍAS 
            td 8,33 %
          tr
            th.dark.text-end VALOR MINUTO 
            td.text-end $113,16
            th.dark.text-end INTERÉS CESANTÍAS 
            td 1,00 %
          tr
            th.dark.text-end VALOR SEGUNDO 
            td.text-end $1,89
            th.dark.text-end PRIMA 
            td 8,33 %
          tr
            th.dark.text-end
            td  
            th.dark.text-end VACACIONES 
            td 4,17 %
          tr
            th.dark.text-end
            td  
            th.dark.text-end TOTAL 
            td 21,83 %

    p.mb-5 A continuación, se aplica la proyección de la mano de obra directa requerida para el proceso de producción mensual, estableciendo tiempos por cada proceso, costo de la mano de obra directa y número de operarios requeridos para la producción.

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="4") HOJA DE COSTOS ESTÁNDAR UNITARIO MPD
            th(colspan="2") "EL TIEMPO ES ORO"
            th(colspan="2") MOD ES UN COSTO VARIABLE
          tr
            th CONCEPTO
            th CANTIDAD
            th UNIDAD MEDIDA
            th PRECIO UNITARIO MOD
            th COSTO UNITARIO MOD
            th TOTAL TIEMPO PR
            th CTO MOD PR
            th No. OPERARIOS
        tbody
          tr
            td PREPARADO
            td.text-end 2
            td MINUTO
            td.text-end $127,43
            td.text-end $254,86
            td.text-end $100.000
            td.text-end $12.743.000
            td 8
          tr
            td FRITO
            td.text-end 4
            td MINUTO
            td.text-end $113,16
            td.text-end $452,64
            td.text-end $200.000
            td.text-end $22.632.000
            td 17
          tr
            td  
            td  
            td(colspan="2") MATERIA PRIMA PROYECTADO
            td.text-end $707,5
            td.text-end $300.000
            td.text-end $35.375.000
            td 25

    p.mb-5 Para el presupuesto de los costos indirectos de fabricación, se establecen los costos variables unitarios.

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="5") HOJA DE COSTOS ESTÁNDAR UNITARIO CIF INSUMOS CIF VARIABLES 
          tr
            th CONCEPTO 
            th UNIDAD MEDIDA 
            th PRECIO
            th UNIDAD PROMEDIO PRODUCCIÓN 
            th COSTO VARIABLE UNITARIO
        tbody
          tr
            td AGUA 
            td M3
            td.text-end $30.000
            td.text-end 5.000
            td $6,00
          tr
            td SAL 
            td KILO 
            td.text-end $1.800
            td.text-end 4.000
            td $0,45
          tr
            td CEBOLLA
            td LIBRA 
            td.text-end $900
            td.text-end 800
            td $1,13
          tr
            td CILANTRO 
            td ATAO 
            td.text-end $1.200
            td.text-end 900
            td $1,33
          tr
            td AJÍ
            td LIBRA 
            td.text-end $700
            td.text-end 1.500
            td $0,47
          tr
            td EMPAQUE
            td PAQUETE X 2
            td.text-end $2.000
            td.text-end 400
            td $5,00
          tr
            td.dark.text-end(colspan="4") TOTAL COSTO VARIABLE UNITARIO
            td $14,38

    p.mb-5 Se procede a calcular los Costos Indirectos de Fabricación (CIF) fijos de la mano de obra indirecta, según la nómina de presupuesto, teniendo en cuenta toda la normatividad legal vigente.

    .tabla.w-small.mb-5
      table
        thead
          tr
            th(colspan="2") HOJA DE COSTOS ESTÁNDAR UNITARIO CIF FIJOS MOI
          tr
            th CONCEPTO
            th COSTO MES
        tbody
          tr
            td SUPERVISOR
            td $3.458.800,00
          tr
            td ASEADORA
            td $1.339.765,00
          tr
            td TODERO
            td $1.339.765,00
        thead
          tr
            th.text-end TOTAL
            th.text-end $6.138.330,00
          tr
            th.text-end UNIDAD DE PRODUCCIÓN PROMEDIO MES 
            th.text-end 50.000,00
          tr
            th.text-end CUENTA CIF FIJO UNITARIO MOI
            th.text-end $122,77

    p.mb-5 También debemos presupuestar los otros Costos Indirectos de Fabricación (CIF) fijos de producción, como arriendos, servicios públicos, mantenimiento, depreciación, impuestos, seguros, entre otros, que se puedan presentar, según lo requieran en la planta de producción.

    .tabla.w-small.mb-5
      table
        thead
          tr
            th(colspan="2") HOJA DE COSTOS ESTÁNDAR CIF FIJOS VARIOS PRESUPUESTADOS
          tr
            th CONCEPTO  
            th COSTO MES
        tbody
          tr
            td ARRIENDO 
            td $2.000.000,00
          tr
            td SERVICIOS PÚBLICOS 
            td $1.500.000,00
          tr
            td DEPRECIACIÓN 
            td $54.167,00
          tr
            td MANTENIMIENTO 
            td $500.000,00
          tr
            td VARIOS 
            td  $0
        thead
          tr
            th.text-end TOTAL 
            th.text-end $4.054.167,00
          tr
            th.text-end UNIDADES DE PRODUCCIÓN PROMEDIO MES 
            th.text-end 50.000
          tr
            th.text-end  CTO UNITARIO CIT VARIOS
            th.text-end $81,08

    p.mb-5 Ahora, es momento de establecer el costo unitario presupuestado

    .row.justify-content-center.align-items-center.mb-5
      .col-lg.mb-4.mb-lg-0
        .tabla.w-auto
          table
            thead
              tr
                th(colspan="2") PRESUPUESTO 
              tr
                th(colspan="2") COSTO ESTÁNDAR UNITARIO EMPANADAS 
              tr
                th CONCEPTO 
                th VALOR 
            tbody
              tr
                td MPD
                td $727,5
              tr
                td MOD
                td $707,5
              tr
                td COSTO PRIMO 
                td $1.435,00
              tr
                td CIF VAR MPI-INSUMOS
                td $14,38
              tr
                td CIF MOI
                td $122,77
              tr
                td CIF VARIOS
                td $81,08
              tr
                td CIF TOTALES 
                td $218,22
              tr
                th.text-end COSTO UNITARIO TOTAL
                th.text-end $1.653,22

      .col-6.col-lg-3
        img(src="@/assets/curso/t2-03.svg", alt="Texto que describa la imagen")

    p.mb-5 Para la proyección de CIF, también se puede calcular la tasa predeterminada, la cual se establece de la materia prima directa, la mano de obra directa, el costo primo, o unidades producidas y horas hombre, entre otros.

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="4") TASA CIF PREDETERMINADA 
          tr
            th CONCEPTO 
            th VALOR 
            th VALOR 
            th VALOR
        tbody
          tr
            td MPD
            td.text-end $100.000
            td.text-end $25.000
            td.text-end $728
          tr
            td MOD
            td.text-end $20.000
            td.text-end $130.000
            td $708
          tr
            td COSTO PRIMO
            td.text-end $120.000
            td.text-end $155.000
            td $1.435
          tr
            td UNIDADES PRODUCCIÓN 
            td  
            td  
            td  
          tr
            td HORAS HOMBRE 
            td  
            td  
            td  
          tr
            td HORAS MÁQUINA
            td  
            td  
            td 
        thead
          tr
            th.text-end(colspan="3") TASA PREDETERMINADA DE CIF =====>
            th.text-end 15,21 %

    .tabla.w-small.mb-5
      table
        thead
          tr
            th(colspan="3") PRESUPUESTO 
          tr
            th(colspan="3") COSTO ESTÁNDAR UNITARIO EMPANADAS 
          tr
            th(colspan="2") CONCEPTO
            th VALOR 
        tbody
          tr
            td(colspan="2") MPD
            td $727,5
          tr
            td(colspan="2") MOD
            td $707,5
          tr
            td(colspan="2") COSTO PRIMO
            td $1.435,00
          tr
            td(colspan="2") CIF VAR MPI-INSUMOS
            td $14,38
          tr
            td(colspan="2") CIF MOI
            td $122,77
          tr
            td(colspan="2") CIF VARIOS
            td $81,08
          tr
            td(colspan="2") CIF TOTALES
            td $218,22
        thead
          tr
            th.text-end(colspan="2") COSTO UNITARIO TOTAL
            th.text-start $1.653,22
          tr
            th.text-end(rowspan="3")  TASA CIF =
            th.text-end CIF TOTALES
            th.text-start(rowspan="3") 15,21 %
          tr
            th.text-end COSTO PRIMO

    h3.mb-5 Gasto de administración y ventas

    p.mb-5 Es necesario establecer el presupuesto de gastos fijos mensuales de la administración y ventas de la compañía para lograr establecer el precio de venta y el punto de equilibrio requerido.

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="4") PRESUPUESTO DE COSTOS FIJOS 
          tr
            th CONCEPTO
            th PRODUCCIÓN
            th ADMINISTRACIÓN
            th VENTAS
        tbody
          tr
            td SALARIOS 
            td.text-end $6.138.330
            td.text-end $7.000.000
            td $3.000.000
          tr
            td ARRIENDO
            td.text-end $2.000.000
            td.text-end $600.000
            td  
          tr
            td DEPRECIACIÓN 
            td.text-end $54.167
            td.text-end $40.000
            td $30.000
          tr
            td SERVICIOS 
            td.text-end $1.500.000
            td.text-end $350.000
            td $750.000
          tr
            td MANTENIMIENTO 
            td.text-end $500.000
            td.text-end $600.000
            td $30.000
          tr
            td IMPUESTO 
            td  
            td.text-end $70.000
            td $300.000
          tr
            td SEGUROS 
            td  
            td.text-end $80.000
            td $40.000
          tr
            td TOTAL 
            td.text-end $10.192.497
            td.text-end $8.740.000
            td $4.150.000
          tr
            th.text-end UNIDAD PRODUCCIÓN MES 
            th.text-end 50.000
            th.text-end TOTAL 
            th.text-end $23.082.497

    p.mb-5 Ahora, se realiza el presupuesto del precio de venta unitario (PVU); para hacerlo hay varias fórmulas, para este ejemplo se aplica la fórmula de margen de contribución (MC), según la política de precios al costo de producción unitario, para obtener:

    .row.justify-content-center.mb-5
      .col-md-8
        .tabla.w-small
          table
            thead
              tr
                th(colspan="3") PVU = CTO + MC 
                th VENTA =
                th COSTO +
                th MC 80 %
            tbody
              tr
                td(colspan="3") PRECIO DE VENTA UNITARIO 
                td.text-end 3.000,00
                td.text-end 1.653,22
                td 1.322,58
        

    p.mb-5 El precio de venta de $3.000 se ha aproximado al 100.

    h3.mb-5 Compra y consumo de materia prima directa

    p.mb-5 Una vez la empresa tiene la orden de producción organizada por cliente, cotiza las materias primas requeridas, compra las materias primas al proveedor seleccionado, las reconoce contablemente ajustándose al sistema de costeo por órdenes de producción y a las normas legales vigentes, y hace el respectivo registro en la hoja Kardex, tanto en la compra de la mercancía como en el consumo de la misma en el área producción, con sus respectivos soportes, con lo cual se cargará a cada orden de producción por cada uno de los clientes. 

    .tabla.mb-5
      table
        thead
          tr
            th.light(colspan="3") DISTRIBUIDORA TOTAL LTDA
            th.light(colspan="2") FACTURA DE VENTA No.
            th.light 228754
          tr
            th.light(colspan="2") NIT 860200
            th.light RRI
            th.light(colspan="2") FECHA EMISIÓN
            th.light 1/09/2020
          tr
            th.light
            th.light
            th.light
            th.light
            th.light 2
            th.light VENDE
          tr
            th.dark(colspan="3") EMPANADAZO LTDA
            th.dark
            th.dark 2
            th.dark COMPRA 
          tr
            th.dark(colspan="2") NIT 860100
            th.dark RRI
            th.dark
            th.dark
            th.dark
        thead
          tr
            th REFERENCIA
            th PRODUCTO
            th CANTIDAD
            th UNIDAD
            th VALOR UNITARIO
            th VALOR TOTAL
        tbody
          tr
            td 2341
            td HARINA EL LOBO 
            td.text-end 2.500
            td KILO 
            td.text-end $4.000
            td $10.000.000
          tr
            td 3265
            td ARROZ DIANA
            td.text-end 5.000
            td KILO
            td.text-end $4.400
            td $22.000.000
          tr
            td 5566
            td HUEVOS ORO
            td.text-end 12.500
            td UNIDAD
            td.text-end $350 
            td $4.375.000
          tr
            td
            td
            td
            td
            td
            td
          tr
            td
            td
            td
            td
            td
            td
          tr
            td
            td
            td
            td.dark.text-end SUBTOTAL 1
            td
            td $36.375.000
          tr
            td
            td
            td
            td.dark.text-end DECTO COM
            td.text-end 2 %
            td $727.500
          tr
            td
            td
            td
            td.dark.text-end SUBTOTAL 2
            td
            td $35.647.500
          tr
            td
            td
            td
            td.dark.text-end IVA/*1
            td.text-end 19 %
            td $6.080.000
          tr
            td
            td
            td
            td.dark.text-end RFRTA/*1
            td.text-end 2,50 %
            td $891.190
          tr
            td
            td
            td
            td.dark.text-end RFIVA/*2
            td
            td -
          tr
            td
            td
            td
            td.dark.text-end RFICA/*1
            td.text-end 1,104 %
            td $393.548
          tr
            td
            td
            td
            td.dark.text-end TOTAL
            td
            td $40.442.764

    p.mb-5 Reconocimiento compra materia prima directa

    .tabla.mb-5
      table
        thead
          tr
            th CÓDIGO
            th(colspan="2") CUENTA
            th CC-OP
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td 140505
            td(colspan="2") INVENTARIO DE MATERIA PRIMA
            td 1001
            td.text-end $35.647.500
            td  
          tr
            td 240806
            td(colspan="2") IVA DESCONTABLE 
            td  
            td.text-end $6.080.000
            td  
          tr
            td 236540
            td(colspan="2") RETEFTE RTA COMPRAS 
            td  
            td  
            td $891.188
          tr
            td 236811
            td(colspan="2") RETEFTE ICA COMPRAS 
            td  
            td  
            td $393.548
          tr
            td 220505
            td(colspan="2") PROVEEDORES 
            td  
            td  
            td $40.442.764

    h3.mb-5 Actualización Kardex

    p.mb-5 Consiste en los ingresos de materia prima, traslados entre bodegas, de acuerdo con el proceso de producción, y salidas de inventarios. 

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderE(indicadores="derecha")
        
        .tabla
          table
            thead
              tr
                th.text-start(colspan="9") KARDEX 
            tbody
              tr
                td REFERENCIA 
                td 2341
                td PRODUCTO 
                td(colspan="2") HARINA EL LOBO
                td CANTIDAD MÍNIMA 
                td.text-end 50.000
                td CANTIDAD MÁXIMA 
                td 2.000.000
              tr
                td(colspan="2") PROVEEDORES 
                td(colspan="5") DISTRIBUIDORA TOTAL LTDA
                td UNIDAD
                td GRAMO 
            thead
              tr
                th  
                th  
                th(colspan="2") ENTRADA
                th(colspan="2") SALIDA
                th(colspan="3") SALDO 
              tr
                th FECHA
                th DESCRIPCIÓN
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR UNITARIO PP
                th VALOR TOTAL
            tbody
              tr
                td 1/09/2020
                td FC0154 DISTRIB TOTAL 
                td.text-end 2.500.000
                td.text-end $9.800.000
                td  
                td  
                td.text-end 2.500.000,00
                td.text-end $3,92
                td $9.800.000,00
              tr
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
                td  
              tr
                td  
                td  TOTAL 
                td  
                td  
                td  
                td  
                td  
                td  
                td  

        
        .tabla
          table
            thead
              tr
                th.text-start(colspan="9") KARDEX
            tbody
              tr
                td REFERENCIA 
                td 3265
                td PRODUCTO 
                td(colspan="2") ARROZ DIANA
                td CANTIDAD MÍNIMA 
                td.text-end 1.000.000
                td CANTIDAD MÁXIMA 
                td.text-end 6.000.000
              tr
                td(colspan="2") PROVEEDORES 
                td(colspan="5") DISTRIBUIDORA TOTAL LTDA
                td UNIDAD
                td GRAMO
            thead
              tr
                th  
                th  
                th(colspan="2") ENTRADA
                th(colspan="2") SALIDA
                th(colspan="3") SALDO 
              tr
                th FECHA
                th DESCRIPCIÓN
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR UNITARIO PP
                th VALOR TOTAL
            tbody
              tr
                td 29/05/1906
                td FC0154 DISTRIB TOTAL
                td.text-end 5.000.000
                td.text-end $21.560.000
                td 
                td 
                td.text-end 5.000.000,00
                td.text-end $4,31
                td $21.560.000,00
              tr
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
              tr
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
              tr
                td 
                td TOTAL
                td 
                td 
                td 
                td 
                td 
                td 
                td


        .tabla
          table
            thead
              tr
                th.text-start(colspan="9") KARDEX
            tbody
              tr
                td REFERENCIA 
                td 5566
                td PRODUCTO 
                td(colspan="2") HUEVOS ORO
                td CANTIDAD MÍNIMA 
                td  
                td CANTIDAD MÁXIMA 
                td  
              tr
                td(colspan="2") PROVEEDORES 
                td(colspan="5") DISTRIBUIDORA TOTAL LTDA
                td UNIDAD
                td GRAMO
            thead
              tr
                th  
                th  
                th(colspan="2") ENTRADA
                th(colspan="2") SALIDA
                th(colspan="3") SALDO 
              tr
                th FECHA
                th DESCRIPCIÓN
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR UNITARIO PP
                th VALOR TOTAL
            tbody
              tr
                td 1/09/2020
                td FC0154 DISTRIB TOTAL 
                td.text-end 12.500
                td.text-end $4.287.500
                td  
                td  
                td.text-end 12.500,00
                td.text-end $343.00
                td $4.287.500,00
              tr
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
              tr
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
              tr
                td 
                td TOTAL 
                td 
                td 
                td 
                td 
                td 
                td 
                td

    p.mb-5 Traslado materia prima a producción.

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="3") EMPANADAZO LTDA
            th REQUISICIÓN
            th 1
        tbody
          tr
            td  
            td  
            td  
            td OP
            td 1001
          tr
            td ENTREGA 
            td  
            td  
            td FECHA
            td 1/09/2020
        thead
          tr
            th REFERENCIA 
            th PRODUCTO 
            th CANTIDAD 
            th VALOR UNITARIO 
            th VALOR TOTAL 
        tbody
          tr
            td 2341
            td HARINA EL LOBO
            td.text-end 2.500.000
            td.text-end $3,92
            td $9.800.000
          tr
            td 3265
            td ARROZ DIANA
            td.text-end 5.000.000
            td.text-end $4,31
            td $21.560.000
          tr
            td 5566
            td HUEVOS ORO 
            td.text-end 12.500,00
            td.text-end $343.00
            td $4.287.500
          tr
            td  
            td  
            td  
            td.dark.text-end TOTAL
            td.dark $35.647.500
          tr
            td  
            td  
            td  
            td.dark.text-center(colspan="2") NO OLVIDAR ACTUALIZAR KARDEX




    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderE(indicadores="derecha")


        .tabla.small
          table
            thead
              tr
                th.text-start(colspan="9") KARDEX
            tbody
              tr
                td REFERENCIA
                td 2341
                td PRODUCTO
                td(colspan="2") HARINA EL LOBO
                td CANTIDAD MÍNIMA
                td.text-end 50.000
                td CANTIDAD MÁXIMA
                td.text-end 2.000.000
              tr
                td(colspan="2") PROVEEDORES
                td(colspan="5") DISTRIBUIDORA TOTAL LTDA
                td UNIDAD
                td GRAMO
            thead
              tr
                th 
                th 
                th(colspan="2") ENTRADA
                th(colspan="2") SALIDA
                th(colspan="3") SALDO
              tr
                th FECHA
                th DESCRIPCIÓN
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR UNITARIO PP
                th VALOR TOTAL
            tbody
              tr
                td 1/09/2020
                td FC0154 DISTRIB TOTAL
                td.text-end 2.500.000
                td.text-end $9.800.000
                td 
                td 
                td.text-end 2.500.000,00
                td.text-end $3,92
                td $9.800.000,00
              tr
                td 1/09/2020
                td REM 01 PRODUCCIÓN
                td 
                td 
                td.text-end 2.500.000
                td.text-end $9.800.000
                td -
                td 
                td -
              tr
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
              tr
                td 
                td TOTAL 
                td 
                td 
                td 
                td 
                td 
                td 
                td

        .tabla.small
          table
            thead
              tr
                th.text-start(colspan="9") KARDEX
            tbody
              tr
                td REFERENCIA 
                td 3265
                td PRODUCTO 
                td(colspan="2") ARROZ DIANA
                td CANTIDAD MÍNIMA 
                td.text-end 1.000.000
                td CANTIDAD MÁXIMA 
                td.text-end 6.000.000
              tr
                td(colspan="2") PROVEEDORES 
                td(colspan="5") DISTRIBUIDORA TOTAL LTDA
                td UNIDAD
                td GRAMO
            thead
              tr
                th  
                th  
                th(colspan="2") ENTRADA
                th(colspan="2") SALIDA
                th(colspan="3") SALDO 
              tr
                th FECHA
                th DESCRIPCIÓN
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR UNITARIO PP
                th VALOR TOTAL
            tbody
              tr
                td 29/05/1906
                td FC0154 DISTRIB TOTAL 
                td.text-end 5.000.000
                td.text-end $21.560.000
                td.text-end  
                td.text-end  
                td.text-end 5.000.000,00
                td.text-end $4,31
                td $21.560.000,00
              tr
                td 1/09/2020
                td REM 01 PRODUCCIÓN
                td  
                td  
                td.text-end 5.000.000
                td.text-end $21.560.000
                td -
                td  
                td -
              tr
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
              tr
                td 
                td TOTAL 
                td 
                td 
                td 
                td 
                td 
                td 
                td


        .tabla.small
          table
            thead
              tr
                th.text-start(colspan="9") KARDEX 
            tbody
              tr
                td REFERENCIA 
                td 5566
                td PRODUCTO 
                td(colspan="2") HUEVOS ORO
                td CANTIDAD MÍNIMA 
                td.text-end 1.000.000
                td CANTIDAD MÁXIMA 
                td.text-end 6.000.000
              tr
                td(colspan="2") PROVEEDORES 
                td(colspan="5") DISTRIBUIDORA TOTAL LTDA
                td UNIDAD
                td GRAMO
            thead
              tr
                th  
                th  
                th(colspan="2") ENTRADA
                th(colspan="2") SALIDA
                th(colspan="3") SALDO 
              tr
                th FECHA
                th DESCRIPCIÓN
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR TOTAL
                th CANTIDAD
                th VALOR UNITARIO PP
                th VALOR TOTAL
            tbody
              tr
                td 1/09/2020
                td FC0154 DISTRIB TOTAL 
                td.text-end 12.500
                td.text-end $4.287.500
                td.text-end  
                td.text-end  
                td.text-end 12.500,00
                td.text-end $343
                td $4.287.500,00
              tr
                td 1/09/2020
                td REM 01 PRODUCCIÓN
                td  
                td  
                td.text-end 12.500
                td.text-end $4.287.500
                td -
                td  
                td -
              tr
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
                td 
              tr
                td 
                td TOTAL 
                td 
                td 
                td 
                td 
                td 
                td 
                td

    .row.align-items-center.justify-content-center.mb-5
      .col-md-8.mb-4.mb-md-0
        h3.mb-5 Liquidación y reconocimiento de la mano de obra directa requerida

        p.mb-0 En la ficha técnica se establece el presupuesto de la mano de obra directa de los diferentes procesos para la elaboración del producto y se determina la especialización de cada operario requerido para la fabricación de este, al igual que el número de operarios necesarios para la producción. En el proceso de producción se debe implementar un control de tiempo, que permita establecer el tiempo a liquidar en cada orden de producción una vez culminado el proceso de fabricación. El departamento de personal liquidará la respectiva nómina de mano de obra directa del personal de planta de producción, ajustado a la normatividad laboral vigente, junto con su respectivo reconocimiento en la cuenta control de mano directa de producción. 
          br
          br
          | A continuación, se ilustra la liquidación de la nómina en sus diferentes secciones, para un operario de mano de obra directa y un operario de mano de obra indirecta.
      .col-6.col-md
        img(src="@/assets/curso/t3-01.svg", alt="Texto que describa la imagen")



    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")

      .tabla(titulo="Sección de devengado")
        table
          thead
            tr
              th(colspan="6") EMPANADAZO LTDA
              th DB==>
              th 720506
              th 720515
              th 72518
              th 720527
              th 720599
          tbody
            tr
              td(colspan="6") NÓMINA DE SEPTIEMBRE 2020
              td CR==>
              td 
              td 
              td 
              td 
              td 
          thead
            tr
              th(colspan="5") 1 IDENTIFICACIÓN TRABAJADOR
              th 
              th(colspan="6") 2 DEVENGADO
            tr
              th.text-small NIT
              th.text-small NOMBRE DEL EMPLEADO
              th.text-small CC
              th.text-small NO
              th.text-small SUELDO BÁSICO
              th.text-small DT
              th.text-small SUELDO
              th.text-small HORAS EXTRAS
              th.text-small COMISIONES
              th.text-small AUXILIO DE TRANSPORTE
              th.text-small OTROS BONO OTRO
              th.text-small TOTAL DEVENGADO
          tbody
            tr
              td 234
              td DIAZ JUANA
              td.text-end 11
              td.text-end 1
              td.text-end $1.000.000
              td.text-end 30
              td.text-end $1.000.000
              td.text-end $
              td.text-end $
              td.text-end $102.854
              td.text-end $
              td.text-end $1.102.854
            tr
              td 432
              td RICO ADAN
              td.text-end 20
              td.text-end 1
              td.text-end $2.500.000
              td.text-end 30
              td.text-end $2.500.000
              td.text-end $
              td.text-end 0
              td.text-end $
              td.text-end 0
              td.text-end $2.500.000

      .tabla(titulo="Sección de deducciones y neto a pagar")
        table
          thead
          tbody
            tr
              td  
              td  
              td  
              td  
              td  
              td  
              td  
              td  
              td SUM DB = SUM CR
            tr
              td 237005
              td 237045
              td  
              td 246505
              td 136595
              td 237030
              td 237025
              td  
              td  
          thead
            tr
              th(colspan="9") 3. DEDUCCIONES AL TRABAJADOR
            tr
              th(rowspan="2") APORTES SALUD
              th(rowspan="2") APORTES PENSIÓN
              th(colspan="2") RTE FUENTE
              th(rowspan="2") PREST TRABAJADOR EMPRESA
              th(rowspan="2") PRÉSTAMO LIBRANZAS
              th(rowspan="2") OTROS JUZGADOS
              th(rowspan="2") TOTAL DEDUCCIONES
              th(rowspan="2") NETO PAGADO
            tr
              th BASE
              th RTE FUENTE
          tbody
            tr
              td.text-end $40.000
              td.text-end $40.000
              td.text-end  
              td.text-end $
              td.text-end $20.000
              td.text-end $
              td.text-end $
              td.text-end $100.000
              td.text-end $1.002.854
            tr
              td.text-end $100.000
              td.text-end $100.000
              td.text-end  
              td.text-end $
              td.text-end $50.000
              td.text-end  
              td.text-end  
              td.text-end $250.000
              td.text-end $2.250.000

      .tabla(titulo="Sección de prestaciones sociales")
        table
          thead
          tbody
            tr
              td
              td 720530
              td 720533
              td 720536
              td 720539
            tr
              td 
              td 251005
              td 251505
              td 252005
              td 252505
          thead
            tr
              th  
              th(colspan="4") 5. PRESTACIONES 
            tr
              th  
              th CESANTÍAS
              th INT/CESANTÍAS
              th PRIMA
              th VACACIONES
          tbody
            tr
              td BASE
              td.text-end 8,33 %
              td.text-end 1 %
              td.text-end 8,33 %
              td.text-end 4,17 %
            tr
              td  
              td.text-end $91.868
              td.text-end $11.029
              td.text-end $91.868
              td.text-end $41.700
            tr
              td  
              td.text-end $208.250
              td.text-end $25.000
              td.text-end $208.250
              td $104.250

      .tabla(titulo="Sección de aportes a seguridad social y parafiscales")
        table
          thead
          tbody
            tr
              td
              td 720568
              td 720569
              td 720570
              td 720572
              td 720575
              td 720578
            tr
              td 
              td 237006
              td 237005
              td 237045
              td 237010
              td 237010
              td 237010
          thead
            tr
              th(colspan="7") 4. APORTES PATRONALES 
            tr
              th  % ARL
              th VALOR ARL
              th EPS
              th FP
              th CAJA C
              th I.C.B.F
              th SENA
          tbody
            tr
              td  
              td  
              td.text-end 8,50 %
              td.text-end 12 %
              td.text-end 4 %
              td.text-end 3 %
              td.text-end 2 %
            tr
              td.text-end 0,52 %
              td.text-end $5.220
              td.text-end $
              td.text-end $120.000
              td.text-end $40.000
              td.text-end 0
              td.text-end $
            tr
              td.text-end 0,52 %
              td.text-end $13.050
              td.text-end $
              td.text-end $300.000
              td.text-end $100.000
              td.text-end 0
              td.text-end $


    p.mb-5 En los costos de la mano de obra directa, se requiere establecer el promedio de días laborados teniendo en cuenta que los dominicales y festivos no son laborales, por tanto, a los días del año se le deben restar los dominicales y festivos y a ese resultado lo dividimos entre 12 para obtener los días laborados promedio mes. Luego se toma el total pagado al trabajador, donde incluimos lo devengado más la carga prestacional, los aportes a seguridad social y parafiscales a cargo de la empresa, y el resultado obtenido se divide entre los días promedio trabajados en el mes, y así se obtiene el costo día; el resultado obtenido lo dividimos en 8 horas y obtenemos el valor de la hora hombre, y este resultado lo dividimos entre 60 minutos para obtener el valor minuto de mano de obra directa.

    .tabla.mb-5
      table
        thead
          tr
            th TOTAL 
            th(rowspan="3") TOTAL PAGADO MES 
            th DÍAS LABORADOS 
            th HORAS LABORADAS
            th MINUTOS LABORADOS 
          tr
            th(rowspan="2") PRESTACIONES + APORTES
            th 24
            th 192
            th 11.520
          tr
            th VALOR DÍA
            th VALOR HORA
            th VALOR MINUTO
        tbody
          tr
            td.text-end $401.684
            td.text-end $1.504.538
            td.text-end $62.689
            td.text-end $7.836
            td.text-end $130,6
          tr
            td.text-end $958.800
            td.text-end $3.458.800
            td.text-end $144.117
            td.text-end $18.015
            td.text-end $300,24

    h3.mb-5 Liquidación de la mano de obra directa e indirecta

    .tabla.mb-5
      table
        thead
        tbody
          tr
            td 45
            td ZZ
            td 11
            td 1
            td.text-end $877.657
            td 30
            td.text-end $877.657
          tr
            td 47
            td SS
            td 11
            td 1
            td.text-end $877.657
            td 30
            td.text-end $877.657
          tr
            td 49
            td UU
            td 11
            td 1
            td.text-end $877.657
            td 30
            td.text-end $877.657
          tr
            td 51
            td PP
            td 11
            td 1
            td.text-end $877.657
            td 30
            td.text-end $877.657
          tr
            td 53
            td RR
            td 11
            td 1
            td.text-end $877.657
            td 30
            td.text-end $877.657
          tr
            td 55
            td MM
            td 11
            td 1
            td.text-end $877.657
            td 30
            td.text-end $877.657
          tr
            td 57
            td NN
            td 11
            td 1
            td.text-end $877.657
            td 30
            td.text-end $877.657
          tr
            td 59
            td LL
            td 11
            td 1
            td.text-end $877.657
            td 30
            td.text-end $877.657
          tr
            td 61
            td ÑÑ
            td 11
            td 1
            td.text-end $877.657
            td 30
            td.text-end $877.657
          tr
            td 63
            td HH
            td 11
            td 1
            td.text-end $877.657
            td 30
            td.text-end $877.657

    h3.mb-5 Reconocimiento de la mano de obra directa de 1 operario

    .tabla.mb-5
      table
        thead
        tbody
          tr
            td 15
            td 30/09/2020
            td NM
            td 1
            td 860240
            td ARL POSITIVA
            td RRI
          tr
            td 16
            td 30/09/2020
            td NM
            td 1
            td 860240
            td ARL POSITIVA
            td RRI
          tr
            td 17
            td 30/09/2020
            td NM
            td 1
            td 860230
            td COLPENSIONES
            td RRI
          tr
            td 18
            td 30/09/2020
            td NM
            td 1
            td 860230
            td COLPENSIONES
            td RRI
          tr
            td 19
            td 30/09/2020
            td NM
            td 1
            td 860250
            td CAJA COMPENSACIÓN
            td RRI
          tr
            td 20
            td 30/09/2020
            td NM
            td 1
            td 860250
            td CAJA COMPENSACIÓN
            td RRI
          tr
            td 21
            td 30/09/2020
            td NM
            td 1
            td 12
            td AA
            td RRI
          tr
            td 22
            td 30/09/2020
            td NM
            td 1
            td 12
            td AA
            td RRI
          tr
            td 23
            td 30/09/2020
            td NM
            td 1
            td 860220
            td NUEVA EPS
            td RRI
          tr
            td 24
            td 30/09/2020
            td NM
            td 1
            td 860230
            td COLPENSIONES
            td RRI

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="5") RECONOCIMIENTO DE MANO DE OBRA DIRECTA
          tr
            th CÓDIGO 
            th CUENTA 
            th CC -OP
            th DÉBITO 
            th CRÉDITO 
        tbody
          tr
            td 720506
            td SUELDOS 
            td 1001
            td.text-end $1.000.000
            td  
          tr
            td 720527
            td AUXILIO DE TRANSPORTE
            td 1001
            td.text-end $102.854
            td  
          tr
            td 237005
            td APORTES A EPS
            td 1001
            td  
            td $40.000
          tr
            td 237045
            td FONDOS 
            td 1001
            td  
            td $40.000
          tr
            td 136595
            td OTROS
            td 1001
            td  
            td $20.000
          tr
            td 250505
            td SALARIOS POR PAGAR
            td 1001
            td  
            td $1.002.854
          tr
            td 720530
            td CESANTÍAS 
            td 1001
            td.text-end $91.868
            td  
          tr
            td 251005
            td LEY LABORAL ANTERIOR
            td 1001
            td  
            td $91.868
          tr
            td 720533
            td INTERESES SOBRE CESANTÍAS 
            td 1001
            td.text-end $11.029
            td  
          tr
            td 251505
            td INTERESES SOBRE CESANTÍAS 
            td 1001
            td  
            td $11.029
          tr
            td 720536
            td PRIMA DE SERVICIOS
            td 1001
            td.text-end $91.868
            td  
          tr
            td 252005
            td PRIMA DE SERVICIOS
            td 1001
            td  
            td $91.868
          tr
            td 720539
            td VACACIONES 
            td 1001
            td.text-end $41.700
            td  
          tr
            td 252505
            td VACACIONES CONSOLIDADAS
            td 1001
            td  
            td $41.700
          tr
            td 720568
            td APORTES A ADMINISTRADORAS
            td 1001
            td.text-end $5.220
            td  
          tr
            td 237006
            td APORTES A ADMINISTRADORAS
            td 1001
            td  
            td $5.220
          tr
            td 720570
            td APORTES A FONDOS 
            td 1001
            td.text-end $120.000
            td  
          tr
            td 237045
            td FONDOS 
            td 1001
            td  
            td $120.000
          tr
            td 720572
            td APORTES CAJAS 
            td 1001
            td.text-end $40.000
            td  
          tr
            td 237010
            td APORTES ICBF SENA CAJAS
            td 1001
            td  
            td $40.000
          tr
            td 720506
            td SUELDOS 
            td 1001
            td.text-end $1.000.000
            td  
          tr
            td 720627
            td AUXILIO DE TRANSPORTE
            td 1001
            td.text-end $102.854
            td  
          tr
            td 237005
            td APORTES A EPS
            td 1001
            td  
            td $40.000
          tr
            td 237045
            td FONDOS 
            td 1001
            td  
            td $40.000
          tr
            td 250505
            td SALARIOS POR PAGAR
            td 1001
            td  
            td $1.022.854
          tr
            td 720530
            td CESANTÍAS 
            td 1001
            td.text-end $91.868
            td  
          tr
            td 251005
            td LEY LABORAL ANTERIOR
            td 1001
            td  
            td $91.868
          tr
            td 720533
            td INTERESES SOBRE CESANTÍAS 
            td 1001
            td.text-end $11.029
            td  
          tr
            td 251505
            td INTERESES SOBRE CESANTÍAS
            td 1001
            td  
            td $11.029
          tr
            td 720536
            td PRIMA DE SERVICIOS
            td 1001
            td.text-end $91.868
            td  
          tr
            td 252005
            td PRIMA DE SERVICIOS
            td 1001
            td  
            td $91.868
          tr
            td 720539
            td VACACIONES 
            td 1001
            td.text-end $41.700
            td  
          tr
            td 252505
            td VACACIONES CONSOLIDADAS
            td 1001
            td  
            td $41.700
          tr
            td 720568
            td APORTES A ADMINISTRADORAS 
            td 1001
            td.text-end $5.220
            td  
          tr
            td 2347006
            td APORTES A ADMINISTRADORAS
            td 1001
            td  
            td $5.220
          tr
            td 720570
            td APORTES A FONDOS
            td 1001
            td.text-end $120.000
            td 
          tr
            td 237045
            td FONDOS
            td 1001
            td 
            td $120.000
          tr
            td 720572
            td APORTES CAJAS
            td 1001
            td.text-end $40.000
            td 
          tr
            td 237010
            td APORTES ICBF SENA CAJAS
            td 1001
            td 
            td $40.000

    p.mb-5 Posteriormente, el departamento de contabilidad, con la información del control de tiempo que le suministra el jefe de producción, registrará en cada orden de producción el costo de la mano de obra directa realmente trabajada al momento de capitalizar la cuenta control de producción al inventario de productos en proceso.
      br
      br
      | Compra y/o traslado de los insumos de producción, liquidación de la mano de obra indirecta y cargo de los otros costos indirectos de fabricación, junto con su reconocimiento.
      br
      br
      | Uno de los procesos más dispendiosos en el tratamiento contable son los costos indirectos de fabricación, por su complejidad en la medición y en la distribución a cada orden de producción, por lo que las industrias han optado establecer una tasa predeterminada de costos indirectos de fabricación, la cual se pueden determinar teniendo en cuenta factores como costo materia prima directa,  costo mano de obra directa, costo primo de producción, horas hombre, horas máquina y unidades producidas entre otros inductores.

    h3.mb-5 Compra de insumos

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="3") LA PLACITA 
            th FRA DE VENTA 
            th 2477
          tr
            th(colspan="2") NIT 1000365
            th RNI
            th FECHA EMISIÓN 
            th 1/09/2020
          tr
            th(colspan="5") 
              p.mb-0 PABLO DIAZ
                br
                | EMPANADAZO LTDA 
                br
                | NIT 860100
          tr
            th CONCEPTO
            th CANTIDAD
            th UNIDAD MEDIDA
            th PRECIO UNITARIO
            th VALOR TOTAL
        tbody
          tr
            td SAL 
            td 30
            td KILO 
            td.text-end $1.800,00
            td $54.000
          tr
            td CEBOLLA
            td 300
            td LIBRA 
            td.text-end $900,00
            td $270.000
          tr
            td CILANTRO 
            td 150
            td ATAO
            td.text-end $1.200,00
            td $180.000
          tr
            td AJÍ
            td 70
            td LIBRA 
            td.text-end $900,00
            td $63.000
          tr
            td  
            td  
            td  
            th.dark.text-end SUBTOTAL 
            td $567.000
          tr
            td  
            td  
            td  
            th.dark.text-end IVA
            td $
          tr
            td  
            td  
            td  
            th.dark.text-end TOTAL 
            td $567.000

    h3.mb-5 Reconocimiento compra de insumos

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="5") RECONOCIMIENTO INSUMOS
          tr
            th CÓDIGO
            th CUENTA
            th CC - OP
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td 730101
            td INSUMO MPI
            td 22
            td.text-end $576.000
            td  
          tr
            td 220505
            td PROVEEDORES 
            td 22
            td  
            td $576.000

    h3.mb-5 Reconocimiento mano de obra indirecta

    .tabla.mb-5
      table
        thead
          tr
            th SE
            th FECHA
            th TIPO DE DOC
            th CONSECUTIVO 
            th NIT 
            th NOMBRE DE
            th RÉGIMEN 
        tbody
          tr
            td 1
            td 30/09/2020
            td NM
            td 1
            td 432
            td RICO ADAN 
            td.text-center RRI
          tr
            td 2
            td 30/09/2020
            td NM
            td 1
            td 860220
            td NUEVA EPS 
            td.text-center RRI
          tr
            td 3
            td 30/09/2020
            td NM
            td 1
            td 860220
            td COLPENSION
            td.text-center RRI
          tr
            td 4
            td 30/09/2020
            td NM
            td 1
            td 432
            td RICO ADAN 
            td.text-center RRI
          tr
            td 5
            td 30/09/2020
            td NM
            td 1
            td 432
            td RICO ADAN 
            td.text-center RRI
          tr
            td 6
            td 30/09/2020
            td NM
            td 1
            td 432
            td RICO ADAN 
            td.text-center RRI
          tr
            td 7
            td 30/09/2020
            td NM
            td 1
            td 432
            td RICO ADAN 
            td.text-center RRI
          tr
            td 8
            td 30/09/2020
            td NM
            td 1
            td 432
            td RICO ADAN 
            td.text-center RRI
          tr
            td 9
            td 30/09/2020
            td NM
            td 1
            td 432
            td RICO ADAN 
            td.text-center RRI

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="5") RECONOCIMIENTO DE MANO DE OBRA DIRECTA
          tr
            th CÓDIGO 
            th CUENTA 
            th OP
            th DÉBITO 
            th CRÉDITO 
        tbody
          tr
            td 720506
            td SUELDOS 
            td 1001
            td.text-end $2.500.000
            td  
          tr
            td 237005
            td APORTES A EPS
            td 1001
            td  
            td.text-end $100.000
          tr
            td 237045
            td FONDOS 
            td 1001
            td  
            td.text-end $100.000
          tr
            td 136595
            td OTROS
            td 1001
            td  
            td.text-end $50.000
          tr
            td 250505
            td SALARIOS POR PAGAR
            td 1001
            td  
            td.text-end $2.250.000
          tr
            td 720530
            td CESANTÍAS 
            td 1001
            td.text-end $208.250
            td  
          tr
            td 251005
            td LEY LABORAL ANTERIOR
            td 1001
            td  
            td.text-end $208.250
          tr
            td 720533
            td INTERESES SOBRE CESANTÍAS
            td 1001
            td.text-end $25.000
            td  
          tr
            td 251505
            td INTERESES SOBRE CESANTÍAS 
            td 1001
            td  
            td.text-end $25.000
          tr
            td 720536
            td PRIMA DE SERVICIOS
            td 1001
            td.text-end $208.250
            td  
          tr
            td 252005
            td PRIMA DE SERVICIOS
            td 1001
            td  
            td.text-end $208.250
          tr
            td 720539
            td VACACIONES 
            td 1001
            td.text-end $104.250
            td  
          tr
            td 252505
            td VACACIONES CONSOLIDADAS
            td 1001
            td  
            td.text-end $104.250
          tr
            td 720568
            td APORTES A ARP
            td 1001
            td.text-end $13.050
            td  
          tr
            td 237006
            td APORTES A ARP
            td 1001
            td  
            td.text-end $13.050
          tr
            td 720570
            td APORTES A FONDOS 
            td 1001
            td.text-end $300.000
            td  
          tr
            td 237045
            td FONDOS 
            td 1001
            td  
            td.text-end $300.000
          tr
            td 720572
            td APORTES CAJAS 
            td 1001
            td.text-end $100.000
            td  
          tr
            td 237010
            td APORTES ICBF SENA CAJAS
            td 1001
            td  
            td.text-end $100.000
          tr
            td 720506
            td SUELDOS 
            td 1001
            td.text-end $877.657
            td  
          tr
            td 720627
            td AUXILIO DE TRANSPORTE
            td 1001
            td.text-end $102.854
            td  
          tr
            td 237005
            td APORTES A EPS
            td 1001
            td  
            td.text-end $35.106
          tr
            td 237045
            td FONDOS 
            td 1001
            td  
            td.text-end $35.106
          tr
            td 250505
            td SALARIOS POR PAGAR
            td 1001
            td  
            td.text-end $910.298
          tr
            td 720530
            td CESANTÍAS 
            td 1001
            td.text-end $81.677
            td  
          tr
            td 251005
            td LEY LABORAL ANTERIOR
            td 1001
            td  
            td.text-end $81.677
          tr
            td 720533
            td INTERESES SOBRE CESANTÍAS
            td 1001
            td.text-end $9.805
            td  
          tr
            td 251505
            td INTERESES SOBRE CESANTÍAS 
            td 1001
            td  
            td.text-end $9.805
          tr
            td 720536
            td PRIMA DE SERVICIOS
            td 1001
            td.text-end $81.677
            td  
          tr
            td 252005
            td PRIMA DE SERVICIOS
            td 1001
            td  
            td.text-end $81.677
          tr
            td 720539
            td VACACIONES 
            td 1001
            td.text-end $36.598
            td  
          tr
            td 252505
            td VACACIONES CONSOLIDADAS
            td 1001
            td  
            td.text-end $36.598
          tr
            td 720568
            td APORTES A ADMINISTRADORAS
            td 1001
            td.text-end $4.581
            td  
          tr
            td 234706
            td APORTES A ADMINISTRADORAS
            td 1001
            td  
            td.text-end $4.581
          tr
            td 720570
            td APORTES A FONDOS 
            td 1001
            td.text-end $105.319
            td  
          tr
            td 237045
            td FONDOS 
            td 1001
            td  
            td.text-end $105.319
          tr
            td 720572
            td APORTES CAJAS 
            td 1001
            td.text-end $35.106
            td  
          tr
            td 237010
            td APORTES ICBF SENA CAJAS
            td 1001
            td  
            td.text-end $35.106

    .row.justify-content-center.align-items-center.mb-5
      .col-md.mb-4.mb-md-0
        p.mb-4 Al terminar la producción a final de mes, se realiza el cierre de las cuentas control de costos de producción contra el inventario de productos, lo cual significa que las cuentas deben quedar canceladas al cierre de todos los meses.
          br
          br
          | A continuación, se puede observar el proceso detallado y explicado mediante un ejemplo. Para efectos del cierre de las cuentas de control de producción, se crean en el plan de cuentas las respectivas cuentas de cierre:
        .tabla.w-small
          table
            tbody
              tr
                td 719598
                td(colspan="2") Materia prima directa 
              tr
                td 729598
                td(colspan="2") Mano de obra directa 
              tr
                td 739598
                td(colspan="2") Costos indirectos de fabricación y 
              tr
                td 749598
                td(colspan="2") Servicios contratados a terceros maquila

      .col-6.col-md-3
        img(src='@/assets/curso/t4-01.svg', alt='Texto que describa la imagen')

    p.mb-5 Una vez creadas las cuentas, se procede a establecer los saldos de la materia prima directa, mano de obra directa, costos indirectos de fabricación y servicios contratados a terceros maquila. Los saldos se obtienen mediante auxiliares, o saldos balance de prueba, para hacer la capitalización de las cuentas del control de costos de producción al inventario de productos en proceso por cada uno de los elementos del costo.

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="5") RECONOCIMIENTO CAPITALIZACIÓN COSTOS DE PRODUCCIÓN MPD Y MOD
          tr
            th CÓDIGO
            th CUENTA
            th CC - OP
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td 141005
            td PRODUCTOS EN PROCESO 
            td 1001
            td.text-end $35.647.500
            td 
          tr
            td 719598
            td CAPITALIZACIÓN
            td 1001
            td 
            td.text-end $35.647.500
          tr
            td 141010
            td PRODUCTOS EN PROCESO
            td 1001
            td.text-end $33.400.689
            td 
          tr
            td 729598
            td CAPITALIZACIÓN
            td 1001
            td 
            td.text-end $33.400.689

    .row.justify-content-center.align-items-center.mb-5
      .col-6.col-md-3.mb-4.mb-md-0
        img(src='@/assets/curso/t4-02.svg', alt='Texto que describa la imagen')
        
      .col-md
        p.mb-4 En cuanto a los costos indirectos de fabricación, se pueden presentar novedades, como no contar con todas las facturas de servicios públicos por fechas o facturas de mantenimiento con  atraso en contabilidad, por lo cual se  procede a trasladar las unidades terminadas del inventario de productos en proceso al inventario de productos terminados, utilizando la tasa CIF predeterminada y, cuando se culminen los registros del CIF, se cerrará dicha cuenta control y se realizará el reconocimiento del  ajuste respectivo a los inventarios y del costo de ventas, en caso de ser necesario.
          br
          br
          | Se procede a calcular el CIF predeterminado aplicando la tasa CIF del costo primo.

        .tabla.w-auto
          table
            thead
              tr
                th CONCEPTO
                th VALOR
            tbody
              tr
                td MATERIA PRIMA DIRECTA 
                td $35.647.500
              tr
                td MANO DE OBRA DIRECTA 
                td $33.400.689
              tr
                td COSTO PRIMA
                td $69.048.189
              tr
                td TASA CIF PREDETERMINADA
                td 15,12 %
            thead
              tr
                th.dark.text-end CIF PREDETERMINADO
                th.dark.text-end $10.440.086

    p.mb-5 Ahora, se trasladan las unidades terminadas del inventario de productos en proceso al inventario de productos terminados, utilizando el CIF predeterminado.

    .tabla.mb-5
      table
        thead
          tr
            th CÓDIGO
            th CUENTA
            th CC - OP
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td 141005
            td PRODUCTOS EN PROCESO 
            td 1001
            td  
            td $35.647.500
          tr
            td 141010
            td PRODUCTOS EN PROCESO 
            td 1001
            td.text-end $33.400.689
            td  
          tr
            td 141015
            td PRODUCTOS EN PROCESO 
            td 1001
            td  
            td.text-end $10.440.086
          tr
            td 143014
            td PRODUCTOS EN PROCESO 
            td  
            td.text-end $79.488.275
            td  

    p.mb-5 Registro en el Kardex para el control de existencias de cada producto.

    .tabla.mb-5
      table
        thead
          tr
            th.text-start(colspan="9") KARDEX
          tr
            th REFERENCIA 
            td 6677
            th PRODUCTO 
            td(colspan="2") EMPANADA 
            th CANTIDAD MÍNIMA 
            td 4.000
            th CANTIDAD MÁXIMA 
            td 50.000
          tr
            th PROVEEDORES 
            th PRODUCCIÓN INTERNA
            th  
            th  
            th  
            th  
            th  
            th UNIDAD
            th GRAMO
        tbody
          tr
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
          tr
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
          tr
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
        thead
          tr
            th  
            th  
            th(colspan="2") ENTRADA
            th(colspan="2") SALIDA
            th(colspan="3") SALDO 
          tr
            th FECHA
            th DESCRIPCIÓN
            th CANTIDAD
            th VALOR TOTAL
            th CANTIDAD
            th VALOR TOTAL
            th CANTIDAD
            th VALOR UNITARIO PP
            th VALOR TOTAL
        tbody
          tr
            td 30/09/2020
            td EA01 PRODUCCIÓN
            td.text-end 50.000
            td.text-end $79.488.500
            td  
            td  
            td.text-end 50.000,00
            td.text-end $1.589,77
            td.text-end $79.488.500,00
          tr
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
            td  
          tr
            td  
            td.dark TOTAL
            td  
            td  
            td  
            td  
            td  
            td  
            td  

    p.mb-5 Una vez terminado el producto, se inicia el proceso de ventas. Ejemplo:  se facturan 40.000 unidades a almacenes Éxito S.A.

    .tabla.mb-5
      table
        thead
          tr.dark
            th(colspan="3") EMPANADAZO LTDA
            th(colspan="2") FACTURA DE VENTA No. 
            th 1
          tr.brwn
            th NIT 860100
            th RRI
            th 
            th 
            th FECHA EMISI
            th 44104
          tr.brwn
            th 
            th 
            th 
            th 
            th 2
            th VENDE
          tr.dark
            th ALMACEN ÉXITO S.A.
            th RRI
            th 
            th 
            th 3
            th COMPRA
          tr.dark
            th 860440
            th 
            th 
            th 
            th 
            th 
          tr
            th REFERENCIA
            th PRODUCTO
            th CANTIDAD
            th UNIDAD
            th VALOR UNITARIO
            th VALOR TOTAL
        tbody
          tr
            td 6677
            td EMPANADAS 
            td.text-end 40.000
            td UNIDAD
            td.text-end $3.000
            td $120.000.000
          tr
            td  
            td  
            td.dark.text-end SUBTOTAL 1
            td  
            td  
            td $120.000.000
          tr
            td  
            td  
            td.dark.text-end DECTO COM
            td  
            td  
            td  
          tr
            td  
            td  
            td.dark.text-end SUBTOTAL 2
            td  
            td  
            td $120.000.000
          tr
            td  
            td  
            td.dark.text-end IVA/*1
            td  
            td  
            td -
          tr
            td  
            td  
            td.dark.text-end RFRTA/*1
            td  
            td.text-end 2,50 %
            td $3.000.000
          tr
            td  
            td  
            td.dark.text-end RFIVA/*2
            td  
            td  
            td -
          tr
            td  
            td  
            td.dark.text-end RFICA/*1
            td  
            td.text-end 1,10 %
            td $1.324.800
          tr
            td ARERO,40 %
            td 480000
            td.dark.text-end TOTAL 
            td  
            td  
            td $115.675.200


    p.mb-5 Se realiza el reconocimiento de la venta.

    .tabla.mb-5
      table
        thead
          tr
            th CÓDIGO
            th CUENTA
            th CC - OP
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td 412014
            td ELABORACIÓN OTROS PROD. ALIMENTICIOS 
            td 22
            td  
            td $120.000.000
          tr
            td 135515
            td RETENCIÓN EN LA FUENTE 
            td 22
            td.text-end $3.000.000
            td  
          tr
            td 135518
            td ICA VENTA 9,66*100
            td 22
            td.text-end $1.324.800
            td  
          tr
            td 130505
            td NACIONALES 
            td 22
            td.text-end $115.675.200
            td  
          tr
            td 135519
            td AUTORRETENCIÓN 
            td 22
            td.text-end $480.000
            td  
          tr
            td 236575
            td AUTORRETENCIÓN
            td 22
            td  
            td.text-end $480.000

    p.mb-5 Se reconoce contablemente el costo de la mercancía vendida y la salida de inventarios.

    .tabla.mb-5
      table
        thead
          tr
            th CÓDIGO
            th CUENTA
            th CC - OP
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td 612014
            td ELABORACIÓN OTROS PROD. ALIMENTICIOS
            td 22
            td.text-end $63.967.600
            td 
          tr
            td 143014
            td PRODUCTOS ALIMENTICIOS
            td 22
            td 
            td $63.967.600

    p.mb-5 Reconocimiento de las facturas de servicios públicos pendientes para poder cerrar la cuenta de control de costos indirectos de fabricación.

    .tarjeta.tarjeta--gris.p-4.mb-5
      SlyderE(indicadores="derecha")
        div
          h4.mb-3 Servicio de energía
          .tabla.mb-3
            table
              thead
                tr
                  th(colspan="3") ENEL CODENSA
                  th FRA DE VENTA 
                  th 3322
                tr
                  th EMPANADAZO LTDA
                  th RNI
                  th 
                  th FECHA EMISIÓN 
                  th 30/09/2020
                tr
                  th NIT 860100
                  th 
                  th 
                  th 
                  th 
                tr
                  th(colspan="4") CONCEPTO
                  th VALOR TOTAL
              tbody
                tr
                  td(colspan="4") SERVICIO DE ENERGÍA DEL 01 AL 30 DE SEPTIEMBRE 2020
                  td $400.000
                tr
                  td(colspan="4")
                  td $
                tr
                  td(colspan="4")
                  td $
                tr
                  td(colspan="3")
                  th.dark.text-end SUBTOTAL 
                  td $400.000
                tr
                  td(colspan="3")
                  th.dark.text-end IVA
                  td $
                tr
                  td(colspan="3")
                  th.dark.text-end TOTAL 
                  td $400.000

          .tabla
            table
              thead
                tr
                  th(colspan="5") RECONOCIMIENTO SERVICIOS PÚBLICOS DE PRODUCCIÓN 
                tr
                  th CÓDIGO 
                  th CUENTA 
                  th CC-OP
                  th DÉBITO 
                  th CRÉDITO 
              tbody
                tr
                  td 733530
                  td SERVICIO ENERGÍA 
                  td 22
                  td.text-end $400.000
                  td  
                tr
                  td 233550
                  td SERVICIOS PÚBLICOS 
                  td 22
                  td  
                  td $400.000
            
        div
          h4.mb-3 Servicio de acueducto y alcantarillado
          .tabla.mb-3
            table
              thead
                tr
                  th(colspan="3") ACUEDUCTO Y ALCANTARILLADO
                  th FRA DE VENTA 
                  th 7799
                tr
                  th EMPANADAZO LTDA
                  th RNI
                  th 
                  th FECHA EMISIÓN 
                  th 30/09/2020
                tr
                  th NIT 860100
                  th 
                  th 
                  th 
                  th 
                tr
                  th(colspan="4") CONCEPTO
                  th VALOR TOTAL
              tbody
                tr
                  td(colspan="4") SERVICIO DE ACUEDUCTO Y ALCANTARILLADO DEL 01 AL 30 DE SEPTIEMBRE 2020
                  td $300.000
                tr
                  td(colspan="4")
                  td $
                tr
                  td(colspan="4")
                  td $
                tr
                  td(colspan="3")
                  th.dark.text-end SUBTOTAL
                  td $300.000
                tr
                  td(colspan="3")
                  th.dark.text-end IVA
                  td $
                tr
                  td(colspan="3")
                  th.dark.text-end TOTAL 
                  td $300.000

          .tabla
            table
              thead
                tr
                  th(colspan="5") RECONOCIMIENTO SERVICIOS PÚBLICOS DE PRODUCCIÓN
                tr
                  th CÓDIGO
                  th CUENTA
                  th CC-OP
                  th DÉBITO
                  th CRÉDITO
              tbody
                tr
                  td 733525
                  td SERVICIO ACUEDUCTO
                  td 22
                  td.text-end $300.000
                  td 
                tr
                  td 233550
                  td SERVICIOS PÚBLICOS
                  td 22
                  td 
                  td $300.000

        div
          h4.mb-3 Servicio gas natural
          .tabla.mb-3
            table
              thead
                tr
                  th(colspan="3") GAS NATURAL
                  th FRA DE VENTA 
                  th 8765
                tr
                  th EMPANADAZO LTDA
                  th RNI
                  th 
                  th FECHA EMISIÓN 
                  th 30/09/2020
                tr
                  th NIT 860100
                  th 
                  th 
                  th 
                  th 
                tr
                  th(colspan="4") CONCEPTO
                  th VALOR TOTAL
              tbody
                tr
                  td(colspan="4") SERVICIO DE GAS NATURAL DEL 01 AL 30 DE SEPTIEMBRE 2020
                  td $600.000
                tr
                  td(colspan="4")
                  td 
                tr
                  td(colspan="4")
                  td 
                tr
                  td(colspan="3")
                  th.dark.text-end SUBTOTAL 
                  td $600.000
                tr
                  td(colspan="3")
                  th.dark.text-end IVA
                  td $ -
                tr
                  td(colspan="3")
                  th.dark.text-end TOTAL 
                  td $600.000


          .tabla
            table
              thead
                tr
                  th(colspan="5") RECONOCIMIENTO SERVICIOS PÚBLICOS DE PRODUCCIÓN
                tr
                  th CÓDIGO
                  th CUENTA
                  th CC-OP
                  th DÉBITO
                  th CRÉDITO
              tbody
                tr
                  td 733555
                  td SERVICIO GAS
                  td 22
                  td.text-end $600.000
                  td 
                tr
                  td 233550
                  td SERVICIOS PÚBLICOS
                  td 22
                  td 
                  td $600.000

        div
          h4.mb-3 Servicio de teléfono
          .tabla.mb-3
            table
              thead
                tr
                  th(colspan="3") CLARO
                  th FRA DE VENTA 
                  th 8765
                tr
                  th EMPANADAZO LTDA
                  th RNI
                  th 
                  th FECHA EMISIÓN 
                  th 30/09/2020
                tr
                  th NIT 860100
                  th 
                  th 
                  th 
                  th 
                tr
                  th(colspan="4") CONCEPTO
                  th VALOR TOTAL
              tbody
                tr
                  td(colspan="4") SERVICIO DE TELÉFONO DEL 01 AL 30 DE SEPTIEMBRE 2020
                  td $200.000
                tr
                  td(colspan="4")
                  td $
                tr
                  td(colspan="4")
                  td $
                tr
                  td(colspan="3")
                  th.dark.text-end SUBTOTAL 
                  td $200.000
                tr
                  td(colspan="3")
                  th.dark.text-end IVA
                  td $38.000
                tr
                  td(colspan="3")
                  th.dark.text-end TOTAL 
                  td $238.000


          .tabla
            table
              thead
                tr
                  th(colspan="5") RECONOCIMIENTO SERVICIOS PÚBLICOS DE PRODUCCIÓN
                tr
                  TH CÓDIGO
                  TH CUENTA
                  TH CC-OP
                  TH DÉBITO
                  TH CRÉDITO
              tbody
                tr
                  td 733535
                  td SERVICIO TELÉFONO
                  td 22
                  td.text-end $200.000
                  td 
                tr
                  td 233550
                  td SERVICIOS PÚBLICOS
                  td 22
                  td 
                  td $200.000

    p.mb-5 Reconocimiento del cierre de la cuenta control de costos indirectos de fabricación (CIF) al producto de productos en proceso.

    .tabla.mb-5
      table
        thead
          tr
            th CÓDIGO
            th CUENTA
            th CC-OP
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td 141015
            td PRODUCTOS EN PROCESO
            td 1001
            td.text-end $10.760.115
            td 
          tr
            td 739598
            td CAPITALIZACIÓN 
            td 1001
            td 
            td $10.760.115

    p.mb-5 Es momento de analizar la variación entre el CIF aplicado y el CIF real, para realizar el ajuste proporcional respectivo entre el saldo de los inventarios de producto terminado y el costo de ventas, según sea el caso.
      br
      br
      | Para establecer la diferencia se generan los auxiliares de la cuenta de inventario de productos en proceso, la cuenta inventarios productos en proceso y la cuenta servicios contratados, en las cuales analizaremos la diferencia con relación al CIF aplicado.

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="3") DETALLE
            th SUB CUENTA
            th(colspan="3") NOMBRE DE LA
            th CC
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td(colspan="3") TRASLADO INVENT PP A INV
            td 141015
            td(colspan="3") PRODUCTOS EN PROCESO 
            td 1001
            td 
            td.text-end $10.911.247
          tr
            td(colspan="3") CAPITALIZACIÓN CIF
            td 141015
            td(colspan="3") PRODUCTOS EN PROCESO 
            td 1001
            td.text-end $10.760.115
            td 
          tr
            td(colspan="3") CAPITALIZACIÓN SERV CONTRATO
            td 141020
            td(colspan="3") PRODUCTOS EN PROCESO 
            td 1001
            td.text-end $100.000
            td

    .row.justify-content-center.mb-5
      .col-lg-9
        .tabla.w-auto
          table.tableizer-table
            tbody
              tr.tableizer-firstrow
                td(colspan="3") CIF REALES
                td 
                td 
                td 
                td(colspan="2") $10.860.115
              tr
                td(colspan="3") TASA CIF APLICADA
                td 
                td 
                td 
                td(colspan="2") $10.911.247
              tr
                td(colspan="3") MAYOR CIF APLICADO
                td 
                td 
                td 
                td(colspan="2") $51.132


    p.mb-5 A continuación, se generan los auxiliares de producto terminado y el costo de venta para establecer la proporcionalidad de distribución de la variación. En el ejemplo, sería:

    .tabla.mb-5
      table
        thead
          tr
            th DETALLE
            th SUB CUENTA
            th NOMBRE DE LA
            th CC
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td TRASLADO INVENT PP A INV.
            td 143014
            td PRODUCTOS AL.
            td 1001
            td.text-end $79.959.436
            td 
          tr
            td COSTO VTA EMPANADAS
            td 612014
            td ELABORACIÓN
            td 22
            td.text-end $63.967.600
            td 
          tr
            td COSTO VTA EMPANADAS
            td 143014
            td PRODUCTOS AL.
            td 22
            td 
            td.text-end $63.967.600

    .tabla.mb-5
      table
        thead
          tr
            th(colspan="5") DISTRIBUCIÓN DEL MAYOR CIF APLICADO AL PRODUCTO TERMINADO
        tbody
          tr
            td(colspan="2") SALDO INVENT PRODUCTO TERMINADO
            td.text-end $15.991.836
            td.text-end 20 %
            td.text-end $10.226
          tr
            td(colspan="2") COSTO DE VENTA MFE
            td.text-end $63.967.600
            td.text-end 80 %
            td.text-end $40.906
          tr
            td(colspan="2") TOTAL INVENT DE PRODUCTO TERMINADO
            td.text-end $79.959.436
            td 
            td $51.132

    p.mb-5 Una vez realizada la distribución del mayor costo indirecto de fabricación (CIF) aplicado, se realiza el respectivo reconocimiento.

    .tabla.mb-5
      table
        thead
          tr
            th CÓDIGO
            th CUENTA
            th CC-OP
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td 141015
            td PRODUCTOS EN P
            td 1001
            td.text-end $51.132
            td 
          tr
            td 143014
            td PRODUCTOS ALIM
            td 1001
            td 
            td $10.226
          tr
            td 612014
            td ELABORACIÓN DE
            td 1001
            td 
            td $40.906

    p.mb-5 De esta forma se cumple el proceso del sistema de costos por órdenes de producción.

    .tarjeta.tarjeta--azul.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-6.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/t5-01.svg', alt='Texto que describa la imagen')
        .col-md
          .titulo-segundo.mb-4
            h2 Costos por procesos
          
          p.mb-3 Los costos por procesos es otro de los sistemas utilizados en la industria, en el cual se desarrolla la producción a gran escala, estandarizada y mecanizada, lo que facilita el montaje de líneas de producción para cada uno de los procesos, permitiendo la acumulación de cada uno de los elementos del costo por cada proceso requerido. Para la asignación de los costos se tendrá en cuenta la producción por departamentos o centros de costos.

          a.boton.color-acento-botones.me-3(:href="obtenerLink('/downloads/costos_por_procesos.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download

    p.mb-5 Para el proceso de costos por proceso, es importante tener en cuenta las siguientes etapas o pasos a seguir:

    h3.mb-5 Inicial

    .row.mb-5.align-items-stretch
      .col-5.d-none.d-md-block
        .row.h-100.align-items-center
          .col
            img(src='@/assets/curso/t5-02.svg', alt='Texto que describa la imagen')
        
      .col.d-flex.flex-column.justify-content-between
        .row.align-items-center.mb-3
          .col-2
            img(src='@/assets/curso/t5-icon-01.svg', alt='Texto que describa la imagen')
          .col
            h4.mb-0 Se establecen las unidades a producir. 
        .row.align-items-center.mb-3
          .col-2
            img(src='@/assets/curso/t5-icon-02.svg', alt='Texto que describa la imagen')
          .col
            h4.mb-0 Se asignan responsabilidades.
        .row.align-items-center
          .col-2
            img(src='@/assets/curso/t5-icon-03.svg', alt='Texto que describa la imagen')
          .col
            h4.mb-0 Se limitan las funciones por departamento o centro.

    h3.mb-5 Actividades de operación

    p.mb-5 Se define la programación para el proceso de producción, como son las cantidades requeridas, tiempo y plazos; durante el proceso, se deben llevar controles de los registros de las unidades producidas y mantener un informe actualizado y relevante de los avances de la producción.

    h3.mb-5 Final

    p.mb-5 Se evalúan y determinan los costos; se concluye el proceso de acuerdo con el informe de producción; y se establecen o sugieren acciones que mejoren los procesos de producción, ya sea en tiempo o producto.  
      br
      br
      | Ejemplo: 
    .cajon.color-primario.p-4.mb-5
      .row.justify-content-center
        .col-md-6.mb-4.mb-md-0
          p.mb-0 Durante el mes de mayo del año 20XX, en el departamento 1 de la empresa, fueron puestas 4.000 unidades en proceso. Los costos incurridos para el mes fueron:
        .col-md
          ul.lista-ul--color.ps-4.mb-0
            li 
              i.fas.fa-chevron-right
              | Materiales $4.000.000 
            li 
              i.fas.fa-chevron-right
              | Mano de obra $2.000.000 
            li.mb-0
              i.fas.fa-chevron-right
              | Costos indirectos de fabricación $500.000

    p.mb-5 A finalizar el mes de mayo, se terminaron 2.000 unidades y se trasladaron al departamento 2.
      br
      br
      | Los costos por procesos buscan determinar qué parte de los $4.000.000 de materiales, $2.000.000 de mano de obra y $500.000 de costos indirectos de fabricación, se aplicaron a las 2.000 unidades producidas y transferidas al departamento 2. Por lo tanto, cada departamento deberá preparar un informe sobre el costo de producción.
      br
      br
      | Este sistema de costos es apropiado para las entidades que están estructuradas por departamentos, como la ensambladora de vehículos.

    h3.mb-5 Costos por actividades o ABC

    p.mb-5 Los sistemas de costos ABC 
      i (Activity Based Costing) 
      | permiten la distribución de los costos indirectos de fabricación (CIF) de acuerdo con las actividades realizadas. Es un método en el que se asignan costos primero a las actividades, luego a los productos.

    .row.justify-content-center.justify-content-md-around.mb-5
      .col-6.col-md-4.mb-4.mb-md-0
        img(src='@/assets/curso/t5-03.svg', alt='Texto que describa la imagen')
      .col-md-6
        p.mb-0 El sistema de costos ABC es una herramienta de carácter estratégico con la cual se pueden sustentar las decisiones gerenciales y se fundamenta en los aportes teóricos de Porter (1998) y lo establecido por Miller y Vollman (1985). Por otro lado, han existido diversos autores que han tratado de mencionar las características de los sistemas de costos basados en actividades; no obstante, todos giran alrededor de un común denominador: los sistemas de costos basados en actividades, que propenden por la división de las organizaciones en las diferentes actividades necesarias para una mejor asignación de los costos indirectos de fabricación a los productos o servicios característicos del objeto social de la empresa.
          br
          br
          | El sistema de costos basados en actividades propende por la división de las diferentes actividades necesarias para una mejor asignación de los costos indirectos de fabricación a los productos fabricados en la empresa.
          br
          br
          | El análisis de los beneficios prevé una nueva perspectiva para el examen del comportamiento de los costos indirectos de fabricación. Elimina desperdicios y actividades que no agregan valor al producto.
        
    h3.mb-5 Objetivos de costos ABC

    .row.justify-content-center.justify-content-md-around.mb-5
      .col-md-6
        ul.lista-ul--color.ps-4.mb-4
          li 
            i.fas.fa-chevron-right
            | Analizar la rentabilidad. 
          li 
            i.fas.fa-chevron-right
            | Reducir los costos.
          li 
            i.fas.fa-chevron-right
            | Facilitar la mejora de los procesos.
        
        p.mb-4 En los costos ABC intervienen actividades y procesos que deben establecer, cada uno, la aplicabilidad para los ABC. Algunos ejemplos de actividades:

        ul.lista-ul--color.ps-4.mb-4
          li 
            i.fas.fa-chevron-right
            | Negociar los precios. 
          li 
            i.fas.fa-chevron-right
            | Clasificar proveedores.
          li 
            i.fas.fa-chevron-right
            | Planificar la producción. 
          li 
            i.fas.fa-chevron-right
            | Facturar.
          li 
            i.fas.fa-chevron-right
            | Gestionar cobros.
          li 
            i.fas.fa-chevron-right
            | Diseñar nuevos productos. 
          li 
            i.fas.fa-chevron-right
            | Recepcionar las mercancías o materiales.  

        p.mb-4 Ejemplos de procesos:

        ul.lista-ul--color.ps-4
          li 
            i.fas.fa-chevron-right
            | Compras
          li 
            i.fas.fa-chevron-right
            | Ventas
          li 
            i.fas.fa-chevron-right
            | Finanzas
          li 
            i.fas.fa-chevron-right
            | Personal 
          li 
            i.fas.fa-chevron-right
            | Investigación 
          li 
            i.fas.fa-chevron-right
            | Planeación

      .col-6.col-md-4.mb-4.mb-md-0
        img(src='@/assets/curso/t5-04.svg', alt='Texto que describa la imagen')
        
    p.mb-5 En la siguiente gráfica se representan los recursos directos e indirectos en los costos ABC.

    .row.justify-content-center.mb-5
      .col-md-8
        img(src='@/assets/curso/t5-tabla-06.svg', alt='Texto que describa la imagen')

    h3.mb-5 Ejercicio de práctica por costos ABC

    p.mb-4 La empresa Diseños S.A.,  con   N.I.T.  No 860.003.147-1, se dedica a la fabricación de prendas de vestir: camisas y faldas. Estas son las cantidades producidas en el mes de enero de 20XX.
      br
      br
      b Datos:

    .row.justify-content-center.mb-5
      .col-md-6
        .tabla.w-auto
          table
            thead
              tr
                th PRODUCTO
                th CANTIDADES
                th UNIDAD DE MEDIDA
            tbody
              tr
                td FALDAS
                td.text-end 5.000
                td UNIDADES
              tr
                td CAMISAS
                td.text-end 8.000
                td UNIDADES

    LineaTiempoD.color-primario.mb-5
      .row.align-items-center.justify-content-around(numero="1" titulo="El valor de la materia prima por producto es:")
        .col-md.mb-4.mb-md-0
          .tabla.w-auto
            table
              thead
                tr
                  th PRODUCTO
                  th VALOR
                  th UNIDAD DE VALOR
              tbody
                tr
                  td FALDAS
                  td.text-end $5.000,00
                  td PESOS
                tr
                  td CAMISAS
                  td.text-end $6.000,00
                  td PESOS

        .col-md-4
          figure
            img(src='@/assets/curso/t5-05.svg', alt='Texto que describa la imagen')  

      .row.align-items-center.justify-content-around(numero="2" titulo="Valor de la mano de obra (MO) utilizada en la elaboración de cada producto:")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/t5-06.svg', alt='Texto que describa la imagen')
        .col-md-6
          .tabla.w-auto
            table
              thead
                tr
                  th PRODUCTO
                  th VALOR
                  th UNIDAD DE VALOR
              tbody
                tr
                  td FALDAS
                  td.text-end $1.800,00
                  td PESOS
                tr
                  td CAMISAS
                  td.text-end $1.700,00
                  td PESOS


      .row.align-items-center.justify-content-around(numero="3" titulo="Tiempo: horas hombre asignadas para la elaboración del producto")
        .col-md.mb-4.mb-md-0
          .tabla.w-auto
            table
              thead
                tr
                  th PRODUCTO
                  th TIEMPO (Horas)
              tbody
                tr
                  td FALDAS
                  td 0,45
                tr
                  td CAMISAS
                  td 1

        .col-md-4
          figure
            img(src='@/assets/curso/t5-07.svg', alt='Texto que describa la imagen')  

      .row.align-items-center.justify-content-around(numero="4" titulo="Tiempo: horas máquina utilizadas para la elaboración de los productos")
        .col-md-4.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/t5-08.svg', alt='Texto que describa la imagen')
        .col-md-6
          .tabla.w-auto
            table
              thead
                tr
                  th PRODUCTO
                  th TIEMPO (Horas)
              tbody
                tr
                  td FALDAS
                  td 0,45
                tr
                  td CAMISAS
                  td 1

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p.mb-0 Para la elaboración del producto, los costos indirectos (CI) de la empresa corresponden a servicios públicos, arrendamientos, depreciación maquinaria y equipo, entre otros.

    p.mb-5 Los costos indirectos de fabricación del mes corresponden a: $40.000.000

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p.mb-0 Tener en cuenta el detalle de la materia prima (MP), la mano de obra directa (MOD) por unidad producida o elaborada, horas hombre (HH) y horas máquina (HM) utilizadas en cada unidad:

    .tabla
      table
        thead
          tr
            th ARTÍCULO
            th PRODUCCIÓN UNIDADES
            th MATERIA PRIMA UNITARIA
            th MANO DE OBRA UNITARIA
        tbody
          tr
            td FALDAS
            td.text-end 5.000
            td.text-end $5.000,00
            td.text-end $1.800,00
          tr
            td CAMISAS
            td.text-end 8.000
            td.text-end $6.000,00
            td.text-end $1.700,00
    
    p.mb-5.text-center 13.000 TOTAL UNIDADES PRODUCIDAS (TUP)

    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-acento-contenido.p-4
          p.mb-0 Se realizó la producción de 13.000 unidades, se debe determinar la proporción entre el costo indirecto (CI) y el total de las unidades producidas.

    p.mb-5 Costo indirecto de producción (CIP)

    .text-center
      .cajon.color-primario.d-inline-block.p-4.mb-5
        .d-flex.align-items-center.justify-content-center.mb-4
          .flex-shrink-1.me-3
            h4.mb-0 C.I.P =
          .divicion
            .divicion__top.px-3.py-1 
              h4.mb-0 Costos indirectos
            .divicion__bottom.px-3.py-1
              h4.mb-0 Total unidades producidas

        .d-flex.align-items-center.justify-content-center
          .flex-shrink-1.me-3
            h4.mb-0 C.I.P =
          .divicion.me-3
            .divicion__top.px-1.py-1
              h4.mb-0 $40.000.000.00
            .divicion__bottom.px-3.py-1
              h4.mb-0 13.000
          h4.mb-0 = $3.076,92

    p.mb-5 Cédula método de unidades producidas

    .tabla.mb-5
      table
        thead
          tr
            th ARTÍCULO
            th MATERIA PRIMA UNITARIA
            th MANO DE OBRA UNITARIO
            th GASTO INDIRECTO G.I.
            th PRODUCCIÓN UNITARIA
        tbody
          tr
            td FALDAS
            td.text-end $5.000
            td.text-end $1.800,00
            td.text-end $3.077
            td.text-end $9.876,92
          tr
            td CAMISAS
            td.text-end $6.000
            td.text-end $1.700,00
            td.text-end $3.077
            td.text-end $10.776,92

    p.mb-5 Cédula método del costo de materia prima

    .tabla.mb-5
      table
        thead
          tr
            th ARTÍCULO
            th PRODUCCIÓN UNIDADES
            th MATERIA PRIMA UNITARIA
            th COSTO TOTAL MATERIA PRIMA CTMP
        tbody
          tr
            td FALDAS
            td.text-end 5.000
            td.text-end $5.000
            td.text-end $25.000.000
          tr
            td CAMISAS
            td.text-end 8.000
            td.text-end $6.000
            td.text-end $48.000.000
          tr
            td 
            td 
            th.dark.text-end TOTAL 
            td $73.000.000

    .row.justify-content-center.mb-5
      .col-lg-6
        .cajon.color-acento-contenido.p-4
          p.mb-0 El costo total de la materia prima (MP) es de $15.000. Se asigna una proporción entre el costo indirecto (CI) y el total de las unidades producidas.

    p.mb-5 Costo total de materia prima (CTMP)

    .text-center.mb-5
      .cajon.color-primario.d-inline-block.p-4

        .d-flex.align-items-center.justify-content-center.mb-4
          .flex-shrink-1.me-3
            h4.mb-0 C.I.MP =
          .divicion
            .divicion__top.px-3.py-1 
              h4.mb-0 Costos indirectos
            .divicion__bottom.px-3.py-1
              h4.mb-0 Costo total<br>materia prima (CTMP)

        .d-flex.align-items-center.justify-content-center
          .flex-shrink-1.me-3
            h4.mb-0 C.I.MP =
          .divicion.me-3
            .divicion__top.px-1.py-1
              h4.mb-0 $40.000.000.00
            .divicion__bottom.px-3.py-1
              h4.mb-0 73.000
          h4.mb-0 = $0,5479

    .tabla.mb-2
      table
        thead
          tr
            th ARTÍCULO
            th MATERIA PRIMA UNITARIA
            th MANO DE OBRA UNITARIO
            th COSTO MATERIA PRIMA POR UNIDAD
            th PRODUCCIÓN UNITARIA
        tbody
          tr
            td FALDAS
            td.text-end $5.000
            td.text-end $1.800,00
            td.text-end $2.739,73
            td.text-end $9.539,73
          tr
            td CAMISAS
            td.text-end $6.000
            td.text-end $1.700,00
            td.text-end $3.287,67
            td.text-end $10.987,67

    p.text-center.mb-5 El $0,5479 corresponde al costo de materia prima por unidad.

    p.mb-5 Cédula método de horas hombre.

    .tabla.mb-5
      table
        thead
          tr
            th ARTÍCULO
            th PRODUCCIÓN UNIDADES
            th HORAS HOMBRE UNITARIAS
            th COSTO TOTAL MATERIA PRIMA CTMP
        tbody
          tr
            td FALDAS
            td.text-end 5.000
            td.text-end $0,50
            td $2.500
          tr
            td CAMISAS
            td.text-end 8.000
            td.text-end $1,00
            td $8.000
          tr
            td 
            td 
            th.dark.text-end TOTAL 
            td $10.500

    .row.justify-content-center.mb-5
      .col-lg-6
        .cajon.color-acento-contenido.p-4
          p.mb-0 El costo total de la materia prima es de $10,250, para lo cual se determina la proporción entre los costos indirectos (CI) y el total de horas hombre usadas.


    .text-center.mb-5
      .cajon.color-primario.d-inline-block.p-4

        .d-flex.align-items-center.justify-content-center.mb-4
          .flex-shrink-1.me-3
            h4.mb-0 CTHH =
          .divicion
            .divicion__top.px-3.py-1 
              h4.mb-0 Costos indirectos
            .divicion__bottom.px-3.py-1
              h4.mb-0 Total horas hombre

        .d-flex.align-items-center.justify-content-center
          .flex-shrink-1.me-3
            h4.mb-0 CTHH =
          .divicion.me-3
            .divicion__top.px-1.py-1
              h4.mb-0 $40.000.000.00
            .divicion__bottom.px-3.py-1
              h4.mb-0 10.500
          h4.mb-0 = $3.809,52

    .tabla.mb-5
      table
        thead
          tr
            th ARTÍCULO
            th MATERIA PRIMA UNITARIA
            th MANO DE OBRA UNITARIO
            th HORAS HOMBRE UNITARIAS
            th HORAS HOMBRE UNITARIAS
            th TOTAL HOMBRE UNITARIAS
        tbody
          tr
            td FALDAS
            td.text-end $5.000
            td.text-end $1.800,00
            td.text-end $0,50
            td.text-end $3.809,52
            td.text-end $8.704,76
          tr
            td CAMISAS
            td.text-end $6.000
            td.text-end $1.700,00
            td.text-end $1,00
            td.text-end $3.809,52
            td.text-end $11.509,52

    p.mb-5 Cédula método de horas máquina.

    .tabla.mb-5
      table
        thead
          tr
            th ARTÍCULO
            th PRODUCCIÓN UNIDADES
            th HORAS MÁQUINA UNITARIAS
            th COSTO HORAS MAQUINA
        tbody
          tr
            td FALDAS
            td.text-end 5.000 
            td.text-end $0,5
            td $2.500
          tr
            td CAMISAS
            td.text-end 8.000 
            td.text-end $1,0
            td $8.000
          tr
            td 
            td 
            th.dark.text-end TOTAL 
            td $10.500

    .row.justify-content-center.mb-5
      .col-lg-6
        .cajon.color-acento-contenido.p-4
          p.mb-0 Para hallar la proporción que le corresponde al costo horas máquina, se toman los costos indirectos y se dividen en costo horas máquina.

    .text-center.mb-5
      .cajon.color-primario.d-inline-block.p-4
        .d-flex.align-items-center.justify-content-center.mb-4
          .flex-shrink-1.me-3
            h4.mb-0 CTHM =
          .divicion
            .divicion__top.px-3.py-1 
              h4.mb-0 Costos indirectos
            .divicion__bottom.px-3.py-1
              h4.mb-0 Total horas máquina

        .d-flex.align-items-center.justify-content-center
          .flex-shrink-1.me-3
            h4.mb-0 CTHM =
          .divicion.me-3
            .divicion__top.px-1.py-1
              h4.mb-0 $40.000.000.00
            .divicion__bottom.px-3.py-1
              h4.mb-0 10.500
          h4.mb-0 = $3.809,52

    .tabla.mb-5
      table
        thead
          tr
            th ARTÍCULO
            th MATERIA PRIMA UNITARIA
            th MANO DE OBRA UNITARIO
            th HORAS MÁQUINA UNITARIAS
            th HORAS MÁQUINA UNITARIAS
        tbody
          tr
            td FALDAS
            td.text-end $5.000
            td.text-end $1.800,00
            td.text-end $0,5
            td.text-end $3.809,52
          tr
            td CAMISAS
            td.text-end $6.000
            td.text-end $1.700,00
            td.text-end $1,0
            td.text-end $3.809,52

    p.mb-5 Cédula método del costo de mano de obra directa.

    .tabla.mb-5
      table
        thead
          tr
            th ARTÍCULO
            th PRODUCCIÓN UNIDADES
            th MANO DE OBRA UNITARIO
            th COSTO MANO DE OBRA DIRECTA
        tbody
          tr
            td FALDAS
            td.text-end 5.000
            td.text-end $1.800,00
            td.text-end $9.000.000
          tr
            td CAMISAS
            td.text-end 8.000
            td.text-end $1.700,00
            td.text-end $13.600.000
          tr
            td 
            td 
            th.dark.text-end Total 
            td $22.600.000

    p.mb-5 El costo total de la mano de obra directa es de $22,600,000. Se determina la proporción entre los costos indirectos (CI) y el total de costos de mano de obra directa, CIMOD.

    .text-center.mb-5
      .cajon.color-primario.d-inline-block.p-4

        .d-flex.align-items-center.justify-content-center.mb-4
          .flex-shrink-1.me-3
            h4.mb-0 CI MOD =
          .divicion
            .divicion__top.px-3.py-1 
              h4.mb-0 Costos indirectos
            .divicion__bottom.px-3.py-1
              h4.mb-0 Costo mano de obra directa

        .d-flex.align-items-center.justify-content-center
          .flex-shrink-1.me-3
            h4.mb-0 CI MOD =
          .divicion.me-3
            .divicion__top.px-1.py-1
              h4.mb-0 $40.000.000.00
            .divicion__bottom.px-3.py-1
              h4.mb-0 22.600.000
          h4.mb-0 = $1,7699

    .tabla
      table
        thead
          tr
            th ARTÍCULO
            th MATERIA PRIMA UNITARIA
            th MANO DE OBRA UNITARIO
            th MANO DE OBRA POR COSTO DE MO
            th TOTAL MANO DE OBRA
        tbody
          tr
            td FALDAS
            td.text-end $5.000
            td.text-end $1.800,00
            td.text-end $3.185,8
            td.text-end $9.985,84
          tr
            td CAMISAS
            td.text-end $6.000
            td.text-end $1.700,00
            td.text-end $3.008,8
            td.text-end $10.708,85

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
