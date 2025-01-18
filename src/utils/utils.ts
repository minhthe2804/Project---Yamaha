export function formatCurrency(currency: number) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0
    }).format(currency)
}

export function formatNumberToSocialStyle(value: number) {
    return new Intl.NumberFormat('en', {
        notation: 'compact',
        maximumFractionDigits: 1
    })
        .format(value)
        .replace('.', ',')
        .toLowerCase()
}

const removeSpecialCharacter = (str: string) => {
    if (!str) return ''
    // eslint-disable-next-line no-useless-escape
    return str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '')
}

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
    return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i-${id}`
}

export const getIdFromNameId = (nameId: string) => {
    const arr = nameId.split('-i-')
    return arr[arr.length - 1]
}

export function generateOrderId() {
    const timestamp = Date.now().toString(36).substring(4) // Lấy một phần của timestamp
    const randomPart = Math.random().toString(36).substring(2, 2)
    return `DH${timestamp}${randomPart}`.toUpperCase()
}

export function getDateString() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0') // Tháng bắt đầu từ 0, nên cần +1
    const day = String(now.getDate()).padStart(2, '0')
    return `${day}/${month}/${year}` // Kết quả: YYYYMMDD
}

export function getTimeString() {
    const now = new Date()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    return `${hours}:${minutes}:${seconds}` // Kết quả: HHMMSS
}

export function getLastPart(value: string | undefined | null): string {
    if (!value) {
        console.warn("getLastPart received an undefined or null value.");
        return ""; // Or some default value
    }

    // Safeguard to ensure value is a string
    if (typeof value !== "string") {
        console.error("getLastPart expects a string but got:", typeof value);
        return "";
    }

    // Original logic
    const parts = value.split("/");
    return parts.includes("") ? parts[parts.length - 2] : parts[parts.length - 1];
}


export const generateCartId = () => {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}
