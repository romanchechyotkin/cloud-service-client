export const sizeFormat = (size: number) => {
    if (size > 1024*1024*1024) {
        return (size/(1024*1024*1024)).toFixed(1)+'gb'
    }
    if (size > 1024*1024) {
        return (size/(1024*1024)).toFixed(1)+'mb'
    }
    if (size > 1024) {
        return (size/(1024)).toFixed(1)+'kb'
    }
    return size+'b'
}
