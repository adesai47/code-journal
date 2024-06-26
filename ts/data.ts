/* exported data */

interface JournalEntry {
  entryId: number;
  title: string;
  photoUrl: string;
  notes: string;
}

interface DataModel {
  view: string;
  entries: JournalEntry[];
  editing: JournalEntry | null;
  nextEntryId: number;
}

let data: DataModel = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

const savedData = localStorage.getItem('code-journal-data');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  data = parsedData;
}

function saveData(): void {
  localStorage.setItem('code-journal-data', JSON.stringify(data));
}

window.addEventListener('beforeunload', saveData);
