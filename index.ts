export function getUploadPath(path: string): string {
    return path.split('/').slice(1).join('/');
}
