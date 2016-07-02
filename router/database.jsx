
const database = {

    constructor() {

        const this.database = 'testing-2f687';
        const this.baseTable = 'location';
        const this.URL = 'https://'+firebaseDatabase+'.firebaseio.com/'+firebasetable;

    },

    getURL(key) {
      return 'https://' + this.database + '.firebaseio.com/' + key;
    },

    attach(key) {
      firebaseRef = new Firebase(this.getURL(key));



    },

    unattach() {

    },

    query(key) {



    }




};
