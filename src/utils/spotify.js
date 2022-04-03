const getAccessToken = () => {
    const queryString = window.location.search
    const params = new URLSearchParams(queryString)
    const accessToken = params.get('access_token')
    const refreshToken = params.get('refresh_token')
    return accessToken
}

export const accessToken = getAccessToken()
