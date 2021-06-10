import React from 'react';
import {PageTitleContainer, PageTitleStyled} from './PageTitle.style'

interface PageTitleProps{
    title:string;
    subtitle:string;
}

const PageTitle: React.FC<PageTitleProps> = (props) =>{
    return (
    <PageTitleContainer>
        <PageTitleStyled>{props.title}</PageTitleStyled>
        
        {props.subtitle}
    </PageTitleContainer>
    );
   
    
}
export default PageTitle;