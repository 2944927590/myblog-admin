<template>
  <div>
    <vheads></vheads>
    <vindexs></vindexs>
    <vfoots></vfoots>
  </div>
</template>

<script>

import vhead from '../../components/common/Head';
import vfoot from '../../components/common/Foot';
import vindex from '../../components/index/Index';

export default {
  name: 'index',
  components: {
    vheads: vhead,
    vfoots: vfoot,
    vindexs: vindex

  }
}
</script>

<style>

</style>
