const SUPABASE_URL = "https://inodjrrjvpmmeoemasgu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_apoipSCp-C_ddztbyfFctg_tajGzTjH";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

async function loadRoutines() {
  const { data, error } = await supabaseClient
    .from("routines")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error(error);
    return;
  }

  renderRoutines(data);
}
function renderRoutines(routines) {
  const list = document.getElementById("routine-list");
  list.innerHTML = "";

  routines.forEach(routine => {
    const li = document.createElement("li");
    li.textContent = `${routine.name} (${routine.level ?? "미지정"})`;
    list.appendChild(li);
  });
}

loadRoutines();
