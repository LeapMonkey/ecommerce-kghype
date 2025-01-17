import styled from 'styled-components';
import { Heading } from "components/heading";
import Input from "components/input";
import { Container } from 'components/container';
import { SharedImage } from 'constants/image-constant';
import ImageWrapper from 'components/image-wrapper';

const HeadingStyle = {
    textAlign: "left"
}

const { Product } = SharedImage;

const ContainerStyle = {
    paddingTop:"100px"
}


const ListCard = () => {
    return (
        <li>
            <Card>
                <ImageWrapper src={Product} alt="product" />
                <p>
                    The CSS Grid Layout Module offers a grid-based layout system, with rows
                </p>
                <InfoWrapper>
                    <Heading>
                        $230
                    </Heading>
                    <span>
                        2 people pay
                    </span>
                </InfoWrapper>
            </Card>
        </li>
    )
}

export default function ProductSearch() {
    return (
        <Container style={ContainerStyle}>
            <Heading style={HeadingStyle}>All Categories : 3210232</Heading>
            <ToolWrapper>
                <Input placeholder='US Dollar' />
                <Input placeholder='US Dollar' />
            </ToolWrapper>
            <CardWrapper>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
                <ListCard/>
            </CardWrapper>
        </Container>
    )
}

const ToolWrapper = styled.div`
    display:flex;
    flex-direction:row;
    gap:50px;
`

const Card = styled.div`
    box-shadow: 0px 41px 27px -27px rgba(116, 155, 169, 0.59);
    max-width:320px;
    padding:20px;
    border:1px solid #D6D5D5;
`

const CardWrapper = styled.ul`
    list-style:none;
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    padding:0px;
    margin:0px;
    padding-top:50px;
    padding-bottom:200px;
    gap:70px;
`

const InfoWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`