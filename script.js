var jsonData;
var items1=[];
var request = new XMLHttpRequest()

request.open('GET', 'https://api.github.com/users/goschevski/repos',true)
request.onload =function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  jsonData=data;
  console.log(data);


  if (request.status >= 200 && request.status < 400) {
    
    //my code here
    //console.log(data);
    document.getElementById("noRepos").innerHTML=data.length;
    let prikaz=document.getElementById("show1");
    document.getElementById("loader").style.display = "none";
    for(let i=0;i<3;i++){
        if(data[i].fork==true){
            prikaz.innerHTML+=`<li class="fork"><a href="${data[i].html_url}">${data[i].name}</a></li>`    
            items1.push(jsonData[i].name);  
        } else{
            prikaz.innerHTML+=`<li class="source"><a href="${data[i].html_url}">${data[i].name}</a></li>`
            items1.push(jsonData[i].name);
        }
        
    }
    //prikaz.innerHTML+=`<li><button onclick="showMore('allObj')">Show more</button></li>`
    document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore('publicObj')">Show more</button>`
    document.getElementById("inp").value="";
    
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
            document.getElementById("forButton").innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
            if(counter3<3){
                if(jsonData[i].fork==true){
                    prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
                } else{
                    prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
                }
                
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
                //prikaz.innerHTML+=`<li><button onclick="showMore('allObj')">Show more</button></li>`
                document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore('allObj')">Show more</button>`
                document.getElementById("inp").value="";
            }
            break;
        case "forkObj":
            prikaz.innerHTML="";
            document.getElementById("forButton").innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){

            if(jsonData[i].fork==true && counter3<3){
                prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
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
                //prikaz.innerHTML+=`<li><button onclick="showMore('forkObj')">Show more</button></li>`
                document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore('forkObj')">Show more</button>`
                document.getElementById("inp").value="";
            }
            break;
        case "sourcesObj":
            prikaz.innerHTML="";
            document.getElementById("forButton").innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){

            if(jsonData[i].fork==false && counter3<3){
                prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
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
                //prikaz.innerHTML+=`<li><button onclick="showMore('sourcesObj')">Show more</button></li>`
                document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore(sourcesObj')">Show more</button>`
                document.getElementById("inp").value="";
            }
            break;
        case "privateObj":
            prikaz.innerHTML="";
            document.getElementById("forButton").innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){

            if(jsonData[i].private==true && counter3<3){
                if(jsonData[i].fork==true){
                    prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
                } else{
                    prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
                }
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
                //prikaz.innerHTML+=`<li><button onclick="showMore('privateObj')">Show more</button></li>`
                document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore('privateObj')">Show more</button>`
                document.getElementById("inp").value="";
            }
            break;
        case "publicObj":
            prikaz.innerHTML="";
            document.getElementById("forButton").innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){

            if(jsonData[i].private==false && counter3<3){
                if(jsonData[i].fork==true){
                    prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
                } else{
                    prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
                }
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
                //prikaz.innerHTML+=`<li><button onclick="showMore('publicObj')">Show more</button></li>`
                document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore('publicObj')">Show more</button>`
                document.getElementById("inp").value="";
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
    prikaz.innerHTML+=`<li><button onclick="showMore('${uslov}')">Show more</button></li>`*/
}


function showMore(uslov){
    let counter=0;
    let counter3=0;
    let prikaz=document.getElementById("show1");
    switch(uslov){
        case "allObj":
            prikaz.innerHTML="";
            document.getElementById("forButton").innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
                if(jsonData[i].fork==true){
                    prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
                } else{
                    prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                counter3++;
                items1.push(jsonData[i].name);
                }
            }
            if(counter<3){
            }
            else
            {
                //prikaz.innerHTML+=`<li><button onclick="showLess('allObj')">Show less</button></li>`
                document.getElementById("forButton").innerHTML=`<button id="load" onclick="showLess('allObj')">Show less</button>`
                document.getElementById("inp").value="";
            }
            break;
        case "publicObj":
            prikaz.innerHTML="";
            document.getElementById("forButton").innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
                if(jsonData[i].private==false){
                    if(jsonData[i].fork==true){
                        prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                    counter++;
                    counter3++;
                    items1.push(jsonData[i].name);
                    } else{
                        prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                    counter++;
                    counter3++;
                    items1.push(jsonData[i].name);
                    }
                }
            }
            if(counter<3){
            }
            else
            {
                //prikaz.innerHTML+=`<li><button onclick="showLess('publicObj')">Show less</button></li>`
                document.getElementById("forButton").innerHTML=`<button id="load" onclick="showLess('publicObj')">Show less</button>`
                document.getElementById("inp").value="";
            }
            break;
        case "privateObj":
            prikaz.innerHTML="";
            document.getElementById("forButton").innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
                if(jsonData[i].private==true){
                    if(jsonData[i].fork==true){
                        prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                    counter++;
                    counter3++;
                    items1.push(jsonData[i].name);
                    } else{
                        prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                    counter++;
                    counter3++;
                    items1.push(jsonData[i].name);
                    }
                }
            }
            if(counter<3){
            }
            else
            {
                //prikaz.innerHTML+=`<li><button onclick="showLess('privateObj')">Show less</button></li>`
                document.getElementById("forButton").innerHTML=`<button id="load" onclick="showLess('privateObj')">Show less</button>`
                document.getElementById("inp").value="";
            }
            break;
        case "sourcesObj":
            prikaz.innerHTML="";
            document.getElementById("forButton").innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
                if(jsonData[i].fork==false){
                prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                items1.push(jsonData[i].name);
                }
            }
            if(counter<3){
            }
            else
            {
                //prikaz.innerHTML+=`<li><button onclick="showLess('sourcesObj')">Show less</button></li>`
                document.getElementById("forButton").innerHTML=`<button id="load" onclick="showLess('sourcesObj')">Show less</button>`
                document.getElementById("inp").value="";
            }
            break;
        case "forkObj":
            prikaz.innerHTML="";
            document.getElementById("forButton").innerHTML="";
            items1=[];
            for(let i=0;i<jsonData.length;i++){
                if(jsonData[i].fork==true){
                prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
                counter++;
                items1.push(jsonData[i].name);
                }
            }
            if(counter<3){
            }
            else
            {
                //prikaz.innerHTML+=`<li><button onclick="showLess('forkObj')">Show less</button></li>`
                document.getElementById("forButton").innerHTML=`<button id="load" onclick="showLess('forkObj')">Show less</button>`
                document.getElementById("inp").value="";
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
    prikaz.innerHTML+=`<li><button onclick="showLess('${uslov}')">Show less</button></li>`*/
}

function showFork(){
    let counter=0;
    let counter3=0;
    items1=[];
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    document.getElementById("but5").style.borderBottom="solid red";
    document.getElementById("but2").style.border="none";
    document.getElementById("but3").style.border="none";
    document.getElementById("but4").style.border="none";
    document.getElementById("but1").style.border="none";
    document.getElementById("forButton").innerHTML="";
    
   for(let i=0;i<jsonData.length;i++){

       if(jsonData[i].fork==true && counter3<3){
           prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
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
        //prikaz.innerHTML+=`<li><button onclick="showMore('forkObj')">Show more</button></li>`
        document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore('forkObj')">Show more</button>`
        document.getElementById("inp").value="";
    }
}

function showSources(){
    let counter=0;
    let counter3=0;
    items1=[];
    document.getElementById("but4").style.borderBottom="solid red";
    document.getElementById("but2").style.border="none";
    document.getElementById("but3").style.border="none";
    document.getElementById("but1").style.border="none";
    document.getElementById("but5").style.border="none";
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    document.getElementById("forButton").innerHTML="";
    
   for(let i=0;i<jsonData.length;i++){

       if(jsonData[i].fork==false && counter3<3){
           prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
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
         //prikaz.innerHTML+=`<li><button onclick="showMore('sourcesObj')">Show more</button></li>`
         document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore('sourcesObj')">Show more</button>`
         document.getElementById("inp").value="";
    }
}

function showPublic(){
    let counter=0;
    let counter3=0;
    items1=[];
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    document.getElementById("but2").style.borderBottom="solid red";
    document.getElementById("but1").style.border="none";
    document.getElementById("but3").style.border="none";
    document.getElementById("but4").style.border="none";
    document.getElementById("but5").style.border="none";
    document.getElementById("forButton").innerHTML="";
    
   for(let i=0;i<jsonData.length;i++){

       if(jsonData[i].private==false && counter3<3){
        if(jsonData[i].fork==true){
            prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
        counter++;
        counter3++;
        items1.push(jsonData[i].name);
        } else{
            prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
        counter++;
        counter3++;
        items1.push(jsonData[i].name);
        }
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
        //prikaz.innerHTML+=`<li><button onclick="showMore('publicObj')">Show more</button></li>`
        document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore('publicObj')">Show more</button>`
        document.getElementById("inp").value="";
    }
}

function showPrivate(){
    let counter=0;
    let counter3=0;
    items1=[];
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    document.getElementById("but3").style.borderBottom="solid red";
    document.getElementById("but2").style.border="none";
    document.getElementById("but1").style.border="none";
    document.getElementById("but4").style.border="none";
    document.getElementById("but5").style.border="none";
    document.getElementById("forButton").innerHTML="";
    
   for(let i=0;i<jsonData.length;i++){

       if(jsonData[i].private==true && counter3<3){
        counter++;
        counter3++;
        if(jsonData[i].fork==true){
            prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
 
        items1.push(jsonData[i].name);
        } else{
            prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
        items1.push(jsonData[i].name);
        }
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
    document.getElementById("inp").value="";
   }else{
    //prikaz.innerHTML+=`<li><button onclick="showMore('privateObj')">Show more</button></li>`
    document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore('privateObj')">Show more</button>`
    document.getElementById("inp").value="";
   }
  
}

function showAll(){
    let counter=0;
    let counter3=0;
    items1=[];
    let prikaz=document.getElementById("show1");
    prikaz.innerHTML="";
    document.getElementById("but1").style.borderBottom="solid red";
    document.getElementById("but2").style.border="none";
    document.getElementById("but3").style.border="none";
    document.getElementById("but4").style.border="none";
    document.getElementById("but5").style.border="none";
    document.getElementById("forButton").innerHTML="";
    
   for(let i=0;i<jsonData.length;i++){

       if(counter3<3){
        if(jsonData[i].fork==true){
            prikaz.innerHTML+=`<li class="fork"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
        counter++;
        counter3++;
        items1.push(jsonData[i].name);
        } else{
            prikaz.innerHTML+=`<li class="source"><a href="${jsonData[i].html_url}">${jsonData[i].name}</a></li>`
        counter++;
        counter3++;
        items1.push(jsonData[i].name);
        }
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
    //prikaz.innerHTML+=`<li><button onclick="showMore('allObj')">Show more</button></li>`
    document.getElementById("forButton").innerHTML=`<button id="load" onclick="showMore('allObj')">Show more</button>`
    document.getElementById("inp").value="";
   }
  
}

function fuzzy(){
    let prikaz=document.getElementById("show1");  
    console.log(items1);  
    let dug=document.getElementById("forButton").innerHTML;
    if(document.getElementById("inp").value==''){
        prikaz.innerHTML="";
        items1.forEach(item=>{
            jsonData.forEach(jdata=>{
                if(item==jdata.name){
                    if(jdata.fork==true){
                        prikaz.innerHTML+=`<li class="fork"><a href="${jdata.html_url}">${jdata.name}</a></li>`
                    } else{
                        prikaz.innerHTML+=`<li class="source"><a href="${jdata.html_url}">${jdata.name}</a></li>`
                    }
                }
            })
        })
    }else{
        prikaz.innerHTML="";
        let rez=fuzzysort.go(document.getElementById("inp").value,items1);
        console.log(rez);
        for(let i=0;i<rez.length;i++){
            jsonData.forEach(jdata=>{
                if(rez[i].target==jdata.name){
                    if(jdata.fork==true){
                        //prikaz.innerHTML+=`<li class="fork"><a href="${jdata.html_url}">${jdata.name}</a></li>`
                        prikaz.innerHTML+=`<li class="fork"><a href="${jdata.html_url}">${fuzzysort.highlight(rez[i])}</a></li>`
                    } else{
                        //prikaz.innerHTML+=`<li class="source"><a href="${jdata.html_url}">${jdata.name}</a></li>`
                        prikaz.innerHTML+=`<li class="source"><a href="${jdata.html_url}">${fuzzysort.highlight(rez[i])}</a></li>`
                    }
                }
            })
        }
    }
    //console.log(document.getElementById("inp").value);
    //console.log(items1);
    
   
   
}
