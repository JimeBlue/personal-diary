// Turns "2026-06-12" into the display pieces both the card and details use:
// "12", "Fri" and "Jun 2026".
export const formatDate = (dateString) => {
    const date = new Date(dateString);

    return {
        dayNumber: String(date.getDate()).padStart(2, "0"),
        weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
        monthYear: date.toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        }),
    };
};
