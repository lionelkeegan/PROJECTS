/**
 * import styled
 */
import StyledImages from "./Summary.styled";

function Images({src, title}){

    return(
        // add import to here
        <StyledImages>
            <div>
                <section>
                    <h2>Summary</h2>
                    <p>Data Covid Berdasarkan {title}</p>
                    <img src={src} alt="gambar statistik" />
                </section>
            </div>
        </StyledImages>
    )
}

export default Images;