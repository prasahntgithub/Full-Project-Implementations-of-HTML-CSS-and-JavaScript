function addNote() {
  const input = document.getElementById("noteInput");
  const value = input.value.trim();
  if (!value) return;

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(value);
  localStorage.setItem("notes", JSON.stringify(notes));
  input.value = "";
  displayNotes();
}

function deleteNote(index) {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function displayNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const list = document.getElementById("noteList");
  list.innerHTML = "";

  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${note} <span onclick="deleteNote(${index})">❌</span>`;
    list.appendChild(li);
  });
}

window.onload = displayNotes;
