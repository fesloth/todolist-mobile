      // Memuat notes yang tersimpan saat halaman dimuat
      loadNotes();

      function loadNotes() {
        const notesData = localStorage.getItem("notes");
    
        if (notesData) {
            const notes = JSON.parse(notesData);
            notes.forEach((note) => {
                createNoteElement(note);
            });
        }
    }

      function createNoteElement(text) {
        const notesContainer = document.querySelector(".notes-container");
        const note = document.createElement("div");
        note.className = "input-box";
        note.innerHTML = `
            <p contenteditable="true">${text}</p>
            <img src="images/trash.jpeg" style="width: 40px;" class="delete-note">
        `;
        notesContainer.appendChild(note);
    }

      window.addEventListener("beforeunload", () => {
        const notes = [];
        const noteElements = document.querySelectorAll(".input-box");

        noteElements.forEach((noteElement) => {
          notes.push(noteElement.textContent);
        });

        localStorage.setItem("notes", JSON.stringify(notes));
      });

      const createBtn = document.querySelector(".btn");

      createBtn.addEventListener("click", () => {
        const notesContainer = document.querySelector(".notes-container");
        const inputBox = document.createElement("p");
        const img = document.createElement("img");
        inputBox.className = "input-box"; 
        inputBox.setAttribute("contenteditable", "true");
        img.src = "images/trash.jpeg";
        img.style.width = "40px";

        notesContainer.appendChild(inputBox).appendChild(img);
      });

      const notesContainer = document.querySelector(".notes-container");

      notesContainer.addEventListener("click", function(e){
        if (e.target.tagName === "IMG") {
            e.target.parentElement.remove();
            saveNotes();
        } else if (e.target.tagName === "P") {
            // Tidak perlu perubahan pada event click ini
        }
      });

      function saveNotes() {
        const notes = [];
        const noteElements = document.querySelectorAll(".input-box");

        noteElements.forEach((noteElement) => {
          notes.push(noteElement.textContent);
        });

        localStorage.setItem("notes", JSON.stringify(notes));
      }