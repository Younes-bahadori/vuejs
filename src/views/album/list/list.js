import CustomModal from '../../../components/modal/CustomModal.vue';

export default {
    name: 'List',
    data() {
        return {
            albumId: null
        }
    },
    components: {
        CustomModal
    },

    methods: {
        edit() {

        },
        delete() {

        },
        manage(id) {
            this.$router.push({
                name: 'explore',
                params: {id}
            })
        }
    }
}