/**
 * Import CSS Module Hero/JUMBOTRON.
 * Disimpan di object styles.
 */
import StyledCards from "./Global.styled.js";
import Card from '../Card/index';



function Cards(props){
    /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
    const {covids, title, tag} = props;
    const status = ["Confirmed","Recovered","Deaths"]
    let id = '';


    // console.log(covids);

    return(
        <StyledCards>
            <div>
                <section>
                    <h2>{title}</h2>
                    <p>{tag}</p>
                    <div className="card__container">
                        {
                            covids.map((covid,index) => {
                                id++
                                return <Card key={id}  covid={covid} style={status[index]}/>
                            })
                        }
                    </div>
                </section>
            </div>
        </StyledCards>
    )
}

export default Cards;