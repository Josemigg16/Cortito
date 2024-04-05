export function fixURL (url: string): string {
	if (url.includes('http://') || url.includes('https://')) { return url } else { return `http://${url}` }
}
