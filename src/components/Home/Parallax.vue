<template>
    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "Parallax",
  data () {
    return {
      items: [
        {
          src: 'https://i.ytimg.com/vi/adFWFNRqQc0/maxresdefault.jpg'
        },
        {
          src: 'http://www.nmbreakthroughs.org/-/media/Northwestern/ContentHub/images/wellness/nm-fall-produce-feature.jpg?h=720&w=1280'
        },
        {
          src: 'http://biberon.hr/wp-content/uploads/2017/11/vegetarijanska_kuhinja.jpg'
        },
        {
          src : 'https://media.channel3000.com/mmm-global-us-east-1/photo/2018/04/10/strawberries%2C%20strawberry%2C%20fruit.jpg_11005696_ver1.0_1280_720.jpg'
        }
      ]
    }
  }
}
</script>