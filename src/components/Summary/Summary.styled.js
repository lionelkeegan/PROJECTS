import styled from 'styled-components';

const StyledImages = styled.div`
    margin: 1rem;

    section{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    
    h2{
        color: #06D6A0;
        font-size: 2.44rem;
        font-weight: 500;
    }

    p{
        color:#118AB2;
        margin-bottom: 2rem;
        font-size: 1.3rem;
    }

    img{
        display: block;
        margin: auto;
        width: 75%;
        margin-bottom: 1rem;
    }

    @media (min-width: 768px){
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        img{
            width: 70%;
            display: block;
            margin: auto;
            margin-bottom: 1rem;
        }
    
}
`;

export default StyledImages;