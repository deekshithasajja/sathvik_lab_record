// All weekly lab information lives here. Edit titles, descriptions or status below.
// pdf: null means the week has no PDF, so no PDF button is ever shown.
// autoStatus: true means the badge shows "Completed" only when the PDF file really exists.

export const student = {
  name: 'S. Sesha Sathvik',
  nameUpper: 'S. SESHA SATHVIK',
  rollNo: '25EU02118',
  branch: 'Artificial Intelligence and Machine Learning (AIML)',
  branchShort: 'AIML',
  section: 'B',
  subject: 'Java Programming Laboratory',
}

const rec = (n) => `Java laboratory record for Week ${n}.`

export const labs = [
  { week: 1, title: 'Week 1 Laboratory Record', status: 'Completed', description: rec(1), pdf: '/pdfs/week1.pdf' },
  { week: 2, title: 'Week 2 Laboratory Record', status: 'Completed', description: rec(2), pdf: '/pdfs/week2.pdf' },
  { week: 3, title: 'Week 3 Laboratory Record', status: 'Completed', description: rec(3), pdf: '/pdfs/week3.pdf' },
  { week: 4, title: 'No Tasks Were Assigned', status: 'No Tasks Assigned', description: 'No tasks were assigned in Week 4.', pdf: null },
  { week: 5, title: 'No Tasks Were Assigned', status: 'No Tasks Assigned', description: 'No tasks were assigned in Week 5.', pdf: null },
  { week: 6, title: 'Week 6 Laboratory Record', status: 'Completed', description: rec(6), pdf: '/pdfs/week6.pdf' },
  { week: 7, title: 'Week 7 Laboratory Record', status: 'Completed', description: rec(7), pdf: '/pdfs/week7.pdf' },
  { week: 8, title: 'Week 8 Laboratory Record', status: 'Completed', description: rec(8), pdf: '/pdfs/week8.pdf' },
  { week: 9, title: 'Week 9 Laboratory Record', status: 'Completed', description: rec(9), pdf: '/pdfs/week9.pdf' },
  { week: 10, title: 'Week 10 Laboratory Record', status: 'Completed', description: rec(10), pdf: '/pdfs/week10.pdf' },
  { week: 11, title: 'Week 11 Laboratory Record', status: 'PDF Pending', autoStatus: true, description: rec(11), pdf: '/pdfs/week11.pdf' },
  { week: 12, title: 'Week 12 Laboratory Record', status: 'PDF Pending', autoStatus: true, description: rec(12), pdf: '/pdfs/week12.pdf' },
]
