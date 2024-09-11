
    function append(value){
        document.getElementById("display").value+=value;
    }
    function clear1(){
        document.getElementById("display").value="";
    }
    function calculate(){
        try{
        let res=eval(document.getElementById("display").value);
        document.getElementById("display").value=res;
        }
        catch(e){
            document.getElementById("display").value="Invalid Expression";
        }
    }
