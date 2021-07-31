<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-md-9
        img(src="@/assets/curso/intro-01.svg", alt="Texto que describa la imagen")
        
    p.mb-0 El presente componente desarrolla los temas concernientes al sistema de costeo y elaboración del estado de costos. Así mismo, desarrolla los contenidos que le permiten comprender la importancia de análisis en el resultado del punto de equilibrio en cantidades y en pesos, para el seguimiento, control y éxito de una empresa.
      br
      br
      b Nota aclaratoria: 
      | las tablas que se toman como referencia en los ejemplos en cada uno de los temas desarrollados, elaboradas mediante el programa Excel, son derivadas de los mismos, por lo tanto, no se numeran y la elaboración es propia del autor del presente componente.
      br
      br
      | Para la elaboración de este componente, se abordaron varios autores conocidos en sistema de costeo y estado de costos, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de gestión contable e información financiera.


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
