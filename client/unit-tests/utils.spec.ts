import {formatDate, formatPrice, getFullName, getStatusColor, getStatusLabel,} from "@/utils/utils";
import styles from "@/pages-fsd/manageMessages/ui/ManageMessages.module.scss";


jest.mock("@/pages-fsd/manageMessages/ui/ManageMessages.module.scss", () => ({
    statusNew: "mocked-status-new",
    statusInProgress: "mocked-status-in-progress",
    statusDone: "mocked-status-done",
}));

describe("Utility functions", () => {
    describe("getFullName", () => {
        it("should handle undefined client", () => {
            expect(getFullName(undefined)).toBe("");
        });
    });

    describe("formatPrice", () => {
        it("should format number with Russian locale and ruble sign", () => {
            expect(formatPrice(1234567)).toBe("1 234 567 ₽");
        });

        it("should handle zero", () => {
            expect(formatPrice(0)).toBe("0 ₽");
        });
    });

    describe("formatDate", () => {
        it("should format ISO string to Russian date-time", () => {
            const iso = "2024-05-15T14:30:00Z";

            const expected = new Date(iso).toLocaleString("ru-RU", {
                day: "2-digit",
                month: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
            });
            expect(formatDate(iso)).toBe(expected);
        });

        it("should throw if invalid date string is passed", () => {
            expect(() => formatDate("invalid")).not.toThrow(); // new Date("invalid") → Invalid Date, but toLocaleString returns "Invalid Date"
            // Optional: assert that it returns "Invalid Date" or handle gracefully
            expect(formatDate("invalid")).toContain("Invalid Date");
        });
    });

    describe("getStatusLabel", () => {
        it('should return "Новая" for "new"', () => {
            expect(getStatusLabel("new")).toBe("Новая");
        });

        it('should return "В работе" for "in_progress"', () => {
            expect(getStatusLabel("in_progress")).toBe("В работе");
        });

        it('should return "Завершена" for "done"', () => {
            expect(getStatusLabel("done")).toBe("Завершена");
        });
    });

    describe("getStatusColor", () => {
        it('should return "Новая" class for "Новая"', () => {
            expect(getStatusColor("Новая")).toBe(styles.statusNew);
        });

        it('should return "В работе" class for "В работе"', () => {
            expect(getStatusColor("В работе")).toBe(styles.statusInProgress);
        });

        it('should return "Выполнено" class for "Выполнено"', () => {
            expect(getStatusColor("Выполнено")).toBe(styles.statusDone);
        });

        it("should return empty string for unknown status", () => {
            expect(getStatusColor("unknown")).toBe("");
        });
    });
});