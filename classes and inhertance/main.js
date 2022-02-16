


class user{
    constructor(username, email, password){
        this.username= username;
        this.email= email;
        this.password= password;
    }

    static countusers(){
        console.log('there are 50 users');

    }
    register(){
        console.log(this.username+' is now registered' );

    }
}

// let bob = new user('bob','bob@gmail.com','123456');
 
// bob.register();

// user.countusers();

class member extends user{

    constructor(username, email, password, memberPackage){
      super(username, email, password);
      this.package = memberPackage;
    
}

getPackage() {
 console.log(this.username+' is subscribed to '+this.package+' has an email id.  '+this.email);
}
}

let mike = new member('mike', 'mike@.com','fjnbs', 'standard');


// mike.getPackage();
mike.register();