
let turn='X';
let all=document.querySelectorAll('.all');
let playerCount=0;
let computerCount=0;

// function for changing turn
function changeTurn(){
    let id;
     turn === 'X'? turn='O':turn='X'
     if(turn==='X'){
         document.querySelector('#computer').classList.remove("active")
         document.querySelector('#player').classList.add("active")
     }
     else if(turn === 'O'){
        document.querySelector('#player').classList.remove("active")
        document.querySelector('#computer').classList.add("active") }
     
}
//new game logic
function restartGame() {
    // location.reload();
    console.log('restart');
    all.forEach(e=>{
        e.innerHTML=''
    })
    isgameover=false;
    count=0;
    document.querySelector(".winner").innerText=''
    if(turn=== 'O'){
        changeTurn();
    }

    
  } 
// function for checking win
function checkingwin(){
    let boxes=document.querySelectorAll('.all');

let wins=[
        [0, 1, 2], // First row
        [3, 4, 5], // Second row
        [6, 7, 8], // Third row
        [0, 3, 6], // First column
        [1, 4, 7], // Second column
        [2, 5, 8], // Third column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6] 
]
    wins.forEach(e=>{
        
        let pos1Val=boxes[e[0]].innerText
        let pos2Val =boxes[e[1]].innerText
        let pos3Val =boxes[e[2]].innerText
        // console.log("boxes value   "+ pos1Val);
        if(pos1Val !== "" &&pos1Val === pos2Val && pos2Val === pos3Val)
        {
            
            document.querySelector(".winner").innerText= pos1Val + ' won'
            isgameover=true;
            if(pos1Val === 'X'){
                playerCount++;
                document.querySelector('#P1').innerText=playerCount;
               
            }
            else if(pos1Val === 'O'){
                computerCount++
                document.querySelector('#P2').innerText=computerCount;

                
            }
            isgameover=true;
            return true
        }
       
       
    })
}

// function isDraw(){
    
//     drawCount++
//     if(drawCount ==9){
//         drawNumbers++
//         iisDraw=true
//         drawCount=0
//         console.log("draw logic");
//         document.querySelector('#Tie').innerHTML=drawNumbers
//     }
// }


let isDraw=false;
let isgameover=false;
let drawNumbers=0;

let count=0;
all.forEach(element=>{
    element.addEventListener('click',()=>{

        if(!isgameover){
        if(element.innerText=== ''){
            element.innerText=turn
            changeTurn();            
            checkingwin();
            console.log(count);
            count++
            if(count == 9){
                isDraw=true;
                count=0;
                drawNumbers++
                document.querySelector('#Tie').innerHTML=drawNumbers
                console.log("drawed");
            }
            
              
            
             }}
    })
})


























