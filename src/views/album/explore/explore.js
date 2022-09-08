import CustomModal from "../../../components/modal/CustomModal.vue";
import { mapActions } from "vuex";
import { action } from "../../../constants/picture.js";

export default {
  name: "Explore",
  data() {
    return {
      albumId: null,
      pictures: [],
    };
  },
  components: {
    CustomModal,
  },
  mounted() {
    this.get();
  },
  methods: {
    ...mapActions("picture", {
      getAlbumAction: action.GET_ALBUM,
      addAlbumAction: action.ADD_ALBUM,
      updateAlbumAction: action.UPDATE_ALBUM,
      deleteAlbumAction: action.DELETE_ALBUM,
    }),
    async get() {
      try {
        const response = await this.getAlbumAction();
        this.albums = response.data;

        if (response.status === 200) {
          this.albums = response.data;
        }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
    edit() {},
    delete() {},
    manage(id) {
      this.$router.push({
        name: "explore",
        params: { id },
      });
    },
  },
};
