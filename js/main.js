var input_element
var words;
var word_list_container;
var current_word;
var new_word;
var word_list_container_instruction;

words = [
   
   'soccer',
   'football',
   'baseball'
   
];



input_element = document.createElement('input');
input_element.setAttribute('id','display_screen');
input_element.setAttribute('placeholder','Input word then press enter');

input_element.addEventListener('keydown',function(event){
   
       if(event.keyCode === 13){
           new_word = document.createElement('p');
           
           
           new_word.textContent = this.value;
           
           
           if(word_list_container.children.length === 0){
               word_list_container.appendChild(new_word);
           }else if(word_list_container.children.length > 0){
               word_list_container.children[0].parentElement.insertBefore(new_word, word_list_container.children[0]);
           };

           this.value = null;
           
           new_word.addEventListener('dblclick',function(event){
               this.remove();
           });
       };
   
   });

word_list_container = document.createElement('div');
word_list_container.setAttribute('id','wordlist');

word_list_container_instruction = document.createElement('p');
word_list_container_instruction.textContent = 'Double click on a word to delete a word';
word_list_container_instruction.setAttribute('id','instruction');
var create_words = function(element_type,element_id){
   
   var element = document.createElement(element_type);
   element.setAttribute('id',element_id);
   
   word_list_container.appendChild(element);
   
};


document.addEventListener('DOMContentLoaded',function(event){
   
   document.body.appendChild(input_element);
   document.body.appendChild(word_list_container_instruction);
   document.body.appendChild(word_list_container);
   
   for(var i=0; i<words.length; i++){
       
       create_words('p','word_'+i);
       current_word = document.getElementById('word_'+i);
       current_word.textContent = words[i];
       
       current_word.addEventListener('dblclick',function(event){
           this.remove();
           
       });
       
   };
   