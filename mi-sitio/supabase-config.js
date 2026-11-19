// supabase-config.js
const SUPABASE_URL = 'https://fstmquirwwvtrhemzbpl.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_y1nxqrZxtzQ7hDVUOY8Rjw_AlA8mtZs';

// Inicializa el cliente globalmente para usarlo en index.html
// Nota: Asumimos que el script de Supabase ya se cargó en el HTML
window.supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);