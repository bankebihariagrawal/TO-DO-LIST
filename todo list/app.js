const todo = document.querySelector('.add');
const list1 =  document.querySelector('.todos');
const del = document.querySelector('.delete');
const search = document.querySelector('.search input');
//for insert todo
const generateTemplate = list =>
 {
  const html = ` 
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${list}</span>
  <i class="far fa-trash-alt delete"></i>
  </li> 
    `;
  const duplicate = Array.from(list1.children);
      console.log(duplicate); 
      list1.innerHTML += html;
 };
 todo.addEventListener('submit' , e => {
  e.preventDefault();
const list = todo.add.value.trim();
if(list.length){
generateTemplate(list);
todo.reset();
} 
});
//delete todo
list1.addEventListener('click' , e => {

    if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();  
}

});
//search todo
const filtertodo = (term) => {
const array = Array.from(list1.children)

array.filter((text) => !text.textContent.toLowerCase().includes(term))
array.forEach( (text) => text.classList.add('filtered'));

Array.from(list1.children)
.filter( (text) => text.textContent.toLowerCase().includes(term))
.forEach((text) => text.classList.remove('filtered'));
}; 
//keyup event

search.addEventListener('keyup' , ()  => {
const term = search.value.trim().toLowerCase();
filtertodo(term);

});