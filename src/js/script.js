const addBtn = document.getElementById('add');

add.addEventListener('click', () => {
    addNewNote();
});

function addNewNote(){
    const note = document.createElement('div');
    note.classList.add('note');
    
    innerHTML  = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `;

    const editBtn = note.querySelector('.edit');
    const deleteBtn = note.querySelector('.delete');

    const main = notesEl.querySelector('.main');
    const textArea = notesEl.querySelector('textarea');

    //Aqui será responsável por escutar o evento de clicar no botao de editar
    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    });

    textArea.addEventListener('input', (e) => {
        const {value} = e.target;

        main.innerHTML = marked(value);
    })

    document.body.appendChild('note');
    
    
}

