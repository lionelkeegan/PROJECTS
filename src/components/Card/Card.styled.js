import styled from 'styled-components'

const StyledCard = styled.div`
.card{
    background: #fff;
    width: 384px;
    height: 320px;
    margin: 2rem 0;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.title{
    padding-top: 4rem;
    font-weight: 500;
    font-size: 39px;
    color: #073B4C;
}

.card__detail{
    text-decoration: none;
    font-size: 20px;
    font-weight: 400;
    color:#64748B ;
}

.Confirmed{
    font-weight: 700;
    font-size: 50px;
    color: #06D6A0;
}

.Recovered{
    font-weight: 700;
    font-size: 50px;
    color:#118AB2;
}

.Deaths{
    font-weight: 700;
    font-size: 50px;
    color: #EF476F;
}

/* medium screen*/
@media (min-width: 768px){
    .card__container{
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
}

`

export default StyledCard;
