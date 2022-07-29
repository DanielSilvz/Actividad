//aqui va todo el codigo
console.log("Hola mundo")

const deleteTask = (id) => {
    console.log ("eliminando ....", id)
    //buscamos etiqueta ol
    const taskListElement = document.getElementById("task-list")
    //buscamos etiqueta li por el id
    const elementToDelete = document.getElementById(id)
    //eliminamos etiqueta li
    taskListElement.removeChild(elementToDelete)
}



//codigo de ejemplo
const btnElement = document.getElementById("add-task-btn")

if (btnElement) {
    btnElement.addEventListener("click", function() {
        console.log("enviando tarea....")
        //codigo
    })
}

const btnDeleteAll = document.getElementById("delete-all")
btnDeleteAll.addEventListener("click",function() {
    
        var mensaje;
        var opcion = confirm("Mira tu lo vas a borrar si o no?");

        if (opcion == true){
            const music = new Audio('death.mp3');
            music.play();
            
            const deleteTask = (id) => {
                console.log ("eliminando ....", id)
              
        }
        document.getElementById("borrado").innerHTML = mensaje;

        
    }       
}) 







//agarrar el element form
const formElement = document.getElementById("task-form")

if (formElement) {
    console.log("formulario funcionando..")
    //modificar el evento
    formElement.addEventListener("submit",function(evento) {
        event.preventDefault()
        console.log(event.target)

        //extraer los datos nombre de la tarea y prioridad
        const inputElement =document.getElementById("taskName")
        console.log(inputElement.value)

        if ( inputElement.value !== "") {
            //buscar el select
            const selectElement = document.getElementById("taskPriority")
            console.log(selectElement.value)
|           //tengo los valores del input y del select
            console.log( inputElement.value)
            console.log( selectElement.value)

            //agregar nuevo list a lista
            const taskListElement = document.getElementById("task-list")

            let mayorID= 1

            //verificamos cantidad de hijos de una etiqueta
            if(taskListElement.children.length > 0) {
                //buscar hijo
                const ultimoHijo= taskListElement.children[taskListElement.children.length -1]
                mayorID += parseInt(ultimoHijo.id) 
                //incrementar

            }

            
            const taskDate = document.getElementById("taskDate")
            
            selectElement.value

            if(selectElement.value == 1 || selectElement.value == 2){

                taskListElement.innerHTML += `
            <li id="${mayorID}"   class="list-group-item d-flex justify-content-between align-items-center"
            style="word-break: keep-all; background-color: blue; color: white;">
            <div class="mx-2 text-start" style="flex: 1;">
                <div class="fw-bold">${inputElement.value}</div>
                <div> ${taskDate.value}</div>
            <span class="badge bg-primary rounded-pill mx-1">${selectElement.value}</span>

            <button onclick="deleteTask(${mayorID})" type="button" class="btn btn-outline-danger btn-sm">
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px"
                    height="20px">
                    <path
                        d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
                </svg>

            </button>
        </li>
            `
            }
            if(selectElement.value == 3 || selectElement.value == 4) {
                taskListElement.innerHTML += `
            <li id="${mayorID}"   class="list-group-item d-flex justify-content-between align-items-center"
            style="word-break: keep-all; background-color: yellow; color: white;">
            <div class="mx-2 text-start" style="flex: 1;">
                <div class="fw-bold">${inputElement.value}</div>
                <div> ${taskDate.value}</div>
            <span class="badge bg-primary rounded-pill mx-1">${selectElement.value}</span>

            <button onclick="deleteTask(${mayorID})" type="button" class="btn btn-outline-danger btn-sm">
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px"
                    height="20px">
                    <path
                        d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
                </svg>

            </button>
        </li>
            `
            }
            if (selectElement.value == 5) {
                taskListElement.innerHTML += `
            <li id="${mayorID}"   class="list-group-item d-flex justify-content-between align-items-center"
            style="word-break: keep-all; background-color: red; color: white;">
            <div class="mx-2 text-start" style="flex: 1;">
                <div class="fw-bold">${inputElement.value}</div>
                <div> ${taskDate.value}</div>
            <span class="badge bg-primary rounded-pill mx-1">${selectElement.value}</span>

            <button onclick="deleteTask(${mayorID})" type="button" class="btn btn-outline-danger btn-sm">
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px"
                    height="20px">
                    <path
                        d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
                </svg>

            </button>
        </li>
            `
            }
                
            

            
        }else {
            alert (" Debes especificar una tarea bobo :T ")
        }
    })
}



                    