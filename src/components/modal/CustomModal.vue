<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <slot name="header">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </slot>

      </div>
      <div class="modal-body">
        <slot name="body">

        </slot>
      </div>
      <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </slot>
      </div>
    </div>
  </div>
</div>
</template>

<script >
export default{
  name:'CustomModal'
}
</script>