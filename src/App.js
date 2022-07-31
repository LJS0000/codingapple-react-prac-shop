import './App.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from './routes/Data';
import Detail from './Detail';
import {Routes, Route, Link, Outlet} from 'react-router-dom'
import axios from 'axios';
import Cart from './routes/Cart'

export let Context1 = createContext();

function App() {

let [pen, setPen] = useState(data);
let [stock] = useState([10,11,12]);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">JisuMall</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="navmenu">
              홈
            </Link>
            <Link to="/detail" className="navmenu">
              상세페이지
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg" />
              <div>
                <Container className="rows">
                  <Row>
                    {pen.map((a, i) => {
                      return <Card pen={pen[i]} />
                    })}
                  </Row>
                </Container>
              </div>
              <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{
                  let newarr = [...pen, ...result.data]
                  setPen(newarr);})
                
                // axios.post('/',{name:'jisu'})
                // Promise.all([axios.get('/url1'), axios.get('/url2')])
                // .then(()=>{})
                // fetch('링크')
                // .then(result=>result.json())
                // .then(data=>{})

              }}>버튼</button>

            </>
          }
        />
        <Route path="/detail/:id" element={
          <Context1.Provider value={{stock}}>
            <Detail pen={pen}/>
          </Context1.Provider>
        } />

        <Route path='/cart' element={<Cart/>}/>

        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버다</div>}/>
          <Route path="location" element={<div>위치다</div>}/>
        </Route>

        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문 시 양배추즙 서비스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>
          
        <Route path="*" element={<div>이 페이지는 없어요</div>} />
      </Routes>
    </div>
  )
}

function Card(props){
  return (
    <Col sm>
        <img src='https://norangage.com/web/product/big/202203/50b6d71dc21a4213dcf0941ad8a541a5.png' width='80%'/>
        <h4>{props.pen.title}</h4>
        <p>{props.pen.content}</p>
    </Col>
  )
}

function About(){
  return(
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return(
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
