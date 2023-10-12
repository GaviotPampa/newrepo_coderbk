/* dto para registro */

export default class UserDTORegister {
    constructor(user) {
        this.user.first_name = user.first_name;
        this.user.last_name = user.last_name;
        this.user.email = user.email;
        this.user.age = user.age;
        this.user.role = user.role;
        this.user.cartId = user.cartId;
        this.user.isGithub = user.isGithub
    };
};