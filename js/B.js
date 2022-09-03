class node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class binarryTree {
    constructor() {
        this.root = null;
    }
    addnode(data, ...path) {
        let newnode = new node(data);
        if (path.lenght == 0) {
            this.root = newnode;
        } else {
            let temp = this.root;
            for (let i = 0; i < path.length-1; i++) {
                if (path[i] == "l") {
                    temp = temp.left;
                } else {
                    temp = temp.right;
                }
            }
            if (path[path.length - 1] == "l") {
                this.left = newnode;
            } else {
                this.right = newnode;
            }


        }

    }
   preoder(parent=this.root){
       if(parent==null){
           return;
       }else{
           console.log(parent.data);
           this.preoder(parent.left) ;
           this.preoder(parent.right);
       }
   }

}
let bt = new binarryTree();
bt.addnode(10)
bt.addnode(20,"l")
bt.addnode(70,"r")
bt.addnode(30,"l","l")
bt.addnode(40,"l","r")
bt.addnode(50,"r","l")
bt.addnode(60,"r","r")