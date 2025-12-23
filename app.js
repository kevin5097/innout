// 1. Supabase 프로젝트 정보
const SUPABASE_URL = "https://inodjrrjvpmmeoemasgu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_apoipSCp-C_ddztbyfFctg_tajGzTjH";

// 2. Supabase 클라이언트 생성
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// 3. 루틴 목록 로드
async function loadRoutines() {
  const { data, error } = await supabaseClient
    .from("routines")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("루틴 로드 실패:", error);
    return;
  }

  renderRoutines(data);
}

// 4. 화면 렌더링
function renderRoutines(routines) {
  const list = document.getElementById("routine-list");
  list.innerHTML = "";

  if (!routines || routines.length === 0) {
    const li = document.createElement("li");
    li.textContent = "등록된 루틴이 없습니다.";
    list.appendChild(li);
    return;
  }

  routines.forEach((routine) => {
    const li = document.createElement("li");
    li.textContent = `${routine.name} (${routine.level ?? "미지정"})`;
    list.appendChild(li);
  });
}

// 5. 시작
loadRoutines();
