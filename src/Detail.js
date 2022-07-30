import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { Nav} from 'react-bootstrap';
import './App.css';
import {Context1} from './../App.js'

function Detail(props){

    let [fade2, setFade2] = useState('')

    let [count,setCount] = useState(0);
    let [alert, setAlert] = useState(true);
    let [num, setNum] = useState('');
    let [tab, setTab] = useState(0);

    useEffect(()=>{
        setTimeout(() => {setFade2("end")}, 100)
        return ()=>setFade2('')
    },[])

    useEffect(()=>{let a = setTimeout(()=>{setAlert(false)}, 2000)},[])

    useEffect(()=>{
        if (isNaN(num) == true){
          window.alert('그러지마세요')
        }
        console.log('hi')
      }, [num])

    let {id} = useParams();
    let sortpen = props.pen.find((x)=>x.id == id)

    return (
      <div className={"container start " + fade2}>
        {alert === true ? <div className="alert alert-warning">2초 이내 구매 시 할인</div> : null}
        {count}
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          버튼
        </button>
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <input
              onChange={(e) => {
                setNum(e.target.value)
              }}
            />
            <h4 className="pt-5">{sortpen.title}</h4>
            <p>{sortpen.content}</p>
            <p>{sortpen.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} pen={props.pen}/>
        
      </div>
    )
  }

function TabContent({tab, pen}){

    let [fade, setFade] = useState('')

    useEffect(() => {
      setTimeout(() => {setFade("end")}, 100)
      return () => {setFade("")}
    }, [tab])

    return <div className={'start '+ fade}>
        {[<div>{pen[0].title}</div>,<div>내용1</div>,<div>내용2</div>][tab]}
    </div>
}
  

  export default Detail