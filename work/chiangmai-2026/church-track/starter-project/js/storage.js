// CORE AREA
// 이 함수들의 이름과 반환 구조는 변경하지 마세요.
const STORAGE_KEY = "challenge-log-records";

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
    };

    records.push(record);
    Storage.saveRecords(records);
    return record;
  },

  generateId() {
    return `r_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
  },
};
