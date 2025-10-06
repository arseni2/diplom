"use client";
type StorageValue<T> = T | T[];

class LocalStorage {
    /**
     * Получает значение из localStorage по ключу.
     * @param key — ключ, по которому хранится значение
     * @returns значение, приведённое к типу T, или null, если значение отсутствует
     */
    getItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        if (item === null) return null;
        try {
            return JSON.parse(item) as T;
        } catch (e) {
            console.error(`Failed to parse item with key "${key}" from localStorage`, e);
            return null;
        }
    }

    /**
     * Устанавливает значение в localStorage.
     * Если значение по ключу уже существует и является массивом,
     * то новое значение будет добавлено в этот массив.
     * Иначе — перезапишет значение.
     *
     * @param key — ключ
     * @param value — значение для сохранения
     */
    setItem<T>(key: string, value: T): void {
        const existing = this.getItem<StorageValue<T>>(key);

        let newValue: StorageValue<T>;

        if (Array.isArray(existing)) {
            // Если уже есть массив — добавляем новый элемент
            newValue = [...existing, value];
        } else if (existing !== null) {
            // Если есть не-массивное значение — оборачиваем в массив
            newValue = [existing, value];
        } else {
            // Если ничего нет — просто сохраняем как есть
            newValue = [value];
        }

        localStorage.setItem(key, JSON.stringify(newValue));
    }

    /**
     * Удаляет элемент из localStorage.
     * Если значение по ключу — массив, то удаляется **первое вхождение** переданного значения.
     * Если значение не массив — удаляется весь ключ.
     *
     * @param key — ключ
     * @param valueToRemove — значение для удаления из массива (опционально)
     * @returns удалённое значение или null, если ничего не удалено
     */
    deleteItem<T extends {id: string}>(key: string, valueToRemove?: T): T | T[] | null {
        const current = this.getItem<StorageValue<T>>(key);
        if (current === null) return null;

        if (Array.isArray(current)) {
            if (valueToRemove === undefined) {
                localStorage.removeItem(key);
                return current;
            }

            const index = current.findIndex(item =>
                item.id === valueToRemove.id
            );
            console.log(index)
            if (index === -1) return null;

            const updated = [...current];
            const removed = updated.splice(index, 1)[0];

            if (updated.length === 0) {
                localStorage.removeItem(key);
            } else {
                localStorage.setItem(key, JSON.stringify(updated));
            }

            return removed;
        } else {
            localStorage.removeItem(key);
            return current;
        }
    }
}

export const localStorageService = new LocalStorage()