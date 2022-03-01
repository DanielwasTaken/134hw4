export{createPost, addPost, noPost, edit}
function createPost(dialog, save, cancel, title, date, summary, list,esave){
    dialog.show();
    esave.style.display="none";
    save.style.display="block";
}

function addPost(dialog, save, cancel, title, date, summary, list, esave){
    const post = document.createElement("li");
    const text = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = title.value+"-"+date.value+"-"+summary.value;
    //p.innerHTML = `${title}-${date}-${summary}`;
    const edit = document.createElement("button");
    const del = document.createElement("button");
    edit.addEventListener("click", ()=>{editFunc(p,dialog, save, cancel, title, date, summary, list,esave)});
    del.addEventListener("click", ()=>{delFunc(post)});
    edit.innerHTML = "Edit";
    del.innerHTML = "Delete";
    text.appendChild(p);
    text.appendChild(edit);
    text.appendChild(del);
    post.appendChild(text);
    list.appendChild(post);
    save.removeEventListener("click", ()=>{addPost(dialog, save, cancel, title, date, summary, list,esave)});
    cancel.removeEventListener("click", ()=>{noPost(dialog, save, cancel)});
    dialog.close();

    
}
function noPost(dialog, save, cancel){
    save.removeEventListener("click", ()=>{addPost(dialog, save, cancel, title, date, summary, list)});
    cancel.removeEventListener("click", ()=>{noPost(dialog, save, cancel)});
    dialog.close();
}
function editFunc(p,dialog, save, cancel, title, date, summary, list,esave){
    dialog.show()
    console.log("here");
    esave.style.display="block";
    save.style.display="none";
    //let a=function(){edit(p,dialog, save, cancel, title, date, summary, list,esave)}
    esave.addEventListener("click", function listener(){edit(p,dialog, save, cancel, title, date, summary, list,esave)},{once:true});
    //esave.addEventListener("click", a=()=>{edit(p,dialog, save, cancel, title, date, summary, list,esave)});
    //esave.addEventListener("click", a);
    
    

    
}

function edit(p,dialog, save, cancel, title, date, summary, list,esave){
    //p.innerHTML = document.createTextNode(title.value+"-"+date.value+"-"+summary.value);
    p.innerHTML=title.value+"-"+date.value+"-"+summary.value;
    //esave.removeEventListener("click", edit(p,dialog, save, cancel, title, date, summary, list,esave));
    //esave.removeEventListener("click", a);
    //esave.replaceWith(esave.cloneNode(true));
    dialog.close();
}