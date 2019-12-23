var jsonData;
var items1=[];
var request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users/goschevski/repos', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  jsonData=data;


  if (request.status >= 200 && request.status < 400) {
    
    //my code here
    //console.log(data);
    document.getElementById("noRepos").innerHTML=data.length;
    let prikaz=document.getElementById("show1");

    for(let i=0;i<3;i++){
        prikaz.innerHTML+=`<li><a href="${data[i].html_url}">${data[i].name}</a></li>`
    }
    prikaz.innerHTML+=`<li><button onclick="showMore('allObj')">Load more</button></li>`

    
    /*data.forEach(el=>{
        console.log(el.full_name)
    });*/

    

  } else {
    console.log('error');
  }
}
request.send();


function showLess(uslov){
    let counter=0;
    let counter3=0;
    let prikaz=document.getElementById("show1");
    switch(uslov){
        case "allObj":
            prikaz.innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
            if(counter3<3){
                prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
            } else
                {
                    if(counter3>=3){
                    counter++
                    }
                    else
                    {
                        
                    }
                }        
            }
            document.getElementById("noRepos").innerHTML=counter;
            console.log(counter+" "+counter3);
            if(counter<3){

            }else
            {
                prikaz.innerHTML+=`<li><button onclick="showMore('allObj')">Load more</button></li>`
            }
            break;
        case "forkObj":
            prikaz.innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){

            if(jsonData[i].fork==true && counter3<3){
                prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
            } else
                {
                    if(jsonData[i].fork==true && counter3>=3){
                    counter++
                    }
                    else
                    {
                        
                    }
                }        
            }
            document.getElementById("noRepos").innerHTML=counter;
            console.log(counter+" "+counter3);
            if(counter<3){

            }else
            {
                prikaz.innerHTML+=`<li><button onclick="showMore('forkObj')">Load more</button></li>`
            }
            break;
        case "sourcesObj":
            prikaz.innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){

            if(jsonData[i].fork==false && counter3<3){
                prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
            } else
                {
                    if(jsonData[i].fork==false && counter3>=3){
                    counter++
                    }
                    else
                    {
                        
                    }
                }        
            }
            document.getElementById("noRepos").innerHTML=counter;
            console.log(counter+" "+counter3);
            if(counter<3){

            }else
            {
                prikaz.innerHTML+=`<li><button onclick="showMore('sourcesObj')">Load more</button></li>`
            }
            break;
        case "privateObj":
            prikaz.innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){

            if(jsonData[i].private==true && counter3<3){
                prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
            } else
                {
                    if(jsonData[i].private==true && counter3>=3){
                    counter++
                    }
                    else
                    {
                        
                    }
                }        
            }
            document.getElementById("noRepos").innerHTML=counter;
            console.log(counter+" "+counter3);
            if(counter<3){

            }else
            {
                prikaz.innerHTML+=`<li><button onclick="showMore('privateObj')">Load more</button></li>`
            }
            break;
        case "publicObj":
            prikaz.innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){

            if(jsonData[i].private==false && counter3<3){
                prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
            } else
                {
                    if(jsonData[i].private==false && counter3>=3){
                    counter++
                    }
                    else
                    {
                        
                    }
                }        
            }
            document.getElementById("noRepos").innerHTML=counter;
            console.log(counter+" "+counter3);
            if(counter<3){

            }else
            {
                prikaz.innerHTML+=`<li><button onclick="showMore('publicObj')">Load more</button></li>`
            }
            break;
        default:
            console.log("greska");
            break;

    }
    /*console.log(uslov);
    prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    for(let i=0;i<3;i++){
        prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
    }
    prikaz.innerHTML+=`<li><button onclick="showMore('${uslov}')">Load more</button></li>`*/
}


function showMore(uslov){
    let counter=0;
    let counter3=0;
    let prikaz=document.getElementById("show1");
    switch(uslov){
        case "allObj":
            prikaz.innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
                prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                items1.push(jsonData[i].name);
            }
            if(counter<3){
            }
            else
            {
                prikaz.innerHTML+=`<li><button onclick="showLess('allObj')">Load less</button></li>`
            }
            break;
        case "publicObj":
            prikaz.innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
                if(jsonData[i].private==false){
                prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                items1.push(jsonData[i].name);
                }
            }
            if(counter<3){
            }
            else
            {
                prikaz.innerHTML+=`<li><button onclick="showLess('publicObj')">Load less</button></li>`
            }
            break;
        case "privateObj":
            prikaz.innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
                if(jsonData[i].private==true){
                prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                items1.push(jsonData[i].name);
                }
            }
            if(counter<3){
            }
            else
            {
                prikaz.innerHTML+=`<li><button onclick="showLess('privateObj')">Load less</button></li>`
            }
            break;
        case "sourcesObj":
            prikaz.innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
                if(jsonData[i].fork==false){
                prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                items1.push(jsonData[i].name);
                }
            }
            if(counter<3){
            }
            else
            {
                prikaz.innerHTML+=`<li><button onclick="showLess('sourcesObj')">Load less</button></li>`
            }
            break;
        case "forkObj":
            prikaz.innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
                if(jsonData[i].fork==true){
                prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                items1.push(jsonData[i].name);
                }
            }
            if(counter<3){
            }
            else
            {
                prikaz.innerHTML+=`<li><button onclick="showLess('forkObj')">Load less</button></li>`
            }
            break;
        default:
            console.log("greska");
            break;
    }

    /*console.log(uslov);
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    for(let i=0;i<jsonData.length;i++){
        let prikaz=document.getElementById("show1");
        prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
    }
    prikaz.innerHTML+=`<li><button onclick="showLess('${uslov}')">Load less</button></li>`*/
}

function showFork(){
    let counter=0;
    let counter3=0;
    items1=[];
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    
   for(let i=0;i<jsonData.length;i++){

       if(jsonData[i].fork==true && counter3<3){
           prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
           counter++;
           counter3++;
           items1.push(jsonData[i].name);
       } else
       {
           if(jsonData[i].fork==true && counter3>=3){
               counter++
           }
            else
            {
                        
           }
       }
   }
   document.getElementById("noRepos").innerHTML=counter;
   console.log(counter+" "+counter3);
   if(counter<3){

    }else{
        prikaz.innerHTML+=`<li><button onclick="showMore('forkObj')">Load more</button></li>`
    }
}

function showSources(){
    let counter=0;
    let counter3=0;
    items1=[];
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    
   for(let i=0;i<jsonData.length;i++){

       if(jsonData[i].fork==false && counter3<3){
           prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
           counter++;
           counter3++;
           items1.push(jsonData[i].name);
       } else
       {
           if(jsonData[i].fork==false && counter3>=3){
               counter++
           }
            else
            {
                        
           }
       }
   }
   document.getElementById("noRepos").innerHTML=counter;
   console.log(counter+" "+counter3);
   if(counter<3){

    }else{
         prikaz.innerHTML+=`<li><button onclick="showMore('sourcesObj')">Load more</button></li>`
    }
}

function showPublic(){
    let counter=0;
    let counter3=0;
    items1=[];
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    
   for(let i=0;i<jsonData.length;i++){

       if(jsonData[i].private==false && counter3<3){
           prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
           counter++;
           counter3++;
       } else
       {
           if(jsonData[i].private==false && counter3>=3){
               counter++
               items1.push(jsonData[i].name);
           }
            else
            {
                        
           }
       }
   }
   document.getElementById("noRepos").innerHTML=counter;
   console.log(counter+" "+counter3);
   if(counter<3){

    }else{
        prikaz.innerHTML+=`<li><button onclick="showMore('publicObj')">Load more</button></li>`
    }
}

function showPrivate(){
    let counter=0;
    let counter3=0;
    items1=[];
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    
   for(let i=0;i<jsonData.length;i++){

       if(jsonData[i].private==true && counter3<3){
           prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
           counter++;
           counter3++;
       } else
       {
           if(jsonData[i].private==true && counter3>=3){
               counter++
               items1.push(jsonData[i].name);
           }
            else
            {
                        
           }
       }
   }
   document.getElementById("noRepos").innerHTML=counter;
   console.log(counter+" "+counter3);
   if(counter<3){

   }else{
    prikaz.innerHTML+=`<li><button onclick="showMore('privateObj')">Load more</button></li>`
   }
  
}

function showAll(){
    let counter=0;
    let counter3=0;
    items1=[];
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    
   for(let i=0;i<jsonData.length;i++){

       if(counter3<3){
           prikaz.innerHTML+=`<li><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
           counter++;
           counter3++;
           items1.push(jsonData[i].name);
       } else
       {
           if(counter3>=3){
               counter++
           }
            else
            {
                        
           }
       }
   }
   document.getElementById("noRepos").innerHTML=counter;
   console.log(counter+" "+counter3);
   if(counter<3){

   }else{
    prikaz.innerHTML+=`<li><button onclick="showMore('allObj')">Load more</button></li>`
   }
  
}

function fuzzy(){

    //console.log(items1);
    let rez=fuzzysort.go(document.getElementById("inp").value,items1);
    //let rez1=fuzzysort.single(document.getElementById("inp").value,rez);
    console.log(rez);
    //console.log(fuzzysort.highlight(fuzzysort.go(document.getElementById("inp"),items1),"<b>","</b>"));
}
