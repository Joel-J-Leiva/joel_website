/** Maps a project or credential status to a chip tone. */
export function statusTone(status = '') {
  const s = status.toLowerCase();
  if (s.startsWith('active')) return 'instrument';
  if (s.includes('progress')) return 'person';
  if (s === 'earned') return 'ok';
  return 'neutral';
}
