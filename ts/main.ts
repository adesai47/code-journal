/* global data */

const form = document.getElementById('journal-entry-form') as HTMLFormElement;
const photoUrlInput = document.getElementById('photo-url') as HTMLInputElement;
const photoPreview = document.getElementById(
  'photo-preview',
) as HTMLImageElement;

photoUrlInput.addEventListener('input', () => {
  const url = photoUrlInput.value;
  console.log('Photo URL input changed:', url);
  if (url) {
    photoPreview.src = url;
    console.log('Photo preview updated to:', url);
  } else {
    photoPreview.src = 'images/placeholder-image-square.jpg';
    console.log(`Photo preview reset to placeholder`);
  }
});

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const titleInput = document.getElementById('title') as HTMLInputElement;
  const notesInput = document.getElementById('notes') as HTMLTextAreaElement;

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
