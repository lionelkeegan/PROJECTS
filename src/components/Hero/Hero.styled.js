import styled from 'styled-components'

const StyledHero = styled.div`
  /* small screen*/
    margin: 5rem auto;
    padding: 1rem;

section{
    display: flex;
    flex-direction: column;
    text-align: center;
}

.hero__left{
    margin-bottom: 1rem;
}

h2{
    color: #06D6A0;
    font-size: 2.44rem;
    font-weight: 500;
}

p{
    color:#118AB2 ;
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.hero__description{
    color: #64748B;
    margin-bottom: 1rem;
}

img{
    width: 550px;
}

@media (min-width: 992px){
    max-width: 1200px;

    section{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }

    #hero__left{
        flex-basis: 40%;
    }
    
    #hero__description{
        margin-bottom: 1rem;
    }

    button{
        margin-top: 1rem;
    }
    
    #hero__right{
        flex-basis: 30%;
    }

    img{
      width: 700px
    }
    
}
`;

export default StyledHero;