let sum=0
let win = false
let c1_1 = document.getElementById("1.1")
let c1_2 = document.getElementById("1.2")
let c1_3 = document.getElementById("1.3")

let c2_1 = document.getElementById("2.1")
let c2_2 = document.getElementById("2.2")
let c2_3 = document.getElementById("2.3")

let c3_1 = document.getElementById("3.1")
let c3_2 = document.getElementById("3.2")
let c3_3 = document.getElementById("3.3")

    
function o(tbl) {
    if(win == false){

        
        if(sum%2==0){
                tbl.innerHTML="O"
        }
        else{
                tbl.innerText="X"
        }
        
        sum+=1
        
        announce()
    }
}

function game(){
    console.log("Started Game")
    
    document.getElementById("1.1").onclick=function() {o(c1_1)}
    document.getElementById("1.2").onclick=function() {o(c1_2)}
    document.getElementById("1.3").onclick=function() {o(c1_3)}

    document.getElementById("2.1").onclick=function() {o(c2_1)}
    document.getElementById("2.2").onclick=function() {o(c2_2)}
    document.getElementById("2.3").onclick=function() {o(c2_3)}

    document.getElementById("3.1").onclick=function() {o(c3_1)}
    document.getElementById("3.2").onclick=function() {o(c3_2)}
    document.getElementById("3.3").onclick=function() {o(c3_3)}  
}

function announce(){
    //player-1 check
    if(document.getElementById(1.1).innerText=='O'
        &&
        document.getElementById(1.2).innerText=='O'
        &&
        document.getElementById(1.3).innerText=='O'
        ){
        alert("Player-1 wins")
        c1_1.style.backgroundColor = "green"
        c1_2.style.backgroundColor = "green"
        c1_3.style.backgroundColor = "green"
        win = true
        
        
    }
    else if(document.getElementById(2.1).innerText=='O'
            &&
            document.getElementById(2.2).innerText=='O'
            &&
            document.getElementById(2.3).innerText=='O'
            ){
            alert("Player-1 wins")
        c2_1.style.backgroundColor = "green"
        c2_2.style.backgroundColor = "green"
        c2_3.style.backgroundColor = "green"
        win = true
           
    }
    else if(document.getElementById(3.1).innerText=='O'
            &&
            document.getElementById(3.2).innerText=='O'
            &&
            document.getElementById(3.3).innerText=='O'
            ){
            alert("Player-1 wins")
            c3_1.style.backgroundColor = "green"
        c3_2.style.backgroundColor = "green"
        c3_3.style.backgroundColor = "green"
        win = true
    }
    else if(document.getElementById(1.1).innerText=='O'
            &&
            document.getElementById(2.1).innerText=='O'
            &&
            document.getElementById(3.1).innerText=='O'
            ){
            alert("Player-1 wins")
            c1_1.style.backgroundColor = "green"
        c2_1.style.backgroundColor = "green"
        c3_1.style.backgroundColor = "green"
        win = true
    }
    else if(document.getElementById(1.2).innerText=='O'
            &&
            document.getElementById(2.2).innerText=='O'
            &&
            document.getElementById(3.2).innerText=='O'
            ){
            alert("Player-1 wins")
            c1_2.style.backgroundColor = "green"
        c2_2.style.backgroundColor = "green"
        c3_2.style.backgroundColor = "green"
        win = true
    }
    else if(document.getElementById(1.3).innerText=='O'
            &&
            document.getElementById(2.3).innerText=='O'
            &&
            document.getElementById(3.3).innerText=='O'
            ){
            alert("Player-1 wins")
            c1_3.style.backgroundColor = "green"
        c2_3.style.backgroundColor = "green"
        c3_3.style.backgroundColor = "green"
        win = true
    }
    else if(document.getElementById(1.1).innerText=='O'
            &&
            document.getElementById(2.2).innerText=='O'
            &&
            document.getElementById(3.3).innerText=='O'
            ){
            alert("Player-1 wins")
            c1_1.style.backgroundColor = "green"
        c2_2.style.backgroundColor = "green"
        c3_3.style.backgroundColor = "green"
        win = true
    }
    else if(document.getElementById(1.3).innerText=='O'
            &&
            document.getElementById(2.2).innerText=='O'
            &&
            document.getElementById(3.1).innerText=='O'
            ){
            alert("Player-1 wins")
            c1_3.style.backgroundColor = "green"
        c2_2.style.backgroundColor = "green"
        c3_1.style.backgroundColor = "green"
        win = true
    }

    //player-2 cehck starts

    else if(document.getElementById(1.1).innerText=='X'
    &&
    document.getElementById(1.2).innerText=='X'
    &&
    document.getElementById(1.3).innerText=='X'
    ){
    alert("Player-2 wins")
    c1_1.style.backgroundColor = "green"
    c1_2.style.backgroundColor = "green"
    c1_3.style.backgroundColor = "green"
    win = true
    
}
else if(document.getElementById(2.1).innerText=='X'
        &&
        document.getElementById(2.2).innerText=='X'
        &&
        document.getElementById(2.3).innerText=='X'
        ){
        alert("Player-2 wins")
    c2_1.style.backgroundColor = "green"
    c2_2.style.backgroundColor = "green"
    c2_3.style.backgroundColor = "green"
    win = true
       
}
else if(document.getElementById(3.1).innerText=='X'
        &&
        document.getElementById(3.2).innerText=='X'
        &&
        document.getElementById(3.3).innerText=='X'
        ){
        alert("Player-2 wins")
        c3_1.style.backgroundColor = "green"
    c3_2.style.backgroundColor = "green"
    c3_3.style.backgroundColor = "green"
    win = true
}
else if(document.getElementById(1.1).innerText=='X'
        &&
        document.getElementById(2.1).innerText=='X'
        &&
        document.getElementById(3.1).innerText=='X'
        ){
        alert("Player-2 wins")
        c1_1.style.backgroundColor = "green"
    c2_1.style.backgroundColor = "green"
    c3_1.style.backgroundColor = "green"
    win = true
}
else if(document.getElementById(1.2).innerText=='X'
        &&
        document.getElementById(2.2).innerText=='X'
        &&
        document.getElementById(3.2).innerText=='X'
        ){
        alert("Player-2 wins")
        c1_2.style.backgroundColor = "green"
    c2_2.style.backgroundColor = "green"
    c3_2.style.backgroundColor = "green"
    win = true
}
else if(document.getElementById(1.3).innerText=='X'
        &&
        document.getElementById(2.3).innerText=='X'
        &&
        document.getElementById(3.3).innerText=='X'
        ){
        alert("Player-2 wins")
        c1_3.style.backgroundColor = "green"
    c2_3.style.backgroundColor = "green"
    c3_3.style.backgroundColor = "green"
    win = true
}
else if(document.getElementById(1.1).innerText=='X'
        &&
        document.getElementById(2.2).innerText=='X'
        &&
        document.getElementById(3.3).innerText=='X'
        ){
        alert("Player-2 wins")
        c1_1.style.backgroundColor = "green"
    c2_2.style.backgroundColor = "green"
    c3_3.style.backgroundColor = "green"
    win = true
}
else if(document.getElementById(1.3).innerText=='X'
        &&
        document.getElementById(2.2).innerText=='X'
        &&
        document.getElementById(3.1).innerText=='X'
        ){
        alert("Player-2 wins")
        c1_3.style.backgroundColor = "green"
    c2_2.style.backgroundColor = "green"
    c3_1.style.backgroundColor = "green"
    win = true
}
}

function reset(){
        document.getElementById("1.1").innerHTML = ""
        document.getElementById("1.2").innerHTML = ""
        document.getElementById("1.3").innerHTML = ""

        document.getElementById("2.1").innerHTML = ""
        document.getElementById("2.2").innerHTML = ""
        document.getElementById("2.3").innerHTML = ""

        document.getElementById("3.1").innerHTML = ""
        document.getElementById("3.2").innerHTML = ""
        document.getElementById("3.3").innerHTML = ""

        document.getElementById("1.1").style.backgroundColor  = ""
        document.getElementById("1.2").style.backgroundColor  = ""
        document.getElementById("1.3").style.backgroundColor  = ""

        document.getElementById("2.1").style.backgroundColor  = ""
        document.getElementById("2.2").style.backgroundColor  = ""
        document.getElementById("2.3").style.backgroundColor  = ""

        document.getElementById("3.1").style.backgroundColor  = ""
        document.getElementById("3.2").style.backgroundColor  = ""
        document.getElementById("3.3").style.backgroundColor  = ""

        sum=0
        win=false
}
