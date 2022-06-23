import styled from 'styled-components';

const StyledImages = styled.div`
    margin: 1rem;

    section{
        display: flex;
        text-align: center;
        flex-direction: column;
    }
    
    h2{
        font-size: 2.44rem;
        font-weight: 500;
        color: #06D6A0;
    }

    p{
        margin-bottom: 2rem;
        font-size: 1.3rem;
        color:#118AB2;
    }

    img{
        display: block;
        width: 75%;
        margin: auto;
        margin-bottom: 1rem;
    }

    @media (min-width: 768px){
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        img{
            display: block;
            width: 70%;
            margin: auto;
            margin-bottom: 1rem;
        }
    
}
`;

export default StyledImages;