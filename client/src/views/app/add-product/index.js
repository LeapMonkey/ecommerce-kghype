import { Heading } from 'components/heading';
import InputDark from 'components/input-dark';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import { Flower1, Trash3Fill } from "react-bootstrap-icons";
import { PlusCircle } from "react-bootstrap-icons";
import Button from 'components/button';
import WareHousePage from 'views/public/warehouse';

const InputStyle = {
    backgroundColor:"#131129"
}

const HeadingStyle = {
    textAlign:"left",
    paddingBottom:"30px"
}

const addSaveStyle = {
    backgroundColor:"#6F4FF2",
    padding:"5px",
    width:"30px",
    margin:"5px"
}

const deleteSaveStyle = {
    backgroundColor:"#DC3546",
    padding:"5px",
    width:"30px",
    margin:"5px"
}

const header = {
    display:"flex",
    justifyContent: ""

}
export default function AddProduct () {
    return(
       <>
       <div className={header}>
            <Heading style={HeadingStyle}>Add Product</Heading>
            <div>
                <Button style={addSaveStyle} text={<PlusCircle />}></Button>
                <Button style={deleteSaveStyle} text={<Trash3Fill />}></Button>
            </div>
        </div>
            <Tabs>
                <TabList>
                    <Tab>General</Tab>
                    <Tab>Data</Tab>
                    <Tab>Links</Tab>
                    <Tab>Attribute</Tab>
                    <Tab>Option</Tab>
                    <Tab>Recurting</Tab>
                    <Tab>Discount</Tab>
                    <Tab>Special</Tab>
                    <Tab>Image</Tab>
                    <Tab>Rewards</Tab>
                </TabList>
                <TabPanel>
                    <InputDark style={InputStyle} label='Customer Group'/>
                    <InputDark style={InputStyle} label='Firstname'/>
                    <InputDark style={InputStyle} label='Lastname'/>
                    <InputDark style={InputStyle} label='Email'/>
                    <InputDark style={InputStyle} label='Telephone'/>
                    <InputDark style={InputStyle} label='Password'/>
                    <InputDark style={InputStyle} label='Confirm'/>
                </TabPanel>
                <TabPanel>
                    <InputDark style={InputStyle} label='Company'/>
                    <InputDark style={InputStyle} label='Website'/>
                    <InputDark style={InputStyle} label='Tracking Code'/>
                    <InputDark style={InputStyle} label='Commission'/>
                    <InputDark style={InputStyle} label='TaxID'/>
                    <InputDark style={InputStyle} label='Payment Method'/>
                    <InputDark style={InputStyle} label='Status'/>
                </TabPanel>
                <TabPanel>
                <InputDark style={InputStyle} label='Company'/>
                    <InputDark style={InputStyle} label='Website'/>
                    <InputDark style={InputStyle} label='Tracking Code'/>
                    <InputDark style={InputStyle} label='Commission'/>
                    <InputDark style={InputStyle} label='TaxID'/>
                    <InputDark style={InputStyle} label='Payment Method'/>
                    <InputDark style={InputStyle} label='Status'/>
                </TabPanel>
                <TabPanel>
                <InputDark style={InputStyle} label='Company'/>
                    <InputDark style={InputStyle} label='Website'/>
                    <InputDark style={InputStyle} label='Tracking Code'/>
                    <InputDark style={InputStyle} label='Commission'/>
                    <InputDark style={InputStyle} label='TaxID'/>
                    <InputDark style={InputStyle} label='Payment Method'/>
                    <InputDark style={InputStyle} label='Status'/>
                </TabPanel>
                <TabPanel>
                    <InputDark style={InputStyle} label='Company'/>
                    <InputDark style={InputStyle} label='Website'/>
                    <InputDark style={InputStyle} label='Tracking Code'/>
                    <InputDark style={InputStyle} label='Commission'/>
                    <InputDark style={InputStyle} label='TaxID'/>
                    <InputDark style={InputStyle} label='Payment Method'/>
                    <InputDark style={InputStyle} label='Status'/>
                </TabPanel>
                <TabPanel>
                    <InputDark style={InputStyle} label='Company'/>
                    <InputDark style={InputStyle} label='Website'/>
                    <InputDark style={InputStyle} label='Tracking Code'/>
                    <InputDark style={InputStyle} label='Commission'/>
                    <InputDark style={InputStyle} label='TaxID'/>
                    <InputDark style={InputStyle} label='Payment Method'/>
                    <InputDark style={InputStyle} label='Status'/>
                </TabPanel>
                <TabPanel>
                    <InputDark style={InputStyle} label='Company'/>
                    <InputDark style={InputStyle} label='Website'/>
                    <InputDark style={InputStyle} label='Tracking Code'/>
                    <InputDark style={InputStyle} label='Commission'/>
                    <InputDark style={InputStyle} label='TaxID'/>
                    <InputDark style={InputStyle} label='Payment Method'/>
                    <InputDark style={InputStyle} label='Status'/>
                </TabPanel>
                <TabPanel>
                      <InputDark style={InputStyle} label='Company'/>
                    <InputDark style={InputStyle} label='Website'/>
                    <InputDark style={InputStyle} label='Tracking Code'/>
                    <InputDark style={InputStyle} label='Commission'/>
                    <InputDark style={InputStyle} label='TaxID'/>
                    <InputDark style={InputStyle} label='Payment Method'/>
                    <InputDark style={InputStyle} label='Status'/>
                </TabPanel>
                <TabPanel>
                  <InputDark style={InputStyle} label='Company'/>
                    <InputDark style={InputStyle} label='Website'/>
                    <InputDark style={InputStyle} label='Tracking Code'/>
                    <InputDark style={InputStyle} label='Commission'/>
                    <InputDark style={InputStyle} label='TaxID'/>
                    <InputDark style={InputStyle} label='Payment Method'/>
                    <InputDark style={InputStyle} label='Status'/>
                </TabPanel>
                <TabPanel>
                <InputDark style={InputStyle} label='Company'/>
                    <InputDark style={InputStyle} label='Website'/>
                    <InputDark style={InputStyle} label='Tracking Code'/>
                    <InputDark style={InputStyle} label='Commission'/>
                    <InputDark style={InputStyle} label='TaxID'/>
                    <InputDark style={InputStyle} label='Payment Method'/>
                    <InputDark style={InputStyle} label='Status'/>
                </TabPanel>
            </Tabs>
       </>
    )
}