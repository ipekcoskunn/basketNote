const newTask = document.querySelector('.input-task');
const newAddTaskBtn = document.querySelector('.btn-add-task');
const taskList = document.querySelector('.task-list');

newAddTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click',taskDeleteComplete);

function taskDeleteComplete(e){
    const clickedElement = e.target;

    if (clickedElement.classList.contains('task-btn-completed')){
        clickedElement.parentElement.classList.toggle('task-completed');
    }
    if (clickedElement.classList.contains('task-btn-delete')){
        clickedElement.parentElement.classList.toggle('getLost');
        
        clickedElement.parentElement.addEventListener('transitionend', function(){
            clickedElement.parentElement.remove();
        });
    }
}

function addTask(e){
    e.preventDefault();

    //html yapısını jsde de oluşturmak gerekli

    //div olusturma
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task-item');

    //li olusturma
    const taskLi = document.createElement('li');
    taskLi.classList.add('task-definition');
    taskLi.innerText = newTask.value;
    taskDiv.appendChild(taskLi);


    //tamamlandı butonu ekle
    const taskCompletedBtn = document.createElement('button');
    taskCompletedBtn.classList.add('task-btn');
    taskCompletedBtn.classList.add('task-btn-completed');
    taskCompletedBtn.innerHTML = '<i class="far fa-check-square"></i>';
    taskDiv.appendChild(taskCompletedBtn);

    //sil butonu ekle
    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.classList.add('task-btn');
    taskDeleteBtn.classList.add('task-btn-delete');
    taskDeleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
    taskDiv.appendChild(taskDeleteBtn);

    //görev olustuktan sonra input icini temizledik
    newTask.value = '';

    //ul'ye olusturdugumuz divi ekleyelim
    taskList.appendChild(taskDiv);


}