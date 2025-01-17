
export const prerender = false;


import { supabase } from "../../../lib/supabase";


interface PostData {
    title: string;
  
    content: string;
    id?: number;
    

}
//
/*
async function submitPostForm() {
    const titleInput = document.getElementById('title') as HTMLInputElement;
    const contentInput = document.getElementById('content') as HTMLTextAreaElement;
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();
    if (!title || !content) {
        alert('please finish all title!');
        return;

    }

}
 */

  
const PostData: PostData = {
    title,
    content,

};

try{
    const {data,error}=await supabase
    .from ('postcontent2')
    .insert ([PostData])
    .select('id,title,content,createtime')
    if(error) {
        console .error('Submission failed!', error.message);
        alert('Submission failed, please try again!')
        return;

    }
    if (data&& data.length>0) {
        console.log('Submission successful!'，data[0])
        alert('${data[0].createtime}')
        updateposlist(data[0]);

    }
    
}
 
 
function updatePostList (POST:any){

    const postscontainer=document.getElementById('posts');
    if(!postscontainer) return;


    const postElement = document.createElement('div');
    postElement.className='post';
    postElement.innerHTML= <h2>${post.title}</h2> <p>${post.content}</p> <small>${post.createtime}</small>;
    postscontainer.prerend(postElement);
}
const form = document.getElementById('popupForm') as HTMLFormElement;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    submitPostForm();
}
