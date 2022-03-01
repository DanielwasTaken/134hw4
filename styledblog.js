export{createPost, addPost, noPost, edit}
function createPost(dialog, save, cancel, title, date, summary, list,esave){
    dialog.show();
    esave.style.display="none";
    save.style.display="block";
    title.value = "";
    date.value = "";
    summary.value = "";
}

function addPost(dialog, save, cancel, title, date, summary, list, esave){
    const post = document.createElement("li");
    const text = document.createElement("div");
    const p = document.createElement("p");
    p.innerHTML = title.value+"-"+date.value+"-"+summary.value;
    const edit = document.createElement("button");
    const del = document.createElement("button");
    edit.addEventListener("click", ()=>{editFunc(p,dialog, save, cancel, title, date, summary, list,esave)});
    del.addEventListener("click", ()=>{delFunc(list, post)});
    edit.style.backgroundImage= "url('./images/pencil.png')";
    edit.style.width= "20px";
    edit.style.height="20px";
    del.style.backgroundImage= "url('./images/eraser.png')";
    del.style.width= "20px";
    del.style.height="20px";
    text.appendChild(p);
    p.appendChild(edit);
    p.appendChild(del);
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
    esave.addEventListener("click", function listener(){edit(p,dialog, save, cancel, title, date, summary, list,esave)},{once:true});

    
}

function edit(p,dialog, save, cancel, title, date, summary, list,esave){
    p.innerHTML=title.value+"-"+date.value+"-"+summary.value;
    dialog.close();
}
function delFunc(list,post){
    list.removeChild(post);
    dialog.close();
}