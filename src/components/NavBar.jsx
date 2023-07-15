import React from "react";
import styled from 'styled-components'
function Navbar() {
    return (
        <NavContainer>
            <h2>Navbar <span>Responsive</span></h2>
            <div>
                <a href="/">Home</a>
                <a href="/">Productos</a>
                </div>
                <div>
                <h2>🛒</h2>
                </div>
        
        </NavContainer>


    )
}

export default Navbar

const NavContainer = styled.nav`
h2{
    color: white;
    font-weight: 400;
    span{
        font-weight: Bold;
    }
}
padding: .4rem;
background-color: #333;
display: flex;
align-items: center;
justify-content: space-between;
a{
    color: white;+
    text-decoration: none;
    margin-right: 1rem;
}
`