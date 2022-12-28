let heading=document.createElement("h1");
heading.innerText="CallBack Hell";
heading.style.backgroundColor="purple";
heading.style.color="black";
heading.style.textAlign="center";
heading.style.fontSize="70px"

let fun=document.createElement("p");
fun.style.color="black";
fun.style.textAlign="center";
fun.style.fontSize="30px";
setTimeout(()=>{
    fun.innerHTML="10";
    setTimeout(()=>{
        fun.innerHTML="9";
        setTimeout(()=>{
            fun.innerHTML="8"
            setTimeout(()=>{
                fun.innerHTML="7";
                setTimeout(()=>{
                    fun.innerHTML="6";
                    setTimeout(()=>{
                        fun.innerHTML="5";
                        setTimeout(()=>{
                            fun.innerHTML="4";
                            setTimeout(()=>{
                                fun.innerHTML="3";
                                setTimeout(() => {
                                    fun.innerHTML="2";
                                    setTimeout(()=>{
                                        fun.innerHTML="1";
                                        fun.innerHTML="Happy Indipendence Day"
                                        fun.style.fontSize="50px"
                                    },1000)
                                },1000);
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000);
        },1000)
    },1000)
},1000)
heading.appendChild(fun)
document.body.append(heading);
