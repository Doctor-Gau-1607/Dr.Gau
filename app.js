const documents = [
  { id: "esc-2026-tim-mach-benh-than-man", title: "Khuyến cáo ESC 2026 về quản lý bệnh tim mạch và bệnh thận mạn", subtitle: "Khuyến cáo phối hợp giữa Hội Tim mạch Châu Âu và Hiệp hội Thận học Châu Âu (ERA)", category: "Tim mạch", year: "ESC 2026", file: "khuyen-cao-esc-2026-tim-mach-benh-than-man.html", tags: "ESC 2026 ERA tim mạch thận học bệnh tim mạch bệnh thận mạn CKD chronic kidney disease cardiorenal eGFR albumin niệu suy tim hội chứng mạch vành rung nhĩ đột quỵ lọc máu ghép thận" },
  { id: "esc-2026-quan-ly-suy-tim", title: "Khuyến cáo ESC 2026 về quản lý bệnh suy tim", subtitle: "Hướng dẫn toàn diện về chẩn đoán, điều trị và quản lý suy tim", category: "Tim mạch", year: "ESC 2026", file: "khuyen-cao-esc-2026-quan-ly-suy-tim.html", tags: "ESC 2026 suy tim heart failure chẩn đoán điều trị quản lý HFrEF HFpEF suy tim mất bù dự phòng" },
  { id: "acr-gut", title: "Quản lý bệnh gút", subtitle: "Hướng dẫn của Hội Thấp khớp học Hoa Kỳ", category: "Cơ xương khớp", year: "ACR 2020", file: "acr-2020-quan-ly-benh-gut.html", tags: "gout gút acid uric allopurinol colchicine" },
  { id: "eular-ra", title: "Quản lý viêm khớp dạng thấp", subtitle: "DMARD tổng hợp và sinh học — bản cập nhật 2025", category: "Cơ xương khớp", year: "EULAR 2025", file: "eular-2025-viem-khop-dang-thap.html", tags: "viêm khớp dạng thấp rheumatoid DMARD sinh học" },
  { id: "va-dod-oa", title: "Thoái hóa khớp háng và gối", subtitle: "Quản lý không phẫu thuật theo hướng dẫn VA/DOD", category: "Cơ xương khớp", year: "VA/DOD 2026", file: "va-dod-2026-thoai-hoa-khop.html", tags: "thoái hóa khớp háng gối osteoarthritis không phẫu thuật" },
  { id: "hyponatremia", title: "Chẩn đoán và điều trị hạ natri máu", subtitle: "Hướng dẫn thực hành lâm sàng", category: "Nội khoa", year: "2014", file: "ha-natri-mau-2014.html", tags: "hạ natri máu hyponatremia điện giải natri" },
];

const colors = { "Tim mạch": "#be5c50", "Cơ xương khớp": "#98743e", "Nội khoa": "#39797d", "Dược lý": "#6d65a8" };
const state = { query: "", category: "Tất cả", current: null };
const $ = (selector) => document.querySelector(selector);

function normalize(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function visibleDocuments() {
  const q = normalize(state.query.trim());
  return documents.filter((doc) => {
    const inCategory = state.category === "Tất cả" || doc.category === state.category;
    const haystack = normalize(`${doc.title} ${doc.subtitle} ${doc.category} ${doc.year} ${doc.tags}`);
    return inCategory && (!q || haystack.includes(q));
  });
}

function renderCards() {
  const matches = visibleDocuments();
  $("#resultCount").textContent = `${matches.length} tài liệu`;
  $("#emptyState").hidden = matches.length > 0;
  $("#cardGrid").innerHTML = matches.map((doc) => `
    <article class="doc-card" role="button" tabindex="0" data-id="${doc.id}" style="--category-color:${colors[doc.category]}">
      <div class="card-meta"><span>${doc.category}</span><span>${doc.year}</span></div>
      <h3>${doc.title}</h3>
      <p>${doc.subtitle}</p>
      <div class="card-footer"><span>Đọc tài liệu</span><span class="card-arrow" aria-hidden="true">→</span></div>
    </article>`).join("");
  document.querySelectorAll(".doc-card").forEach((card) => {
    const open = () => openDocument(card.dataset.id);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); } });
  });
}

function renderFilters() {
  const categories = ["Tất cả", ...new Set(documents.map((doc) => doc.category))];
  $("#filterChips").innerHTML = categories.map((category) => `<button class="chip${category === state.category ? " active" : ""}" type="button" data-category="${category}">${category}</button>`).join("");
  document.querySelectorAll(".chip").forEach((chip) => chip.addEventListener("click", () => {
    state.category = chip.dataset.category;
    renderFilters();
    renderCards();
  }));
}

function openDocument(id, updateHistory = true) {
  const doc = documents.find((item) => item.id === id);
  if (!doc) return showHome(updateHistory);
  state.current = id;
  $("#homeView").hidden = true;
  $("#readerView").hidden = false;
  $("#readerCategory").textContent = `${doc.category} · ${doc.year}`;
  $("#readerTitle").textContent = doc.title;
  $("#documentFrame").src = `content/${doc.file}`;
  $("#documentFrame").title = doc.title;
  $("#openButton").href = `content/${doc.file}`;
  document.title = `${doc.title} | MEDGUIDE`;
  if (updateHistory) history.pushState({ id }, "", `?doc=${encodeURIComponent(id)}`);
}

function showHome(updateHistory = true) {
  state.current = null;
  $("#readerView").hidden = true;
  $("#homeView").hidden = false;
  $("#documentFrame").src = "about:blank";
  document.title = "Thư viện Hướng dẫn Y khoa";
  if (updateHistory) history.pushState({}, "", location.pathname);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("#searchInput").addEventListener("input", (event) => {
  state.query = event.target.value;
  if (state.current) showHome();
  renderCards();
});
$("#backButton").addEventListener("click", () => showHome());
$("#themeButton").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("medguide-theme", next);
});
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("#searchInput").focus(); }
});
window.addEventListener("popstate", () => {
  const id = new URLSearchParams(location.search).get("doc");
  id ? openDocument(id, false) : showHome(false);
});

document.documentElement.dataset.theme = localStorage.getItem("medguide-theme") || "light";
$("#documentCount").textContent = documents.length;
renderFilters();
renderCards();
const initialId = new URLSearchParams(location.search).get("doc");
if (initialId) openDocument(initialId, false);
// MEDGUIDE build: ESC 2026 cardiovascular disease and chronic kidney disease guideline
