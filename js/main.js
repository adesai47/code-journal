'use strict';
/* global data */
const titleInput = document.getElementById('title');
const notesInput = document.getElementById('notes');
const form = document.getElementById('journal-entry-form');
const photoUrlInput = document.getElementById('photo-url');
const photoPreview = document.getElementById('photo-preview');
photoUrlInput.addEventListener('input', () => {
  const url = photoUrlInput.value;
  if (url) {
    photoPreview.src = url;
  } else {
    photoPreview.src = 'images/placeholder-image-square.jpg';
  }
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newEntry = {
    entryId: data.nextEntryId++,
    title: titleInput.value,
    photoUrl: photoUrlInput.value,
    notes: notesInput.value,
  };
  data.entries.push(newEntry);
  saveData();
  form.reset();
  photoPreview.src = 'images/placeholder-image-square.jpg';
});
