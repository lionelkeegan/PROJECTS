import StyledImages from "./Summary.styled";

function Images({src, title}){
    return(
        <StyledImages>
            <div>
                <section>
                    <h2>Summary</h2>
                    <p>Data Covid Berdasarkan Statistik {title}</p>
                    <img src={src} alt="gambar statistik" />
                </section>
            </div>
        </StyledImages>
    )
}

export default Images;