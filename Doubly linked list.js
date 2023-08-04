
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        var newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var popNode=this.tail;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        else{ 
        this.tail=popNode.prev;
        popNode.prev=null;
        this.tail.next=null;
        }
        this.length--;
        return popNode;
    }
    
    shift(){
        if(!this.head) return undefined;
        var oldHead=this.head;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        else{
            this.head=oldHead.next;
            oldHead.next=null;
            this.head.prev=null;       
        }
        this.length--;
        return oldHead;
        
    }
    unShift(val){
        var newHead=new Node(val);
        if(this.length===0){
            this.head=newHead;
            this.tail=newHead;
        }
        else{   
        this.head.prev=newHead;
        newHead.next=this.head;
        this.head=newHead;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        var count,current;
        if(index <= this.length/2){
            count=0;
            current=this.head;
            while(index!=count){
                current=current.next;
                count++;
            }
        }
        else{
            count=this.length-1;
            current=this.tail;
            while(index!=count){
                current=current.prev;
                count--;
            }
        }
        
        return current;
    }

    set(index,val){
        var foundNode=this.get(index)
        if(foundNode){
            foundNode.val=val;
            return true;
        }
        return false
    }

      insert(index,val){
        if(index < 0 || index > this.length) return false;
          if(index===0) return !! this.unShift(val);
          if(index===this.length) return !! this.push(val);
          var newNode=new Node(val);
          var prevNode=this.get(index-1);
          var nextNode=prevNode.next;
          prevNode.next=newNode;
          newNode.prev=prevNode;
          newNode.next=nextNode;
          nextNode.prev=newNode;
          this.length++
          return true;                
    }

    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index===0) return  this.shift();
        if(index===this.length-1) return  this.pop();
        var removedNode=this.get(index);
        var prevNode=removedNode.prev;
        var nextNode=removedNode.next;
        prevNode.next=nextNode;
        nextNode.prev=prevNode;
        removedNode.next=null;
        removedNode.prev=null;
        this.length--;
        return removedNode;
        
    }
}

// var node=new Node();
var list=new doublyLinkedList()
list.push("hello")
list.push("world")
list.push("Sarath")





