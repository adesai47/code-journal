'use strict';
/* exported data */
let data = {
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
function saveData() {
  localStorage.setItem('code-journal-data', JSON.stringify(data));
}
window.addEventListener('beforeunload', saveData);
