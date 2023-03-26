let myDom= document;

class Button {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }

    render() {
        let myApp = document.getElementById(this.parentID, this.text);
        
        const myButtonHTML = myApp.innerHTML + "<button>" + this.text + "</button>";

        myApp.innerHTML = myButtonHTML; 
    }
};

let myButton = new Button("app", "Log in");
myButton.render();

let myButton2 = new Button("btn", "Accept");
myButton2.render();


class  Input {
    constructor(parentID, type) {
        this.parentID = parentID;
        this.type = type;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        
        const myInputHTML = myApp.innerHTML + "<input type = " + this.type + ">";

        myApp.innerHTML = myInputHTML; 
    }
};

let myInput = new Input ("footer", "text");
myInput.render();

let myInput2 = new Input ("footer", "password");
myInput2.render();

let myInput3 = new Input ("footer", "date");
myInput3.render();

let myInput4 = new Input ("footer", "checkbox");
myInput4.render();
