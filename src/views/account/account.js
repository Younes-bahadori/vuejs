import cookie from "../../services/cookie/index";
import { mapActions } from "vuex";
import { action } from "../../constants/account.js";

export default {
  data() {
    return {
      loginMode: false,
      form: {
        username: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("account", {
      loginAction: action.LOGIN,
      signupAction: action.SIGNUP,
    }),
    async login() {
      try {
        let { username, password } = this.form;
        let data = {
          username: username,
          password: password,
        };
        const response = await this.loginAction(data);
        if (response.status === 200) {
          cookie.Set("userDetails", JSON.stringify(data));
          this.$toast.success("success login");
          setTimeout(() => this.$router.push("/album"), 1000);
        }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
    async signup() {
      try {
        let { username, password, email } = this.form;
        let data = {
          username: username,
          password: password,
          email: email,
        };
        const response = await this.signupAction(data);
        if (response.status === 201) {
          this.loginMode = true;
          this.$toast.success("success register");
        }
      } catch (error) {
        this.$toast.error(error.message);
      }
    },
  },
};
