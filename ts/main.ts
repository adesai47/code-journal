/* global data */

const titleInput = document.getElementById('title') as HTMLInputElement;
const notesInput = document.getElementById('notes') as HTMLTextAreaElement;
const form = document.getElementById('journal-entry-form') as HTMLFormElement;
const photoUrlInput = document.getElementById('photo-url') as HTMLInputElement;
const photoPreview = document.getElementById(
  'photo-preview',
) as HTMLImageElement;

photoUrlInput.addEventListener('input', () => {
  const url = photoUrlInput.value;
  if (url) {
    photoPreview.src = url;
  } else {
    photoPreview.src = 'images/placeholder-image-square.jpg';
  }
});

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const newEntry: JournalEntry = {
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
