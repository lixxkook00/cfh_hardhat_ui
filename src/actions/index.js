export const activeLoading = () => {
    return {
        type: 'ACTVE',
        payload: true,
    }
}

export const removeLoading = () => {
    return {
        type: 'REMOVE',
        payload: false,
    }
}