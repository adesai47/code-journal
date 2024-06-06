'use strict';
/* exported data */
const data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};
const savedData = localStorage.getItem('code-journal-data');
if (savedData) {
  const parsedData = JSON.parse(savedData);
  data.view = parsedData.view;
  data.entries = parsedData.entries;
  data.editing = parsedData.editing;
  data.nextEntryId = parsedData.nextEntryId;
}
function saveData() {
  localStorage.setItem('code-journal-data', JSON.stringify(data));
}
window.addEventListener('beforeunload', saveData);
