import {mapActions} from "vuex";
import {action} from '../../constants/account.constants.js'

export default {
    data() {
        return {
            loginMode: false,
            form: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions("account", {
            loginAction: action.LOGIN,
            signupAction: action.SIGNUP,
        }),
        async login() {
            try {
                let {username, password} = this.form;
                let data = {
                    username: username?.value,
                    password: password?.value,
                };
                const response = await this.loginAction(data);
                if (response.status === 200) {
                    this.$toast.success('success login')
                    this.$router.push('/album')
                }
            } catch (error) {
                this.$toast.error(error.message)
            }
        },
    }
};