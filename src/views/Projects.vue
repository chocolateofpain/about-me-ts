<template>
  <div class="w-full bg-center bg-cover bg-palmtree sm:bg-none sm:bg-white">
    <Header class="hidden sm:block" title="Projects" />
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
      risus at augue bibendum, a feugiat arcu consequat. Nulla vitae magna eget
      eros elementum accumsan. In hac habitasse platea dictumst. Donec sodales
      bibendum arcu eu rutrum. Cras ac lorem eu odio pharetra interdum. Quisque
      velit ex, tempor pharetra pharetra laoreet, sodales bibendum elit. Proin
      in justo facilisis, interdum lectus at, condimentum libero. In elementum
      finibus malesuada. Pellentesque condimentum sollicitudin tortor, id
      fermentum lorem tincidunt in. Vestibulum ligula nisi, dictum ac cursus in,
      dapibus ac mi. Phasellus orci felis, semper ut diam sed, aliquam vehicula
      arcu. Praesent rutrum vehicula tellus, quis semper leo. Class aptent
      taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Ut rhoncus fermentum ipsum nec sollicitudin. Suspendisse eget
      nunc sed nisl tincidunt accumsan. Nullam eu tempus lectus, sed sagittis
      libero. Nullam porttitor convallis risus, ac facilisis mauris placerat ut.
      Morbi in tellus malesuada, mollis urna non, lacinia nisl. Sed arcu magna,
      efficitur eget magna ac, blandit mattis dui. Praesent viverra tellus nec
      justo consectetur, sed ornare mi lacinia. Curabitur venenatis tellus odio,
      nec ullamcorper dolor accumsan non. Proin vestibulum sem sit amet mi
      malesuada pulvinar. Nunc ac pulvinar elit. Nunc consectetur blandit nulla,
      tincidunt ultrices est. Vivamus massa justo, vestibulum nec suscipit eget,
      tincidunt eu sapien. Donec maximus tempor lorem ut rutrum. Aenean
      consequat erat eget urna tincidunt, id porttitor leo mollis. Fusce dapibus
      risus laoreet, mollis arcu vitae, molestie metus. Orci varius natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vivamus id orci et lectus dignissim porttitor. Maecenas
      augue felis, fringilla quis velit in, accumsan maximus neque. Aliquam
      ligula massa, dignissim vel leo ac, consequat semper orci. Fusce lobortis
      at massa sit amet bibendum. Vestibulum ante ipsum primis in faucibus orci
      luctus et ultrices posuere cubilia curae; Maecenas gravida eros vitae
      purus placerat, in volutpat purus hendrerit. Nam et ligula ipsum. Fusce
      lacinia, arcu ac rhoncus pretium, mi lorem malesuada libero, consectetur
      auctor nulla magna id dui. Fusce eget sodales urna, vitae hendrerit lacus.
      Vivamus in dapibus massa. Cras vel neque rutrum, pharetra dolor sed,
      auctor dolor. Praesent sagittis massa sed feugiat facilisis. Nunc feugiat
      vulputate condimentum. In sit amet pellentesque tortor, at vehicula leo.
      Curabitur aliquam aliquam eros eget faucibus. Nulla non bibendum lacus.
      Vestibulum quis nisl et magna ultricies semper. Phasellus scelerisque odio
      in dictum egestas. Vestibulum imperdiet pulvinar justo a iaculis.
      Curabitur malesuada nec erat nec accumsan. Nam auctor eu mi quis rutrum.
      Ut sapien lectus, feugiat a nunc id, placerat feugiat lectus. Vestibulum
      accumsan arcu eu metus vehicula, in blandit lectus pharetra. Maecenas a
      ligula in massa fringilla gravida. Lorem ipsum dolor sit amet, consectetur
      adipiscing elit. Maecenas eget nisl scelerisque, dignissim mauris in,
      posuere massa. Donec nec faucibus orci, ut efficitur ligula. Cras quam
      erat, fringilla nec hendrerit lobortis, pretium consectetur nunc.
      Suspendisse at tempor dui.
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/Header.vue";

@Options({
  components: {
    Header,
  },
})
export default class Projects extends Vue {}
</script>
