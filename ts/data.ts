/* exported data */

interface JournalEntry {
  entryId: number;
  title: string;
  photoUrl: string;
  notes: string;
}

interface DataModel {
  entries: JournalEntry[];
  nextEntryId: number;
}

const data: DataModel = {
  entries: [],
  nextEntryId: 1,
};

const savedData = localStorage.getItem('code-journal-data');
if (savedData) {
  Object.assign(data, JSON.parse(savedData));
}

function saveData(): void {
  localStorage.setItem('code-journal-data', JSON.stringify(data));
}

window.addEventListener('beforeunload', saveData);
