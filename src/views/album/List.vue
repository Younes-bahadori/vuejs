<template>
  <section class="container">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Launch demo modal
    </button>
    <CustomModal>
      <template #header>
<!--        <h1>Here might be a page title</h1>-->

      </template>

      <template #body>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template #footer>
<!--        <p>Here's some contact info</p>-->
      </template>
    </CustomModal>

    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr>
      </tbody>
    </table>
  </section>



</template>
<script>
import CustomModal from '../../components/modal/CustomModal.vue';

export default {
  name: 'Album',
  components:{
    CustomModal
  }
}
</script>
<style lang="">

</style>