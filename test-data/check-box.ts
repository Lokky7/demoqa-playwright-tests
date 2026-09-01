export const ALL_NODE_TITLES = [
  'Home',
  'Desktop',
  'Notes',
  'Commands',
  'Documents',
  'WorkSpace',
  'React',
  'Angular',
  'Veu',
  'Office',
  'Public',
  'Private',
  'Classified',
  'General',
  'Downloads',
  'Word File.doc',
  'Excel File.doc',
] as const;

export const CHILD_NODE_TITLES = ALL_NODE_TITLES.filter((title) => title !== 'Home');

// Keys as the page prints them under "You have selected :".
export const ALL_SELECTED_KEYS = [
  'home',
  'desktop',
  'documents',
  'downloads',
  'notes',
  'commands',
  'workspace',
  'office',
  'wordFile',
  'excelFile',
  'react',
  'angular',
  'veu',
  'public',
  'private',
  'classified',
  'general',
];
