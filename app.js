const documents = [
  { id: "udmi-2026-lan-thu-nam", title: "Định nghĩa Toàn cầu lần thứ năm về Nhồi máu cơ tim", subtitle: "Tuyên bố đồng thuận cập nhật định nghĩa và phân loại nhồi máu cơ tim", group: "Nội khoa", category: "Tim mạch", year: "ESC/ACC/AHA/WHF 2026", file: "udmi-2026-nhoi-mau-co-tim.html", tags: "Định nghĩa Toàn cầu lần thứ năm nhồi máu cơ tim Fifth Universal Definition of Myocardial Infarction UDMI 2026 ESC ACC AHA WHF myocardial infarction MI STEMI NSTEMI troponin tim tổn thương cơ tim thiếu máu cục bộ nhồi máu cơ tim nguyên phát thứ phát liên quan thủ thuật type 1 type 2 PCI CABG ICD-11" },
  { id: "esc-2026-tim-mach-benh-than-man", title: "Khuyến cáo ESC 2026 về quản lý bệnh tim mạch và bệnh thận mạn", subtitle: "Khuyến cáo phối hợp giữa Hội Tim mạch Châu Âu và Hiệp hội Thận học Châu Âu (ERA)", group: "Nội khoa", category: "Tim mạch", year: "ESC 2026", file: "khuyen-cao-esc-2026-tim-mach-benh-than-man.html", tags: "ESC 2026 ERA tim mạch thận học bệnh tim mạch bệnh thận mạn CKD chronic kidney disease cardiorenal eGFR albumin niệu suy tim hội chứng mạch vành rung nhĩ đột quỵ lọc máu ghép thận" },
  { id: "esc-2026-quan-ly-suy-tim", title: "Khuyến cáo ESC 2026 về quản lý bệnh suy tim", subtitle: "Hướng dẫn toàn diện về chẩn đoán, điều trị và quản lý suy tim", group: "Nội khoa", category: "Tim mạch", year: "ESC 2026", file: "khuyen-cao-esc-2026-quan-ly-suy-tim.html", tags: "ESC 2026 suy tim heart failure chẩn đoán điều trị quản lý HFrEF HFpEF suy tim mất bù dự phòng" },
  { id: "acr-gut", title: "Quản lý bệnh gút", subtitle: "Hướng dẫn của Hội Thấp khớp học Hoa Kỳ", group: "Nội khoa", category: "Cơ xương khớp", year: "ACR 2020", file: "acr-2020-quan-ly-benh-gut.html", tags: "gout gút acid uric allopurinol colchicine" },
  { id: "eular-ra", title: "Quản lý viêm khớp dạng thấp", subtitle: "DMARD tổng hợp và sinh học — bản cập nhật 2025", group: "Nội khoa", category: "Cơ xương khớp", year: "EULAR 2025", file: "eular-2025-viem-khop-dang-thap.html", tags: "viêm khớp dạng thấp rheumatoid DMARD sinh học" },
  { id: "va-dod-oa", title: "Thoái hóa khớp háng và gối", subtitle: "Quản lý không phẫu thuật theo hướng dẫn VA/DOD", group: "Nội khoa", category: "Cơ xương khớp", year: "VA/DOD 2026", file: "va-dod-2026-thoai-hoa-khop.html", tags: "thoái hóa khớp háng gối osteoarthritis không phẫu thuật" },
  { id: "hyponatremia", title: "Chẩn đoán và điều trị hạ natri máu", subtitle: "Hướng dẫn thực hành lâm sàng", group: "Nội khoa", category: "Thận - Tiết niệu - Điện giải", year: "2014", file: "ha-natri-mau-2014.html", tags: "hạ natri máu hyponatremia điện giải natri" },
  { id: "ukka-2026-tang-kali-mau-cap", title: "Khuyến cáo UKKA 2026 về điều trị tăng kali máu cấp ở người lớn", subtitle: "Khuyến cáo thực hành lâm sàng của Hiệp hội Thận học Vương quốc Anh", group: "Nội khoa", category: "Thận - Tiết niệu - Điện giải", year: "UKKA 2026", file: "ukka-2026-tang-kali-mau-cap.html", tags: "tăng kali máu cấp hyperkalaemia hyperkalemia UKKA 2026 UK Kidney Association Hiệp hội Thận học Vương quốc Anh kali potassium điện giải cấp cứu điện tâm đồ ECG canxi gluconat calcium gluconate insulin glucose salbutamol natri bicarbonat patiromer natri zirconium cyclosilicate SZC nhựa trao đổi ion lọc máu thận nhân tạo bệnh thận mạn CKD tổn thương thận cấp AKI ngừng tim hồi sinh tim phổi" },
];

const taxonomy = [
  { name: "Nội khoa", children: [
    { name: "Cấp cứu" },
    { name: "Hồi sức tích cực" },
    { name: "Chống độc" },
    { name: "Tim mạch" },
    { name: "Hô hấp" },
    { name: "Nội tiết" },
    { name: "Tiêu hóa" },
    { name: "Thận - Tiết niệu - Điện giải" },
    { name: "Cơ xương khớp" },
    { name: "Truyền nhiễm và các bệnh nhiệt đới" },
    { name: "Dị ứng - Miễn dịch lâm sàng" },
    { name: "Huyết học truyền máu" },
    { name: "Thần kinh" },
  ] },
  { name: "Nhi khoa", children: [] },
  { name: "Cận lâm sàng", children: [
    { name: "Siêu âm", children: [
      { name: "Siêu âm tổng quát" },
      { name: "Siêu âm tim" },
      { name: "Siêu âm cơ xương khớp" },
    ] },
    { name: "X-Quang" },
    { name: "CT/MRI" },
    { name: "ECG" },
    { name: "Khí máu động mạch" },
  ] },
];

const groupColors = { "Nội khoa": "#39797d", "Nhi khoa": "#c0703e", "Cận lâm sàng": "#6d65a8" };
const colors = {
  "Tim mạch": "#be5c50",
  "Cơ xương khớp": "#98743e",
  "Thận - Tiết niệu - Điện giải": "#2f7f86",
  "Cấp cứu": "#b8503f",
  "Hồi sức tích cực": "#a14c52",
  "Hô hấp": "#3f7f9c",
  "Nội tiết": "#8a6a2f",
  "Tiêu hóa": "#7d7a35",
  "Thần kinh": "#6b6198",
};

/* Bảng tra: chuyên mục con -> nhóm, và chuyên mục cha -> danh sách con */
const parentOf = {};
const groupOf = {};
const descendants = {};
taxonomy.forEach((group) => {
  const walk = (node, parent) => {
    groupOf[node.name] = group.name;
    if (parent) parentOf[node.name] = parent;
    descendants[node.name] = [node.name];
    (node.children || []).forEach((child) => {
      walk(child, node.name);
      descendants[node.name] = descendants[node.name].concat(descendants[child.name]);
    });
  };
  (group.children || []).forEach((child) => walk(child, null));
});

const state = { query: "", group: null, category: null, current: null };
const $ = (selector) => document.querySelector(selector);

function normalize(value) {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function colorOf(doc) {
  return colors[doc.category] || groupColors[doc.group] || "#39797d";
}

function visibleDocuments() {
  const q = normalize(state.query.trim());
  const allowed = state.category ? descendants[state.category] || [state.category] : null;
  return documents.filter((doc) => {
    if (state.group && doc.group !== state.group) return false;
    if (allowed && !allowed.includes(doc.category)) return false;
    if (!q) return true;
    return normalize(`${doc.title} ${doc.subtitle} ${doc.group} ${doc.category} ${doc.year} ${doc.tags}`).includes(q);
  });
}

function countFor(name, isGroup) {
  return documents.filter((doc) => (isGroup ? doc.group === name : (descendants[name] || [name]).includes(doc.category))).length;
}

function renderMenu() {
  $("#menuBar").innerHTML = taxonomy.map((group) => {
    const active = state.group === group.name;
    const rows = (group.children || []).map((child) => renderMenuRow(child, 0)).join("");
    const panel = rows ? `<div class="menu-panel" role="menu">${rows}</div>` : "";
    return `<div class="menu-item${rows ? " has-panel" : ""}" data-group="${group.name}">
      <button class="chip${active ? " active" : ""}" type="button" data-group="${group.name}"${rows ? ' aria-haspopup="true" aria-expanded="false"' : ""}>
        <span>${group.name}</span>${rows ? '<span class="caret" aria-hidden="true">▾</span>' : ""}
      </button>${panel}
    </div>`;
  }).join("");

  document.querySelectorAll(".menu-item").forEach((item) => {
    const button = item.querySelector(".chip");
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      if (item.classList.contains("has-panel") && !item.classList.contains("open")) {
        openPanel(item);
      } else {
        closePanels();
        setFilter(button.dataset.group, null);
      }
    });
    item.addEventListener("mouseenter", () => { if (matchMedia("(hover: hover) and (pointer: fine)").matches) openPanel(item); });
    item.addEventListener("mouseleave", () => { if (matchMedia("(hover: hover) and (pointer: fine)").matches) closePanels(); });
    item.querySelectorAll(".menu-row").forEach((row) => row.addEventListener("click", (event) => {
      event.stopPropagation();
      closePanels();
      setFilter(row.dataset.group, row.dataset.category);
    }));
  });
}

function renderMenuRow(node, depth) {
  const group = groupOf[node.name];
  const count = countFor(node.name, false);
  const own = `<button class="menu-row${depth ? " nested" : ""}${state.category === node.name ? " active" : ""}" type="button" role="menuitem" data-group="${group}" data-category="${node.name}">
      <span>${node.name}</span><span class="menu-count">${count || ""}</span>
    </button>`;
  const kids = (node.children || []).map((child) => renderMenuRow(child, depth + 1)).join("");
  return own + kids;
}

function openPanel(item) {
  closePanels();
  if (!item.classList.contains("has-panel")) return;
  item.classList.add("open");
  item.querySelector(".chip").setAttribute("aria-expanded", "true");
}

function closePanels() {
  document.querySelectorAll(".menu-item.open").forEach((item) => {
    item.classList.remove("open");
    const button = item.querySelector(".chip");
    if (button) button.setAttribute("aria-expanded", "false");
  });
}

function setFilter(group, category) {
  const sameGroup = state.group === group && !category && !state.category;
  const sameCategory = category && state.category === category;
  if (sameGroup || sameCategory) {
    state.group = null;
    state.category = null;
  } else {
    state.group = group || null;
    state.category = category || null;
  }
  if (state.current) showHome();
  renderMenu();
  renderCards();
}

function renderCards() {
  const matches = visibleDocuments();
  const label = state.category || state.group;
  const filter = $("#activeFilter");
  filter.hidden = !label;
  if (label) filter.innerHTML = `<span>Đang lọc: <strong>${label}</strong></span><span class="clear" aria-hidden="true">✕</span>`;
  $("#resultCount").textContent = `${matches.length} tài liệu`;
  $("#emptyState").hidden = matches.length > 0;
  $("#cardGrid").innerHTML = matches.map((doc) => `
    <article class="doc-card" role="button" tabindex="0" data-id="${doc.id}" style="--category-color:${colorOf(doc)}">
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

function openDocument(id, updateHistory = true) {
  const doc = documents.find((item) => item.id === id);
  if (!doc) return showHome(updateHistory);
  state.current = id;
  closePanels();
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

$("#titleSearch").addEventListener("input", (event) => {
  state.query = event.target.value;
  if (state.current) showHome();
  renderCards();
});
$("#activeFilter").addEventListener("click", () => {
  state.group = null;
  state.category = null;
  renderMenu();
  renderCards();
});
$("#backButton").addEventListener("click", () => showHome());
$("#themeButton").addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("medguide-theme", next);
});
document.addEventListener("click", () => closePanels());
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("#titleSearch").focus(); }
  if (event.key === "Escape") closePanels();
});
window.addEventListener("popstate", () => {
  const id = new URLSearchParams(location.search).get("doc");
  id ? openDocument(id, false) : showHome(false);
});

document.documentElement.dataset.theme = localStorage.getItem("medguide-theme") || "light";
if ($("#documentCount")) $("#documentCount").textContent = documents.length;
renderMenu();
renderCards();
const initialId = new URLSearchParams(location.search).get("doc");
if (initialId) openDocument(initialId, false);
// MEDGUIDE build: single search box in the filter bar
