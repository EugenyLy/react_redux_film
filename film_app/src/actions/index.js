export function selectFilm(film) {
    const SELECTED_FILM = 'SELECTED_FILM';
    return {
        type: SELECTED_FILM,
        payload: film
    }
}


