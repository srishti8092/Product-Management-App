import './App.css';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from 'react-router-dom';

import { Home } from "./components/Home";
import Product from './components/Product.js';
import { AddProduct } from "./components/AddProduct";
const { Header, Sider, Content } = Layout;




function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Header style={{color:"white",background:"#3265fa",paddingInline:"25px",display:"flex",justifyContent:"space-between"}}>
          <NavLink to = '/' style={{color:"white"}}><h3><b style={{color:"white"}}>Rubick.ai</b></h3></NavLink>
          <div><Avatar  icon={<UserOutlined />} /> Admin</div>
          </Header>
          <Layout style={{height:"30px",backgroundColor:"white"}}>
            <Sider style={{backgroundColor:"white",paddingInline:"20px",height:"100vh",position:"absolute"}}>
              <ul>
                <li><NavLink to="/home"  style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Home</NavLink></li>
                <li><NavLink to="/Product" style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Products</NavLink></li>
                <li><NavLink to='/settings' style={({isActive})=>{return {color:isActive?'#345aee':'#89898b'}}}>Settings</NavLink></li>
              </ul>
            </Sider>
            <Content style={{marginLeft:"200px",width:"100%",backgroundColor:"#DCDCDC",paddingInline:"40px",height:"120vh",paddingBlock:"150px",wordWrap:"break-word"}}>
                <Routes>
                  <Route path = '/home' element={<Home />} />
                  <Route path ='/Product' element={<Product/>}/>
                  <Route path="/Product/addproducts" element={<AddProduct/>}></Route>
                </Routes>
            </Content>
          </Layout>
        </Layout>
      </Router>
      
    
    </div>
      
  );
}

export default App;
