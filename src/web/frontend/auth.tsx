class Auth {

    authenticated = false;

    constructor() {
        this.authenticated = false;
    }

    login(cb: () => void) {
        this.authenticated = true;
        cb();
    }

    logout(cb: () => void) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }

}

export default new Auth();