import React from 'react';
import "antd/dist/antd.min.css";
import { Space, Table, Tag,Select,Button,Pagination } from 'antd';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {PlusOutlined } from "@ant-design/icons";
import {useNavigate } from "react-router-dom";

export default function Product() {
  
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("/all")
      .then(res=>setProduct(res.data))
      .then(err=>console.log(err))
      
      
  })

  const months= ['Today', 'This Week', 'This Month', 'This Year'];
  const columns = [
    {
      title:'Code',
      dataIndex:'code',
      key:'code'

    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'QTY',
      dataIndex: 'qty',
      key: 'qty',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',

      render: (_,payload) =>
      { 
        let col="Empty" ;
        const l =payload.status;

        if(payload.status==='Active')
        {
          col="green";
        }
        if(payload.status==='Inactive')
        {
          col="red";
        }
        return <p style={{marginTop:"11px",color:col}}>{l}</p>
      } 
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
  ]

  const buttonClick = () => {
     
    navigate('/Product/addproducts');
   };


  return (
    <div  className='product'>
      <div>
       <p style={{color:"black",fontSize:"30px"}}><b>Products &nbsp;</b>
       

       <Button 
        type="default"
        shape="circle"
        size="large"
        icon ={<PlusOutlined style={{
          position:'sticky',
          color:'blue',
          background:'none',
          borderColor:'white',
          fontSize: '20px',
          fontWeight:'bold',
          bottom:'541px',
          left:'432px',
          
        }}/>}
        onClick={buttonClick}>
        </Button>

        <Select  style={{float:"right",width:"200px"}} placeholder='Months' defaultValue={'This Month'} >
          {months.map((month,index)=>{
            return <Select.Option key={index} value={month}></Select.Option>
          })}

        </Select></p>
      </div>
     <Table 
     pagination={{pageSize:5,background:'none'}}
     size="small"
     columns={columns}  
     dataSource={product} />
    </div>
  );
}
