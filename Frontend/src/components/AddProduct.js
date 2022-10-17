import React from 'react';
import "antd/dist/antd.min.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Form, Button, Input,Switch} from "antd";

export const AddProduct= () => {
  
   const navigate=useNavigate(); 
    const onFinish1=(e)=>
    {    
       let stat
      if(e.Status)
      stat="Active";
      else
      stat="Inactive";

        
       let state = {
        code:e.productCode,
        name:e.PName,
        qty:e.quantity,
        price:e.Price,
        status:stat,
        date:Date()

       }
        
        axios.post("/new",state)
        .then(()=>alert(`Product Added Succesfully`)
        )
        
        .catch(err=>console.log(err))
    }
  

  return (
      
    <div style={{top:'10px',paddingLeft:"20px",paddingTop:"20px",paddingBottom:"200px",height:"200px",width:"550px"}} >
    <h2 className='newproducts'>New Products</h2>
      <header >
        <Form onFinish={onFinish1}
          autoComplete="off"
          labelCol={{ span: 15 }}
          wrapperCol={{ span: 19 }}
          
        
          onFinishFailed={(error) => {
            console.log({ error });
          }}
        >
          
      
          <Form.Item 
            name="productCode"
            label="Product Code"
            rules={[
              {
                required: true,
                message: "Please enter Product Code",
              },
              { pattern:/[0-9]/,
                 message: "Please enter a valid Product Code" },
            ]}
            hasFeedback
          > 
            <Input  style={{width:"500px"}} />
          </Form.Item>

          <Form.Item  
            name="PName"
            label="Product Name"
            rules={[
                {
                  required: true,
                  message: "Please enter Full Name",
                },
                {
                    pattern:/[A-Za-z]/,
                    message:"Please enter a valid Full Name"
                    
                }
                
            
              ]}
            hasFeedback
          >
            <Input style={{paddingLeft:"-1000px",marginTop:"10px",width:"500px"}}  />
          </Form.Item>

          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[
              {
                required: true,
              },
              { min: 1 },
              {
                pattern:/[0-9]/,
                message: "Please enter a valid Quanity" },
              
            ]}
            hasFeedback
          >
            <Input style={{paddingLeft:"-1000px",marginTop:"10px",width:"500px"}}  />
          </Form.Item>

          <Form.Item
            name="Price"
            label="Price"
            rules={[
              {
                required: true,
                message: "Please provide Price"},
                {
                pattern:/[0-9]/,
                message:"Please Provide Correct price"
              },
            ]}
            hasFeedback
          >
          <Input style={{paddingLeft:"-1000px",marginTop:"10px",width:"500px"}} />
          </Form.Item>


          <Form.Item name="Status" label="Status" requiredMark="required">
            
          <Switch checkedChildren='Active' unCheckedChildren='Inactive'  name="status" style={{width:"100px",height:"25px"}}/>    
          </Form.Item>


    

          <Button  onClick={() => navigate("/Product")} type="default" size="large" shape="round" style={{left: '360px', color:'grey',width : '120px',background: "lightgrey"}}>Cancel  </Button>  
        <Button type="primary" size="large" shape="round" htmlType='submit' style={{ left: '450px',width : '120px',background: "#4169e1", borderColor: "#4169e1"}}>Submit</Button> 
          
        </Form>

      </header>
    </div>
  );
}

export default AddProduct;
