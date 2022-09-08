import CustomModal from "../../../components/modal/CustomModal.vue";
import {mapActions} from "vuex";
import {action} from "../../../constants/album.js";

export default {
    name: "List",
    data() {
        return {
            albumId: null,
            albums: [],
            albumName: "",
        };
    },
    components: {
        CustomModal,
    },
    mounted() {
        this.get();
    },

    methods: {
        ...mapActions("album", {
            getAlbumAction: action.GET_ALBUM,
            addAlbumAction: action.ADD_ALBUM,
            updateAlbumAction: action.UPDATE_ALBUM,
            deleteAlbumAction: action.DELETE_ALBUM,
        }),
        async get() {
            try {
                const response = await this.getAlbumAction();

                if (response.status === 200) {
                    this.albums = response.data;
                }
            } catch (error) {
                this.$toast.error(error.message);
            }
        },
        async add() {
            try {
                if (this.albumName === '') {
                    return false;
                }
                const data = {

                    name: this.albumName,
                };
                const response = await this.addAlbumAction(data);

                if (response.status === 201) {
                    this.get()
                    this.$toast.success("success");
                }
            } catch (error) {
                this.$toast.error(error.message);
            }
        },
        async editAlbum(name) {
            try {

                const data = {

                    oldname: name,
                    newname: 'newName',
                };
                const response = await this.updateAlbumAction(data);

                if (response.status === 200) {
                    this.get()
                    this.$toast.success("success");
                }
            } catch (error) {
                this.$toast.error(error.message);
            }
        },
        updateForm(name) {
            //TODO: open form and change in form
            this.albumName = name;
            // const  collapseInstance = document.getElementById('addForm')


            const myCollapse = document.getElementById('addForm')
            const bsCollapse = new bootstrap.Collapse(myCollapse, {
                toggle: false
            })

        },
        async deleteAlbum(name) {
            //TODO: after allow user delete album
            try {
                const data = {
                    name: name,
                };
                const response = await this.deleteAlbumAction(data);

                if (response.status === 204) {
                    this.get()
                    this.$toast.success("success");
                }
            } catch (error) {
                this.$toast.error(error.message);
            }
        },
        manage(id) {
            this.$router.push({
                name: "explore",
                params: {id},
            });
        },
        closeForm() {
            var myCollapsible = document.getElementById("collapse_bar");
        },
    },
};
