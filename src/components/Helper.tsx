export function formatTime(time_ms: number): string {
    const minutes = Math.floor(time_ms / 60000);
    const seconds = Math.floor((time_ms % 60000) / 1000);
    return `${minutes.toString()}:${seconds.toString().padStart(2, '0')}`;
};