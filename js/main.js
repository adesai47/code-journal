'use strict';
/* global data */
const form = document.getElementById('journal-entry-form');
const photoUrlInput = document.getElementById('photo-url');
const photoPreview = document.getElementById('photo-preview');
photoUrlInput.addEventListener('input', () => {
  const url = photoUrlInput.value;
  console.log('Photo URL input changed:', url);
  if (url) {
    photoPreview.src = url;
    console.log('Photo preview updated to:', url);
  } else {
    photoPreview.src = 'images/placeholder.jpg';
    console.log(`Photo preview reset to placeholder`);
  }
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const notesInput = document.getElementById('notes');
  const newEntry = {
    entryId: data.nextEntryId++,
    title: titleInput.value,
    photoUrl: photoUrlInput.value,
    notes: notesInput.value,
  };
  data.entries.push(newEntry);
  saveData();
  form.reset();
});