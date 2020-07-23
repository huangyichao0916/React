class Auth{
    @observable isLogin = false;

    login (){
        this.isLogin = true;
    }

    logout(){
        this.isLogin = false;
    }
}

