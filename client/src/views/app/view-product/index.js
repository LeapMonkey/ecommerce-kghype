import styled from 'styled-components';
import { AdminTable, AdminTd, AdminTh, AdminTr } from 'components/admin-table';
import { Heading } from 'components/heading';
import InputDark from 'components/input-dark';
import Button from 'components/button';

const HeadingStyle = {
    textAlign:"left"
}

const SaveStyle = {
    backgroundColor:"#6F4FF2",
    borderRadius:"15px",
    fontSize:"18px"
}

export default function ViewProductPage () {
    return(
        <>
        <Heading style={HeadingStyle}>Products</Heading>
        <Wrapper>
        <AdminTable>
            <thead>
               <AdminTr>
               <AdminTh>
                    Order ID
                </AdminTh>
                <AdminTh>
                    Product
                </AdminTh>
                <AdminTh>
                    Size
                </AdminTh>
                <AdminTh>
                    Amount
                </AdminTh>
                <AdminTh>
                    Price
                </AdminTh>
                <AdminTh>
                    Customer
                </AdminTh>
                <AdminTh>
                    Date Income
                </AdminTh>
                <AdminTh>
                    Action
                </AdminTh>
               </AdminTr>
            </thead>
            <tbody>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
               <AdminTr>
               <AdminTd>
                    19201
                </AdminTd>
                <AdminTd>
                    Apple Cinema 30
                </AdminTd>
                <AdminTd>
                    5
                </AdminTd>
                <AdminTd>
                    345
                </AdminTd>
                <AdminTd>
                    $560
                </AdminTd>
                <AdminTd>
                    John Doe
                </AdminTd>
                <AdminTd>
                    09/04/2022
                </AdminTd>
                <AdminTd>
                    Edit
                </AdminTd>
               </AdminTr>
            </tbody>
        </AdminTable>
        <FilterForm>
            <Heading style={HeadingStyle}>Filter</Heading>
            <InputDark label='Username' placeholder='Enter username'/>
            <InputDark label='Email' placeholder='Enter user Email'/>
            <InputDark label='Group' placeholder='Enter user group'/>
            <InputDark label='Status' placeholder='Enter user status'/>
            <InputDark label='Date' placeholder='Enter Date added'/>
            <ButtonWrapper>
                <Button style={SaveStyle} text="Filter" />
            </ButtonWrapper>
        </FilterForm>
        </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display:flex;
    flex-direction:row;
`

const FilterForm = styled.form`
    padding-left:50px;
    width:100%;
    max-width:450px;
`

const ButtonWrapper = styled.div`
    padding-top:50px;
`