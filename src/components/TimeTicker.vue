<template>
  <div>День: {{ state.day }}</div>
</template>
<script>
import { useState } from '@/store';

export default {
  name: 'TimeTicker',
  setup() {
    const instance = useState();

    setInterval(() => {
      instance.change([['day', 1]])
    }, 1000)

    return {
      state: instance.state,
    };
  }
}
</script>
