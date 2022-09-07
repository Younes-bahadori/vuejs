import CustomModal from '../../../components/modal/CustomModal.vue';

export default {
    name: 'Explore',
    components: {
        CustomModal
    },
    created() {
        debugger
        this.albumId = this.$route.params.id;
    },
    methods: {
        edit() {

        },
        delete() {

        },
        manage(id) {
            debugger
            // this.$router.push('/explore',{id})
        }
    }
}