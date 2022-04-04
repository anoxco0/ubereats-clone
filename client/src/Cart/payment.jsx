import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css';





export const Payment = () =>{
    const [count,setCount] = useState(1);
    const navigate = useNavigate();
    const countHandle=(value)=>{
        if(value===-1&&count===1){}
        else setCount(count+value)
    }
    const data = JSON.parse(localStorage.getItem('uber'));

    const lastChange = ()=>{
        alert('thank You ')
        navigate('/')
    }


    return (
        <div >
            <div>
                <div>
                    <span style={{margin:'20px'}} className="material-icons-outlined">west</span>
                    <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8b969d35d373b512664b78f912f19abc.svg" alt="" />
                </div>
            </div>
            <div className='bigPaymentbox'>
                <div className='leftPayment'>
                    <div className='payprod'>
                       {data.map((e,i)=>
                           <div key={i}>
                             <div width='100px'> <img width={'100px'} src={e.img} alt="" /> </div>
                             <div style={{display:'flex'}}>
                                 <div style={{margin:"12px"}}>{count}</div>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <span style={{cursor:'pointer'}} onClick={(e)=>countHandle(1)} className="material-icons">arrow_drop_up</span>
                                    <span style={{cursor:'pointer'}} onClick={(e)=>countHandle(-1)} className="material-icons">arrow_drop_down</span>
                                </div>
                             </div>
                             <div><div>title: { e.name}</div>
                             <div>price: {e.price}</div></div>
                             
                           </div>
                       )}
                    </div>
                </div>
                <div className="rightPayment">
                    <button id='pabtn1'onClick={lastChange} >Place order</button>
                    <div style={{fontSize:'12px',lineHeight:'20px',color:'#757575'}}>If you’re not around when the delivery person arrives, they’ll leave your order at the door. By placing your order, you agree to take full responsibility for it once it’s delivered</div>
                    <hr style={{width:'70%'}} />
                    <p width={'70%'}  style={{fontSize:'14px',fontWeight:'500',lineHeight:'16px',background:'#FFFAF0',color:'#996F00',textAlign:'center',margin:'20px 15%',padding:'10px 0'}}>Spend CA$15 for a CA$0 Delivery Fee</p>
                    <div >
                        <div style={{fontSize:'16px',lineHeight:'24px'}}>Subtotal</div>
                        <div style={{fontSize:'16px',lineHeight:'24px'}}>CA${data[0].price}</div>
                    </div>
                    <div >
                        <div style={{fontSize:'16px',lineHeight:'24px'}}>Delivery Fee</div>
                        <div style={{fontSize:'16px',lineHeight:'24px'}}>CA$0.49</div>
                    </div>
                    <div>
                        <div style={{fontSize:'16px',lineHeight:'24px'}}>Service Fee</div>
                        <div style={{fontSize:'16px',lineHeight:'24px'}}>CA$2.00</div>
                    </div>

                    <div>
                        <div style={{fontSize:'16px',lineHeight:'24px'}}>Taxes</div>
                        <div style={{fontSize:'16px',lineHeight:'24px'}}>CA$0.76</div>
                    </div>
                    <hr width='70%'/>
                    <div>
                        <div style={{fontSize:'16px',lineHeight:'20px',fontWeight:'500'}}>Add a tip</div>
                        <div style={{fontSize:'16px',lineHeight:'20px',fontWeight:'500'}}>CA$3.20</div>
                    </div>
                    <div style={{fontSize:'12px',lineHeight:'20px',color:'#757575'}}>Delivery people are critical to our communities at this time. Add a tip to say thanks.</div>
                    <div className='rightbtns'>
                        <button>15%</button>
                        <button>20%</button>
                        <button>25%</button>
                        <button>30%</button>
                        <button>Other</button>
                    </div>
                    <div>
                        <div style={{fontSize:'20px',lineHeight:'28px',fontWeight:'500'}}>Total</div>
                        <div style={{fontSize:'20px',lineHeight:'28px',fontWeight:'500'}}>CA$55.95</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

