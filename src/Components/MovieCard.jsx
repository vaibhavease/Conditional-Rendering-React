
function MovieCard({movie}){

    function onLiked(){
        alert("Liked a movie")
    }


    return <div className="movie-Card">
        <div className="movie-Poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onLiked}>♡</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release}</p>
        </div>
    </div>
}

export default MovieCard;