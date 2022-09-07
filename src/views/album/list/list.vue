<template>
  <section class="container mt-5">
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
        <th scope="col">Name</th>
        <th scope="col" class="justify-content-center d-flex">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td class="d-flex justify-content-center gap-2">
          <button class="btn btn-danger">delete</button>
          <button @click="manage('1')" class="btn btn-info">manage</button>
          <button class="btn btn-outline-primary">edit</button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td class="d-flex justify-content-center gap-2">
          <button class="btn btn-danger">delete</button>
          <button @click="manage('1')" class="btn btn-info">manage</button>
          <button class="btn btn-outline-primary">edit</button>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td >Larry the Bird</td>
        <td class="d-flex justify-content-center gap-2">
          <button class="btn btn-danger">delete</button>
          <button @click="manage('1')" class="btn btn-info">manage</button>
          <button class="btn btn-outline-primary" >edit</button>
        </td>
      </tr>
      </tbody>
    </table>
  </section>



</template>
<script src="./list.js">

</script>
<style lang="scss" scoped src="./list.scss">

</style>