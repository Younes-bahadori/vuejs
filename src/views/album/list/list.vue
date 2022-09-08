<template>
  <section class="container mt-5">
    <p>
      <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#addForm"
          aria-expanded="false"
          aria-controls="addForm"
      >
        show form
      </button>
    </p>
    <div class="collapse" id="addForm" ref="form">
      <div class="row">
        <div class="m-3 w-50">
          <label for="albumName" class="form-label">Album Name</label>
          <input
              type="text"
              class="form-control"
              id="albumName"
              v-model="albumName"
          />
          <button
              class="btn btn-primary mt-3"
              @click="add"
          >
            add album
          </button>
        </div>
      </div>

    </div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col" class="justify-content-center d-flex">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(album, index) in albums" :key="album.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ album.name }}</td>
        <td class="d-flex justify-content-center gap-2">
          <button @click="deleteAlbum(album.name)" class="btn btn-danger">delete</button>
          <button @click="manage(album.id)" class="btn btn-info">manage</button>
          <button @click="editAlbum(album.name)" class="btn btn-outline-primary">edit</button>
        </td>
      </tr>
      </tbody>
    </table>
  </section>
</template>
<script src="./list.js"></script>
<style lang="scss" scoped src="./list.scss"></style>
