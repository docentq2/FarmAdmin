<template>
  <div class="box">

    <img class="icon" src="../assets/cow.jpg" alt="">

    <section>
      <h1>Корова</h1>
      <table>
        <tr class="positiveRow">
          <td>Молоко</td>
          <td>11 л</td>
        </tr>
        <tr class="negativeRow">
          <td>Сено</td>
          <td>1 стог</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import { useState } from '@/store';

export default {
  name: 'HelloWorld',
  setup() {
    const instance = useState();
    return {
      state: instance.state,
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 180px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

.icon {
  width: 100px;
}

.positiveRow {
  background: #d2ffd2;
}

.negativeRow {
  background: #ffc6c6;
}

h1 {
  margin: 40px 0 0;
}
</style>
