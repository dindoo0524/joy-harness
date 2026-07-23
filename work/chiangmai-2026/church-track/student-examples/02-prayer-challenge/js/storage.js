// CORE AREA
// 이 함수들의 이름과 반환 구조는 변경하지 마세요.
// 이 폴더만의 예시 데이터를 쓰기 위해 example별로 다른 key를 씁니다.
// (file:// 로 연 여러 예시가 브라우저에서 저장소를 공유해 기록이 섞이는 것을 막기 위함 — DEMO ONLY 목적의 조정)
const STORAGE_KEY = "challenge-log-records__02-prayer-challenge";

const Storage = {
  // 저장된 기록 전체를 불러옵니다. 실패하면 빈 배열을 돌려줍니다.
  loadRecords() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.warn("기록을 불러오지 못했습니다.", error);
      return [];
    }
  },

  // 기록 배열 전체를 저장합니다.
  saveRecords(records) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch (error) {
      console.warn("기록을 저장하지 못했습니다.", error);
    }
  },

  // 새 기록 하나를 추가합니다. 빈 문자열이면 저장하지 않고 null을 돌려줍니다.
  addRecord(text) {
    const trimmed = (text || "").trim();
    if (!trimmed) return null;

    const records = Storage.loadRecords();
    const record = {
      id: Storage.generateId(),
      text: trimmed,
      createdAt: new Date().toISOString(),
      completed: false,
    };

    records.push(record);
    Storage.saveRecords(records);
    return record;
  },

  // id가 일치하는 기록의 완료 상태를 뒤집습니다(체크 ↔ 체크 해제).
  // 성공하면 바뀐 기록을, 없으면 null을 돌려줍니다.
  toggleComplete(id) {
    const records = Storage.loadRecords();
    const record = records.find((item) => item.id === id);
    if (!record) return null;

    record.completed = !record.completed;
    Storage.saveRecords(records);
    return record;
  },

  generateId() {
    return `r_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  },

  // id가 일치하는 기록 하나를 지웁니다.
  // 성공하면 { record, index }를 돌려주고(되돌리기에 사용), 없으면 null을 돌려줍니다.
  deleteRecord(id) {
    const records = Storage.loadRecords();
    const index = records.findIndex((record) => record.id === id);
    if (index === -1) return null;

    const [removed] = records.splice(index, 1);
    Storage.saveRecords(records);
    return { record: removed, index };
  },

  // 지웠던 기록을 원래 있던 자리(index)에 되돌립니다.
  restoreRecord(record, index) {
    const records = Storage.loadRecords();
    const insertAt = Math.min(index, records.length);
    records.splice(insertAt, 0, record);
    Storage.saveRecords(records);
  },
};
