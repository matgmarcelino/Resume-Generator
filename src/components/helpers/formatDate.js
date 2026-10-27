export function formatDate(value) {
    if (!value) return "";
    const [year, month] = value.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
    });
}

export function joinDate(year, month) {
    if (!year || !month) return "";
    return `${year}-${month}`;
}