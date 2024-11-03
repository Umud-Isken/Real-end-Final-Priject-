let addComputer = document.getElementById("addComputer");
let table = document.querySelector(".tableBody");
let priceSort = document.getElementById("priceSort");

addComputer.addEventListener("click", function () {
    let newItem = {
        category: document.getElementById("category").value,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        isNew: document.getElementById("isNew").value,
        image: document.getElementById("image").value,
        ram: document.getElementById("ram").value,
        processor: document.getElementById("processor").value,
        storage: document.getElementById("storage").value,
        storageType: document.getElementById("storageType").value,
        os: document.getElementById("os").value,
        videoCard: document.getElementById("videoCard").value
    };

    saveComputer(newItem);
    addTableRow(newItem);
    clearInputFields();

    let modal = bootstrap.Modal.getInstance(document.getElementById("exampleModal"));
    if (modal) {
        modal.hide();
    }

    window.location.href = "./index.html";
});

function saveComputer(computer) {
    let computers = JSON.parse(localStorage.getItem("computers")) || [];
    computers.push(computer);
    localStorage.setItem("computers", JSON.stringify(computers));
}

function loadComputers() {
    let computers = JSON.parse(localStorage.getItem("computers")) || [];
    computers.forEach((computer, index) => addTableRow(computer, index));
}

function addTableRow(computer, index) {
    let newItem = `
        <tr class="ththt" data-index="${index}">
            <th scope="col">${index + 1}</th>
            <th scope="col"><p class="nameOfcomp">${computer.category}</p></th>
            <th class="d-none" scope="col"><p class="kateqoryOfrow">${computer.name}</p></th>
            <th class="d-none" scope="col"><p class="deskOfrow">${computer.description}</p></th>
            <th class="d-none" scope="col"><p class="isnweofrow">${computer.isNew}</p></th>
            <th scope="col"><img class="tableImage" src="${computer.image}" alt=""></th>
            <th class="d-none" scope="col"><p class="ramOfrow">${computer.ram}</p></th>
            <th class="d-none" scope="col"><p class="prosessorOfrow">${computer.processor}</p></th>
            <th class="d-none" scope="col"><p class="storageOfRow">${computer.storage}</p></th>
            <th class="d-none" scope="col"><p class="storageTypeOfrow">${computer.storageType}</p></th>
            <th class="d-none" scope="col"><p class="osOfrow">${computer.os}</p></th>
            <th class="d-none" scope="col"><p class="videoCardOfRow">${computer.videoCard}</p></th>
            <th scope="col"><p class="priceOfcomp" style="color: red">${computer.price}</p></th>
            <th scope="col">
                <button class="btn btn-danger btns22 removeBtn">Sil</button>
                <button class="btn btn-primary btns2" data-bs-toggle="modal" data-bs-target="#exampleModal2">Redakt Ele</button>
            </th>
        </tr>
    `;
    table.innerHTML += newItem;

    if (computer) {
        document.querySelector(".pp").style.display = "none";
    }
}

function clearInputFields() {
    document.getElementById("category").value = '';
    document.getElementById("name").value = '';
    document.getElementById("price").value = '';
    document.getElementById("description").value = '';
    document.getElementById("isNew").value  = '';
    document.getElementById("image").value = '';
    document.getElementById("ram").value = '';
    document.getElementById("processor").value = '';
    document.getElementById("storage").value = '';
    document.getElementById("storageType").value = '';
    document.getElementById("os").value = '';
    document.getElementById("videoCard").value = '';
}

function removeComputer(index) {
    let computers = JSON.parse(localStorage.getItem("computers")) || [];
    confirm("Do you sure remove computer?");
    computers.splice(index, 1);
    localStorage.setItem("computers", JSON.stringify(computers));
}

loadComputers();

table.addEventListener("click", function (e) {
    if (e.target.classList.contains("removeBtn")) {
        let row = e.target.closest("tr");
        let index = row.dataset.index;
        removeComputer(index);
        row.remove();
        window.location.href = "./index.html";
    }

    if (e.target.classList.contains("tableImage")) {
        let imageSrc = e.target.src;
        let modal = `
            <div class="modal-dialog d-flex align-items-center justify-content-center my-5">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body d-flex align-items-center justify-content-center">
                        <img style="width: 100%" src="${imageSrc}" alt="Picture is not the download">
                    </div>
                </div>
            </div>
        `;
        document.querySelector(".modal2").innerHTML = modal;
        new bootstrap.Modal(document.querySelector(".modal2")).show();
    }
});

document.getElementById("image").addEventListener("input", function () {
    let imageSrc = this.value;
    document.getElementById("imagePreview").src = imageSrc;
    document.getElementById("imagePreview").style.width = "200px";
});

document.getElementById("btn").addEventListener("click", function () {
    clearInputFields();
    document.getElementById("imagePreview").src = '';
});

document.querySelectorAll(".btns2").forEach(editbtn => {
    editbtn.addEventListener('click', function() {
        let tr = this.closest("tr");
        let editingIndex = tr.dataset.index;

        document.getElementById("categoryEdit").value = tr.querySelector(".nameOfcomp").textContent;
        document.getElementById("nameEdit").value = tr.querySelector(".kateqoryOfrow").textContent;
        document.getElementById("priceEdit").value = tr.querySelector(".priceOfcomp").textContent;
        document.getElementById("descriptionEdit").value = tr.querySelector(".deskOfrow").textContent;
        document.getElementById("isNewEdit").value = tr.querySelector(".isnweofrow").textContent;
        document.getElementById("imageEdit").value = tr.querySelector(".tableImage").src;
        document.getElementById("ramEdit").value = tr.querySelector(".ramOfrow").textContent;
        document.getElementById("processorEdit").value = tr.querySelector(".prosessorOfrow").textContent;
        document.getElementById("storageEdit").value = tr.querySelector(".storageOfRow").textContent;
        document.getElementById("storageTypeEdit").value = tr.querySelector(".storageTypeOfrow").textContent;
        document.getElementById("osEdit").value = tr.querySelector(".osOfrow").textContent;
        document.getElementById("videoCardEdit").value = tr.querySelector(".videoCardOfRow").textContent;

        let imageSrcEdit = tr.querySelector(".tableImage").src;
        document.getElementById("imagePreviewEdit").src = imageSrcEdit;
        document.getElementById("imagePreviewEdit").style.width = "200px";

        document.querySelector(".saveChangesBtn").setAttribute("data-editing-index", editingIndex);
    });
});

document.querySelector(".saveChangesBtn").addEventListener('click', function() {
    let editingIndex = parseInt(this.getAttribute("data-editing-index"));
    let updatedComputer = {
        category: document.getElementById("categoryEdit").value,
        name: document.getElementById("nameEdit").value,
        price: document.getElementById("priceEdit").value,
        description: document.getElementById("descriptionEdit").value,
        isNew: document.getElementById("isNewEdit").value,
        image: document.getElementById("imageEdit").value,
        ram: document.getElementById("ramEdit").value,
        processor: document.getElementById("processorEdit").value,
        storage: document.getElementById("storageEdit").value,
        storageType: document.getElementById("storageTypeEdit").value,
        os: document.getElementById("osEdit").value,
        videoCard: document.getElementById("videoCardEdit").value
    };

    let computers = JSON.parse(localStorage.getItem("computers")) || [];
    if (editingIndex >= 0 && editingIndex < computers.length) {
        computers[editingIndex] = updatedComputer;
        localStorage.setItem("computers", JSON.stringify(computers));
    }

    window.location.href = "./index.html";
});

document.querySelector(".btnbtntb").addEventListener("click", clearEditFields);

function clearEditFields() {
    document.getElementById("categoryEdit").value = '';
    document.getElementById("nameEdit").value = '';
    document.getElementById("priceEdit").value = '';
    document.getElementById("descriptionEdit").value = '';
    document.getElementById("isNewEdit").value = '';
    document.getElementById("imageEdit").value = '';
    document.getElementById("imagePreviewEdit").src = '';
    document.getElementById("ramEdit").value = '';
    document.getElementById("processorEdit").value = '';
    document.getElementById("storageEdit").value = '';
    document.getElementById("storageTypeEdit").value = '';
    document.getElementById("osEdit").value = '';
    document.getElementById("videoCardEdit").value = '';
}

document.querySelector(".btnbt").addEventListener("click", function () {
    let searchInput = document.querySelector(".SearchInp").value.toLowerCase();
    let computers = JSON.parse(localStorage.getItem("computers")) || [];
    
    let filtered = computers.filter((computer) => {
        return computer.category.toLowerCase().includes(searchInput);
    });

    if (filtered.length === 0) {
        document.querySelector(".tableBody").innerHTML = `<tr><p  style="width:200px; position:absolute;left:650px;top:270px;color:black;" class="ccc " colspan="6">No computers found</p></tr>`;
        return;
    }

    table.innerHTML = "";
    filtered.forEach((item, index) => addTableRow(item, index));
    
    document.querySelector(".SearchInp").value = "";
});


//h1h1hhh1
