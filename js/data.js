'use strict';
/* exported data */
const data = {
  entries: [],
  nextEntryId: 1,
};
const savedData = localStorage.getItem('code-journal-data');
if (savedData) {
  Object.assign(data, JSON.parse(savedData));
}
function saveData() {
  localStorage.setItem('code-journal-data', JSON.stringify(data));
}
window.addEventListener('beforeunload', saveData);
